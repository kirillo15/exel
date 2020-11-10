import {$} from '../../dom'
export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }
    //возвращает ноду для excel

    getRoot() {
        const $root =   $.create('div', 'excel')

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })

        return $root
    }
    //что-то сладываем в шаблон
    render() {
        // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
        this.$el.append(this.getRoot())

        this.components.forEach(component => component.init())
    }
}
