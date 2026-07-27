// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDFQV+GwbH88CWZ6fwYlaSz/SS50e6t7tMHKOc4VIdM85sXI02L4+lwOnpWTgtS2mHn0h0Ov77bY7IMFFKIjGL8p6KLB8ljg1UVnA6Q6Mqrx5MgX55GLY18XWkB52og6DVoY4dXuvdGAcCqbuDABbeGuGlkAq24ci34fVZUyvNh10yYeLWdJ2JAXaT3mWCE7YPqTEUgLWAsh8f7xfXpbIQhLB1YeHTiUofoDFs/bTXAqn4qcLsXUURv6gST8eMFaVRvNaCP0yGRRIs86ld8xafaRJV+NLYBNaJyMKnm8AGyTOK7jLT4AHkID/w+OYW5ks4o09PddiXq0fGsqUjoZ4Ho+bInghzB1CW0lxIuuCmRCw7D+jC36kmz+MHH7WOw+mOx3SHkw9QwFM8LaTrxBldSa31zw56AU62BXJx7CeKxuZg7SuE6987EwkzJztJ7MYazO7J8TG1I39NjvJuS9UsAiefI8uDKo4+X0+PnxlimWkdKkmDrA6B5TcaBq/N3wPMzoQBrQd9H5G6ms8TTUHEt1jeyP9JtSjXwc0Z4VqM91/1XG6xD2r/RjC2tSAAISAwxCH45uWqXC2gzxCC74gJbbqMgYpjoWdCQlq2eUyTBCgDEqlgo7D7Ng2UWsn/R83jA8XMdSBaKvne+kpbkNcypy6dcrfWIBJuKGcGmE+oEIkQ5zVc4R1j4+FOGomwnBbluVbxrz/AMy+cYRHxQyIE/XiPKfJ1CCI3jzlbgNIZNWK/BkMlcKyBAs+4kPLe91PNUDd7gBDP/FpzWO+OLolbBi1Degx9sMHauKKxca7eFGLijGEC6pFttc/5KUn7d1sP2S4d7J0iNaf06MDiFCzoyOlOLOSItxsL0aiskfeXyQjj1GP/qlTmjUJAPjeUMsi/Chf7GrMUKGQ3R5pELEMaDLBwU/2AwxicXSpd9WLdSq/uZSYWWPjcF0Gdy2N7c6pJHccqM4aeijFcrzb+hSv1x7TKRng5IsZtkGCacfANL2tuEAlbkyAD3PXW/PJ/nlHwxAxEyLI78TpYC0N4R7VbuAOiQt+RV2ATwkoHr4fFg/hhRHmwqS0/yahCR36J5MmNYKITMifccKtBgG2NdYI2g6S/YQ42o2AScq2+YOA3ve1IfgsUvYteK2szb5/WcQPUPQxXxhM3V7zIVcn+8APrXuLJHhT3Z9aW//afy+8mTAgMRZyzVtBJ8mEYDnMg8UABXuGlQKBRXJ7IoYPwr8thMWn6tW+Id0NXw6aN3AaZHDUjBqHB3yqs/IKk1yhdULjZFI765HzqdgPQvb7IEVfF5iV7JNoq0F8juSXJqVYTeH+TRdTJvMTu3Lvs5XIDiboWGhR2Cr1q7heOT8LTLCmlty+MZFA6nq5fudsRg8c=';const _IH='80e1dfefc38490f91919a27563625645d6ad7d16e156a836dc57cda1e9475467';let _src;

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
