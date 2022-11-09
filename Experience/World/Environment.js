import * as THREE from "three"

import Experience from "../Experience"

import gsap from "gsap";

export default class Environment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        
        this.setSunlight()
    }

    setSunlight(){
        this.sunlight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunlight.castShadow = true;
        this.sunlight.shadow.camera.far = 20;
        this.sunlight.shadow.mapSize.set(2048,2048);
        this.sunlight.shadow.normalBias = 0.05;
        
        //const helper = new THREE.CameraHelper(this.sunlight.shadow.camera);
        //this.scene.add(helper);

        this.sunlight.position.set(-1, 5, 4);
        this.scene.add(this.sunlight);

        this.ambientLight = new THREE.AmbientLight("#ffffff",1);
        this.scene.add(this.ambientLight)
    }

    switchTheme(theme){
        if(theme === "dark"){
            gsap.to(this.sunlight.color,{
                r: 0.17,
                g: 0.23,
                b: 0.68
            });
            gsap.to(this.ambientLight.color,{
                r: 0.17,
                g: 0.23,
                b: 0.68
            });
            gsap.to(this.sunlight, {
                intensity: 0.78
            })
            gsap.to(this.ambientLight, {
                intensity: 0.78
            })
        }else{
            gsap.to(this.sunlight.color,{
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255
            });
            gsap.to(this.ambientLight.color,{
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255
            });
            gsap.to(this.sunlight, {
                intensity: 1
            })
            gsap.to(this.ambientLight, {
                intensity: 1
            })
        }
    }

    resize(){
    }

    update(){
    }
}