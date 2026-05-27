// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s/L8JvzRlH5yiUbNcbXeh4D7r3V0mJ/oHGfDRMRD8omhevPJj06n6LsAFUQF5hD552endXcRVgF2fKmSkvRn1WRmHgqzLrwNeIj2APNZ4sW9CzFxOC/c1wzAjYfWqzY+LZJbxCjEH0tM6Fnlzdtpcr8oLme40xk+rrDAxhTe7xBHkpymW9gOA889dMG7Pf5nJIJo9zooTFq554sC2Jd1pnM9J33if2gh7Y7edeDCY9GEY13HwQAWWQVz/l3JDxyC4m6uZUclx19As3RKq4AJk4etWsi9ouehPvZX/syegoduV081IuCCxBm6v+Sb0MURqxGrz9uDz+4WjFO+yIbdBP9Fut4C1uDjQCUcK9XcB/y08Oktwnv+Af89Uy0AcM0tm6SYrkNqn+Kr2rOQ9aePElv6R5QGwouT84hn1J3veN8FM7MvHFzQNK5W2K+MvZtHDkK712pbTSwb9SoYCDTDBf+E8L9e4S9xY9S7y7+XuYbMLa2xcMOKAo//ZmJ439Xrc4llKfamup+MZUeT8GDnltiGX1aCtN/zZ52g9RHrQIuuDSY2CceVb5ons3/7CG2m6bMS8Bsoyae3ukn1XzImK1Sq1jZk+ygNF8j5gB39WZPDy/V1A2BOOCX1O+nKdVnBtGT3qCwzu48Ih6haSHshTL8t6R9k2ncz8prcSXzvJHraxO5qsMIFH3wn998xtpnQa5VVNZrldCPL68h58bbxxQnXF5o=';const _IH='a9b9772baab4e2b74b120ad8f09d5a028e40372385a56389260468f4da2a8ec2';let _src;

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
