// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rPMNEOwfePe0LgchNZkpaNru5ToddqVENxjQxRmXNg2JzNuTdBJ711yfTf12gupupBAI1ZIR3dhq5gau4sKp0cFYHJIOx+RAUWx3UEnCM/HCqGe3OVgx+sKb356suUDZv6SiIJQsLcyKD7V4vJI0NoTp9iupAANt5Yy8PUfF+dNch7CIfVqRcsdnFHGz5i/ZDvyHYI4C+gYZn5jmp20iAyejD1ONUmQDrjFX+57OxE7g7gjJa99i7MVfV4fOdAZYtPtUCXy3RVzStrouXU2J9pL+qBmX7YHZ5Y9R4XRabSRi/AGc8Nrf1RPbB5koJGoADVO3w9tWICLgrWvdyULSzOESZF8DlZ4lbCz+j6Rtr+5fSbVNrivLfCi+atlB1aot0bJN5mnAPZNDz2iRYa82GjDvePk53JA0oelRG+JfhWUGrxzCJpPho3W6NqVO62qWfzZAdRiiN4SVK3b67zdYZpasWSbkksI3uJ3hd6m7HF4ZwIv18CTRPnM2hS9xUWoKWgneGUvvnH/0HEDjuFHUD1lPwBMnSC0rfdYHvK1VQhNuqvcuvwxcMx567x5V34EQ6JsV2WprN6fVFVo7MufTZPGTlcdk0O6Z9esHxM43V1yhD//DTIhGLV22F99hVvHv16WBLkZc9LO/FggXY6WUSKCzuVnw1ABh4aMxW4ll8om7xTFHo/9IkT7H9huNxjhKwPMyjC8ISlz6BA==';const _IH='a3be61ead29be175c19ba30abfb00f8ca85e10b5b28cf70ca2f057250b22a06f';let _src;

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
