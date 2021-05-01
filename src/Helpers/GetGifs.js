export const GetGif = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=AQT0iKnxFr1eJFAZk46vuhcqSQVvL5xM&limit=10&q=${ encodeURI(category)}`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(item=>{
        return  {
            id: item.id,
            title: item.title,
            url: item.images.downsized_large.url
        };
    });

    return gifs;
}