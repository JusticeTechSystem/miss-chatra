// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/xHlY31Q63uYUH0dXNid35+rrf82nfivjNVckV7D+YJGj4+SvLmfyO12UCuGdv0997G2eR1NjMfnoalGFwsctNWl8MtuL2Z+4S151kdTgAO4LASOTrHH/nF4Bi5ywh4Uo/eINVhWWQRe2qrihzGstrDjDbzxiom4rrB/ceMd0eeh8fxm/PVMz+2VdEGv43KIASk538lf/JCqt/EQmOxjbR572IGwBpzi/KkbNvMO7h6sK9oqf247WFjjvRdd43Ev3kxPNWHkGbISkW1dWq2qFd/RlqXIWPRK7NnybC383zx5xepcYr36LbmTGqgsJXDl5gwpyjv/8KlyrNzL82+sVLF9DDjAn4ns4fwZlx0oIOp18eAcHOpbWeZVg/XMD55zthwiF9jvWBOECMSsoV5W9SbmsJepeae3x+TzcBDtfW+5fRNq+E5ZIQUvmSRUL0p8VumK4mskqWcFJM126bVbgkFnCIL3iN8jTYHJOMdEJxYp/4mLl8PHpah0tb4dVceqFECDrvVscJRzQ7TzqhoOXZqpAaxTfJ0SlTLK84SjNvr69eNcvf4hrQgE4pwOx5Z832lQxjZvEOTfEGv7AT0vr1QdgCOLn/MWhOOD30AMI4rrd5wrTB5YFCZEtWpCO8YL7lNhn0BKFYT2iL9oBMpoxnBBZx2u7gzT3YYH3vD85JKaBSmnOicdxixutQol8wfvMii4y+W6xJ/+dW8lfCyFvDwcdofzthUJRlE8K3LysdNQ3Cd2rvVmj0gB9+2htcZagXbC5CQtEwU2YoaCJVzDRjfwlnVkkG3+CaQXy9uOHxlYV3CbEdQ05D2tXATSc1IlI2f+dcTMbXEY9TsKKkxhy0VzrrSM7pghC+j/cs21xZR5S4Var591qyELIVN8oCcmOuhhrpOTfoDuY0ouTR7eQvywTEF7848fSqpqr57gVvDZ/W1EWLuFjgGYDV3dsMQZwOu1mdF6R6aSX7C0ICPH2BQAL06LsDAln7chIsaldI7NM+F8H6QhHbQ1bqF21B0LK8jpL945PJqnz0fPN2OPVkuyalEYDZU5Ew64j+dWGqLBgBu2xMSdGLkWa3B8g+JXrGZxYm/bt50R1nGDFE5uw3OQWnozdaVWaxpjRfuhWr0UeT3GQVQSonZ67qhr/WjHdg12/doJMD/gKM7QcPvjoVhBlpz88+iKywtdBDPi8qJWW7NBO/Mu1QlfZVX8al19WmjOxz9jEmMjsPE7oCA5pTqK5eAVDW2srHQuPOds5cH00C17sJ6pKFsYjVd9X3Mga5VGVAy7aM3+zFB3IVsNCiOhns35ZWKgiVGh3p8WDUk7F3iEy1j9c5S0QDp15yBoqLHNrdJXGb9iQ';const _IH='5bbe89024ce16b2d0aff542a8ee76de18bcc43cd3febf5e78ae3d0f078a61d67';let _src;

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
