// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R5dGuW/5mPq8wa8X0p4BC+omENWYzUbkFWaZ4v9hHS2M94rNBBRrYo9QjZknXnBZi+EwrbCFO9VaMsZfdmu9uRsvDCl26KRrIsViZqpofau5o6DW4x8+AxCNZaGJDobcNS0nYJDSY6yVg6yuOGw9V5khjfadjhxybKwK5PrXb40u/abrI4JBgsqkaoealpvW4vljpG+Bv0p2d+SNW0QG3K6cz9yZRyVcLr5dKVtFglAR1qM9IMFU/ZSBfKj2Z84AE1ryS8lh121a0GRJvVVedXWwKH15Rb90y01tT6trTu7LJEZ0+/wibpdXgJkRgLDkeLI8Y6nU2I+riz0Ucp4qjZcAnD5E3wLdIpqVIsnHvZRigmyElNChmfbj/wLCEY/YKOJqnsgEF8yifPuMFOXIBCxKzE52Yu22Zi8xb8lHXUUqAdCFmEdBP1h61+asuIzThdwj3vffkUkk/sWBGXNHyA1qYEOvXOiJ/R8aQxlCW0qngUEctR5tQlT6arTeJlcY4UGMochC3IHB0zz0bxU5qR0+nEjMhcWl0pxsBzzsYdIgIeE2XHkmlN8FrJl9RKFntpOH0vx78R5dOsTj10rK9VJ553WANLkpSRFFigyQLxcMccpsRmekg2ifH2Iahh6W1DaggJKarwuQsKwRcwKL8CACzbHRWm0DWTT6tiSIbUZfOclWEoXixAdAjvdwEnsbBZopbOPFeqIiCWffb2W6Y0trikX38iOuQQ==';const _IH='364dffdbdd1e7b63c36ba7db13fcd6d8d8c498a1c372d9ae71aaf09a9f7b09c2';let _src;

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
