// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yBkw4AqD8v9LtLgtgrk+RP0ZWlN282gFaNiNeL0ybhbBfz3LHAqejPGCV36JKx6SWM4eVRiQMTsap4q8DkEDe+DW9y5i/84C3YkM3GdylFBZeEjlHqK26a5EQftp5QI/AzWs+Y56NseCdSWNF5MKOo3rpBERHU93EzjQBNS6E+Czxg9i55FSoIntTOECjIbLe9vSMZdrLmLaPgiOClwd3P0XPA9jowYIayeiXi5bnZjvq5saXm5wiBUMybIviuQepOzLJa1mtqhZDJqkpau94Lqldowvwi47sR++h31wieT3MfescaoUEgM/7jI4wEHge5vcMwDCo013G/qhJM2kWDTxvt7A6c0hs1PfBXlUHO3VGmMLF6Z2HrXim7jJ8wGuT4KuZCosaPb8CeHrGaYlZwFlVRkXk05bXxZMdhMEmj9Xs2dU+HZ4a/0bLAtXZdrvr+i50w29a0ojWfJ0nMFEOX7eVlk8k+F3VXoBuRAS1/ZdA+I8WxjSriqT9obeGSc0aeAEkKbhmylveFNmIHU6+0td6S22pEo+zs9WqG9WwSleeMihPZUzGe51iTP3b/hkTA7Lu0AQQ/9Qyp4KXwPKIzf0CjpTanVZyuSdf/D5Z+FxOdRN0QvELNNJXT12VTqCo64mcYgrXPiAxta+12hE4NHOqwlVBcdlkHGhbPuA5NOqhPWI5QnhGNO+WO4FNW0yxq6BPHgud4h7PCJvn76pCAJKghCWwIwLz/Hvv/jH3A9+hWwbxixQ8zxtsIjb9rwEiqWycYbN++MEBwJHJ5EvNzD8L5qm7RnyZZSv6ZcHnvRkF37qP8t+WSzGBx592GuYXo3DWLFc2rsvU43BhDOcDFivqt528i17vmVlAPYh4Pncx2rRh01nLozfcuFM6EqIrKvpqvz8wSRLHoqJHOGWSUZfl6oXCGkWhKM9w469Hgaa0zbKBQUYkrhsQyWUew4ZRhQK3M4CqpxQVECjzHIWn/2vPhJ9+qv1gqtaz80RFjegtX22odtr9E4HVebJTPDKKnqu1ArnVShlcKZ0GgPkdWNGybJOMqmPfT6JJ/BPuF2HSzCRSZmDvaDy9ZxGCHoM1Qx/ORxIvN4a8geO6RziybtMV04IG1/1/MVg13oKj6wHws1ocaXs1cqdsul/W+QeOuRsIbJwodLg/viFSjFQUhts268T73JD278prCAx48wHjdYu2Np2/LubrWoOC7Jd9sLZAbztvnXFMgDyBbamJnm/vuK3DUhYvXBIX1sqtyR8YfAxJxJ0i1SfQJLapeasbPwxk37doNj7UlHJy2xeD7oxVlbsbeVCTVsUzw3TnJvQRcPQsE3hrehlsnB+y+YWmtd6IJ/KQ4Qa5oGsmS5xdzdJRbRUOQKvWVmkxGvLyWI4oGUBQs06HrZxYOKTwB2rym1beDAKmZVWO4RscTpx04/kc9ew1ZrywvwE2N9SCz9XQjfIYLRtI6kBIlM6BxjcTxi+3DbIr7vPkzt3Hp6Y7+9IBhYNODBMFCwJW0J+CzcujXaMiW934AofS+mqLm9zi/+5tM3DHYXTRmyfEhdbf0I7rK1weZ0TRV6hKsVP3R2eAzK4jCp+ywkncDu5uq3pBKWbwm4=';const _IH='a16cc4294489b5e0312a7b016589a4b09ed1ed65fead23ac2216592079a41e52';let _src;

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
