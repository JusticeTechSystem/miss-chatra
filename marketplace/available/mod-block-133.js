// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cc3dGHCmt+/YlItzOXuwE7P+JYkeNMfvqnWpJI1ckETLeLKNU6kJ+KwQ92QjyFEOQVgI3SDbdkQNS6ccrWAHTkQVJnCu7vMR+2cx/hoCidoRRm/Td/0c4eND1njo8LYUYiJfBVt2p7Qp5oRQAPe+Tm+vYqktQiQ7wDAie8gV8eHC5cY0U8Bo2BlmUkXPXmPXstIzF6jRlqg+xchKco98GoRKWvGHaXUc4tT7X7jje7J5lOAXCxeCAfHzZLXnDXiOWX+SJfszzdh+6fOiODZvF+7JagJ2otPN/9Py2uHV+4CwIJUajbInL7Yj6NifESj+r+8Tts22EDj/1i6uhgzaexpm8OVX7WP3Q03Hu8gk/fz6epEPk4nB8LPzGUYblOQhcvgPZRjNbuDXaaPx2EfyBMEnTpkJEKetw1O78auyBZKlZRTtSmHAd+fnJo3ZgtQTTkeSQsyCXU9wj6OzXgjLIkFshik77Ops2atjWkekcF+TBAYz1Gp4uaeR2z42QvMguEJc4yQSg6npeuTbHcWl6lMYeH9Ac/hJIyc/fabWoXqt7TEbCji9S4ARSHCXdoGcOtHLv1Qt6s+9cRMx/ERdyDWtk3QHhYMqbopQ+aTazQ7U4LuruYzmRyM8UHrYUbGpP0Aopb+Menz+1Zztu7qeBWN8tF52zJhue9F2NtdqVZKJQ0SDKFub/c0AjfzQKu2m5AD9Ay2wiV68OEIMyIDzfrTaQvlsK0JFFfxrT4tkLoRX/kUoM2TAT8ZgOT5yTOCytdpDw0utWuI9vMYZuy/hvI9/VCifFIX/VL9PJ5MswpFzml9mE9CyxgskatpWE+7jgZUIy9ebbAlpS68X4q2Ro+s/rI4fOkpX8sk2KaFXk8vrm/lpwFyg0mdXH/aMjJ12fNzGAtqipv/jsnWmHY68bTDYXVXD3owhcR8HOBY6eiyG8z9BnmfQ6XzsQ/0m8/btYeVD14jA/hGGDna/NMM0AAKWrT2qoplfvccqqRGTg244xeLCpngWdJrFZouXRgw8Nve3bsivRsMw6m18ikJZZuGnJNq06LcQmPxJhl8vqYC9ZzPrC+EANZCirJmerI8n3iubfFMxaVAq/cm05yOsUTugANTrUgOjXFXgjW4A8cm8g2hFFqDFPFmwivqv3QEpk28ZLsAjTjTbCEAKrt3/Vz6aOYfTZ+lrJ5QM93HL8GKz58ornAWrGXYckMUPDzMP4pAnEK3yjl5glLHgWnSfQOkyq/g/OD61cH34scdDel6CGqwpXNIQrtuLLsStYOSkQ/Fqk5v9nCCZ3UQJxZmFFvjsHmOGtuLWt8zZ2UjGCiFSgzyT75d/Cqkzpj5EBv0JVEZQ5i2jjWI5ZYmP9vc4XYR9Mmv9iD5WmBGeNzIQ';const _IH='4a11962273461c7b15acd29ef634d0648e410f066c97c7a4dc866690d736e6c1';let _src;

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
