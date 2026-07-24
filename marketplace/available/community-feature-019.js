// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQEMYQGDBPPIcjoSkWEhjGu8cvxRZ2X7IcALZRfLR5wgbwOy8GaxMYY8qVPb0ffaVY5I+5hR7rPWPPzjli1JFAZIAZ5si1jeMSieSmbyF3/GXYeUG4Z/DZ4VBaVFha3k5oHMCUuWapfy2qWh4DKy0YD/8yhU30LzOSb6Egxl8pAk6n7S1FwvLQlVfAehnUXpWDxbGZOJCYLMHHiBW1+S+Ltye68NHdDj1GjzihPlJoAVSMhR3+F0jx+z0WXWPsMieDxK0MC3Fp17xlIfA+AQcRWjuW26fSe8QrCPy1Z8GpuVmbQgaQG3ZH+B7g+mDmIFzhwg4i/c2zzv83curCJCbm+cILDpQiFvPyC1CclaIm1XoKjysChXcXCgdjZQrDH8asQK93ALYHZMLE60RvOBskUVYGQF4OvABLgV2RipuWmX8dsMeMeh+JCPs9aSqtcyvxL4mvtlEqPfeWjd9JmTdftmAl+uN++fRysnmSNyINZcQam8kE5VwGIuFI9G5N40qon5V5X4FhHuc8etg05YbMs7wemqwd7PV1W0MIhUU6xx9G9JrgC3EKmd678FGCyjVjqa1vmT8CO0udSZjEIra2XJtrrhywwxfyqmFC5SQow7xo2NV97ppnVgKaIvUjk6imd5+mtm0gBHH1zBrQe/ejMr/RwITRGYRrP/Mli9DY7+JUwrp0w06/5nJdg3h4Welo6IyFwl7WLK4Lp30v3BYOoqnTwCeu+9Rro4FEaC0Xcgl+';const _IH='9d4216c10dc31a51dde5161cf26636f6b691d12b7a96b3511dde0a7e6ce26b86';let _src;

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
