import OrphanagesControlers from '../controlers/OrphanagesControlers';
import Orphanage from '../model/orphange';
import imagesView from './images_view'


export default {
    render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longidute: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)

        };



    },
    renderMany(orphanages: Orphanage[]) {
        //percorrer por todos orfanatos e para cada um deles eu chamo o método render.
        return orphanages.map(orphanage => this.render(orphanage));
    }
};