package LauchingApps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class Flipkart {
	
	
	@Test
	
	public void setup() {
		
		
		WebDriver driver=new ChromeDriver();
		
		driver.get(Constants.flipkart);
		
		
		driver.findElement(By.cssSelector("[name='q']")).sendKeys("Laptop");
		
		
		driver.findElement(By.cssSelector("[type='submit']")).click();
		
		
		driver.findElement(By.xpath("//div[text()='Core i3']")).click();
		driver.close();
	}

}
