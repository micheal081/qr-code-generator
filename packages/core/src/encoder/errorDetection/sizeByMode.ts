import { Level, levels } from '../../level'
import Mode, { ModeValue } from '../mode'

// prettier-ignore
export const sizeByMode = {
  [Mode.NUMERIC]: [
    41, 34, 27, 17, 77, 63, 48, 34, 127, 101, 77, 58, 187, 149, 111, 82, 255, 202, 144, 106, 322,
    255, 178, 139, 370, 293, 207, 154, 461, 365, 259, 202, 552, 432, 312, 235, 652, 513, 364, 288,
    772, 604, 427, 331, 883, 691, 489, 374, 1022, 796, 580, 427, 1101, 871, 621, 468, 1250, 991,
    703, 530, 1408, 1082, 775, 602, 1548, 1212, 876, 674, 1725, 1346, 948, 746, 1903, 1500, 1063,
    813, 2061, 1600, 1159, 919, 2232, 1708, 1224, 969, 2409, 1872, 1358, 1056, 2620, 2059, 1468,
    1108, 2812, 2188, 1588, 1228, 3057, 2395, 1718, 1286, 3283, 2544, 1804, 1425, 3517, 2701, 1933,
    1501, 3669, 2857, 2085, 1581, 3909, 3035, 2181, 1677, 4158, 3289, 2358, 1782, 4417, 3486, 2473,
    1897, 4686, 3693, 2670, 2022, 4965, 3909, 2805, 2157, 5253, 4134, 2949, 2301, 5529, 4343, 3081,
    2361, 5836, 4588, 3244, 2524, 6153, 4775, 3417, 2625, 6479, 5039, 3599, 2735, 6743, 5313, 3791,
    2927, 7089, 5596, 3993, 3057
  ],
  [Mode.ALPHANUMERIC]: [
    25, 20, 16, 10, 47, 38, 29, 20, 77, 61, 47, 35, 114, 90, 67, 50, 154, 122, 87, 64, 195, 154,
    108, 84, 224, 178, 125, 93, 279, 221, 157, 122, 335, 262, 189, 143, 395, 311, 221, 174, 468,
    366, 259, 200, 535, 419, 296, 227, 619, 483, 352, 259, 667, 528, 376, 283, 758, 600, 426, 321,
    854, 656, 470, 365, 938, 734, 531, 408, 1046, 816, 574, 452, 1153, 909, 644, 493, 1249, 970,
    702, 557, 1352, 1035, 742, 587, 1460, 1134, 823, 640, 1588, 1248, 890, 672, 1704, 1326, 963,
    744, 1853, 1451, 1041, 779, 1990, 1542, 1094, 864, 2132, 1637, 1172, 910, 2223, 1732, 1263,
    958, 2369, 1839, 1322, 1016, 2520, 1994, 1429, 1080, 2677, 2113, 1499, 1150, 2840, 2238, 1618,
    1226, 3009, 2369, 1700, 1307, 3183, 2506, 1787, 1394, 3351, 2632, 1867, 1431, 3537, 2780, 1966,
    1530, 3729, 2894, 2071, 1591, 3927, 3054, 2181, 1658, 4087, 3220, 2298, 1774, 4296, 3391, 2420,
    1852
  ],
  [Mode.BYTE]: [
    17, 14, 11, 7, 32, 26, 20, 14, 53, 42, 32, 24, 78, 62, 46, 34, 106, 84, 60, 44, 134, 106, 74,
    58, 154, 122, 86, 64, 192, 152, 108, 84, 230, 180, 130, 98, 271, 213, 151, 119, 321, 251, 177,
    137, 367, 287, 203, 155, 425, 331, 241, 177, 458, 362, 258, 194, 520, 412, 292, 220, 586, 450,
    322, 250, 644, 504, 364, 280, 718, 560, 394, 310, 792, 624, 442, 338, 858, 666, 482, 382, 929,
    711, 509, 403, 1003, 779, 565, 439, 1091, 857, 611, 461, 1171, 911, 661, 511, 1273, 997, 715,
    535, 1367, 1059, 751, 593, 1465, 1125, 805, 625, 1528, 1190, 868, 658, 1628, 1264, 908, 698,
    1732, 1370, 982, 742, 1840, 1452, 1030, 790, 1952, 1538, 1112, 842, 2068, 1628, 1168, 898,
    2188, 1722, 1228, 958, 2303, 1809, 1283, 983, 2431, 1911, 1351, 1051, 2563, 1989, 1423, 1093,
    2699, 2099, 1499, 1139, 2809, 2213, 1579, 1219, 2953, 2331, 1663, 1273
  ],
  [Mode.KANJI]: []
} as Record<ModeValue, number[]>

export const getVersionSizes = (mode: ModeValue, version: number) => {
  const index = (version - 1) * 4
  return sizeByMode[mode].slice(index, index + 4)
}

export const getSize = (mode: ModeValue, version: number, level: Level) => {
  return getVersionSizes(mode, version)[levels.indexOf(level)]
}