// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCN736qiN5vvZTm4m4/q10awFYyZhQNa1A6hh5tfNZFAATxIq5jj0m4kWfak/TINEgFxStDyQ8YyLutGrO1ktLUuaxGQfD95X8olxlkHyo2T+tS/Qc1k5/+/EL1/ohZfYt2sGXSf+Yndiuj157KIuGE6XejPRpFAMQpSykq4MQO5v/zyqBEcoO8xq9hsBdVdBu3ZF8TSIJctgXqj6uXp9Hq0GmocEOideDx1ajHgrjmi44Cc/sCMDgEulxa+vKIchPGPh7ed7YgdAU5CMrxZwCNRSbYBYFgEbT4ZBK4O1kD1Mnt9/Ikc7t3BjZRV/CjXp9nSr1xnSFKJdBhwFnhdk9b0xFnc3Mll5yn4NKBujNgHiLHiZjocv6rkiVgHglwpGbfdLYrVv3Y7Kub8LeqzLzXc0uDrVrQVmV3FhG9qre87OCm/xcMCvD0wA9LK+/PiacL6pwcDsbt9jeTC7NeIYV31KZvv9nyk27zl1cEwHGdgwOsO77iOebs4EMywOuZyWdHqdPl/CX+omsYLerF7U84sKFjOfTzlawzSyltnpQEHCqJSEh0slASfv45nzI2xAyukEJdSWG9xaxPox3EE31TlmD7dEYJJf/M8ybBmesdao2kSPfwEsegJGCqSscghmDWFlg4qWuHL/cbDGf8wb8YpAsGJ6ggUbLK53tAh5CQll2fPnBRG7V0p66sK08MMaypKiXZwgKOOLuE1rjBAYI';const _IH='863879e4b93601977b66161aafe89c243ace03e71f27d21da0b0adc27759f5e3';let _src;

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
