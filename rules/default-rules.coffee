angular.module 'validator.rules', ['validator']

.config ['$validatorProvider', ($validatorProvider) ->
    # ----------------------------------------
    # required
    # ----------------------------------------
    $validatorProvider.register 'required',
        invoke: 'watch'
        validator: /.+/
        error: '此处为必填项。'

    # ----------------------------------------
    # number
    # ----------------------------------------
    $validatorProvider.register 'number',
        invoke: 'watch'
        validator: /^[-+]?[0-9]*[\.]?[0-9]*$/
        error: '此处需为数字。'

    # ----------------------------------------
    # email
    # ----------------------------------------
    $validatorProvider.register 'email',
        invoke: 'blur'
        validator: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        error: '此处需为电邮地址。'

    # ----------------------------------------
    # url
    # ----------------------------------------
    $validatorProvider.register 'url',
        invoke: 'blur'
        validator: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
        error: '此处需为网址。'
]
