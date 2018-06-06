new Vue({
    el: '#menu',
    data: {
        showMenu: false
    }
})

new Vue({
    el: '#pop-div',
    data: {
        pop: false
      
    },
    methods: {
        popUp() {
            this.pop = true;
            
        }
    }
})