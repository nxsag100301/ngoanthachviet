import { useState } from 'react'

const ImageGallery = ({ listImage }) => {
  const [selectedImg, setSelectedImg] = useState(listImage[0])
  const [imageToSelect, setImageToSelect] = useState(listImage.slice(1))

  const handleSelectImage = (selectedImage, newImageSelect) => {
    setImageToSelect((prev) => {
      const newListImg = prev.filter((img) => img !== newImageSelect)
      newListImg.unshift(selectedImage)
      return newListImg
    })
    setSelectedImg(newImageSelect)
  }

  return (
    <div className=''>
      <img
        src={`/assets/images/${selectedImg}`}
        className='rounded-[12px] mb-3 sm:mb-6 h-[300px] sm:h-[483px] w-full md:h-[320px] lg:h-[420px] xl:h-[483px] object-cover mx-auto'
      />
      <div className='grid grid-cols-3 w-fit mx-auto gap-3 sm:gap-6'>
        {imageToSelect &&
          imageToSelect.length > 0 &&
          imageToSelect.map((img, index) => (
            <img
              key={index}
              src={`/assets/images/${img}`}
              className='rounded-[12px] mb-6 cursor-pointer object-cover h-[105px] w-full sm:h-[193px] md:h-[120px] xl:h-[173px]  border'
              onClick={() => handleSelectImage(selectedImg, img)}
            />
          ))}
      </div>
    </div>
  )
}

export default ImageGallery
