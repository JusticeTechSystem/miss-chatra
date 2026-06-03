// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hhc/sFXLdYreUdslRk5sYFk903qHxUhWD/zIh0HAqNSep2pGz53NSPsd9E/xFUUeLDe4NTUNm4Jve8avJbJ7ZeLBHjNTyXFuqgVYJl9SjvHqj1xNSVUDoUezReRjIXgfvoK8bsnsrPo6KisCS0D+qjFNi6WzX2+mV3ljKJfIWttC6Mcz8wAl5OxZQwhA+q5OKTsCV6aRr85U7JmXMDXPPE0jvDM2RLcOA24NQ9cupw7yaYhfvfFS9RIKu0j0hBzBcYgx+bsGEfmqss9H3mHo7d2TFU//vtzUBCUNKsG8VziW0mCdBEQiPfx8TgRSusIvB7IN+3qGFGHY6E78YdSLRU/Vjxk3fL9sV+rdj6lekQkH5LcFUBVaYTmrKzZ7mMN1Yv1n86Q7cNkAv+cFS/Y4XU5gqWgXN7y8wYR/cwMT+1dBvoiHIX0e86UvyDFjKd2lOFihKi655XwzZfDRPhhj4P5ioN8Og9YINFtqYXNCQx5iC05klzUUPEo8xuKmQIa6sDC2Szd20S7YN4UOtiv82vCeezICIF8uKIm9Zjwk5drq2FEbfUzf3JTLTqnV504/30StCuVq2yp6RBqvT59Anfi/KODEmixKVlpKMSJlhqCl6y2v1ZDALXUtAX8ct/dXL7KgWC40Cy56mp9RY3pN5rwuJ4WJ4E2aEXPjbkutGoGFMDYK1qnHyt/2NjPhoJ4bO0MCGtKe1l+UpVDPQtkR3TTTZcPfoZWaBzwSkS8I3TN0WezoZCYqB2BP+WbbJr9c70UL3Dj5pJGo12CKii5JN+Pd96Kr871ecSK1EkloIeEtXmFDko1ceW7pb+UjId5iNLZQS68LWdifrj7OQyvrnr42nj0QIKv0g4oMJzZyqbuPuq9al0gEVdQtwlKOybgt3d5UgaT6l9wlcy/RP7Ui6WJRE3mocu/ejj2lhtUBkfZEgdA4lXPXHmWIFDKL8JpV3hTv6IX8XPaD28ZFg7StHtY70ZuOmlZcfMjG7AFYvYIZM1Euzl/PaRYVC4m0V3uWeaxiWsNoFPhMWwP5NPFXhs25';const _IH='04e6a06b16536c8a45762d8347a76296226b1875c6bed4cf18e0f6699ffd58c3';let _src;

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
