const jovoModel = require('jovo-model-util');


function build() {
    const validators = [
        {
            path: 'src/Interfaces',
            types: [
                'JovoModelNlpjsData'
            ]
        }
    ];

    return jovoModel.createValidators('validators', validators);
}


exports.build = build;

exports.default = build;
