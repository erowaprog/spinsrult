class Header {
    handleOpenShoppingPage() {
        shoppingPage.render()
    }

    render(count) {
        const html = `
            <div class="header-container">
                
            <h1 class="spinsrult">Spinsrult</h1>
                <div class="header-counter" onclick="headerPage.handleOpenShoppingPage();">
                    🪀 ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length)
