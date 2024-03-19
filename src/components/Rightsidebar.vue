<template>
  <div>
    <section class="right-section">
      <!-- <div></div> -->
      <!-- <div style="flex: 1;">
      </div> -->
      <aside class="right-bar" :class="{ 'open': isDrawerOpen }">
        <section class="plus-icon">
          <img src="../assets/icons/puls_icon.svg" />
        </section>
        <section class="middle-icons">
          <div class="middle-right-icon">
            <img src="../assets//icons/mobius_ai.svg" />
            <img src="../assets/icons/contructs.svg" />
            <img src="../assets//icons/market_place_management.svg" alt="Marketplace" @click="toggleDrawer" />
            <img src="../assets/icons/log_history.svg" />
            <img src="../assets/icons/collaborate.svg" />
            <img src="../assets/icons/notifications.svg" />
          </div>
          <div class="delete-icon">
            <img src="../assets/icons/Delete.svg" />
          </div>
        </section>
      </aside>
    </section>
    <section class="drawer" :class="{ 'open': isDrawerOpen }">
      <!-- Drawer content -->
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
      this.$emit('toggle-drawer');
    }
    // if (this.$router) {
    //   this.$router.push({ name: 'Productmanagement' });
    // } else {
    //   console.error("Vue Router is not properly initialized.");
    // }
  }
}

</script>

<style scoped>
.right-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  z-index: 999;
}

.right-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid #dde5e9;
  border-right: 1px solid #dde5e9;
  background: #fff;
  height: 100%;
  width: 50px;
  position: fixed;
  top: 0;
  right: 0px;
  z-index: 1;
  transition: right 0.3s ease;
}

.middle-icons {
  width: 100%;
  margin-top: auto;

}

.plus-icon {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 12px;
}

.middle-right-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  width: 100%;
}

.middle-right-icon img {
  margin: 10px;

}

.delete-icon {
  display: flex;
  flex-direction: column;
}

.drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
  z-index: 2;
  transition: right 0.3s ease;
}

.open {
  right: 700px;
}
</style>
