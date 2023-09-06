const firebaseConfig = {
    apiKey: "AIzaSyBirdS9hfD2DsUT2z1eL0p2yEOm12xWExo",
    authDomain: "bolinha-38fc5.firebaseapp.com",
    databaseURL: "https://bolinha-38fc5-default-rtdb.firebaseio.com",
    projectId: "bolinha-38fc5",
    storageBucket: "bolinha-38fc5.appspot.com",
    messagingSenderId: "435491099545",
    appId: "1:435491099545:web:8eb72bec80c05e3f8c7908"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
const database = firebase.database()

var bola

function setup() {

    createCanvas(500, 500)

    bola = createSprite(250, 250, 10, 10)

    bola.shapeColor = "red"

}

function draw() {
    background("black")

    if (keyIsDown(LEFT_ARROW)) {
        bola.position.x -= 5;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        bola.position.x += 5;
      }

      if (keyIsDown(UP_ARROW)) {
        bola.position.y -= 5;
      }

      if (keyIsDown(DOWN_ARROW)) {
        bola.position.y += 5;
      }
    


    drawSprites()
    position={
        x:bola.position.x,
        y:bola.position.y
    }

database.ref("bola").set(position)
    
}

function firebaseError(err) {
    console.error('Erro no Firebase:', err);
  }
