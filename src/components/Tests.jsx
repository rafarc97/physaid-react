import React from "react"
import { useState } from "react"
import Axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";


export const Tests = () => {

  const { user, isAuthenticated } = useAuth0();

  const url = "https://cuentamomento.pythonanywhere.com/internal/tests";

  const [data, setData] = useState({
  })

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }

  function submit(e) {
    let my_array = [];
    e.preventDefault();
    let data_array = Object.values(data);

    for (let i = 0; i < 20; i++) {
      if (data_array[i] % 2 === 0)
        my_array.push(0);
      else
        my_array.push(1);
    }


    Axios.post(url, {
      tests: my_array,
      email: `${user.email}`
    })
      .then(res => {
        let res_array = Object.values(res.data)
        console.log(res_array[1])
        console.log(res_array[0][1])

        let vigorexia = false;
        let bulimia = false;
        let anorexia = false;

        for(let i = 0; i < res_array[0].length; i++){
          if(res_array[0][i] === "vigorexia")
            vigorexia = true;
          if(res_array[0][i] === "anorexia")
            anorexia = true;
          if(res_array[0][i] === "bulimia")
            bulimia = true;
        }

        console.log(res.data);
        const $divId = document.getElementById("test-results");
        const $form = document.getElementById("hook-form");
        $form.style.display = "none";

        $divId.innerHTML = `
          <h1>Resultados del Test</h1>
          <p> Hemos detectado que tienes problemas de: <p/>
          Vigorexia: ${vigorexia}
          <br>
          Anorexia: ${anorexia}
          Bulimia: ${bulimia}
          <br>
        `;
      })
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

          <br />

          <div className="form-group">
            <b>1. &nbsp;</b> ¿El afectado se mira constantemente en el espejo resaltando sus defectos ante todo?
            <br /> <br />
            <label className="label-si" htmlFor="1">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="1"
              value="1"
              name="1"
              required
            />
            <br />
            <label className="label-no" htmlFor="2">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="2"
              value="2"
              name="1"
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
              type="radio"
              id="3"
              value="3"
              name="2"
              required
            />
            <br />
            <label className="label-no" htmlFor="4">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="4"
              value="4"
              name="2"
              required
            />
          </div>

          <br />
          <br />

          <div className="form-group">
            <b>3. &nbsp;</b>¿El afectado siente estrés si falta un día a entrenar?
            <br /> <br />
            <label className="label-si" htmlFor="5">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="5"
              value="5"
              name="3"
              required
            />
            <br />
            <label className="label-no" htmlFor="6">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="6"
              value="6"
              name="3"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>4. &nbsp;</b>¿Si un día no cumple con su dieta y sus macronutrientes siente estrés o ansiedad?
            <br /> <br />
            <label className="label-si" htmlFor="7">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="7"
              value="7"
              name="4"
              required
            />
            <br />
            <label className="label-no" htmlFor="8">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="8"
              value="8"
              name="4"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>5. &nbsp;</b>¿Le da mas prioridad al gimnasio o hacer ejercicio que a las demás cosas en su vida?
            <br /> <br />
            <label className="label-si" htmlFor="9">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="9"
              value="9"
              name="5"
              required
            />
            <br />
            <label className="label-no" htmlFor="10">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="10"
              value="10"
              name="5"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>6. &nbsp;</b>¿Siente que su físico no es suficiente y se ve delgado sin estarlo?
            <br /> <br />
            <label className="label-si" htmlFor="11">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="11"
              value="11"
              name="6"
              required
            />
            <br />
            <label className="label-no" htmlFor="12">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="12"
              value="12"
              name="6"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>7. &nbsp;</b>¿El afectado se ha llegado a replantear la toma de esteroides por que se ve "delgado"?
            <br /> <br />
            <label className="label-si" htmlFor="13">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="13"
              value="13"
              name="7"
              required
            />
            <br />
            <label className="label-no" htmlFor="14">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="14"
              value="14"
              name="7"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>8. &nbsp;</b>¿El afectado ha tenido una bajada de peso excesiva o no logra el aumento de peso previsto?
            <br /> <br />
            <label className="label-si" htmlFor="15">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="15"
              value="15"
              name="8"
              required
            />
            <br />
            <label className="label-no" htmlFor="16">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="16"
              value="16"
              name="8"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>9. &nbsp;</b>¿El afectado tiene un aspecto delgado y aun así no se ve delgado?
            <br /> <br />
            <label className="label-si" htmlFor="17">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="17"
              value="17"
              name="9"
              required
            />
            <br />
            <label className="label-no" htmlFor="18">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="18"
              value="18"
              name="9"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>10. &nbsp;</b>¿El afectado sufre de fatiga, mareos o incluso desmayos?
            <br /> <br />
            <label className="label-si" htmlFor="19">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="19"
              value="19"
              name="10"
              required
            />
            <br />
            <label className="label-no" htmlFor="20">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="20"
              value="20"
              name="10"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>11. &nbsp;</b>¿El afectado controla su ingesta de alimentos y suele hacer ayuno?
            <br /> <br />
            <label className="label-si" htmlFor="21">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="21"
              value="21"
              name="11"
              required
            />
            <br />
            <label className="label-no" htmlFor="22">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="22"
              value="22"
              name="11"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>12. &nbsp;</b>¿El afectado hace ejercicios cardiovasculares de forma excesiva?
            <br /> <br />
            <label className="label-si" htmlFor="23">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="23"
              value="23"
              name="12"
              required
            />
            <br />
            <label className="label-no" htmlFor="24">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="24"
              value="24"
              name="12"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>13. &nbsp;</b>¿El afectado suele mentir sobre la cantidad de ingesta de alimentos?
            <br /> <br />
            <label className="label-si" htmlFor="25">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="25"
              value="25"
              name="13"
              required
            />
            <br />
            <label className="label-no" htmlFor="26">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="26"
              value="26"
              name="13"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>14. &nbsp;</b>¿El afectado siente estrés al comer en público?
            <br /> <br />
            <label className="label-si" htmlFor="27">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="27"
              value="27"
              name="14"
              required
            />
            <br />
            <label className="label-no" htmlFor="28">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="28"
              value="28"
              name="14"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>15. &nbsp;</b>¿El afectado suele sentirse mal o culpable después de una ingesta no excesiva de alimentos?
            <br /> <br />
            <label className="label-si" htmlFor="29">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="29"
              value="29"
              name="15"
              required
            />
            <br />
            <label className="label-no" htmlFor="30">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="30"
              value="30"
              name="15"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>16. &nbsp;</b>¿El afectado se fuerza el vómito después de comer para no engordar?
            <br /> <br />
            <label className="label-si" htmlFor="31">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="31"
              value="31"
              name="16"
              required
            />
            <br />
            <label className="label-no" htmlFor="32">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="32"
              value="32"
              name="16"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>17. &nbsp;</b>¿El afectado suele hacer demasiado ejercicio cardiovascular después de un “atracón” (ingesta
            excesiva de alimentos)?
            <br /> <br />
            <label className="label-si" htmlFor="33">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="33"
              value="33"
              name="17"
              required
            />
            <br />
            <label className="label-no" htmlFor="34">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="34"
              value="34"
              name="17"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>18. &nbsp;</b>¿El afectado tiene episodios de comer cantidades excesivas de comida de una sola vez?
            <br /> <br />
            <label className="label-si" htmlFor="35">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="35"
              value="35"
              name="18"
              required
            />
            <br />
            <label className="label-no" htmlFor="36">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="36"
              value="36"
              name="18"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>19. &nbsp;</b>¿El afectado hace ayunos entre “atracones” (ingestas excesivas de alimentos)?
            <br /> <br />
            <label className="label-si" htmlFor="37">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="37"
              value="37"
              name="19"
              required
            />
            <br />
            <label className="label-no" htmlFor="38">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="38"
              value="38"
              name="19"
              required
            />
          </div>

          <br />
          <br />


          <div className="form-group">
            <b>20. &nbsp;</b>¿El afectado usa laxantes, diuréticos o enemas sin ser necesarios?
            <br /> <br />
            <label className="label-si" htmlFor="39">Sí  &nbsp; &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="39"
              value="39"
              name="20"
              required
            />
            <br />
            <label className="label-no" htmlFor="40">No  &nbsp; </label>
            <input
              onChange={(e) => handle(e)}
              type="radio"
              id="40"
              value="40"
              name="20"
              required
            />
          </div>

          <p className="hidden-usermail">{user.email}</p>

          <button type="submit" form="hook-form" className="btn btn-dark btn-form">Enviar Formulario</button>
        </form>


        <div id="test-results">
          
        </div>
          
        </div>
    )
  );
};