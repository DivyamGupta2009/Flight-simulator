AFRAME.registerComponent("flying-birds", {
    init: function(){
        for(var i = 1; i <= 20; i++){
            var id = `hurdle${i}`
            //Position variables
            var posX = Math.random()*3000 + -1000
            var posY = Math.random() + -1
            var posZ = Math.random()*3000 + -1000
            var position = {x: posX, y: posY, z: posZ}
            this.flyingBirds(id, position)
        }
    },

    flyingBirds: (id, position) => {
        //Get the terrain element
        var terrainE1 = document.querySelector("#terrain")
        //Creating bird model entity
        var birdE1 = document.createElement("a-entity")
        //Setting multiple attributes
        birdE1.setAttribute("id", id);
        birdE1.setAttribute("position", position);
        birdE1.setAttribute("scale", {x: 500, y: 500, z: 500});
        birdE1.setAttribute("gltf-model", "../assets/models/flying_bird/scene.gltf");
        //Animated models
        birdE1.setAttribute("animation-mixer", {})
        //Set the static body of the physics system
        birdE1.setAttribute("static-body", {shape: "sphere", sphereRadius: 5})
        birdEl.setAttribute("game-play", {
            elementId: `#${id}`,
          });

        //Append the bird entity as the child of terrain entity
        terrainE1.appendChild(birdE1)
    },
})