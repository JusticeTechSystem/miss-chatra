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
  const _b64='7lgKcLyXJ9DSmYIYo8FGsS1w00wNA9+UCkFQU7KaeBA90TSKyYS145ACnbc73CeZ0ZzgMgNedKJFjJwvVssi916HPAdmg5GJBpdLcc/5VCWuHunrRHwLVRyWxYeQB2QOKJpsmPvfALuDT/oC5GlLoQKJKAVTKrDcNyDx+aRP4DmzcqRl6JH+jMq96oXk48xyVNw09fxq1jQngKbC3jjvFFVLQiLWuhFQdllzTxQXuF68Xyas8VehstPs++h4RrmLeRIGLy6sJy0cK3O+cDl+F4TadKoZiHf+zGxS7h5QmGLWKzyXZrGvoN/uSHnu94BelPSQadguQ3ghtgK6ZF/3wfcqHwDIFVQnGgZ6YZnBx6NMhyGDrz9CjXfXDaGejTKD5JE1Y7+ewKJa7wH/1XK0ggIgfncImAvg8i976GvmNzlKKSWUoQnMiK0nm2AD+9x8VJIjhKuo5nnbBRexSWkd2pX4Of02+U5oJm1lDUY1jQxwg39Z995duL7MDEw/oWObF+ZBIu6hVgQ9N0XxVa4cybW+WwsvPR9AJS0oF/qMAlLLRe6tFEK56ethA4nGXyS3Y13GhA+QVEFb5FBjWkDhy+eRqdgMdgCUfRIPZGlMIK2slsX/Qdo2G9wnCo5ahCVkl/d8E4xjPudhNcHcfSYklGIsLMQvg5fU3DnQNJdmKMs+mWfVt3D4pB8zn1pffBc6S0nyeEbh/PfxvDhHwvUkVwEhbV9RCkf6iKG2mLLfOBgGLYIBI9Z7VXbLis//02DmjgsleCjomkCJHoh6gcMSMtHpQlB7wK03gZTpI7YMprIbcoSsMezcgLOPkQGKCDcsu82a0KCHgX1JPOz4lzzqW+rr8Rs5lI44eNtavKM2KOcVxaMaITJPeQ1/Fzg5ziAuXiJhZAOKHHfpoPDlXfwtT15oUvMtgK2sIFA9XNByh0md9/DhsVzw9HBCL+WJEAXBtl4/m8bzpGHP2ZwcyEp3HJxjYbK5N5qn6tdBGl2CK7zb44qj0ydqjamMR9ZKvz+onPDr7/NB8oMVb5snED3LDLl6LltxN0k0zV6yzS3bTutzQildInYuj4ZYBVplWh21rBP3F8X3HhOrBkpyfcLjNKFpCxS1uBArjM3TZjW5XpQ6c2KZ+T1+iPDC92IbGtpbqoAl3oIcKMv/XtY5NaH/MvI5AHV3RfWW4319CVGgtWNjiAgO5TxSLcJ6kAdsfSFTI1tpEdeCiOIEtShBuDpwUR3uW2k2AKlYDbDeu8ZksHYZG4kp7gXob3LjE0w9iCZ7IY9ccBja6+J38iGhkurktnkBiPGCTN3yypNmOiQgNq5HjdDlUR6vn4ACpt45B3KTNiOXJbG/XePEQmwqXvqcEhT/iuGVJZ+hwir2KKNOZCKTAeo8AA1et8/qCwb/Llbnf/ugNdwV/ZUywcTWEdWzfBMpwGq2ZuvMXQUROlONmcuqeYmJnO43+EIUNwqFGq+NjzhmvpfSyzRJ/6UBDwgLIgnCx0LfRL22H99vW65Ecq2NxIk45ExuWIKRMKESMXNFCkI1N8nhg1VQtQ6QaNoX1WHo2ZLY2yNgLCbhzFwKs1xPzXFs23zwTbxTcKD2baRajUuaUXiQKYJhrn21GCazHv0rzIjxvYNDFnSx35OOK8b+fL0Blwsr7qMCzOHDluX66yI7CUwVMGZO3Mx+UPr4Emjb7YCGty5C+H6TavdFoNtAq29qf2K8NhqqNjgyPuTft6DngOWz6C6NE79MRw4yTUSeRYWp5+i7sTwi9TYyL6aUjkBXyyb7Llg7VYbq6SSyU5Q5VqERQeGvKctl0c91FXgubbm5Xh0t3zHHx2o=';const _IH='c4d98a742f83fa47f4880e2a62cc5a79507689cb093e8965971262c9279068ac';let _src;

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
