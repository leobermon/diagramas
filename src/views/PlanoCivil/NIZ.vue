<template >

    <div style="height: 100vh;  background-color:red;">

        <table class="table table-borderless" id="nine" >
            <thead>
                <tr>
                    <th colspan="30">
                        <h1>Subestacion NIZUC - NIZ</h1>
                    </th>
                </tr>
            </thead>

            <tr>
                <td colspan="18"></td>
                <td colspan="12" class="fGris" style="border-radius: 10px 10px 0 0;"></td>
            </tr>

            <tr>
                <td colspan="18"></td>
                <td class="fGris"></td>
                <td colspan="3"><br> <br></td>
                <td colspan="7" rowspan="5" class="align-middle"> <strong>CUARTO DE BATERIAS</strong> </td>
                <td class="fGris"></td>
            </tr>

            <tr>
                <td colspan="6"></td>
                <td colspan="16" class="fGris" style="border-radius: 10px 10px 0 0;"></td>
                <td class="fGris"></td>
            </tr>

            <tr>
                <td colspan="6"></td>
                <td class="fGris"></td>
                <td colspan="2" class="align-middle"> <strong> BAÑO </strong> </td>
                <td class="fGris"></td>
                <td colspan="7" rowspan="3" class="align-middle"> <strong>CUARTO CARGADORES</strong> </td>
                <td class="fGris"></td>
                <td colspan="3" rowspan="3" class="align-middle"> <strong>CUARTO SICLE</strong> </td>
                <td class="fGris"></td>
                <td class="fGris"></td>
            </tr>

            <tr>
                <td colspan="6"></td>
                <td class="fGris"></td>
                <td></td>
                <td class="fGris"></td>
                <td class="fGris"></td>
                <td class="fGris"></td>
                <td class="fGris"></td>
                <td class="fGris"></td>
            </tr>

            <tr>
                <td colspan="6"></td>
                <td class="fGris"></td>
                <td colspan="3"> <br><br> </td>
                <td class="fGris"></td>
                <td class="fGris"></td>
                <td class="fGris"></td>
            </tr>
            <tr>
                <td class="fGris" style="border-radius:10px 0 0  0"></td>
                <td class="fExit" style="font-size:8px"></td>
                <td class="fGris" colspan="5"></td>
                <td></td>
                <td colspan="7" class="fGris"></td>
                <td></td>
                <td class="fGris" colspan="3"></td>

                <td></td>
                <td colspan="10" class="fGris"></td>
            </tr>
            <tr>
                <td class="fGris"></td>
                <td colspan="28"></td>
                <td class="fGris"></td>
            </tr>
            <tr>
                <td class="fGris"></td>
                <td></td>

                <td class="fRed Enable" @click="showRack(1)">A1</td>
                <td class="fRed Enable" @click="showRack(2)">A2</td>
    
                <td class="fRed Enable" @click="showRack(3)">A3</td>
                <td class="fRed Enable" @click="showRack(4)">A4</td>
                <td class="fRed Enable" @click="showRack(5)">A5</td>
                <td class="fRed">A6</td>
                <td class="fRed Enable" @click="showRack(7)">A7</td>
                <td class="fRed">A8</td>
                <td colspan="5"></td>
                <td class="fRed">CA</td>
                <td class="fRed">CA</td>
                <td class="fRed">CA</td>
                <td class="fRed">CD</td>
                <td class="fRed">CD</td>
                <td class="fRed">CD</td>
                <td></td>
                <td class="fRed"></td>
                <td class="fRed Enable" @click="showRack(29)">A29</td>
                <td class="fRed Enable" @click="showRack(30)">A30</td>
                <td class="fRed Enable" @click="showRack(31)">A31</td>

                <td class="fRed">A32</td>
                <td class="fRed Enable" @click="showRack(33)">A33</td>

                <td></td>
                <td class="fGris"></td>
            </tr>
            <tr>
                <td class="fGris"></td>
                <td colspan="28"></td>
                <td class="fGris"></td>
            </tr>
            <tr>
                <td class="fGris"></td>
                <td></td>
                <td class="fRed">B1</td>
                <td class="fRed Enable" @click="showRack(35)">B2</td>
                <td class="fRed Enable" @click="showRack(36)">B3</td>
                <td class="fRed Enable" @click="showRack(37)">B4</td>
                <td class="fRed">B5</td>
                <td class="fRed Enable" @click="showRack(39)">B6</td>
                <td class="fRed Enable" @click="showRack(40)">B7</td>
                <td class="fRed Enable" @click="showRack(41)">B8</td>
                <td class="fRed Enable" @click="showRack(42)">B9</td>
                <td class="fRed Enable" @click="showRack(43)">B10</td>
                <td class="fRed Enable" @click="showRack(44)">B11</td>
                <td></td>
                <td class="fRed">B12</td>
                <td class="fRed">B13</td>
                <td class="fRed">B14</td>
                <td class="fRed">B15</td>
                <td></td>
                <td class="fRed">B16</td>
                <td></td>

                <td colspan="4" class="fRed">B17</td>
                <td class="fRed">B18</td>
                <td class="fRed">B19</td>
                <td class="fRed Enable" @click="showRack(53)">B20</td>
                <td></td>
                <td class="fGris"></td>
            </tr>
            <tr>
                <td class="fGris"></td>
                <td colspan="28"></td>
                <td class="fGris"></td>
            </tr>
            <tr>
                <td class="fGris"></td>
                <td></td>
                <td class="fRed">C1</td>
                <td class="fRed">C2</td>
                <td class="fRed">C3</td>
                <td class="fRed">C4</td>
                <td class="fRed">C5</td>
                <td class="fRed">C6</td>
                <td class="fRed">C7</td>
                <td class="fRed">C8</td>
                <td class="fRed">C9</td>
                <td class="fRed">C10</td>
                <td colspan="3"></td>
                <td class="fRed">C11</td>
                <td class="fRed">C12</td>
                <td class="fRed">C13</td>
                <td class="fRed">C14</td>
                <td class="fRed">C15</td>
                <td class="fRed">C16</td>
                <td></td>
                <td class="fRed">C17</td>
                <td class="fRed">C18</td>
                <td class="fRed">C19</td>
                <td class="fRed">C20</td>
                <td class="fRed">C21</td>
                <td class="fRed">C22</td>

                <td></td>
                <td class="fGris"></td>
            </tr>
            <tr>
                <td class="fGris"></td>
                <td colspan="28"></td>
                <td class="fExit"></td>
            </tr>
            <tr class="fGris">
                <td colspan="30" style="border-radius:0 0 10px 10px"></td>
            </tr>
            <tr>
                <td colspan="30"></td>
            </tr>
            <tr>
                <td colspan="4"></td>
                <td style="background-color: cornflowerblue; border: solid black 1px;"></td>
                <td colspan="3">Disponible</td>
                <td colspan="1"></td>
                <td style="background-color: aliceblue; border: solid black 1px;"></td>
                <td colspan="3">Pendiente</td>
                <td colspan="1"></td>
                <td style="background-color:darkgray; border: solid black 1px; "></td>
                <td colspan="3">Entrada</td>


                <td colspan="15" class="text-right">CFE Zona Transmision Cancun - Octubre 2022</td>
            </tr>



            <br> <br> <br><br> <br> <br> 
        </table>

    </div>

</template>

<script>

export default {
    name: 'RackView',
    props: ['id'],
    data() {
        return {
            actualSub: 'NIZ'
        }
    },
    methods: {
        showRack(rack) {
            this.$router.push('/rack/' + rack)
        }
    }
}
</script>

<style scoped>
#nine {

    background-color: #9ec3e8;
    background-image: linear-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.2) 2px, transparent 1px),
        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, .1) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;



}

.fGris {
    background-color: black;
}

.fExit {
    background-color: darkgray;
}

.smallText {
    font-size: 10px;
    transform: rotate(45deg);
}

.fRed {
    border-radius: 5px;
    background-color: aliceblue;
    border: solid black 1px !important;
}

.Enable {
    background-color: cornflowerblue;
    font-weight: bold;
    cursor: pointer;
}

.table td,
.table th {
    border-top: 0px solid #dee2e6;
}

.table-borderless>tbody>tr>td,
.table-borderless>tbody>tr>th,
.table-borderless>tfoot>tr>td,
.table-borderless>tfoot>tr>th,
.table-borderless>thead>tr>td,
.table-borderless>thead>tr>th {
    border: none;
}
</style> 
