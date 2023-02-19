class Form {
constructor()
{
    this.title = createElementH1("");
    this.playBTN = creatButton("Play");
    this.input = createInput("").attribute("placeholder, Enter Username");
    this.greeting = createElement("");
}

setElementsPosition()
{
    this.title.position(120, 160);
    this.playBTN.position(width / 2 - 90, height / 2 - 100);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    this.input.position(width / 2);
}

setElementsStyle()
{
    this.title.class("customTitle");
    this.playBTN.class("customplayBTN");
    this.input.class("customInput");
    this.greeting.class("customGreeting");
}

hide()
{
    this.greeting.hide();
    this.playBTN.hide();
    this.input.hide();
}

handleMousePressed()
{
    this.playBTN.mousePressed(() => {
        this.input.hide();
        this.playBTN.hide();
        this.greeting.html(message);
        var message = `Hell0 ${this.input.value()}
        </br> wait for another player to join the server ...`;
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayer();
        player.updatecount(playerCount);
        player.getDistance
    });
}

display()
{
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
}

}