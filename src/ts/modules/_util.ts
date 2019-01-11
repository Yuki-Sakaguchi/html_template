/**
 * Util関数
 */
export default {
    /**
     * ゼロ詰め
     * @param {number|string} target 対象
     * @param {number} digit ゼロ詰めする桁数
     * @param {string} strZero 埋める文字、デフォルトは'0（半角数字のゼロ）'
     * @return {string} ゼロ詰めした文字列
     */
    zeroPadding: (target: number|string, digit: number, strZero: string = '0'): string => {
        const zero: string = (() => {
            let tmp: string = '';
            for (let i = 0; i < digit; i++) {
                tmp += strZero;
            }
            return tmp;
        })();
        return (zero + target.toString()).slice(-digit);
    },

    /**
     * ランダムの値を生成
     * @param {number} min 最小値
     * @param {number} max 最大値
     * @return {number} 最小値から最大値まで間のランダムの数値
     */
    createRandom: (min: number, max: number): number => {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
}