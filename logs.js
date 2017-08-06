log = {
    info: function (info) {
        console.log('Info: ' + info);
    },
    warning: function (warning) {
        alert('Warning: ' + warning);
    },
    error: function (error) {
        console.log('Error: ' + error);
    }
};

module.exports = log;