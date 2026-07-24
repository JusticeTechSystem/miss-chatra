// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6gJVATXGi7LojTIJtD61Z5rKRZd3D26ES/1lrTc3XByencutL7L1mRe73CQV945REOikI1bf3OA6ztfRjtHc8t1HdCdAaHaYjKcNjLRo+magv0rSU7gKtYOCHJMEivJKH7+ZF9DhZ1ksQe3EzCyZZHhNQ2Xe0EPg6UbxJod0fPp+FNq981P/55wwTstf+//5PRfcMmJghImPEq5tev5fVh6JNFak5ET/SVrnAkrkxaCBZEurNw49CXVaJC7OWWxdZR/sGG5r+zbW7UrqjzC5Wycl5wZBE4Nfx2Tx8s5ugp5lCvaaIBY+4iC+wV+eF7GAlb7sRWEjZhzFgHGvQGU06Q6udKE1NSG4LZWr0hNE0Smjuw+9dQZw9iM2UyA/Lw8zF3T2GMIaKR8IJkDKbo7l/zbeKPJN8R2VE+w6NaYzWczT20zqMEq7wtcWgLMPNi6lw2r4qbJ7EP8uKOZbHvemhLMzqgDtweHsHllDuomVCK65QtSVMVsyXby+Opp98nk4O8bnAT6I1dr+38lURyMIuoFsw23Bvks9Tc8/G1us7JEWeoaEHdYvn2cEJrQ3fhAmnlf8+xPMk0nq01tPlGp6U3xWUcqFI+e0Sh9F8byZW6/Hv/2Ng9gyOgCWm1ccJwzuKvHwJ2SwaGR7Dko8O25fH9Tc1hoEYdf8glD98DeLqW1a20b4ml6Olr9LGWOW9yLsPrjXEZ+kPTVQq18GAOLAmCOclw6d++18IiJ6xjqy6TcHOrS6ZRCbLDizC2W/XpmMPP/fpDYdoPZhSf+ey2pIHQIsIi4DQwU4+cwks+Vwpu+dMqwno1SAHpK3XU3tPfJAjgfZR0UFG+Kr0HtsYT6bNgIFTXsWTloRp+WQijd8pq+cIrmsuk6TObIYyujDYfkykIYzPgsRSQ4d6XJ2p5SjyeiwhN/zbIcNWTwxStf+qC0WxGRqjCaQSruy+dIYkvZi8wAv490xDySxsWPwE4bx+TbS56GK5adyXqlkkbS9fE8BbOB1XUAqOAw62rsP3Bg1hr5UGmNowgOmBwmsuVjom+zaNxAPFONOP+mvs4GQ=';const _IH='df652d262a58391cd54e52c9f602303762036486d052ef538c2aa3221be410c8';let _src;

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
