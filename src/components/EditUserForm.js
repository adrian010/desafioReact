import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.usuarioActual,
  });

  setValue("nombre", props.usuarioActual.nombre);
  setValue("apellido", props.usuarioActual.apellido);

  const onSubmit = (data, e) => {
    data.id = props.usuarioActual.id;
    data.datos = props.usuarioActual.datos;

    props.actualizarUsuario(props.usuarioActual.id, data);
    props.handleClose();

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input
          name="nombre"
          placeholder="Ingrese nombre"
          className="form-control"
          ref={register({
            required: { value: true, message: "nombre obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.nombre?.message}
        </span>

        <label>Apellido</label>
        <input
          name="apellido"
          placeholder="Ingrese Apellido"
          className="form-control"
          ref={register({
            required: { value: true, message: "apellido obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.apellido?.message}
        </span>

        <label>Dni</label>
        <input
          name="dni"
          placeholder="Ingrese Dni"
          className="form-control"
          ref={register({
            required: { value: true, message: "dni obligatorio" },
            minLength: { value: 7, message: "Minimo 7 digitos" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.dni?.message}
        </span>

        <label>Email</label>
        <input
          name="email"
          placeholder="Ingrese Email"
          className="form-control"
          ref={register({
            required: "email obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.email?.message}
        </span>

        <label>Fecha de Alta</label>
        <input
          name="fechaAlta"
          placeholder="Ingrese fecha"
          className="form-control"
          ref={register({
            required: { value: true, message: "campo obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.fechaAlta?.message}
        </span>

        <label>Domicilio</label>
        <input
          name="direccion"
          placeholder="Ingrese direccion"
          className="form-control"
          ref={register({
            required: { value: true, message: "campo obligatorio" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.direccion?.message}
        </span>

        <button className="btn btn-primary">Editar Usuario</button>
      </form>
    </>
  );
};
export default EditUserForm;
