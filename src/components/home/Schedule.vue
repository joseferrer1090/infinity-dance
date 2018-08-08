<template>
  <div>
    <section id="page-title">
      <div class="container clearfix">
            <h1>Schedule</h1>
            <span>Updated Every Quarter</span>
        </div>
    </section>
    <section id="content">
            <div class="content-wrap">
                <div id="printableArea" class="container clearfix">
                    <input type="button" onclick="printDiv('printableArea')" value="Print Schedule" />
                    <p>
                        <!-- Post Content
                    ============================================= -->
                        <div class="postcontent nobottommargin clearfix">
                            <img src="@/assets/img/ids_logo85px.png">
                            <div class="table-responsive">

                                <table class="table">
                                    <thead>
                                        <tr style="background: #f9a2c3;">
                                            <th class="center" rowspan="2">TIME</th>
                                            <th class="center" colspan="2">MONDAY</th>
                                            <th class="center" colspan="2">TUESDAY</th>
                                            <th class="center" colspan="2">WEDNESDAY</th>
                                            <th class="center" colspan="2">THURSDAY</th>
                                            <th class="center" colspan="2">FRIDAY</th>
                                            <th class="center" colspan="2">SATURDAY</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="background: #ffe4ee;">
                                            <td>STUDIO >></td>
                                            <td class="center">1</td>
                                            <td class="center">2</td>
                                            <td class="center">1</td>
                                            <td class="center">2</td>
                                            <td class="center">1</td>
                                            <td class="center">2</td>
                                            <td class="center">1</td>
                                            <td class="center">2</td>
                                            <td class="center">1</td>
                                            <td class="center">2</td>
                                            <td class="center">1</td>
                                            <td class="center">2</td>
                                        </tr>
                                        <tr>
                                            <td style="background: #ffe4ee;">4 - 4:45 PM</td>
                                            <td class="center">Baby Ballet</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td style="background: #ffe4ee;">5 PM</td>
                                            <td class="center">Ballet I</td>
                                            <td class="center">Pre-Ballet I</td>
                                            <td class="center">Hip-Hop I</td>
                                            <td class="center">Acro I</td>
                                            <td class="center">Pre-ballet II</td>
                                            <td class="center">Ballet I</td>
                                            <td class="center">Flamenco I</td>
                                            <td class="center">Acro III</td>
                                            <td class="center">Contempo I</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style="background: #ffe4ee;">6 PM</td>
                                            <td class="center">Ballet II</td>
                                            <td class="center">Belly Dance I</td>
                                            <td class="center">Hip Hop II</td>
                                            <td class="center">Jazz I</td>
                                            <td class="center">Contemporary II</td>
                                            <td class="center">Ballet II</td>
                                            <td class="center">Flamenco II</td>
                                            <td class="center">Jazz II</td>
                                            <td class="center">Pointe I</td>
                                            <td class="center">Jazz III</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style="background: #ffe4ee;">7 PM</td>
                                            <td class="center">Ballet III</td>
                                            <td class="center">Belly Dance II</td>
                                            <td class="center">Physical
                                                <br>/conditioning***</td>
                                            <td class="center">Acro II</td>
                                            <td class="center">Contemporary
                                                <br>III</td>
                                            <td class="center">Ballet III</td>
                                            <td class="center">Ballroom I</td>
                                            <td class="center">Flamenco III</td>
                                            <td class="center">Pointe II</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style="background: #ffe4ee;">8 PM</td>
                                            <td class="center">Ballet IV/V</td>
                                            <td class="center">Competition</td>
                                            <td class="center">Competition</td>
                                            <td class="center">Acro IV</td>
                                            <td class="center">Competition</td>
                                            <td class="center">Ballet IV</td>
                                            <td class="center">Ballroom II</td>
                                            <td class="center">Private</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style="background: #ffe4ee;">10 AM</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td class="center">Pre-Ballet I</td>
                                            <td class="center">Pre-Ballet I</td>

                                        </tr>
                                        <tr>
                                            <td style="background: #ffe4ee;">11 AM</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td class="center">Pre-Ballet II</td>
                                            <td class="center">Pre-Ballet II</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                           <!-- <script type="text/javascript">
                                function printDiv(divName) {
                                    var printContents = document.getElementById(divName).innerHTML;
                                    var originalContents = document.body.innerHTML;

                                    document.body.innerHTML = printContents;

                                    window.print();

                                    document.body.innerHTML = originalContents;
                                }
                            </script>-->
                            Updated August 1, 2016
                            <br /> *** Physical/Conditioning Additional Fee $10
                        </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
  export default {
    name: "Schedule",
    components: {

    }
  }
</script>
