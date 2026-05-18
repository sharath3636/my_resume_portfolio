import * as THREE from 'three';

export function initScene() {
    const canvas = document.getElementById('canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 5000);
    camera.position.set(0, 15, 100);

    // Lights
    scene.add(new THREE.AmbientLight(0x88aaff, 0.6));
    const l1 = new THREE.PointLight(0x00ffff, 8, 800); l1.position.set(50, 80, 150); scene.add(l1);
    const l2 = new THREE.PointLight(0xff66ff, 7, 800); l2.position.set(-60, -50, 180); scene.add(l2);

    // Floating Tech Stack
    const techGroup = [];
    const techColors = [0x61dafb, 0x00b4ff, 0x68a063, 0x3178c6, 0xff6bff];

    for (let i = 0; i < 80; i++) {
        const mesh = new THREE.Mesh(
            new THREE.IcosahedronGeometry(4 + Math.random() * 5, 1),
            new THREE.MeshPhongMaterial({
                color: techColors[i % techColors.length],
                emissive: techColors[i % techColors.length],
                wireframe: true
            })
        );
        mesh.position.set(
            (Math.random() - 0.5) * 220,
            (Math.random() - 0.5) * 160,
            -Math.random() * 1800
        );
        mesh.userData.speed = 1.2 + Math.random() * 2;
        scene.add(mesh);
        techGroup.push(mesh);
    }

    // Central Holographic Face
    const face = new THREE.Group();
    const head = new THREE.Mesh(
        new THREE.SphereGeometry(22, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0x0a1a2f, emissive: 0x0088ff, wireframe: true })
    );
    face.add(head);

    // Eyes
    const eyeMat = new THREE.MeshPhongMaterial({ color: 0x00ffff, emissive: 0x00ffff });
    const leftEye = new THREE.Mesh(new THREE.SphereGeometry(5, 16, 16), eyeMat);
    leftEye.position.set(-8, 8, 18);
    const rightEye = leftEye.clone();
    rightEye.position.x = 8;
    face.add(leftEye, rightEye);
    face.position.z = -120;
    scene.add(face);

    // Deep Tunnel Particles
    const count = 16000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pos[i3] = (Math.random() - 0.5) * 240;
        pos[i3+1] = (Math.random() - 0.5) * 180;
        pos[i3+2] = -i * 0.28;
        col[i3] = 0.3; col[i3+1] = 0.8; col[i3+2] = 1;
    }

    const particles = new THREE.Points(
        new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(pos, 3))
            .setAttribute('color', new THREE.BufferAttribute(col, 3)),
        new THREE.PointsMaterial({ size: 1.3, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending })
    );
    scene.add(particles);

    let t = 0;
    const animate = () => {
        requestAnimationFrame(animate);
        t += 0.016;

        techGroup.forEach(m => {
            m.position.z += m.userData.speed;
            if (m.position.z > 200) m.position.z = -2000;
            m.rotation.x += 0.01;
            m.rotation.y += 0.015;
        });

        face.rotation.y = Math.sin(t * 0.8) * 0.2;
        leftEye.scale.y = 1 + Math.sin(t * 6) * 0.2;
        rightEye.scale.y = 1 + Math.sin(t * 6) * 0.2;

        particles.rotation.y = t * 0.03;

        renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return { camera, face, techGroup, particles };
}