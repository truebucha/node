class User {
    constructor(options) {
        this.height = options.height
    }

    jump() {
        this.log(this.height)
    }

    log(message) {
        console.log(message);
    }
}

class Admin extends User {
    constructor(options) {
        super(options)
        this.access = options.access
    }

    kick() {
        super.jump()
        this.log(this.access)
    }
}

const user = new User({height: 12});
user.jump()

const admin = new Admin({height: 32, access: "full"});
admin.kick()