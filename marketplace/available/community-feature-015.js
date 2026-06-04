// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='55LQie59tUJucWOlh1ExxaRK1yK4HeyCS1rsAmT+CrKhWo+drwf6KUMNKkujbJYe1CsnShy9zpSM72/pZTzdICFd/kN+F9cCNdbapFzoELMLmYDKNgCdMmBafHw7qRBNoQiKLG+j2qhI7YvRahr49JlBdWhOV3ZP6QJPJod+E89M3+eoT7GrB5rjOh4DzoBq6iUawqji3Xmcqx9SxNv9dQXN6ykc39DuVkOPBO1oMa0CqyEkYDfKYTlXx6NKqhA9z2PYxOolivwhWA/kuIZExsAbb51Bw6eC60iQSzGbINtqhs67z4zsBx6YlzKIHgzBMVhEXPFSHVTPbOYDcaUaJ2Al2UgAY2/hskQyJyth+pK4Sx6md6MS2h2d3vlLqCa/EAJULosUxEsds9pYBqkuoaOjpeKqJuoEBSXzgc5zCvCy72pF+AWyPGaUHxSYoeLSkQz96Ejx4Gb/sy0kDINqF8mN03fhGyvY0zs3IDH1F1Mr0noFRU/aQKHB/B30W4GuB6WVOn+pRGboC56XF50v4Nnba5F99Vsrg8TiAd75vvemBW7IAPlAYhX9Wtrnk71JVyjFfeumrZWw+/HrvHq+GcJSxKG1Dr5/4viZeXTVMiGBZsetIM0ymp28FaYu4xUlHrCj2gYUEDQ1Hsx2bQucuz8EjYqAcUJiSTQy1JlQQPaG5XdAdc3lyjT6FNf12WO3iPxUUSREcnjULbwRW7G0rmMjuFCbevlv+TWC2+RepGttPEoRIxw=';const _IH='972dfd17599cd581fe922d819ec458811fb21ee076e3a1a3638a46a9878aaf73';let _src;

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
