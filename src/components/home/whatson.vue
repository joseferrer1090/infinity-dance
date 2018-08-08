<template>
  <div>
    <section id="page-title">
            <div class="container clearfix">
                <h1 data-animate="fadeInUp">Whats on</h1>
                <span data-delay="300" data-animate="fadeInUp">Whats happening at IDS</span>
            </div>
        </section>
        <section id="content">
            <div class="content-wrap">
                <div class="container clearfix">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" style="border-width: 0px;" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=eqrj6foeqnfrk8mbcikg2f0s4c%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=America%2FNew_York"></iframe>
                </div>
            </div>
        </section>
  </div>
</template>
<script>
  export default {
    name: "whatson", 
    components:{
      
    }
  }
</script>
