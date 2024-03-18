<template>
  <div class="martketplace-cointainer">
    <tree-view :node="treeData"></tree-view>
  </div>
</template>

<script>
import TreeView from '../components/Treeview.vue';
export default {
  name: "App",
  components: {
    TreeView
  },
  data() {
    return {
      treeData: {
        id: 1,
        name: 'Mobius Dtaas',
        children: [
          {
            id: 2,
            name: 'NextGenTV',
            children: [
              {
                id: 3,
                name: 'Nebraska'
              },
              {
                id: 4,
                name: 'DC'
              },
              {
                id: 5,
                name: 'California',
                children: [
                  {
                    id: 6,
                    name: 'Los Angeles'
                  },
                  {
                    id: 7,
                    name: 'San Francisco'
                  },
                  {
                    id: 8,
                    name: 'Sunnyvale'
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  method: {
    handleNodeClick(node) {
      console.log('Clicked on node:', node);
    }
  }
};
</script>
<style scoped>
.martketplace-cointainer {
  width: 100%;
  height: 100%;
}

.card-flex {
  border: none;
  justify-content: center !important;
}

.p-component {
  color: #484848;
  text-align: center;
  padding: 0;
  width: 100%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* border:1px solid; */
  letter-spacing: -.132px;
  box-sizing: border-box;
}

.p-tree-wrapper {
  overflow: auto;
}

.p-tree-container {
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
}

.p-tree .p-tree-container .p-treenode {
  padding: 0.143rem;
}

.p-treenode-content {
  border-radius: 30px;
  padding: 5px;
  border: 1px solid #d8d8d8;
  transition: box-shadow .15s;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content:focus {
  box-shadow: none;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
  background: #fff !important;
  border: 1px solid #007bff;
  border-radius: 30px;
  color: #484848 !important;
}

.p-ripple {
  display: none;
}

.p-tree-toggler {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
  margin-right: 0.5rem;
  width: 2rem;
  height: 2rem;
  color: #6c757d;
  border: 0 none;
  background: transparent;
  border-radius: 50%;
  /* border: 1px solid; */
  transition: box-shadow .15s;
  margin-left: -20px;
  background-image: none;
  background-repeat: no-repeat;
}

[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

[type=button],
[type=reset],
[type=submit],
button {
  -webkit-appearance: button;
}

.p-link {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol;
}

button,
select {
  text-transform: none;
}

.tree-node {
  display: flex;
  width: 100% !important;
  justify-content: space-between;
  align-items: center;
}

.node-content {
  display: flex;
  align-items: center;
  position: relative;
}

.mobius-icon {
  width: 19.96px;
  height: 20.84px;
  display: inline-flex;
  flex-direction: row;
  margin-right: 10px;
}

.node-label {
  width: 100%;
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -1.1%;
  font-family: 'Plus Jakarta Sans', sans-serif;

}

li {
  text-align: -webkit-match-parent;
}
</style>