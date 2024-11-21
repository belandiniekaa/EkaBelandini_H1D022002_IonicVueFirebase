<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Profile</ion-title>

                <!-- Logout Button -->
                <ion-button slot="end" fill="clear" @click="logout" style="--color: gray;">
                    <ion-icon slot="end" :icon="exit"></ion-icon>
                    <ion-label>Logout</ion-label>
                </ion-button>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <!-- Avatar -->
            <div id="avatar-container">
                <ion-avatar>
                    <img alt="Avatar" :src="userPhoto" @error="handleImageError" />
                </ion-avatar>
            </div>

            <!-- Data Profile -->
            <ion-list>
                <ion-item>
                    <ion-input label="Nama" :value="user?.displayName" :readonly="true"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-input label="Email" :value="user?.email" :readonly="true"></ion-input>
                </ion-item>
            </ion-list>

            <!-- Tabs Menu -->
            <TabsMenu />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonLabel, IonIcon, IonButton, IonAvatar } from '@ionic/vue';
import { exit } from 'ionicons/icons';
import { computed, ref, onMounted } from 'vue';
import TabsMenu from '@/components/TabsMenu.vue';
import { useAuthStore } from '@/stores/auth'; // Store untuk mengelola auth
import { auth } from '@/utils/firebase'; // Firebase auth

// Ambil data pengguna dari auth store
const authStore = useAuthStore();
const user = computed(() => authStore.user);

// Foto profil pengguna (default jika tidak ada)
const userPhoto = ref(user.value?.photoURL || 'https://ionicframework.com/docs/img/demos/avatar.svg');

// Logout fungsi
const logout = () => {
    authStore.logout();
};

// Error handler untuk fallback jika foto profil gagal dimuat
function handleImageError() {
    userPhoto.value = 'https://ionicframework.com/docs/img/demos/avatar.svg';
}

// Perbarui foto profil ketika halaman dimuat
onMounted(() => {
    if (auth.currentUser) {
        userPhoto.value = auth.currentUser.photoURL || 'https://ionicframework.com/docs/img/demos/avatar.svg';
    }
});
</script>

<style scoped>
#avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

ion-avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

ion-button {
    font-size: 14px;
    --padding-start: 0;
    --padding-end: 0;
}
</style>
