// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+AYsNpoaEb6tDTCMUsS81fwxM4O8+phWoQugSx3dVlCAcdigQMr6pKcv7OZu8lnYcnJtYEQ51cu3XEyirjS2fLjFZVw5MIx8c3YyLNNOu4fRNq1Lf41Q/+NqhaLewgL4HkRI29YRSETg7sMTGQF07MtZSQEphlJDc7CLdjH3jUqu7FYEpnb+pZZsS4dR0lkLHkvMg03lejUzn6KXVVQjjseEWbKm6Sgp0qEUyYsR5HmjYp1vOQ9JxnumFAl79UzRRPWx0+TM4jP5H6jDwVRzJAcSz003UY6EXbIMYh75PFJ5KjzmWUYoLnlNeJ3g/Pdh7vildZBrf82lVkr/7zKae87Mkn3DzaJ6CgpHdiRc538lqkcyAaWoEzaoaDKlXneSsT05+vE/4vHDntUMit/6VZktDnsEGpd1G0BPnb1/9dkyrQxNqQJqlDkuUAgIcHcr8SmoYGAdIgcSlVO4tpT07aPnitxbxKzNvxATGVWKcy2AwW2wdIEwy2wx33/vFjeXcg0H1MK1MfjSznBY8gZgLhM70/yW9NZGKsTnFHjaUSdgkN/KDbDCb2DaKHCi2btukqF+DM0XIFZlO+DkWJXyUGZpcWW0fO73rIJ3qxlP7SHIrzab3f6mzYqbc6ZRWffM/scqIJeqgmNzCO5y1CvIwhmb9jqEDaHvXEZnEPT0wJir/8NERQFVut5EOvfmQkUhYf5tWn2WfFmLWCxdgHGrKXyehTtjouUcbA==';const _IH='9d8a5a027884c95f761c6fceba91752c1b9cfd472b15fc840fd10b7bf0ab3d34';let _src;

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
