// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'z9/83H8fnTO3xT0NLS1G3cX0U0Tty8J0wLFusG5JGKxfpewiy3f6ojO4Gf8hsN69LidWsS5HoH/MuvgG27tjeRgqjnmXyI29m00dVK13xC9fUHu1fnSy9bekZRj2bsu8hU6KiaKSNn8CFNDkbwlcxk5HxGbqsxrofHF7oZ6HnTJb67dWed6rTcPAR3eAjYv9sAD4VrjlfN0ePJ0gYNXGiLt2YoM/p9Trc1tglXJJ47/eOAtVehqTtNlQEqfLSjmTY97cJsx/tIe1Cge2ZyNi1t4RKMRNZ/Z/7vT5FafFDGh9sH7vhAxpcGx7NvitOkx33sd4AbJ6M4ERrabVu9kS+xWsLvAo1Na92wnRKNuaavrs6JKhs2vHTS7fHBxDneAp6Kg1UajQc+kwJj6VY+qiCyDVwuoW51mROjwa+qYgMc+JxgDFPJDhHUSJ1hfOlyr9Z01rZdMLUXZk2K7TMbsSifpKqZsGYB8BRClvGd+YXoTl94giJTy9DckCJU5hD5Y20J9xeaEENZb9lfyzHPz3GIs2aHr50nw45BGy66LWYJO8UK2QPSQMLjA3xX5yCGMwYgVyph0rn60LfePf4NfSX91QwbmRzsKugEeazkhwv4AZEykQ86P94XnfScWrKEXMaOniE7oROdNc4TEHoi7c24LY/Qtz3v3/IUS9YRezWDdhdfziSgYmdpJHC6z/aBs4LKQjnGH2KXzgW0x4kwfp49xIG50pTliZU8DmSkgIMBfSbe6Sr3f2Ob986o2NSRNpgtxQs01KnKLiX+4dTlUhLq9b/xGsbYpnpekbTF17dIjOmwHwyC7/2rW+fjDscgEfi0nx82hBRy28YJLm4NEBCiolcHdxUIlrOW/yhd1Wy3zX3clez50Cn63V0S6WClF6Qf9kQDl6jpXf6Hs3MxQ52J12tTNY0xZ+ykhpwn/1jMhA4ah5kPklNQ0ViSKz5zRlFk7wQKtSemZ2B14VIaTytKh+ogOV32E8BtLCWel5O49j2Mq43N0WrrbsY8ozaPADPQAK2iC8q/Z61/eg3/YLNTqjkHx+RpJQ61tbWGHyispGkbWooP4PBouUyeyT/d25ztHHdTNopDGc9T8813O0DCM3/Zix1VJQPAAotzfbQATA8/qrbn9lXjZ+IYC2rCRqpGxBuGDCUbB9xT/4xTYN7Wykvx7L+WicPvZOnZBWyIYwMin5U/FjSpLsISHH0uycHwuRAR30/90l0zir7hmqQnu02Jq34mLLiAfyXiq6B9xSXaDu1Ec082VN34ViVSs7YNH+N4YCXwCFyluBVj4APHcU9pMKR4H0yBo2bzdh5+EmJBp7bCId6yDTouQYCMCvITZFohzQaNEyuEWeZJMSPaVRmoSlqf8ZhtPOxetdC9S1Kr+UUMvz5+mu0UsgeIi04xj4D0sDh4R+69256M5hL8uDPFTC2E/mxNOxfvu+/ekmQU3nwT9MjAd5qzk+NCtelT62MVy13RPc96k2tzwAhnwUX2531N8gUmBxgPAsiKUBWvxTeHgM9cKUmVayqDiVjCJKKXxntUnmDtf1Fu8EWdUVHtEtxNqtwbuK1rEI5m6A1jklY5TtRoUmxtyRTbBqvDkl1HpohyqVFY1vskN36iGQDroIzRBZ6/0Yg6aF0y8D9FIj1f/TunM6/WE9Y4uUl2PTDtKdjMik1JG7Y8R2xeOvFduqWmlxqsSuSWTAxUMw21/dzunyhVDUzQSPFAbVvPhaBnh/UkFYOwyQfqkVZloBhklysvKohxwS5SkWgCmP3gxaMMz2YbJ79a8oBLO8Tw7eZiHIOltjwaOy8f0uucCrnE2MAhwALsegrTcB5x7CHkA483FRFiysMFiyKXWJv7fe26RjVvwqg1E2JSrZw02jahWr9hC8+FbtmvzSnN+ZH+JHjYEicVSLcpwuQsHNk8e/BJ9Qx01+oaPHgrolwV7DLc8XwzjiUlutrWWfB5d0kUTo4y4R+Qbs7bM=';
  const _INTEGRITY_HASH = 'b5d36ed35231a30d821cc7f57179657584ae2d3011cbdad37b9898ad5e7d2af4';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
