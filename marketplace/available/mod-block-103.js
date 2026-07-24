// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgdAavovRsfYLp9Q6UmET/pCJAyzhuqzMVRWm8ThWLHnoTA4r2K/bO1sW6LGdFVIFFoqznNH9+sLD3WcwecSWNymFozdij/0ak/XSvJLLYIQa56jPhgEtvWSsDYky/fwe41435ydpavehU6tS3jwR9g5CIuny2rQmkNvEawow5Jf/F5KSfo5tpQlGqZjO8egefvpViYtk0aCdXRe0gBUXd6e4MgccTe4bOdLK2+C1eupjr1AlOnqec0pKHEe/9vUjCeR99OalABwrEg97XAk4JPweJVIGh+K28aUw1cf6P9f/o0UEaQouvw7kYRn9YRLUO6Hd/Zbd/3t9C9OvEigIUn1JPc70diBmpptuag3PdtljbHx+6dPy3LkzFpBtgMkpcBeXkhuvwAjlPm98LpfXjyx+9q+G2JDamIOIb3rKDqM/sqbQpN9MGU1zUOnGPjFnWgLPfss0+L8meacz7PxPlfuDKwaWL8jrS4DzSEWl/3MFcAibkJF3rWIqSeQ05cgSVBP3nW5nS2qhuzlvp/Y0mvmuAn9tkHXfl9+9gS/EUmX4v0JtBP9LSbrok4MxnOkVk+Z3jBa2/gFA/Vsgauxf/4YVytr9VAvYNWsyl4yFe0QPoCY6eUKRyKnM3wjbKE9gBmLV8LL7rjWfzJTjJj4oKIAYpcMpNZsKzN+RfgV4deWRghPb9W8M2jLWUZkq9JEdy75Bv47/q2fLvokAbZR59b1iYN1B36uK0zFjwCVI8ED5yDcMOCh+uJjWqCtj0sEM9foe4d6lfE/idnwy/vQIxk8MIxPlkI5kvxI3NN0OQguCLM7wmwifbCe0vMeEMZN13skmtTONt68MSel22r40bIowRJWRx4GQeCyrwc/8XfcIKnyzr4qM/Yf0EfEYO+O8qcgQBS6TF5R4e3aX4IS66LPyCanJiHHsiVd9/WymuN6go1CMYdAtRSax9df02q5M0D6S4ew6mPMiAQcLC6HnJHo+GYNUz6g5OnpFh0eCiN0mXLou3On3xEBFFlu1XJrL40DCRZHKiqO4baKDJQUFS3/fvZcazZEJuTjoAA+Jx9wSChe0DssN/gK7wnQCffIAhb33tbRmX8Cftwtuv9UWUygKTI+x/M30p2pi9L4to25H2bpo2B5xE/HxSOPt63cDT7//5amminO+hRTH3WzYSGJ2BGPaBtRDWZQjc3NOPPKRnxX5hn7s0txRZmI5pQq8+t6uVfcIBfdQCCZa8sltPeZlGasxkW4vOzI7YV/JYFpYymxoJKSy77Hg0P9EaZQvNcNexNkFI6UbCsqLwegqtFjR8CFbpHjbiu2YHrT/O+WQiVUOBVdSq7dptFUnGgG5phycinY+bbvOyqTLFK74p3AtGKzDHIhICtZwPO2U=';const _IH='bca5ae32baf34b80fee3d42516a68d9867d83650d84739b64185df725ebfdf4f';let _src;

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
