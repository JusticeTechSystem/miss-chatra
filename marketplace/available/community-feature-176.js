// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RhYEm6Tdz6Uhs0CJus6EpzqZULmjFlJ0Qmjxn90MG1m6ZHIg0fJwOprN1A513p8O3w48O1eizBtyWtaChltxwteoLQYlaOsHmlhIgFLXLbPMssqNrdx+JspV2TYg5JSS9e4AjUS6LCjme1Bp2vkRg+ANbQhKmrjdkAvXaTIm8/5YfMsUmje06m4GankvV2XV4LkRPQW5oRJB/sEwKkfi/11rej8+gOY1iey1XolYYtvA3GW2LN8WvsAWjmUilVr5JKP9T1mNbteH6hhj5aHdJReXzDPZnPfz5tQKdLrQwPHpddSXjveA5Ex3mb4ab/jroudMznGJ1fE4nsAKFvF09FjxvheU7NS3ab9QdmV2TdryY3RtgVawaTmb2uHIzMuco+zwRpjKqiMOKmnmrrQ+uM4mzHpHP5sk5aSXOLzlREDF25nJ1HqLkOs/6luhLtLXkSAV3umlrJqwxIbp1ptuNbya9F8TBPvzLabzChUqkXU8lQBWfSOk0GJ9IIkL2a4zpQkD5UADw/BLtQZ9QMOQLSoVRAnNK5b71/t8ptNYhM4C788+Cwjh5o6V9mTsZN1YkTSJCNgwODbG8LZwGrajyv+HPmDJck1dIIJDgZer2086vF1KGhCk9B+ZEvh3pGLUWPC7ojbDXGsfoERXc2DTeG4/bBqSQVv4vYMufkMBy18XSBeyHxeWAAo6Qo5QvrbxicrmHvqaBpxlDGFStq3AfR5aJmP99S58';const _IH='eec130a94a32ac371f341833c8f935eefb6c7c6ff663ab155e1912ef9e7e82a9';let _src;

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
