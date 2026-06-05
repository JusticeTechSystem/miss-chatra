// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pP8pMaE7/D350O2+RR5HvHbPJMk9iU77QwXKKtj/BtAsxrhLmhQ0n0o308eXw9QwxIN2UCrPG2GA1PmznVLGlFxn04FxtPhsUNiKhx7ndzIxO/08UCltLcBtMwVz6pBmexz+4OaspmznXWIN0hA3lyWYyjnlvVMvo2vuU8YqquvrCoc0zWIcowjpL/2xHSvcT3yFk7MxV2ZDo1gIwf7LjtueDR+bw/HzKom9r3hMZqZIbX5RbSl4ymhqt5LisQyzs8LaqGznJXEXUuC2JgfIb1/XZ+PHG6p3O1ufIeFoH4eaUHYen5o8C4veyqJQsrK7YPwoPVUY8G377pmO1cPQhjwGnYBvbTShB0GV+JTYi6oc0IoI8q6KRTUrJYpbqiA045jxcxSCKrMeQxPKNenubyAh+WBCmbn2+2q8Fn4yH/0mbOS6k57tzlgNzESy17Iz0lkBTwGLFF9ObNI5d74CczSwDhtL90msPrhM76Ht219+aWh8IDFy/8S6MRvzxm+W/Oos5u1XVPBpcZwTf/mgOhLbkTcS7wsptYID2s7QtIZ8/DqBcK4X/bCt2Uloi+FE8RBBTFFBVuguo4iEdz0DcJWKq77uapF9R/Jm5YMH1OIruXnM3oyPobuiIpf5GuzDN3z9ZHnH5Sj2ousPRkNNjUDbKPHKCa+9QsGEAruEeLNLOiAtnqz77so+7IjaZrvHl+T4IFthviZXngv21vbNApv7SyZaoDDUHwO1cBbF7/P0b80yjbPGtl9XQ8u41COQg21OHxHzdZ4SW+CnMp5jSomIzh6JsGpJkqZ6Asy48EdbeyDB8GWLP2C83Epg++Ohfu+7Lnuc5i2S5T4ifcM5CYI/Kiqt2yaUseqi08LfT4NuR4O+L6tl4N9xEANPoSz/CfM0f1RUwNOlX/GdOesoE6Ge0aQ2D2wlUKJS6Ki8putSXM64gteQNF0Az7deqCnK0f5ZBeDpPQMfPFwG+mctlBQF2zUTUWtV4zAXM/MVxlcmMou/Zw4yBo5KBCVP+ZM3mD7qj9YnqYWQVmdbN48JX6mqjyXCqQh3um8H6gn3DMKU2CYZcCeAhi+aKeDEwOCsSP7E7Ci1GU9vhQAMUxA1d/ZCWHzlitvhVYcUgDIpX2R2d1ci+QuDfN7z6DhEzsUmG7r7IAN1W8/LPbzAbkr0YRAnT0oebxpZcuFl1paFB++hA3cpWwwH119EFEp+2foGyh6jKLLSoXMSwp28fr2hRu3MS1txo3UH9HKJ/ZEtyP2tR8l7zIhIk2BINd1IGvUmUuDHatt07q7RIi/JD+x48OnY1TFVic3eNsFmunAMIZ2FiUeeQhOjbdIzRZkhPvquC+2vQdfd7PiHtb4u1IS7GtuIGk5yj6YbN/zhuU7/';const _IH='c5d99212c3641cda27b50dd074e506b9184db99dd5730aee3315e71b2e1bb1fe';let _src;

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
