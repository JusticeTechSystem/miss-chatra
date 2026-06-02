// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nVImGhjYEl6W419ItQ6+ogqukg1ke23PkiMV5dfO8dgF5RkxaVHnbZiQCaXubxkvZKaWFfNmmDtZU/JsQeMTdZYer64l2HPwZ/BxsOXluFCrc9ETX1+h6Y5jJxKY2blCtaIGRXsZILRETJCSbecBraBvNGGrrjPnUI8L7j9/4UvG5LARZOyuKOAJMUq1K9/IpDJ3/aVBMs36I2ucypjUz3yCshT0W4YUMID6n3LdgVkkfqiKQ9bFCXJojGelmZOMKL1EW5y6tI3efuNb/2d5PLg/gxgg9B+PRgD1SpVTQGvqBjGiAsZcbqySIbcnZVaom7EEWeF38T+IYDGkGlP+hHaKbS773+pgbRrW7ns6QK7caFJq24Tz6KrgOnbdFMa3DpfiK/kJEdEN+zBhXsCOj3oJL7GOtrIt1KPHFLT9CdNlB2oK451D4ersL/dplgDQozx7wZn9/EOIb17IjknZvR6K3KzRC4M5kSQ7CZKsbJVl5Wshl/pQFtmMThVxw+VACOCpkqkEE9N1VEWTMioxIODbUB++G7y0C3PQ8WhV/oU3QRoeBTjVaJA5hmvmiEfcUIPyPj5l/8vzbCpNQWjhyqEFZZkpgAu5sf7MUAnKa3uN2tRIz8KM7sGuZWVgChOLAJj54qiO7Za4zvYFfkK8xq1pQtErx29JwvX8PCkVB4ZYzXHQrMotltoE1EjXI4NYCch5X/o6bZf4Y7gbGM8R1+VLjEDdqtL6';const _IH='3b60acdeb448141a3f6b0dd91734c38d70663707ae54235ffa03fd28862cc4b3';let _src;

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
