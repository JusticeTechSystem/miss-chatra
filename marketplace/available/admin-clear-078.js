// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hg/wlEEfUNByhZx7BdxaKZYdatOIKYfoYOrd/Wkv1GHNKY18FCdUHWPkMJApXuIjo8o82xonb5EBNeV6NWZ75/Ci9atHpC6I+NNdnFG0eeMyG1NvWc7eZMmDTOSA5d4WDfpNxwXKI7fuGCMeHhOJPinLzQaXQ0qRqtpXplmGLho3kop0QznHEIOoxBrx2si24Gvr52G/P48X4OAo2E2psf9LfGtt2PB6RmaHEiUZ3VuSG/lNmsWXGZtfoI0MJ8RPHuJxCrt5vvQ4YHhVKwD8ly3UkV+mphg2FWGkfnIEOcXNaAJu79d1+ihdC21zR/QERi6Y58r43SWRfQhIa9fjDo00K+DEXbYxODzoc0Ez2VdToqO4O5xJZTGKXjr6kwLO3nDknkkbVr62zNs8L+4ao435z+iWQkRGH5YdvHS9VBkGS99e51lyZBVY8hGnlZ2v6y7qzNOwTsZdJHOgS/FjY1w2GItdTuGcrZE++qx99Nrp0ETceHINjv+YL7sXdGULq6LwdDZ1W22btvuBSVXYEjAL9dfhI0BW9L/MBm9u8WaHi2oaiYJ1K/9AV+4SWhGMvdhDv9lQh3ePb5YYFJMdqdzFCVRXVBEjmqchD3EpKAEvbTpNDJTK9M7zPruh8JVZnYOZKFrXJ60SIm10QPU9HGR7egQ4kc/+GUFY5xplavR4Ie5qhdjPrWwCYiVl7M61TJvkEgmquDOhgRPyo/R/GXcY5cmLteufTvPJ6TuuiW6tX4iW7KOAicKJ3B8bLjG1XKrbtYjToGVtzxzIXZ2d02ZdO/PGWbErnvJ5ibADsw70MNoOVJrhe8Qs2QX7LlKoGe2kMpiNPPhqJyR7h9OGfJezt4dQrOwbGZBMMrGsWEZYMJGFwgr41c7okKZF5tt8Y6/n9JQ+lSasuVu8dKzirhLJXMSlxs3N4JjFUwxaTbcKObcIUhS2xjck+cQl6wbk4T4SmYQWYJgkT/dhFgogb0sHsBuSmiGpMW/obVLXTOAxVKMLD9k=';const _IH='d59cc9e7e7490de8c363f1750982dfaabac29e1a01c56c5053083fd6d0ba5688';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
