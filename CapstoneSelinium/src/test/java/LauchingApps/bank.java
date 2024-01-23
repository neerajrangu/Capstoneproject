package LauchingApps;

import static org.testng.Assert.assertEquals;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class bank {
	
	
	@Test
	
	public void setupApp() throws InterruptedException {
		
		WebDriver driver=new ChromeDriver();
		
		driver.get(Constants.bank);
		
	Thread.sleep(2000);
		
		driver.findElement(By.xpath("//a[contains(text(),'Register')]")).click();
		
       driver.manage().window().maximize();
		
		System.out.println("Perfoeme");
		
		
		driver.findElement(By.id("customer.firstName")).sendKeys("Genpact");
		
		driver.findElement(By.id("customer.lastName")).sendKeys("Genpact");

		driver.findElement(By.id("customer.address.street")).sendKeys("Hyderbad");
		
		driver.findElement(By.id("customer.address.state")).sendKeys("Hyderbad");
		
		driver.findElement(By.id("customer.address.city")).sendKeys("Hyderbad");
		
		driver.findElement(By.id("customer.address.zipCode")).sendKeys("232323");
		
		driver.findElement(By.id("customer.phoneNumber")).sendKeys("9999999999");
		
		Thread.sleep(2000);
		
		driver.findElement(By.cssSelector("[id='customer.ssn']")).sendKeys("123");
		
		
		driver.findElement(By.id("customer.username")).sendKeys("GenpactLearn212");
		
		driver.findElement(By.id("customer.password")).sendKeys("123123");
		
		driver.findElement(By.cssSelector("[id=\"repeatedPassword\"]")).sendKeys("123123");
		
		
		
		
		
		Thread.sleep(3000);
		
		driver.findElement(By.cssSelector("[value='Register']")).click();
		
		
		
		
		String name=driver.findElement(By.cssSelector("[id=\"rightPanel\"]")).getText();
		
		// Assert.assertEquals(name,"Welcome GenpactLearn12"
		//+ "Your account was created successfully. You are now logged in.");
		
		
		System.out.println(name);
		
		
		
		
		
		
		
		
		
	}

}
