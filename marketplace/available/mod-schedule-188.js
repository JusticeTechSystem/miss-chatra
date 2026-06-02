// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sJeRT3ZblFUZUmy79jxySC9Jvagid/vsKL6J8Z4PKPTYPisDeqab0dh6RcVM2DBoRXo8DeM8UAPnKn0RGsIWFp6bRfCDvsksIg74vz8FownA/PwNJBE9WVxlqvNb0vd+wDUzDdo5idxTF6yxXooXR4IncG8KfOd6NHm2aYKB79YeRDz2m/iBNTaDVaR9RKdlwyQRbO6JSFXC5UtHma06bOy6Sq0BKLkRAkTiD29JnOL5OEX3zQVShZJ/dOAAeQV0gZW/rPRkgGymkgg4g4B0sX/BvzhJAgBJM4pi734yUahNqL4fWgDXx0aGhBwYavrKr4tvhYJpdGW28aWMbPkPPb/bO/2ww+JJ1+HEcjx8wvT6Da8aFNbfzqNsmjLDzQKwqruzyVq3wWVgpI7W3D7eyV56fauE70vQBEY+AipXga3S1qXGmLriwcpnlCmFHxPhLWInw8vyznNj1NKea73NjYaNQONzEDTAAiLG6Lg3HJ/ec9qZUSi49kJ+8K+QWx62mHvLhG/hqM42vZPLDAQp00Ov/2IS0lHQcOfH2dVN95Vlft2Na0b+Hy6/LfWkKKw/ARFifMpEZNIzqBOS15qMhel4qtLj4+GGHkfOuhrGJbteYrxtByzPV6HJR9knmtzN4ntmGF7ot1YE83YgM2eAs/+UQBo9luHsgzkPIuSX0Y9pg2rbcCTXP5RQsZw0Cqh0Gdmk2oYWAqQJbTRQRRmukkmmPHzfVDUqAUFXn7e/+3dlx3dbxVRtUEaKHQyTwS+CjALhekxKwnu6+7QJtHZbd2/q4Qp6xqVzlK7i7V2kuFn7Otg813l8R+Q3jJ/k1LeyW1PRjn9chXBHijJP8HmJZXL7Gwv3MRbS8gsZiZaQiwBjOQscQIaTwnlRqmdXVda1wwPK+tCwmoccJRKhbFsddnymKVQi9JjxB7xYrDSjai9puD8DXNCzo/gYpBShMY/p2DmIlNQ+kdiG7++EE8L/eibk4RHcx7tQDeZbtutl8YvOyrzTSjLr6cY710RYvF22bP6Rb9DzdP/uM5oRkrLIp4LHasEhtty5dtKN91ZPp/Y/oCyF9FPHRKzTqXDpjRMn8+wiN488aIqf0ohV/5ADGspWlRdGSSlvrmhbtk7uK1bq+89MCXnL5PwYJZvqgZmpOwqoSLW3wPbj/8tY4xYolVe2KIZxKs4LOybJfCaGKnkmB/ZswL2D2I+Zcrb8WYbO8Wyc+4gFjis4tj5J99HRxsL6L9JDmOkx4SDHZew4e1ESqKRaicI5xJkPU3VCxYF+Avubcou3/qJjK/RzEL6GNMCvfNKC1uYxrC2o2Gezz4mMr0hSeSpoPWcUBY1DYKHdcU3wZpoxkYt9n5yeDLRYuUoHyYYqoQ+SGvsH198H2RHMZ3l2OFbuo/QRqC8NGAX4wvk98lbCluvRP0do';const _IH='b678bb37f93f2cb3cd974c2ec6e69a162b22cc7fc82b43e137ba88fa9cb11f8c';let _src;

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
