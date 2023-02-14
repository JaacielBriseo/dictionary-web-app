import { Fragment, useEffect, useRef } from 'react';
import { useDictionaryContext } from '../hooks';

export const DataRenderer = () => {
	const { data } = useDictionaryContext();
	const audioRef = useRef<HTMLAudioElement>(null);
	useEffect(() => {
		if (data) {
			const dictionary = data[0];
			const audioElement = audioRef.current;

			if (audioElement) {
				audioElement.src = dictionary.phonetics.map(phonetic => phonetic.audio).find(audio => audio.length > 1)!;
				audioElement.load();
			}
		}
	}, [data]);
	if (!data) {
		return <>Loading</>;
	}
	const dictionary = data[0];
	console.log(dictionary);
	return (
		<div className='space-y-7'>
			<header className='w-full h-16 flex justify-between'>
				<div className='space-y-2'>
					<h1 className='text-[32px] font-bold'>{dictionary.word}</h1>
					<p className='text-Purplish text-lg'>{dictionary.phonetic}</p>
				</div>
				<button
					onClick={() => {
						audioRef.current?.play();
					}}>
					<img src='/images/icon-play.svg' alt='Play' />
					<audio ref={audioRef}>
						<source
							src={dictionary.phonetics.map(phonetic => phonetic.audio).find(audio => audio.length > 1)}
							type='audio/mpeg'></source>
					</audio>
				</button>
			</header>
			<div className='space-y-5'>
				{dictionary.meanings.map(meaning => (
					<Fragment key={meaning.partOfSpeech}>
						<div className='flex items-center'>
							<p className='w-1/12 font-bold text-lg text-LightDark'>{meaning.partOfSpeech}</p>
							<div className='w-10/12 h-[1px] bg-Gray mx-auto' />
						</div>
						<div className='space-y-5'>
							<span className='text-VeryGray'>Meaning</span>
							<ul className='list-inside list-disc space-y-5 text-justify marker:text-Purplish'>
								{meaning.definitions.map(definition => (
									<li key={definition.definition}>{definition.definition}</li>
								))}
							</ul>
							<div>
								{meaning.definitions.map(def => {
									if (def.example) {
										return (
											<span key={def.example} className='text-VeryGray'>
												"{def.example}"
											</span>
										);
									} else {
										return null;
									}
								})}
							</div>
						</div>
						{meaning.synonyms.length >= 1 && (
							<div className='w-full flex'>
								<span className='text-VeryGray W-4/12'>Synonyms</span>
								<span className='w-1/2 mx-auto text-Purplish font-bold'>{meaning.synonyms.map(syn => syn)}</span>
							</div>
						)}
					</Fragment>
				))}
			</div>
			<div className='w-full h-[1px] bg-Gray' />
			<div className='flex flex-col space-y-2'>
				<span className='underline underline-offset-2 text-VeryGray'>Source</span>
				<span>{dictionary.sourceUrls.map(source => source)}</span>
			</div>
		</div>
	);
};
