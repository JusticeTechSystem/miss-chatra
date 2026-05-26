// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dd1BRz4WqxqQIyuKwfzFLlT1qe9yYw9GRi69+JteUuK/OUJAweLPYY4Vca9F8yZF60d68WzhmD9W5uFQIlKJJhum2z+DRzpcSbSpUcyL9m4HW57OEuWKpQLDw5iAXJtYurDewRCmmXaq+bEG2kxBSfd0F4OM1tqlEUM5nWRTEogc233aE5ZGkYltxEQhtAd8Cg1k02aRarb81hCF0Srl8EirHrBRxtQa/QrvmefyajLEKdNxB+8CpR8ngjg8VTP0PQETscv75HUWZW4U2GC56Y7zBOsb/QcJlZc2+RQcxrPgG05BIZ/+jpMNf1T05ycRZ0ftuMnJL0Aujex2AJL8munu0085yP2EPpSmzWUCefESFU8+wlTVieYuWM8ae9ZY2+zTYeb4kT7+rAIYzmWizlBb59iSR8aCOda6F49S+vRjkZqNi9G4jO97kps63Tciri2CoTwbBBeiO1D7ERPDPVX/oB0n1rXPvcZzCdAMo+e10jZfzTaqK4ieGkpA027zBE+4PLyWExhGb36uavqy2Y9QDMjd06Skopmm1KSpS5sStqnSOqeyYE9mCxV4vjKZLu08zAEXJeEjOjgod7FiN7MlbDreRKSsmmCm242AHUiV4szsgU+354g8FKYqg5vFGTWk9IVhZvPqdiumZBUaAWSzwaqvAWMx1tQ5TtzRcouHtEFxWADDIccvrIAlw+/dcv/aniAWs+KQ8VRRr8RK5LaKneg9WSTr1wNJ1uWd/3pDSsACbTIIpLmFzGIGWPNy5NZhslKguhacJx3CDVIT8EP/xlOuQIIVTfwMG74uAOwT/yZLtUYYB2y6vrNEUdW33mVToddXoZyXc97a2bmZr+0ljhDtgzZHNASNKMrLqZ/lQs0qXBoFjuLVvMY+eahSX1T8ySBTdQP1FfrWXZwq1MoMuyZTHp+zXfrc9z5c4U2jF7ArpbXB41V6CdJcYXuw609oVn0nlgyF4XE+5Td7CTHoAQPAP39JMy99QTJkSwrU/0JzDdqE/5y9+RQ0s+WLOsuXjRxBKX0=';const _IH='6728612df797e43329c5ae70568a0204d3093664acaf5ff9205efa9f0e6865ca';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
