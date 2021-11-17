import React from 'react';
import { Route, Switch } from 'react-router';
// import { Navbar, Products } from './components';
import Login from './features/Auth/page/Login';
import NotFound from './components/NotFound';
// import { commerce } from './lib/commerce';
import './App.css'

const App = () => {
    // const [products, setProducts] = useState([]);

    // const [cart, setCart] = useState({});

    // const fetchProducts = async () => {
    //     const { data } = await commerce.products.list();

    //     setProducts(data);
    // }

    // const fetchCart = async () => {
    //     setCart(await commerce.cart.retrieve());
    // }

    // const handleAddToCart = async (productId, quantity) => {
    //     const item = await commerce.cart.add(productId, quantity);

    //     setCart(item.cart);
    // };

    // useEffect(() => {
    //     fetchProducts();
    //     fetchCart();
    // }, []);

    // console.log(cart);

    return (
        <div className="app">
            <Switch>
                <Route path='/my-reactjs/login' component={Login} exact/>
                <Route component={NotFound} />
            </Switch>
            {/* <Navbar totalItems={cart.total_items}></Navbar>
            <Products products={products} onAddToCart={handleAddToCart}></Products> */}
        </div>
    )
}

export default App
