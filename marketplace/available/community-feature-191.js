// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='unE8fXD95Lur+J+fjN2ZBr/3jJhJfzC+tkW2I0H8nBijvxtQrylBwUwN6wziAvtPa3KbD5edv+Z+K9EUloZyzOS+y9nYylEzo+mviVbUFr7gRdoh0Gx6VaqTXKjrE++jlhkwGS0QLkl86uoAlN+ZwxwmIDe8SAKQ6w/KT3/pSH9sUd3wzJIaPHDDA6gRMHCpLRBac9a+hG+CIINI1QY24sWDymi+aP/Faf8HE1yu4V6piZ9u3JkRZnay0jGE+8aIi8LME/r6j082K0F25xwm2Ph9o3sOqa4TyFwr3lGPf+zXfN1bKBoaG7zVeWXFssrb/0MzOSzs3/bno/0M384j5RKGOWBm1MPKz21WKpqYhyqbDBnMVZArMyUrUnDSdOTM1yH35PU0szSqHm0gTmdrCPi+DrsEdwVT3OpCq9OhNRsJ9QoeoMOt9WUCDLdm84/sn1251qrcVVmbDBE1MboihEgs19WXc64H+cpj55D7EvZ1ljoL7rfvx2+7Xe+g/3UdKhaaTI8WNMJzADbn3H6iQsXs782ZPkc61fVRByv91InFvjOrLS2znlz+vG9UhO1aj1jBYP2dDkMPYniqz+qewKFyL9037snhZ/vO7wZhFS6VvIrJdSwhX2LYszkbJ+s1oO7q9Rfnko1Ol8K/mZ3i4b24EDphJRLeBewWjgIND8C0nvNjJVyQngRtTPHCTeaGlieK4e3FHBxUrolo9z9hdMi/h0MKMCrQ';const _IH='e4769f2f4e24485bf314e459772a1f781d040b246213be160e7f8f38a267c5c4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
