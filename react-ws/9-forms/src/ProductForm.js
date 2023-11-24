import {useForm} from 'react-hook-form';

const ProductForm = () => {
    const {register,handleSubmit,formState: { errors }} = useForm({mode: "onChange"});
         
    const handleProduct=(product)=>{
            console.log(product);
         }
    return (
        <div>
            <h1>Product Form</h1> <hr/>

            <form onSubmit={handleSubmit(handleProduct)}>
                <div> 
                    <label>Product Name</label>
                    <input {...register("name",{required:true,minLength:3})} />
                    <span className='text-danger'>
                        {errors.name?.type==='required' &&<span>Product name is required</span>}
                        {errors.name?.type==='minLength' &&<span>Product name should be minumum 3 letters long</span>}
                    </span>
                </div>
                <div>
                    <label>Product Price</label>
                    <input {...register("price")}/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea {...register("description")}></textarea>
                </div>
                <div>
                    <label>Email</label>
                    <input {...register("email",{required:true,pattern:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})}/>
                    {errors.email?.type==='required' &&<span>Email Address is required</span>}
                    {errors.email?.type==='pattern' &&<span>Invalid email provided.</span>}


                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
            <hr/>

        </div>
    );
};

export default ProductForm;