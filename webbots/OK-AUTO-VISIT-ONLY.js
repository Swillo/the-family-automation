// Auto-visit profiles on Linkedin with iMacros
// Configure your linkedin credentials, the group and your proxy if needed.
// To learn more about iMacros: http://bit.ly/1CImBoM


// 1. Variables Initialization

var macro, proxy, linkedinEmail, linkedinPassword, linkedinGroup, i, j;

macro = '';

proxy = '';

linkedinGroup = 'https://www.linkedin.com/vsearch/p?type=people&keywords=developpeur+mobile&orig=GLHD&rsid=2307791341442912638695&pageKey=voltron_people_search_internal_jsp&trkInfo=&search=Rechercher'

// 2. Macro Initialization


macro += 'CODE:' + '\n';

macro += 'SET !TIMEOUT_STEP 2' + '\n';

macro += 'SET !TIMEOUT_TAG 2' + '\n';

macro += 'SET !TIMEOUT_PAGE 45' + '\n';

macro += 'SET !ERRORIGNORE YES' + '\n';


// 5. Auto-Visit & Close Profiles

macro += 'WAIT SECONDS=2' + '\n';

macro += 'URL GOTO=' + linkedinGroup + '\n';

for (i = 2; i <= 25; i++) {

  for (j = 1; j <= 10; j++) {
    macro += 'EVENT TYPE=CLICK SELECTOR="#results>LI:nth-of-type(' + j + ')>DIV>H3>A" BUTTON=1 MODIFIERS="meta"' + '\n';
    macro += 'WAIT SECONDS=4' + '\n';
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
