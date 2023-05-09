import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class StayPositive {

	static int calc(int[] arr) {
		int x=1;
		int min=0;
		int index=0;
		
		for(int i=0;i<arr.length;i++  ) {
			if(min>arr[i]) {
				min=arr[i];
				index=i;
			}
			
			
		}
		x=min*-1 +1;
		for(int i=0;i<index;i++  ) {
			//System.out.println(arr[i]);
			x=x-arr[i];
		}
		
		
		return x;
		
	}
	
	static void AutoCorrect(){
		//System.out.println("Hello");

		String [] q={"spede", "deul"};
		String[] words= {"duel", "speed", "dule", "cars"};
		String[][] result= new String[q.length][words.length];
		
		for(int i=0;i<q.length;i++) {
			for(int j=0;j<words.length;j++) {
				char[] c1= q[i].toCharArray();
				char[] c2=words[j].toCharArray();
				Arrays.sort(c2);
				Arrays.sort(c1);
				if(Arrays.equals(c1, c2)) {
					result[i][j]=words[j];
				}
			}
		}
		
		//System.out.println("Hello2");


		
		for(int i=0;i<q.length;i++) {
			for(int j=0;j<words.length;j++) {
				if(result[i][j]!=null) {
				System.out.println("Index of "+i+ " "+ result[i][j]);
				}
			}
		}
	}
	
	static int Filter(int[] pollution) {
		ArrayList<Double> test= new ArrayList<Double>( );
		
		Double max=0.0;
		double sum=0;
		double result=0;
		int temp;
		
		for(int i=0;i<pollution.length;i++) {
			test.add((double) pollution[i]);
		}
		
		for(int i=0;i< test.size();i++) {
			sum=test.get(i)+sum;
		}
		temp=0;
		while(true) {
			 max=Collections.max(test);
			 int index=test.indexOf(max);
			 test.set(index, max/2);
			 temp=temp+1;
			 result=0;
			 
			 for(int i=0;i< test.size();i++) {
				result=test.get(i)+result;
			}
				//System.out.println(max);
			if(result<sum/2) {
				return temp;
			}

			 
		}
		
		
	}
	
	static int MatrixMin(int[][] matrix) {
	    int max=0;
	    int min=999;

	    for(int i=0;i<matrix.length;i++) {
	        max=-1;
	        for(int j=0;j<Math.min(matrix.length, matrix[i].length);j++) {
	            if(max<matrix[i][j])
	                max=matrix[i][j];

	        }

	        min=999;
	        for(int j=0;j<Math.min(matrix.length, matrix[i].length);j++) {
	            if(matrix[j][i]<min) {
	                min=matrix[j][i];
	            }
	        }

	        if(max==min) {
	            return max;
	        }

	    }

	    return -1;
	}

	
	static List<String> Substring(String str) {
		
		List<String> result = new ArrayList<>(); 
		Set<Character> seenChars = new HashSet<>(); 
		int start = 0; 
		
		for (int i = 0; i < str.length(); i++) { 
			char c = str.charAt(i); 
			
			if (seenChars.contains(c)) {
				result.add(str.substring(start, i)); 
				start = i;
				seenChars.clear(); 
			} 
			
			seenChars.add(c); 
		} 
		
		result.add(str.substring(start)); 
		System.out.println(result);
		List<String> finalResult = new ArrayList<>(); 
			for (String s : result) { 
				if (hasDuplicateChars(s)) { 
					finalResult.addAll(Substring(s)); 
					} 
				else { 
					finalResult.add(s); 
					} 
			} 
			
			return finalResult; 
		 
			
		
	}
	private static boolean hasDuplicateChars(String s) { 
		Set<Character> seenChars = new HashSet<>(); 
		for (char c : s.toCharArray()) { 
			if (seenChars.contains(c)) { 
				return true;
			} seenChars.add(c); 
		} 
		return false; 
	}

	public static void main(String[] args) {
		int [] arr= {3,-6,5,-2,1};
		//1
		System.out.println( "Stay Postive calc for "+arr.toString()+ " is "+calc(arr));
			
		//2
		AutoCorrect();
		//3
		int[] pollution={5,19,8,1};
		System.out.println("Filter needed: "+ Filter(pollution));
		
		//4
		int [][] matrix= {{2,2}, {1,2}, {3,4}};
		System.out.println(MatrixMin(matrix));
		//5
		System.out.println(Substring("asaksjahhsa").size());

		
	}
	
	
	
}
