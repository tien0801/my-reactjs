import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';

import useState from './styles'

const Product = ({product, onAddToCart}) => {
    const classes = useState();
    
    console.log(product);

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}></CardMedia>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography varient="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography varient="h5">
                        {product.price.formatted} đ
                    </Typography>
                </div>
                <Typography variant="body2" color="textSacondary" dangerouslySetInnerHTML={{__html: product.description}} />
            </CardContent>
             
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart></AddShoppingCart>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
