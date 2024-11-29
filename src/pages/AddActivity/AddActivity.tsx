import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  IonInput,
  IonButton,
  IonTextarea,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonHeader,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import {
  arrowForward,
  chevronDown,
  chevronUp,
  personOutline,
} from "ionicons/icons";
import niña from "../../assets/Img/girl.webp";

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

const customAlertOptions = {
  header: "Codigo de acceso",
  subHeader: "Ingresa el codigo",
  translucent: true,
};

const ActivityForm: React.FC = () => {
  const [activity, setActivity] = useState<Activity>({
    title: "",
    category: "",
    subcategory: "", // Nueva línea para subcategoría
    keywords: "",
    purpose: "",
    description: "",
    materials: [""],
    variables: "",
    img: null,
    psycomotor: [
      { title: "Motor", description: "" },
      { title: "Cognitivo", description: "" },
      { title: "Social", description: "" }
    ],
    extraInfo: [{ title: "", description: "" }],
  });
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [codeA, setCodeA] = useState<string | undefined>(undefined);
  const [pass, setPass] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLIonSelectElement
    >
  ) => {
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
    field: "title" | "description",
    value: string,
    type: "psycomotor" | "extraInfo"
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
    setActivity({ ...activity, materials: [...activity.materials, ""] });
  };

  const removeMaterial = (index: number) => {
    const newMaterials = [...activity.materials];
    newMaterials.splice(index, 1);
    setActivity({ ...activity, materials: newMaterials });
  };

  const addPsycomotor = () => {
    setActivity({
      ...activity,
      psycomotor: [...activity.psycomotor, { title: "", description: "" }],
    });
  };

  const removePsycomotor = (index: number) => {
    const newPsycomotor = [...activity.psycomotor];
    newPsycomotor.splice(index, 1);
    setActivity({ ...activity, psycomotor: newPsycomotor });
  };

  const addExtraInfo = () => {
    setActivity({
      ...activity,
      extraInfo: [...activity.extraInfo, { title: "", description: "" }],
    });
  };

  const removeExtraInfo = (index: number) => {
    const newExtraInfo = [...activity.extraInfo];
    newExtraInfo.splice(index, 1);
    setActivity({ ...activity, extraInfo: newExtraInfo });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://services.qalaub.com/api/ipapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(activity),
      });
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleContinue = async () => {
    if (codeA == "AMDIEPCNOWQSM") setPass(true);
  };

  return (
    <IonPage>
      {pass ? (
        <>
          <IonHeader className="w-full h-7">
            <IonTitle className="custom-activitiesbar ion-text-center text-white">
              Agregar actividad
            </IonTitle>
          </IonHeader>
          <IonContent className="bodybgsx">
            <section className="bodybgs  min-h-[100vh]">
              <form
                onSubmit={handleSubmit}
                className="bg-white overflow-scroll h-[90%] w-[90%] my-4 rounded-xl border-[#E65B8F] border-2 "
              >
                <IonItem className="border-b-[0.5px] flex flex-row p-3">
                  <IonLabel position="stacked">Título</IonLabel>
                  <IonInput
                    style={{
                      "--padding-start": "10px", // Ajusta el padding desde el inicio
                      "--padding-end": "10px", // Ajusta el padding desde el final
                      "--padding-top": "10px", // Ajusta el padding desde arriba
                      "--padding-bottom": "10px", // Ajusta el padding desde abajo
                      overflow: "hidden", // Oculta el contenido que se desborda
                    }}
                    className="w-full border-[#E65B8F] border-2 rounded-md my-1.5 custom-input"
                    name="title"
                    value={activity.title}
                    onIonChange={(e: any) => handleChange(e)}
                    placeholder="Ingrese el título"
                  />
                </IonItem>
                <IonItem className="border-b-[0.5px] flex flex-row p-3">
                  <IonLabel position="stacked">Categoría</IonLabel>
                  <IonSelect
                    style={{
                      "--padding-start": "10px", // Ajusta el padding desde el inicio
                      "--padding-end": "10px", // Ajusta el padding desde el final
                      "--padding-top": "10px", // Ajusta el padding desde arriba
                      "--padding-bottom": "10px", // Ajusta el padding desde abajo
                      overflow: "hidden", // Oculta el contenido que se desborda
                    }}
                    className="w-full border-[#E65B8F] border-2 rounded-md mt-1.5"
                    name="category"
                    value={activity.category}
                    onIonChange={(e: any) => handleChange(e)}
                    placeholder="Seleccione una categoría"
                  >
                    <IonSelectOption value="motoras">Motoras</IonSelectOption>
                    <IonSelectOption value="pelota">Con Pelota</IonSelectOption>
                    <IonSelectOption value="pactiva">
                      Pausa Activa
                    </IonSelectOption>
                    {/* Agrega más opciones según sea necesario */}
                  </IonSelect>
                </IonItem>
                <IonItem className="border-b-[0.5px] flex flex-row p-3">
                  <IonLabel position="stacked">Subcategoría</IonLabel>
                  <IonSelect
                    style={{
                      "--padding-start": "10px", // Ajusta el padding desde el inicio
                      "--padding-end": "10px", // Ajusta el padding desde el final
                      "--padding-top": "10px", // Ajusta el padding desde arriba
                      "--padding-bottom": "10px", // Ajusta el padding desde abajo
                      overflow: "hidden", // Oculta el contenido que se desborda
                    }}
                    className="w-full border-[#E65B8F] border-2 rounded-md mt-1.5"
                    name="subcategory"
                    value={activity.subcategory}
                    onIonChange={(e: any) => handleChange(e)}
                    placeholder="Seleccione una subcategoría"
                  >
                    <IonSelectOption value="desplazamiento">
                      Desplazamiento
                    </IonSelectOption>
                    <IonSelectOption value="salto">Salto</IonSelectOption>
                    <IonSelectOption value="pateo">Pateo</IonSelectOption>
                    <IonSelectOption value="lanzar">Lanzar</IonSelectOption>
                    <IonSelectOption value="recibir">Recibir</IonSelectOption>
                    <IonSelectOption value="rebotar">Rebotar</IonSelectOption>
                    <IonSelectOption value="golpear">Golpear</IonSelectOption>
                    <IonSelectOption value="sinsub">
                      Sin Subcategoria
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem className="border-b-[0.5px] flex flex-row p-3">
                  <IonLabel position="stacked">Palabras clave</IonLabel>
                  <IonTextarea
                    style={{
                      "--padding-start": "10px", // Ajusta el padding desde el inicio
                      "--padding-end": "10px", // Ajusta el padding desde el final
                      "--padding-top": "10px", // Ajusta el padding desde arriba
                      "--padding-bottom": "10px", // Ajusta el padding desde abajo
                      overflow: "hidden", // Oculta el contenido que se desborda
                    }}
                    className="w-full border-[#E65B8F] border-2 rounded-md my-1.5"
                    name="keywords"
                    value={activity.keywords}
                    onIonChange={(e: any) => handleChange(e)}
                    placeholder="Ingrese las palabras clave"
                  />
                </IonItem>
                <IonItem className="border-b-[0.5px] flex flex-row p-3">
                  <IonLabel position="stacked">Propósito</IonLabel>
                  <IonTextarea
                    style={{
                      "--padding-start": "10px", // Ajusta el padding desde el inicio
                      "--padding-end": "10px", // Ajusta el padding desde el final
                      "--padding-top": "10px", // Ajusta el padding desde arriba
                      "--padding-bottom": "10px", // Ajusta el padding desde abajo
                      overflow: "hidden", // Oculta el contenido que se desborda
                    }}
                    className="w-full border-[#E65B8F] border-2 rounded-md my-1.5"
                    name="purpose"
                    value={activity.purpose}
                    onIonChange={(e: any) => handleChange(e)}
                    placeholder="Ingrese el propósito"
                  />
                </IonItem>
                <IonItem className="border-b-[0.5px] flex flex-row p-3">
                  <IonLabel position="stacked">Descripción</IonLabel>
                  <IonTextarea
                    style={{
                      "--padding-start": "10px", // Ajusta el padding desde el inicio
                      "--padding-end": "10px", // Ajusta el padding desde el final
                      "--padding-top": "10px", // Ajusta el padding desde arriba
                      "--padding-bottom": "10px", // Ajusta el padding desde abajo
                      overflow: "hidden", // Oculta el contenido que se desborda
                    }}
                    className="w-full border-[#E65B8F] border-2 rounded-md my-1.5"
                    name="description"
                    value={activity.description}
                    onIonChange={(e: any) => handleChange(e)}
                    placeholder="Ingrese la descripción"
                  />
                </IonItem>
                <IonList className="border-b-[0.5px] flex flex-col p-3">
                  <IonListHeader>
                    <IonLabel>Materiales</IonLabel>
                  </IonListHeader>
                  {activity.materials.map((material, index) => (
                    <IonItem key={index}>
                      <IonInput
                        placeholder={`Material ${index + 1}`}
                        value={material}
                        onIonChange={(e: CustomEvent) =>
                          handleMaterialChange(
                            index,
                            (e.target as HTMLInputElement).value
                          )
                        }
                      />
                      <IonButton
                        style={{ "--background": "#E65B8F", "--color": "#fff" }}
                        onClick={() => removeMaterial(index)}
                      >
                        Eliminar
                      </IonButton>
                    </IonItem>
                  ))}
                  <IonButton
                    style={{ "--background": "#E65B8F", "--color": "#fff" }}
                    onClick={addMaterial}
                  >
                    Agregar Material
                  </IonButton>
                </IonList>
                <IonItem className="border-b-[0.5px] flex flex-row p-3">
                  <IonLabel position="stacked">Variables</IonLabel>
                  <IonTextarea
                    style={{
                      "--padding-start": "10px", // Ajusta el padding desde el inicio
                      "--padding-end": "10px", // Ajusta el padding desde el final
                      "--padding-top": "10px", // Ajusta el padding desde arriba
                      "--padding-bottom": "10px", // Ajusta el padding desde abajo
                      overflow: "hidden", // Oculta el contenido que se desborda
                    }}
                    className="w-full h-[15vh] border-[#E65B8F] border-2 rounded-md my-1.5"
                    name="variables"
                    value={activity.variables}
                    onIonChange={(e: any) => handleChange(e)}
                    placeholder="Ingrese las variables"
                  />
                </IonItem>
                <IonItem className="border-b-[0.5px] flex flex-row p-3">
                  <IonLabel position="stacked">Imagen</IonLabel>
                  <input
                    className="w-full rounded-md my-1.5 flex flex-col"
                    type="file"
                    onChange={handleImageChange}
                  />
                </IonItem>
                <IonList className="border-b-[0.5px] flex flex-col p-3">
                  <IonListHeader>
                    <IonLabel>Aportes psicomotores</IonLabel>
                  </IonListHeader>
                  {activity.psycomotor.map((item, index) => (
                    <IonItem key={index}>
                      <IonLabel position="stacked">Título</IonLabel>
                      <IonInput
                        style={{
                          "--padding-start": "10px", // Ajusta el padding desde el inicio
                          "--padding-end": "10px", // Ajusta el padding desde el final
                          "--padding-top": "10px", // Ajusta el padding desde arriba
                          "--padding-bottom": "10px", // Ajusta el padding desde abajo
                          overflow: "hidden", // Oculta el contenido que se desborda
                        }}
                        className="w-full border-[#E65B8F] border-2 rounded-md my-1.5"
                        placeholder="Título"
                        value={item.title}
                        onIonChange={(e: CustomEvent) =>
                          handleArrayChange(
                            index,
                            "title",
                            (e.target as HTMLInputElement).value,
                            "psycomotor"
                          )
                        }
                      />
                      <IonLabel position="stacked">Descripción</IonLabel>
                      <IonTextarea
                        style={{
                          "--padding-start": "10px", // Ajusta el padding desde el inicio
                          "--padding-end": "10px", // Ajusta el padding desde el final
                          "--padding-top": "10px", // Ajusta el padding desde arriba
                          "--padding-bottom": "10px", // Ajusta el padding desde abajo
                          overflow: "hidden", // Oculta el contenido que se desborda
                        }}
                        className="w-full border-[#E65B8F] border-2 rounded-md my-1.5"
                        placeholder="Descripción"
                        value={item.description}
                        onIonChange={(e: CustomEvent) =>
                          handleArrayChange(
                            index,
                            "description",
                            (e.target as HTMLTextAreaElement).value,
                            "psycomotor"
                          )
                        }
                      />
                      <IonButton
                        style={{ "--background": "#E65B8F", "--color": "#fff" }}
                        onClick={() => removePsycomotor(index)}
                      >
                        Eliminar
                      </IonButton>
                    </IonItem>
                  ))}
                  <IonButton
                    style={{ "--background": "#E65B8F", "--color": "#fff" }}
                    onClick={addPsycomotor}
                  >
                    Agregar Psicomotor
                  </IonButton>
                </IonList>
                <IonList className="border-b-[0.5px] flex flex-col p-3">
                  <IonListHeader>
                    <IonLabel>Información adicional</IonLabel>
                  </IonListHeader>
                  {activity.extraInfo.map((item, index) => (
                    <IonItem key={index}>
                      <IonLabel position="stacked">Título</IonLabel>
                      <IonInput
                        style={{
                          "--padding-start": "10px", // Ajusta el padding desde el inicio
                          "--padding-end": "10px", // Ajusta el padding desde el final
                          "--padding-top": "10px", // Ajusta el padding desde arriba
                          "--padding-bottom": "10px", // Ajusta el padding desde abajo
                          overflow: "hidden", // Oculta el contenido que se desborda
                        }}
                        className="w-full border-[#E65B8F] border-2 rounded-md my-1.5"
                        placeholder="Título"
                        value={item.title}
                        onIonChange={(e: CustomEvent) =>
                          handleArrayChange(
                            index,
                            "title",
                            (e.target as HTMLInputElement).value,
                            "extraInfo"
                          )
                        }
                      />
                      <IonLabel position="stacked">Descripción</IonLabel>
                      <IonTextarea
                        style={{
                          "--padding-start": "10px", // Ajusta el padding desde el inicio
                          "--padding-end": "10px", // Ajusta el padding desde el final
                          "--padding-top": "10px", // Ajusta el padding desde arriba
                          "--padding-bottom": "10px", // Ajusta el padding desde abajo
                          overflow: "hidden", // Oculta el contenido que se desborda
                        }}
                        className="w-full border-[#E65B8F] border-2 rounded-md my-1.5"
                        placeholder="Descripción"
                        value={item.description}
                        onIonChange={(e: CustomEvent) =>
                          handleArrayChange(
                            index,
                            "description",
                            (e.target as HTMLTextAreaElement).value,
                            "extraInfo"
                          )
                        }
                      />
                      <IonButton
                        style={{ "--background": "#E65B8F", "--color": "#fff" }}
                        onClick={() => removeExtraInfo(index)}
                      >
                        Eliminar
                      </IonButton>
                    </IonItem>
                  ))}
                  <IonButton
                    style={{ "--background": "#E65B8F", "--color": "#fff" }}
                    onClick={addExtraInfo}
                  >
                    Agregar Información Adicional
                  </IonButton>
                </IonList>
                <div className="border-b-[0.5px] flex flex-col p-3">
                  <IonButton
                    className="w-full"
                    style={{ "--background": "#E65B8F", "--color": "#fff" }}
                    type="submit"
                  >
                    Enviar
                  </IonButton>
                </div>
              </form>
            </section>
          </IonContent>
        </>
      ) : (
        <>
          <IonContent>
            <div className="select_roll_container">
              <div className="w-full flex flex-col content-center items-center justify-center">
                <h1 className="poppins text-white font-extrabold text-3xl mb-5">
                  Acceso para agregar actividades
                </h1>
                <img src={niña} className="w-[60%] self-center" />
              </div>
              <div className="relative bg-white w-[100%] h-[200px] p-6 rounded-3xl edit_shadow flex justify-center content-center items-center">
                <div className="w-[95%]">
                  <IonItem className="border-b-[0.5px] flex flex-row p-3">
                    <IonInput
                      style={{
                        "--padding-start": "10px", // Ajusta el padding desde el inicio
                        "--padding-end": "10px", // Ajusta el padding desde el final
                        "--padding-top": "10px", // Ajusta el padding desde arriba
                        "--padding-bottom": "10px", // Ajusta el padding desde abajo
                        overflow: "hidden", // Oculta el contenido que se desborda
                      }}
                      className="w-full border-[#E65B8F] border-2 rounded-md my-1.5 custom-input"
                      name="codigo"
                      value={codeA}
                      onIonChange={(e: any) => setCodeA(e.target.value)}
                      placeholder="Ingrese el código"
                    />
                  </IonItem>
                </div>
                <div className="rounded-full absolute -bottom-8 overflow-hidden p-0.5 bg-white edit_shadow2">
                  <IonButton
                    onClick={handleContinue}
                    disabled={!codeA}
                    shape="round"
                    size="large"
                  >
                    <IonIcon
                      slot="icon-only"
                      icon={arrowForward}
                      aria-hidden="true"
                      color="ligth"
                    ></IonIcon>
                  </IonButton>
                </div>
              </div>
            </div>
          </IonContent>
        </>
      )}
    </IonPage>
  );
};

export default ActivityForm;
