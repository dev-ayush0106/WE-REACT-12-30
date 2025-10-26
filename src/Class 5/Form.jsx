import React from 'react'
import { useForm} from "react-hook-form"

const Form = () => {
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitting}
    }=useForm()

    function handleData(data){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res()
                console.log(data)
                reset()
            },2000)
        })
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(handleData)}>
        <label htmlFor="">Full Name:</label>
        <input type="text" placeholder='Enter your Name' {...register("fullname",
            {required:true,
                minLength:{
                    value:5,message:"Minimum 5 Charcters Required"
                },
                maxLength:{
                    value:10,message:"Maximum 10 Characters Required"
                }
            })}
            />

            {
                errors.fullname && <span style={{color:"red"}}>{errors.fullname.message}</span>
            }
        <br />
        <label htmlFor="">Age:</label>
        <input type="number" placeholder='Enter your Age' {...register("age",
            {required:true,
                min:{
                    value:18,
                    message:"Age is Lessthan 18"
                },
                max:{
                    value:30,
                    message:"Age is greater than 30"
                }

            }
            )} />

            {
                errors.age && <span>{errors.age.message}</span>
            }
        <br />
        <label htmlFor="">Email:</label>
        <input type="email" placeholder='Enter your Email' {...register("email")} />
        <br />
        <input type="submit" disabled={isSubmitting} value={(isSubmitting)?"Submitting....":"Submit"}/>
      </form>
    </div>
  )
}

export default Form
