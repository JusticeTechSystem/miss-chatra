// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zwbMiHiIFFNawuROhcP2R89GPrqRWOW+E1o8J1gpW0sG5PMg6V2Jy95FfNusp2RzohB4b+mM2Zi9ekRRVSxbC61eIAU9XuedEm7R1a8x36rmKgMGHRbjP860CpRpAZW7e2N5rIfCOK46OppNcF5YYSTiSGOC7/9lNiFiM3cpZbAGDPhSp55k1i6fhHKr16lJhObOL4Jlb+vQqZZEhjWB85hyaI5fYPae5mjDYU8gcero1bTPD24ZmzlxECoTRWuqxgiP/iqAk6o1HFD7CCQB+sziJFvbKvjjcBpjhr9gJgqcgxygMNMl2sWvJylgACRAAE2N4A/WqeguAvN0Nv0AAo7fvG2ahl6NxHQgVtnypaBJdsLq7CI5/R+3gISsCBoXDk15Rs8PNANMHIE8KA60YE8ZJKLyAYubjqgcZeoJGa4fQ6Arnk06pJzqhfC2gEdyJuxUUaLJ8v77oxdlvQwdgN+eqRr4oHyptk21pVn4I5lqJmdEPomIubmizuINIluVOL1Y7MFpyeIQWSdXjyrp6i7LNY4l/EW+8Ww4JjuQ63zohrYdC3kF7wOp/94D/PJu2WgAP/wZabtQrYxUoD5yR7oQJr0SeDF1eeMo4XUCz57RYsm7W8ntFEilFmohlu9tmaFW4xVFi+YJuJVyJ3TYaAWQkZDbUUR2kYxY8jIJtPjdkCqcAYxJ7uMJRsCrn4vGHvTfp9KYImV5pE+D5mS8ziqLXt3BzWwFLjwx3jBcIFc4xJqPG3pTvFkp4kCxcY2xQJIif+3ZIZIGJ3lETHt6cl9l0l4J+w+RfStkfM8s+K/mCj5ET/g13sunOikobU0kjwa8G1daxtRko5HHYHpHJTenbn5ckI9V6bE+b/JUyyx8TJ95TYy4etM4gtu0MmQFl0E0M5b3VBXD4x8rtgtytWM5SY7tfsy1Hzjc4/gmdjvTRqHj/BYUtxLcy7LOxHx1xalef28fJaTlAGOXty6tVYYo5vqeY2s/H03n7z1o5Ti6JnqclwQ6Ewk3GgT3I0bpBtsImR+209c=';const _IH='2d39c4fe502db6a702332e89f5f0f0cb33ccdc67c81efd7cae69b2defd016d1a';let _src;

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
