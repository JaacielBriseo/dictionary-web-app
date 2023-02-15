import { useTheme } from '../hooks';
interface Props {
	className?: string;
}
export const ThemeToggler: React.FC<Props> = ({ className }) => {
	const { setTheme, theme } = useTheme();
	const toggleClass = ' transform translate-x-6';
	const toggleDarkMode = () => {
		setTheme(current => (current === 'light' ? 'dark' : 'light'));
	};
	return (
		<div className={`flex flex-col justify-center items-center ${className}`}>
			<div
				className='md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#979797] dark:bg-Purplish rounded-full p-1 cursor-pointer'
				onClick={toggleDarkMode}>
				<div
					className={`bg-white w-[14px] h-[14px] md:w-6 md:h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
						theme !== 'dark' ? null : toggleClass
					}`}></div>
			</div>
		</div>
	);
};
