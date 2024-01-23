package LauchingApps;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class OrangeApps {
	
	@Test
	public void setup() throws Exception {
		
		WebDriver driver=new ChromeDriver();
		
		driver.get(Constants.orange);
		
		Thread.sleep(3000);
		driver.findElement(By.cssSelector("[name='username']")).sendKeys("Admin");
		
		driver.findElement(By.cssSelector("[name='password']")).sendKeys("admin123");
		
		driver.findElement(By.cssSelector("[type=\"submit\"]")).click();
		
		String val=driver.getTitle();
		
		System.out.println(val);
		
		
		//logout
		Thread.sleep(2000);
		
		driver.findElement(By.cssSelector("[class='oxd-userdropdown-name']")).click();
		
		Thread.sleep(2000);
		
		driver.findElement(By.partialLinkText("ogo")).click();
		
		
		
	
	}

}
