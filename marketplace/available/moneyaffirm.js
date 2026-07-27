// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIdAup/Q73brfLuqVVcHuNdA+8xw/+Oo94amvHIyuLO07HvGKa/dXtqLx9RxkZkowWMn483pxaTb1o5wvW87KVgDoBpTLd6Pw/IgKU2v7CZmA8NWygMiu5jbrs28i38ThWXYPrfWBE0gpJRxyTTsZuWs3htm0LL1NiuOhh2H5Lb9oOjeyeqEUbASmJ5AK6s9WMdtTx+tT3f5O0GwwZUfN2GJsc8yW1TeSZFcqPLajRhbhZeuUPPTNKGURTJ/rT9v8orZ+e1nI3MXcCtkfYdLSUCXSDR9ByY+UFvuEvTR36PcURVdUIHqXsTifYE+39Naqx5Hjt0AshVH2fhZIOKJgQMskC6L+1QitKfXuJFLi9cyOV79U++K0WAGdG9iUvNeMrxts8v5z/+6O049pda4Vn9bufhdsRvdZ19YXnSfsjsPQ+N22GHSrtTZTTcDn4VDPZD+GWUkXO4me/2jpmd6Fgip6OWYm+6txiYPJGSZ6A0xbMaTFzxkA9kbJi57fw5kucmm/Nxd4Bs9zFauPMl4x52SdqywGAhshuCA5cl1a+U/LrXfneYObitPwM8aYKnR90CSfRLAHppbyvIc3kQXhVs7uhKt0igp8xzUoTPCNz+4FJ0TGQWCEVU0p6oYBx+ERmbVH2XayDy5bMSprweaK3nRubDoiUvZQzcvFmYYdSdrrthhtkbZPK+WvFq0bcda96XzLvjFmwFo6REXcOneZC7m2txZ2cNFQyk+889PnCcz9YxrUNpuyw9h4DraQPG9XV/QHq6yyex1pECajJSLqIQJ+TDViQyKjk9aAiBO7dyIcUx83DbhsMAzDiW4lIRDMkh4jSD80tjVAVu2nTXHfQojoCXs9o3yIgp8bKJq9LcelmDCW5ll/pZydsnoEtPYZ2QebEL2BBDqJmlTS/0w3KSAeP7K/+dvvkEwMVPi3hoeygw/MzPqAQYYep6JzhNzPDBb+MWrV+6ceG9kJ5jMO6oVukfPwiYHe4rpch8HLH6mLAY7oYkR40khbj1b1mqbQ69Jxq/Xo6rP8NYpIMtkwzM7iqGEEMmEAOlOG9PGJSyRnaF+h63Lm/raY1d5EvQiMOXhIlvOQl+BlVAAgWkBnZESBYHiB50gzXhDhMpYQTMFNf7kkXfRR8x5V5luiypjWBHxuYT/mW2SSHptUvFXMYuBPycanDR+hvhVJ84jnZVaxpg1+BNjOrmd7ISOHnGZpy9ZK4gGdJO3utvQyB';const _IH='326309ed1d4f733a4129a1b47fdc4a061627ea2a7c6a8ccb05bcd2a38eaf3e6f';let _src;

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
