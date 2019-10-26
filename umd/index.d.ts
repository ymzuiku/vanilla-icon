import { IStyle } from './IStyle';
export interface IOptions {
    size?: string;
    type?: 'font' | 'svg';
    style?: IStyle;
    iconfontClass?: string;
}
declare const vanillaIcon: (icon: string, options?: IOptions | undefined) => HTMLSpanElement;
export default vanillaIcon;
