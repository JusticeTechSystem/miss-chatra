// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4UmPrdO1MgHaIq0+XUqz9spsWOPV8ZHjRqfEAQ2vNY5UF/dnUbbwsPYCvqxBxOEKB8dzDhrEObgZI6mnrK7rtQzwl3rfBaam2ygTjWFg8s2NHrOQSaJEkExpzKRpQ/yWRvaz37Q91FXtaf+0MIhVGXS1HqskD44WC3mPrHYM09DzhvryfDU657IClJac1isxxEbYOpzNUnfJ4ISK0tIeY3Rb5KRypeunkmttjMokexuitqtXbAXPZ4mtSaHcOHZokxPRxCUNji8cJxPOvRBb1Z4zSOKPa+sPfHnvx2CKC+KfSRDWvF2Cz+EHa82zSStifTayFSb5SaBP3lX154CVrRERexRFfQ/EOcpfCdzZi9McC73/m2TEGR+swJ4ZmbLQbghb3Ci+4qL9TpyL8ztAthTcmnvsr/JXPWwTOC55UD/7gwnuf6+HkE0E/zBXdD1E8zKfAMiLi7Z96j87LkzdX/zG5zVVO+oOehcBmZGdDEUQwH/Cxsh2KDh05j/SR9gqk67ApYZ1i4oXNWIOSeZjbl0kw9aokC4KeozepIA0RhDL7U3LEaVwAkBinmQ19A5PPwN3nTn3gaIr0bk44qGiLLRJZbkjWuFf91GieNGZb3BvMjIYjrnvmi56XQzjqouc6VSQC06FnF9FRq1GRUCHwwizEJUYHBFGohQjtANRXC9FgEPaI2/S0nKW8Le9DPReL6AFmTUagNgUHY73UWx4tBlDPOXtYjiHPD0SF4Ugoiz+aou1pV3OvujSIoXz9UyApmWSfeJnIsfk86ZNc/4hSfkfkDBfcqNBImN4oX7UiuYMdBPKm9GO2k9wYFtGTM5YudSgijAzx69m7PhAh5wmU5UgD+4x/inO0rD7I8j9jal/7hc9SeqFJ/dMM4FFbkRtQenaatp2ZMfc0tCJDh3hE6cqcGRjQUvhEQvMYMRnz1DYVVR935lmXP1YJDGCFjyqVcsj/PLVbR1VBmvk1r/rllo9sj11SMZZCTyJoZO3TR5vN2MwB34OF7IALOYEaZACCm6kkdokKCK+ECb7EDXKtU0WLDciwi75BPsXvcPDbrJ5VmHrhdE76VgItTBCz+YRjlJV31ff6zMAtSRxvrddsKSri3XaweYyRVdD5geIYnWab/7rSzN8cbf2ibyGI4R7XPQz31ulii92O62bLSAsxO6l3uQsMXIx2sotFJTtIaEfa9i8olxQWwHp1O20AzuObCSSU4D3';
  const _INTEGRITY_HASH = '624a508f45116206cb2435035b506426b34038a783861dd2b5163f07bf0864e0';
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
