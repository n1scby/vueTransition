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

 
new Vue({
    el: '#bs-modal-div',
    data: {
        showBSModal: false
      
    },
    methods: {
        popUpBSModal() {
            this.showBSModal = true;
            $('#bs-modal').modal({
                show: true,             // show modal
                backdrop: 'static',     // prevent closing event on any window click
                keyboard: false         // prevent closing on Esc
            });
            
        }
    }
    })