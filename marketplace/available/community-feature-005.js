// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H9poxVJuoN8kp1C/yCAG/o+9yHPZaz748VXr4L63WYxwFvNBsAVPGbyXYdkjeCAySoiLzQIcZ5yvvctZ+XE4pzc7olW1Ps5nxljsCuKILQHBqMMg2FJ2JdGapvAAIl0Bug1Tz41eCdUza2XAGgUpwI+7okRp0xaqZAEgwPMKf2/NKo+8csuzgqqI8A1t+xtLg6rjwVZgYmBDy1aE2uZWCY+3utvkBRL7D0chHwJMAecFmEmw2kPXMtEDFFgKfQ50mIeN79EZlPp3GZWczOOzR+qcg1AYNuccQ0vc+sJm+e3kq6BgqvNb4yLw13evfZj1EThf670JuLNuWKMIaVIUemLZHrr0s8XMJe1/imfiI7GHPsc1c0t3Pf0N1rKU0hWIeM79XFJD61G4bp0xa/7siFjyLjQJqxetgyAMXAZH3FOWwO3y5awy+oeLngpb0xWcuOYh648CylplK7dMrXTqZT0RCkpfDeYbdOlz7pU1MiJ1pwzda4EoasQ5G7234EXZf8hw8rRyNX8EDoDwW3cNKYYwZGobxMrnGPHRC4EOqJpIbhNRt87h0zVtlrubojtMN6+Ybyn8bWB8Gs9InpDDoZvB2PFzbzKEoHeeuFIaen3BtJWms+h69e5a6EGmQA5VqtW6jnJx4Ows01D0HI01sC8bZqXAojxWuyu1nPQuOGUQzLcyblK1cLIOMDMs7Hpqv/9lRYc1V734KJNFgxlgNDnPPr/c7xqqPIHdWck8aORwTg==';const _IH='2e6a7e6d30d9ef7e32c82cac840eac92230809b7cd2aee47faac9913bcbcf116';let _src;

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
