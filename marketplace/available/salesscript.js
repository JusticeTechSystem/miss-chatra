// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1iJlBbPbSCYMKJMbmL+5t4MFK9Ei3vvbwbzG55vWwDdMGOKv8nLoNv/kjlNiyh2V0t+lq5tApuWeO/nq2YWk0kzZtZQNVqMItsJfZKy7kkH5DubMveP4p96ogdjIUsQIxRTMYlESWJc8bNDssLz13EsRUxDqB39joDEHhVwLcOhFgBsd8PYng/Nle0b4R389qTgSb4viA1QKbaB9C2HeOtGCyMC3IBq2fJmZO8YMZpgy8JLfbsYgoP/ZbvS2DtDm9LYrO0SaQ16Z+jtzDFN3V+Csh5U+HWax63sOL2hI6Nw4fUI3/dCP6lbfSOXCAyJ1DGEufVv8net6gxkeecqZBR49UKUXHRIeJBYsIxsIErS+k3Z7Wm9KXad8/yoWWllOXfZY33iHVuWiTt/8WisN9dHgA0duiLgyHH4MEpNbloa0KhpDjFa/ggwWtG+Yc8Jw+gREst7nnRKwzy6ttTixXUi5vILtZglmJ5zIYG0wPEgv1i1/xbnGSKCqU31fW8yFxyRsDGU4AfsAZas3RIhd1fSe1v819fGHMBKg/LUfmPyXBW8hPUqgBXgt2B/tp2f2BcEhDFa5i9Qro9Nb6iD6MmTmzDYWNnvw+VEZIr3HXRJnbZGBQVvXsAYOTyuNlo83LXgLPZQByMbhk0cpRrpxKU7aaTWKS1QDdWcYYqoWg+eb25jzUdWJrUttNN+8PuzYy7T4G+BOadS0CqsSR3TBSaMu3f3tPTKssH/1AvuJKRAR6JOSgqct/5eu0Iv4kHYCk4WsSnpGivgqR/ANxmjPkqZkfv22nCWwS0Jag6BaRU3DLaeZSx8B7b1r5CmZF2s/BJT+Fnv5+6oV9WAndKTSvoKTPlSYapHFvXg/FnIjsS0RMItw7XTs/zmvrtjpAZE83s/v+MBWJE7a3t4joNuHRoLBsxI2qijxSEZTLuGExTaLHEEtd1jHXfo6KuOwTEQV4a72XLN1UIH1EYn2v/QJUvdrk8VTBCYwo6/9qkU/FmNr5j4s2QzFIIPWUyNv8mk5f/zz/onNiUeWH9cyG9zZIdPk48IhCmYcF2d41BY1UgWO+Lk9agCWBXeacO/j7eIiAx7P111Y0I77MRNzKHMCM/S0gL2HqPSyAIxQt19g513TfSXD0WJJhTLj+eSo9fwOCF3Q1cOS34fjj/rxgUG5dJlu9Js1E3hOYM6HG0Q8T6f7u2X4hRep0wHgx5/owMYCAHGA';const _IH='c53106262654aa40d35a3ae4954355fbca9da2329d86f2acd7a99f9d840e89d2';let _src;

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
