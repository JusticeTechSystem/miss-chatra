// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT45HbeqpVmLqsH97qSdV94rt3Wnp1x/pjs73MbGD+XzVIGne5ngBMNODymKFeeNiR4MtYmvPm+4BX/VnpWvKj4iBdwDWAxtZNtCmeJtcAEGGo0GKuapaiGbDj5L4Yoa13k9CLUNEqFvhxzITmiPqI1nD/NzQCHmsC8jgtpCGLkPcmyu8OH68M6S+Edv/uD+tj5gh2e/9VUe7Iwpz+bEnvot/SYYUN8nKD9xcEIWqCNz1Rvj0tXKIUfoyU93movD3FEq8WoFcF7T+T1kcMiCkpJAdY0j0OocH/P3LssLBKu053zy+q0tztV2ZDrk4dEEYPJYPAts6rl3Gy7/LHz3E8SdNq2GmfZBQxH0e8vPL9yjqjouC8V2dXpyLHMlNV7qGRnE9FfjUDtgQbzjwUn3RRWMmEjMb5B2+M8Dq/EA+BbZo9ItIyFkcWhJetwXZOhFP2Ni+WEVAXG4q2DdfmTDksn2gv4Cz4IcW82l/vbtB3HdukjmE7zdmxPEoVms01+3PHz7a7Z1rI+Am9UzRX9EaxrmNjEWhq90Xm47jX95iE5NAhsJ/f0WbbRab25DJ/bhFOa4lj/Bad5PXq1keQ0c7YqC/Ygv4sGe32u8L8I1W4T68O8mrrX3XwFwYYm4DnMOSWy1Wd2VTuqvnCbvVzLUGi5jfwG3d+NSbYai079PxcnKGHLsZ++spjKlO4QXmWrEObSq+G7QfQL97tQcT7tzjZSanJSzQ==';const _IH='4590a06f9acf61bb1aa17be5b9ee4b1952540b8b85a961f81736573ad17e4c18';let _src;

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
