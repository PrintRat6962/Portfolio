//Assume querySelector can be used to take classes and store them in variables.
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); //The wrapper that encompasses the buttons
const sectBtn = document.querySelectorAll('.control'); //Take all the buttons under the control class.
const allSections = document.querySelector('.main-content'); //main-content is the class name of the body tag

function PageTransitions() 
{
    //Button click active class
    //Note: 'this' keyword does not work within an arrow function.

    //Using a for loop to add an event listener to each button.
    for(let i = 0; i < sectBtn.length; i++)
    {
        //Take the current active button, remove 'active', then add 'active' to the clicked button.
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id; //dataset refers to the group of names within the data that the id is a part of.
        if(id)
        {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active') //Take away the current active button class
            })
            e.target.classList.add('active')

            //Hiding the current section by removing 'active' from the class 
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            //Taking the current selected element and adding the 'active' class.
            const element = document.getElementById(id)
            element.classList.add('active');
        }
    })

    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();