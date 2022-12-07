import NavbarComponent from "../Components/Navbar/navbarComponent";
import FooterComponent from "../Components/Footer/footerComponent";


const Categories = [
    {
      id: 1,
      name: "Clothes",
      img: "https://api.lorem.space/image/fashion?w=640&h=480&r=3094",
    },
    {
      id: 2,
      name: "Electronics",
      img: "https://api.lorem.space/image/watch?w=640&h=480&r=3094",
    },
    {
      id: 3,
      name: "Furniture",
      img: "https://api.lorem.space/image/furniture?w=640&h=480&r=3094",
    },
    {
      id: 4,
      name: "Shoes",
      img: "https://api.lorem.space/image/shoes?w=640&h=480&r=2301",
    },
    {
      id: 5,
      name: "Others",
      img: "https://api.lorem.space/image?w=640&h=480&r=2672",
    },
  ]

const MainTemplate = (props) => {

    return(
        <div>
            <NavbarComponent categories={Categories} />
            {props.children}
            <FooterComponent/>
        </div>
    )
}

export default MainTemplate