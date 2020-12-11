
// primero instanciamos vue.js
const app = new Vue({

    el:'#app',
    // los corchetes nos indican que estamos creando un objeto
    data: {

        titulo:'Hola Mundo con Vue',
        frutas:[
            {nombre:'manzana',cantidad:20},
            {nombre:'pera',cantidad:0},
            {nombre:'platano',cantidad:30}
            
        ],

        hauls: [
            {
                guid: 'c983676527664b04b77318f0fb74db2b',
                zipFrom: 30083,
                zipTo: 33178,
                cityFrom: 'Stone Mountain, GA',
                state_from: '',
                state_to: '',
                cityTo: 'Miami, FL',
                accessorials_from: [
                    'Non-Hazmat'
                ],
                accessorials_to: [
                    'Non-Hazmat'
                ],
                accessorials: [
                    'Non-Hazmat'
                ],
                commodity: [
                    {
                        
                        dimensions: '48.0 x 48.0 x 48.0 inch',
                        huCount: '1 Pallet',
                        weight: '37479.0 lb',
                        description:'',
                        contribution: '100%',
                        oversize: false
                    },
                    {
                        
                        dimensions: '48.0 x 48.0 x 48.0 inch',
                        huCount: '1 Pallet',
                        weight: '37479.0 lb',
                        description:'',
                        contribution: '100%',
                        oversize: false
                    }
                ],
                
            }
        ],
    
       nuevaFruta:'',
       total:0
    },

    methods:{
    agregarRow(){
        this.hauls[0].commodity.push({
        

            dimensions: '48.0 x 48.0 x 48.0 inch', hu_count: '1 Pallet',
            weight: '37479.0 lb',description:this.nuevaFruta,contribution: '100%',
            oversize: false
    

        });
        this.nuevaFruta='';
    }
    },
    //funciones en javascript
    computed:{
      
    //   sumarFrutas(){
    //   this.total=0;
    //   for (fruta of this.frutas){

    //     this.total= this.total + fruta.cantidad;
    //   }
    //   return this.total;

    //   } 


    
    
    }

})
