class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <div class="logo">
                    <h1>Hebrewy</h1>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="#" class="submenu-trigger">Vocabulary <i class="fa fa-caret-down fa-lg" aria-hidden="true"></i></a>
                        <ul class="submenu">
                                <a href="b1u1.html">Book 1 unit 1 words</a>
                                <a href="b1u2.html"disabled>Book 1 unit 2 words</a>
                                <a href="b1u3.html">Book 1 unit 3 words</a>
                                <a href="b1u4.html">Book 1 unit 4 words</a>
                                <a href="b1u5.html">Book 1 unit 5 words</a>
                                <a href="b1u6.html">Book 1 unit 6 words</a>
                                <a href="b1u7.html">Book 1 unit 7 words</a>
                                <a href="b1u8.html">Book 1 unit 8 words</a>
                                <a href="b1u9.html">Book 1 unit 9 words</a>
                                <a href="b1u10.html">Book 1 unit 10 words</a>
                                <a href="b1u11.html">Book 1 unit 11 words</a>
                                <a href="b1u12.html">Book 1 unit 12 words</a>
                                <a href="b1u13.html">Book 1 unit 13 words</a>
                                <a href="b2u1.html">Book 2 Unit 1 Vocabulary</a>
                                <a href="b2u2.html">Book 2 Unit 2 Vocabulary</a>
                                <a href="b2u3.html">Book 2 Unit 3 Vocabulary</a>
                                <a href="b2u4.html">Book 2 Unit 4 Vocabulary</a>
                                <a href="b2u5.html">Book 2 Unit 5 Vocabulary</a>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="basics.html" class="submenu-trigger">Basics <i class="fa fa-caret-down fa-lg" aria-hidden="true"></i></a>
                        <ul class="submenu">
                            <a href="introduction.html">General Introduction</a>
                            <a href="alphabet.html">Alphabet א,ב,ג,ד</a>
                            <a href="Sofiyot.html">Ending suffix  ך,ץ,ף,ן,ם</a>
                            <a href="voweles.html">Vowels א,ה,ו,י</a>
                            <a href="alphabet_detail.html">Alphabet Details</a>
                        </ul>
                    </li>
                    
                    <li><a href="contact.html"><i class="fa fa-heart fa-lg" aria-hidden="true"> Contact</a></li>
                    <li class="dropdown">
                        <a href="support.html" class="submenu-trigger"><i class="fa fa-heart fa-lg" aria-hidden="true"></i></a>
                        <ul class="submenu">
                            <a href="paypal.html">Paypal - <i class="fa fa-paypal fa-lg" aria-hidden="true"></i></a>
                            <a href="bank.html">Bank - <i class="fa fa-university fa-lg" aria-hidden="true"></i></a>
                            <a href="wise.html">Wise - <i class="fa fa-exchange fa-lg" aria-hidden="true"></i></a>
                            <a href="crypto.html">Crypto - <i class="fa fa-btc fa-lg" aria-hidden="true"></i></a>
                        </ul>
                    </li>
                </ul>
                <!-- Toggle button for dark mode2 -->
                <div class="switches-container">
                    <div class="switch">
                    <label for="switch">
                        <input type="checkbox" id="switch">
                        <span class="slider round"></span>
                    </label>
                    </div>
                </div>
            </nav>
        </header>
        `
    }
}

customElements.define ('my-header', MyHeader)
