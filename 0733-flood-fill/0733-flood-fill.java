class Solution {
 
    private void floodfillUtils(int [][]image ,int sr ,int sc ,int color ,int row,int col,int originalColor)
    {
        if(sr<0 || sr>=row || sc<0 || sc>=col || image[sr][sc]!=originalColor ||image[sr][sc]==color)
         return;
 
         image[sr][sc] = color;
         floodfillUtils( image , sr+1 , sc , color , row, col, originalColor);
         floodfillUtils( image , sr-1 , sc , color , row, col, originalColor);
         floodfillUtils( image , sr , sc+1 , color , row, col, originalColor);
         floodfillUtils( image , sr , sc-1 , color , row, col, originalColor);
    }
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
 
           int row =image.length;
           int col= image[0].length;
           if(image[sr][sc]==color)
           return image;
         floodfillUtils(image,sr,sc,color,row,col,image[sr][sc]);
         return image;
 
        // I will paint the currentIndex, then call the recursion for all then neightnbour
        //if the currendIndex is invalid or of differenct color then I returns
        //question is that should I make a new floodfillUtils functions or not
        //suppose I will make it then what parmeter should I send,should I also send n,m the length of the matrix
        // i think so it makes my life easier
       
    }
}