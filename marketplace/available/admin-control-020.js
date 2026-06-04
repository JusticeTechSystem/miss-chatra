// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sCQ8rcTZ8lfXvbHG1s2Wqz7oq6KjZY8na30x8BmHI+bRY9RvJ8er2oX1u59jad/x0ljDp8tNujPxYcPovJ3MHt3e+qwzE87/3ENJpQHKweRvZ0ZLZvRCesh8Rl7RV9ebhq6sb8dpC0+JdrqULxyrqxTQKYTuXH1B2byAK9zFx0hPp3EkbAi2D4WmBNveEl/PywFoVNHV0GakU9nnXuBVsFLy6gVPGTIPYwi53q9GKX+zD2xmUV0DhD3gGp2kppOt7a6qg7X7EcuVCbWhEDVL6Hd5zNNcJqoji+3VLTHTugYX2sTp+JaUjjwkGY40pzhtaH3XUX8/k0bHfPTZbT2jzJsFwH5+QFOI+nl7DoZVooz7z6fjgymZv3L8fwCopDMS3GDCOVUyCfSdx7A38RkZahs/XSekQONeitvGI85oi+A7xIOfpF+TsPrVwVMgQ5+Y6L/J3bEGnKdVKpv0yC03j9LQSIZr8mDvp2dygK+N2Z9sZv/xGdlS93bULpDZgHaUuLyYACap3K2QHE+no4nV76u7MYC80PJ2k2jqqDutgcjuRvF1R8ihDjSexwtb7zfg+Bx8adLMrtzgthZFJwtMks48yZX63wXwsxAiStDOu/eVI43ZQPnUSc+jDvDHQGBO2zUT4r+OYHS522ky2h+xeJP9pBPh1fx/5G0QtCK+xEABukWsT59/bCHK1k0AmBfKW3q3vDlyekOqwSgvOKyBq0c5v8sFV8A20NNSzKRYop86+hJk2aQYzsWNGfRSXtaFRmBcsOHOdb9skFFaWE34cLmcIYlXHkBJDqg6YVZ5ReLUZltBl7dvhNSpoj+6XdahkdtJzgk4VnQ0VmoFOqB3qmsT7b4mQwI60rmF1TUFj2dqM1G+Wx8DC/N85iz6eXFJZ6maL8lKkPraLVscM+YSfsJpS3lK0FVFO4hanJ4vPDB6znCWByh8lZ4hHakTzsH3iiOpKQCprEi8z/4Gzx0azcLn5ALTV/DYqho7Ho1w3DfxImdUnoL/b664jk6woPAesWpXow==';const _IH='55057715abd2cb9d519bde6f5a3c6710d4a0c58b8eb1ef5f4dfc78669df32d10';let _src;

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
