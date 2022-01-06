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

        let vigorexia = "";
        let bulimia = "";
        let anorexia = "";

        for (let i = 0; i < res_array[0].length; i++) {
          if (res_array[0][i] === "vigorexia")
            vigorexia = `
            <h2>Vigorexia</h2>
            <h3>Relación con las redes sociales</h3>
            <p> La vigorexia puede venir de compararse con fisicoculturistas o personas de internet que
            aparentemente tienen muy buen físico pero no todo es real, el ángulo, la cámara, la luz
            afectan y pueden hacer que una persona se vea con mejor físico y fuera de estas redes
            sociales esta persona no tenga tan buen físico como parece. En el caso de compararse con
            fisicoculturistas la persona se puede ver frustrada al intentar conseguir el mismo cuerpo que
            ellos de manera natural(sin esteroides), pero en cambio los fisicoculturistas de gran talla (por
            ejemplo competidores que optan por el Mr olympia) alcanzan ese cuerpo con esteroides,
            entrenadores personales, nutricionistas y muchos tipos de suplementos.</p>
            <br>
            <br>
            <h3>Ayudas Vigorexia</h3>
            <ol>
              <li>Intenta limitar su tiempo de entrenamiento, tener suficiente tiempo de entreno para que
              sea sano, pero no excesivo.</li>
              <li>En caso de que el afectado use esteroides hacerle entender que es malo para la salud a largo
              plazo y que reduzca o elimine el uso de ellos.</li>
              <li>Evitar compararse con otras personas.
              </li>
              <li>Intenta que el afectado se dé cuenta de las virtudes de su cuerpo y no solo de los defectos.</li>
              <li>Evitar que el afectado vea en sus redes sociales solo cuerpos perfectos.(Puede dejar de
                seguir a fisicoculturistas o personas que venden una imagen irreal)</li>
              <li>Intentar que el afectado cambie la percepción que tiene de sí mismo y así desarrolle una
              imagen más realista de el mismo.</li>
              <li>Reforzar la autoestima del afectado</li>
              <li>Hacer que el afectado gane seguridad en sí mismo.</li>
            </ol> 
            `;
          if (res_array[0][i] === "anorexia")
            anorexia = `
            <h2>Anorexia</h2>
            <h3>Relación con las redes sociales</h3>
            <p> Las redes sociales pueden distorsionar la percepción de un físico "ideal" para la persona, ya sea
            mediante fotos editadas o personas que presumen de su delgadez, por ejemplo, en las redes
            sociales usan el hagstag "#ana" u otro tipo de hagstag para dar consejos de como adelgazar o
            esconder comida sin que su familia se dé cuenta.</p>
            <br>
            <br>
            <h3>Ayudas Anorexia</h3>
            <ol>
              <li> Evitar que el afectado vea en sus redes sociales personas que le animen a seguir
              adelgazando (por ejemplo no mirar el hagstag “#ana” o dejar de seguir a gente que de
              consejos sobre como esconder la comida).</li>
              <li>Hazle sentir que el físico no lo es todo, resalta sus virtudes mas allá de su físico.</li>
              <li>La anorexia algunas veces puede venir a raíz de bullying o ciberbullying a través de las
              redes sociales, por eso, intenta que el contacto del afectado con esas personas sea
              nulo.
              </li>
              <li>Hacer que el afectado cuente con el apoyo de familiares y amigos.</li>
            </ol> 
            `;
          if (res_array[0][i] === "bulimia")
            bulimia = `
            <h2>Bulimia</h2>
            <h3>Relación con las redes sociales</h3>
            <p> Las redes sociales pueden distorsionar la percepción de un físico "ideal" para la persona,
            ya sea mediante fotos editadas o personas que presumen de su delgadez, por ejemplo, en
            las redes sociales usan el hagstag "#MIA" u otro tipo de hagstag para dar consejos de cómo
            hacerte vomitar o cómo esconderle esta condición a tu familia.</p>
            <br>
            <br>
            <h3>Ayudas Bulimia</h3>
            <ol>
              <li>Evitar que el afectado vea en sus redes sociales personas que le animen a seguir
              haciendo lo que hace (por ejemplo no mirar el hagstag “#mia”).</li>
              <li>Si el afectado tiene un peso superior a la media y su objetivo es adelgazar podéis
              contratar nutricionistas para que sepa que se puede adelgazar de forma segura</li>
              <li>En caso de que el afectado use laxantes, diuréticos o enemas evite que los use.</li>
              <li>Hazle sentir que el físico no lo es todo, resalta sus virtudes mas allá de su físico.</li>
            </ol> 
            `;
        }

        console.log(res.data);
        const $divId = document.getElementById("test-results");
        const $form = document.getElementById("hook-form");
        $form.style.display = "none";

        $divId.innerHTML = `
          <h1>Resultados del Test</h1>
          ${vigorexia}
          <br>
          ${anorexia}
          <br>
          ${bulimia}
          <br>
          <h3>Ayudas Genéricas</h3>
          <ol>
            <li>En esta aplicación damos un resultado o una ayuda genérica para
            trastornos concretos, para una ayuda más específica acuda a un
            médico y que él de su debido diagnóstico y tratamiento</li>
            <li>Evitar que el afectado vea publicaciones en redes sociales que le
            haga sentir inferior a otra persona o que le de consejos sobre su
            trastorno.</li>
            <li>Muéstrate comprensivo con el afectado y muéstrale la confianza
            suficiente para que sepa que quieres ayudarle sin tener prejuicios.</li>
            <li>Acudir a grupos de apoyo, es decir, acudir a personas que ya han
            pasado ese trastorno alimenticio y puedan entender mejor su
            situación.</li>
            <li>Intenta hacerle ver el problema al afectado sin tratarlo de manera
            brusca.</li>
          </ol> 
          <h3 class="generic_socialmedia">Relaciones genéricas con las redes sociales</h3>
          <p>Las redes sociales pueden distorsionar la percepción de un físico
          "ideal" para la persona, ya sea mediante fotos editadas o personas que
          presumen de un físico irreal, la persona afectada se puede sentir
          inferior y puede intentar conseguir ese físico lo más rápido posible para
          sentirse aceptado en el entorno de las redes sociales. Esto puede
          desembocar en trastornos alimenticios.</p>
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