import SliderComponent from "../../Components/Slider/sliderComponent";
import CategoryComponent from "../../Components/Category/categoryComponent";
import ProductListComponent from "../../Components/ProductList/productListComponent";
import MainTemplate from "../../Main Template/mainTemplate";
import "./homePage.scss";


const productsData = [
  {
    id: 1,
    title: "Awesome Frozen Hat",
    price: 579,
    description: "The Football Is Good For Training And Recreational Purposes",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4154"
    },
    images: ["https://api.lorem.space/image/fashion?w=640&h=480&r=6723", "https://api.lorem.space/image/fashion?w=640&h=480&r=840", "https://api.lorem.space/image/fashion?w=640&h=480&r=8258"]
  },
  {
    id: 2,
    title: "Rustic Concrete Mouse",
    price: 901,
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=3094"
    },
    images: ["https://api.lorem.space/image/furniture?w=640&h=480&r=6174", "https://api.lorem.space/image/furniture?w=640&h=480&r=9736", "https://api.lorem.space/image/furniture?w=640&h=480&r=3987"]
  },
  {
    id: 3,
    title: "Handcrafted Soft Bacon",
    price: 391,
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4154"
    },
    images: ["https://api.lorem.space/image/fashion?w=640&h=480&r=7790", "https://api.lorem.space/image/fashion?w=640&h=480&r=4526", "https://api.lorem.space/image/fashion?w=640&h=480&r=977"]
  },
  {
    id: 4,
    title: "Handcrafted Metal Ball",
    price: 319,
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=3094"
    },
    images: ["https://api.lorem.space/image/furniture?w=640&h=480&r=9902", "https://api.lorem.space/image/furniture?w=640&h=480&r=3609", "https://api.lorem.space/image/furniture?w=640&h=480&r=8172"]
  },
  {
    id: 5,
    title: "Intelligent Granite Sausages",
    price: 475,
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=3094"
    },
    images: ["https://api.lorem.space/image/furniture?w=640&h=480&r=5428", "https://api.lorem.space/image/furniture?w=640&h=480&r=8229", "https://api.lorem.space/image/furniture?w=640&h=480&r=4863"]
  },
  {
    id: 6,
    title: "Awesome Frozen Hat",
    price: 579,
    description: "The Football Is Good For Training And Recreational Purposes",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4154"
    },
    images: ["https://api.lorem.space/image/fashion?w=640&h=480&r=6723", "https://api.lorem.space/image/fashion?w=640&h=480&r=840", "https://api.lorem.space/image/fashion?w=640&h=480&r=8258"]
  },
  {
    id: 7,
    title: "Rustic Concrete Mouse",
    price: 901,
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=3094"
    },
    images: ["https://api.lorem.space/image/furniture?w=640&h=480&r=6174", "https://api.lorem.space/image/furniture?w=640&h=480&r=9736", "https://api.lorem.space/image/furniture?w=640&h=480&r=3987"]
  },
  {
    id: 8,
    title: "Handcrafted Soft Bacon",
    price: 391,
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4154"
    },
    images: ["https://api.lorem.space/image/fashion?w=640&h=480&r=7790", "https://api.lorem.space/image/fashion?w=640&h=480&r=4526", "https://api.lorem.space/image/fashion?w=640&h=480&r=977"]
  },
  {
    id: 9,
    title: "Handcrafted Metal Ball",
    price: 319,
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=3094"
    },
    images: ["https://api.lorem.space/image/furniture?w=640&h=480&r=9902", "https://api.lorem.space/image/furniture?w=640&h=480&r=3609", "https://api.lorem.space/image/furniture?w=640&h=480&r=8172"]
  },
  {
    id: 10,
    title: "Intelligent Granite Sausages",
    price: 475,
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=3094"
    },
    images: ["https://api.lorem.space/image/furniture?w=640&h=480&r=5428", "https://api.lorem.space/image/furniture?w=640&h=480&r=8229", "https://api.lorem.space/image/furniture?w=640&h=480&r=4863"]
  },
]

const HomePage = ({ categories }) => {
  return (
    <MainTemplate>
      <div className="home-page">
        <SliderComponent />
        <CategoryComponent categories={categories}
        // status={categoryStatus}
        />
        <ProductListComponent products={productsData}
        // status={productStatus} 
        />
        {/* <section>
                {productsByCategory[0] && <SingleCategory products={productsByCategory[0]} status={catProductAllStatus} />}
            </section>
            <section>
                {productsByCategory[1] && <SingleCategory products={productsByCategory[1]} status={catProductAllStatus} />}
            </section>  */}
      </div>
    </MainTemplate>
  )
}

export default HomePage