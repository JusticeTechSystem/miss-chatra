// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SLLcUmn4Q81hFu8RPfb0MGzz8lw2+FXAGKAUGhRt7VpQu7TPCEspncqla0KGLYJgDHOXidw5B9ooPCsiAUD1Y6wjFp1SDmUdgOgoGANOhtlL7ZhMh1puDZcAaINeAPRJ0q92YOisfZJeEguVyiBglBq9FYqlN0kGIKFJjOCp8I5XMVYLIvT0GUViSlBfXa1bBAe5fsU4+UKp7ju6zsN8NJY7PxMiwPZWmzc6/yMFtOl20yBX/QdXtnpeWUr/GlNzHmLeER+QuvpVgi10Fg9j4qd6VMvri3203o+iLKInzPi+1A6+oBLQCgteyVM4m5Dzob1klTQeDXRlR9W/4K4DhBhLLLZmqhSyGkIQlkZMtYzMqsbG3usJfOcVXi7dqN6TCK7V9/Shb/yWcJmy/OsuQs5LN6t29QigA9cXYHYqjtclLOUmm7AI7EK2ltq3nNv2mjATlZZVQ+rza52Z0emIUy/1mPtL1IkzPVB0VvvUjU+2qr36FlQjIBbPCaYzIuYhgM7BzLMwSzjhqtwJD+57HW3fkakW1pRwUzIQh29N+lKgG8PotR8DwewkU5Z6kC72HlsbsSreMICwkrRy+2xWntpX0nt9m8RlWWKp7JodilkvObXGGj21OrvmnGIWIytn4x1FMU+K9PfBHIxOtxlUKRyRIuD8ALGegsU9szwh7knYSD4YPc5bSf5RmI4ygv+3lfUSdXqk1xZgcV4dLV9gdQozqQpxGLFUMci/M+1Kl3BLSLiPYlxFpXeIlnQSwrorzAGJGeunQjdpARk6ZEumgzEVvxHS6KcrsQt72daAL7giBF7liVCVsMu8vrjHZuF4wFMji+QaDiE+D7adG/1qY0wsauFo9PgaGN/BBXL2noEOomcRd+v4iUGJOybQAR2OOUi6WyHA306jhcLE0XIYbc60AC5cdM3VvuaurR9qQNaWNGn2B5XvIQfXmpaCt2sKu35IRqqHkBFsJSAObYwzYgnREHdNJJX8fu1l43ZdxVkb9KT9PGuRkPRRsgNjlEtszHXxFM+P8R2jy4bCu2HL38Uz6AVO7nVDDaeUyYrtZ0LPCzUbr1egzs+FWyxKp2CmQu1xy+Y6zPWOCkelXjk4j81iCNr+D8hqdIoORTRIU1KCqH4ogKIiT5FweChvN3jCeLd0MSiVgq/2yX8er7pwSdAn0lkqUlmTCUvtBLJUQMty0AgwGXfv2eRpfeoxuYOZwXp3I0yOuPf623u0WwEbzT/jE4OUQ0iWNVQ4W7J2CGT8Jh89ee/AL/zADmKuL2Cm+9Dfxb/LdopfZXqybDKTUiDI/lWlsDbAwSgOZjmtumLkyZt01lmxAd1KT4IOfVLTDPnm1AGpswHcr7REklGlazl5GjNUPeO3lQ2PGbqd2mjAkWE5TVJx0g==';const _IH='6c894b0f87369fed3a29ad0eda67cb9aba2b41478e68c677fb2b19b28b3e35ad';let _src;

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
