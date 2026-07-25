// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzCE+MSFeMY5b/1mj7TWpZea48P+lbJoQUELeP3oNGXCyILdAtCKYRDXWf9UQupsi88Lgk0XzRJH0mvdaseKqto2Ty4856oEuTsO2Esf0P8vBpwQYQ6dCdXZN6Z+uKtFDqKRKA5LNdOacORoURaeYcGSTok8UAiw4O+RNhfOQBITNnrnxerOg2SWk3EbU8nqa6Y3niRkkg00zDJRhsISPkdxLl+T4SttvTPxWIneD2wqFjPtZTfEeeLqwc9sXfoLHDyFfoj+6AHUuypDCLZy3F5yRAtoN23q/BgovSzVPqqzspYvWAEWuq7Ftp6wgSCjX5c1fshl5ra3GsstxHUNtHMNfSgQAYTPKG1OcHh1kqSQdqbKcspku4xFpCz24/y070jOxffSgUUb4s2gDTb0RLLZoTTU6KjxceNI9nAl7rgwA4FdY9G88uqBbU0Vt/Sj0VbFXwL9X2FWqktk8M4bEMdSkFNyMiQaDJjnT6FYDrmnUDa8tf8ifN9M1Ky9P5YJgi6NO/jprGgI3qc7dcraViG+T81/cbA9ByQiNH2vvBd/TeUeaetCrbZVyConYPHdvS0qiDuaS5VrOAmP2O6gzjF4QTxtRsiJ/9PB9Jd+q0fdlhp335RgFTDDfavxLWLLX/4DwZgtkOsUHg9myKwP+ps9UBcWvNtx1q5dUX+x5J8j7SoZSHIk2nuxFxm7WVXkwGTEQI9Kcjxy31qY8WgrId4Mk2xA==';const _IH='962ab28c179f3cbb89c8a3288ddccdd65f2b69d009dc6c2a174ee4042e140932';let _src;

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
