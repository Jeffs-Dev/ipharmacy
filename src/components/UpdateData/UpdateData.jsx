import { useContext, useEffect, useState } from "react";
import { DataRoutesContext } from "../../context/DataRoutes";
import { DataApiContext } from "../../context/DataApi";
import FormProduct from '../Forms/FormProduct/FormProduct';
import FormClient from '../Forms/FormClient/FormClient';
import FormSeller from '../Forms/FormSeller/FormSeller';
import FormCategory from '../Forms/FormCategory/FormCategory';
import FormSale from '../Forms/FormSale/FormSale';

const UpdateData = () => {

    const { pathname } = useContext(DataRoutesContext);

    const { product, client, seller, category, sale } = useContext(DataApiContext);

    const [data, setData] = useState();

    const endpointID = Number(pathname.slice(-1));
    const endpointName = pathname.slice(6).slice(0, -2);



    useEffect(() => {

        if (endpointName === 'product') {
            let data = product.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);
        }

        if (endpointName === 'client') {
            let data = client.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);
        }

        if (endpointName === 'seller') {
            let data = seller.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);
        }

        if (endpointName === 'category') {
            let data = category.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);

        }

        if (endpointName === 'sale') {
            let data = sale.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);

        }



    }, [])




    return (
        <>
            {data != undefined ? (

                <>

                    {product != undefined && endpointName === 'product' && data != undefined && <FormProduct data={data}/> }

                    {client != undefined && endpointName === 'client' && data != undefined && <FormClient data={data}/>}

                    {seller != undefined && endpointName === 'seller' && data != undefined && <FormSeller data={data}/>}

                    {category != undefined && endpointName === 'category' && data != undefined &&  <FormCategory data={data}/>}

                    {sale != undefined && endpointName === 'sale' && data != undefined && <FormSale data={data} />}



                </>




            ) : 'Loading'}





        </>
    )
}

export default UpdateData;














