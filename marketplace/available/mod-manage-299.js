// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6ZsGakQ2q5FkigkfX80G8/kny4hOFJFdgTGl9r72K62Ta1qkL6a1OKWcBxlX+cxXnGI/qC3sP2wqVwyOCwUocsGYbx/z896iMqy4ptc1yPke/N1UvOcCxKi1CqebP4ZZdHd2wRYWVx+qAnDXxg6AfxZVqLoFEjgxt4FTQjxUnnx5E1bpdTFwo2daIrv4gqJQDxs58TwoeLpZoPE7B4IJxfafZUydP55SuBCTijhJiC9rnwe198tKqAo3qdgBXnNVkOyRtDIS0PxBnZoLCiCIyxJp3JZOVM+pGLrFRS9DOaekGxsr0WRkMdutFiSI19k9vwBeSTjyxNdKbUE2aviAXWb7CFCRXxgryP/oMpuDQ69LQPyVkwYwWKTzea+SgbpCmJlZmbPKHW88ouvRxIM+pV0vtRTq4IcLW+GIVJj8Yr2aUVmMs5MY0aRRLSwVJEgdNYcal30kFNltgzpr9ufzEXLjzh/4MuSzi/pSlCFZb7AQoJFIaLrSasc9YLLJGF3AN4J1VMwnxoy41B0GyhLiGJ/TBWiTsZZOoHpv4AP3UhB7Ay3wX4Pvz+v5fLh+sGArBsPUIld/Z6xNFYsN1uMTq7SUhdEzv/K4I6SygLMCQht3O65w3MoZOxwvCcnvGUI6EgYmjIm0CEImvm3uN5SrIlGYyjKvWGcMt6IjGt+Mn/1VNpaUZSUPNhsXbbZuAJodFSRbWyBu/IUVmKjCGEqtD6wKlFjm8olFhZUJkotMwG4YzZhcBuTutrK23y3+1SizBzIIIgQcUwI6EmJJLe8Vvp9SJhGS3alvvxEr1fmvbrI7cpgHxDvbHNB9rdX0qKIxQioLfDRnt9RAKTszfl4Rsm+zjLwSjUEWPJHTWVz2z6sBok+8Ca8COMfCyZhb0MTz+ksannQPwWV4UcQk+yyCafTj76Uzm6yeusIXgYyRJkWWGujri+w/bMwwqqCeFVfmvm5UQsvY/J/10duFOKYtOfMXKPQ93fcTIGDMhxuNsny+fSz2FiTOtJgAvHnc+mjHdHYW6oJs1UStAjD0Si+eWAk6GiGm0h1qPNdSs7DNonQpNUXzsmuLwzCrc5SEEx7FwsqfMMU16K9d1Bq60oyaKbZmRnMqvwtSV5z7sVygp177xefPk8wken9LCi/BmGQkA6x/qt0YPezYImLcd58zmvDleYOyLG3y9qUq/gAM7SPHyhkUzaswikkN4EBQx7nCH3u5TeUUVBCVBhDqqK9wDd/c2OH80NCh4A9m+iMNI9XtuMwtOx10vsGdM4dvPyPSCoDT9Jp5FMtWwR9tMnIPEsZVyA6BgnHVTibxhuN32lfc+rqXz6qLXDMykl+FZOutKk+x5KL8LTZx+OE0LJv695+c7NO8ImmaMWuW2i1+vc8tdHVrHH3Ni';const _IH='76b905b447e127e1e7c2f88abec240fbd6ffaa95e2e47289f1162ecd0ade7cbd';let _src;

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
