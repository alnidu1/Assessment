import java.util.Arrays;
import java.util.Objects;

public class UniqueArray {
	
	public static int[] getUnique(int[] array) {
		
	    boolean[] visited = new boolean[array.length];
	    int[] result= new int[array.length];
	    int count=0;
	    
	    for (int i = 0; i < array.length; i++) {
	        if (!visited[i]) {
	        	result[count]=array[i];
	        	count+=1;
	            //System.out.println(array[i]);
	            visited[i] = true;
	            for (int j = i + 1; j < array.length; j++) {
	                if (array[i] == array[j]) {
	                    visited[j] = true;
	                }
	            }
	        }
	    }
	    
	    int[] finalr= new int[count];
	    for(int i=0;i<count;i++) {
           finalr[i]=result[i];

		}
	    return finalr;
	}
	public static void main(String [] args) {
		int [] arr= {12,15,17,19,12,12};
		int [] r=getUnique(arr);
		for(int i=0;i<r.length;i++) {
            System.out.println(r
            		[i]);

		}
		
	}
}
