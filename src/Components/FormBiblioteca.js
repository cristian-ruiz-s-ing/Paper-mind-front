import React from "react";
import '../Styles/FormBiblioteca.css';
import Navbar from "./Navbar";

function FormBiblioteca(){
  return(
		<div class="Forma">
			<Navbar/>
			<div class="containerForm">
				<h1>Ingrese los datos de la Biblioteca:</h1><br/>
				<form class="was-validated">
					<div class="form-group">
						<label for="title-biblioteca">Título Biblioteca</label>
						<input type="text" class="form-control" id="title-biblioteca" placeholder="Ingrese un título" required/>
						<div class="invalid-feedback">El título no puede ser vacío</div>
					</div>
					<div class="form-group">
					<label for="type-biblioteca">Tipo Biblioteca</label>
						<select class="custom-select" required>
							<option value="">Seleccione el tipo de Biblioteca</option>
							<option value="1">Biblioteca normal</option>
							<option value="2">Biblioteca importante</option>
							<option value="3">Al azar</option>
						</select>
						<div class="invalid-feedback">Debe seleccionar un tipo de Biblioteca</div>
					</div>

					<div class="mb-3">
						<label for="validationTextarea">Descripción</label>
						<textarea class="form-control is-invalid" id="validationDescription" placeholder="Describa la biblioteca" required></textarea>
					</div>
					<button type="button" class="btn btn-outline-success btn-lg btn-block" onClick="/">Crear</button>
					<button type="button" class="btn btn-outline-danger btn-lg btn-block" onClick="/">Cancelar</button>
				</form>
			</div>
		</div>
	)
}

export default FormBiblioteca;