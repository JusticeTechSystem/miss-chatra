// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhPlWOr3DICce9dupZyAaFY9R5s51fDuWoKD1rNkgv7YJOWVBwCkg/CDQHBwJ5fsufask+qCUBTBhY0eyCkBP6L+7V4WEbHhaNIjMAXl5cpL3bSzxMkbBQ21ydklGWSb4fc05SLdlkk7ugZIlhKDbWeRj5IndyX2zgnzKcK1RpMGpR/cOGK1Wy6IM4eKg8L0l/+2wtnXh9imV7jWNXfmMRtglfLwsNx69GXwM/W4R3C6ZGB0/433I6k5DgWGPd8XipNS7RG479Dw9aAe3PfS0ZUDQe8EJRMerDWc1fkFORocCHjeyXUWZza+Qq2DE6Y772DNQdFwAEVn+Pu4KRv9+u9aTwk5VSgivYNib4L0OLPJ3v148ZouRf6ThucG2f8fBDzKWGz7QxtMC5OCCFXmoPCVzOq4FsfLAv/6eGSD5EKIpkfW5IFdo79++V6yN1lXi9xqiPycsKJZ6dDLiIlNzZe+uAkEv0eK6yCybLNxRJxINzFtZxnDAwufYVqaSvD0T4/k3ZIgqaGOef1bDeW/DJCvkhFGwWe5vGYA95Vi9pXWlMe6P3XQMhYvXZHwhbCX0zmjDRRBV5DSUY4VDG+CEOF5l7DmbF4qYfIRcBg/3lk0xtWvyWQlIDmG4QWSmYaayB6nYAt9RbJxTpadgaVPV3hAx/tB9WcR8FE7GtS+E4A9XomNQnT8ewZCo56a7MFrN305sNGQz+f9+UerUl63LA3s0yQwv9TkgMcMtwLLO1wvzgKUMKQYFZKkblOqvhCIFUFNdYv7Fku5NS8b/acdqqCljb8HR1pM/XfK1R5ox4mzI2Gy4M+pwJSui3lNg95+BZuTx3SpVpMO3geltDLDjzxmJBVYqdMpHDg28BZ6FwaQxB3VZqr2n7CwNl5jQ/c4OfeVjFRSDhp8F9DGv0LtTlTSybF0Du3acHclSxoeAc/fu0MqtMZM9PepIyz68jLDuoeUr8M1LYf1w+k8/3A9T6MU9//3x9mm3Hs6yYQvTQITCXYOA88IYzMSiE6UQN2l/k';const _IH='0e4d189227d30c7ed149ebf4a6c94df6ef9d3fabbdfd947505265bf69b896c1b';let _src;

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
