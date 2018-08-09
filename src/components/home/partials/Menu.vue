<template>
    <div>
    <!-- Header ============================================= -->
    <header data-sticky-class="not-dark" class="transparent-header full-header" id="header">
        <div id="header-wrap">
            <div class="container clearfix">
                <div id="primary-menu-trigger"><em class="icon-reorder"></em>
                </div>
                <!-- Logo ============================================= -->
                <div id="logo">
                    <a data-dark-logo="/assets/img/ids_logo85px_w.png" class="standard-logo" href="/"><img alt="Infinity Dance Studio Logo" src="/assets/img/ids_logo85px.png" />
                    </a>
                    <a data-dark-logo="/assets/img/ids_logo85px_w.png" class="retina-logo" href="/"><img alt="Infinity Dance Studio Logo" src="/assets/img/ids_logo85px.png" />
                    </a>
                </div>
                <!-- #logo end -->
                <nav id="primary-menu" class="dark">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/classes">Classes</a>
                            <ul>
                                <li><a href="/schedule">Schedule</a></li>
                                <li><a href="/camps">Camps</a></li>
                            </ul>
                        </li>
                        <li><a href="/2016-spring">shows</a>
                            <ul>
                                <li><a href="/2016-spring">2016 Spring</a></li>
                                <li><a href="/2015-winter">2015 Winter</a></li>
                                <li><a href="/2014-winter">2014 Winter</a></li>
                                <li><a href="/2014-summer">2014 Summer</a></li>
                                <li><a href="/2013-june">2013 Summer</a></li>
                            </ul>
                        </li>
                        <li><a href="/tuitionandfees">tuition &amp; fees</a></li>
                        <li><a href="/whatson">whats on</a></li>
                        <li><a href="/competition">Competition Team</a></li>
                        <li><a href="/contact">contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</div>
</template>
<script>
  export default {
    name: "Menu",
  }
</script>
