import { useEffect, useRef } from 'react';
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
	return (
		<div>
			<header className='w-full h-16 flex justify-between'>
				<div>
					<h1 className='text-5xl'>{dictionary.word}</h1>
					<p>{dictionary.phonetic}</p>
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
		</div>
	);
};
