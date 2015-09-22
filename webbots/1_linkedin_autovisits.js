// Auto-visit profiles on Linkedin with iMacros
// Configure your linkedin credentials, the group and your proxy if needed.
// To learn more about iMacros: http://bit.ly/1CImBoM


// 1. Variables Initialization


var macro, proxy, linkedinEmail, linkedinPassword, linkedinGroup, i, j;

macro = '';

proxy = '';

linkedinEmail = 'youremail@gmail.com';

linkedinPassword = 'password';

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

macro += 'WAIT SECONDS=2' + '\n';

macro += 'EVENT TYPE=CLICK SELECTOR="#pagekey-uno-reg-guest-home>DIV>DIV>FORM>INPUT:nth-of-type(5)" BUTTON=0';
// Part 4. works when nothing else exept Part 6. is after :-/


// 5. Auto-Visit & Close Profiles


macro += 'WAIT SECONDS=2' + '\n';

macro += 'URL GOTO=' + linkedinGroup + '\n';

for (i = 2; i <= 25; i++) {

  for (j = 1; j <= 10; j++) {
    macro += 'EVENT TYPE=CLICK SELECTOR="#results>LI:nth-of-type(' + j + ')>DIV>H3>A" BUTTON=1 MODIFIERS="meta"' + '\n';
    macro += 'WAIT SECONDS=2' + '\n';
  }

  macro += 'TAB T=2' + '\n';

  for (j = 1; j <= 10; j++) {
    macro += 'TAB CLOSE' + '\n';
  }

  macro += 'WAIT SECONDS=20' + '\n';
  macro += 'TAG POS=1 TYPE=A ATTR=TXT:' + i + '\n';

}


// 6. Run The Macro


iimDisplay("iMacro is now running. Let's hack growth.");

iimPlay(macro);
