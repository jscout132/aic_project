/**
 * @param img_index
 * @param item_index
 * 
 * Function gets song from spotify using the image index of our gallery.
 * Then finds the correct item_index inside of the JSON response data from Spotify
 * which will produce a preview url that will be used to play song from soundtrack.
 */
// reivew the authentication portion of the api for their suggested

async function hoverData(img_index, item_index) {
    let title = document.getElementById(img_index).attributes[2].value;
    const art_response = await fetch("https://api.artic.edu/api/v1/artworks/" + title)
    const jsonData = await art_response.json();
    piece_title = jsonData.data.title
    console.log(jsonData.data.title);
    console.log(art_response)
    document.getElementById(item_index).innerHTML = piece_title;
}

hoverData('img_1','t1')
hoverData('img_2','t2')
hoverData('img_3','t3')
hoverData('img_4','t4')
hoverData('img_5','t5')
hoverData('img_6','t6')


// my goal for description is to show the description area under the artwork
async function description(d, img, artist, desc_area){
    let id = document.getElementById(img).attributes[2].value;
    const art_response = await fetch("https://api.artic.edu/api/v1/artworks/" + id)
    const jsonData = await art_response.json();
    piece_description = jsonData.data.thumbnail.alt_text
    artist_name = jsonData.data.artist_display
    console.log(artist_name)

    document.getElementById(desc_area).innerHTML = piece_description
    document.getElementById(artist).innerHTML = artist_name

    let x = document.getElementById(d);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

}


// async function clickedEvent(img_index, item_index){
//     // Get Track Name
//     let name = document.getElementsByTagName('img')[img_index].attributes[2].value;

//     let headers = new Headers([
//         ['Content-Type', 'application/json'],
//         ['Accept', 'application/json'],
//     ]);

//     let request = new Request(`https://api.artic.edu/api/v1/artworks/${name}`,{
//         method: 'GET',
//         headers: headers
//     });

//     let result = await fetch(request);
//     let response = await result.json();

//     console.log(response)
//     console.log(response.data.title)



// }



