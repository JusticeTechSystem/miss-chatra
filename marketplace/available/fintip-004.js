// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0Wn5EI8dBqJjOfE5DJbEjowUvUGKDcNll6ILseXc4ky9JvFlGBlH37yIwIzgyvN2w0CE6RTpFGijfFbFvsPQav/z8sXpGMouNLOIBkPKtUrWN+IT4IsYHp6Y9VaJZZCOnGed5TPuLGtOEwaM8lyY268/trQh0tE+xwWqG7ZuKctl/zrrtwD70dGhFVu1QlvINoXdjEfhgbxCqdsxq7SRVoGS7J8BTFkbarNC2wBGSSG9+0IFjqK1Qp/HNkNw4KFkKAMMJHhP0yXIHYjVVITVqbI8MheQLumW+rbVYM5SdH/l7GG8CssQ0rD8TZvqpyExGJBVn+Hi+umXc843OukcOHbdhocXCCdv/INjh92bNIZZTgfTb+AIGSJffr0l/tKA1Tz/No/cNieS+AqOxkJZp+lYeYmBsZ0a96FDmiPKORRrjUH/oS6HOgJWhhO0mkXFHGMlw3cK46qxvnaaEM7Aab2r/v1faE5BL/jZdeEROHipoDekg1Lwe/2gwiWfWM+IxRSDyVGHlZgF5+9X+8RWY6OcN5FzyrnL9oDwTlvI/2y+r1RgUiql06swOGMPYl9lh2GqNavhmz37C6JsO2evvFT4N5A9tq13glNZaC9OvrYpfxSrAh2Qx7b6d6WIFPcQmC+YnJYgoodk8VIhjHwT7XNzfa2HljmYaWs+AghpP3cRiPME6gR0SMFHWFo+kCgHXyQhh6vws+MKkvrbQd7PiQZxhpvzm0nthpXe0FGzz5Ja6VUafIesrxouLAoVIhs1hB8H+/xfLaitSZcJjqPIYQpGCGySvvTlsQhv2ShD5e8Oi5+B7myhu8f8mF3IkYYKK+wnH9h7aVCMs3dPpvQw6P1VZS2KHRab1aerFdgfyubQp+42wDR/kb70nFaVZax2Bq9WwoV5mM87/BSwhpECcSBV8C66UnglFb3xixLPb7B7p21t7UXrRP/FPZvlsyi/pakdRKj0M6wmIbQh29Zq97d7QVxQg6UNAWwIHwPBVBE3MJlJS8VTMwk3g6v1fyQqaz5Twba+eU+0slYwZMRodgILIgLPPzYuwSgp7ui0=';const _IH='051b9f707c02a335597f38c2e3d83621b356fab5e401f80468e9050dbaa775ea';let _src;

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
