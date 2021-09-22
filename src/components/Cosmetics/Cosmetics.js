import React, { useEffect, useState } from 'react';
import { add, multiply } from '../../utilitis/storage';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        // fetch('../../../public/cosmetics.json')
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h3>Shop my cosmetics!</h3>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    kye={cosmetic._id}
                    cosmetic={cosmetic}

                />)
            }
        </div>
    );
};

export default Cosmetics;