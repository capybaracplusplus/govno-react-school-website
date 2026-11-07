import "./Header.css";
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import faviconSrc from "./favicon.png"
import { useState } from 'react';

export interface ButtonProps {
    name: string;
    link: string;
    className: string;
}

export function Button(props: ButtonProps) {
    const location = useLocation();
    const isActive = location.pathname === props.link;

    return (
        <>
            <NavLink className={`mybutton ${isActive ? 'active' : ''} ${props.className}`} to={props.link}>
                {props.name}
            </NavLink>
        </>
    )
}

Button.defaultProps = {
    className: ""
};

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const clickBtnMenu = () => {
        setIsOpen((previousIsOpen) => !previousIsOpen);
    }
    return (
        <header>
            <nav className=' p-5'>
                <div className="space-x-8 container mx-auto flex justify-center items-center">

                    <img className="mr-0.6" src={faviconSrc} alt="Company Logo"></img>

                    <button
                        id="menu-btn"
                        type="button"
                        className="block md:hidden focus:outline-none"
                        onClick={clickBtnMenu}
                        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                    <div className="hidden md:flex space-x-8 ml-auto pr-10">
                        <Button name="Главная" link="/" />
                        <Button name="О нас" link="/about" />
                        <Button name="Обучение" link="/education" />
                        <Button name="Педсостав" link="/staff" />
                        <Button name="Вакансии" link="/vacancies" />
                        <Button name="Новости" link="/news" />
                        <Button name="Контакты" link="/contacts" />
                        <Button name="Авторизоваться" link="/login" />
                    </div>

                    <div className='hidden md:flex space-x-4 ml-8'>
                        <a target="_blank" className="icon_h" href="https://discord.com/">
                            <img src="https://img.icons8.com/?size=50&id=25627&format=png" alt="DS icon"></img>
                        </a>
                        <a target="_blank" className="icon_h" href="https://web.telegram.org/a/">
                            <img src="https://img.icons8.com/?size=50&id=9R1sV3QvY18K&format=png" alt="TG icon"></img>
                        </a>
                        <a target="_blank" className="icon_h" href="https://vk.com/">
                            <img src="https://img.icons8.com/?size=50&id=38514&format=png" alt="VK icon"></img>
                        </a>
                    </div>

                </div>

            </nav>

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden bg-white shadow-md"
                    onClick={() => setIsOpen(false)}
                >
                    <Button className="block px-4 py-2" name="Главная" link="/" />
                    <Button className="block px-4 py-2" name="О нас" link="/about" />
                    <Button className="block px-4 py-2" name="Обучение" link="/education" />
                    <Button className="block px-4 py-2" name="Педсостав" link="/staff" />
                    <Button className="block px-4 py-2" name="Вакансии" link="/vacancies" />
                    <Button className="block px-4 py-2" name="Новости" link="/news" />
                    <Button className="block px-4 py-2" name="Контакты" link="/contacts" />
                    <Button className="block px-4 py-2" name="Авторизоваться" link="/login" />
                </div>
            )}


        </header>
    );
}

export default Header;
