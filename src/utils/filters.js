const filtersAdverts = (filters, advertFilter) => {
     
    if (advertFilter.name) {
      filters.name = advertFilter.name
    }
        
    if (advertFilter.sale) {
      filters.sale = advertFilter.sale
    }

    if (advertFilter.tags) {
      filters.tags = advertFilter.tags
    }

    if (advertFilter.minPrice) {
      filters.price = advertFilter.minPrice
    }

    if (advertFilter.maxPrice) {
      filters.price = advertFilter.maxPrice
    }

    if (advertFilter.minPrice && advertFilter.maxPrice) {
      filters.price = [advertFilter.minPrice, advertFilter.maxPrice]
    }
    
}

export default filtersAdverts;