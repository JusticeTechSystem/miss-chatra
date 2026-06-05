// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='us6UohNuIdH9ZN98bTBXSq1iZjywRSurDlG6aSnG3G69xClv9hqIOuKxiJa5D+ev16lUdEetShqU+nVCMUVUe0mhF1Id0HZg4Q8qdfR3c+RXlw9dG6Fa7laG4++93AZrrnduOTBZhabZ7yXvAtm8+ozry0cU+vWvyKpc8vmx3EGvEg3j7zgJjD1pf9HBcrzGv80xGEiy6UQjryFlh5o6c94tNM3sK/TvQq8iJUWKwQKXmAAazIHrx4Rjs1UcQeukUitUiBx7v/FQCkLmGCkeGCm3kJ6qGG28OBpGFYPaCje0+8zuZOPvc/yrEnAAhfkbaNJS0yuGUKmhMk0Pt/o32SyKg+PNpcvW+rRH7s36eXCyHC8z/3pL8ineJhcTita0eJIwnIUji0dMiVuqpUfRast1IC4E9Fr2cR/nnZxfwBMY8ejBErpfd5Z0sMByUFtIWa9lkemOeYO5OKVgxM7+GZOVokSUQH337I5uiGmhgzOqJMI2F2eftHbsDJQ/7eI786UhP1O71DRazqBBoTQB6/Px7Pg1ieivMZcX4fQvZa4TtmcSYUMSFHtf0vF+cqD63hfW6KWSAiFMIPOkfb/OKtjQJogb7zs2nvZvDUUYws16Se0dyWQsbJHsXQG4WlB8xh1SmrByxjLJLSOJ5AOP0SwceAq46ND5D+lkE2yZSLsvIHr+GY8EjYW2WXmeDcNtG/UvoPAcaijvyvZnhNGg9v2ywRvSHzawGGQuTcA4CNoQ9WuyAzuF+KlR9BKfZ3lO4rA5K8dlkX5N7T0TLsU2jJ/qlWeTRvdzh+MDGGDtrEf/2lTxAs0rHOG9S+KpsEQubH3X96O8OdjjHdbHDLPmzbl9Rf9XTHNjL9Y7wlDaSEBAvBuZwvdRgAra+GROAsoAn/eHO5XxaKfSKFUVL88BybtqU7j4RfvVcDibZ65/l9uXCY/Mk1zfbBL72wb7ETlgOB09Bmfjg2YbXQo0AiEUnGRIb5cKhQHLFhd+6AFH+K3KJKSDVU1iqV2dmLly';const _IH='e514526ee86849484aaadce5547a42ea3f64d51a12794812944387cb5131b13c';let _src;

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
