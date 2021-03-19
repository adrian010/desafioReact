import { Bar } from "react-chartjs-2";

const graficos = (props) => {
  return (
    <Bar
      data={{
        labels: [
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
          "Domingo",
        ],

        datasets: [
          {
            label: "cantidad de accesos",

            data: props.datos,

            backgroundColor: "rgba(54, 162, 235, 0.2)",

            borderColor: "rgba(54, 162, 235, 1)",

            borderWidth: 1,
          },
        ],
      }}
      width={90}
      height={40}
      options={{
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
};

export default graficos;
