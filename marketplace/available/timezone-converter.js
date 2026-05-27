// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hB0JKQFV4IRYHgVa9d6HVjeXdljGEqptFeczSITVxL9rKdjd9WlUD3uZQRJMP6XKKbg3VDF04+qTjCoQumH8Ee4VkDjqTMQ/loUUmE9SVZy8XaTeFLzbcISeYwBWMwkGAwrsZOx1DXL0W+/a5lXRDQr2lizYje/0/CeSY5GQBzkaADZ9pwXkJUqLj+kp9n1OMPP3zr88TZ2M/WWWLWjJTR28VU2fHxjYhlsl0DAJXpaMmqIQNzJLBsh+3z52m3DldsgqPJvTWihOFsX9nBQnRi2r0HJA67Bg74RzVzZK5wAPPJILG+a2FF0o4ek6RUQni8yZd+r4QqyujyuLzWs3ZX9gvoSEAzmWrZyqQpH3xOc9trXUWWL7FRBNtMMzqJTTol/hTRqTNVF89i72rQjw191qMNxajkxdMRl8r3a/FHYXdmi9/aW+/vPh817VqxlIha1vvSP6Kr/8e7QnN/MtKoWeXW4G43iO/Z9woErT2rcqPQlfRY8VncjGqEe0SJzju8JBPSY2eo8hexHWpxEhHY0AghL74bjP8M0OzR5+CUcTzrSoZS+iXYu0L37v70aQcb3/ebLvuoPMxEcRHuX+oV39B4JXWFRl+QqD';const _IH='81b2250444671ba53ec0048139338aa300e0b8504fdaae09f650012ff37697f1';let _src;

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
