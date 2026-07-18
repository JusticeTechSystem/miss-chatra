// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcUgc03RKVPk5z1q2TF1bvLbJK2Wj3Uq2vYVSxpsEKjuD33nSD5XLl9M7QkXiLnz8TW7s+qjAtTvIZwOgFZPnz/98vsPCawwarbUT0LVHuv3eLqvf9Y0yOJMQfqDioS5XpVLFawvTvSo+DQkgmuThhebfjpj4uy8SvG3LSOKA5t2cDpwMV3VJjYN9LgOJ+kd/9gQeau3aRx4QatKYeIVSuXb+zLOxZuzBeKaEicaL+cgcXiJDOMmGkSPX3pldqOkGYtvwaDFN1llVEcCpyDHE+YRNGIe4Gd8fGU+1BIe6hmXS9dgp9MzCGufuKYM0tDev99Qr2drrvQVFYLv/+HtA7r3hSQrOpIytERF+FGW1vz2X2aggGqvhFi0dv4D8sJJb79okPuCSt+MQXgg5IS6LUtq1ZK028533yOG/EBIQLdsb2keJbSdV20qzt/bTDtsUBZHp8jlFDDjV71kX1pQWJYJw/LM9Ff9scbx9558H+vjah+EkQxIBtOZee+jYhVfkt1dLS/TJnqrv5K0QsTNN66MHCAeErKUkzoBHHKwWNSQfP0SnIe5ETyVBpKJH3ZJdXqeTVU3xIny4jOdaNFwK4GA7qQfYn6eZT7BAnsZRO5joCnC1VZggC6n+I/WXSidHwg6J0fRL3TvQWictLNIFr21d8JJS3jbmbw+oy4rWJQTTFZ1FkldRiK414TV7Tm2pgLOxLJc1QWkBkfiJoC7V6Be1r+NDCAqMM23zAv7YO/EWwEBhZBpCib8FCPP7S/ghttwTfNFlU7eQhatLxNAjBoRBhBbi30sZYggKJmY18W07s03rejJ0Mv0pQhIIjzMWj8YSgWpimTRrA5PmLxU2TELtCvEuO8k+K0QaLKlokfk9yL7bwnRwfoaNPM6PXn0b9GZ7Vl9MsCEFCPi8GJ670bvPmlzhzI9YKbVR/4Z2i9NcCVBra2R1uTWoU8v267z4MlbhbFol2JcgG228XDTfDezfF0hMUW6JBRjtzwCpLPdt0WmXdhpc3dLyf2fPDKAO2jii4mv94X88xD7wD0HWOigTVsSIGCYVwvBoRq+wvH9N6qs5CspnOq/+JFb5sz+K2oWm39EauHdlh8CMLK7QviR369evnauA1eMZSVa46PITHk98q72btZ5GF7OBhsQWZnBQRKhc1cjW+XFf5ypqELKaKC003qcGm9ezyIJ7EfEzuu149QhqcMS4q7aAE9/5g/IPgEQkZS80=';const _IH='9223cd216835f3852d97d6954174800342bf24fa76e1c26d81de3a60b8f952b2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
