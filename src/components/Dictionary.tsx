import { Fragment, useEffect, useRef } from 'react';
import { useDictionaryContext } from '../hooks';

export const Dictionary = () => {
	const { data, handleInputValueChange } = useDictionaryContext();
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
		return null;
	}
	return (
		<div className='space-y-7'>
			{data.map((dictionary, i) => (
				<Fragment key={dictionary.word + i}>
					<header className='w-full h-16 flex justify-between'>
						<div className='space-y-2'>
							<h1 className='text-[32px] font-bold dark:text-white'>{dictionary.word}</h1>
							<p className='text-Purplish text-lg'>{dictionary.phonetic}</p>
						</div>
						<button
							className='cursor-pointer'
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
						{dictionary.meanings.map((meaning, i) => (
							<Fragment key={meaning.partOfSpeech + i}>
								<div className='flex items-center'>
									<p className='w-1/12 font-bold text-lg text-LightDark dark:text-white'>{meaning.partOfSpeech}</p>
									<div className='w-9/12 h-[1px] bg-Gray mx-auto dark:bg-VeryGray md:w-10/12' />
								</div>
								<div className='space-y-5'>
									<span className='text-VeryGray'>Meaning</span>
									<ul className='list-inside list-disc space-y-5 text-justify dark:text-white marker:text-Purplish'>
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
										<span className='text-VeryGray w-1/12'>Synonyms</span>
										<div className='w-10/12 text-center'>
											{meaning.synonyms
												.map(syn => syn)
												.map(word => (
													<p
														key={word}
														className='text-Purplish font-bold cursor-pointer hover:underline'
														onClick={() => {
															handleInputValueChange(word);
														}}>
														{word}&nbsp;
													</p>
												))}
										</div>
									</div>
								)}
							</Fragment>
						))}
					</div>
					<div className='w-full h-[1px] bg-Gray' />
					<div className='flex flex-col space-y-2'>
						<span className='underline underline-offset-2 text-VeryGray'>Source</span>
						<div className='flex space-x-2'>
							<a href={dictionary.sourceUrls.map(source => source)[0]} className='text-sm dark:text-white'>
								{dictionary.sourceUrls.map(source => source)}
							</a>
							<img src='/images/icon-new-window.svg' alt='Window' />
						</div>
					</div>
				</Fragment>
			))}
		</div>
	);
};
