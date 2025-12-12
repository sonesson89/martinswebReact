const FormatCorrectNameForTech = (input: string) => {
  const predefinedNames = {
    git: 'Git',
    npm: 'npm',
    grunt: 'Grunt',
    angular: 'Angular',
    babel: 'Babel',
    karma: 'Karma',
    jquery: 'jQuery',
    bootstrap: 'Bootstrap',
    js: 'JavaScript',
    json: 'JSON',
    javascript: 'JavaScript',
    html: 'HTML',
    less: 'less',
    svg: 'SVG',
    java: 'Java',
    csharp: 'C#',
    cs: 'C#',
    css: 'CSS',
    sass: 'sass',
    shell: 'Shell',
    python: 'Python',
    php: 'php',
    mysql: 'MySQL',
    xml: 'XML',
    dotnet: '.NET',
    visualstudio: 'Visual Studio',
    wireshark: 'Wireshark',
    android: 'Android',
    svn: 'Subversion',
    requirejs: 'RequireJS',
    sonarqube: 'SonarQube',
    magnolia: 'Magnolia CMS',
    azuredevops: 'Azure Devops',
    typescript: 'TypeScript',
    machinelearning: 'Machine Learning',
    nodejs: 'Node.js',
    tensorflow: 'TensorFlow',
    customvision: 'Custom Vision',
    opencv: 'OpenCV',
    graphql: 'GraphQL',
    express: 'Express',
    chatgpt: 'ChatGPT',
    styledcomponents: 'Styled Components',
    threejs: 'Three.js',
    intellij: 'IntelliJ',
    tfs: 'TFS (Team Foundation Server)',
    macos: 'MacOS',
    msoffice: 'MS Office',
    vue: 'Vue.js',
    vscode: 'VS Code',
    playwright: 'Playwright',
  };

  const val = predefinedNames[input as keyof typeof predefinedNames];

  return input && val
    ? val
    : input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
};

const getElementForDep = (dep: string) => {
  switch (dep) {
    case 'angular':
      //return <span className="techIcon"  data-tech-color="angular"><i className="icon-angular"></i></span>;
      return (
        <img
          src="./../src/assets/svg/angular.svg"
          style={{ width: 'auto', height: '30px', marginTop: '-6px' }}
        />
      );
    case 'bootstrap':
      //return <span className="techIcon"  data-tech-color="bootstrap"><i className="icon-bootstrap"></i></span>;
      return (
        <img
          src="./../src/assets/svg/bootstrap.svg"
          style={{ width: 'auto', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'grunt':
      //return <span className="techIcon"  data-tech-color="grunt"><i className="icon-grunt"></i></span>;
      return (
        <img
          src="./../src/assets/svg/grunt.svg"
          style={{ width: 'auto', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'jquery':
      //return <span className="techIcon"  data-tech-color="jquery"><i className="icon-jquery"></i></span>;
      return (
        <img
          src="./../src/assets/svg/jquery.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'react':
      //return <span className="techIcon"  data-tech-color="react"><i className="icon-reactjs"></i></span>;
      return (
        <img
          src="./../src/assets/svg/react.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'npm':
      //return <span className="techIcon"  data-tech-color="npm"><i className="icon-npm"></i></span>;
      return (
        <img
          src="./../src/assets/svg/npm.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'git':
      //return <span className="techIcon"  data-tech-color="git"><i className="icon-git"></i></span>;
      return (
        <img
          src="./../src/assets/svg/git.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'javascript':
      //return <span className="techIcon"  data-tech-color="javascript"><i className="icon-javascript-alt"></i></span>;
      return (
        <img
          src="./../src/assets/svg/javascript.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'java':
      //return <span className="techIcon"  data-tech-color="java"><i className="icon-java-bold"></i></span>;
      return (
        <img
          src="./../src/assets/svg/java.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'css':
      //return <span className="techIcon"  data-tech-color="css"><i className="icon-css3-alt"></i></span>;
      return (
        <img
          src="./../src/assets/svg/css.svg"
          style={{ width: '30px', height: '30px', marginTop: '-5px' }}
        />
      );
    case 'html':
      //return <span className="techIcon"  data-tech-color="html"><i className="icon-html5-alt"></i></span>;
      return (
        <img
          src="./../src/assets/svg/html.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'sass':
      //return <span className="techIcon"  data-tech-color="sass"><i className="icon-sass"></i></span>;
      return (
        <img
          src="./../src/assets/svg/sass.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'shell':
      //return <span className="techIcon"  data-tech-color="shell"><i className="icon-shell"></i></span>;
      return (
        <img
          src="./../src/assets/svg/bash.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    /* case 'python':
            return <span className="techIcon"  data-tech-color="python"><i className="icon-python"></i></span>; */
    case 'php':
      //return <span className="techIcon"  data-tech-color="php"><i className="icon-php"></i></span>;
      return (
        <img
          src="./../src/assets/svg/php.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'svg':
      return (
        <span className="techIcon" data-tech-color="svg">
          <i className="icon-svg"></i>
        </span>
      );
    case 'less':
      //return <span className="techIcon"  data-tech-color="less"><i className="fab fa-less"></i></span>;
      return (
        <img
          src="./../src/assets/svg/less.svg"
          style={{ width: '38px', height: 'auto', marginTop: '1px' }}
        />
      );
    case 'mysql':
      return (
        <img
          src="./../src/assets/svg/mysql.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'firebase':
      return (
        <img
          src="./../src/assets/svg/firebaselogo.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'babel':
      return (
        <img
          src="./../src/assets/svg/babellogo.svg"
          style={{ width: '30px', height: '30px', marginTop: '-5px' }}
        />
      );
    case 'karma':
      return (
        <img
          src="./../src/assets/svg/karmalogo.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'webpack':
      return (
        <img
          src="./../src/assets/svg/webpacklogo.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'heroku':
      return (
        <img
          src="./../src/assets/svg/herokulogo.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'socketio':
      return (
        <img
          src="./../src/assets/svg/socketiologo.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'electron':
      return (
        <img
          src="./../src/assets/svg/electronlogo.svg"
          style={{
            width: '30px',
            height: '30px',
            marginTop: '-7px',
            marginLeft: '5px',
          }}
        />
      );
    case 'nodejs':
      return (
        <img
          src="./../src/assets/svg/nodejslogo.svg"
          style={{ width: '36px', height: 'auto', marginTop: '-2px' }}
        />
      );
    case 'dotnet':
      return (
        <img
          src="./../src/assets/svg/dotnet.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'visualstudio':
      return (
        <img
          src="./../src/assets/svg/visualstudio.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'wireshark':
      return (
        <img
          src="./../src/assets/svg/wireshark.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'csharp':
      return (
        <img
          src="./../src/assets/svg/csharp.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'android':
      return (
        <img
          src="./../src/assets/svg/android.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'svn':
      return (
        <img
          src="./../src/assets/svg/svn.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'hexo':
      return (
        <img
          src="./../src/assets/svg/hexo.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'requirejs':
      return (
        <img
          src="./../src/assets/svg/requirejs.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'sonarqube':
      return (
        <img
          src="./../src/assets/svg/sonarqube.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'confluence':
      return (
        <img
          src="./../src/assets/svg/confluence.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'jira':
      return (
        <img
          src="./../src/assets/svg/jira.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'maven':
      return (
        <img
          src="./../src/assets/svg/maven.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'jenkins':
      return (
        <img
          src="./../src/assets/svg/jenkins.svg"
          style={{ width: 'auto', height: '36px', marginTop: '-8px' }}
        />
      );
    case 'ubuntu':
      return (
        <img
          src="./../src/assets/svg/ubuntu.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'mercurial':
      return (
        <img
          src="./../src/assets/svg/mercurial.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'magnolia':
      return (
        <img
          src="./../src/assets/svg/magnolia.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'redux':
      return (
        <img
          src="./../src/assets/svg/redux.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'cypress':
      return (
        <img
          src="./../src/assets/svg/cypress.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'gerrit':
      return (
        <img
          src="./../src/assets/svg/gerrit.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'azuredevops':
      return (
        <img
          src="./../src/assets/svg/azuredevops.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'typescript':
      return (
        <img
          src="./../src/assets/svg/typescript.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'jest':
      return (
        <img
          src="./../src/assets/svg/jest.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'freemarker':
      return (
        <img
          src="./../src/assets/svg/freemarker.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'machinelearning':
      return (
        <img
          src="./../src/assets/svg/machinelearning.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'tesseract':
      return (
        <img
          src="./../src/assets/svg/tesseract.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'tensorflow':
      return (
        <img
          src="./../src/assets/svg/tensorflow.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'opencv':
      return (
        <img
          src="./../src/assets/svg/opencv.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'customvision':
      return (
        <img
          src="./../src/assets/svg/customvision.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'graphql':
      return (
        <img
          src="./../src/assets/svg/graphql.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'express':
      return (
        <img
          src="./../src/assets/svg/express.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'puppeteer':
      return (
        <img
          src="./../src/assets/svg/puppeteer.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'chatgpt':
      return (
        <img
          src="./../src/assets/svg/chatgpt.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'render':
      return (
        <img
          src="./../src/assets/svg/render.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'styledcomponents':
      return (
        <img
          src="./../src/assets/svg/styledcomponents.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'vite':
      return (
        <img
          src="./../src/assets/svg/vite.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'apache':
      return (
        <img
          src="./../src/assets/svg/apache.svg"
          style={{ width: '30px', height: '36px', marginTop: '-10px' }}
        />
      );
    case 'threejs':
      return (
        <img
          src="./../src/assets/svg/threejs.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'python':
      return (
        <img
          src="./../src/assets/svg/python.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'blender':
      return (
        <img
          src="./../src/assets/svg/blender.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'apollo':
      return (
        <img
          src="./../src/assets/svg/apollo.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'vscode':
      return (
        <img
          src="./../src/assets/svg/vscode.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'eclipse':
      return (
        <img
          src="./../src/assets/svg/eclipse.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'intellij':
      return (
        <img
          src="./../src/assets/svg/intellij.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'scrum':
      return (
        <img
          src="./../src/assets/svg/scrum.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'kanban':
      return (
        <img
          src="./../src/assets/svg/kanban.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'linux':
      return (
        <img
          src="./../src/assets/svg/linux.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'windows':
      return (
        <img
          src="./../src/assets/svg/windows.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'macos':
      return (
        <img
          src="./../src/assets/svg/macos.svg"
          style={{ width: 'auto', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'figma':
      return (
        <img
          src="./../src/assets/svg/figma.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'photoshop':
      return (
        <img
          src="./../src/assets/svg/photoshop.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'msoffice':
      return (
        <img
          src="./../src/assets/svg/msoffice.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'vegas':
      return (
        <img
          src="./../src/assets/svg/vegas.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'tfs':
      return (
        <img
          src="./../src/assets/svg/tfs.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'c':
      return (
        <img
          src="./../src/assets/svg/c.svg"
          style={{ width: '30px', height: '30px', marginTop: '-7px' }}
        />
      );
    case 'vue':
      return (
        <img
          src="./../src/assets/svg/vue.svg"
          style={{ width: '30px', height: '30px', marginTop: '-3px' }}
        />
      );
    case 'playwright':
      return (
        <img
          src="./../src/assets/svg/playwright.svg"
          style={{ width: '30px', height: '30px', marginTop: '-3px' }}
        />
      );
  }
};

export default {
  FormatCorrectNameForTech,
  getElementForDep,
};
