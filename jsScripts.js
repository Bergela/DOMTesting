const container = document.querySelector('#container');
		const content = document.createElement('div');
		content.classList.add('content');
		content.textContent = 'This is the glorious text-content!';
		container.appendChild(content);
		
		const paragraph = document.createElement('p');
		paragraph.textContent = "Hey I'm red!";
		paragraph.style.color = 'red';
		
		container.appendChild(paragraph);
		
		const header3 = document.createElement('h3');
		header3.textContent = "I'm a blue h3!";
		header3.style.color = 'blue';
		
		container.appendChild(header3);
		
		const newDiv = document.createElement('div');
        newDiv.style.backgroundColor = 'pink';
        newDiv.style.borderColor = 'black';
        newDiv.style.borderStyle = 'dotted';
          
        const newH1 = document.createElement('h1');
        newH1.textContent = "I'm in a Div";
        newDiv.appendChild(newH1);
          
        const newP = document.createElement('p');
        newP.textContent = "ME TOO!";
        newDiv.appendChild(newP);
        
		
		container.appendChild(newDiv);