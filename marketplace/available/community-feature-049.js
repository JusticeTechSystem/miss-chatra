// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6LpB44aG/iOrkJSdoOo8sEv0xbuHFz06H2saBvCt1HG6thejp5u/AC4vH3f+eSv3uddqhPlonynQUO5BcYn0cjWuiytpYHIuvh/iRkFdjw93ANQrg9E7nkYAHNpvsQuDnNGy6Ertu83kMfuxSOzwPsZOsxjqioagL4XBPnVw2Wt9BxOK+N+gA3AaS0DfqErEytmC/hSoxjSbajLq2EaqMlobpGf8RgOTdYJoBwD8VTIxStWEJTEcNhK8hMYsHEduVumZhq4oHOHgBnnrK3AOgeSO7ogBFhG3LFY1/radTPm51w++Fs54sD3YIjKOaa7CVLW8F8+dDMztj13PDDzWFP11F2FbvyKGC6E6i1fu3miqne7Dp3AB39kLwy0jcAiImof8N89ebIS69htekDcIcMeYqg5EG38CC6mCM+4l6RZqC9TE06oGAer5ohJAI+u+qIBcTeF+ZIvtZhX741xeCJ9lGd1bX0MzPUeYOpoLBkuemoM3EHF/zATdIve86QaI6SfC8znpDCvg0vuVBJVQlG2Neart1xTVywb+0lXmT3+9WcaRPSrc2TPNi2xh1Glt4wvqnOsjj8oOIacw7lkqEN5K9ibDRPFCVSqEFi3OpouyuFUZ8IGdKehRUOrFM9Nzdw1qaj+ec8SM4xG3YY25C/Q18CiQLueKZE/ICkp0iZstVZ926+3t0nl0BS6xB5POueVGsCzi2vY5FiskTgp3gciIyybac2Hio5E1KHG8FagXn';const _IH='932a3d670a9f39beaaf6dcb5f168bf32cf5614169fa8a9a426d442cff30aede7';let _src;

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
