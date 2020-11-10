import { capitalize } from "./util"

//добавляет и удаляет слушателей
export class DomListener {
    constructor($root, listeners = []) {
        if(!$root) {
            throw new Error('problem DomListener')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
          const method = getMethodName(listener)
          if (!this[method]) {
            const name = this.name || ''
            throw new Error(
                `Method ${method} is not implemented in ${name} Component`
            )
          }
          // Тоже самое что и addEventListener
          this.$root.on(listener, this[method].bind(this))
        })
      }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            // if(!this[method]) {
            //     throw new Error('initDOM')
            // }
            this.$root.del(listener, this[method].bind(this))
        })
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName)  
}