package controllers

import play.api._
import play.api.mvc._
import models.MethodSection
import models.MethodSlide

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index(MethodSection.all()))
  }
  
  def methodSection(id: String) = Action { 
    Ok(views.html.methodSection(MethodSection.all(), MethodSection.get(id), MethodSlide.all(id)))
  }
  
}