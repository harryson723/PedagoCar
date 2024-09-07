import { ClipLoader } from "react-spinners"


const Loader: React.FC = () => {
    return < div className="h-[100vh] flex flex-row justify-center content-center " >
        <ClipLoader size={60} />
    </div >
}

export default Loader;