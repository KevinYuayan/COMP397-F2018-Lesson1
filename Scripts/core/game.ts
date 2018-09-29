//IIFE - Immediately Invoked Function Expression
(function(){
    // game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;
    
    // Game objects
    let ocean:objects.Ocean;
    let player:objects.Player;

    let assetManifest = [
        {id: "plane", src: "/Assets/images/plane.png"},
        {id: "cloud", src: "/Assets/images/cloud.png"},
        {id: "island", src: "/Assets/images/island.png"},
        {id: "ocean", src: "/Assets/images/ocean.gif"},
        {id: "engineSound", src: "/Assets/audio/engine.ogg"},
        {id: "thunderSound", src: "/Assets/audio/thunder.ogg"},
        {id: "yaySound", src: "/Assets/audio/yay.ogg"}
        
    ]


    function Init():void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager;// creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound) // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets in the assetManifest
        assetManager.on("complete", Start); // Calls start when assets are finished loading
    }

    function Start():void {
        console.log(`%c Game Started...`,"color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        Main();
    }

    // this is the main game loop
    function Update():void {
        player.Update();
        ocean.Update();

        stage.update();

    }

    function Main():void {

        // adds ocean to the stage
        ocean = new objects.Ocean();
        stage.addChild(ocean);

         // adds player to the stage
        player = new objects.Player();
        stage.addChild(player);
    }

    window.addEventListener("load", Init);
})();