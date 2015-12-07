package com.rest;

import spark.Request;
import spark.Response;
import spark.Spark;
import sun.misc.IOUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class RestController {

	public static void main(String[] args) {
		Spark.staticFileLocation("/public/html");
		Spark.get("/hello", (req, res) -> "Hello World");
		//Spark.put("/", (req, res) -> save(req, res));
		
	}
	
	private static String save(Request req, Response res) throws FileNotFoundException {
        File file = new File("./public/html/index.html");
        FileInputStream stream = new FileInputStream(file);



      //  Sour
		return "ACK";
	}
}
