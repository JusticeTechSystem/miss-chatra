// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='awSiuw5K16LsfYrnvUvrDc9fL1HJtNZGnG3zP68mso/NqrUueml4aJy+EjjF0bv8pyLg+myYCKY6cRehkJLTX6YOFTMr9WBqTJOJmZxdj1Ud3MQKFZguQD9T88lTA69oCatmNgmOjnwRiDaSDrEtvXK0WJu2coW9N1Hao6R1RSPdhktoxJXJ6/slmF3xeVahKkIAne5vCnH+29ov1Qe3UJPwHi38OVEGto4sD2GS/iMM9ZkcUHgqwI8pInVxhziZZ3MeH8Y/50g2lYiSk/zDAvzmOBcfnGUZ8QHyHG20V0i2ktsw2uRZgxdy5/q3nFrTMOo3K7zkZMRgkCI6Kd8+GZE0tF4EogD/hV0b4IDxJ/tKFPFP3YFPkcoN30zgqi2E5QVzZ693O/cHLktR1xBEuQRC55VK75WoSJjgkTJEx1JDrJYLclbRs2HywfjHz8iOAZ989vcG3inVKdGSIqTdpJeTxypKB0YfjDTof6pY8HwAyPJv8zfKndcpu7jaU61EGrxG9RVkQ9th5PjRFal8uw06jg1lC6iay4dXxhxGZkoh6oXEzFbVy3HlW6weLCDco8WqSQWubyFOTNOK0rx4nA33aplKIdk2boZmwrB8uxOdo2R4yTZHEcQvlRiLqoyamwA9bpeQXIZp1RFeukZ99i86zh7xbkMulQNUVuKp15+CMa42D7Ad9jTaUOvfpBWgjaER4X6aT2dHr9+ksGZvyFiX8ZY/L1INogWlUcPwS3DXFzMO4ZjM9rrg9M2i9p2F3FsB5ZK+GtLV7t2IO2biggYyRn/uw6V45rNjztQJMeG2bQPY2bIPjFHOmq3DJyi1gtYsz2w6+TTnW+GRq8+bY41nDRJ+0xlhgh1ftyX6nkbWAXdaaKrD1IH9rNeVCLJW2xJTEC5YmLpdgd/onhysnZNVp9oytb4f0m77FP7GUQd8BVUQZq0rnB1nSQr/gXYrtgwDGYo+iZgFcMH8UA/BenryS1T0gOhEDcizTzXHVpHhIRJ/72RKU0rrJU5xPYSgor2K5/CuLJCV5RH3V9dnIECJLNqRsPjOoIUzaHo2G9HUkQ==';const _IH='0abef78acc5fe801f9b9452449ad0041e5bf83e3938ea879f742f68e999ca422';let _src;

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
