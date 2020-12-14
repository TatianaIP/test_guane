
// primero instanciamos vue.js
const app = new Vue({

    el:'#app',
    // los corchetes nos indican que estamos creando un objeto
    data: {

        titulo:'Tets guane',
    
        hauls: [
            {
                guid: 'c983676527664b04b77318f0fb74db2b',
                zipFrom: [30083],
                zipTo: [33178],
                cityFrom: ['Stone Mountain, GA'],
                stateFrom: '',
                stateTo: '',
                cityTo: ['Miami, FL'],
                accessorialsFrom: [
                    'Non-Hazmat'
                ],
                accessorials_to: [
                    'Non-Hazmat'


                ],
                accessorials: [
                    'Non-Hazmat','Airport','Delivery Non TSA','Airport Delivery TSA','Oversize/Overweight Permits',
                    'Escorts','Team Drivers', 'Non Stackable'
                ],
                commodity: [
                   
                   
                ],
                elementosCaja:[
                'Hazmat','Bonded','Tarps','Airport','Delivery Non TSA','Airport Delivery TSA','Oversize/Overweight Permits',
                'Escorts','Team Drivers', 'Non Stackable'

                ],

                
                
            }
        ],
    
       nuevoZipf:30083,
       nuevoCityf:'Stone Mountain, GA',
       nuevoZipt:33178,
       nuevoCityt:'Miami, FL',
       texto:'',
       texto2:'',
       select:[],
       result:[],
       posicion:0,
       i:0,
       indice:0,
       verdadero:0,
       total:0
    },

    methods:{
    agregarRow(){
        this.hauls[0].commodity.push({
        

            dimensions: '48.0 x 48.0 x 48.0 inch', huCount: '1 Pallet',
            weight: '37479.0 lb',description:this.texto,contribution: '100%',
            oversize: false
            

        });
        this.nuevaFruta='';
        
    },
    deleteRow()
     {
        
              for(this.i = 0 ; this.i <= this.select.length ; this.i++){

                     while(this.select[this.i] === true){
                        
                        this.select.splice(this.i,1);
                        this.hauls[0].commodity.splice(this.i,1);
                        this.verdadero++;
                     }
                                        
              }
              
              
    },
    agregarCaja(){
        this.hauls[0].accessorials.push(this.texto2);
        this.texto2='';
        
    },
    agregarZipf(){
        this.hauls[0].zipFrom.push(this.nuevoZipf);
        this.nuevoZipf='';
    },
    agregarCityf(){
        this.hauls[0].cityFrom.push(this.nuevoCityf);
        this.nuevoCityf='';
    },
    agregarZipt(){
        this.hauls[0].zipTo.push(this.nuevoZipt );
        this.nuevoZipt='';
    },
    agregarCityt(){
        this.hauls[0].cityTo.push( this.nuevoCityt );
        this.nuevoCityt='';
    }
},
    //funciones en javascript
    computed:{
      
        comprobar(){

            for(this.indice=0;this.indice<=this.hauls[0].elementosCaja.length; this.indice++){
    
                for(this.posicion=0; this.posicion<=this.hauls[0].accessorials.length; this.posicion++){
                   
                   if (this.hauls[0].elementosCaja[this.indice]===this.hauls[0].accessorials[this.posicion]){
                     
                        this.result[this.indice]=true;
                   }    
                }
            }
    
            }
            
    }

})
