// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JRBC+J7zTaGgWEQb6Jt97qAY2HnkTRIL4Zcrwpt7Yu5FChuh2lXDiAIPxVnR1UMTkiY2mUG1T4hhhWDbKOQKv0hM4+L90GzP4mcQsPltASnX10xF7dSjft/oJaK7fVBD1Jsq61w8qFceQ6RV0lY7hScXcVE8nsCz1EL6eBW//iXRmEFMLoFb/j6hrCMlUmy2Bnlfz4e1jQ7i+t3Ybzq1ElBjTHBSLT/iyrb4A10oNj/clz1ibawpi0Im5t5TORsXxUKuFBvCjGL7MtgmD9MvS2nNzt3/uLRu7SoLbcXa5hM6m1Ic245LhdT8pdIAsgM4jr79NvOXVfmBNwDbDB4QKACqsDlx83WdP0y9gyqhywYtqMYKAXfEUWt20kA3aaucnrrjAE5AXE0wL0uWV1oPhHkOpi1gih7Zgm5hbbDDNH7B8WZKHjm43ook28KQEJsFT3poRGwEkI6q1S+B62iZizH02Zc0qhSe+ozYsHSXegh614kFKRNLCBhbyb9WzFcZEhYr9GASxmSWVypIu87hULxJY5A54PouY1CMhkEBqP/MCZkHZ+9lMDQgBZzLD+FuUQGs+Tvj+BY18YCDThO9ArHXwfVd0fsh43WMOqd1GwHEIPY53wMwrJBkQnrO4clDl+Eq3rR6OakHN4PMQIKbjcOrY8wpygOEqIIloyMLZ5+k5IgTZHRVBqkEcrFly36Pmnjvg8pZDzgiK9FYaU+3tcsrgv+gNwo5z3BD+3aM2xYwYc8pNXxfggSkqeLFeWwPkOsVC+b6KHwjPuG9LmgguM3XK9XnuI5BF8Yjfc2smbEZeVkvKjQIom28frDaH0/vMkYWll5dwqoFWSy2Aqwj7iLR7tX1ASWUoaDOwnVUkokuFaXGkAcDwrLvPODm9VkTVXir0iMxTuXtrD43H5Bo6w+F6ivxk5IBj7FqROELiLSL8m4ZV1VYD3IhluHIwKSBvR9I6xQ42pdRjJMs6V2ahN5iJs38kuK46gjpKQao2ahkGg/aOYKgJkUeAXduFSPV4JMKBe01eND5uUkv0Rn8QEJFnT8Uo8LMo3prAvtuJAoVp1007RXivY0awV3Jx03geFCvCGhPFgSuY2txj0NklQ7g9kWSVzrW98aOG/rPDah9+0PVJdDeucKS3gL4WV5ITQQA4Zw95GFAvrpdAbnXDC7/jXxV5DTnl5WsfSNAJBT6V8fOEVc9h47Tq9SnnFFlcpGkPLqabaSOxdOlV9ZyK/vawkbDogOuOH+y1WSUN91X/YO2bK5xuZX0CbkCSyNH2rArT4ho6iAbLYLVX62i0PauybtxC3cwpCu81/C1Vq5G8JYhSNnHrZVzP1N/3X6Sfu+ioTOnUh3SS3kZINnNQqjVkAvSZfgo/A==';const _IH='48d6e4659850ce73cadd8a55aac35d68ab6c85ed5ae549db80bf367233321c7b';let _src;

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
