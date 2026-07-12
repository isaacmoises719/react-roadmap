// Constante única para extensão padrão
const DEFAULT_EXT = 'js'; // Altere para 'js' quando necessário

// Configuração do SystemJS
SystemJS.config({
  baseURL: '/',
  defaultExtension: DEFAULT_EXT,
  packages: {
    ".": {
      main: `../src/index.${DEFAULT_EXT}`,
      defaultExtension: DEFAULT_EXT
    }
  },
  meta: {
    '*.js': {
      'babelOptions': { react: true }
    },
    '*.jsx': {
      'babelOptions': { react: true }
    },
    '*.ts': {
      'babelOptions': { react: true }
    },
    '*.tsx': {
      'babelOptions': { react: true }
    },
    // Estilos
    '*.css': { loader: 'css' },
    '*.scss': { loader: 'sass' },
    '*.sass': { loader: 'sass' },
    '*.less': { loader: 'less' },
    '*.styl': { loader: 'stylus' },
    
    // Imagens
    '*.png': { loader: 'file' },
    '*.jpg': { loader: 'file' },
    '*.jpeg': { loader: 'file' },
    '*.gif': { loader: 'file' },
    '*.svg': { loader: 'file' },
    '*.webp': { loader: 'file' },
    '*.ico': { loader: 'file' },
    
    // Fontes
    '*.woff': { loader: 'file' },
    '*.woff2': { loader: 'file' },
    '*.ttf': { loader: 'file' },
    '*.eot': { loader: 'file' },
    '*.otf': { loader: 'file' },
    
    // Dados
    '*.json': { loader: 'json' },
    '*.xml': { loader: 'xml' },
    '*.yaml': { loader: 'yaml' },
    '*.yml': { loader: 'yaml' },
    '*.toml': { loader: 'toml' },
    '*.csv': { loader: 'csv' },
    
    // Texto e templates
    '*.txt': { loader: 'text' },
    '*.md': { loader: 'text' },
    '*.html': { loader: 'text' },
    '*.hbs': { loader: 'handlebars' },
    '*.mustache': { loader: 'handlebars' },
    
    // Workers
    '*.worker.js': { loader: 'worker' },
    '*.worker.ts': { loader: 'worker' }
  },
  map: {
    // Transpiladores
    'plugin-babel': 'https://unpkg.com/systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'https://unpkg.com/systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    
    // Loaders de estilo
    'css': 'https://unpkg.com/systemjs-plugin-css@latest/css.js',
    'sass': 'https://unpkg.com/systemjs-plugin-sass@latest/sass.js',
    'less': 'https://unpkg.com/systemjs-plugin-less@latest/less.js',
    'stylus': 'https://unpkg.com/systemjs-plugin-stylus@latest/stylus.js',
    
    // Loaders de arquivo
    'file': 'https://unpkg.com/systemjs-plugin-file@latest/file.js',
    
    // Loaders de dados
    'json': 'https://unpkg.com/systemjs-plugin-json@latest/json.js',
    'xml': 'https://unpkg.com/systemjs-plugin-xml@latest/xml.js',
    'yaml': 'https://unpkg.com/systemjs-plugin-yaml@latest/yaml.js',
    'toml': 'https://unpkg.com/systemjs-plugin-toml@latest/toml.js',
    'csv': 'https://unpkg.com/systemjs-plugin-csv@latest/csv.js',
    
    // Loaders de texto
    'text': 'https://unpkg.com/systemjs-plugin-text@latest/text.js',
    
    // Loaders de templates
    'handlebars': 'https://unpkg.com/systemjs-plugin-handlebars@latest/handlebars.js',
    
    // Loader para workers
    'worker': 'https://unpkg.com/systemjs-plugin-worker@latest/worker.js',
    
    // Bibliotecas principais - Versões atualizadas
    'react': 'https://unpkg.com/react@18.2.0/umd/react.production.min.js',
    'react-dom': 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
    'react-dom/client': 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
    'axios': 'https://unpkg.com/axios@1.7.2/dist/axios.min.js',
    'lodash': 'https://unpkg.com/lodash@4.17.21/lodash.min.js',
    'moment': 'https://unpkg.com/moment@2.30.1/min/moment.min.js',
    'prop-types': 'https://unpkg.com/prop-types@15.8.1/prop-types.min.js',
    'classnames': 'https://unpkg.com/classnames@2.5.1/index.min.js'
  },
  transpiler: 'plugin-babel'
});

// Importa o app
SystemJS.import(`../src/index.${DEFAULT_EXT}`)
  .then(function() {
    console.log('Aplicação carregada com sucesso!');
  })
  .catch(function(err) {
    console.error('Erro ao carregar a aplicação:', err);
  });