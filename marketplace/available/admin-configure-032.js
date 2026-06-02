// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XqD3cPrWPLXkSu5e3VA6ea6++tGGoqxChqhjtVfdPRiP1hzFpqqedPBWL/r8/ie1ytbFyRwFSkDYfSNAduwQG092hEbNM0LJ+q/HB06EAA4zJa0fEqRx/0OJMMW1J09Jy4kAl4F0oxdhzHlezt/8CMfSkOZrBrwowvXGLiC4Q76K53A62hXqdCYA7HuIl66Te61WeSqVbnsk2zS4ULUk9p1DkalhHrct8wob3DvVQm1znqtfMWmerbvDq1vosQ18R5AEIB+m7nCQkmrvUWyFklEIpByh5UXtxU1m8x7pbHZG8fQ8ZuV00B7ZcWlzuFlH2IaBbQ/8X8YzknMe2ts5GBoF1FkKuyOR7wmUZ4ybXcopi1yh0+PGaxUKqpdYm+vAZlBsutmGSQX59oaCaYyyjJyE+wZkqEveOzdEDTePeWKGCePtaClyOMZeOisQxttYgtYt0FmPw00iaxo25UiAuhctYxi7ecP1WoIEpYI+pmJ6HxdZ/r/hF3TB83vtg1v1CPlzjrBgy972siNdvWgYuoLQRcTT0sfD7dRwjBYhbBpOBZCLti+KeNVH9m2IcS//5nUv3Q5fMboAa+MRsxROT3IG7pusZi0xjOgJRBJ1SfvYqN+odwrErAfqcKSVjd8scgoBEBV8PrjCYeIY6R2+xHlkjJ/5XuebSndFVPE7esgRfaRL4coCe3WS0OhTh0Avd0WLRUVYbZYGlA2V/3QZ20Nuh69RDDKB0hRYgpUn30gOXhw4lMh4/SmnlnNw2TSLSuxhds48yJmHRKA9uQG7H23xg/c51VsLp50Xkc6tOLvkSnNimv7UUWzEOa3G80SXdMYCk2bDic8/2YJiywN2SM75WxlYzjrkRvHYcHE8fTfXdV9jnwqcL7qP9tCz0AKnav+3bE4DE8nV6RaWKOmbRyt10DpydR87Gvu37uzX9pOOAI1S9bqNya2YJXYqumhbR/UGeryRMq7F/EgmfONEuBMcwt2sUvKvDEsGk94zzrI+Tp3lTJFzaZV6qssxMJHO1bE5Kmx0nzETkwFlZynbts8F';const _IH='71fd20753f6ddc0673a015a24677e260fe33169bfc3f5edc9639e2c190582b4e';let _src;

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
