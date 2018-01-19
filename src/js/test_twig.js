

const template = {
    render: function () {
        const template = require("../view/_element.php.twig");
        return template({
            foo: 'Hello World!',
            items: [1,2,3]
        })
    }
};

export default template;