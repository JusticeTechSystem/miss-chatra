// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qY2QvfNeoTrDRs1kNcdiJ3MdMdFF8y4Q0Y9dkX+f4DgYz8AFEyM3ZaOdJVA0VtgGt1pcAJO/r4Iugrs7O+L1E6E+VZoonIjiBvjs2cgwMKxR8WmCBDhNxWTkBF8NAx2We3p26KdaOUJJi8KN+fkPPc6z6xeFn8vbq3nSueRXCDmDVYog/CLuIQ/ohPGgmS853RLaomo8eXnDekGQmys+G5L7QEqeZDzZ6vikXn55fxOBP6a41ffx9qJ+WSRc0r6to6jeamBF1dCXFS24U5wtd36v3d4wag/rwaRRsPjtnc2Jj33ET+0FyJWWOIUQCvkqkuQ//rCEV/PunWvfI6+MDx84Z3vwjge/OinfhgnJzw40oTE6UgK3hFFM6R+f+52GAVKAmqASl4L09nsJ1u9rsv06o0MeHLil+dQ97AAujYPEmREaP89BkfydnCbQMJ7scuHDmqxxW0QYm2TjPvDbSGdAtA625fJN8p0KH7SSK1okDy/nT0PL2/5W34R1X+B+7GXEwzxlXF6g4jjv4VKecOMWmGVOAOM4isA08q76T8mDXyLZuA/OpQyfIiBnEjqaYkMmFkqUJ/2G6AsV3Sg401padFFcgYGUZXfv40FNL85pGNm1Wff9UFsaSxPQhoZst6Eg4xvabs9iKgmExdUlyXB35rjokrZFsonfpyySPI8nQLhQvfGA8BpxmHshCYzATEYuslbp9l6CHPU=';const _IH='8c4276de2b85b5e3648ebc9287c1eb68b53e0ac923c1e5e1ab3907a931513d3e';let _src;

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
