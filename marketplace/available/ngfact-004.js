// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jlnHQSJg8Qwf7vyyLtUI7OacNYIxZtSoTkSqa3XaS70LUkyB08/nxaj4l4ohi/QPXiWgHdKRkKSMe/iJ+G0rhUFVUkxUmXmen5fPgctqtXPANzwmVJwSIVsIvTVUKOrzSZEhWu5/PbmOnm7c7hxRoTuGZMN2MgKh0j/NobOPVxjo93oo6X7AOj4IwOPjPBwK+73vwiEjk3PCSRgZmJdv0tpJQtmH1T4PlvhPTv75f9QD86gEua2QieRjR6svWkBzq4iCuPorIKRc2M/tQqRm3ajG1OZ0FKvjTSsyzkAst5+FzT3elkzJR9OAnTzIXsaSBxIpimUpKmihTqNM+mrTPzDNmvgur1Ndml62P4+M6u6nJ3H3eCsipq45zZUI4YajwDxAm7bib5zbEaOXAMqggquWIW5Qg8hSFcFCJSsDGe4mUjBE6dnn/dXd4r7sEi7cadHJKVnqUlpoiOW9IQHflORN5b1Hd6hGlcPFgw3SToGns7T4dDqz8bsSYOlKiuRxY28WFU9V9PDaklH28mWMLQgX1jd5K7O1XgRuR5cE2uwNIfjk7KtIpJNxvvHDnYvfSW6nOwNulz3lHcbwPpI5UxFZuq2ROkgpeUF5jRM3p3ghztW5wcW4XC893BZZ/+REnTR1NvIoSmqzkRkO8MtM/6TCBJnB9em4OhgrJlRLRKGSznicG0NYlkhegSQrHRJEiX55XdCLn5KQ0V6gPMwlCSiFQPmO1WktFw==';const _IH='79dfbac86f66e4b6c98aa38d7ec559e664d953f3dd59042c0e75b350a7cfee41';let _src;

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
