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
  const _b64='AjsWcbn5U1y/CxedoSvVKqvHI6wPPxd6EKGv89G/Osu8EyzMqi2GZS0aoPtMi/OdVI//PVFWAh6idDQgkrqFQgWfsnce2pEpn3KlRRn8EQSsMlOqM2bXzBg4LaH7TLuv909UJDdhMqpa9JGGC1iirKMn2Q94fx2Fr0siQOYgYYYboZvlSernp9mPrl9aQeC8j+My3w6nINKHNXZKrnLSjNQE/HdR2liJOvdiF3JyrSlFsRpUu1wyNJosEKGVWN3JI24xT19crTfjuhpTFszyWUFxcKo1ce3+WILZQTHE/+MTxxyLgdtUGNJKVQlC0xrW/mjZPHhjNBN7x7CNKkOASq/SW86Axtm/4IJY2nPxMJ0FKJCGBf8O/osvSYzyw6JabdrjknTDbdT1g9UBKPSQCGB7Pofz5UI71n/gmfIVi44GIm2SFZiK8kOoKoOvnZFm8BQNtVTeUIk5sz9QKYUvTKDXp9xB9ZT8MXQ8ORbCTJwooFyL7U7ANZ5CPMkQO0SQdpsgsI3hSpTJzpQK3h3sBOLBVSUTiPci1x2SQAJA4SmM6qtUJytREsyC2JXwNLCSM+w5MJwMI6irY32VfEX8SiUt8ui/MAzKA/rlTf/vJ7B4mz2sf73EL9Z6sTpCoPdda34UY+F20A2DngnSBuhTpYaYYXV2w19pqPe4UT8AgZt3zTClTz/6zqJ9GR6e9Yetd/mOhl6f7fq4wbYpGBJ5lukVTbJ3zqJ/o8QMrFeJyfcC0DjTyMQ+PfiITbewwy0WTzzMq61ur7MFqEhPf7U3K1Ui1C7al9RmmIGfM9UJEBfQ0WALtSK6XDZ5sFXz6412dpwqSE57+8T4bF9Jjo50HP2Y0dIQQcQpp+z8iYIl7qiZW07Y0ok9CsiHKQM+NiMk3oP4dNGLBqUgUpAiMP07GmhCDVHwCskK8jibLTat6g0uk4BXvSq/cyLQ3cPFz5d2jVXOhnHqqhQPRlgdER6whJLadVP7uj2AGRIJOm3wAcyXbZEDtbE7ZRGEXSXj9XCMvgMIBGVS97gb5hFrnD/JzrS+Au3XNzoLnYSY9cto9wnYp17bn+oI9M0mje4d+Da2TfJIPKjG77xQOuHp99wQkeXPOl2xKOIEYUwJQhyg9hr/FwiOv0guDcmzfPcLiDkxDZR8M6DuB/48YlSb9DPNJ0WpwS3HzaKTakW07h/fewYkNz3RaKoKMqnuOih5+ddWzRwEqNKfrvITRQqSyRGNFEP0WYyefOh8GxMuUgXjUNVNnSrIVsGko6nRV5OmBxKD0F3erFOc1HgGW5cyhV2E44jOEfNkSgIVxrkCKtZarD17UF73d14p+XQFeMWAlz3gRT9rwaY8FvxYYt5JPIW4bKxHtssXYplzqS2BBVfnuZcVn30=';const _IH='fa138962e2da6263039dda1008fb490a85407077af81d6deb5d9d2be74d9cd48';let _src;

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
