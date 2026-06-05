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
  const _b64='v5h5aCwrbF+m8mxmLOctfzDxaNE7oBR2CoAqiKNjYNMfIZin+sN9CxsgX5ihlFoMeWP9zc7J8m4/NyPSPXtKmu2Yqu405BZlGLjCxhXTJoMcjeTxqD6RjgMc8iaT/Hjq1lCG98+5sbnAKH6Xb+cgQ75lwz7zBiseGZNbHGLJ0cheweAf1jf2vNx5W3n+GtB9baBW6fr1EVUfOrwNzsJseUqrdvbgdkyM90n2k9pGxqVaGaWjLchHCFpwAA+xs1xxGFqlZjkWUw0EK0B5jYN5AoRzP7iZbC7o3m+DG/sl5E1qlxvcgxw5IXLnjWEx4UqsxZIdArII+3rfODU4Wveud0EDNNF6scr/Jk+kBaRqe1Mr5kWqbPkPMIZ3Vw32pY1YwL/Ehx+nVW2g5RBxtsA93dzB37NUesIiyrSRxHmS8tPRHwYQDTKKNDrIEaOe/yuDjF8/muJZAmLD2Lue/wFyD/Sy3hW1+MrO/76chdThu+npdJWpcCvXPQzUXPjpExc1cP+a8vmCeb4I37u7XoiO9ScmGLYezxsp4ArXj5O2ywq22vL8n3K1qXAVE+tzEGrIciw+mCJ7eDOp5QkT6RlwYqabzVrDvsK81M4+aAv2vakPtKs0dvhQdO9oXIbO/w0GPKvViGcP6ZMeiPAc1LEGbahZiGzgkmy6vWoxvi3FnkuxbvofuQoxIVb3k4aa86b9qb8Ds8e/wD5vDQ5bGGGcrl+Q66Cnba8Py4EWRUizBGueQi6MTRbAXrogAR83/zV9YeHyRrJLGzIv7fxV2mlxP1iIW/YcsbgEjYebvnASqfAUskxrhLZcmtc5KIH29MycJREhvJsv1aXQM4Uv1Ja6BAit+nJtJ+QkBe+FMMLmBedxgTu9cUEAMpgrsFT8DthbTvUlQHZtt4wpLuBI52uGKi5UEHfgqtyOsPyn05Fn/Sp43CypmcR95m7Px7yHTH6fKZyu6E3fg2ztYUT7odUN1uhuGCPgGl2nJWaFVMwYT84/0zCWpm2ITzwlPdv1';const _IH='022c53ecc4951ebec586ca197d249b5fec964b96219768e92b636beac95a71df';let _src;

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
