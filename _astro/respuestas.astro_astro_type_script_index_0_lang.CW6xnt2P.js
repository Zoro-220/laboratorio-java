var e=document.getElementById(`btn-desbloquear`),t=document.getElementById(`input-pass`),n=document.getElementById(`pantalla-bloqueo`),r=document.getElementById(`contenido-respuestas`),i=document.getElementById(`msg-error`),a=`java2026`,o=`
        <h2>Solucionario: Retos Prácticos</h2>
        <p>Aquí tienes las soluciones esperadas para los retos de cada módulo. Recuerda que en programación puede haber más de una forma correcta de llegar al resultado.</p>
        <hr style="margin: 2rem 0; border: 1px solid #eee;">

        <h3>Inicio: Introducción a Java</h3>
        <div class="explanation">
            <strong>Reto 1: Calculadora Básica</strong>
            <pre><code>public class Calculadora {
    public static void main(String[] args) {
        int a = 15;
        int b = 20;
        int suma = a + b;
        System.out.println("El resultado de la suma es: " + suma);
    }
}</code></pre>
        </div>

        <div class="explanation">
            <strong>Reto 2: Perfil del Estudiante</strong>
            <pre><code>public class PerfilEstudiante {
    public static void main(String[] args) {
        String nombre = "Ricardo";
        int semestre = 4;
        double promedio = 6.5;
        
        System.out.println("Hola, me llamo " + nombre + ", estoy cursando el semestre " 
                           + semestre + " y mi promedio es de " + promedio);
    }
}</code></pre>
        </div>

        <hr style="margin: 2rem 0; border: 1px solid #eee;">
        <h3>Módulo 1: Herencia</h3>
        <div class="explanation">
            <strong>Reto 1: Polimorfismo con Arreglos (En Main.java)</strong>
            <pre><code>Empleado[] equipo = {empleado, gerente, vendedor};

// Usando un ciclo for-each para recorrer el arreglo
for (Empleado emp : equipo) {
    System.out.println("Salario de " + emp.nombre + ": $" + emp.calcularSalario());
}</code></pre>
        </div>

        <div class="explanation">
            <strong>Reto 2: Crear una nueva Subclase (Practicante.java)</strong>
            <pre><code>package Herencia;

public class Practicante extends Empleado {

    public Practicante(String nombre, Double salarioBase) {
        super(nombre, salarioBase);
    }

    @Override
    public String toString() {
        return "Practicante: " + super.toString();
    }
}</code></pre>
        </div>

        <hr style="margin: 2rem 0; border: 1px solid #eee;">
        <h3>Módulo 2: Swing y UX</h3>
        <div class="explanation">
            <strong>Retos 1 y 2: Expandiendo el Formulario y Botón Limpiar</strong>
            <pre><code>// 1. Cambiamos el layout a 4 filas
panel.setLayout(new GridLayout(4, 2, 10, 10));

// 2. Agregamos los nuevos campos de Edad
JTextField edadField = new JTextField();
panel.add(new JLabel("Edad:"));
panel.add(edadField);

// 3. Creamos el botón limpiar y le damos la acción
JButton btnLimpiar = new JButton("Limpiar");
btnLimpiar.addActionListener(e -> {
    nameField.setText("");
    edadField.setText("");
});

// 4. Lo agregamos al panel en lugar de la celda vacía
panel.add(btnLimpiar);
panel.add(button); // El botón Submit original</code></pre>
        </div>

        <hr style="margin: 2rem 0; border: 1px solid #eee;">
        <h3>Módulo 3: Ventanas Múltiples</h3>
        <div class="explanation">
            <strong>Reto 1: Botón de Envío (En VentanaPrincipal.java)</strong>
            <pre><code>JPanel panelBoton = new JPanel(new FlowLayout(FlowLayout.CENTER));
JButton btnGuardar = new JButton("Guardar");

btnGuardar.addActionListener(e -> {
    if(nombretxt.getText().isEmpty()) {
        JOptionPane.showMessageDialog(this, "El nombre es obligatorio", "Error", JOptionPane.ERROR_MESSAGE);
    } else {
        JOptionPane.showMessageDialog(this, "Estudiante guardado exitosamente");
    }
});

panelBoton.add(btnGuardar);
panelPrincipal.add(panelBoton);</code></pre>
        </div>

        <div class="explanation">
            <strong>Reto 2: Barra de Progreso Visual (En VentanaSplash.java)</strong>
            <pre><code>// 1. Declarar la variable arriba: private JProgressBar barraProgreso;

// 2. En prepararInterfaz(), inicializarla y agregarla al sur:
barraProgreso = new JProgressBar(0, 100);
barraProgreso.setStringPainted(true);
contenido.add(barraProgreso, BorderLayout.SOUTH);

// 3. En mostarYCargar(), actualizar el valor (setValue) dentro del Thread:
actualizarEstado("Cargando módulos...");
barraProgreso.setValue(30);
Thread.sleep(1000);

actualizarEstado("Conectando a la base de datos...");
barraProgreso.setValue(60);
Thread.sleep(1500);

actualizarEstado("Iniciando interfaz...");
barraProgreso.setValue(100);
Thread.sleep(800);</code></pre>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <button onclick="location.reload()" style="background-color: #555;">Bloquear nuevamente la página</button>
        </div>
    `;e?.addEventListener(`click`,()=>{t.value===a?(n.style.display=`none`,r.innerHTML=o):(i.style.display=`block`,t.value=``)}),t?.addEventListener(`keypress`,t=>{t.key===`Enter`&&e?.click()});