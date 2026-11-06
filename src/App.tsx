import {Navigate,Route,Routes} from 'react-router-dom';
import {Layout} from './components/Layout';
import {RutaProtegida,RutaPublica} from './components/RutaProtegida';
import {LoginPage} from './pages/LoginPage';
import {RegistroPage} from './pages/RegistroPage';
import {InicioPage} from './pages/InicioPage';
import {CursosPage} from './pages/CursosPage';
import {CursoDetallePage} from './pages/CursoDetallePage';
import {InscripcionesPage} from './pages/InscripcionesPage';
import {NoEncontradaPage} from './pages/NoEncontradaPage';
export default function App(){return <Routes><Route path="/" element={<Navigate to="/inicio" replace/>}/><Route element={<RutaPublica/>}><Route path="/login" element={<LoginPage/>}/><Route path="/registro" element={<RegistroPage/>}/></Route><Route element={<RutaProtegida/>}><Route element={<Layout/>}><Route path="/inicio" element={<InicioPage/>}/><Route path="/cursos" element={<CursosPage/>}/><Route path="/cursos/:id" element={<CursoDetallePage/>}/><Route element={<RutaProtegida soloEstudiante/>}><Route path="/inscripciones" element={<InscripcionesPage/>}/></Route></Route></Route><Route path="*" element={<NoEncontradaPage/>}/></Routes>;}
