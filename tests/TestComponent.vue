<script setup lang="ts"></script>

<template>
    <div>
        <div
            id="full-directive"
            v-view-transition-name="'square'"
        />
        <div
            id="short-directive"
            v-trans="'circle'"
        />
        <div
            id="object-directive"
            v-view-transition-name="{ triangle: true }"
        />
        <div
            id="object-directive-false"
            v-trans="{ triangle: false }"
        />
    </div>
</template>

<style></style>
