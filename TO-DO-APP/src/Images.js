import React, { useState } from "react";

function Images() {
  //     const img = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pEDrEOfOKm1aJ9t8MorKGfPxN_m9QYkBLQ&s',
  //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wcbEcbqDnJ70z7CqzUvyx-IklCv5OpE3GylQp1gFeX6LIZb_MIV1csPPjP9pd5oMytY&usqp=CAU',
  //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugGQyIH2NuspqF1IZ5zwsQNBsOFcAvdBBRXQOrPCm_Ej7bbs6dSX0BvjTYJS5msnwOxo&usqp=CAU',
  //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4EbVpkEpd4YKLGTF874keAhsrcKXoUyfp40M239rlqZcTvReVQhb0AUXXwR919Gna8c&usqp=CAU',
  //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHf1gjrr7idI35HDbkhahVQakuc9VQmjY4wNVqQdPYKN7A_Llh0UVra4KQRk4OE7gaP_0&usqp=CAU',
  //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC56fF-MlSf0Spe71Zzzr5xZpYIH5qDggcCNxiC4_NDKQWzQqwkx50jbMIAubLP8VFjLI&usqp=CAU'
  //     ]

  const [images, setimages] = useState([]);

  const handleclick = (src) => {
    setimages(src);
    // console.log(src);
  };

  const handleCloseModal = () => {
    setimages(null);
  };

  const img = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pEDrEOfOKm1aJ9t8MorKGfPxN_m9QYkBLQ&s",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pEDrEOfOKm1aJ9t8MorKGfPxN_m9QYkBLQ&s",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pEDrEOfOKm1aJ9t8MorKGfPxN_m9QYkBLQ&s",
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pEDrEOfOKm1aJ9t8MorKGfPxN_m9QYkBLQ&s",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pEDrEOfOKm1aJ9t8MorKGfPxN_m9QYkBLQ&s",
    },
    {
      id: 6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pEDrEOfOKm1aJ9t8MorKGfPxN_m9QYkBLQ&s",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,5fr)",
          gap: "10px",
          Width: "80%",
          justifyItems: "center",
          margin: "auto",
        }}
      >
        {img.map((data) => (
          <img
            src={data.src}
            key={data.id}
            alt="abc"
            onClick={() => {
              handleclick(data.src);
            }}
            style={{ width: "60%", cursor: "pointer" }}
          />
        ))}
      </div>

      {images && (
        <div
          onClick={handleCloseModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={images}
            alt="popup"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              boxShadow: "0 0 20px white",
            }}
          />

          <button
            onClick={handleCloseModal}
            style={{
              position: "absolute",
              top: "230px",
              right: "580px",
              background: "transparent",
              // border: 'none',
              fontSize: "1.5rem",
              color: "black",
              cursor: "pointer",
            }}
          >
            ❌
          </button>
        </div>
      )}
    </div>
  );
}

export default Images;
