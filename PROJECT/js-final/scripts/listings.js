const listingsKey = 'hotelListings';

const defaultListings = [
    {
        title: 'Cozy 5 Stars Apartment',
        description: 'Lorem ipsum, dolor sit amet consectetur...',
        price: '$899/night',
        location: 'Barcelona,Spain',
        image: 'assets/images/card-1.jpeg'
    },
    {
        title: 'Office Studio',
        description: 'Lorem ipsum, dolor sit amet consectetur...',
        price: '$1,119/night',
        location: 'London,UK',
        image: 'assets/images/card-2.jpeg'
    },
    {
        title: 'Beautiful Castle',
        description: 'Lorem ipsum, dolor sit amet consectetur...',
        price: '$459/night',
        location: 'Milan,Italy',
        image: 'assets/images/card-3.jpeg'
    }
];

if (!localStorage.getItem(listingsKey)) {
    localStorage.setItem(listingsKey, JSON.stringify(defaultListings));
}

function loadListings() {
    const container = document.querySelector('.listingsContainer');
    container.innerHTML = '';
    const listings = JSON.parse(localStorage.getItem(listingsKey)) || [];

    listings.forEach((listing, index) => {
        const article = document.createElement('article');
        article.className = 'hotelarticle';

        article.innerHTML = `
            <div class="cardphotocontainer">
                <figure>
                    <img src="${listing.image}" alt="" class="cardphoto">
                </figure>
                <div class="tools">
                    <figure><img src="assets/icons/cards/view.svg" class="edittools" title="View"></figure>
                    <figure>
                        <img src="assets/icons/cards/edit.svg" class="edittools edit-btn" title="Edit" data-index="${index}">
                    </figure>
                    <figure>
                        <img src="assets/icons/cards/delete.svg" class="edittools delete-btn" title="Delete" data-index="${index}">
                    </figure>
                </div>
            </div>
            <div class="hoteltext">
                <h1 class="hoteltitle" contenteditable="false">${listing.title}</h1>
                <p class="bggray description" contenteditable="false">${listing.description}</p>
            </div>
            <div class="hotelprice">
                <div>
                    <h3 class="price" contenteditable="false">${listing.price}</h3>
                </div>
                <div class="location">
                    <figure><img src="assets/icons/cards/locatioon.png" width="18px"></figure>
                    <p class="bggray location-text" contenteditable="false">${listing.location}</p>
                </div>
            </div>
        `;

        container.appendChild(article);
    });

    attachEvents();
}

function deleteListing(index) {
    const listings = JSON.parse(localStorage.getItem(listingsKey));
    listings.splice(index, 1);
    localStorage.setItem(listingsKey, JSON.stringify(listings));
    loadListings();
}

function attachEvents() {

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const index = e.target.dataset.index;
            deleteListing(index);
        });
    });


    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.hotelarticle');
            const index = btn.dataset.index;

            const title = card.querySelector('.hoteltitle');
            const desc = card.querySelector('.description');
            const price = card.querySelector('.price');
            const location = card.querySelector('.location-text');

            const isEditing = btn.getAttribute('data-editing') === 'true';

            if (!isEditing) {

                [title, desc, price, location].forEach(el => el.contentEditable = true);
                title.focus();
                btn.setAttribute('data-editing', 'true');
                btn.src = 'assets/icons/cards/save.png';
                btn.title = 'Save';
            } else {

                const listings = JSON.parse(localStorage.getItem(listingsKey));
                listings[index] = {
                    ...listings[index],
                    title: title.textContent.trim(),
                    description: desc.textContent.trim(),
                    price: price.textContent.trim(),
                    location: location.textContent.trim()
                };
                localStorage.setItem(listingsKey, JSON.stringify(listings));

                [title, desc, price, location].forEach(el => el.contentEditable = false);
                btn.setAttribute('data-editing', 'false');
                btn.src = 'assets/icons/cards/edit.svg';
                btn.title = 'Edit';
            }
        });
    });
}

loadListings();
