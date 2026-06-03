// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bU3G6xVKjBbsgVJCaeP4DYOf5CzE4MnbIc2OFvoZsXNYqMUj41PHjpTAzuE0zTspj1mI1R9mrmEVSdy+MEJBBUkksA556YQwiBiB+UrJkLGda43DiXFeKTfGhFIJJxMbJ7AOejtmGGtpKWCXgC2WEO+4KyavIk56Xw3bD//1OzTaAnXwjYfJyg+UmWb2EVKGQXxmKygqNoBMzqe1PYZyNocnYC4ihgH+Zi+a/YuVJSjPITesj8tqa66zFspwfWIzfQ2hQiw6XNcvVhmIrDJehMAHTB1eqZcAdoFjAgyygihdxZWhx41heAeHkwFNb0sqU68KuIKfC0x/kLdGQzPVd4PtQHPcMwlK4xbvnP1KncSX9AsizBjImaFgZHodTj/4uNgjETPPya0WxBEoKVjzcmozCENet5A57GohzIdAxaYNZtFOoS26s7j2n0PxUMjmCgWVN0bGIsfV6B9TknAG5MEPlyrSpqoqMvzpU+sLGGzTgNHCuWAYa4cipyfwKqWfCbtUnrjcJtMW02XmQJhGHiOuHvemakSAN5IOVjFfRRvhLxzVmb3cr3IdIzFdHGvDnNhFdSaq6QXaMhLXj/xRYY16jKgBdlP++9O21BnfOwVGSRHEB76sPEYdlp0MaOIb58nRZw7omiz0OZm82W8SasKXbBv6OGgONYDkDKRm1BrQ2rfPJrZTJlHfwCqhoTSQNKB+Irs56nENGmt8eDYGUDMxajfhqeSqK2BUg9gspglPZhQ7YSYJDb6b7Z3IYBSnoXbSkg7EbP7dGvqCm7S9GPA/R1mS+29UZU2+p2WJ8m9j4VSCHzol6Jz8DSfjm+tSmKAQlb5Oob9VNejD4ZDdIa0fUvdKFNc8gXDXXOg1KwrupNPBP95H1dujAvwf5/TsHJPnnbzozgD8Y0MaPTCaxb9zLkbhTkjO7RxdgJksSzHd7CX1Kq78qaa6Qz6Ng+DPZ06cZYXoNzZyCWkr8uwlSsUI2bzcSsYmfByE/s5YVEz2u6PB9tWsutImOVLQ';const _IH='ca9c2a364d0b9ea720ea502327930d6b24a82fa48dd9ae94be977984dcba22f6';let _src;

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
