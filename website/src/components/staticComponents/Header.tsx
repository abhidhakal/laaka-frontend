import { useState } from 'react';
import '../styles/header.css';

interface HeaderProps {
    onSectionChange: (section: string) => void;
}

function Header({ onSectionChange }: HeaderProps) {
    const [showForm, setShowForm] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleGetStartedClick = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
        setIsLogin(true);
    };

    const switchToSignup = () => {
        setIsLogin(false);
    };

    const switchToLogin = () => {
        setIsLogin(true);
    };

    const navigateToPage = (section: string) => {
        onSectionChange(section);
    };

    return (
        <header className="header">
            <div className="left-section">
                <img src="../public/assets/logos/logo_slogan_large.svg" alt="Laaka" onClick={() => navigateToPage('logotomain')}/>
            </div>
            <div className="mid-section">
                <p className="cats" onClick={() => navigateToPage('trending')}>TRENDING</p>
                <p className="cats" onClick={() => navigateToPage('brands')}>BRANDS</p>
                <p className="cats" onClick={() => navigateToPage('footwear')}>FOOTWEAR</p>
                <p className="cats" onClick={() => navigateToPage('clothing')}>CLOTHING</p>
                <p className="cats" onClick={() => navigateToPage('about')}>ABOUT US</p>
            </div>
            <div className="right-section">
                <button className="signin-btn" onClick={handleGetStartedClick}>Get Started</button>
            </div>

            {showForm && (
                <div className="auth">
                    <div className={`auth-content ${isLogin ? 'login' : 'signup'}`}>
                        <span className="close-btn" onClick={closeForm}>&times;</span>
                        {isLogin ? (
                            <>
                                <h2>Login</h2>
                                <form>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" id="password" name="password" required />
                                    <button type="submit">Login</button>
                                </form>
                                <p>Not a member yet? <span className="go-signup" onClick={switchToSignup}>Signup</span></p>
                            </>
                        ) : (
                            <>
                                <h2>Signup</h2>
                                <form>
                                    <div className="names">
                                        <div>
                                            <label htmlFor="fname">First Name:</label>
                                            <input type="text" id="fname" name="fname" required />
                                        </div>
                                        <div>
                                            <label htmlFor="lname">Last Name:</label>
                                            <input type="text" id="lname" name="lname" required />
                                        </div>
                                    </div>
                                    <label htmlFor="signup-email">Email:</label>
                                    <input type="email" id="signup-email" name="signup-email" required />
                                    <label htmlFor="signup-password">Password:</label>
                                    <input type="password" id="signup-password" name="signup-password" required />
                                    <button type="submit">Signup</button>
                                </form>
                                <p>Already a member? <span className="go-signup" onClick={switchToLogin}>Login</span></p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
