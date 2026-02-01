function randomIndex() {
    return {
        index: '',
        getRandomIndex() {
            let idx = Math.floor(Math.random() * 10);
            console.log(idx);
            this.index = idx;
        }
    }
}

