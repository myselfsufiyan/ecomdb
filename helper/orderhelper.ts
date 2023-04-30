import orderServiceImplClass from "../serviceImpl/order";
import productServiceImplClass from "../serviceImpl/products";
class orderHelper{
    order_serv: orderServiceImplClass;
    product_serv: productServiceImplClass ;


    constructor(){
        this.order_serv = new orderServiceImplClass()
        this.product_serv = new productServiceImplClass()
    }

    public getOrderById = async(response:any) => {
        try {
            let products : any = []
            let data : any = []
            if(response){
                for(let i = 0; i < response.product_id.length; i++) {
                    let res = await this.product_serv.get_product(response.product_id[i]);
                    products.push(res);
                }
                data.push({id:response.id,quantity:response.quantity,totalprice:response.totalprice,status:response.status,user_id:response.user_id,createdAt:response.createdAt,updatedAt:response.updatedAt,products:products});
                return data;
            }else{
                return{error:"Something went wrong please try again"}
            }    
        } catch (error:any) {
            return error.message;
        }
    }

}

export default orderHelper;