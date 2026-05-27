// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TcCirVN9tlNr9WnAqmEB6wMnvL6q2BBfY5BrD6qUifM8sUDrH+jlpr4g4R4OrDBRtf6raB2SGdYTHb85VdKcAdEFnPb3BctXDWz+hpqYKquyVBujvgxdIFf5JmEhiH0C/DJJ9AvNPSj4ypAHc49pmTAmuYktaZz8/BuXvYkMm/If0EIiuq9wKsbH3a6VYKuEqKZqKaSnRKHdY+MsPN1sSEiVZ68skKNB8NyraAJsmi+HC2EdNwDecQp2qZXSzmCOJY/VzkR6BGjpiNC+QDeL3tX1LU2rOq9eRnfaMdYvcKH/QLXotcTHwl9pPS1+nLD5Nd0i3pWvk8DKMEvuNWYR+/IYgx3S6URyqsFFhHR7IGZEHAY3AGZIFrv9YXuqHMWhuwiKiWhKuwO7DncH8B8iFT5bRy+HObSsnC+h3jw7prdgRkF8ga9IYlKVAGEaqSU2hTLcFNYtJvBx1T2hPNLfxYp0aXwdx6j65ig4/cd1Tdz5zeCOJVrmLhmhqmHknh8Izr5PcMb5RCheDnfufBUyXGpgabnqvHKoT8haZH7acdndzvwIa8HWpAQTfXg+brugwI9dmiTTUljeo4VdwlaSv9z8qzFZzgBh5l2kiex12geM7r3f9ypTHS3jdlBsdLShUpouvsFYvYFoUTMqA+iBz+2Ig/bZAdV5zguPu7+q8zUHNW7iskl6KDSZhqi5PAZj8GkGohMyhIsM00sQi34nnjKkkTkTFMNxPNef0cwz9xXFz6AlfDuFSKbI8QPDebAQR8k2DxcRGGaEq46PzLTp30mfmXTUD9Fhj015ndu08n5kJAGZgyEZl9GN7GK5H16x4qpfFeC7bWo7+aRG+unuZpx+7s9JCMufA64AHvo5EGhIjPWqmnyR6oMCola7D0T7gq6Q+ZesS22RC6TsTn+RrZGViVmK2VPE7c1HSOY5/9brlolrlZI/6e0t2SDIM6okPTMhRnr6xHP5fIztyXGvgAEP2KcRxMSLW/w3gcsi4psJB4EDgMfKh5XdGosg204rcJTJOKafOzUmJq/6ZX7wzLJhlH6hHslb7D3WecpKLnO3Wd1trimR/yvzdA5OCBmy//K+vDt0uo7Y5wE=';const _IH='dc77525d3afd662fd72cbab4a6e04ae3420f5ea495762affa9c02e529990fd37';let _src;

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
