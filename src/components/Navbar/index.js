import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import "./css/navbar.css";

const Navbar = () => {
    const items = [
        {
            label: 'Sobre mim',
            icon: 'pi pi-fw pi-user'
        },
        {
            label: 'Habilidades',
            icon: 'pi pi-code'
        },
        {
            label: 'Projetos',
            icon: 'pi pi-check'
        },
        {
            label: 'Contato',
            icon: 'pi pi-envelope'
        },
        {
            label: 'GitHub',
            icon: 'pi pi-github'
        }
      ];
    
      const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
      const end = <InputText placeholder="Search" type="text" className="w-full" />;

      return (
            <div className="Navbar">
                <Menubar model={items} start={start} />
            </div>
      );
}

export default Navbar;