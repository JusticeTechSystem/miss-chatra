// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLBWUEjq/i2cUDhe/ryzoQAA5DwpH6EEz+ZHUSZzAik9rTXJ4tCmaWmH3mNuH9QgqX0VHUVGJhQLW+XsxJVvrv1eax2Xboh3gVYHap1sIhG/3jaS9TRuCVsgIj5m/F4i/OUGiDCgFeFOhTgUFiXj8GzxLo7WfIHcRfcCIs2Jed5SV4gveWM/FZmEXacLsH7kCwusv2C5TjXdz4FKNVOhM9WyUygMHT5f8fjXH0wE5W3wt7bHRbfhefgzIPnaK4QDH8s9pK22Eblo26wPpK6VBuujCKbqJxi6VRMlkCfBPB7pqSe+reQ6hhJ4DPD3pKZBeHBy2qun3aYQYf5YmgPStDErQlMyAkmFxOOoP+Tt8Ic7/PbUlGq1Dyv1RqhlkSfK9uUGxdUP5PlHMfuBOW/r5alDnzNC54PkQm6COgSntFw5OBfsUDgXhurq7xDPl9QH2uJY7mFvMyIBO3qzInwXx3kmqxKKAX5ayq9yQG+ggq3igeHSHf8C/eokGbzXrERdNZRRHkbg489+VMu+wOnn5Esy6eFcGJ7a/gxP1jkkA2Z6fNnpUDFTtQh79tM9l+RLAKow+MXo7zCXgo0eb6UzctCTUfy5qgQWxR5bw7SjBqX+WidSaWHTzFo0JT9j1aMQ9dG1rsRMltoJdZf5wNpqPgzU4gxggIv0Yi15tp3sw+ONsHAFBPixghBg7db8mHdc1IbU91CJnScBo6dS8YeIcSecl3pMQfZ5Cd/aRdk3lMq1QP9sPpoJsQ2CJm7JkFwXGHmHdxATijTApoPDELzZrRk0qilPMgMFMTmo12dzz9ql3Q4V+tjHHwVJaXJV7J/ELY+wLZrv+1w3itoUyVfwjnagzcYdnovbfQOT29oC5L3/kuey5HaAGo7BqnHKS4k53+KHWEGcKPextGGdmG6sJDgkRfQVKHjJIYK2eduQzX1jKWtR4D2wPGxiZGgdc+mts9NXI0Jz6fzaGmd641jFI5XfDs7vRc36ai6Pxne20bGYF2fAEMu1atHFtZHRJeJcUlIN0f';const _IH='871ba411a24f5e77f6153cbef5cddbc80e618bfd4841f3972fce019e6294b5d9';let _src;

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
