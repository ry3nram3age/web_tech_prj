

        onload = () => {
          document.querySelectorAll('fieldset').forEach((fs, i, all) => {
            fs.oninput = () => {
              if ([...fs.elements].every(f => f.checkValidity())) {
                all[i + 1]?.removeAttribute('disabled');
              }
            };
          });
        };



        window.addEventListener('load', function() {
            document.getElementById("jobApplicationForm").reset();
        });
        
        
        const form = document.getElementById("jobApplicationForm");
        
        form.addEventListener("reset", () => {
            const fieldsets = form.querySelectorAll("fieldset");
            
            // Disable all fieldsets except the first
            fieldsets.forEach((fs, index) => {
                if (index !== 0) fs.setAttribute("disabled", true);
            })
        });