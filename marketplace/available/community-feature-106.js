// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmpvmBLTGPCoj92HqsqrsSlhrTIQ4BA9soHAc4sFkAIvqSOd6S+jC1Ia79TL+XjIVsXiRT7NF1N+FzPEMTtKUSbsMX0Wtjemu1bddD0SH5lmRmhEvxzJfA6DBabVQjI2A7C80RA+7lT78UZsIGNbGCl2mtcefIceWwEo90qsvGaG/E6QHc72bqjoniySO5UIdyk7mM+BDR+cqtG3JNAqK5jb3yludSfNV0/jlaKn8o20kHcDRDOSwxzesAB2iFOJqG/PDtzgO6o1WQtBS3ECYNqpv90Ol+ppnlcuhY2QDClE2mwxOtYDqdRziWamBZFWvL00/7cqedlTRtQNn0v6JyyBjs/oUvugo+8jsNL+c0p/AcDnWn4bxnDk0CeNNDVnGMqH5Dh9T+7T09+DB/WbxZIPOBxNTFmjLMymS2ZGMKGerrKOdkBk4LjaX/h02rNpE4TRTg5aD4HebZbTsfQgucAIHbe5luDzKZM3AK5M7dk0eInSFDbhVKv15jaFc70zHPDshGlHbSSWG5Ka9RNdH+tF5wzbTP3e24VfU2AuqwPZopPtNZjdi4GNcfcrzz6JuUGWWFHxMxpMFCfJHi9vmiqn8MonUGc0w9iUFYIcsG0TDHfaNtIuxw4WJRgYMrjUgqPHQ2JNZFDvc4aOkeja9CP0hge442N0nvr4/E8ZPs8FkaqSyRPh5g5UQm34EAIFU4myMOeBHzRI9ZVj+P82wGtiahXg5E7y0=';const _IH='f9279a3d12feaebf529f78bc3caf7fa62f647e0c840fa0d95a02b42aa0cfb4ec';let _src;

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
