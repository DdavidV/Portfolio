import * as THREE from "three"

import Experience from "./Experience"

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createOrthographicCamera();
    }

    createOrthographicCamera(){
        this.OrthographicCamera = new THREE.OrthographicCamera((-this.sizes.aspect * this.sizes.fustrum)/2, (this.sizes.aspect * this.sizes.fustrum)/2, this.sizes.fustrum/2, -this.sizes.fustrum/2, -50, 50 );
        this.scene.add(this.OrthographicCamera)
        this.OrthographicCamera.position.y = 3.5;
        this.OrthographicCamera.position.z = 5;
        this.OrthographicCamera.rotation.x = -Math.PI /6
    }

    resize(){
        this.OrthographicCamera.left = (-this.sizes.aspect * this.sizes.fustrum)/2
        this.OrthographicCamera.right = (this.sizes.aspect * this.sizes.fustrum)/2
        this.OrthographicCamera.top = this.sizes.fustrum/2
        this.OrthographicCamera.bottom = -this.sizes.fustrum/2
        this.OrthographicCamera.updateProjectionMatrix();
    }

    update(){
    }
}