// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jJMqMJY7St0wvGYFV2xdVyXUEF95MpcT860dx4adc4VRhfMyOOylJmbwp5wL6Id2XK3oSDiUu+5u/JAEHl094lE/pWIeralf77bLzIoqboXCd/YwtdOJ3rgFSTN3FKC/cUe9ZI5VLiOAIN8WWRL3Wtr6/QI/gkStWKSYaMuoIDCl6sod3EcVmkgm1eXkyNuC5XsaBYNd4jbnmHfMv/yI5wBPR+3Ntc6G15CZkvjDADw9h9z0Q5B4dGvnDEOc6ucohxWlpPTVyAINgX8RBMgf7/GvPNKKulxvK8Lfd/BnhJKVS4U0lkp5wVk2XKCgvxgSGF52yFSTQth7cfaBAIr5RH4DMIWiQO4wSepqoEpkWoe2Hc9lrmazipSQdheqoz8fPM8JLp1tXcVaATSBL3YXAqwclCFcV3RvZXZ8jtIkEKvM1AFKjNXGAiml4suUlEVP9LR5MjYr1XkUL7nkCQDaBf/b9F73CVKwykh7WfHSMyojhM420tM2YrAVW5BCucVspvC8bzVD0QbapxcFoMnaUchFB/J9wb6UEhrMFVGK/BF4T+f023j8Y0uwtScPUeHDihEBEQw0Ao8xqg1p93+chgVQAl7FAMJfVtPgB+kUqjIzPqFRFfdN59ZhOV1zSrrsCCwONRo+9kAqVY0yhhBagmU/YwhljNSNJBuDu9Gi7IrQeAJuMDTFRNcAbs0f6F7EWH/qB6MLH2WTq0FcQL9+V3gVMr4c4W3YnHu+UgbogAn2jg==';const _IH='192a6d649d304bc6a452191cff98d8629b6d547447784ae9c81a7f19ae220bd5';let _src;

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
