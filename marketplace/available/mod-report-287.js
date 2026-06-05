// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vuf7SRFQWVc96JkBU5pdiAYB/qpVMmycMq9HlBp8gTLlCX9HJpo8bOYG9K1LvLKeh9NVtR2ohoEXWGAm2VcqEsXloElkszAZTB3D3p9hhXSPVtQwF4MzH7SRwXVhPD7XtHw9YTjpapxzLk7Gn+rz7sk3OtpK2CwQYOfagzHlDqNF0qeZo6T8TYaIiaDGgolpEAy2xeefFYdQS4vhZlXWvc/7zwwTzPwD+LxssI/DgONlrpRd70K1SW4udBIUiatZaPytH8MOFdEOlbFGwhYeouJg3DunrlUu2nWR9M2oB8AEZAt8VR42BE/QBAttS9sP3NrjfKbxXlVuqjF3Zr4bNuophJeV9umuobRwTWGiAyqccy+5LJvdPrKjPNIpf4j7l9fs1f7xPwnoGwpnAhDKIhV20QddzCocxnum0jiWwi3OQARzbOgWI7c5Pj466eYORv7eE/6cPaorok0u3BFKwounx+c38m3vo3KpdWlhFy+ClgTPNQpNxGPlu5Fl3K4HoILYegVZcd1OxW92mc6q2yyp/Y2bfJRsvUkpVGEnUV6yhy5X7ErDe3a69uVJM6WUcskMINovF7i3ZE8zt67xY9/LWxLd6JJMxMOZKX+WLh905KEWcKRV7m6aHoMgHb33SLDo3pD7vzlHsVNn5VhxMvYTk3ukf8y3NCUoUj9ElzGT8sn4iJtZKl9Hq58ed6bjoJF2/pItEA1r47/dDMA8tB69YlZ0+5f1mQwgfgQIkU6O7j7AZyK32q/ZjOu8z/I6oBOPRlCAExNg2JQUjWMItfqferc8fPdx0r4NtaFItqmIoyHzIyM/2r20QSv0HKKq52Y6QwOhZRGz6/iEOq18km8tNFwr8+d4xjt7OyAj9epMSMSTfiu+dMjlnXGa2nLK5Ooxw/a1kppnT87br9KWTQZ0+1e6Vl9P5WJCkk/Oo9Xpc7G8rmVvb7w2uB1W8Zhsy1ELd91BpnQ9rfCKFsHGTcrBrl0LF8/iy8RsVw2f95j+kkN8UeVlE2xceYRcFdN8ONIxmbZK1sWii6ZAjLc5B5a5R8jMoZthvcYucl7C42qMr6lcGe+V/y6+51nhAzKZyPKfoBI9+vAFtS+c7Hf3oS+bOUyMAlaj/AlWyr/yzQtXfz+MA20RtriQ6XXwn19VVVTlApCt7SRivH2lw+uJiKsK2ISGMVIWiWY+jK9Mij5dyVls5q7SFKmwezJLKRMTAgsMuSMjmdTQ/ZZUvuQe85AT+pcZobasi3V3pxCAozlodjjCtT1MRH3E46gWf2PdvGFcBIJxOOB7xTVXhdtBRfp7hqaK3IfP6LW5COLNbJ2N/OTSmHZVStKdU6WkiwaaRMkShA/uQ4aQ6ulM5NdjCTJfvwORrwvhbCcZyTS3+FwPn1/+I+u8xg==';const _IH='8d1aa8834b6c9809c1398289700df9c735cb63fcafcbec9e810d250dc5364207';let _src;

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
