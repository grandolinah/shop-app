import { COLORS } from '../config/colors';

export const cardShadow = {
  // IOS only
  shadowColor: COLORS.black,
  shadowOpacity: 0.26,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 8,
  // Android only
  elevation: 5,
  // Both
  borderRadius: 10,
  backgroundColor: COLORS.white,
};
