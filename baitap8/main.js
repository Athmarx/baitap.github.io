
let myRoot = new Vue ({
    el: "#root",
    data: function() {
    return {
                rows: [],
                columns: [],
                rowValue: 0,
                colValue: 0,
                ableToSee: false,
                addrow: 2,
                addcol: 2,
                message: ""
            };
        },
    methods: {
        createTable: function(){  
            this.ableToSee = true;  
            this.rows = [1,2];
            this.columns =[1,2];
            // console.log(this.rows);  
            // console.log(this.columns);  
        },
        addRow: function(){
            this.addrow += 1;
            this.rows.push(this.addrow);            
        },
        addColumn: function(){
            this.addcol += 1;
            this.columns.push(this.addcol);
        },
        removeRow: function(){
            this.message = "";
            if(this.rowValue  != 0 && !(isNaN(this.rowValue))){
                if( this.rowValue > this.rows.length){
                    let totalRow = this.rows.length;
                    this.message = `Table chỉ có ${totalRow} dòng`;
                    
                }
                else {
                    this.rows.splice(this.rowValue - 1,1);
                    
                    if(!this.rows.length){
                       this.ableToSee = false; 
                    }
                }
            }
            else {
                this.message = `Vui lòng nhập số dòng (lớn hơn 0)`;               
                
            }       
        },
        removeCol: function() {
            this.message = "";            
            if(this.colValue != 0 && !(isNaN(this.colValue))){
                if( this.colValue > this.columns.length){
                    let totalCol = this.columns.length;
                    this.message = `Table chỉ có ${totalCol} cột`;
                    
                }
                else{
                    this.columns.splice(this.colValue - 1,1);
                    this.colValue = 0;
                    if(!this.columns.length){
                        this.ableToSee = false; 
                     }
                }
            }
            else {
                this.message = `Vui lòng nhập số cột (lớn hơn 0)`;
                
                this.colValue = 0;
            }     
        },
        deleteTable: function(){
            this.ableToSee = false;
            this.columns = [];
            this.rows = [];
            this.addrow = 2;
            this.addcol = 2;
        }
    }
});