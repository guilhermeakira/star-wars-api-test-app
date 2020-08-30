import * as Luke from './static/luke-skywalker.png';
import * as Vader from './static/darth-vader.png';

interface StringMap { [key: string]: string; }
type paletteColor = 'primary' | 'secondary' | undefined;
interface PaletteColorMap { [key: string]: paletteColor; }

export const MASTERS: StringMap = {
  LUKE: 'Luke Skywalker',
  VADER: 'Darth Vader',
};

export const mapMasterToPalette: PaletteColorMap = {
  [MASTERS.LUKE]: 'primary',
  [MASTERS.VADER]: 'secondary',
}

export const mapMasterToIcon = {
  [MASTERS.LUKE]: Luke,
  [MASTERS.VADER]: Vader,
}

export enum FETCH_STATUS {
  FETCHING,
  FETCHED,
  IDLE,
}