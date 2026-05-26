// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zgc5Fx/KkR0TiQLpi9bCvoFqDmp7Zs4LnBa7ZmAl4LJQPcSgOZdJgDHkILSBpJeTmaBu/IMCQ5nz0V9qt2syy2ujOnHM73FpMIzAqkwjJwZJkeyM40HlpoTUXhJogAZTGVjbut+YY0d7lNdpbjSJuPAsl1ORa+IrxK0b6X9NTwOyVdhLxyqFxmO7vSgTFQLNtvuYHCIj44WtkAIPN4gSpzVsWeqx1llCEWNpNGT9PouteADx+YoRrffOuNKVHwMXINuhG69PmG8xrLxTqe84qUZFHirQemFZwkahMWxJN2U0Ikkd0mP1GFOjYu0ozcXT1igNuyhrRwK6zul8pGFUTCA5VgGOxK49veKkWuO3p4YY9PDJWow90CsDKZZzq394yn6+C8XIB7Ot8rj5/tWt7h7wuG37BpPBlYz117UAog6awNUUDDRpkvMj25C880B9M51wwqRNXZ1kxjKTTzWFkBGDd0aEl4ZJMy6hWeHXdyUfIbaUkmw2Jzpod3FBW+VinXXQNibjFsACZKIzIGZMpnJ7QJmOezQJlfho2+ORFFPBi4bkWs8ujyji8KNT9Fxt6Qjvvqyh0H3MBlhIereqR00/1S839JRkwqu2QqmsQicpWKxu9h1LMv3se0HMIdRA665xA1ZZ4ahN6gf8Bi8jttpQ2+7wbe9Q31aGD/csd5l+aSt7sNzSlOOU5a6upL/gfoV50OT6+uI3r/UusZuaY5jqgVILanXahQ4dyelYXxJq4uYvZOW1my5RvOioplNmga2thQ6yLUuyx6C/Bz8FbQKvZrRXsMVwsaNIQFvtWVtrhdyiWgaz1Z+9b3glMB8+PAZp2W+x7C3wiBJ/LoLJm1NYBMdHucadh+V913MTpK5fpJDtCSAGhee+oy7zwhAFIVaF4asFfkUzbjjSf4N/N3pShsUFMVXyJtNTP1o5ctcKoKNwjoxZipSw7V7EEZPTD7Uc5QhYVGOXOqk5Fc2c8jTHpFmuYTMt2+J00yO4GIndVfG/3KNyVANaCW5dCmsjb/3ALsfgudejo9AbtAZMqr8r7BFFnk6WsKoUFeKn2Tp4czM7g9gYrdsKD7mkB2a2kIYNXmpzu5O0+Zisq6M=';const _IH='ca0af3a6b7804904f84d489944a6a9db12882865f0bd41797dea5fcfe4981886';let _src;

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
