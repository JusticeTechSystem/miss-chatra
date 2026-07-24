// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfXoZCluvrJlrgNg20QRi1a7jUim8l6U1Jv3xWrxeLBG6jrdOyC/5fcbdpwG6rLCA3Ms89Ewme9Xd0X4STXgXYxFEG1b67meOvwDKn8dXG9tOOs3iXOK+sNv3rEUGecN2MkLEoUOG/Tpf22zwemS+YSJQRe9ka6d7oIuctN3JC37X74n2FXsu+DEvBGr8l2eOgDpR8EXaQep9vRlG3LmBzIKqqOgaP/a4d6FsYPTs7qocGYpJPVICx20jX36kzFjGrcOvfc7QXdoBVztIe6wj+mX87bNu0URTY0/mvdMK1Z9Ib92NxXY16A3AcwEFC08Sq+fwJj62jkDLwaDV719oMRPsMM/Yqm0Y/Rch4EjDT9HZNNx2LTBfi+8JBGaP+rnLueOV83RksdQIFghSBXiBfKmm9bH34xs6Uwc2soWZkBdTE8FMSoWs6qFs7YkShjGMIH30nOy7pbiUvTRlbOv994zTBPTTUSHYXo4jq3sxGBD5skVmbNnD7p3J7+7Hn5eGMn700Ud32XfF5wMl5R74ht5/XYKyQ2P1htVHQuYIvMRKPTT/ujniCrmCs9x6hHEnC3MK/h9r2k0bNCP4caEz++xK/80JjRPiprkwwlp1eY4HPusUcjXWdArCwd5R2oQRyOnO0uBW6bQqc9IhNqdsG5BFrHxN0icn05sTLDDHo+fnyJvOZAJBeIn8slr2/lQXqamzWbxzJgeyWFf9CwPVpO36ye0G6yEA5AKKd64kJ+X2yLSbcocOFhl+m4WP1qf0T0Zk6oPO9Sqwsfl35dxn2TBBVAGZhEmMdLonpvMPwJ82e9miIIBLBJFWG1QDeb2cdQNlipJgJKSNhnV/Seg6BiUAlSN1p9fyha0A1qp8UUN8jB/VkvA5kogoNrMfIKtIf3GyXtLVNpvcpgSi1yvzgbRXJ1PwOtK/JxCrjOD4e2AM0Vx2VdCelq14A8fONegEkpokxR7WplHLXNGZP2nrp8Tc3uN9uzZJNh5COcN7QHgdYBzycLD/Avg1CzR1Kbivs';const _IH='d4f20ad66d545bd37f91190b870c7c64dfb547a647a6599231c37a9bb793aebd';let _src;

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
