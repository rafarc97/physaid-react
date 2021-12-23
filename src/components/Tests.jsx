import React from "react"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";


export const Tests = () => {

  const {user, isAuthenticated} = useAuth0();

  const url = "";
  
  const [data, setData] = useState({
    user: ``
  })

  function submit(e) {
    let my_array = [];
    e.preventDefault();
    let data_array = Object.values(data);

    console.log(data_array);
    for(let i = 0; i < 20; i++){
      if(data_array[i] % 2 == 0)
        my_array.push(0);
      else
        my_array.push(1);
    }
    console.log(my_array);
    
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(e.target)
  }


  return (

    isAuthenticated && (

      <div>

      <form
        id="hook-form"
        onSubmit={(e) => submit(e)}
        className="tests-form"
        target="_blank"
      >
        <legend name="contact">
          Complete su cuestionario
        </legend>
        <p>Email: {user.email}</p>

        <br />

        <div className="form-group">
          <b>1. &nbsp;</b> ¿El afectado se mira constantemente en el espejo resaltando sus defectos ante todo?
          <br /> <br />
          <label className="label-si" htmlFor="1">Sí  &nbsp; &nbsp; </label>
          <input
            onChange={(e) => handle(e)}
            value={data.valor}
            type="radio"
            id="1"
            value="1"
            required
          />
          <br />
          <label className="label-no" htmlFor="2">No  &nbsp; </label>
          <input
            onChange={(e) => handle(e)}
            value={data.valor}
            type="radio"
            id="2"
            value="2"
            required
          />
        </div>

        <br />

        <br />


        <div className="form-group">
          <b>2. &nbsp;</b>¿Siempre que ve alguien con buen físico tiende a comparar su cuerpo con el de la otra persona
          y siempre se ve inferior a esa persona?
          <br /> <br />
          <label className="label-si" htmlFor="3">Sí  &nbsp; &nbsp; </label>
          <input
            onChange={(e) => handle(e)}
            value={data.valor}
            type="radio"
            id="3"
            name="q2"
            value="3"
            required
          />
          <br />
          <label className="label-no" htmlFor="4">No  &nbsp; </label>
          <input
            onChange={(e) => handle(e)}
            value={data.valor}
            type="radio"
            id="4"
            name="q2"
            value="4"
            required
          />
        </div>

        <br />
        <br />

        {/*
        <div className="form-group">
          <b>3. &nbsp;</b>¿El afectado siente estrés si falta un día a entrenar?
          <br /> <br />
          <label className="label-si" htmlFor="name3">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name3"
            name="q3"
            required
          />
          <br />
          <label className="label-no" htmlFor="name33">No  &nbsp; </label>
          <input
            type="radio"
            id="name33"
            name="q3"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>4. &nbsp;</b>¿Si un día no cumple con su dieta y sus macronutrientes siente estrés o ansiedad?
          <br /> <br />
          <label className="label-si" htmlFor="name4">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name4"
            name="q4"
            required
          />
          <br />
          <label className="label-no" htmlFor="name44">No  &nbsp; </label>
          <input
            type="radio"
            id="name44"
            name="q4"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>5. &nbsp;</b>¿Le da mas prioridad al gimnasio o hacer ejercicio que a las demás cosas en su vida?
          <br /> <br />
          <label className="label-si" htmlFor="name5">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name5"
            name="q5"
            required
          />
          <br />
          <label className="label-no" htmlFor="name55">No  &nbsp; </label>
          <input
            type="radio"
            id="name55"
            name="q5"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>6. &nbsp;</b>¿Siente que su físico no es suficiente y se ve delgado sin estarlo?
          <br /> <br />
          <label className="label-si" htmlFor="name6">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name6"
            name="q6"
            required
          />
          <br />
          <label className="label-no" htmlFor="name66">No  &nbsp; </label>
          <input
            type="radio"
            id="name66"
            name="q6"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>7. &nbsp;</b>¿El afectado se ha llegado a replantear la toma de esteroides por que se ve "delgado"?
          <br /> <br />
          <label className="label-si" htmlFor="name7">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name7"
            name="q7"
            required
          />
          <br />
          <label className="label-no" htmlFor="name77">No  &nbsp; </label>
          <input
            type="radio"
            id="name77"
            name="q7"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>8. &nbsp;</b>¿El afectado ha tenido una bajada de peso excesiva o no logra el aumento de peso previsto?
          <br /> <br />
          <label className="label-si" htmlFor="name8">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name8"
            name="q8"
            required
          />
          <br />
          <label className="label-no" htmlFor="name88">No  &nbsp; </label>
          <input
            type="radio"
            id="name88"
            name="q8"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>9. &nbsp;</b>¿El afectado tiene un aspecto delgado y aun así no se ve delgado?
          <br /> <br />
          <label className="label-si" htmlFor="name9">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name9"
            name="q9"
            required
          />
          <br />
          <label className="label-no" htmlFor="name99">No  &nbsp; </label>
          <input
            type="radio"
            id="name99"
            name="q9"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>10. &nbsp;</b>¿El afectado sufre de fatiga, mareos o incluso desmayos?
          <br /> <br />
          <label className="label-si" htmlFor="name10">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name10"
            name="q10"
            required
          />
          <br />
          <label className="label-no" htmlFor="name100">No  &nbsp; </label>
          <input
            type="radio"
            id="name100"
            name="q10"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>11. &nbsp;</b>¿El afectado controla su ingesta de alimentos y suele hacer ayuno?
          <br /> <br />
          <label className="label-si" htmlFor="name11">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name11"
            name="q11"
            required
          />
          <br />
          <label className="label-no" htmlFor="name111">No  &nbsp; </label>
          <input
            type="radio"
            id="name111"
            name="q11"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>12. &nbsp;</b>¿El afectado hace ejercicios cardiovasculares de forma excesiva?
          <br /> <br />
          <label className="label-si" htmlFor="name12">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name12"
            name="q12"
            required
          />
          <br />
          <label className="label-no" htmlFor="name122">No  &nbsp; </label>
          <input
            type="radio"
            id="name122"
            name="q12"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>13. &nbsp;</b>¿El afectado suele mentir sobre la cantidad de ingesta de alimentos?
          <br /> <br />
          <label className="label-si" htmlFor="name13">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name13"
            name="q13"
            required
          />
          <br />
          <label className="label-no" htmlFor="name133">No  &nbsp; </label>
          <input
            type="radio"
            id="name133"
            name="q13"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>14. &nbsp;</b>¿El afectado siente estrés al comer en público?
          <br /> <br />
          <label className="label-si" htmlFor="name14">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name14"
            name="q14"
            required
          />
          <br />
          <label className="label-no" htmlFor="name144">No  &nbsp; </label>
          <input
            type="radio"
            id="name144"
            name="q14"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>15. &nbsp;</b>¿El afectado suele sentirse mal o culpable después de una ingesta no excesiva de alimentos?
          <br /> <br />
          <label className="label-si" htmlFor="name15">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name15"
            name="q15"
            required
          />
          <br />
          <label className="label-no" htmlFor="name155">No  &nbsp; </label>
          <input
            type="radio"
            id="name155"
            name="q15"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>16. &nbsp;</b>¿El afectado se fuerza el vómito después de comer para no engordar?
          <br /> <br />
          <label className="label-si" htmlFor="name16">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name16"
            name="q16"
            required
          />
          <br />
          <label className="label-no" htmlFor="name166">No  &nbsp; </label>
          <input
            type="radio"
            id="name166"
            name="q16"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>17. &nbsp;</b>¿El afectado suele hacer demasiado ejercicio cardiovascular después de un “atracón” (ingesta
          excesiva de alimentos)?
          <br /> <br />
          <label className="label-si" htmlFor="name17">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name17"
            name="q17"
            required
          />
          <br />
          <label className="label-no" htmlFor="name177">No  &nbsp; </label>
          <input
            type="radio"
            id="name177"
            name="q17"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>18. &nbsp;</b>¿El afectado tiene episodios de comer cantidades excesivas de comida de una sola vez?
          <br /> <br />
          <label className="label-si" htmlFor="name18">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name18"
            name="q18"
            required
          />
          <br />
          <label className="label-no" htmlFor="name188">No  &nbsp; </label>
          <input
            type="radio"
            id="name188"
            name="q18"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>19. &nbsp;</b>¿El afectado hace ayunos entre “atracones” (ingestas excesivas de alimentos)?
          <br /> <br />
          <label className="label-si" htmlFor="name19">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name19"
            name="q19"
            required
          />
          <br />
          <label className="label-no" htmlFor="name199">No  &nbsp; </label>
          <input
            type="radio"
            id="name199"
            name="q19"
            required
          />
        </div>

        <br />
        <br />


        <div className="form-group">
          <b>20. &nbsp;</b>¿El afectado usa laxantes, diuréticos o enemas sin ser necesarios?
          <br /> <br />
          <label className="label-si" htmlFor="name20">Sí  &nbsp; &nbsp; </label>
          <input
            type="radio"
            id="name20"
            name="q20"
            required
          />
          <br />
          <label className="label-no" htmlFor="name200">No  &nbsp; </label>
          <input
            type="radio"
            id="name200"
            name="q20"
            required
          />
        </div>
          */}

        <br />
        <br />


        <button type="submit" form="hook-form" className="btn btn-dark btn-form">Enviar</button>
      </form>
    </div>
  ) 
  );
};