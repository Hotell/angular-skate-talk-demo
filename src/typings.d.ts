/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Window {
  ShadyCSS: ShadyCSS.ShadyCssStatic,
}


declare namespace ShadyCSS {
  interface IntrinsicElements {
    'custom-style': HTMLElement,
  }

  interface ShadyCssStatic {
    prepareTemplate( template: HTMLTemplateElement, elementName: string, typeExtension?: string ),
    applyStyle( host: HTMLElement, overrideProps?: { [ propName: string ]: string } ),
    updateStyles( properties?: { [ propName: string ]: string } ),
  }
}
