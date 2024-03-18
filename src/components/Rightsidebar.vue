<template>
  <div>
    <section class="right-section">
      <!-- <div></div> -->
      <!-- <div style="flex: 1;">
      </div> -->
      <aside class="right-bar">
        <section class="plus-icon">
          <img src="../assets/icons/puls_icon.svg" />
        </section>
        <section class="middle-icons">
          <div class="middle-right-icon">
            <img src="../assets//icons/mobius_ai.svg" />
            <img src="../assets/icons/contructs.svg" />
            <img src="../assets//icons/market_place_management.svg" alt="Marketplace" @click="marketplacemanagement" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    marketplacemanagement() {
      this.isClicked = true;
      if (this.$router) {
        this.$router.push({ name: 'Productmanagement' });
      } else {
        console.error("Vue Router is not properly initialized.");
      }
    }
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
  transition: left 0.3s ease;
}

.hidden {
  opacity: 0;
}

.right-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid #dde5e9;
  border-right: 1px solid #dde5e9;
  background: #fff;
  height: 100%;
  width: 48px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
}

.middle-icons {
  width: 100%;
  /* display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px; */
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
  /* gap: 4px; */
  width: 100%;
}

.middle-right-icon img {
  margin: 10px;

}

.delete-icon {
  display: flex;
  flex-direction: column;
}
</style>


