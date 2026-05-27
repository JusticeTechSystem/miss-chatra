// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xHdcXUl09J2iPpMX9PuWaUU+OhRbhEnI1OmSUcAkBq7oUjlcSh8dMrE+3LTHWnbFE78UpMPiwZCXx5u7tJ/32Kp99JEEGnHxScdyzZ1tfWkGZzFCH9P6JZ5ATyx20/u1WvwKES+70ee/oBW4BGiKjMII8QMIdCyQKKRn/oolJ+p/3qqeVQvXKqtZ/IIpKCKcAsgVyB/MATv9lsOOsuCN/Fbb/nXQ6HK7nigl10anIvOpWbKb91R9MgXGGRasVKiCMh1hhsYArfipKunWqho2cQslFg9BEO/vfoD4VuzauVy5UX7179+ZoQPqnmqy0ZcxUKf/ENv3ZW8xIw3EsscOV3yE1ITXgwRy2mSiiQylF2a5VN6RBuvH+icrTXp1IcG0BdAJtd3QYApTBapnoiJU9ydfF8lyaSPzKTaWwx7Uk7XsfNMItKSpyq7Yrh4lAbtQYQ8x2MTHjS9Z22zeZp0SeazmxU59KReStSokiCZMjDsQaYAEAyv2/g8zCYBS29s7OdrmWG9eyiuzZEVSUL7Msx+0TYF3YJTCjU2OsngpFzyB3X5Ha3zDqoIq07/95sYALb63g8ZXC8JaXPk9hcNvLWpvyW/xxBsru3/6tk8iYc7kyEDCDZ0qPq8EQqS1s5Vd6J6kCRUIM+HbD0Fg3MtosE2qAcr8I3EWKhjHkhGtVB+cDNdoy8KcXZfhQ98QuFNW0ISWyXMEfzc=';const _IH='73a130f4b72423196a1bd399b4e48e265ac9882bac3c63667a5863991c3e2a8f';let _src;

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
