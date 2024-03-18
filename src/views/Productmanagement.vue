<template>
    <section class="right-drawer">
        <!-- <aside class="right-side-bar">
                <Rightsidebar />
            </aside> -->
        <div class="form-header">
            <div class="marketpalce-header">
                <span class="marketplace-management">Marketplace Management</span>
            </div>
            <div class="img-right">
                <img src="../assets/icons/pin_icon.svg" />
            </div>
        </div>
        <!-- Two tabs  -->
        <div class="tabs">
            <button class="product-tab">Product</button>
            <button class="marketplace-tab">Marketplace</button>
        </div>
        <div class="container">
            <div class="left-tab">
                <div class="uuid">
                    <span class="refresh-btn">UUID / URI
                        <img src="../assets/icons/refresh_icon.svg" style="vertical-align: middle;" />
                    </span>
                    <input id="uuId" type="text" class="input-uuid" v-model="uuid">
                </div>
                <div class="publish-box">
                    <span class="heading-wrapper">Publish Options</span>
                    <div class="checkboxes">
                        <label style="display: inline-block;">
                            <input type="checkbox" v-model="groupConnectedConstructs" true-value="yes"
                                false-value="no" />
                            <span class="checkbox-label">Group Connected Constructs</span>
                        </label>
                        <div class="additional-info">
                            <span class="connected-construct">3 Connected constructs</span>
                            <span class="select-text">Select</span>
                        </div>
                    </div>
                    <div class="checkboxes">
                        <label style="display: inline-block;">
                            <input type="checkbox" v-model="productDefinition" true-value="yes" false-value="no" />
                            <span class="checkbox-label">Product Definition </span>
                        </label>
                    </div>
                    <div class="checkboxes">
                        <label style="display: inline-block;">
                            <input type="checkbox" v-model="productData" true-value="yes" false-value="no" />
                            <span class="checkbox-label">Product Data</span>
                        </label>
                        <div class="additional-info">
                            <span class="connected-construct">3 mb | 1200 Records</span>
                            <span class="select-text">Preview</span>
                        </div>
                    </div>
                </div>
                <div class="version-head">
                    <span class="heading-wrapper">Versioning</span>
                    <div class="radios">
                        <label style="display: inline-block;">
                            <input type="radio" v-model="selectedOption" value="option1" class="custom-radio"
                                id="option1">
                            <span for="option1" class="radio-label">Publish as new product</span>
                        </label>
                    </div>
                    <div class="radios">
                        <label style="display: inline-block;">
                            <input type="radio" v-model="selectedOption" value="option2" class="custom-radio"
                                id="option2">
                            <span for="option2" class="radio-label">Publish as version</span>
                        </label>
                    </div>
                </div>
                <div class="thumb">
                    <span class="thumbnail">Thumbnail</span>
                    <div class="thumbnail-container">
                        <div class="image" :class="{ 'flex': !fileName }">
                            <label class="upload-label" for="fileInput" v-if="!imageUrl">Drag and drop or click to
                                upload</label>
                            <input id="fileInput" class="selected-img" type="file" accept="image/jpeg, image/png"
                                required @change="onFileChange">
                            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image">
                            <p class="fileName" v-if="isImage">{{ fileName }}</p>
                            <p class="fileSize" v-if="isImage">{{ imageSizeString }}</p>
                            <!-- Use a transparent overlay to cover the entire area of the div and make it clickable -->
                            <div class="overlay" @click="triggerFileInput"></div>
                        </div>
                        <label for="fileInput" class="thumb-star-icon">*</label>
                    </div>
                </div>
                <div class="input-box">
                    <span class="input-title">Product Name</span>
                    <div class="flex-container">
                        <input type="text" class="input-title-label" required v-model="productName"
                            @input="validateProductName">
                        <label for="fileInput" class="star-icon">*</label>
                    </div>
                    <div v-if="showErrorProductName && isInvalidProductName" class="error-message">Product Name is
                        required
                    </div>
                </div>
                <div class="input-box">
                    <span class="input-title">Product Version</span>
                    <div class="flex-container">
                        <input type="text" class="input-title-label" required v-model="productVersion"
                            @input="validateProductVersion">
                        <label for="fileInput" class="star-icon">*</label>
                    </div>
                    <div v-if="showErrorProductVersion && isInvalidProductVersion" class="error-message">Product Version
                        is
                        required</div>
                </div>
                <div class="input-box">
                    <span class="input-title">Product Type</span>
                    <div class="flex-container">
                        <input type="text" class="input-title-label" required v-model="productType"
                            @input="validateProductType">
                        <label for="fileInput" class="star-icon">*</label>
                    </div>
                    <div v-if="showErrorProductType && isInvalidProductType" class="error-message">Product Type is
                        required
                    </div>
                </div>
                <div class="input-box">
                    <span class="input-title">Description</span>
                    <div class="flex-container">
                        <textarea class="text-area" required></textarea>
                    </div>
                    <!-- <div v-if="showError && isInvalid" class="error-message">Description is required</div> -->
                    <!-- </div> -->
                </div>
                <div class="input-box">
                    <span class="input-title">Tags</span>
                    <div class="flex-container">
                        <input type="text" class="input-title-label" v-model="searchTerm" @keyup.enter="addTag"
                            placeholder="Search" required @input="validateTag">
                        <label for="fileInput" class="star-icon">*</label>
                    </div>
                    <div v-if="showErrorTag && isInvalidTag" class="error-message">Product Tag is required</div>
                </div>
                <ul class="selection-tag">
                    <li v-for="(tag, index) in tags" :key="index" class="select-tag">
                        <span>{{ tag }}</span>
                        <img src="../assets/icons/cross_icon.svg" @click="removeTag(index)" />
                    </li>
                </ul>
            </div>
            <div class="right-tab">
                <Marketplace />
            </div>
        </div>
    </section>
</template>

<script>
// import Rightsidebar from "../components/Rightsidebar.vue"
import Marketplace from "./Marketplacemanagement.vue"

// window.addEventListener('wheel', function(event) {
//         event.preventDefault();
//     }, { passive: false });

export default {
    components: {
        Marketplace,
        // Rightsidebar
    },
    // name: "AppMarketplaceTreeStructure",
    // props: {
    //     items: {
    //         type: Array,
    //         default: () => []
    //     }
    // },
    data() {
        return {
            activeTab: 'tab1',
            isChecked: false,
            selectedOption: '',
            selectedFile: null,
            imageUrl: null,
            fileName: null,
            isImage: false,
            searchTerm: '',
            tags: [],
            productType: '',
            productName: '',
            productVersion: '',
            showErrorProductType: false,
            showErrorProductName: false,
            showErrorProductVersion: false,
            showErrorTag: false,
            uuid: 'c3d75891-7083-44d6-beb7-e051c7845fd6',
            tabs: false,
            groupConnectedConstructs: false,
            productDefinition: false,
            productData: false,
            imageSizeString: ''

        }
    },
    computed: {
        isInvalidProductType() {
            return this.productType.trim() === '';
        },
        isInvalidProductName() {
            return this.productName.trim() === '';
        },
        isInvalidProductVersion() {
            // const versionRegex = /^\d+(\.\d+)?$/;
            // return !versionRegex.test(this.productVersion)
            return this.productVersion.trim() === '';
        },
        isInvalidTag() {
            return this.searchTerm.trim() === '';
        },
    },
    methods: {
        triggerFileInput() {
            // Trigger the file input click event
            document.getElementById('fileInput').click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const fileType = file.type.split('/')[1].toUpperCase();
                const fileSizeInBytes = file.size;
                const fileSizeInKB = fileSizeInBytes / 1024;
                let sizeString = '';

                if (fileSizeInKB < 1024) {
                    sizeString = `${fileSizeInKB.toFixed(2)} KB`;
                } else if (fileSizeInKB < 1024 * 1024) {
                    sizeString = `${(fileSizeInKB / 1024).toFixed(2)} MB`;
                } else {
                    sizeString = `${(fileSizeInKB / (1024 * 1024)).toFixed(2)} GB`;
                }

                console.log("File size:", sizeString);
                this.imageSizeString = `${fileType} image - ${sizeString}`

                // Read file and set as image source
                // const reader = new FileReader();
                // reader.onload = () => {
                //     this.imageUrl = reader.result;
                // };
                // reader.readAsDataURL(file);

                // Continue with your logic
                this.imageUrl = URL.createObjectURL(file);
                this.fileName = file.name;
                this.isImage = true;
            }
        },
        addTag() {
            if (this.searchTerm.trim() !== '' && !this.tags.includes(this.searchTerm)) {
                this.tags.push(this.searchTerm.trim());
                this.searchTerm = '';
            }
        },
        removeTag(index) {
            this.tags.splice(index, 1);
        },
        validateProductType() {
            this.showErrorProductType = true;
        },
        validateProductName() {
            this.showErrorProductName = true;
        },
        validateProductVersion() {
            this.showErrorProductVersion = true;
        },
        validateTag() {
            // If the search term is not empty or there are tags in the list, hide the error message
            this.showErrorTag = this.searchTerm.trim() === '' && this.tags.length === 0;
        },
        toggleCollapse(item) {
            item.collapsed = !item.collapsed;
        }
    }

}
</script>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #adb5bd;
    border-radius: 5px;
}

.main-container {
    position: relative;
}

.right-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 650px;
    height: 100%;
    border: 1px solid #eaeaea;
    background: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.right-drawer.closed {
    transform: translateX(100%);
}

.form-header {
    flex: 1;
    border: 1px solid #EAEAEA;
    display: flex;
    justify-content: space-between;
    /* max-width: calc(100% - 10vh); */
}

.marketpalce-header {
    padding: 10px;
}

.img-right {
    padding: 10px;
    border: 0.8px solid #F9F9F9;
}

.marketplace-management {
    color: #2C2C2C;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
}

.tabs {
    display: flex;
    justify-content: space-between;
}

.product-tab {
    padding: 10px;
    cursor: pointer;
    border: none;
    width: 48%;
    background-color: white;
    margin: 0 10px;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Plus Jakarta Sans', sans-serif;
    ;
    line-height: 20px;
    border-bottom: 1px solid #2c2c2c
}

.marketplace-tab {
    opacity: 0.45;
    padding: 10px;
    cursor: pointer;
    border: none;
    width: 48%;
    background-color: white;
    margin: 0 10px;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #2c2c2c
}

.tab.active {
    border-bottom-color: #EAEAEA;
    ;
}

.container {
    display: flex;
}

.left-tab {
    margin: 10px 13px;
    display: inline-flex;
    height: 82vh;
    width: 46%;
    padding: 5px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1;
    flex-shrink: 0;
    overflow-y: auto;
    overflow-x: hidden;
}

.uuid {
    display: flex;
    flex-direction: column;
}

.uuIdHead {
    color: #767676;
    margin-right: 10px;
    font-family: 'Plus Jakarta Sans', sans-serif;

}

.refresh-btn {
    color: #2c2c2c;
    font-family: Plus Jakarta Sans;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    opacity: .7;
}

.input-uuid {
    font-size: 12px;
    font-weight: 400px;
    margin-top: 10px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    width: 45vh;
    border: none;
    outline: none;
    color: #2c2c2c;
    font-style: normal;
    line-height: 20px;
}

.publish-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 260px;
}

.heading-wrapper {
    color: #767676;
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}

.checkboxes {
    width: 100%;
}

.additional-info {
    padding-left: 25px;
    display: flex;
    font-weight: 400;
    color: #000000;
    font-size: 12px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    justify-content: space-between;
}

.select-text {
    color: #0376BF;
}

input[type="checkbox"] {
    display: none;

}

.checkbox-label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding-left: 25px;
    color: #000000;
    position: relative;
    cursor: pointer;
    font-style: normal;
    line-height: normal;

}

.checkbox-label:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border: 1px solid #0376BF;
    border-radius: 3px;
}

.checkbox-label:after {
    /* Unicode character for checkmark */
    content: "\2713";
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 12px;
    display: none;
}

.checkbox-label input[type="checkbox"] {
    position: absolute;
    opacity: 0;
}

input[type="checkbox"]:checked+.checkbox-label:before {
    content: '\2713';
    font-size: 14px;
    line-height: 13px;
    text-align: center;
    background-color: #0376BF;
    color: #F9F9F9;
}

.version-head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 260px;
}

.radios {
    width: 100%;
}

.custom-radio {
    /* Hide the default radio button */
    /* appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none; */
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 1px solid #0376BF;
    cursor: pointer;
    vertical-align: middle;
}

.custom-radio:checked {
    accent-color: #0376BF;
}

.radio-label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    line-height: normal;
    padding-left: 8px;
    display: inline-block;
    vertical-align: middle;
}

.thumb {
    width: 100%;
    position: relative;
}

.thumbnail {
    color: #767676;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: block;
    line-height: 16px;
    margin-bottom: 5px;
}

.thumbnail-container {
    display: flex;
    flex-direction: row;
    width: 94%;
    height: 112px;
    position: relative;
}

.thumb-star-icon {
    color: #0075ea;
    font-size: 20px;
    position: absolute;
    top: 0;
    left: 0;
}

.image {
    width: 100%;
    height: 100%;
    /* background-color: #f9f9f9; */
    border-right: 2px solid #0387d3;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    background-color: #f9f9f9;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    clip-path: polygon(0 30%, 3% 0, 15200% 100%, 0 100%);
}

.upload-label {
    color: #2c2c2c;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12px;
    cursor: pointer;
    /* padding: 36px; */
}

.selected-img {
    display: none;
    position: relative;
    /* Hide the default file input */
}

.selected-img+img {
    width: 80px;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 15px;
    margin-top: 5px;
    border-radius: 10px;
}

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 94%;
}

.star-icon {
    color: #0387d3;
    font-size: 20px;
    position: absolute;
    top: 0;
    left: 0;

}

.imgFile input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 1;
}

.imgFile .image img {
    position: absolute;
    top: 0;
    left: 16px;
    width: 25%;
    height: 75%;
    /* object-fit: cover; */
    z-index: 0;
}

.imgFile img {
    width: 10%;
    height: 70%;
}

.fileName {
    color: #000000;
    font-family: SF Pro Display;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    margin-left: 15px;
    position: absolute;
    left: 0;
}

.image .fileName {
    margin-top: 50px;
}

.thumbnail-container.flex {
    flex-direction: column;
}

.input-box {
    width: 100%;
    position: relative
}

.input-title {
    color: #767676;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: block;
    line-height: 16px;
    margin-bottom: 6px;
}

.input-title-label {
    height: 6vh;
    width: 100%;
    border: none;
    border-right: 2px solid #0387d3;
    padding-left: 15px;
    font-size: 14px;
    color: #2f3238;
    background-color: #f9f9f9;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    border-radius: 3px;
    clip-path: polygon(0 95%, 3% 0, 15200% 100%, 0 100%);
}

.input-title-label:focus {
    outline: none;
}

.selection-tag {
    width: 100%;
    height: 70%;
}

.select-tag {
    border-radius: 10px;
    margin: 3px;
    padding: 2px 2px 2px 2px;
    background-color: #51BB10;
    color: #fff;
    display: inline-flex;
    align-items: center;
    /* overflow-wrap: break-word !important; */
}

.select-tag img {
    cursor: pointer;
}

.error-message {
    color: #ee322c;
    text-align: right;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 10px;
    line-height: 12px;
    width: 100%;
}

.text-area {
    background-color: #f9f9f9;
    width: 100%;
    height: 80px;
    border-right: 2px solid #0387d3 !important;
    color: #2f3238;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    line-height: 18px;
    padding-left: 12px;
    border: none;
    outline: none;
    overflow: auto;
    border-radius: 5px;
    clip-path: polygon(0 30%, 5% 0, 15200% 100%, 0 100%);
}

.right-tab {
    margin: 10px 13px;
    display: inline-flex;
    height: 82vh;
    width: 46%;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    /* flex: 1; */
    flex-shrink: 0;
    overflow-y: auto;
    overflow-x: hidden;
}

.marketplace-container {
    width: 275px;
    height: 10%;
    border: 1px solid;
    margin-top: 10px;
}

ul {
    list-style-type: none;
    padding-left: 0;
}

li {
    cursor: pointer;
}

.right-side-bar {
    position: absolute;
    top: 0;
    left: 0;
}

.fileSize {
    color: #9C9C9C;
    font-family: SF Pro Display;
    font-size: 10px;
    font-weight: 400;
    position: absolute;
    left: 0;
    margin-left: 15px;
    line-height: 11.93px;
}

.image .fileSize {
    margin-top: 90px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>