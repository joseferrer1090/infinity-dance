<template>
 <div>
   <footer id="footers">
    <div class="container">
        <!-- Footer Widgets
============================================= -->
        <div class="footer-widgets-wrap clearfix">
            <div class="col-md-4">
                <div>
                    <div class="widget clearfix">
                        <img src="@/assets/img/ids_logo85px.png" alt="Infinity Dance Studio" class="footer-logo">
                        <p> Copyrights © 2016
                            <br> All Rights Reserved by Infinity Dance Studio, Inc</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div>
                    <div class="widget clearfix">
                        <div style="background: transparent url(images/world-map.png) no-repeat scroll center center / 100% auto;">
                            <h4>Infinity Dance Studio</h4>
                            <address>
                                <h5>
                                    8901 SW 157th AVE #5<br>
                                    Miami, FL 33196</h5>
                            </address>
                            <h5>
                                <a href="tel:786-752-6888">(786) 752-6888</a><br>
                                <a href="mailto:dance@infinitydancemiami.com"> dance@infinitydancemiami.com </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="widget subscribe-widget clearfix">
                    <h5><strong>Subscribe</strong> to Our Newsletter to get News and Offers</h5>
                    <!--<script type="text/javascript" src="/CatalystScripts/ValidationFunctions.js?vs=b2050.r494698-phase1"></script>-->
                    <form name="catwebformform55164" method="post" onsubmit="return checkWholeForm55164(this)" enctype="multipart/form-data" action="http://www.infinitydancemiami.com/FormProcessv2.aspx?WebFormID=749148&amp;OID=19529624&amp;OTYPE=1&amp;EID=0&amp;CID=0">
                        <input type="text" name="EmailAddress" id="EmailAddress" class="form-control required email" maxlength="255" placeholder="Email">
                        <br>
                        <input class="btn btn-success" type="submit" value="Submit" id="catwebformbutton">
                        
                       <!-- <script type="text/javascript">
                            //<![CDATA[
                            var submitcount55164 = 0;
                            
                            function checkWholeForm55164(theForm) {
                                var why = "";
                                if (theForm.EmailAddress) why += checkEmail(theForm.EmailAddress.value);
                                if (why != "") {
                                    alert(why);
                                    return false;
                                }
                                if (submitcount55164 == 0) {
                                    submitcount55164++;
                                    theForm.submit();
                                    return false;
                                } else {
                                    alert("Form submission is in progress.");
                                    return false;
                                }
                            }
                            //]]>
                        </script>-->
                        
                    </form>
                    <div class="widget clearfix" style="margin-bottom: -20px;">
                        <div class="row">
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="https://www.facebook.com/infinitydanceschool/" class="social-icon si-dark si-colored si-facebook nobottommargin" style="margin-right: 10px;">
                                    <em class="icon-facebook"></em>
                                    
                                </a>
                            </div>
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="https://www.instagram.com/infinitydancestudio/" class="social-icon si-dark si-colored si-instagram nobottommargin" style="margin-right: 10px;">
                                    <em class="icon-instagram"></em>
                                    <em class="icon-instagram"></em>
                                </a>
                            </div>
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="https://www.youtube.com/user/infinitydancestudio1" class="social-icon si-dark si-colored si-youtube nobottommargin" style="margin-right: 10px;">
                                    <em class="icon-youtube"></em>
                                    <em class="icon-youtube"></em>
                                </a>
                            </div>
                            <div class="col-md-3 clearfix bottommargin-sm">
                                <a href="#" class="social-icon si-dark si-colored si-gplus nobottommargin" style="margin-right: 10px;">
                                    <em class="icon-gplus"></em>
                                    <em class="icon-gplus"></em>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- .footer-widgets-wrap end -->
        </div>
    </footer>
 </div>
</template>
<script>
  export default {
   name: "FooterContent",
  }
</script>
