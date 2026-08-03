// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9D8rmlwG4ms7F0lK+hhUhL8ziIs3vqD9PvJna3z2+JqbjD6wDlG199lSlUEafbrCfm4p6NIQUjRLyQzk9Lc5So7610dTLflgL6Hp7IQca2t0/i5bdW4zVlgKlFGWts2Q6+EL6YP2kFzMq0bxjNjPLW7Pn6ZyYBtsCKytI5GA83kKa/L0hBnSebMGU4P9YFbiN3RSXw1sAFIOakFKjplTbxofoTn74PEV3g9cde3wEpM8Yh41miGWg024XMNDCezwlVd99AwO74Tm4aRHN+H90Ks0P5w05E2lMFPwQSbUjBatQArbOBjtKfUnzYZQ6O+SxKUQ5F942h+pfP57EYm3VBYKI06NZkIkvLOW0opvwuyPMppyb7+MUY+9uDzm8wFSjEmLkOBa9EAT5Pn8Hi0+9THwKSEvt3nWvfxyHiAfcbhQh1gf7VM7V612sZDR39bf46aS6+kni41pSt+CoyN6EQ68nkkZ1AGTLjbwudMGQw+Pg+IuawTIch+jD/RLitsjFmeqHcW0XFKAD7Y43DSj855BFgSpoVXRAvLvORz/cDfO+2q8+cGi3gjfbHh5ItbaklQkwoHVyl7qsxc4yGb+DhMmGam1EKIrViNuElmSN/d+4HMlhPIH66kUt4cSavbxn2oP6PbNjiPMvJ1MQ3gpb7zelUbKm0U4AcGwzeLAiEVBVFzIYI4q/26LpUvc2lNqOe3ey5NsizpZyBKGfZI/k5SoluJsAsLu1aQrw0re4b+Xg';const _IH='8b7145a9ee9b12b4faa8a6f7395d88a8cbba1b856c6e31f538cd9bdca6925ca6';let _src;

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
