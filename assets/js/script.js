// 13-May-2021

let skill_list = document.querySelectorAll('.skill_list');
let projectBox = document.querySelectorAll('.projectBox');


// this loop is only use for  
// get accessing all NodeList
skill_list.forEach(select => {

    select.addEventListener('click', (e) => {

        // this loop is only use for  
        // unselect from previous selected in NodeList
        skill_list.forEach(unSelect => {
            unSelect.classList.remove('active');
        })

        select.classList.add('active');

        
        const dataFilter = select.getAttribute('data-filter');

        // get separated  from all & show in same group  
        projectBox.forEach(project => {

            // Hide all node
            project.classList.add('hide');
            // false class for unselecting | toggling
            project.classList.remove('active');

            if (project.getAttribute('data-item') == dataFilter ||
                dataFilter == 'all') {

                // click & Show
                project.classList.add('active');
                project.classList.remove('hide');
            }
        })

    });
});


// direct access by clicking into specific Project
projectBox.forEach(project => {

    project.addEventListener('click', () => {
        console.log(project)
    });

});