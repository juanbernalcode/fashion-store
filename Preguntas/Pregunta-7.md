# 7: ¿Qué es el Virtual DOM? 

## El Virtual DOM es una representación del DOM.

¿ Que quiero decir con esto ?

cuando hacemos un cambio en nuestro codigo de Javascript se debe actualizar el DOM del navegador para ver los cambios reflejados. 

Hasta ahi bien, pero Actualizar el DOM es una operacion costosa para el navegador, y la verdad que no necesitamos actualizar toda nuestro Codigo sino unicamente secciones especificas del contenido y calcular esas secciones especificas tambien es costoso.  Leer el DOM y hacer comparaciones para analizar qué debe actualizarse y qué no también puede consumir bastante tiempo.

Ahi es donde se vuelve util el Virtual DOM ya que al ser una representacion del DOM en la memoria del navegador se convierte en un intermediario entre el DOM y nosotros, asi podemos hacer comparaciones sin afectar DOM

Cuando interactuamos con el verdadero DOM le vamos a pedir  unicamente los cambios que realmente necesitamos.

