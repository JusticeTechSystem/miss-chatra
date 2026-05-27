// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lBg5/pfcakY3/+4hHC2jY6pfclJrqRZ6aHNlvnJ0lFK3eOU7zrmKzcRsNkHF40GM1GpvY9JmtzrTVRB6ZtIPh1to15xYIFDA28C2dgLLAxSSvZpHWw8ewMnBNdQXLcOaPMBFVL4MnyVkkOrTGsFiUxxL5cID7CMeWMaMa2NE564LXYTlekflkd4CBv6GFTWjx2EW8/ayrEhZ1aGniZbm0P1wda6IZaWBcH4MuKvdHMMP8O9NTjLkJlwhDYkqG/+3POtkMFK7lJhwR1+9YyyUD3svUm36XtJG76TXe+DR9pT2hsHoTRT3EJAYf/BT2iglcP72NmZa1AOLnz51GlRqT+9RADYMRMJralrSC3vz5sTfbVGe8Bv7W9bDEU5cS4wKJl8SOMTooXSUDKEoxvVakIfr7sdzPF/iOZKe9VTO+f00n53zi/5WXr8RFeCmuNgYdYwmobBsFTR/naPh19izFIxg/UOzDca9KX2bF72KWc8CRhFajhAhaKvRi9xsaUWu2g5X0+YOyQPNuP0XBky2NJw2nQw31+TLa/37D5Bux612w15MtACLAsJTnjdhc0GpD1gzqLhK4HY8tIJrgtYR2B5uyQvBfKHJTqqp7TKiy2sWlTWVpDzwClsrFufEUjnZZh+xnxeUEzk1x/1S+g7deXPDnG2Lc1uoGI2UxuSWKzGxRjR04qmdNAYBLawrCrI4mtlwo4B5oDkShUNv4FtzUCC71vAr8tkRHqkMP3vSLj1uZiXpslwmAkkgUQAoeK8MtR4+xgVOMS5cclerppe15PSX9VXQoYtz9jDMvMh6FBWRg3j4LpDimmBAJjFYvnQ2i5Rc9FQ+3JmL+0kLl32dafHyv21Dl4aoBE3uS2G7CJ5c5kLAVWH4IQ6KRj8o8nQDrFjJ8Hw/mncqb01vyeAcg8jpngNPuWlpiJUpfNL8TFiYUqWqwSHf5u6O3f7D/EoQFjMmsP6wVG8VgVttgB2/ynrt4CLkYm0SvTRND+qPEGFcsQ/VenekHSYZ+C6dRs9OIf77kcZcQEs=';const _IH='323450576685d346f383f3fe1dca872de9d9eec412fa00544b7f4cf55038fd50';let _src;

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
