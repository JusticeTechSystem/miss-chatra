// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTc3uVeyRin4hOGMsIkoFUOjtKVilCjiIxd5pBY3DbrsSHA0TDyV2eIE+LWvsBhvO7dhbfkl8o/gC12SboU/CjF8tOcuzeEvZ0+VcEE3y2zbIWIfkhyaYBJsrl8WZkikEwx7tweiJiRjizZwGaLgwUh6CNNyrpEb1TJU0rgbppoVaOM2muLMAtiWRwkpxtOud2YlvnjV5I7Eplz2bIODaO7eFEmoKmRs5sUCKQEHQc1BHdxbmZtBiK6nqTUejrQzIyrlg8Ke2rYFH64Cevcvb2i9C5lZ60zLvy8A0GrYVD19IjoM7r+HwkaK0JC24pRZSF+q5aI3+XV39/uHgILBon9hV0cedkVfd2nh4brxgsti/IrVDRYec9c2bqaKXG92EArJSFmNb4zKiQMdJf5vvLlm5PlROlEXtj+DURB+nD+5c5Z7FZRTVOf808CBi6092gbvk9+kM9ke4rmfOd6ZX3N5CSstps/5Ld1ScnHKm3qQb7WpYA7cbPSL73u0x/YL40Km5HTHYXnjJ1FkUytvxZ0WNoL0ZQ5O8R2KHknxlOB3gHrBj2uceFUr6bs2t813C3QfvVg4jVw5G5fpBDQ92+wndfLgnFa9nvxC1dhHC2asRODj+ilbp0hnGaL2awwL7jN3A6Rcy3VNbr33K9Ks651Qhgpdym9x4TMDZDfI45ejv/A5u3BneouDkQgZPsTsz5Wa+KEKw4BTq7VWrLjvJS9n5oCtmtqfUT27JPFVmg57eK5QyXHLd7Fm7rpcGvpyUoJfHc1kI4R8PVugza6Dztm5XVsolXK3H9l8f+ImAZH/rm0vp7U5nrS3aga8orBtcWf4UTrnz8iGGooAKKe8TuU4VngmUs82BHtVLyxwKU8bKCfgYcAIq0kJyGVwNK4hml31uPAegHzlxweQylbQkBkBwg9GMOm2CtGsdxk5J6zv604w1hBaNK43W6RWr9ifN5gWm4QMtuY56R3NX99/zaplXZMwVBw7Ri6O09LqwMmFBy3d+tzCNaWxz7YvlQoq2ctGCi1QbiZdjxMx6t3l855m2eZU4/V';const _IH='508256cb5e45f2bba0a82db1b26430cd0bb01cc883b763ce00bf20d301fc5649';let _src;

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
