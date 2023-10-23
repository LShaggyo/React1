import Header from './assets/components/Header'
import { MyCard } from './assets/components/MyCard'
import Footer from './assets/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
    <div className="container w-100 text-center p-5">
      <Header titulo="Adopta un conejito"/>
      <div className="container w-100 d-flex">
        <MyCard
        url="https://images.hola.com/imagenes/mascotas/20220912216872/errores-cuidado-conejos-dn/1-135-969/consejos-mejorar-salud-comportamiento-conejos-m.jpg?tx=w_680"
        name="Pelusín"
        description="Conejito tierno y juguetón. Ama las zanahorias y es muy sociable."
        texto="Raza Angora"
        bg="warning"
        />
        <MyCard
        url="https://www.clinicas-veterpet.com/wp-content/uploads/2021/02/conejos.jpg"
        name="Chispita"
        description="Conejita amorosa y tranquila. Prefiere lugares cálidos y acogedores."
        texto="Raza Holland Lop"
        bg="success"
        />
        <MyCard
        url="https://cope-cdnmed.cope.es/resources/jpg/1/7/1669028889971.jpg"
        name="Saltarín"
        description="Conejito energético y aventurero. Siempre está explorando y es muy curioso."
        texto="Raza Rex"
        bg="danger"
        />
        <MyCard
        url="https://cdn1.img.sputniknews.lat/img/07e6/0c/1d/1134142675_0:971:2049:3019_1920x0_80_0_0_8468c80ed1c29d5053e40cc821e0ba4b.jpg"
        name="Nube"
        description="Conejita suave y mullida. Ama los mimos y es la compañera perfecta para relajarse."
        texto="Raza Lionhead"
        bg="purple" // Nota: "purple" no es una clase estándar de Bootstrap. Deberás agregar un estilo personalizado para este color.
        />
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
