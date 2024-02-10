import React from "react";
import { IonSelect, IonSelectOption } from "@ionic/react";

interface Option {
    id: string | number;
    nom?: string;
    designation?: string;
    nom_lieu?: string;
}

interface SelectProps {
    placeholder?: string;
    data?: Option[];
    name?: string;
    onSelect?: (value: string | number) => void;
}

const Select: React.FC<SelectProps> = ({ placeholder, data = [], onSelect }) => {
    const handleSelection = (e: CustomEvent) => {
        const selectedValue = e.detail.value;
        if (onSelect && selectedValue) {
            onSelect(selectedValue);
        }
    };

    return (
        <IonSelect 
            placeholder={placeholder} 
            onIonChange={handleSelection}
        >
            {data.map((item, index) => (
                <IonSelectOption key={index} value={item.id}>
                    {item.nom || item.designation || item.nom_lieu}
                </IonSelectOption>
            ))}
        </IonSelect>
    );
};

export default Select;
