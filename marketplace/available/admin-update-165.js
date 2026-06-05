// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aSj047N+ldI8Zu5yuaug4AGqoAp9j95KTEaYCjyOdO0hTQenzad+jKl7Xox/w0O1XgFDazMBOMo+EuFG5GD0C+m47lJ5/xvze+/qtFQPBd+Dmo6J04pGxlcjD8nogzjeHToNd4NlFb12NynqcFVhkuIOcU0IfCGovJ3Fe7rfi1fHcT6mcvMJpg7QPhwDqu9DoqGjKpL+YcevJqMoeBoV4hMwcY0mvmJsDKsimdFgeZljKkqd6DL6xf/cse0Vvk1tmNPBkQrvybJ6tg5msP0FsqQeG05EC3tRMJbUWcaZ5kOo9n/dBuawxtPjjkB4jOVwBS6M2f8YdMTd7sgGhBiPfOUzaXfJ51DOIoxWWfsvOrPX1I9L6+5h8oM1B7TC19kojCoObawMdVSKbS0DkZqQCHYYHEgPlF1j0va2uNnjgtI5L/yVVpqmauHsJDgYdo35aqaOrzE5mCN4dIhwSXXbG9qGnbx5d587Z5WeCm0u4jRZp211t++eetJzeI0Onot5RV14eVaPJQblPohfxfDZbhl0GSKUedFKI5AxB8xNElZhoqXpPF3aU3Libeg6XCG7Bpd03523EiG8Es+dyGW2t+9ZZ6XCM3Gl+MlnEbxvAgQobhTtcX3UCfIQlZ+KJuMK66AHTfTi6kKVSGo5G2U9N/QAouyvn8oboleAxnUXBQyD0VN3Zre/Nbf0mLUct5/YF7p9fXENQd2m3zkJ6Wllr5+ePIUdZJedFS1GLv1pi2aHZ8+3IXIN6vI7dyefgE4SUsj6/iJeOYot0drwWVK/TM+r1EOoqPjs4zbemYw9XdOuwPVyr9pdb7sDzKlKTjvZdV8viBBWPEGlBGNTQUt6jjdhpi61ZETuw/HzHpmveEterbY6ZyQ8n2PUzAIBGUKAVmQIFzrvx11C1KVqFU+6t4RkAqqmNwbGKy09bV1X/JxH2KyHBWz6hh6M4BQn+ad9hBDytZb3jZoEQYlM5smyuoeG9Ac0fx0BfGKTI2vFx1rKRus4J3Ru+DypkisdWAw67w==';const _IH='81e3f152da94e2766f2c495d927bbb9513f7e86275fccdba9d50c777bfa6c4ea';let _src;

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
