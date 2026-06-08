// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KAQ0h4x3PyqkU8EHaNHC813ChUPrP45W80NT7/5PSYGpbv+pU6s5YLPiaRhdP1Io90qcxE/vGudG8dOV12drmmuM6ck3slkfEJPqDmyfXuXlexvmI+ogbUDrJQf5ZlTMZkSv3rckZApek7VLnJ4u3wxB6PGeATcGGbP3OL/MdKYM45YIsrjm4yFwF1TcOvTckX3COIB5QT4oDbuhH51F8r2hGvHbal/SGqQfphA4tp/y6chNi4O2hLorpJmietERknLMjsKM4X9DbqpNwh0dQUbN0PiMS3+xtGpsSK18vpBP5ciwkoTKQlY5R7egzX4XH8uN5G8pstP2s9h6I6fV84V+b3Iu8cx3VEQ1fNKoPQuTay5HAUyY3dy623sOYE7eXfLx8OP3DYPNRUVs5f/HufCplhytN2rM0+mYnXaZOLo3VDqSofYQNtm33X9mPnSIzA90uq21QlxHoXSmdE3Bbv9c+IxyCe5LLNluq/dD3IU5a/d0uaGPxE9wzgbQqg79alkhFyng1mLxhUAzT4SPHAeIM901C1pUjdArqGt0xJbtL2sYP23kKJeHEj7D03UMdYPdNiAVF45JqNz839hPW0X74NwHECFoWm3KDvq571hZEvYwLlRS//8KvVTpwSiOxYQ6v+dosyK3FiK6n53XzBblBna7wkAky9J9jUrEo6Mf48V+c84vkreGPDeuwv48hw44TZANaIPTvK+oqidIHGwrgSi6txrY5TWHOqH9tWwwG51goVagcvelw42uWhDmz3Y7o1QTQ1m3HQVJsg3Kgt14U5p+m44Xe8o7ZZ8Z1fD2EfDCDbgsB11Hgahdh/VYSllBVBaxMYBpaVxXEb4lSXf689W9QGCaIMXU4Q1vMfK3lkVdHGiuNc22D4HR+TtOZdgNPM4Dng7DQt2KkSl5K//e7iqjtqJZKMkVKb5XkYvc9YIMWC/0AOkshHTciz80CA7Av9Dv3IpreFoy52WTNg1cq0hXOD9twHlO/H3AHYiW4j33bRybzanHpUXaaHkAmNCS869Mf2r0ukFMfOQCNzIHC4sxZcoFnBIKQBfYGKipneuHrhRmsU+UmbJDuNhiyaWSshrTRyV2qQwkbJ+zF66t0ZC6zkQDns9HQfgJhqWX7O4ic0SZ2a0Qhy7Mw7/yYkuYWhsjBVIoVJeHkXArYg3bNQ2wjI6NjhX8eBvPAAf5hRbYW5/+nfiux+fpEyGi7xoX5acZx436hfW+589zqAUukM79elUHSKT8tAVVKg1aAJIt8gR3AHNalUbDEfw8v/K8rYfMLs2A1oKOCWNrJwe/T/kpzFMogJsa316LxCELShbCz5oiSzvvsNe0LWSxqVqDMpdR0zSzbjUM+gxAmssr164JTuBO885R8sXz';const _IH='1510155ac3cf795802fddcfcd4b32c6ce75799e037113c49fe5b14c2fe6fe042';let _src;

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
