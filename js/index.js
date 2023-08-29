const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = ``;
    phones = phones.slice(0, 12);
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList.add = 'card card-compact bg-base-100 shadow-xl p-6';
        phoneCard.innerHTML = `
        <figure class="flex justify-center p-5"><img src=${phone.image} alt="Phone" /></figure>
        <div class="text-center">
            <h2 class="text-2xl font-semibold">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard);
    })
}

const handleSearch = () =>{
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    loadPhone(searchText);
}

loadPhone();