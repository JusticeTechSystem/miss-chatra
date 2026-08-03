// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRky66xtLikgT/TNhjWR7PvBknW4/GIkRvv34xJp3vCe8ZCvXGXooKIkAIG9f0ENrHENQGfGXYPDItTSOyzV41GSkHZldmcrjv+JzsyGKl16Gy2Rs07c6LfAg/Hocs5ppKUU175gEQgYmKQ6TaI9+vQl9MTaeGo5e3w5Had+Gf5t5a9ZwX0RgOS9wNCtV2nWYg/knkxA5reXezGbirbfWQR2hENYaf6C+BgIRT6nJ+u//aZLItklLDDiSnYCUIwmnyQITRcScb5cAJbU9FxWGIUBew5LWdFPi8bKd1dEhkby47bxc2nTgONy4/i8KAkIzD6eqXmSujCXlDNywS/I/fFmJE8LdBNIENRugU76/hnYQTvqCmhSY88S5l5YV1jj4lxmAY7GEiY82lTLQNuSoWW5WFedwBB2w21bmVdoVGIcqzBYLiRAJL+kbP4nRQJ1GjLihI3YgHvtCMTB9XFA4EkVQXo/hZods1EhdB3O6KfxWkNB4Peob4kz4f281XGDDr5ZOwbt5ep2LdVFRWS14WD/PQqkdpN7d1ANHVuct6MthASyKm2JsQkb1UFx4NoIpI9lFD2xp6GdLTrSheDxrgAvovjxeDCgnCLyGHAmvrYstq3l7aWGpnOhgiH3vjBh/7HD3LVql84N6kom6Fz4IwxjOiuD/X0AHeVJoOsupcNaW6Z6R5TqwhgiAm4fsi3JD3ULxYp6HhXwdJl0O8O7+ydHEXfoHY7h950uU84FvDNjYznFKGPZ/qr/RuAeOroIzhCaLkxhF2wIB1biehyumAv0b/xbSNC00eWjatgR+/M954t3GUTbkBsCUiMyltWzl5eVsnBCTqVKyKCMN27NbLPX+BqHMIlwtmoezzZUh0j6Vq2hjSk0hjFrNujvitRWH8Uhii7weQOa6eM9OjARxDVHuWpq47kEt1vAMtf6kSWYMAELI7WdMxBhRf9slnBriIkWTOqL1QdC9uU8fgT7xHWZOqxXel3k/dkaKXrJiK15yGpCCyjGKgH5OoQogD8DLTqaUo3DDqVVErfhE0T34i/n7AfM0lZwguSRMCDBgGpcu5//40mQeO+oZzU5QXqJBU58Ef93nxQlDQ5h/LzItVeR3AqBZ2/uGImX4G9ApL2pM48d3Qppd8RyJFsvYFPNOFyKeW+TlpWuNuVAy8oZ4bPL9siXKqSl9FDKxV344NloBVBvbCNw0gdy3nKkOKEFwEMyfsIQr0AS/c0QsSuUf/v7BaxBmN8uF5wSec9WqIBY0DNBH/Ong2gD2U4ajEY6fZgXUuzB5Qlo/aRRO09LI1JYLGmMHzb57AkDA/B7J1cYKjfIA2XLucE/Pd0Z8LtRwTYwwdja2HkIhiFn7UskhAE9IefvoTOqEJXJSLX9nHH8aWdHLzIADSc3+73qT8USUYUS1jhaAZwaQA=';const _IH='ec6f653d65b0e2fa55c1f82f8c10756d41840d20ac61e42a95f19d2eac96e190';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
