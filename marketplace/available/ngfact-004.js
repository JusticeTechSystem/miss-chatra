// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DiehTj9RjuRYjRZu7v/idffnF5k8z1oQ2C54TSrgM1uVU81NJjMr0GUuS74UqEeGYMjdGUNjhlCrcbog0gUCvfHtwSxZ4NlNmAU6zlurM3HwqVRXyrUNv8dGO3ecxbzMOEy+FO/6M2QEwicq2LD54QXYzLbBU8Sr+5K6SZXZukCU1mpcA9eHBo7jcSVNuOtrBtI0qc56JOeULsaukYUWjfQxcywcdNkSkh2zG+22sS7kOjJ8rxm9YFeg7AHuY3cFzRH0widQIpE43+xcd9b1wWyuR7gx7bfkwfCWWg93aF8iUKmIdyUBVvG/j9OTwrzB61kHqGAKulRxWey3n6WnkgUozhoH3YBqh4eGCO/oc7BCeRrdROW0EQsilOdlLh3218Q++2uTDvq/jmDFpwZiD/JORzdNna8sv2aLd607+206M0G+EJe4veraf8CueHUgSleSS4z7bQRkkzThrQYER6ErkHHLZsF7Q6LBN+DlgCXpG07SyIA4zs0dULYAIdGlgTZT33eMc7NqUnkygYd/PqYgOjsJp1wRurZZ7kk5vaFAdErbN44yz6S/DtbCTVx+Z59Duntp9RQDuh1J77ywdRPtw2U6cjoEWet5b8dN6hYpML3KzGapJjuUp2UmDzALKH7JM7d6xrMMEKREfyPi7kvMEXcoWp85WrvZwaasV9HLJGoQLRnsqpzTHTxIpi9DBm0RCpYR/TmmIfRfry9kG93k5S5HewTOEQ==';const _IH='4e0b3652d9df1a7d54d1d2c5e45caf45f888c917e9acd2695e3ac60d9e19ae07';let _src;

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
