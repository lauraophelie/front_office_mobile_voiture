export interface Lieu {
    id: number,
    nom_lieu?: string
}

export interface TypeEnergie {
    id: number,
    designation?: string
}

export interface Categorie {
    id: number,
    designation?: string
}

export interface BoiteVitesse {
    id: number,
    designation?: string
}

export interface Marque {
    id: number,
    designation?: string
}

export interface Modele {
    id:number
}

export interface Voiture {
    id?:number,
    nombrePlace?:number,
    kilometrage?:number,
    marque?: Marque,
    modele?: Modele,
    categorie?: Categorie,
    energie?: TypeEnergie,
    vitesse?: BoiteVitesse
}

export interface Annonce {
    id?: number,
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
