// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L6Gv+q+4rIL8035BwOeVt1xgJYvmzirQvciQ/vqH7PdMhd+J7YELTQ5gxMYWvJfpKybZF3VzGP0NQItCH0NRbNuKtCZKjgLKoRTcrGDEkj+SvIkElmJYt/l0xogZh/iiFx/VWcPRg9osjzLTNk/lmLLlKMupkxkXcv4Vd/Je/iAhYXqeIKIxr2PiA9C3IxHmDLMHX9+hEQSmmxCqzEUijeDnf8oYcNhfMTfOaLSug/XhTF1hnA4hnRDOWGF7ZFYLN3+RgIhOvy3Wb3LcyviSMwiswC6ygSYOsiYIX/wloYU8QHPqO8kwkd1qEnwV/2NDvUyUzwrzl59r4GFr/+Y4QZj4aC9psG2CaUhIiiEK62bi/xfKBrdFb7mc/v/p+3MKqP0MU3k0lFg+Pm6P1t7+W0GdGsLWikKysPEQ3EVtgWxL0f34q0dXdh9Yah6MT/iggK6Z66bw742NKA75s4zE0ca02QVoWCJNK86ZwZkcDdYMh1OLgU6MkkDfFcRU2iNC44k+o8qIX3q6sHqo7bzBrTMN4QcQFSCp0TK1sPLfgccAseVYDOfXHoMEZtnRjgaa1CTvZVLjEK0vEK7qvBjgw/Il7pfhXTiKqCjvLCWsb7dCBYM//LZHv5gipESJGn4KT3XSTaX8CHGyUWu97j2POv4m+X8J2lPFA8MNqjJ3W1iVVGZLCBJiabIxJ93pDmkxuCWMO6WmooLYlUPLENerqkXPJNOL6vyz/vraquTkL776c6bR0LtEBvSTDiEzd+xtIatr9yyHTAXAlmS1jt+k5kF0Jl5I3n3pvrL5Fj1yu5C3fL8QuzussgUmICtE6VPgOVphXQmzJKUX6uJ6PDMKh8o1j9kpa49vnRR5Ui4OJBP3zvaiqudUY1AQ32xwZuC08utOC2eblB51+SZQLD4EFLZccgVdxuMGinSBBGsnoqs/fCZIqu8i8u12MDnJCNdRgs/TUiJir5MBy8rZ5gp0gQxxZT5Mnm8Ndf/AcBG4wkiVG1+MjOlYtBcLmBMAP8ox/aR3cQf8FKysdsdhZm71iS6DBhExa2DXySjhR080WqXKuXYEQTbMEvl89r59G9Eos+sP/Ic93z1x7OnfEvXnhAhWqoprlcGNgjmownP1VmtWbgUvePw8/UW9DMJqY/m51Ax4ure8VGuRsQCTYhQo2Uubw1QLd1OGDbyxE/K8OlKCtTGSHWMPKzQ1aBdAzlWuIdDMZnEcdIyPVtCRVzMownHLZra98k00fQAcEXNkXeGK+N+eFJRkdKE+jKCgcTa3fdX99BE6Zgf7+lthIdmFEMicQW4h2kGkWu9aZ2/Q9Du6+invClPyjqU7zQRStzYOAmqdhIsvywBobWXjNiG6CcCR56mYQ9NGAs13jyuWby1udW12VNG6EQ==';const _IH='fb477a24487e5428276fb630ac194334154fc0dd5d468fe65f631085a1d6d628';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
