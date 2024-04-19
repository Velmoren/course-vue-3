<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <li class="footer__item">
                            <RouterLink to="/">
                                <img src="@/assets/logo/Logo_black.svg" alt="logo">
                            </RouterLink>
                        </li>
                        <li class="footer__item">
                            <RouterLink to="our-coffee">Our coffee</RouterLink>
                        </li>
                        <li class="footer__item">
                            <RouterLink to="/pleasure">For your pleasure</RouterLink>
                        </li>
                        <li class="footer__item">
                            <RouterLink to="/contacts">Contact us</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>