<template>
	<div>
		<section id="page-title">
			<div class="container clearfix">
				<h1>Contact us today!</h1>
				<span><a href="tel:7867526888">(786) 752-6888</a></span>
				<span><a href="mailto:dance@infinitydancemiami.com">dance@infinitydancemiami.com</a></span>
			</div>
		</section>
				<section id="google-map" class="gmap slider-parallax"></section>
				<!--<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>-->
				<!--<script type="text/javascript" src="/_assets/js/jquery.gmap.js"></script>-->
				<!--<script type="text/javascript">

							$('#google-map').gMap({

								address: '8901 SW 157th AVE, MIAMI, FLORIDA 33196',
								maptype: 'ROADMAP',
								zoom: 14,
								markers: [
									{
										address: "8901 SW 157th AVE, MIAMI, FLORIDA 33196",
										html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;">Hi, we\'re <span>Envato</span></h4><p class="nobottommargin">Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day, and a network of educational blogs where millions learn <strong>creative skills</strong>.</p></div>',
										icon: {
																		image: "/_assets/img/map-icon-red.png",
											iconsize: [32, 39],
											iconanchor: [13,39]
										}
									}
								],
								doubleclickzoom: false,
								controls: {
									panControl: true,
									zoomControl: true,
									mapTypeControl: true,
									scaleControl: false,
									streetViewControl: false,
									overviewMapControl: false
								}

							});

					</script>	-->
			<section id="content">

			<div class="content-wrap">

				<div class="container clearfix">
					<div class="postcontent nobottommargin">

                        <h3>Send us an Email</h3>
                        
                        <!--<script type="text/javascript" src="/CatalystScripts/ValidationFunctions.js?vs=b2050.r494698-phase1">
                        </script>-->
                        <form name="catwebformform97335" method="post" onsubmit="return checkWholeForm97335(this)" enctype="multipart/form-data" action="http://www.infinitydancemiami.com/FormProcessv2.aspx?WebFormID=10090&OID=19581294&OTYPE=1&EID=0&CID=0">
                                <div class="col_one_third">
                                <input type="text" name="FirstName" id="FirstName" class="sm-form-control" maxlength="255" placeholder="First Name" />
                                </div>
                               <div class="col_one_third">
                               <input type="text" name="LastName" id="LastName" class="sm-form-control" maxlength="255" placeholder="Last Name" />
                               </div>
                                        <div class="col_one_third col_last">
                            <input type="text" name="CellPhone" id="CellPhone" class="sm-form-control" maxlength="255" placeholder="Cell" />
                            </div>
                            <div class="col_two_third">
                                        <input type="text" name="EmailAddress" id="EmailAddress" class="required email sm-form-control" maxlength="255" placeholder="Email" />
                            </div>
                            <div class="col_two_third">
                                        <textarea name="CAT_Custom_869" id="CAT_Custom_869" cols="10" rows="4" class="required sm-form-control" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
                            </div>
                                        <label>Preferred Contact Method</label>
                                        <br />
                                        <input type="radio" name="CAT_Custom_868" id="CAT_Custom_868_0" value="Phone" /> Phone
                                        <br />
                                        <input type="radio" name="CAT_Custom_868" id="CAT_Custom_868_1" value="Email" /> Email
                                
                                    <td><div style="display: none">
<input type="text" name="s_content" id="s_content" class="cat_textbox" />
<input type="text" name="s_summary" id="s_summary" class="cat_textbox" value="b92a0ef4c3044dd7acab8b9770dcafdb" />
</div>
</td>
                                <div class="col_full">
                                        <input class="button button-3d nomargin" type="submit" value="Submit" id="catwebformbutton" />
                            </div>
                           <!-- <script type="text/javascript">
                                //<![CDATA[
                                var submitcount97335 = 0;
                                
                                function checkWholeForm97335(theForm) {
                                    var why = "";
                                    if (theForm.FirstName) why += isEmpty(theForm.FirstName.value, "First Name");
                                    if (theForm.LastName) why += isEmpty(theForm.LastName.value, "Last Name");
                                    if (theForm.CellPhone) why += isEmpty(theForm.CellPhone.value, "Cell Phone Number");
                                    if (theForm.EmailAddress) why += checkEmail(theForm.EmailAddress.value);
                                    if (why != "") {
                                        alert(why);
                                        return false;
                                    }
                                    if (submitcount97335 == 0) {
                                        submitcount97335++;
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
                    </div>
                
          <div class="sidebar col_last nobottommargin">

						<address>
							<strong>Infinity Dance Studio</strong><br>
							8901 SW 157 ave #5<br>
							Miami, FL 33196<br>
						</address>
						<abbr title="Phone Number"><strong>Phone:</strong></abbr> (786) 752-6888<br>
						<abbr title="Email Address"><strong>Email:</strong></abbr> dance@infinitydancemiami.com

						
						<div class="widget noborder notoppadding">

							<a href="http://www.facebook.com/infinitydanceschool/" class="social-icon si-small si-dark si-facebook">
								<i class="icon-facebook"></i>
								<i class="icon-facebook"></i>
							</a>

							<a href="#" class="social-icon si-small si-dark si-gplus">
								<i class="icon-gplus"></i>
								<i class="icon-gplus"></i>
							</a>

						</div>

					</div><!-- .sidebar end -->

				</div>

			</div>

		</section><!-- #content end -->
	</div>
</template>
<script>
	export default {
		name: "Contact", 
		components: {
		},
		mounted(){
				$('#google-map').gMap({

					address: '8901 SW 157th AVE, MIAMI, FLORIDA 33196',
					maptype: 'ROADMAP',
					zoom: 14,
					markers: [
						{
							address: "8901 SW 157th AVE, MIAMI, FLORIDA 33196",
							html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;">Hi, we\'re <span>Envato</span></h4><p class="nobottommargin">Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day, and a network of educational blogs where millions learn <strong>creative skills</strong>.</p></div>',
							icon: {
															image: "/_assets/img/map-icon-red.png",
								iconsize: [32, 39],
								iconanchor: [13,39]
							}
						}
					],
					doubleclickzoom: false,
					controls: {
						panControl: true,
						zoomControl: true,
						mapTypeControl: true,
						scaleControl: false,
						streetViewControl: false,
						overviewMapControl: false
					}

				});

		}
	}
</script>
