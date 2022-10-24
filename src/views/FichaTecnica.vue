<template>
    <div id="pdfvuer">

        {{setnuevaUrl($route.query.equipo ) }}

        <div v-if="existFile">
            <pdf :src="pdfdata" v-for="i in numPages" :key="i" :id="i" :page="i" style="width:100%;margin:20px auto;"
                :annotation="true" :resize="true" @link-clicked="handle_pdf_link" >
            </pdf>
        </div>
        <div v-else>
            <br> <br> <br>
            <h2 class="text-center ">Aun no se carga un archivo para este equipo </h2>

            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                <path
                    d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                <path
                    d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>

        </div>

    </div>
</template>
  
<script>
import pdfvuer from 'pdfvuer'
import 'pdfjs-dist/build/pdf.worker.entry' // not needed since v1.9.1

export default {
    components: {
        pdf: pdfvuer
    },
    data() {
        return {
            page: 1,
            existFile: true,
            numPages: 0,
            pdfdata: undefined,
            errors: [],
            scale: 'page-width',
            filePdf: ['PDF/749259.pdf', 'PDF/1167872.pdf', 'PDF/1195704.pdf'],
            nuevaUrl: ""
        }
    },
    computed: {
        formattedZoom() {
            return Number.parseInt(this.scale * 100);
        },
    },
    mounted() {
        this.getPdf()
    },
    watch: {
        show: function (s) {
            if (s) {
                this.getPdf();
            }
        },
        // page: function (p) {
        //     if (window.pageYOffset <= this.findPos(document.getElementById(p)) || (document.getElementById(p + 1) && window.pageYOffset >= this.findPos(document.getElementById(p + 1)))) {
        //         // window.scrollTo(0,this.findPos(document.getElementById(p)));
        //         document.getElementById(p).scrollIntoView();
        //     }
        // }
    },
    methods: {
    
        setnuevaUrl(fileName) {
            console.log('-- entra en la funcion senuevaurl --');
            console.log(fileName);

            if (fileName == 0 || fileName == "0") {
                this.existFile = false
            } else {
                this.nuevaUrl = 'PDF/' + fileName + '.pdf';
            }

        },
        handle_pdf_link: function (params) {
            // Scroll to the appropriate place on our page - the Y component of
            // params.destArray * (div height / ???), from the bottom of the page div
            var page = document.getElementById(String(params.pageNumber));
            page.scrollIntoView();
        },
        getPdf() {
            console.log('funcion -getPdf- ');
            var self = this;
            console.log('variable nuevaUrl :  ' + self.nuevaUrl);
            self.pdfdata = pdfvuer.createLoadingTask(self.nuevaUrl);

            self.pdfdata.then(pdf => {
                self.numPages = pdf.numPages;
                // window.onscroll = function () {
                //     changePage() 
                //     // stickyNav()  
                // }

                //   // Get the offset position of the navbar
                //   var sticky = $('#buttons')[0].offsetTop

                //   // Add the sticky class to the self.$refs.nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
                //   function stickyNav() {
                //     if (window.pageYOffset >= sticky) {
                //       $('#buttons')[0].classList.remove("hidden")
                //     } else {
                //       $('#buttons')[0].classList.add("hidden")
                //     }
                //   }

                // function changePage() {
                //     var i = 1, count = Number(pdf.numPages);
                //     do {
                //         if (window.pageYOffset >= self.findPos(document.getElementById(i)) &&
                //             window.pageYOffset <= self.findPos(document.getElementById(i + 1))) {
                //             self.page = i
                //         }
                //         i++
                //     } while (i < count)
                //     if (window.pageYOffset >= self.findPos(document.getElementById(i))) {
                //         self.page = i
                //     }
                // }
            });
        },
        // findPos(obj) {
        //    // return obj.offsetTop;
        // }
    }
}
</script>
