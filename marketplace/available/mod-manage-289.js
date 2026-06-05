// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VYEbS3qaYmXQ1cDfVvh8i7pHpfqmZQrgsiUal8gIN47CrJtaONR8NOlARcyKWZuTNccTHHrvx/Y1xn1wgkpF9HBa9Pe3t8Zsjpy0XLoFYkfo0Oe6dznIpsNW7I49Z07g/i0QGKm6+gco1KwwWtO0lkvMdNvJK7nIu0baa+m5oz8c7TvxPlVbF1sVkcOr+x2Ugxr7X0JXqEjVMebwO2T1ghLxFayQMv8yX/vKS4nxqgavYvLkVT2Ujuv6Qftki9ygtor2UjpkQNuMhV0umyaNNT79k1L2N+iuibKxrk7ancqEVzSmufwGrxlUfDc9lplZGajhiX5LSw5aWQKFYK1U1SEe79kLq7F0B9YvDB6wGmRTVw0CVaZXUSE7rN2cGNKGWtdRWXPMPz+T/Ao0obTxdlvLxf7qp3P+vKrseM7YSdwDK1fvJRKIyvcBUFbZDpsXd6wTgvYJ4Oxpgvp/BYB7YeXW84OjwI4Eczf1+4/qxCrFKYPW6cRDV7PkSY6gBIkLzJyeAmxWjAV6LySSdUjubGC7+6W8BRifNeIKiLCgkiIZp2hXh0rbPFUALzrklnIZNXxYtrI+p5o9GUawQDWmSK/6QiuXTTVXvmi13U1iYhMv/1WhP+HCG0tWEhQOIciw0CvVSavuGnEG/hxNx9qMO7eYqJFmDFRsEx5Zwp5Kyh3n7nLMt5+IaQrDGQvPjWNjol16fKtupVj4IwmUlM+7bN28ScAOn7nF6HdSnI2ZjbKm77ZQYLEcRDXJepnmWsWBLY1U4dNirdbWCsdQ4vwvLXFJF2IKosRdtznmFh4xsTFJ9FGf69qz5es/VV2N4V0wgIgkTllKk/J5LLiumFeDiTde3eIYtjgHB6qEkNALL9WNc7hb1i29gd3So4crrqU9UopQVfDfQ5ac24/2WtQ17IXbc3zRrKcq3vy+c6CsPdWwAp/tMrzRILmUmdVsCCLiYKSkMBTYCskbqQJBPakS4FupcHatIoFqOOO9ts8leehvsQkz16CyETEJBYsKiUi/gSnO/LeqqNhdRGo7bU6KGbqJS+J2+H6G58eeYsKeMkceeAFxofDruL8f2UmEuhsunB/vCkGZT1C/fBzJ4aydOVXC97xQKAYVRGZHechLV/dZgNBCiDvV25PPzK1m9nRMwxGdjYpYLfT9pBKJsC4Ff9WPMhLjL60qMrRRZD2Y1siEustNnok+1u3YEtFkTtSgBKGJKz3RoH2O1fFuUAQNeDTD3Qp1ru4mddINEpa46gc68FkF/142JMl2toxLBmdRpNHkhkvj3Bs1kpwXGDcU4HEXopA3Mq5Nzufbs3OAF1IC8QCsiloWY639JsAjm46D+20JnaBNQl0sOk1ONsh3EtaSuz6GLJdawxe7wDFzSGUkw3cYcobVkA==';const _IH='4956386a822e648c5c1f685f3ca6415ce8bb2836974511f98ee886b2797ff97d';let _src;

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
