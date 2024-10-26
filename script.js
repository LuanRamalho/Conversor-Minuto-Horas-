        function convertMinutes() {
            const minutesInput = document.getElementById("minutes").value;
            const minutes = parseInt(minutesInput);

            if (isNaN(minutes) || minutes < 0) {
                document.getElementById("result").innerText = "Por favor, insira um valor válido.";
                return;
            }

            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;

            document.getElementById("result").innerText = `${hours} horas e ${remainingMinutes} minutos`;
        }
