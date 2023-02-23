class ElementUtils {

    static getValue(elementInfo) {
        try {
            const selector = ElementUtils._getSelector(elementInfo);
            const element = $(selector);
            if (element.length === 0) {
                throw new Error(`O elemento com selector ${selector} não existe`);
            }
            return element.val();
        } catch (error) {
            return error;
        }
    }

    static setValue(elementInfo, value) {
        try {
            const selector = ElementUtils._getSelector(elementInfo);
            const element = $(selector);
            if (element.length === 0) {
                throw new Error(`O elemento com selector ${selector} não existe`);
            }
            element.val(value);
            return true;
        } catch (error) {
            return false;
        }
    }

    static setClass(elementInfo, classToRemove, classToSet) {
        try {
            const selector = ElementUtils._getSelector(elementInfo);
            const element = $(selector);
            if (element.length === 0) {
                throw new Error(`O elemento com selector ${selector} não existe`);
            }
            element.removeClass(classToRemove).addClass(classToSet);
        } catch (error) {
            return error;
        }
    }

    static setText(elementInfo, value) {
        try {
            const selector = ElementUtils._getSelector(elementInfo);
            const element = $(selector);
            if (element.length === 0) {
                throw new Error(`O elemento com selector ${selector} não existe`);
            }
            element.text(value);
        } catch (error) {
            return error;
        }
    }

    static hide(elementInfo, animation) {
        try {
            const selector = ElementUtils._getSelector(elementInfo);
            const element = $(selector);
            if (element.length === 0) {
                throw new Error(`O elemento com selector ${selector} não existe`);
            }
            animation = animation || null;
            element.hide(animation);
            return true;
        } catch (error) {
            return error;
        }
    }

    static show(elementInfo, animation) {
        try {
            const selector = ElementUtils._getSelector(elementInfo);
            const element = $(selector);
            if (element.length === 0) {
                throw new Error(`O elemento com selector ${selector} não existe`);
            }
            animation = animation || null;
            element.show(animation);
            return true;
        } catch (error) {
            return error;
        }
    }

    static setCss(elementInfo, property, value) {
        try {
            const selector = ElementUtils._getSelector(elementInfo);
            const element = $(selector);
            if (element.length === 0) {
                throw new Error(`O elemento com selector ${selector} não existe`);
            }
            element.css(property, value);
            return true;
        } catch (error) {
            return error;
        }
    }
    
    static setAttr(elementInfo, property, value) {
        try {
            const selector = ElementUtils._getSelector(elementInfo);
            const element = $(selector);

            if (element.length === 0) {
                throw new Error(`O elemento com selector ${selector} não existe`);
            }
            element.attr(property, value);
            return true;
        } catch (error) {
            return error;
        }
    }

    static toast(title, message, type) {
        try{
            FLUIGC.toast({
                title: title,
                message: message,
                type: type
            });
        } catch (error) {
            return error;
        }
    }
    
    static getDateCurrent(time){
        let date = new Date();
        let day  = date.getDate();
        let month  = date.getMonth() + 1;
        let year  = date.getFullYear();
    
        let hours = date.getHours();
        let minutes = String(date.getMinutes()).padStart(2, '0');
        let currentTime = hours + ":" + minutes
    
        day  = (day<=9 ? "0"+day : day);
        month  = (month<=9 ? "0"+month : month);
        
        let newData
        time == true ? newData = day+"/"+month+"/"+year+" - "+currentTime : newData = day+"/"+month+"/"+year;
        return newData;
    }

    static formatCashInt(value){
        if(value == ''){
            var valor = 'R$ 0,00'
        }else{
            var valor = value
        }
        if(valor.indexOf('.') != -1 && valor.indexOf(',') != -1){
            var result = parseFloat(valor.replaceAll('.','').replaceAll(',', '.').replaceAll('R$', '').trim())
        }else if(valor.indexOf('.') != -1 && valor.indexOf(',') == -1){
            var result = parseFloat(valor)
        }else{
            var result = parseFloat(valor.replaceAll('.', '').replaceAll(',', '.').replaceAll('R$', ''))
        }
        return result
    }   

    static convertToCSV(arr) {
        const array = [Object.keys(arr[0])].concat(arr);
      
        return array.map((it) => {
          return Object.values(it).toString();
        }).join('\n');
    }

    static formatIntCash(value){
        if(value == ''){
            var valor = 0
        }else{
            var valor = value
        }
        const formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }
        if(typeof valor === 'string' || valor instanceof String){
            var valorformat = ElementUtils.formatCashInt(valor)
            if(valorformat >= 0){
                var valor = (valorformat.toLocaleString('pt-BR', formato));
            }else{
                valor = ''
            }
        }else{
            valor == undefined ? valor = '' : valor = (valor.toLocaleString('pt-BR', formato));
        }
        
        return valor
    }

    static _getSelector(elementInfo) {
        try{
            if(typeof elementInfo == 'string'){
                return $(`${elementInfo}`)
            }else{
                return $(elementInfo);
            }
        } catch (error){
            return error;
        }
    }

}