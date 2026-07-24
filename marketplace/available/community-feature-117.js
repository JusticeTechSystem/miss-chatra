// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHLlAyuYwSeiuN0wFTNbvdHlipmcnM8Q+gt450KhO0XcSOu3o2mrMsLKe0DgeADFUkVTVtQb/lzkdyScD+prrEPwy4WXaDHLhek/S7MynmQheI+rnrYrn84zLSKtV0mcAzLL1t/ndqJh89QEto+/H/wc4q7A/lQhwdel92kqgm+LMcoVWE5Nt6jSLE9GD3ivp8Ry+j9Q4UtHd4ivFTkp/GC+v5AjiW0nyKH91mb+AeLUKlg2jkOXr271umcFQnahpDIVWB4XrhKxn+XlsUJbrO/2cB4DLwG7VC17totJJLsct1VlKtZGycr8lf3AATVQq4A+oByxEqjF+oyxGMQEzPdV84imegMHDXZ03ti7Kx+skLQQN3XJRzSh7OcJHlzcG8Sq4df3JT6wzDJXKE4tHapR3XLj0ZCXw7qMBLSBCugbIcp5Uwrm7Y7XUsd4KmzIx9lqSxCsNArAB2J5DAeG2DEkc+Zyy/NS2odGhrAiyxLSt+oKoKPNsyM97Mn7sOiklIOnGBBTKyUD1EfovwcwKTiJ6Qv2Cou7dcOGetT2qDg/pgfHrzlAv46Ql/sdfWdz9yLB+B/8EXXwUq/SmK5GBbCxRxusV4HtEASFyeEykr2qlE4m9uzuA7ZTbnk2RA+5icJ72YOnw0yi8xpqD7lrWuurvptrEcCj+Wlzj4/xQ8X+SiNoztIXrpiVlxr/jwSB/xViNA4lKKF+o//FVYh5FH4T2hz5nRGK4LIpa91Ay2/i3r3A==';const _IH='cbf9adec1b73cd2254936824d628e74747792438f8b8dcfd436988646e3120d1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
