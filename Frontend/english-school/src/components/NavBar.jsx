import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import defaultAvatarM from '/default-avatar-m.png'; // путь к дефолтному аватару

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center p-4 bg-[#9feabb] sticky top-0 z-50">
			<h1 className="text-2xl font-extrabold">
				<Link to="/">
					<span className="text-green-800">WORD</span>
					<span className="text-black">FLOW</span>
				</Link>
			</h1>

			<div className="flex items-center space-x-6 pr-10">
				<Link
					to="/"
					className="py-2 text-black border-0 hover:font-bold hover:border-b-2 transition">
					Главная
				</Link>

				{useAuth().user ? (
					<Link to="/profile">
						<img
							src={useAuth().user.avatar || defaultAvatarM}
							alt="Профиль"
							className="w-8 h-8 rounded-full object-cover border border-gray-300"
						/>
					</Link>
				) : (
					<Link
						to="/login"
						className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">
						Войти
					</Link>
				)}
			</div>
		</nav>
	);
}
