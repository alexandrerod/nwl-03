import OrphanagesControlers from '../controlers/OrphanagesControlers';

import Image from '../model/images';



export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`,

        };



    },
    renderMany(images: Image[]) {
        //percorrer por todos orfanatos e para cada um deles eu chamo o método render.
        return images.map(image => this.render(image));
    }
};