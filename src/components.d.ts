/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MySideDrawer {
        "open": () => Promise<void>;
        "opened": boolean;
        "title": string;
    }
    interface StockPrice {
    }
}
declare global {
    interface HTMLMySideDrawerElement extends Components.MySideDrawer, HTMLStencilElement {
    }
    var HTMLMySideDrawerElement: {
        prototype: HTMLMySideDrawerElement;
        new (): HTMLMySideDrawerElement;
    };
    interface HTMLStockPriceElement extends Components.StockPrice, HTMLStencilElement {
    }
    var HTMLStockPriceElement: {
        prototype: HTMLStockPriceElement;
        new (): HTMLStockPriceElement;
    };
    interface HTMLElementTagNameMap {
        "my-side-drawer": HTMLMySideDrawerElement;
        "stock-price": HTMLStockPriceElement;
    }
}
declare namespace LocalJSX {
    interface MySideDrawer {
        "opened"?: boolean;
        "title"?: string;
    }
    interface StockPrice {
    }
    interface IntrinsicElements {
        "my-side-drawer": MySideDrawer;
        "stock-price": StockPrice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-side-drawer": LocalJSX.MySideDrawer & JSXBase.HTMLAttributes<HTMLMySideDrawerElement>;
            "stock-price": LocalJSX.StockPrice & JSXBase.HTMLAttributes<HTMLStockPriceElement>;
        }
    }
}
