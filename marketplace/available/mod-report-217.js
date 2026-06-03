// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DXp+PLv9m5SFhtpQqMVZA7DZnNqw+QYNQZLFGnq3qyayGJXWJKrDmatX+j00YFwVXzq0PkXZtxw2BToF5CxACqcRUfWonwlRUpVGQmzNbmb4pg99wBB2FUIS9DjXSD3GGLrNxTME64Egdyjrm8WpTVm8FlMzl6pP8/kzI5O/t1chCQMHLJYwFDu+JmATYnySl84NeyiwAUMsTp6XMFnM0/4PAdm2eiWLmt+09I76aDT0sk+ZqN9MUJ6FNpURue5wXOFu+/DFnzkyPBIHoiv1YAqJZH5KJCZTnGDiuqCZM/91MSEndEpdJx5RlqLWYnaEcmWNijOSTfnG0dUUjCvdE4BdCXaz4D8XJj2i4DYTPiWxqsUN4LsQZmiZ90bJ61LpcrBxQcmdLek7w4Ts0/uGlOtOFwb+kHq4A9Ys4Lqdvn5vlEq8wAwu5LJtyszcA+B6d2QrKVLHI4RuqldZLyMRiba5QkczlDKBTlWCEi869NZMPt3lC8/xqd3/2cQua/kQ7ht17+NCsrVxGcK+sHAWQhZN/y40BbvJN6iUiQ2SJ/zBv5jC5Sxu5o1EQB2CCXjOa0yO+KcuOO37Drgi+hWaWz4wXZ4O5ejvHgcud83HHgm/99MMpUfXLT2ZH6wrNIURab3ZMQpztTPNJKpIrqXX9Pk8/yk1z8+mzX0RVqEaeg3pnX83sZbuIBz8uTHw97K45dAkZFfO/0UyTzi6hJ8JpBFmJr154+miRv+Uvy2lwXAOZIv1CrrvQXSXTZbxxITShQ2RhyI3sCvq8z4jHgDG3WUGkaoJPIMwTEX2SNuBnShmyv78mukigaiWMHTBG6wPfmKrcZqr4rurxiEEerN4AY+0qEkZFzfoh8ghAAz1Bptsr6TC9+reF/sGnTtQnO6ohNtEa2UsOZIccKV/gi9ai3Apy7Bmc8mZFhsjE0Blx/KX1OrgFej1ULzhFqDo8K5yTuKTKqe4IOmJ3rJsA55mEdDvFYxO1JaVTRTo3XdDQnFIapChdfj/vcJGp3q32OtMzuT6mBvlS8eSnKDZi9ZBcRM5PWiZzXv5lBDGCASzFaEvjfESm/WhQjHxwCpXsbgYHmUsnTrJdP0BHaVo/R75ODANwZnp7MTvRcastagWQXqH27bRMhspIKYQ5vQ2A+/rTECKFtNc6uO28AJ4cHkCS5d16KHBlwkTD3VR9CUEvz14hprsOhBuNxOXRNVveXBU7WV1KU6YdIAOOxtRuRwigBMuc6w6X6PeghLQ3F/fKjGk5GwcPUN9Q0KjneCtJNn2uWAELI39j1Z4/qsvEgxyh72pjnz4qI2NfRKXVGi0AjV7JYA5aJdFtlqyXhdA3CytTiIGfE5UTt10+Y8WMatWDQhVB/9fNoP7HOlwwzYZI92OyVdoopQgrw==';const _IH='19b791cb7fafc50fc98f4e9c0aa58cde2717e52a349adbb0db2c6a1b97369ced';let _src;

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
