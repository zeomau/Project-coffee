const forms =
    document.getElementById("forms");
function showRegister() {
    forms.style.transform =
        "translateX(-50%)";
}
function showLogin() {
    forms.style.transform =
        "translateX(0)";
}
function togglePassword(
    inputId,
    button
) {
    const input =
        document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        button.textContent = "◉";
    } else {
        input.type = "password";
        button.textContent = "◉";
    }
}
const registerForm =
    document.getElementById(
        "registerForm"
    );
registerForm.addEventListener(
    "submit",
    function (event) {
        const password =
            document.getElementById(
                "registerPassword"
            ).value;
        const confirmPassword =
            document.getElementById(
                "confirmPassword"
            ).value;
        const error =
            document.getElementById(
                "passwordError"
            );
        if (
            password !==
            confirmPassword
        ) {
            event.preventDefault();
            error.style.display =
                "block";
            document
                .getElementById(
                    "confirmPassword"
                )
                .style.borderColor =
                "#d97706";
        } else {
            error.style.display =
                "none";
            document
                .getElementById(
                    "confirmPassword"
                )
                .style.borderColor =
                "";
        }
    }
);
document
    .getElementById("confirmPassword")
    .addEventListener(
        "input",
        function () {
            const password =
                document.getElementById(
                    "registerPassword"
                ).value;
            const error =
                document.getElementById(
                    "passwordError"
                );
            if (
                this.value ===
                password
            ) {
                error.style.display =
                    "none";

                this.style.borderColor =
                    "";
            }
        }
    );