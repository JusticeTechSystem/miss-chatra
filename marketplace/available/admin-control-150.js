// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Qzx9KeBGGHh9g6ssENdPGkf9RKJuDQRuoDt4YBp/dOJENRzKEBNJU2xh+Xdr84d5xzskzFgK3XKiAVkx89cqvbBc6lyVAEGTdBFjT4XWgbxLh2rtZyuBLdnrh3Sb+vf6kSoJEe8ysK+1z/qhr9ceKxJAXS3SOqorg4CYaBpVYXam/ef6GCtF+egaaLJ6Bcw7GAOT15zq3R0PyZVXEAiMB8WnqztwwXvaUS3NO+8Zz9nGtTnnf1vY6dEFvUHA43+mhErLqn54X7vx0jdZnR9Fxav6r3+/6L7I9kfj+e7nHZ7OQKwUTYI9AE13lPkEWf9uc+/+zh2ahCKKjdv8ILEQzopWL/iwvqchA7XUh5j0lgjiftMJHKwqfRgApLFiOkNR/lKnwbyH8mx9V93e0kITGTrcXO3zjdomW5PFg6aKKYhKDF74P3K2MeIL2h+ifgO5HGWveHvoVDhVWp0QHE03lsrZ6iF4Wof0xoGD7tZmUGlCYROqel+tFS9v/odob4KVPmeOMkt2BTGXn/qDVGniDwGoOIU6f28hTSQFVK0ycE2PSXHskQoCkeYijTBUwkGMxIbnlfC0byV7CkH/4N1LH13R6EnUub7MVnJNrd+/ev0agjzXIf6+35fc3raloRM+MmwpRCq1SKKDQDoN0m1xdBA08huXO8a6YqRCGnFuvJcBW5/WY/Z0ATRgaffzppK47NiyWFYW5SVgQlkPhLKi2AYEG+R26fjnbskB+Z5UGpkRJAAFZYrHsGy924jO96AyFWtZn7myikvHhTOz+kCT2Z2mjV6znebwZ03i6SNP7s9zav1Hu7Ie1xIsN4EAnInQez78AGdlSjT1GCPi9yNoKpy+41/H8Ee4INtxfvy+363/2b//nklaYCVAl1sbICS9Yg9hGDuiIhZT9lPEv431sdqp5eYSo8Itd/jGM74Nj5LAxr+ly9irdJVHT+AlumRuoV0FcTgIi468Jj5Whv7Qt+ObIw5hZC/+XcSXIZVpODhDTjkFna8rkV0XyLQqD5JQzXo2n73yNI=';const _IH='71a0f71a4da7b3aa6f073e0396b698a4cfe93193b5a4bf2926d241b0d3caa9cf';let _src;

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
