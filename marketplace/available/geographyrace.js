// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EVExqwPbIVvD22hHPxM8/V7WYUJkQppt00EhP2vuXoAtwYNp9A+JaSf7S/wJki8torPomgA9mqonCP/cG/+UC2Pfp7hTPrsXusDK60RpndBRbBfdYWR9lfeUQZAOxLm3k75xpvtyY4OnOpxf93kVn7mZZRVd5HyCkH3bDGgUqJPGcXCAmFB0/Io8uaLHCYiP2jngbpEVi9YcmNKXOnP5xXyTWbhtIBfOkyWSC5n0VJfulJP7i/di3DFjf9Y9kXjeWm78Wr2PoVLQ7Wpv8bikaN2Nl3OMqyz8guQ7lUnxl4UVGEXT5VQLadzSrUgSjL7+JqSj0Gix74kCgyWsJes+hJjfRQBgpzniggoAr0t2IbcwzZpFoK4TZwhuYVP193LhEwz+/e47ML2veTZaSbIltm7NQkLxUyfnKdnyKmNLrvbW82gg5qmUoXJt9stR37mIXjomJhQCU1Dw7nClBZu1E2c9PquxJiSSzxqgh9XC4suyrdmX7lq2inQdmMBKgGVYeeLhpKtygqq0i/o5WmU6AniQjLcaap/P+dWFWkyQwjYI2+gTUX49oE+0mdnGNXlSWSqIBtJ6+T0lhIyUuEzSj8poUtjZhqaGDBz6oAg130s/PAQIsSX462oCHVKuIsgkBYW3ybguVF8kPt9VlGVxKV93qwY8h1NdCb0rqP1hib0Nr3KDrjNFl20icgRbnz2B5o7FqSfBf5dsNU8WNMJN2uYFSwaDv+dEK56ntE++jvy45HVo0UbFtSmnxh0b3R7GGjCNqHH6WNJ+ppU2JB1PgG+MRVxrHTsA6H1TKjTmGg2+cF3m5W6zstG7RO60NomadaHn12a/3v6/aC77EfkW5k7zES/YTVvVu7dUL0SrFWlAw2DjBEGL48ubg5Fl/NoQDczCFypR5GXNlQikdUXprcMs5FjBnOz722wgcTRi5di5CbIHk4MIlzc48+KSDf1dMVhUb3PoF0/s9hUZvkvkQsLmr7CAinpzi5FU7wiTAfFKJOb/pQKWZapy/IVwLFDtQz9BiCKsdqrkpg3ZsBElkIFnNdCiy4iD+ddWpUdioFiapezNMeQpUD4N8BrB93Z5Im/8YA6LRhPnFKdiBAJHsKCvBHY2/t9ZlnGWr/16ClYndM0JcwpNqMiHXbpra683HwFuzx5i3CebxvhSCJ0RFW+8BlZr/ZkzPx3/nmhtWfNbtpBhJPNwMMemk6c1mk9YCaSbbhuqOjFmagcRg3E=';const _IH='80deb3a87953ad3be0a26f1a23f579e99387b0c6a03cbca3b0166cc23ed79c32';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
