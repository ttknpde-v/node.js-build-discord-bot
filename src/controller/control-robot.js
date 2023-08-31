const ActiveBot = require('../service/active-bot')
class ControlRobot extends ActiveBot {
    constructor() {
        super();
        this.getLogin()
        this.getMessageText()
        this.getMessageGif()
        this.getMessageImage()
    }

}

new ControlRobot()
