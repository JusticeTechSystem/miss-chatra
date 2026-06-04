// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CmrR3fTcNwC/7MDhQ1sX4UU+rhHbGIN5YAA6iTZPERx+82rWvHXxAvrDZZ5Y/BZKJ7dEpf4zEZk5fk+9yWH9yWucZlklpNylg1axV0zR1V+660BCFJ+gOvv/JeUQ7zC6l00HGuvVl5YDUO+e3GocNV+uH16uf6sK7+zxn7PA2Z/SNgD7WcI4Ffo4DdCPDuXwzlWukiZs8Dmp/f7j4B01gYuFr+s0saGmQGJeDEFyTD/2WLHRATV7FbBIDgGtI8Dy4SFswfkTi4uJeh/DZQRQunNJAL9JAPn4YX7xW4BtqbSi99Ahgb5gk8vusd5JeZabd6KqWnnyIKXPTw4bP4u4mqDhsYt4eKgAZb26v8dA0kxhfySINtutcyTXR8jZBD3wWNm4ktYVkjeC4+Ov2DwFn5dBkoxxxaO6bORub7Isy+evjuWxoiT6Hn5o4nPp+bDeuzZJMG6zrK4iUP92/kDsOPhRweaqIjaO2hd+/CJjS5XKCcXKEptNofC/1Zi7s8WiZONuzCo1XlT/0lHHbyAhDRBzMt/KuxNKstplZSgb9P+cRZGXtHXhJdUSduM4DHjr1Njsi36X8Uml/V1HwpwYcrRXCQeV0vN/RYdRCzERATNqdfxAsahm2BcLEUXKW+B2AgN4lQLFk4rzDJK87nhR/lTY7oxqKtMcWQ==';const _IH='e030e399cba170436ac6c1a4aa55f9b4342365aeea1ecfb60931712c429c883f';let _src;

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
