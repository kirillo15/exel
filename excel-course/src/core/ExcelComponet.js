import {DomListener} from '@core/DomListener'

export class ExcelComponet extends DomListener {
    //возвращает шаблон и функционал компонента
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }

    toHTML(){
        return ''
    }

    init() {
        this.initDOMListeners()
    }
}

