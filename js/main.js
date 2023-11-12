class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <div class="logo">
                    <h1>Hebrewy</h1>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html">Updates</a></li>
                    <li class="dropdown">
                        <a href="basics.html" class="submenu-trigger">Basics <i class="fa fa-caret-down fa-lg" aria-hidden="true"></i></a></a>
                        <ul class="submenu">
                            <a href="introduction.html">General Introduction</a>
                            <a href="alphabet.html">Alphabet א,ב,ג,ד</a>
                            <a href="Sofiyot.html">Ending suffix  ך,ץ,ף,ן,ם</a>
                            <a href="voweles.html"> Vowels א,ה,ו,י</a>
                            <a href="alphabet_detail.html"> Alphabet Details</a>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="#" class="submenu-trigger">Vocabulary <i class="fa fa-caret-down fa-lg" aria-hidden="true"></i></a>
                        <ul class="submenu">
                                <a href="b1u1.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 1 words</a>
                                <a href="b1u2.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 2 words</a>
                                <a href="b1u3.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 3 words</a>
                                <a href="b1u4.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 4 words</a>
                                <a href="b1u5.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 5 words</a>
                                <a href="b1u6.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 6 words</a>
                                <a href="b1u7.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 7 words</a>
                                <a href="b1u8.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 8 words</a>
                                <a href="b1u9.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 9 words</a>
                                <a href="b1u10.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 10 words</a>
                                <a href="b1u11.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 11 words</a>
                                <a href="b1u12.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 12 words</a>
                                <a href="b1u13.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 1 unit 13 words</a>
                                <a href="b2u1.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 1 Vocabulary</a>
                                <a href="b2u2.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 2 Vocabulary</a>
                                <a href="b2u3.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 3 Vocabulary</a>
                                <a href="b2u4.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 4 Vocabulary</a>
                                <a href="b2u5.html"><i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 5 Vocabulary</a>
                                <a href="b2u6.html"> <i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 6 Vocabulary</a>
                                <a href="b2u7.html"> <i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 7 Vocabulary</a>
                                <a href="b2u8.html"> <i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 8 Vocabulary</a>
                                <a href="b2u9.html"> <i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 9 Vocabulary</a>
                                <a href="b2u10.html"> <i class="fa fa-clone fa-lg" aria-hidden="true"></i> Book 2 Unit 10 Vocabulary</a>
                        </ul>
                    </li>


                    <li class="dropdown">
                        <a href="#" class="submenu-trigger">Practice <i class="fa fa-caret-down fa-lg" aria-hidden="true"></i></a>
                        <ul class="submenu">
                            <a href="practiceBook1.html"><i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i> Practice Book 1</a>
                            <a href="practiceBook2.html"><i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i> Practice Book 2</a>
                        </ul>
                    </li>
                    

                    <li><a href="#"><i class="fa fa-gears fa-lg" aria-hidden="true"></i> Register</a></li>
                    <li class="dropdown">
                        <a href="donate.html" class="submenu-trigger"><i class="fa fa-heart fa-lg" aria-hidden="true"></i></a>
                        <ul class="submenu">
                        <li><a href="ko-fi.html"><i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i> Ko-Fi - <i class="fa fa-btc fa-lg" aria-hidden="true"></i></a><li>
                        <a href="donate_crypto.html"><i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i> Bitcoin - <i class="fa fa-btc fa-lg" aria-hidden="true"></i></a>
                        </ul>
                    </li>
                    <li><a href='https://ko-fi.com/L3L8R1QN8' target='_blank'><img height='30' style='border:0px;height:30px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a></li>
                </ul>
            </nav>
        </header>
        `
    

    }
}

customElements.define ('my-header', MyHeader)
