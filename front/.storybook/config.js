import {configure} from '@kadira/storybook'

function loadStories() {
    //TODO tentar fazer no estilo ES6
    require('../src/stories')
}

configure(loadStories, module)
