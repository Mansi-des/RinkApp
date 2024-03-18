<template>
    <div class="card-flex">
        <div class="p-component">
            <div class="p-tree-wrapper">
                <ul v-if="shouldRenderChildren"
                    :class="{ 'p-tree-container': shouldRenderChildren, 'full-width': node.name === 'Mobius Dtaas' }">
                    <li @click="toggle" class="p-treenode" :class="{ 'child-node-empty': !hasChildrenComputed }">
                        <div role="treeitem" class="p-treenode-content">
                            <!-- <button type="button" pripple tabindex="-1" class="p-ripple">
                                <span class="p-tree-toggler-icon">
                                </span>
                            </button> -->
                            <div class="tree-node">
                                <div class="node-content">
                                    <div class="mobius-icon-content">
                                        <span class="mobius-icon" v-if="isMobiusData">
                                            <img src="../assets/icons/mobius_icon.svg" alt="Mobius Icon" />
                                        </span>
                                        <span class="node-label">{{ node.name }}</span>
                                    </div>
                                    <div class="right-mark">
                                        <span class="expand-icon" v-bind:class="{ 'expanded': isExpanded }"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <div class="next-node">
                        <div class="down-arrow-icon" v-if="hasChildrenComputed">
                            <img v-for="child in childrenCount" :key="child" src="../assets/icons/downarrow_icon.svg"
                                alt="Down Arrow" />
                        </div>
                        <div class="child-node">
                            <template v-if="isExpanded">
                                <tree-view v-for="child in node.children" :key="child.id" :node="child"></tree-view>
                            </template>
                        </div>
                    </div>
                </ul>
                <div v-else @click="toggle" class="p-treenode-content"
                    :class="{ 'child-node-empty': !hasChildrenComputed, 'border-blue': isExpanded }">
                    <div class="node-content">
                        <div class="mobius-icon-content">
                            <span class="mobius-icon" v-if="isMobiusData">
                                <img src="../assets/icons/mobius_icon.svg" alt="Mobius Icon" />
                            </span>
                            <span class="node-label">{{ node.name }}</span>
                        </div>
                    </div>
                    <div class="right-mark" v-if="isExpanded">
                        <span class="expand-icon" v-bind:class="{ 'expanded': isExpanded }"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="submit-btns-container">
        <button class="reset-btn">
            <img src="../assets/icons/discard_cross_icon.svg" alt="cross" />Discard
        </button>
        <button class="create-btn">
            <img src="../assets/icons/check_icon.svg" alt="check" />Save
        </button>
    </div>
</template>

<script>
export default {
    name: 'TreeView',
    props: {
        node: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isExpanded: false
        };
    },
    computed: {
        shouldRenderChildren() {
            return this.hasChildrenComputed && this.isExpanded;
        },
        hasChildrenComputed() {
            return this.node.children && this.node.children.length > 0;
        },
        childrenCount() {
            return this.hasChildrenComputed ? this.node.children.length : 0;
        },
        isMobiusData() {
            return this.node.name === "Mobius Dtaas";
        }
    },
    methods: {
        toggle() {
            console.log(this.hasChildrenComputed)
            this.isExpanded = !this.isExpanded;
        }
    }
};
</script>

<style scoped>
.card-flex {
    border: none;
    display: flex;
    margin-top: 5px;
}

.p-component {
    color: #484848;
    padding: 0;
    width: 100%;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -.132px;
    box-sizing: border-box;
}

.p-tree-wrapper {
    overflow: auto;
}

.p-tree-container .p-treenode .p-treenode-content:focus {
    box-shadow: none;
}

.p-tree-container .p-treenode .p-treenode-content {
    background: #fff !important;
    border: 1px solid #007bff;
    border-radius: 30px;
    color: #484848 !important;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: auto;
}

.p-treenode {
    padding: 0.143rem;

}

.p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
    margin-right: 0.5rem;
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow .15s;
    margin-left: -20px;
    background-image: none;
    background-repeat: no-repeat;
}

.p-treenode-content {
    width: 100%;
    border-radius: 30px;
    padding: 4px;
    border: 1px solid #d8d8d8;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
}

.tree-node {
    width: 100% !important;
    justify-content: space-between;
    align-items: center;
}

.node-content {
    display: flex;
    padding: 4px;
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

.p-treenode-container {
    padding: 0 0 0 1rem;
}

ul {
    list-style-type: none;
}

li {
    cursor: pointer;
}

.p-treenode-content:hover {
    background-color: #efefef;
}

.expanded {
    background-color: #efefef;
}

.expand-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #1575E1;
    display: inline-block;
    position: relative;
}

.expand-icon::after {
    content: '';
    position: absolute;
    top: 15%;
    left: 35%;
    width: 4px;
    height: 10px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg);
}

.mobius-icon-content {
    display: flex;
    justify-content: space-between;
}

.right-mark {
    margin-left: auto;
}

.p-tree-container .p-tree-container {
    transition: width 0.3s ease;
}

.p-ripple {
    visibility: hidden;
}

.down-arrow-icon {
    width: 0%;
    height: 24px;
    transform: scale(1.4) translateY(-50%);
}

.next-node {
    display: flex;
    margin-top: 5px;
}

.child-node {
    width: 100%;
    margin-left: 22px;
}

.submit-btns-container {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 299px;
    /* height: 32px; */
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
}

.submit-btns-container .reset-btn {
    width: 55%;
}

.submit-btns-container button {
    border: none;
    padding: 0.5em 1em;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
}

.submit-btns-container .reset-btn img {
    vertical-align: middle;
    margin-bottom: 3px;
    margin-right: 5px;
}

.submit-btns-container .create-btn {
    width: 55%;
    background-color: #00a1ed;
    color: #fff;
}

.submit-btns-container .create-btn img {
    vertical-align: middle;
    margin-bottom: 3px;
    margin-right: 5px;
}

.border-blue {
    border: 1px solid #007bff;
}
</style>