<template>
    <div v-if="loading" class="preloader">
        <div class="spinner"></div>
        <p>Загрузка...</p>
    </div>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #27292A;
    color: #ffffff;
    gap: 1.2vw;
    font-size: 1.2vw;
    z-index: 9999;
    font-family: "Inter", sans-serif;
}

.spinner {
    border: 0.6vw solid #f3f3f3;
    border-top: 0.6vw solid #3498db;
    border-radius: 50%;
    width: 5vw;
    height: 5vw;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media (max-width: 1440px){

.preloader {
    gap: 2vw;
    font-size: 2.5vw;
}

.spinner {
    border: 1vw solid #f3f3f3;
    border-top: 1vw solid #3498db;
    border-radius: 50%;
    width: 8vw;
    height: 8vw;
    animation: spin 1s linear infinite;
}

}

@media (max-width: 1024px) {

.preloader {
    gap: 3vw;
    font-size: 3.5vw;
}

.spinner {
    border: 1.6vw solid #f3f3f3;
    border-top: 1.6vw solid #3498db;
    border-radius: 50%;
    width: 13vw;
    height: 13vw;
    animation: spin 1s linear infinite;
}

}

@media (max-width: 768px) {

.preloader {
    gap: 3vw;
    font-size: 5vw;
}

.spinner {
    border: 2vw solid #f3f3f3;
    border-top: 2vw solid #3498db;
    border-radius: 50%;
    width: 17vw;
    height: 17vw;
    animation: spin 1s linear infinite;
}

}

@media (max-width: 600px) {

.preloader {
    gap: 3.8vw;
    font-size: 5.5vw;
}

.spinner {
    border: 2.5vw solid #f3f3f3;
    border-top: 2.5vw solid #3498db;
    border-radius: 50%;
    width: 22vw;
    height: 22vw;
    animation: spin 1s linear infinite;
}

}

@media (max-width: 480px) {

.preloader {
    gap: 3.8vw;
    font-size: 5.5vw;
}

.spinner {
    border: 3vw solid #f3f3f3;
    border-top: 3vw solid #3498db;
    border-radius: 50%;
    width: 25vw;
    height: 25vw;
    animation: spin 1s linear infinite;
}

}
</style>
