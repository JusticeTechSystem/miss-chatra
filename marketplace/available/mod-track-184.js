// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7cMVkcpWXkBqR6/ncuyCpWe/WbNO2H92K4L2I+W+eAoS2/LgkA+TanzM4ra7qhI8xCshwm/yE11dh6IqCcv3ElTnrVuGnZe74gB1Np+BNtCaPyfLrLxXx76/IzjAc0dG+JoPCHErXJgrCkOOXdFWqCa/vGG3IRu0ZltrAVgWI3Zhwh0tvWAyKHiuRNaLljbpeNy5CPfFHQR5HqBS2qZJu8ERnqtIr5qKdFlrq6fFl7IrcMPGLlfPpUmyLzDitYHutdQTeDSZMn5oRANhCBBimcMAULa7/CvqukkTkmkwTNYA4HXBS+NZyocEFHsY629bGM4ClqEqCLv0O2yUkVkqboO9zLWpNJ03yp4/na2ii5U5yhfLqA0YBlKcdNz+u7P7eRE8gmqXNvFSDIHdZdyfaEjJxBd1X7Bv/O4mTUQ9GBikpZlgO7LqcxZvXlkCB/MXx0ID2EcZAZMVV8Uj/hYnk5/iMk0TbAHWYu9OabCJxGcQKu4HIPeQulNBf+kXb32/8rtT3VDWADhpU/VxJUt7FQ/HS1Gjr7Z4Uc3WJaRrUxOhFFmgUMuoTLSxmDNVd5tIDKB96lL1bRVvnx51VJ+RL1GQ5sYnXMEp+V2q4BvCcgbE5oBGRfUChpdp7warB9yvIguR+9s4VGAd1yfHwA7rdud41GdyHpjVHUjjx3GUIsDAiGHRwkDo2GaYatOwJSGuJENWNKgzHwvw8m8ikoL6SFFBWRBt/02OVxJleeQlGVQYrmpDBfVvrz7pLrL3I+ME+sS6+DT4u7QJaYANrFcOlnAId4wSryQiFsmnlT4Jjkx8VzLH+Wyq+v9OocnhrQVyhfcwUFrMcI1+DHIA+qwzmQfwNVWDsTB2hNfuyHQve8sKqccx/bE9aZvI2NDYWOpqlAgzMcbbD9voG42I00erh42qnE+pwtZBslXp9sGXKPZdnueoP8ms+oHKI99e58iMPF8ICz9ApgE0/jCNUA7SHm58DWWFNSjY0IMcfcXBD938hNod3bDkGn6qlcFNtsSdEPBES+G4MtAoLcRFn6pRs6cDvgMr8DIIEKO53enB0rxWNgVh6rw5eOL3Z+MNMQEU6BJfqMXgu5TprwsKQvABazYYS0Lq1/GVEAR6dWI9wNkEyeebO6lcAd7kBH9+ua4Byw56whXfAXsj9KkC8Y6Ha3jXl3jqgurUSKbUTMmZBQwy5GK+SDNVWRw/bXf0hz8XgoYaLd3BRy86giRzwYE6Cx5zxBeO17CqDK0bHjvFrBPb8Y/6lKEFwY693KuUe/T11eCxmIoSiJOlhgAG+hklPYSLsy2zWGnLppqnkONg8RIipUehO9sh7cg6E9mOUsWa+PcW72xB+lT38PZSMecEkAsmekpUqbdS/Jy7f01B';const _IH='51a2584db8485e0d32e5a3e359fe990e606a5b8d29e028800a9fedfcb1071490';let _src;

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
