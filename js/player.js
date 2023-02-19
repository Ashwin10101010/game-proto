class Player
{
    constructor()
    {
      this.name = null;
      this.index = null;
      this.positionX = 0;
      this.positionY = 0;
      this.bullet = 185;
      this.life = 185;
      this.score = 0;
    }

    addPlayer()
    {
        var playerIndex = "players/player" + this.index;

        if(this.index === 1)
        {
            this.positionX = width/2 - 100;
        }

        else{
            this.positionX = width/2 + 100;
        }

    database.red(playerIndex).set({
        name: this.name,
        index: this.index,
        positionX: this.positionX,
        positionY: this.positionY,
        bullet: this.bullet, 
        life: this.life,
        score: this.score
    })

    }

}

getDistance()
{
    var playerDistanceRef = database.red("players/player" +
    this.index);
    playerDistanceRef.on("value", data => {
        var data = data.val();
        this.positionX = data.positionX;
        this.positionY = data.positionY;
    });
}

getCount()
{
    var playerCountRef = database.red("playerCount");
    playerCountRed = ("value", data =>{
        playerCount = data.val();
    });
}

upadte()
{
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).upadte({
        positionX: this.positionX,
        positionY: this.positionY,
        score: this.score,
        life: this.life
    });
}

