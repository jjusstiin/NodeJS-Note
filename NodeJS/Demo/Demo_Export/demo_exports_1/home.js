module.exports = function (testData) {
    this.testData = testData;

    this.index = function () {
        console.log("Index() is running.");
    }
    
    this.about = function () {
        console.log("About() is running.");
    }    
}

