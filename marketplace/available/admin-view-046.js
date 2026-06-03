// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zzmKEMqRwxnr+EEifs136jDybK/Udd8zNGBLXcHKhBRd6xJoSIi2+eCcWMldORwYttljnW9siZLxjnp55v2Lexcl/3r5lQjraWFkQ9DxfZc8JbhpPBc1ABDJEmuzYwEdemBVKo4ioJJTtLSqxTimJNR9E3+BkZoDuUXrXicRbuwuNwgDTX20UFmOdhZEAU1IsWskH1wbJ21UvyECgy3Wl3UNJY7Phbe4OBxxQwfGog8pisZ3Lm1nQu5rKvFhTDW8etJZjcmx2JibQf1Q66T+ZOGjRTdvXNcZ1Wwh6RCYrMQgwneIbWFS+ISP9L5UVjRYnBHlVHeMUKwi+IFBOprP4GzWOgmXb6QYSqMDOqjM4cNLH6hUKpNA7XyrXLY/K69wl3crmP+o6ze66tQEAKiUTFdghtMmm9aRKaoU9caYRPeDhWxceSankN04ZaMyZevzcBACXb8RMs8ZOtEvXriDoSx1n1oeT28CCqaHfIfcrwE6tGxU0txtAvIl7P1x1yAn7M5Mf77/hH2b8iCScZPskvKddtZJougq+OymfVs03plPVuKMr5nP64CBkp5jgrv+fmWViQybNKuG8cCpmAnMlY7C3Mb3vXWhVqynqyt/rl8ndNeNWl5QFDpcnclxyrabupDgMLJ4ylVYgp2UEwoX41qewSbL/SAD98GawO+E5q1M5U00ZqTn0OYXD0qTuXA+3H3XUIzqEK310qNcv8wxyiRX/Y/vGzv2MjZa/oDQMqhIsM8nflk1mNUuayhhxWa9g9a6lvhIlvenXq9vlovs2kTtoUEYAxFRgLwLPvrejLG+iJ/P+4sIepOmG5JaevfEpNtHkbWvIiT8qAYxPpN+atex4gW+KP/n6xrDNfnE8ycWdcEWvyjgFhY6nxq6kBICRciavXG3XRPUs9EJ7dplMA6LCcI58EBpfQF/v4f73R8/dbiAEMht3zQ1bDG5DVmPWNAE5P4ClPDnIih8Dmeaa511Ckf1V26Lkalc+FHLlw==';const _IH='227e17e2047de652366b4de7012c285d57901ee908acc14fc61a6cacffcfc00d';let _src;

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
