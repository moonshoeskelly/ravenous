const API_BASE_URL = process.env.REACT_APP_API_SERVER;

const yelpSearch = {

    async search(searchTerm, location, sortOption) {
        try {
            const response = await fetch(
                `${API_BASE_URL}/api/yelp?term=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(location)}&sortBy=${sortOption}`
            );

            const data = await response.json();

            if (data.businesses) {
                return data.businesses.map((business) => ({
                    id: business.id,
                    image: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0]?.title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                }));
            }

            return [];
        } catch (error) {
            console.error("Frontend fetch error:", error);
            throw error;
        }
    },
};

export default yelpSearch;
