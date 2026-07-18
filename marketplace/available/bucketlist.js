// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXrq/6/JoPWJ60Vk2IrQu2VstVQHqTHJHXfmcy/xGoBjIP5Cx+jR9+aZUyaKOVcVIbN58Iz2UlkwfazYStNRzNK7CiBe+yhd8WxUVociWtY2ctDIT3a5DGScCZyeZJNTy3lGzE1jZG1ezDe2ZiS9ZzjupuXhH+4WlCTXJUgxBCwtugXdxD89YbyUO8G9tSC8QrpCztH+phO3kk473trl23ZssymDOiw9UfLv+HaSHBxLwCbO4CjiSuPYdKNsrlzyYUk1rALHwM6hdblnHEQ0Bs30I+lJV6EVbpmqea/t3SxPks9lbs2LoNgo39kdPLbzUgaKN90DnLw1dV3fzWdk8NPg08994mCjylSVPwV431e2LERAxcrzOFTF793PDEwCH8WHiC/xPR5/et3fXJVUIqS9/28mElKzjwM9cBEQT0ur6pQlFGM6kgJAXTmE4yetszniTQ2wdPSBnDEK4xHNXGdpkEwvJkFcGnEYleIc4cgd9+P9UUVJNMNtcIELlZALvQRHCQMT+odXh8fxE3o4xPsCWcDLZustXcEoNr+BrCPim1kGD+D0L06kARZV61ZjPaR/wwyreQveI+nCXVzxL/AXju71ezpLj+lFBOc3c2v5C3vE8b7Z5JmlE3EbseQAP4ND+4iiLH6Nb+k3hzbHz4vhEqgt20KjjeAvvLw0lArO9KeOdXRakFuw5x1t08UTOSHYyhTsLXiob3yz/FR4piTgQkz8JpmhrbfzNT/p9vXbffm/ts0w2vl3cO8/iav7sxDJaLhzV2zeW91fQkEoDD9wYrZmlDibEyLqyeVNhAz14VTbLoDstlplR/o1lIZyKcGhY0K1pD5E/GAH9F5LWDyPTADHqmbU1HJbPNPTHUbesWlBBXWRr/GfK7+/ogGN2U0NsLVqYnW3aLKrUWtaU3Nv62Zp3R/7NikxQT/AbZNYL/r0wfiiPTxBp0aSlA8rJQ7mINV3Sbzd/jlRt2IQZQnZvUcX7ZKnna3g6OiYwnnR2MyUFY0XxulBaPGB/rye7Vsr5GlifbbpQkuA4QOlEcwFpQIOGckLcEYndA52donX7Ze7IexoHiguFC1O6kIc5eK9bYI+RLHlPxIWsTi5NUneyqxWAZv4sqTS/MMAXKIJiH8zDZx9bdvg7SG0OjUFtlPmLgSd1/rAT3bhQQaNBBKWF0yeT4MErrDYPKyENBJ3eEbNTHbuuGevN1cP0ztOTjsgBNZLtu';const _IH='6e2b6c5fb0392368b096474166226656bb1e1793d539757aad5848b8fb9b7c0e';let _src;

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
