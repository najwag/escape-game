var gameState = 0.0
var bakery, bakeryImg
var clothes, clothingImg
var escape, escapedImg
var grocery, groceryImg
var main, mainImg
var sport, sportsImg
var background
var leftArrow, rightArrow

function preload(){
    bakeryImg = loadImage("pics/bakery.jpg")
    
    clothingImg = loadImage("pics/clothing-mall.jpeg")
    
    escapedImg = loadImage("pics/escaped-mall.jpg")
    
    groceryImg = loadImage("pics/grocery-store.jpg")
    
    mainImg = loadImage("pics/main-mall.jpg")
    
    sportsImg = loadImage("pics/Sport_Shop_2007.webp") 

    leftArrow = loadImage("pics/left arrow.png")

    rightArrow = loadImage("pics/right arrow.png")
    }

    function setup(){

        createCanvas(400,400)
      //background image
      bg = createSprite(200,200,50,50);
      bg.addImage(mainImg);
      bg.scale = 1.3

      //arrows
      left = createSprite(-350,-375,20,20)
      left.addImage(leftArrow)

      right = createSprite(350, -375,20,20)
      right.addImage(rightArrow)
        }

  function draw(){

    background("black");
  }