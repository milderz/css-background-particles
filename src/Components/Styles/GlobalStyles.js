import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Variables */
:root {
--green: hsl(149, 56%, 53%); 
--red: hsl(352, 70%, 50%); 
--blue: hsl(198, 100%, 46%);

--text-xs: 1.2rem;
--text-sm: 1.6rem;
--text-md: 2.2rem;
--text-lg: 4.2rem;
}
/* Reset margins */
body,
h1,
h2,
h3,
h4,
p,
figure,
picture {
  margin: 0;
}


/* Body set up */
html {
  font-size: 62.5%;
 
}
body {
  line-height: 1.5;
  letter-spacing: 1px;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: hidden;
}
h1, h2, h3, h4 {
color: var(--text);
}
h2 {
  font-size: var(--text-md);
}
/* Forms */
input,
button,
textarea,
select,
option {
  font: inherit;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}



`