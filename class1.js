class CRectangulo {
    constructor(longitud, altura) {
      this.longitud = longitud;
      this.altura = altura;
    }
    
    calcularArea() {
      return this.longitud * this.altura;
    }
  }
  const formulario = document.getElementById('formularioRectangulo');
  
  formulario.addEventListener('submit', function(event) {
    
    const longitud = parseFloat(document.getElementById('longitud').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    const rectangulo = new CRectangulo(longitud, altura);
    
    const area = rectangulo.calcularArea();
    
    document.getElementById('resultado').textContent = `El área del rectángulo es: ${area}`;
  });
  