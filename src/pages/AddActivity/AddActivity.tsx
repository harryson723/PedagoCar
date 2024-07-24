import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  IonInput, IonButton, IonTextarea, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonContent, IonSelect, IonSelectOption
} from '@ionic/react';

interface Psycomotor {
  title: string;
  description: string;
}

interface ExtraInfo {
  title: string;
  description: string;
}

interface Activity {
  title: string;
  category: string;
  subcategory: string; // Nueva línea para subcategoría
  keywords: string;
  purpose: string;
  description: string;
  materials: string[];
  variables: string;
  img: string | ArrayBuffer | null;
  psycomotor: Psycomotor[];
  extraInfo: ExtraInfo[];
}

const ActivityForm: React.FC = () => {
  const [activity, setActivity] = useState<Activity>({
    title: '',
    category: '',
    subcategory: '', // Nueva línea para subcategoría
    keywords: '',
    purpose: '',
    description: '',
    materials: [''],
    variables: '',
    img: null,
    psycomotor: [{ title: '', description: '' }],
    extraInfo: [{ title: '', description: '' }],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLIonSelectElement>) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setActivity({ ...activity, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArrayChange = (
    index: number,
    field: 'title' | 'description',
    value: string,
    type: 'psycomotor' | 'extraInfo'
  ) => {
    const newArray = [...activity[type]] as (Psycomotor | ExtraInfo)[];
    newArray[index] = { ...newArray[index], [field]: value };
    setActivity({ ...activity, [type]: newArray });
  };

  const handleMaterialChange = (index: number, value: string) => {
    const newMaterials = [...activity.materials];
    newMaterials[index] = value;
    setActivity({ ...activity, materials: newMaterials });
  };

  const addMaterial = () => {
    setActivity({ ...activity, materials: [...activity.materials, ''] });
  };

  const removeMaterial = (index: number) => {
    const newMaterials = [...activity.materials];
    newMaterials.splice(index, 1);
    setActivity({ ...activity, materials: newMaterials });
  };

  const addPsycomotor = () => {
    setActivity({ ...activity, psycomotor: [...activity.psycomotor, { title: '', description: '' }] });
  };

  const removePsycomotor = (index: number) => {
    const newPsycomotor = [...activity.psycomotor];
    newPsycomotor.splice(index, 1);
    setActivity({ ...activity, psycomotor: newPsycomotor });
  };

  const addExtraInfo = () => {
    setActivity({ ...activity, extraInfo: [...activity.extraInfo, { title: '', description: '' }] });
  };

  const removeExtraInfo = (index: number) => {
    const newExtraInfo = [...activity.extraInfo];
    newExtraInfo.splice(index, 1);
    setActivity({ ...activity, extraInfo: newExtraInfo });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://services.qalaub.com/api/ipapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activity),
      });
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <IonPage>
      <IonContent className="bodybgsx">
        <section className="bodybgs h-[100vh]">
          <form onSubmit={handleSubmit} className="overflow-scroll h-[90%] w-[90%] mt-9">
            <IonItem>
              <IonInput
                label="Título"
                labelPlacement="floating"
                fill="outline"
                name="title"
                value={activity.title}
                onIonChange={(e: any) => handleChange(e)}
                placeholder="Ingrese el título"
              />
            </IonItem>
            <IonItem>
              <IonLabel>Categoría</IonLabel>
              <IonSelect
                name="category"
                value={activity.category}
                onIonChange={(e: any) => handleChange(e)}
                placeholder="Seleccione una categoría"
              >
                <IonSelectOption value="movimiento">Movimiento</IonSelectOption>
                <IonSelectOption value="coordinación">Coordinación</IonSelectOption>
                <IonSelectOption value="equilibrio">Equilibrio</IonSelectOption>
                {/* Agrega más opciones según sea necesario */}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Subcategoría</IonLabel>
              <IonSelect
                name="subcategory"
                value={activity.subcategory}
                onIonChange={(e: any) => handleChange(e)}
                placeholder="Seleccione una subcategoría"
              >
                <IonSelectOption value="desplazamiento">Desplazamiento</IonSelectOption>
                <IonSelectOption value="salto">Salto</IonSelectOption>
                <IonSelectOption value="pateo">Pateo</IonSelectOption>
                <IonSelectOption value="lanzar">Lanzar</IonSelectOption>
                <IonSelectOption value="recibir">Recibir</IonSelectOption>
                <IonSelectOption value="rebotar">Rebotar</IonSelectOption>
                <IonSelectOption value="golpear">Golpear</IonSelectOption>
                <IonSelectOption value="tiro">Tiro</IonSelectOption>
                <IonSelectOption value="agarrar">Agarrar</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonTextarea
                label="Palabras clave"
                labelPlacement="floating"
                fill="outline"
                name="keywords"
                value={activity.keywords}
                onIonChange={(e: any) => handleChange(e)}
                placeholder="Ingrese las palabras clave"
              />
            </IonItem>
            <IonItem>
              <IonTextarea
                label="Propósito"
                labelPlacement="floating"
                fill="outline"
                name="purpose"
                value={activity.purpose}
                onIonChange={(e: any) => handleChange(e)}
                placeholder="Ingrese el propósito"
              />
            </IonItem>
            <IonItem>
              <IonTextarea
                label="Descripción"
                labelPlacement="floating"
                fill="outline"
                name="description"
                value={activity.description}
                onIonChange={(e: any) => handleChange(e)}
                placeholder="Ingrese la descripción"
              />
            </IonItem>
            <IonList>
              <IonListHeader>
                <IonLabel>Materiales</IonLabel>
              </IonListHeader>
              {activity.materials.map((material, index) => (
                <IonItem key={index}>
                  <IonInput
                    placeholder={`Material ${index + 1}`}
                    value={material}
                    onIonChange={(e: CustomEvent) => handleMaterialChange(index, (e.target as HTMLInputElement).value)}
                  />
                  <IonButton onClick={() => removeMaterial(index)}>Eliminar</IonButton>
                </IonItem>
              ))}
              <IonButton onClick={addMaterial}>Agregar Material</IonButton>
            </IonList>
            <IonItem>
              <IonTextarea
                label="Variables"
                labelPlacement="floating"
                fill="outline"
                name="variables"
                value={activity.variables}
                onIonChange={(e: any) => handleChange(e)}
                placeholder="Ingrese las variables"
              />
            </IonItem>
            <IonItem>
              <IonLabel>Imagen</IonLabel>
              <input type="file" onChange={handleImageChange} />
            </IonItem>
            <IonList>
              <IonListHeader>
                <IonLabel>Psicomotor</IonLabel>
              </IonListHeader>
              {activity.psycomotor.map((item, index) => (
                <IonItem key={index}>
                  <IonInput
                    label="Título"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Título"
                    value={item.title}
                    onIonChange={(e: CustomEvent) => handleArrayChange(index, 'title', (e.target as HTMLInputElement).value, 'psycomotor')}
                  />
                  <IonTextarea
                    label="Descripción"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Descripción"
                    value={item.description}
                    onIonChange={(e: CustomEvent) => handleArrayChange(index, 'description', (e.target as HTMLTextAreaElement).value, 'psycomotor')}
                  />
                  <IonButton onClick={() => removePsycomotor(index)}>Eliminar</IonButton>
                </IonItem>
              ))}
              <IonButton onClick={addPsycomotor}>Agregar Psicomotor</IonButton>
            </IonList>
            <IonList>
              <IonListHeader>
                <IonLabel>Información adicional</IonLabel>
              </IonListHeader>
              {activity.extraInfo.map((item, index) => (
                <IonItem key={index}>
                  <IonInput
                    label="Título"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Título"
                    value={item.title}
                    onIonChange={(e: CustomEvent) => handleArrayChange(index, 'title', (e.target as HTMLInputElement).value, 'extraInfo')}
                  />
                  <IonTextarea
                    label="Descripción"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Descripción"
                    value={item.description}
                    onIonChange={(e: CustomEvent) => handleArrayChange(index, 'description', (e.target as HTMLTextAreaElement).value, 'extraInfo')}
                  />
                  <IonButton onClick={() => removeExtraInfo(index)}>Eliminar</IonButton>
                </IonItem>
              ))}
              <IonButton onClick={addExtraInfo}>Agregar Información Adicional</IonButton>
            </IonList>
            <IonButton type="submit">Enviar</IonButton>
          </form>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ActivityForm;
