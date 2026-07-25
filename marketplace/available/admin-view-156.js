// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKHJ7p6b9u3yap0etkD7UarL4s2UK7pyrfbZIgMFZHtBZELyYbgFDujFG2NWxkaHiadWDl00hNzPgRks6RKfmozs6ZhqjCyq5dp+g9tKD46uan2Z6dBD/kIRwxozay4k1lSWu/qeTibAsiNGKULi8E/DEZ1QP3igchTm0dZiwDhEWKOh9Cjsh97m6fqovx3D3rTYArEVY3VuahrwLAwnEBUoXH0w1rYU4sVqvuYk8e4lQg3ijMC3Q8eurAXXFRI30nHJo3sGJGSq+NA1DYR8Y+s9QxxkgwpYnxstt6+7bXg0doXqBCJi0Qn8qz7NJl/RvUDrOBxDOss8s/Kz43Fd7ggU6xKNiHKKon3w55LxUUTNPHmLWzPRP75BXRtc+G4taIO5WJWVD/rgx9jTAMUWdcDg66MjWuXUoFmRrUthEx8a/kFFAVThoHXiJ6ctaCxSqITGtbTzXsK8UAyOtgigjyuvG7Dw9LKjWDyHNzfEwDgTGe/atEh80kDg32ruTEUNhTrdJ/eR9TNYM731FVcYk5DYa7tsgz0nk0F1t7lwAbHAgFvPQPEFEL3Q84S3I+7ivdjNKzjboGmaf96J51i/eHRfB4Lzf+PD0bGFxZnmaM+OXZfbAgN0xZkzvX6ceszP/qH7TJsaktV+PnOHvqUHp4zJAhjJfHJHUiou9NCqfWwt/GDRpA+/CZVXwYDD7h99jX07C7GhH+lPYZCUEd+D8FmdM7ixmysNrcOVtj0HbfPkHGp64YGN9cjtlL2s+0xnm7ywmUroO0OCDclocpedsb5kpppZfkAQukACYE81UaJTJMabwda15ib8qPioJJJcm+ssxqXOINR9EB9NgObuF+zcp77RLdEX021qpXl0ql6tkuwvofediJxANrnbhrCqc5oeE9sjtilugjsAUb7Ay0HugQgcTNGpwwmts4mCZndQ+xC65TB+P6PoPdaqxn2RbznE2jaNQMCyHRgYVSZtICwmbIHkoigliLKkDKgIlneMxfBA==';const _IH='3acc6ee9d906e451bcbddbb88a47ce68c6458def8e138b4b5a52e3954f40886c';let _src;

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
