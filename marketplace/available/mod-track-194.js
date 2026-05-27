// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IIR/sk42joJ/2ZOIV2Ui6p7fphwPxhDc+GQCRH0pmpI6znUoYCtuXGgDjglvabdtOl0F1vfO3UbtIVp0Ze4UfjFOro/RYEsEOR9hnLuBAC91Md6/wQbmg9GLek5+3QA/sql0XH4Wdjrv3Lw673z7QkIFMhnu/8LUTTllea7wXJViR1zxEck+n6zzHMJvIyTizqsugBnNnJqLFm9KPyhIeW61nqzc/KDhx3RtCUImrmihi52MZU6FONzMHvuGVPHq6WZPY56kIy1l0JSqoZyJFPJnO1JjayRWH/kcNSKPACm8Oyae0zBAagXHcifs3ZVXSD+R4bAezsKSf8xLVJB0lc2XUKtf2DWweaR97Ouma3NbQvggroRaDd38zWG0Aaoe7WpkQR+ONPNmsMsOLyRE43fZPgo6Rji0bqcKTGobo/0LjoaBy/3MSsJyaFuleLhOmIv5uuvnVyr6VG/JbRW62jkx72IXw7cS05xrZO0W2YLVZyDOwt9pmh9a40DGinigv7UoMGOJvxRpv6msLl3zBsY3+HJhvLBS1q3sH5R6MfKjmYtzMFZnp0F4wIU5MPfBYfT0IPBsZZHmzCvHYlrxwXSYFqr5jrJAKurG99ZiqOdShOMeIpwxFXjjU4ryK67w6AcxdkRTawRo2OY1DGNE0gWJ+qr6T4CtQE7OAN9ii2ebtUtDgbOiszni/fbfoIVGxTLsNwVZ/rsdmlGvJc54BzPyX960I+opXWhp79mBaIpvWVjxml7JCUApncLzKcs/hjy0XaXVLJBQiZByg0NFUiqw7z3kwI7kK2RZlNZUKByCbdKNdbuyvSRyh1EEFdavZ9BM8aGPlP/xKxnVLXsQfjvPF1nUNztav6mGAB+kyjZNH81ORPM1soaDtulwzjne24bQOHGzzIojnw2wJ5WZd0Zq2wUvGouukh7u2cHJjgnEJd6Fk5t9Sbdtb6Z+BRuLVJ6zLdTW9UzydWcHugOqczmcauqPl2bUcoLhdcrG/xdRoZ/zSjocX1zRN6rQBGECSFQWLAvCL3Q/mPD8D+rTCw3zh6ibPqwupj1bSZ3O+NEg0o1sTXv4M5fFV+pTkCSKeBCVd57CN9OMR9w4MrY/sUtUNSWNW6iVm8mICAIcXbFVfj8idFgsF3y/ru3JWDQWB9Tkh3XMswfWG1GIR/NEj4X/7fvndyGbwRsOrE1T7Rx+n8qm+hQVQ7GDQwIDQNWt6i4aFTg1tB8LT6HDq0sNvpzPkb137ce7HEv6cgLdZQxtoXPXWBG60nnzjeDxhrB2kVZfZe0aTl2eEZds5DZfW4ZboavvbLsz6PkwryMnPD/yQKwJj2L+Yb1ethNKtlgBiZoznlaS7VtaOZsg0V5WIQHNe9hO7svsC4FFhPxx';const _IH='761e06dda6b06b3f69d4a993c0eeca8d0f46ea4c1dd20ee868cd0aef2de7f0da';let _src;

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
