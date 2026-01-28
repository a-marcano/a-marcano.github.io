import java.util.Scanner;

/*
	COP3330 Fall 2025
	Programming Assignment 1
	Student Name: Andrea Marcano
	File Name: Assignment1.java
	NOTE: I hereby certify that this submission is my original work.
	It was completed independently by me without unauthorized 
	assistance. I affirm that all sources consulted have been properly
	acknowledged. No part of this work was copied or plagiarized from
	any other source/s.
*/

public class Assignment1 {
	public static void main(String[] args) {
		
		//Create a Scanner object to read in user input
		Scanner stdin = new Scanner(System.in);
		
		//Declare and initialize variables
		int coffeePrice;
		int coffeeNum;
		int pastryPrice;
		int pastryNum;
		int partySize;
		int subtotal;
		double percentTax = 0.06;
		double taxAmnt;
		double total;
		double personShare;
		
		//Print a header for the receipt
		System.out.println("==== RECEIPT ====");
		
		//Prompt user to input coffee information
		System.out.print("Coffee price: ");
		coffeePrice = stdin.nextInt();
		System.out.print("Number of coffees: ");
		coffeeNum = stdin.nextInt();
		
		//Prompt user to input pastry information
		System.out.print("Pastry price: ");
		pastryPrice = stdin.nextInt();
		System.out.print("Number of pastries: ");
		pastryNum = stdin.nextInt();
		
		//Prompt user to input party size
		System.out.print("Party size: ");
		partySize = stdin.nextInt();
		System.out.println();
		
		//Calculate totals
		//Cast subtotal from int to double to avoid int arithmetic
		subtotal = coffeePrice * coffeeNum + pastryPrice * pastryNum;
		taxAmnt = (double)subtotal * percentTax;
		total = subtotal + taxAmnt;
		personShare = total / partySize;
		
		//Print out totals
		System.out.printf("Total before tax: $ %d\n", subtotal);
		System.out.printf("Florida tax (6%%): $ %.2f\n", taxAmnt);
		System.out.printf("Total with tax: $ %.2f\n", total);
		System.out.printf("For a party size of %d, ", partySize);
		System.out.printf("each person pays: $ %.2f\n", personShare);
		
		//Print closing message
		System.out.print("=== THANK YOU ===");
		
	}
}
