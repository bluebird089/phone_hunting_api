const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = ``;
    const showAllButton = document.getElementById('show-all-button');
    if (phones.length > 12 && !isShowAll) {
        showAllButton.classList.remove('hidden');
    }
    else {
        showAllButton.classList.add('hidden');
    }
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact bg-base-100 border border-gray-200 p-6`;
        phoneCard.innerHTML = `
        <figure class="flex justify-center my-5"><img src=${phone.image} alt="Phone" /></figure>
        <div class="text-center">
            <h2 class="text-lg md:text-2xl font-semibold">${phone.phone_name}</h2>
            <div class="card-actions justify-center">
                <button class="btn bg-slate-600 text-white ml-3 hover:bg-slate-500 mt-5">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard);
    });
    toggleLoading(false);
}

const handleSearch = (isShowAll) => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    loadPhone(searchText, isShowAll);
    toggleLoading(true);
}

const toggleLoading = (isLoading) => {
    const loadingScreen = document.getElementById('loading');
    if (isLoading) {
        loadingScreen.classList.remove('hidden');
    }
    else {
        loadingScreen.classList.add('hidden');
    }
}

const handleShowAll = () => {
    handleSearch(true);
}