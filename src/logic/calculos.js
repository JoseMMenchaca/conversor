import isNumber from "./IsNumber";

export default function calculos(moneda1,moneda2,valor){
           const euro=0.91;
        const chile=868.02;
        const argentina=356.30;
        const bolivia=6.96;
        const brasil=4.90;
        const colombia=4054.43;
        const mexico=17.12;
        const peru=3.73;
        const paraguay=7415.19;
        const uruguay=38.96;
        const venezuela=35.42;
        
        
        function dolar(moneda,n){
            let dolares=0;
            if(moneda=="EUROS")
                dolares=n/euro;
            
            if(moneda=="PESOS CHILENOS")
                dolares=n/chile;
        
            if(moneda=="PESOS ARGENTINOS")
                dolares=n/argentina;
            
            if(moneda=="BOLIVIANOS")
                dolares=n/bolivia;
            
            if(moneda=="REALES BRASILEROS")
                dolares=n/brasil;
            
            if(moneda=="PESO COLOMBIANO")
                dolares=n/colombia;
            
            if(moneda=="PESOS MEXICANOS")
                dolares=n/mexico;
            
            if(moneda=="SOLES PERUANOS")
                dolares=n/peru;
                
            if(moneda=="GUARANIES PARAGUAYOS")
                dolares=n/paraguay;
           
            if(moneda=="PESOS URUGUAYOS")
                dolares=n/uruguay;
           
            if(moneda=="BOLIVARES VENEZOLANOS")
                dolares=n/venezuela;
           
        return dolares;
    }

    function dolar_moneda(moneda,n){
        let conver;
        if(moneda=="EUROS")
            conver=n*euro;
        
        if(moneda=="PESOS CHILENOS")
            conver=n*chile;
    
        if(moneda=="PESOS ARGENTINOS")
            conver=n*argentina;
        
        if(moneda=="BOLIVIANOS")
            conver=n*bolivia;
        
        if(moneda=="REALES BRASILEROS")
            conver=n*brasil;
        
        if(moneda=="PESO COLOMBIANO")
            conver=n*colombia;
        
        if(moneda=="PESOS MEXICANOS")
            conver=n*mexico;
        
        if(moneda=="SOLES PERUANOS")
            conver=n*peru;
            
        if(moneda=="GUARANIES PARAGUAYOS")
            conver=n*paraguay;
       
        if(moneda=="PESOS URUGUAYOS")
            conver=n*uruguay;
       
        if(moneda=="BOLIVARES VENEZOLANOS")
            conver=n*venezuela;
       
        return conver;
    }
    if(isNumber(valor)){
        if(moneda1===' ')
            return "NO SE ENCUENTRA LA MONEDA DE ORIGEN";
        if(moneda1==" ")
            return "NO SE ENCUENTRA LA MONEDA DE CAMBIO";
        if(moneda1==moneda2){
            return valor;
        }

        if(moneda1!="DOLARES"){
            let conversion_dolares=dolar(moneda1,valor);
            if(moneda2=="DOLARES"){
                return conversion_dolares;
            }
            else{
                let conversion=dolar_moneda(moneda2,conversion_dolares);
                return conversion;
            }
        }
        if(moneda1=="DOLARES"){
            let conversion=dolar_moneda(moneda2,valor);
                return conversion;
        }

    }
    else{
        return "0"
    }
}