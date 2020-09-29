const APIKey =
  "JN7dBnBYPZpnlq2lcf9FSRvA2DzwaDRFvvAHiFH94P8bHdTvSyZAn1EYb0EGaXtC4lOHd-0qf2ogCRHPXuVvhrIgR3aeptWcrZAy-GvPiCPLZngyNwFAHMRp3DjFWXYx";

const Yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(
            `https://protected-taiga-17963.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                
                headers: {
                    Authorization: `Bearer ${APIKey}`,
                },
            }
        );
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
                url: business.url,
            }));
        }
  },
};

export default Yelp;
