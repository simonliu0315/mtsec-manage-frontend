<template>
    <canvas ref="canvas"></canvas>
</template>

<script setup name="particle" lang="ts">
import { ref, onMounted } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null);


interface Particle {
    x: number;
    y: number;
    speed: number;
    direction: number;
    size: number;
    color: string;
    targetX: number;
    targetY: number;
    life: number;
    maxLife: number;
}

const particles: Particle[] = [];

onMounted(() => {
    if (!canvas.value) return;

    const ctx = canvas.value.getContext('2d')!;
    const canvasWidth = window.innerWidth;;
    const canvasHeight = window.innerHeight;

    // 初始化粒子
    ctx.beginPath();
    function init() {
        for (let i = 0; i < 1000; i++) {
        particles.push({
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
            speed: Math.random() * 1,
            direction: Math.random() * Math.PI * 2,
            size: Math.random() * 2,
            color: `rgba(0, ${Math.random() * 255}, 255, 0.5)`,
            targetX: Math.random() * canvasWidth, // 隨機設定目標 X 座標
            targetY: Math.random() * canvasWidth,
            life: Math.random() * 100,
            maxLife: 100,
        });
    }
    }
    

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        particles.forEach(particle => {
            particle.x += Math.cos(particle.direction) * particle.speed;
            particle.y += Math.sin(particle.direction) * particle.speed;
            //const xProgress = particle.x / canvasWidth;
            //particle.y += canvasHeight * (Math.sin(xProgress * Math.PI* 2) + 1) / 2;
/*
            // S形路徑計算示例 (可根據需要調整)
            const xProgress = particle.x / canvasWidth;
            const y = canvasHeight * (Math.sin(xProgress * Math.PI* 2) + 1) / 2;
            particle.targetY = y;

*/
            // 向目標位置移動
            //particle.x += (particle.targetX - particle.x) * 0.01;
            //particle.y += (particle.targetY - particle.y) * 0.01;

            // 碰撞检测
            if (particle.x > canvasWidth) particle.x = 0;
            //if (particle.x < 0) particle.x = canvasWidth;
            if (particle.y > canvasHeight) particle.y = 0;
            //if (particle.y < 0) particle.y = 0;

            // 随机改变方向
            particle.direction += (Math.random() - 0.5) * 0.02;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
    }
    init();
    animate();
});
</script>