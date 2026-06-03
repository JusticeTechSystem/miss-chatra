// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4MGyre4Vf7RphIfWq52AJtTH15PNU33jntD81BJklyoHB3XXQshlXblTbTpJjMRpFA/dCajL4QchoeekjA4GrWis/vvDSTCUjQKXsELCzTI/WPhcsWQxftq2tuedNuZp6cDauBHnYBEbiVwGeFji6co2jPDEufRkiShuFrZbHTbcKj2ajMLOSrtF+ClGqpCsWDWe/hmifmfs3Gm9kaec+fOqLjlUPfzQeO5J1A76YjwW9aDawdW7o/Z9+x1MIANyNB6CKsegel/+2v0C5f0aczXq8KTJiH5tcZKMqw1lmMDTtLcwwwIGssRZPmYLvJ6diKfvFC98tbaWBeHwzdDh63VwGQuynmpP0YbPtD7uUeKAZF3GMPjrFeCxPJ5N1Jm5rwbwIS70EXINYyYjYPBNEdSf7JuyK6qyG0mZG2K/db6jQku1Rlg2/VZO6sqkuwJoqxIqRBrur2xvQA9EJzz1hXmCY3vU/tQVSoxMkPOuPdNyEqRoLnbVwm/JD0/OWHD0P0d5yDcYUYlhKf83Y7yDCN1D4oUdmxKOjd1SSK659lz++OVA3u3m+wHEsdhB1qb1kKrqqFRJJJjhIlOfu8s3uyUQQl2TmD8OoAq9a0ZCxc5cApJK123C18S7y1kHlEycpxvAtNqXTWaWjknsC5vOYo0+oasVNanAuXg0evyZaXT774e7oUpNd0qU3cZ+A9NkmVbws9KZ/Be/g72aXk2bE36s0tEoc61jIOWGDSRYCDFRxFPAT/RPrr1PyfTFmdG0Lt8UbXj8RGnXF+Mpr+uvtQwnzl1/4HENt2HJ5JyluIoY4hrBH2baeRq8wgAF3YgLkhcEtekRxeUJyyCY9ryMB+IA2JVMqaqzwsR9LPwh+8MIYtpACqmZx9Ppu3N4pxs/yESHfHRvaGk++HrXAcmFnMi/Ak9QtcH58IWpC8H/FlNCPdV9nO3PAGvt3YDiGCu6WcAGhCMpOj1I4Efztp9Pm6yRhkUVyvRnZnB7ZmJT4Juq+JMOfVW2VLvYElQVlP2qOMvbvQ==';const _IH='6215b43283bf277ace34e50d4ab8867ba546c4dfa7ea96ce14e5e5b071482837';let _src;

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
