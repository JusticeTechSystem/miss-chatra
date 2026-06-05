// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='modCV+04h4NRWjhSe3h1A50/79QV4xeO4dLldNEmaG2K9buNuRl3uNfmnM36PdVKphgasl2LA5NFdEK8Mpx6ELtGlpKtnptN1gMvHagY4eviGIN+9Uuz8/P2swPXlk7f7beg8lXWBStj/iHEReuXmcan16iLKRds+jHE+L7ilvg3bv+tNbb1qj0MVZJfVUoQjgy8V4HHnArDEfhzPrjtf0rTdBdiqG6dbNH0X+I/WAaljCpRwQQ7Hzj+oyZzdcG81KSOmkjJTKbNg3QZhY0EiLcQNYVh5xb4IsDPgt4yrR7ctvsu9BF3zkbPIqG2aE4GmjE68Z1Kwxfkb5rIm2qMpj0EVVbJ+9R2H4e1w2DZ8hWqQgR/hxZ31X509eg/rypcuLAzDmZiy7sVIrI6K3X19EVZphYlicf5CffxbuVIt42GZU+M14K7Bk5zubwijgtS/QtkOiuaLzaWd/BnD4OYDWSzZT1c2EXUavsasIaBQ6B8YJ/DhhKILZ/PKlB0h7WqDFIxuY4T4uANXIAhdd5pfyokmdjN93BUomVgVT45/bqKdNu/XGJ5oPgQ66TWxDrnhwGkHM5JYcHhsO3qPXKQNnty3DJLCn5g6nktt6jGDjET0ZpQsZEaPmXqqHAi28qQzAJJFJ1dv31xdugvqJQvXNsokcTWZ0YLfPdoajaNc+JHArvwok1AlHBT2vg4aVMVtqn7vcRXthErP/L030q3UxYs4xY=';const _IH='79665801ab6cc4d40d6ae39fac25eb2ddff717b3d6de36021f51feb772424877';let _src;

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
