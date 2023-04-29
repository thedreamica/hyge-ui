import Typography from "../Micros/Typography"
import Button from "../Micros/Button"
import Card from "../Micros/Card"
import Modal from "@/Micros/Modal"
import  List  from "../Micros/List"

// this whole code needs to be removed after the code review
export default function Home() {
  return (
    <>
      <Button
        buttonText={'this is simple button'}
        variant='contained'
        textColor={'black'}
        onHoverColor={'white'}
        buttonColor={'yellow'} />

      <Typography markdown={'this is simple typography'} variant={'body1'} />

      <Card
        imgUrl='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
        hight={50}
        width={100}
        altText={'alt text'} />
        <List contents={['this is text1', 'this istext 3']}/>

      <Modal />
    </>

  )
}
