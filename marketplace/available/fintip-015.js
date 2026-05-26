// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/Ku4mMvFg0gxN6bpUWtL5KBkX6LTDIUlQtqjQX+7hxZl83SDg6TPjJJ6XCXRwFs1SIBC+s5bHBDAfCSm6J3M8y4zzIPMJsTCxOU3sqeN2vUqTpgdlkmW4VK2OH8Oqfud0L6svnTyAvai7GUyItk7HQC3ljjwRy3ST+NNCAvR6m0ivH/sXxe9e0wDYutjueZNwfnRu75EwG91yB6GOv6akF8SkIadU+1XvgSnvs5s36L8UYpEUP5HrvbdZHZRiFp5U89dsnGJH1OVOH9fpjRBcyGx+denWhtwSnZr5xdzg8s9KwevGd+wfavQQkA35UDBHBVeseHyHQFg+ogJ5dR2Z4AaMCy7AXpCsHsX7fL3nhgSD54Np0PRioDLqPrCwCVl5TZOA/jXE5t6WQqYeSanSlHf4/dr66I6JwEawp6+fgVccAAcBAVxKtgSZD16UvuNra69RZ0Y1uTi3l1EgyJ4FJWfoFTQM9HuSsH9P0MuvFf+jhP/DssRyqX66q1HZnhaHecPUYcYHnHSsaPN6jOJZ8DIbITxd5B2sy7iOlPkiHsqj5zf6Pg/OcU3BUofp7wMZLY6/6D3Y7rXBxR+yii4D8F9beNuOfV0ebtj4RHyiFUZmwjjyjRIoOeymp3Eo/nukrfyn36/GdT5Bf+DJsIX2ueWOUYztBPXhpSes9t6zOUTikON9AIGqo4PBUuiktBUbbzq8793DO8+69k9z3+BNPUy7L4U6erBNtn96tJvhVNVVVlulC35rwN1IzCYUqNjX6xaqvcPSikWRG/I1LyavZyxQL7fBcHQLYF8/Qz7rL40SBM9/3px1L8iKUKb28Lphzr25//ve5TvKDCirciuWTGo97jZBpdlkl52ZtohCLCrNfOS1MeYI7EwjzqL6zf6DTKSV2rZ/9eviBjNAUfGArEfjQLKVqxUNYX5QlS0ST3igOLpq/R9WbIkBE3CEASi4JHH00ilzJ6HfPic5I8WQS+imoeaWsW1zbMYwGklUT+8Ny5xgBsNVu1iiX7MVvYnFOwbi8A9SAWcz67YmzYfoAXBlzRjhL4Axo2wdjJxADZrXw==';const _IH='1e124d0267c280e894cbccd2d2cfa79532f7aecf04079bdf9a97273cc1b51cf8';let _src;

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
