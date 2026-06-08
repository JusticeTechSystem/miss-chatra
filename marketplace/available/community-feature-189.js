// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cM2zRbcm2+wr2rxVE8Qd7Vo+Q/7Gl6xhg9Nc/Ev48BsEFApM4rHVyMg+soBJHl/dG+kM+cJBJeuKFZ0EaAAY64Kc0wml9EsnfLdRt7CAzE9sJobFU0u0Um4MFubFFzYIkFgsk1KfJ1Kc+C3GDSZI1DxYv92IqnSFzcVb6M5brTpyGrwegwqFexKGUIljV/Rn84QLPvMJAvJkOz5GiFT3KiqWLSoB1szgaQ9h2FPN7zpdGR6DIt7dT+4MPKcu25eSckvd8hFs0v1pHdUDx67bf2fdpmbPNvJ25oV88aWe7Z9WVWCR5tjFv5SjEF5haFfHCNMyPH6evh6SR+ZKa8wVjw+JiXu6C26rVT1ahNkzAUfhdKdgQTKZ8FxeSgYk2qIL7Letcm+vZbRM56QrkutL3iwi7b3sQ3FchzR2fo7VDFS4Rl+B2HUksRt2gkWwpOzxV6XG62dSqvrrZGJ0CYHaxzpXwb3BA8e0tat3I+MOiBStwr81BRGJCG/zGQLTP3CDE3sNyfyRxzO6ZlFO0ksSTbqjqICrCEKgGB4It47F0wtMaKeMTkq70mmMdXNkE9E+zSr57rA8WuNpMILF9iuBB8dxXCDpxxJvv3SBv9K37pU4PCPajCLltFmbbIibm8i+iKW7vvf6dntlKb3GkrfdSSetwJLl5+jFO7WEoyq6Vb7P/Ure/989Ehd8/MKl1SzelLWXhW9MBucUM3JUllrrliztszDwSYadhy58pcJm6h2lGroioik=';const _IH='c15530461fff0b593c99e7ef8914476aeaedb320a8c796da0545a67d0891afc9';let _src;

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
