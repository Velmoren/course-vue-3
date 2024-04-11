<template>
    <main>
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="title">About Us</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br><br>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="best">
            <div class="container">
                <div class="title">Our best</div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="best__wrapper">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <!-- <div class="best__item">
                                <img src="@/assets/img/coffee-1.jpg" alt="coffee">
                                <div class="best__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div class="best__item-price">10.73$</div>
                            </div>
                            <div class="best__item">
                                <img src="@/assets/img/coffee-2.jpg" alt="coffee">
                                <div class="best__item-title">
                                    Presto Coffee Beans 1kg
                                </div>
                                <div class="best__item-price">15.99$</div>
                            </div>
                            <div class="best__item">
                                <img src="@/assets/img/coffee-3.jpg" alt="coffee">
                                <div class="best__item-title">
                                    AROMISTICO Coffee 1kg
                                </div>
                                <div class="best__item-price">6.99$</div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
    components: { ProductCard }
}
</script>