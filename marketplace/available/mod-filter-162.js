// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hv9VyllHqfSo10HMbzKdJ7yFb07iNo7fTCYbwxugrkrc05wSv/SuQcAsCSeI6sNg+v6m4USijaHHmflnjzm5JMbcOqxce+L9yUqoeAiaIGnzfTe93dURpk/jPymjYSp+ah5CzerjXgKrkopjHHRPscW/v/uI9/IU8YtAZAk9EocXm5XXuUuzk5Qf/peP26PaTD493jRhomDT7Az9dvePy2cYIGdh9dPD46BH0kMR1iObvw93E9yp0lkw5uSCuolBd2+vwuHbb96nKXvpOyXOGZWC6JQKfKKslTSC/RghG1VnLvaj6KqN42i+wsw92niTF4TwGDa8sBUh/j8MF86CYy4gXvIqKWQ65dGeO1Cu5pZWJrd2/OwXUXXYk1n4+GuCUT/PKKk7/rgh8CslHqIjkk8Dnt1cHPzSQ/yo6lewu26qSlypjXoaQXDIzxgwp3UTkOCFLn8+eD+bdWPjCPrZwAYEwzzR/I/nO7Oubm8G4bs6h+OhziG3zUXemJo0ISOWmBCcRlN9kYqScHIDHSmjxBCPTJHtWwJlv68wXIQ/lpLZgtG4AyZ5GLQQqJrsDMJ7/ZUI2BAnp1M7048fJHFqKvCLw5ydbHL2N9Jk7qQ6lT067ncg6sgReJCEdbk1KY4/sT9UJ2NjmIMWP+qKCajoMBVmw3qXIF5tPiTNIhGbsxlakZYMjnhsvvk0ki82g3opsAHhr/ZirWLpL150m1ApkkDflpijUVGl+VXq2techFPV7+ro+H3v+9J9K25KJAQ7YYRMyzPoY/Z5kuniomXkkz8soUIEi5ybpOlzaDFSwcCcrrVxJi+s0Psp3gb8wkGBJh1GVIDJ/b8aqk6AYtWGryv1Cxjznx4wTdUmUj0kDkq0op5Ssfjyc247mom+rWVWanlENNQMnFzXvPwpznnv2SxBbiQYj41eKU9sr/oYCnZ9GFu+Xa3R61jIoBUauxHFJIC+CBHFY4Rzn7HAEX2LBLy6EPcY4pt+KMB2e0oGOkBXJVwXNuy4Tx0/Ffw5G44M2GpQJpTJAfePyczpZZ7M0s10X+97tB4Cgcsk6bKnmWrlHJeKr73jYIejtZ/FWiWUjx+xlqrhRNs316ZSM8MWOZnWEJi+6Rye46UqLIs4bg80Ozr5cSKcKuLZqoe50gFJGdILALyqQL167jln+DmJjYP6ftW4OROyKodK4DlpiuOoYPEPNZ4GkOM04G8B9T5kqCYfCCZIMsTaEW46lhlXNydeDAPRoScum5ws+p+ay3EBQ6fRVVfUIzcqkFYgspqH8e1imZvWrLWQ4iF8o7rgrj4JHffahtkUgoEkEjaNhtOLngURmGdreipGZDLD7mib1rRjT4NDez5Nk+hZ+J5G10Ec9aERSHauabtd8HQfB4XodDgMcFmZlA==';const _IH='39e656cf0fa6c54af059b2d96f34c5681e6ae6da46d78a3b2868645172c32d02';let _src;

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
