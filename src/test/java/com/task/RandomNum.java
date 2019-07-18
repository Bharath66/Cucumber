package com.task;

import java.util.Random;

public class RandomNum {
	
	public static void main(String[] args) {
		Random obj = new Random();
		int i = obj.nextInt();
		double j = obj.nextDouble();
		System.out.println(i+" \n "+j);
	}

}
