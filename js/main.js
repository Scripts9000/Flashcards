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
                                <a href="b2u6.html"> <i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i> Book 2 Unit 6 Vocabulary</a>
                                <a href="b2u7.html"> <i class="fa fa-gears fa-lg" aria-hidden="true"></i> Book 2 Unit 7 Vocabulary</a>
                                <a href="b2u8.html"> <i class="fa fa-gears fa-lg" aria-hidden="true"></i> Book 2 Unit 8 Vocabulary</a>
                                <a href="b2u9.html"> <i class="fa fa-gears fa-lg" aria-hidden="true"></i> Book 2 Unit 9 Vocabulary</a>
                                <a href="b2u10.html"> <i class="fa fa-gears fa-lg" aria-hidden="true"></i> Book 2 Unit 10 Vocabulary</a>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="basics.html" class="submenu-trigger">Basics <i class="fa fa-caret-down fa-lg" aria-hidden="true"></i></a></a>
                        <ul class="submenu">
                            <a href="introduction.html">General Introduction</a>
                            <a href="alphabet.html">Alphabet א,ב,ג,ד</a>
                            <a href="Sofiyot.html">Ending suffix  ך,ץ,ף,ן,ם</a>
                            <a href="voweles.html"> <i class="fa fa-gears fa-lg" aria-hidden="true"></i> Vowels א,ה,ו,י</a>
                            <a href="alphabet_detail.html"><i class="fa fa-gears fa-lg" aria-hidden="true"></i> Alphabet Details</a>
                        </ul>
                    </li>

                    <li><a href="contact.html"><i class="fa fa-gears fa-lg" aria-hidden="true"></i> Contact</a></li>
                    <li class="dropdown">
                        <a href="donate.html" class="submenu-trigger"><i class="fa fa-heart fa-lg" aria-hidden="true"></i></a>
                        <ul class="submenu">
                            <a href="paypal.html"><i class="fa fa-gears fa-lg" aria-hidden="true"></i> Paypal - <i class="fa fa-paypal fa-lg" aria-hidden="true"></i></a>
                            <a href="bank.html"><i class="fa fa-gears fa-lg" aria-hidden="true"></i> Bank - <i class="fa fa-university fa-lg" aria-hidden="true"></i></a>
                            <a href="wise.html"><i class="fa fa-gears fa-lg" aria-hidden="true"></i> Wise - <i class="fa fa-exchange fa-lg" aria-hidden="true"></i></a>
                            <a href="donate_crypto.html"><i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i> Bitcoin - <i class="fa fa-btc fa-lg" aria-hidden="true"></i></a>
                        </ul>
                    </li>
                </ul>
                </div>
                <p><span id="hebrew-date-value"></span></p>
            </nav>
        </header>
        `
        

    }
}

customElements.define ('my-header', MyHeader)