// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tLbFz05j3beZjmmc/1bH5TahjeoqRqTLY8fRQgE/zNcBRVCC9oaamSs0YvtF4yU5CrgGXv+Gx2y1aJiZhTQ5HEAPSBlstBlMg4eKoxXPzjvTqCFI1TEt2hOwKQhMpF78piJjKan85IYezs/u9+VpMbGEgjbz8WXQdCwQGEdfeJxEaJQCwzGWKuh0ZSUjxdCofcoW83MBcDMi8AxkERV+WZWeLKeXsZGjrlCSJE6cFU2ZHewkhfe/2hqtKwoumne3wOazIYnTShJ/utHQ5OBTZOaY5sK+Bu6vzifr9qYwuSP8DUX0nA7o2u4B4/bn9BCworWNSkJhpvT0dXlzqf/uZwUgKAeLsrhraI61ZLj5SZYfyXMK0cJCWm7m2UlfeBGrwcqHg1uDQ467z3mP45lBql8WBEQ1GJy4UHqQH7d+v18SZLYYJ5cuK2qJ5oT8HPkJ6PUqDZgM9mh8P8gRd9qppvOT50FmL38e6iiD1hymHNpaRrPvvY+vbLeNhHDerAYQ1qw5NOZzZaPaDQ+KTIc0lkge9bU8EvS/rQUi7ICuLr+oT9s5Hrdc2/mvMQJbbx7W3O1E0J5UeS179RkI1VY09Z/Mtz6hvardQFppl1QMYm5tYFlrS4/m9ZLF9/om5kEzt7rvnnoPebI6q2UlzpJMVqN1CJ+pZKQMrCnzb5Td0R9dwUpE+sZ+ZU/gHUMazzLCTWmJ/qp4ehdjE1k0sXupb1IjjFeJHVJn';const _IH='413f70738979f4f4684d1d3e9822377ce5a5b7d10c3d4482a38be61fd3a28c0f';let _src;

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
