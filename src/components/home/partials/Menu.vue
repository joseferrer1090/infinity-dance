<template>
    <!-- Header ============================================= -->
  <header data-sticky-class="not-dark" class="transparent-header full-header" id="header">
      <div id="header-wrap">
          <div class="container clearfix">
              <div id="primary-menu-trigger"><em class="icon-reorder"></em>
              </div>
              <!-- Logo ============================================= -->
              <div id="logo">
                  <a data-dark-logo="@/assets/img/ids_logo85px.png" class="standard-logo" href="/">
                    <img alt="Infinity Dance Studio Logo" src="@/assets/img/ids_logo85px.png" />
                  </a>
                  <a data-dark-logo="@/assets/img/ids_logo85px.png" class="retina-logo" href="/">
                  <img alt="Infinity Dance Studio Logo" src="@/assets/img/ids_logo85px.png" />
                  </a>
              </div>
              <!-- #logo end -->
              <nav id="primary-menu" class="dark">
                  <ul>
                      <li> <a href="/about">About</a> </li>
                      <li><a href="classes.html">Classes</a>
                          <ul>
                              <li><a href="schedule.html">Schedule</a></li>
                              <li><a href="camps.html">Camps</a></li>
                          </ul>
                      </li>
                      <li><a href="2016-spring.html">shows</a>
                          <ul>
                              <li><a href="2016-spring.html">2016 Spring</a></li>
                              <li><a href="2015-winter.html">2015 Winter</a></li>
                              <li><a href="2014-winter.html">2014 Winter</a></li>
                              <li><a href="2014-summer.html">2014 Summer</a></li>
                              <li><a href="2013-june.html">2013 Summer</a></li>
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
  <!-- #header end -->


</template>


<script>

  export default {
    name: "Menu",
  }
</script>
