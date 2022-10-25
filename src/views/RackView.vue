<template>
    <div class="container" id="actual">
        {{                  checkGabinete(id)                  }}
        <!-- Mostrar solo en pantallas grandes  -->
        <div class="d-none d-md-block">
            <div class="row text-center" style="  font-family: 'Trebuchet MS', sans-serif; ">
                <div class="col-6" style=" color:white; background-color:#686866; border-radius: 15px 15px 0px 0px;">
                    <h3 style="margin-top:10px; font-weight: bold; ">S.E. {{                  actualSub                  }} Gabinete: {{                  actualRack                  }} </h3>
                </div>
            </div>

            <div class="row">

                <div class="col-6" id="fondo">

                    <ul class="list-group" v-for="(device, key ) in listaEquipos" :key="key">

                        <li class="list-group-item" @click="showFicha(device.R3)" style="cursor:pointer;">
                            <div class="row"
                                style="background-color:#2C3333; color:white; width: 99%; margin-left: 0px; border-radius: 10px; ">
                                <h5 style="margin-left:5px;">
                                    {{                  device.PGabinete                  }}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-distribute-vertical" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z" />
                                        <path
                                            d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z" />
                                    </svg>

                                    {{                  device.Marca                  }}
                                    {{                  device.NombreEquipo                  }}
                                </h5>
                            </div>
                            <div class="row">
                                <img v-if="device.Img" style=" width:95%; padding-left: 10px;"
                                    :src="require(`@/assets/Rack/Final/${device.Img}`)" alt="">
                            </div>

                        </li>
                    </ul>
                </div>

                <div class="col-6 text-center">

                </div>

            </div>
        </div>

        <!-- Mostrar solo en pantalla pequenas  -->
        <div class="d-md-none ">

            <div class="text-center" style=" color:white; background-color:#686866; border-radius: 15px 15px 0px 0px;">
                <label for="">S.E. {{                  actualSub                  }} {{                  actualRack                  }}</label>
            </div>
            <div class="col-12" id="fondo">
                <ul class="list-group" v-for="(device, key ) in listaEquipos" :key="key">
                    <li class="list-group-item" @click="showFicha(device.R3)">
                        <div class="row" style="background-color:#2C3333; color:white;  border-radius: 5px;">
                            <label style="margin-left:5px"> {{                  device.PGabinete                  }} - {{                  device.Marca                  }}
                                {{                  device.NombreEquipo                  }} </label>
                        </div>
                        <div class="row">
                            <img v-if="device.Img" style=" width:100%; "
                                :src="require(`@/assets/Rack/Final/${device.Img}`)" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>


<script>
import _ from 'lodash'

export default {
    name: 'RackView',
    props: ['id'],
    data() {
        return {
            actualSub: 'NIZ',
            actualRack: 3,
            listaEquipos: [],
            specificGabinet: false,
            subestaciones: [
                {
                    nombre: 'NIZ',
                    subestacion: [
                        {
                            nombre: 'A1',
                            idGabinete: 1,
                            equipos: [
                                { R3: "2042442", id: 9, UGabinete: "A1", PGabinete: 1, TipoId: 4, Marca: "LT NIZ-93070-VAD", Tipo: "T-RADOPL", NombreEquipo: "POWER LINK", Img: "powerlink.png" },
                                { R3: "2125565", id: 10, UGabinete: "A1", PGabinete: 2, TipoId: 5, Marca: "LT NIZ-93070-VAD", Tipo: "T-TELEPRO", NombreEquipo: "SWT3000", Img: "swt3000.png" },
                            ]
                        },
                        {
                            nombre: 'A2',
                            idGabinete: 2,
                            equipos: [
                            {  R3: "100", id: 1, UGabinete:"A02", PGabinete:"01" ,TipoId: 7 , Marca:"ODF", Tipo:"T-DISTOPT", NombreEquipo:"GTAC", Img: 'gtag.png' }
                            ]
                        },
                        {
                            nombre: 'A3',
                            idGabinete: 3,
                            equipos: [
                                { R3: "19422550", id: 1, UGabinete: "A3", PGabinete: "38", TipoId: 2, Marca: "CISCO", Tipo: "T-SWITCH", NombreEquipo: "CGS-2520", Img: "cisco-2520.png" },
                                { R3: "1416767", id: 2, UGabinete: "A3", PGabinete: "21", TipoId: 2, Marca: "CISCO", Tipo: "T-SWITCH", NombreEquipo: "3560", Img: "cisco-3560.png" }
                            ]
                        },
                        {
                            nombre: 'A4',
                            idGabinete: 4,
                            equipos: [
                                { R3: "2195455", id: 1, UGabinete: "A4", PGabinete: 37, TipoId: 1, Marca: "CISCO", Tipo: "T-ROUTER", NombreEquipo: "ASR-903", Img: "cisco-asr903.png" },
                                { R3: "766900", id: 2, UGabinete: "A4", PGabinete: 33, TipoId: 1, Marca: "CISCO", Tipo: "T-ROUTER", NombreEquipo: "3945", Img: "cisco-3945.png" },
                                { R3: "1416759", id: 3, UGabinete: "A4", PGabinete: 29, TipoId: 2, Marca: "CISCO", Tipo: "T-SWITCH", NombreEquipo: "3560", Img: "cisco-3560.png" },
                                // { R3: "0", id: 4, UGabinete: "A4", PGabinete: 24, TipoId: 3, Marca: "CISCO", Tipo: "T-PP", NombreEquipo: "PatchPanel", Img: "patchpanel2.png" }
                            ]
                        },
                        {
                            nombre: 'A5',
                            idGabinete: 5,
                            equipos: [
                                { R3: "1942255", id: 5, UGabinete: "A5", PGabinete: "40", TipoId: 2, Marca: "CISCO", Tipo: "T-SWITCH", NombreEquipo: "2520", Img: "cisco-2520.png" },
                                { R3: "2449754", id: 6, UGabinete: "A5", PGabinete: "33", TipoId: 2, Marca: "ARUBA", Tipo: "T-ROUTER", NombreEquipo: "2930F", Img: "aruba-2930f1.png" },
                                { R3: "749941", id: 7, UGabinete: "A5", PGabinete: "26", TipoId: 2, Marca: "CISCO", Tipo: "T-SWITCH", NombreEquipo: "3560", Img: "cisco-3560.png" },
                                { R3: "7499", id: 8, UGabinete: "A5", PGabinete: "19", TipoId: 2, Marca: "TPLINK", Tipo: "T-SWITCH", NombreEquipo: "TPLINK", Img: 'tplinkSwitch.png' }
                            ]
                        },
                        {
                            nombre: 'A7',
                            idGabinete: 7,
                            equipos: [
                                { R3: "1195704", id: 11, UGabinete: "A7", PGabinete: 1, TipoId: 5, Marca: "LT NIZ-73480-CEX", Tipo: "T-RADOPL", NombreEquipo: "esb2000i", Img: "esb2000i.png" }
                            ]
                        },
                        {
                            nombre: 'A29',
                            idGabinete: 29,
                            equipos: [
                                { R3: "2050859", id: 12, UGabinete: "A29", PGabinete: 1, TipoId: 5, Marca: "LT NIZ-93040-RMY", Tipo: "T-RADOPL", NombreEquipo: "POWER LINK", Img: "powerlink.png" },
                                { R3: "2050860", id: 13, UGabinete: "A29", PGabinete: 2, TipoId: 6, Marca: "LT NIZ-93040-RMY", Tipo: "T-TELEPRO", NombreEquipo: "SWT3000", Img: "swt3000.png" }
                            ]
                        },
                        {
                            nombre: 'A30',
                            idGabinete: 30,
                            equipos: [
                                { R3: "749259", id: 14, UGabinete: "A30", PGabinete: 1, TipoId: 5, Marca: "LT NIZ-93060-BLM", Tipo: "T-RADOPL", NombreEquipo: "esb2000i", Img: "esb2000i.png" }
                            ]
                        },
                        {
                            nombre: 'A31',
                            idGabinete: 31,
                            equipos: [
                                { R3: "1515348", id: 1, UGabinete: "A31", PGabinete: "1", TipoId: 7, Marca: "FC", Tipo: "T-DISTOPT", NombreEquipo: "CANCUN", Img: "odf-fc.png" }
                            ]
                        },
                        {
                            nombre: 'A33',
                            idGabinete: 33,
                            equipos: [
                                { R3: "21619", "id": 1, UGabinete: "A33", PGabinete: "01", TipoId: 9, Marca: "NIZ-PMO-ZH", Tipo: "T-TOPTICA", NombreEquipo: "FOX 515", Img: 'Fox.png' }
                            ]
                        },
                        {
                            nombre: 'B2',
                            idGabinete: 35,
                            equipos: [
                                { R3: "2195453", id: 1, UGabinete: "B2", PGabinete: "1", TipoId: 7, Marca: "FC", Tipo: "T-DISTOPT", NombreEquipo: "BONFIL", Img: "odf-fc.png" },
                                { R3: "1515070", id: 2, UGabinete: "B2", PGabinete: "2", TipoId: 7, Marca: "FC", Tipo: "T-DISTOPT", NombreEquipo: "PUERTO MORELOS", Img: "odf-fc.png" },
                                { R3: "2195457", id: 3, UGabinete: "B2", PGabinete: "3", TipoId: 7, Marca: "FC", Tipo: "T-DISTOPT", NombreEquipo: "NICTE HA", Img: "odf-fc.png" }
                            ]
                        },
                        {
                            nombre: 'B3',
                            idGabinete: 36,
                            equipos: [
                                { R3: "1515068", id: 1, UGabinete: "B3", PGabinete: "1", TipoId: 7, Marca: "SC", Tipo: "T-DISTOPT", NombreEquipo: "NIZ M.O MM", Img: "odf-sc.png" },
                                { R3: "1515620", id: 2, UGabinete: "B3", PGabinete: "2", TipoId: 7, Marca: "SC", Tipo: "T-DISTOPT", NombreEquipo: "CTG NIZ", Img: "odf-sc.png" },
                                { R3: "1515242", id: 3, UGabinete: "B3", PGabinete: "3", TipoId: 7, Marca: "SC", Tipo: "T-DISTOPT", NombreEquipo: "NIZ M.O SM", Img: "odf-sc.png" },
                                { R3: "1515349", id: 4, UGabinete: "B3", PGabinete: "4", TipoId: 7, Marca: "SC", Tipo: "T-DISTOPT", NombreEquipo: "ALMACEN", Img: "odf-sc.png" }
                            ]
                        },
                        {
                            nombre: 'B4',
                            idGabinete: 37,
                            equipos: [
                                { R3: "1515067", id: 1, UGabinete: "B4", PGabinete: "1", TipoId: 7, Marca: "SC", Tipo: "T-DISTOPT", NombreEquipo: "BALAM", Img: "odf-sc.png" },
                                { R3: "2017965", id: 2, UGabinete: "B4", PGabinete: "2", TipoId: 7, Marca: "SC", Tipo: "T-DISTOPT", NombreEquipo: "CONF NIZ 1", Img: "odf-sc.png" },
                                { R3: "2195452", id: 3, UGabinete: "B4", PGabinete: "3", TipoId: 7, Marca: "SC", Tipo: "T-DISTOPT", NombreEquipo: "CONF NIZ 2", Img: "odf-sc.png" }
                            ]
                        },
                        {
                            nombre: 'B6',
                            idGabinete: 39,
                            equipos: [
                                { R3: "1167806", id: 1, UGabinete: "B06", PGabinete: "01", TipoId: 9, Marca: "NIZ-CNC-BNI", Tipo: "T-TOPTICA", NombreEquipo: "FOX 515", Img: 'Fox.png' }
                            ]
                        },
                        {
                            nombre: 'B7',
                            idGabinete: 40,
                            equipos: [
                                { R3: "1167815", id: 15, UGabinete: "b7", PGabinete: 1, TipoId: 6, Marca: "LT NIZ-93170-RMY", Tipo: "T-TELEPRO", NombreEquipo: "NSD570", Img: "nsd570.png" },
                                { R3: "1167872", id: 16, UGabinete: "b7", PGabinete: 2, TipoId: 6, Marca: "LT NIZ-93040-RMY", Tipo: "T-TELEPRO", NombreEquipo: "NSD570", Img: "nsd570.png" },
                                { R3: "1942272", id: 17, UGabinete: "b7", PGabinete: 3, TipoId: 6, Marca: "LT NIZ-93070-VAD", Tipo: "T-TELEPRO", NombreEquipo: "NSD570", Img: "nsd570.png" },
                                { R3: "1546740", id: 17, UGabinete: "b7", PGabinete: 4, TipoId: 6, Marca: "LT NIZ-93060-BLM", Tipo: "T-TELEPRO", NombreEquipo: "NSD570", Img: "nsd570.png" }
                            ]
                        },
                        {
                            nombre: 'B8',
                            idGabinete: 41,
                            equipos: [
                                { R3: "1515351", id: 1, UGabinete: "B8", PGabinete: "1", TipoId: 7, Marca: "FC", Tipo: "T-DISTOPT", NombreEquipo: "PCN-VAD", Img: "odf-fc.png" }
                            ]
                        },
                        {
                            nombre: 'B9',
                            idGabinete: 42,
                            equipos: [
                                { R3: "778296", id: 1, UGabinete: "B09", PGabinete: "01", TipoId: 9, Marca: "NIZ-RMY", Tipo: "T-TOPTICA", NombreEquipo: "FOX 515", Img: 'Fox.png' },

                                { R3: "201595", id: 1, UGabinete: "B09", PGabinete: "02", TipoId: 9, Marca: "NIZ-MPA-PCN", Tipo: "T-TOPTICA", NombreEquipo: "FOX 615", Img: 'Fox615.png' }

                            ]
                        },
                        {
                            nombre: 'B10',
                            idGabinete: 43,
                            "equipos": [
                                { R3: "2010800", id: 1, UGabinete: "B10", PGabinete: "01", TipoId: 8, Marca: "ECI TELECOM", Tipo: "T-TOPTICA", NombreEquipo: "NTP-1020", Img: "cisco-1020.png" }
                            ]
                        },
                        {
                            nombre: 'B11',
                            idGabinete: 44,
                            equipos: [
                                { R3: "2049156", id: 18, UGabinete: "B11", PGabinete: 1, TipoId: 5, Marca: "LT NIZ-93170-RMY", Tipo: "T-RADOPL", NombreEquipo: "POWER LINK", Img: "powerlink.png" },
                                { R3: "2049157", id: 19, UGabinete: "B11", PGabinete: 2, TipoId: 6, Marca: "LT NIZ-93170-RMY", Tipo: "T-TELEPRO", NombreEquipo: "SWT3000", Img: "swt3000.png" }
                            ]
                        },
                        {
                            nombre: 'B20',
                            idGabinete: 53,
                            equipos: [
                            { R3: "2293907", "id": 1, "UGabinete":"B20", "PGabinete":"01" ,"TipoId": 10 , "Marca":"CISCO", "Tipo":"T-EXTTEL", "NombreEquipo":"EXT 35102", Img: 'telefono.png' }
                            ]
                        },
                    ]
                },
                {
                    nombre: 'BLM',
                    subestacion: []
                }

            ]
        }
    },
    methods: {
        showFicha(id) {
            this.$router.push('/ficha?equipo=' + id)
        },
        pintarImagen() {

            return `<img style="height:20px; width:10px;" src="../assets/Rack/riel2small.png">`
        },
        checkGabinete(id) {
            if (id > 0) {
                //aqui ponemos la funcion de obtenes y comprobar el gabinete 
                let busquedaGabinete = this.getSubestacionById(id)
                if (busquedaGabinete.findGabinete) {
                    this.specificGabinet = true;
                    this.listaEquipos = busquedaGabinete.datosGabinete.equipos;
                    this.actualRack = busquedaGabinete.datosGabinete.nombre
                } else {
                    this.specificGabinet = false;
                }
            } else {
                this.specificGabinet = false;
            }

        },
        getSubestacionById(id) {

            let findGabinete = false;
            let datosGabinete = []
            let gabineteABuscar = id

            _.forEach(this.subestaciones, function (value) {
                _.forEach(value.subestacion, function (value2) {
                    if (value2.idGabinete == gabineteABuscar) {
                        findGabinete = true
                        datosGabinete = value2
                    }

                });
            });

            return {
                mensaje: 'retorno',
                findGabinete,
                datosGabinete
            }

        }
    }
}
</script>

<style>
#actual {
    padding: 20px;
}

#fondo {
    width: 100%;
    height: 1000px;
    background-image: url('~@/assets/finalGood.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 40px;
}

.list-group-item {
    background-color: transparent;
}
</style>