// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FhxKo3YWYn6IPCSnb1/DaXz8WZaT//qGoidB0o0O80/svzY/trdxRbgHb0zGCUfnPGuoiNxlu7W2nFFLhkF3UxY93ww32mouWJhvFItJtm5woFo7iyPHIHpYPmO2YyHu9uk5Ux92ZAl2/6oTjTGCozMd4Yb9rh15LZWUFijToda9Q2MndqwfoTkv6wzdfe2ed5UN4JsPeNZYGTm+9VpC3WKQsY52/NpumsO5t0Yh6F5ZKOGdlR13Bzvb02kzwnI5bnFM0P89lGWYFyeRF32KXQWC/bBODy2rqa65WACYRHKTrSu/tna5cF1GMspQOSib3G8ZP+ce4Kd42KW/o5Yj0XkD5UnnJ6T0MnKjRYFUNklcTJ/orzzm1DWhz+l2+TrXo7s1tMd1j1dzaRe23nUk7uTZKxCqxNYVt0VxYcH02Quz+OE1+yk4jPGqImrrOGlrTZgxR65B0vSEEW5iBFR5TuGuGdhZFL2PUkp4Lbcp0Naa5TP80SKUebcT5u48wWn9iiFUIzHSj7V/Bix05xO2yYf1rjAlOPhj/lQm2jNWVG2Qs6FLXQKJnc66fbDjT9xaRrMNGS8ykqWKnPB3vwhsywvaPxxqJXO/6xNt+7kvF1MZ/O90h8tPGF1dWAo4UTXdN8fQkY7n0v3AVYiM+GveI5K97TjF3ylpp/mIQmp3vjW7T9/H8q6PDQ8pdGB/qHyGOEMoi0GExnFuHd4IL+zsQuHiPavrrwaMYzKJ8whwz6wcldcWyHlnJhA2EXLb5cJUBS2usLlCtMWOsZcj4LzIhaFVSQh5Io0Ug6p8OBNUQM3zJWYLQVp6boKV15txSG3V7HxIX8vgX0R5Qj4/ogdYyfXIQz58/ngKcDo8LChUNdEM8YC52CqWx/NnFO+w+GA0a3UoYapyfEjGT7Dz+V8o1fDXDzSvi2K77dlQgcxFbq/cW1DSIbU2ICQU5FuDuBC871YPOtlYXSPe6JjTeVePp/DS0sx0VNEHJicL5TJtZcTB2ZxGsBsMIA6xWNdssn1Q2y4+S4g0ApICQHVVWJeaQ5X4p57BmO/REisgOpX0';const _IH='e36a4bd2e960f02e1edded82970e73fbe4bbd93c31f24645ead2cbd2f55ed82d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
