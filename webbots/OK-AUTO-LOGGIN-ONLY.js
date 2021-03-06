// Auto-visit profiles on Linkedin with iMacros
// Configure your linkedin credentials, the group and your proxy if needed.
// To learn more about iMacros: http://bit.ly/1CImBoM


// 1. Variables Initialization


var macro, proxy, linkedinEmail, linkedinPassword, linkedinGroup, i, j;

macro = '';

proxy = '';

linkedinEmail = 'YourMail@gmail.com';

linkedinPassword = 'YourPassword';

linkedinGroup = 'https://www.linkedin.com/groups?viewMembers=&gid=4631551&sik=1422235539201'


// 2. Macro Initialization


macro += 'CODE:' + '\n';

macro += 'SET !TIMEOUT_STEP 2' + '\n';

macro += 'SET !TIMEOUT_TAG 2' + '\n';

macro += 'SET !TIMEOUT_PAGE 45' + '\n';

macro += 'SET !ERRORIGNORE YES' + '\n';


// 3. Clear Cookies, Cache and Set a Proxy


macro += "CLEAR" + "\n";

if (proxy !== "") {
  macro += "PROXY ADDRESS=" + proxy + "\n";
}


// 4. Linkedin Sign In


macro += 'TAB T=1' + '\n';

macro += 'TAB CLOSEALLOTHERS' + '\n';

macro += 'WAIT SECONDS=1' + '\n';

macro += 'URL GOTO=https://www.linkedin.com/' + '\n';


macro += 'EVENTS TYPE=KEYPRESS SELECTOR="#login-email" CHARS=' + linkedinEmail + '\n';

macro += 'EVENTS TYPE=KEYPRESS SELECTOR="#login-password" CHARS=' + linkedinPassword + '\n';
macro += 'EVENT TYPE=CLICK SELECTOR="#pagekey-uno-reg-guest-home>DIV>DIV>FORM>INPUT:nth-of-type(5)" BUTTON=0';




// 6. Run The Macro


iimDisplay("iMacro is now running. Let's hack growth.");

iimPlay(macro);
