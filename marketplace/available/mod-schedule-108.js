// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vSrF8qk/7lTZfmuRJJJgQzWOvTjGFIHZtla23q3vXyfBuE3wrjyPswmWBOETg8rOZ74Pc/9j0OYckUQPIaJ5uvvaU0FKvkieQOoB8RMPZbECOSRd5hH5UnD0MiJTD6msbIYUp0UNQTBPpCHwD2AoB3V1Apqxo84nZh0mxJYfHGy6vj9pP5BZqp8eGP16bQ1v7NV4K7DERk0Rfb40OH0Zlovq/zpO3Svq5JAtHWj3hHGmgYHnGxmCNKxhloTjfs+VCxSyKVt1NjONprSlmxCqMMlSLMmeDbylmcdQ5aykVJ+U6ZRmBTB3CZz1dszMT6VhF4YFas4nHrBE5Or/g9J/p2JgNeOB2QyDBCwOxbbsIpEBrOu++FVt5xSL3TQWNMraULAiY7w1HBp018WC8Kd5RmsGQsbp6jkXnPNIq7U/1ujffQ/keQjVQ0/t8KfDLgXUnE8izos36mNZe+daQDL4S1EatOuDjuORQbJNrq0I9Pw3udnY7bGPasIJ7QN3bZdruN+weE9PcvYbPMNBeXxIfoXrBrjyhnrY71T3n/Mf3T9O58dkN84PuHz638cXRQtCz/8adbkaMEOF03zWOdEkSYY/VG8oFGvF0JM8EpkGTAg8FMVmjJsAzpYfWbtcq/VYcxFUT8dcuxYk7bWb4LvBx8ye83rTs470DZ3zrIy3aBePNabuf2gVtYzg3PyEZsubINT/NFP/tOK5eA1xInsvHYypl0+doxBosMN9t35QrxasuZ8hQGo8Mr94Irp+LCCIxb8kVIhMU++QOaeaJcMHMs4dwWK6jwGjn5gCF0kZ29EUdf7EvxNeSVquCliJdUhOmmDNiCc4qnnbjSUIsJDVYZPxhq+rJPPKSR66yxnNybw2iakPkK41sEwB+D/y1N91xuZ3QRc6pGvBWujLuAwL428vAcepd25r/dhkkRlWpU1PR4VEO4LP6LfHwnHSXcKbw/hzB8l5u0e3KDCYQr2E6tTeUqO/+i6rAkL9l8eBHvvkgA1kyqwRrFlL6aFVfYDYX+8Ne2OXiwZnJmiNcE2kE509yfoPtEGtlC1LRBeL/jOKfFBhsBR8ebOJBzM58ekGCqNlSyiEJyAkpR2v8XaJajyZVbJ9muSW30bT79M5i/WiNmiHOQmFQg33DpmFvHci7be93bZ5nzdvnZcSGYKXvYSRs7rWp7brh9m0eBBb0D61U1a2cakH8C9D79dYdYATm9rfTJWpj7gjnD/goNCauBISdCEbB1HY2Ab+bU1TFe8FNA9+Uw8ekENBmaNAmMbBQUyo+jWLWQrumiPYcPBBuopC6sDx6lPp+kQFGvZRXi48FoBCkhtrFjTKQlpRzm0V16VINZqgchb/CRJZ+Ipp0G0gWoxYNI03um2sEv+Bob/E8WAkAOyC3XYoYqpQHIXLFtJvKejc82fj12Wu';const _IH='eaab57db06bc1742c91bbd4d31838f9cef0cd600fbdb62cf3cde529f2eb4041a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
