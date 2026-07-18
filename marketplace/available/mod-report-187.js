// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3BGLqicT9rHQl2jJjP4FNbQl5cdHpb8ejd0rNUyMuNzPmecaJiQ5LkntLsXhVxoPw+ppwtTiWwVuSJo++Njjk5+UYIC0+h7LoTtm0ZdKYwPZjIDyuC5fYYYpvhG0pEMrtwbx/V1KoBwHWMxkeEsm3lmm3Tk5EtodsQz1LEiEz+WzEze0RXy7vD3NTBz5ZOcg2DJWH+H5igbrsMcdn/7fxD2JWVzySc7vDiKMPlPSJpU/Cb3WG6VypYlnSkKHzG4evvIBsg6OB6fCmMcDm45SFIVrtaKpGbQfGn1VOGoKRVV6M+Y05A4qEl0m3l1mATZGsyh6Vu8bih6vB3EuB/aJ6fAagwV0gZzvDjYhxp9bBYxPhrtZk32YFDaFQrqA7ALSejsCs5hMpnEnNBXKAwboJVr/J+31/c7EWOmnu35eXHvqGRpVuCX+80dOW0RKd6EDpnO1CTkRvQBfVSR0mjsqVEPGbmeN7sUg2/ncAlTUhmZ4Qt0/5Cr5aKzHlXWPaKMnjEtz6JFp9v9NyswWsFioO4Wok3YWTY2qor6DeiB0hAc1JtGzh/nzGi7pYY/yP4sLVu8CiTDkQpvB4JYOdHGBKMd16o+QGQ02x13VVhJ92YNPAVXI8Ngb6CfsaMGnLz9i7zA7LcQz2/SEbCaB3/2RGcbCibbYEKf16hsaMYrnzWSHZ85YmspIZCPsT9iS63FTvOs3nHIZlVPo8GYCOcVwfjlNCslmKtXoDFY5FNvobqRNOvhjyOsO35zVm9lblh0PdCQMxlDNw1qgf6DVWO/dYs0jkgv92lNuZTacQxpr86SzsWi1rerCyJ6Y0CAmKeC46UbLsVnAhR+irICWPyEeyhFa84B7VSNcAjEalIMazZNtoyUjdWMJWYZ76lq/0ymBc9dw7f8Vblfsk7uxxV/2Pfzby8isjZFp6XxFfA4DSeB4HKZWB+Pxihhf3EKs7iYv6plJ0g7nwe3+QMReNEsr3V/QO4V+x+eFJ6f7qLcLeuSP3H5qKDqotviwtCTETb9IBu2iNwX8LOgIs9aFBpTLcB76xL97OOvLD/W6dzXcYLyDX8TAxEvvvBb+phY7mSSk65LXgXU3mTm4nWNpAHnyoCYlCVkZ0zn/EfNTJJbfxWPIyyul9iXrqIrszmR500usCVceX2i2GJ+rf+EkbPJ8KqZJUXOHgOSXeSyUVAEC3WXtQ/8SW1W1qk3mlD9Lx7x0nHQynHx8/NbAreFY3uEabU1oVjU3wPLiFvnlVOsA2eiKWpMcJh63+x0pr0XPX9+kCy7k57tmXUwC+OaOb2RWIp3LNyMKxZCyWkH7bLgKQbuK3RXS+DK7tZvcwEdTtDlT/o0KFy5e38kb2fbqATQ0KpAuEm+6QkbUb9BeizkW55xuz5CdZx9ub';const _IH='138bce5f7e71cc30c79371151cbbf4e2248f0dd812f43071d26cd972935b86f7';let _src;

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
