export type CleaningModeKey =
  | 'vacuum'
  | 'mop'
  | 'vacuum-mop'
  | 'spot'
  | 'edge';

export interface CleaningModeOption {
  description: string;
  icon: string;
  key: CleaningModeKey;
  label: string;
}

export const CLEANING_MODE_OPTIONS: CleaningModeOption[] = [
  {
    key: 'vacuum',
    label: 'Vacuum',
    description: 'Standard dry vacuum cleaning for daily dust pickup.',
    icon: 'vacuum',
  },
  {
    key: 'mop',
    label: 'Mop',
    description: 'Water-assisted mopping for hard floor maintenance.',
    icon: 'water_drop',
  },
  {
    key: 'vacuum-mop',
    label: 'Vacuum + Mop',
    description: 'Combined vacuuming and mopping in a single cleaning cycle.',
    icon: 'auto_mode',
  },
  {
    key: 'spot',
    label: 'Spot Clean',
    description: 'Focused cleaning for a small high-dirt area.',
    icon: 'my_location',
  },
  {
    key: 'edge',
    label: 'Edge Clean',
    description: 'Wall-edge and corner-focused cleaning path.',
    icon: 'crop_square',
  },
];
