export interface Lieu {
    id: number | any,
    nom_lieu?: string
}

export interface TypeEnergie {
    id: number | any,
    designation?: string
}

export interface Categorie {
    id: number | any,
    nom?: string
}

export interface BoiteVitesse {
    id: number | any,
    designation?: string
}

export interface Marque {
    id: number | any,
    nom?: string
}

export interface Modele {
    id:number | any,
    nom?: string
}

export interface Voiture {
    id?:number | any,
    nombrePlace?:number,
    kilometrage?:number,
    marque?: Marque,
    modele?: Modele,
    categorie?: Categorie,
    energie?: TypeEnergie,
    vitesse?: BoiteVitesse
}

export interface AnnonceData {
    dateHeure?: any,
    titre?: string,
    description?: string,
    prixVente?: number | any,
    lieu?: number,
    marque?: number,
    modele?: number,
    categorie?: number,
    type_energie?: number,
    vitesse?: number,
    places?: number | any,
    proprietaire?: string,
    etat?: 0,
    status?: 0,
    kilometrage?: number | any
}

export interface Annonce {
    id?: number | any,
    dateHeure?: any,
    titre?: string,
    description?: string,
    prixVente?: number,
    lieu?: Lieu,
    proprietaire?: string | null,
    voiture?: Voiture,
    etat?: 0,
    status?: 0
}

export interface DetailsAnnonce {
    id?: number,
    id_annonce: Annonce,
    image1: string,
    image2: string,
    image3: string,
    image4: string
}
