// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RmPc8eW1dwdWhw3TATZGbXfgSKmRpebIAtUbth5/5xvEpbZY3K5W3XCscAgVYsN+6beSXEhJk0lhvQEXQei3O71sz8NCRQ5lD2lySku+0C/KIdlgDB4JNSvv+qk5ejzvpWbXNHvy1eKLPMeisy6hekIoHcfgElY/Un7mZTa8+50eNcuvhgwINDYrQ0E+1i/rQ5iYbhqnBQFb6oTCrWenj1H6tsQ6wE+zxAjFQfugqWKCuxIgPZRKb+A5xk2GE1KS8vtN4/EAemtk0SpDJSHessTiBUrMeMrH/u3Cufr8szQVxzNtP6w4AwC+CVbCASI9MkJgOja9mW19pdUkq1jLGqckytKaoeCTmS1ITZC+0K324+w6bD3RzaV/aGS8uTLkz0NY6iggjgvCi1vrmEOfSJRY7tskDUvrX6cdQ8a/MkcESBeHFyCWWmG/xmSWsGl2UfP4sAp58DyTZacTv3OaoMrbIH/kj8u4tCZrl2tvgNsTJjSulJcVQIdLlnB4rViCEKKMrVDPzioTajrlV+QVtP7Ewel8u2jFyFKC1WySkO16x+ZeO0zkz6Ju/QbRusHXTOoq/J/9pEue+FbARU61YdzkpnVBTBsuGPDQsxF8bjK5+xktUVWBQB5OH46PAg7CvBhiL0Vy3LblhSHUlg70tcyq3Sx8RG6/twFuPwxuDGBDMYVvtWdcngjXJCNVli6YwgjDq08qjq7ms5Qn/ohAiTcqL0sTNcWQoAULCtHVTPuFAf9NC2rIR/nYBcbFFVTWVSDlv54veOcoV28Ap8+e6zu7LXQ6wMVYm/OomKJCdxYlICQdMEWtIeDN0leh0GbuGPC1jG4gjbuZf+yd+w0lTGP84LgwNfYjbulKWlURS/VG7A5VF4s6MgGeSkgVC8TrrzvdYmohorXMfRO9PhWukee2wQ1ANW3Caw0Q3+iiQ/gNgiCdBALyh6OXGLXM0b9OlMil4NFKi/70ilnAvV40dR+Qo9rW+TDpErNySTF5FgJL86FDGMKGyLThZ5P2YJiwfOexQA6cVIXovBr7kBP0czWERtTbPKZyudRM2IdvRzhEM774V57XVdLONx8euTsyATEUDo8MMBol9ixfLP4ORhkLLC6Dk57IjXs/8nHQlOC+WOhiUVJhdZe0N2rT9UH4mYcqCvSTEjNZ9EdtPSUxUVieAQ8j/xR7Ad2J2akcm9Wpr3PaCSV32T6VN0POEx7eTyjTxavXjS9WDnfRH9LOfK6mrBy4wTncd410Iegdfm8AWCiKX9JV1vfno/hiZa/hQ8xsW7b2KkFj75UZZ6dNpPFcn0YM929MEGTyDHIk9+y1FSnTTp97kIgU9g1/sZreI3J04LWqkwdX0/O/8mtRsxPYDeWCo7/KrVlPuJhgitcWWZdhAMYZrocH6ZzJSnH+2g0mli7w7PEQaDMsoL8jiwoqDsuVaMxP2Y4dVv2eOyqLpkkEQP/ZIuXjYCH2gMPkSFadCUnO06YP3PR4TarRJsrp/sFBk2H7qRRpOt5xA6vyLgIS76Rk52mYHvIuF3HDz78YC8IjOS/22pBpmE0moJ0MUoUlIzEPOyU6t2W91lUX40+Tg2e+PEdsDRMdSigRJTk5ww42xgGZz00faLIGuuMw3fjH1iZsVXMJkuKr1aMbXFpw3V/dlnYvkw5DS0IPmpCyIqTDtKjvHnni5QAzL+bnp8H8Ss6BduhVbUjCDfwpkzlpfykOA7e2EA9GZ+I1j6xsKorpXckFzukgLkKFZ6RqI+DzntTaynCPwtzh52qH';const _IH='4f3c5c4ed0129976a7d172aa7cfbd4bc1ac13f6715eec8245f87aee90752abfc';let _src;

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
