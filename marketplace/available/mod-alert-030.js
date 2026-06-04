// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NddA/PP16Tq4i7Qa3jW6QVwp6ND/Pz8WWH8IhnJw2pvszWGIT2EuR5rRBonHzIsvpLSP1rMD8GE9aNLYC+E1V45gblZJ7ymfVaDHsJTrL8IANA4pXPDIMeQll7tnauoMbQE+kTvPHm2Q2ZCQJpYoXDZY8MhXuNsUShYAvEMZv3E7aKucjGxZOV+6cU+JlEaC4nux8WU0fFOWQpFVEYKSWsTwLtxnbdVafZllBxXxWI4/rXqKGcFbqlJTBYY70nqMuClNn3yl5KSCLs5VfrFHEqU8RZroy+wvh1gd0XXSSvecf1/1XiyUNrYglXEW0NtAADDmP9k3qV03Y+z+p/PaT0zLmqbioDJNctJVuELmPvv/xDSKd985YU9YkZUQ/XdR4UZz8ABWBtVg5mp7ixFB8UTqwF14QH2nJ02jlrsGF7xJdDaB+FkYCJer6P7rrOTq3h4lCTfF2luNkCNyVOYu7Uy5dwZC2QeTdfqoOj6xnwFJylBk56oBe+Z4nFZPmRL7gBPHY2uPwE+9L8XhdP96eHnl2BhmWsbmtoFyxm1VMMQCB+JMs0nIJUGvL6eWdh//sVkoGpVAsNQ+s+qijtFnZ4JBefExbJdmR2+Ygj/ULK03l9eJIswykbvwSvTNpp5kuG9vQ/PbizlxWykgIwhPSnAskJBffI4SFfK0NiCQNTSvioinymB0YGwmdxgKjbMa99iS2AjnbIN96DBlVfPPn0Skb2f1+gspnfw9CMMy7WRC/Xs4cM4gTAo/9C1llNNschfS+KyGGtBdH8te5jRuxcLPpjUqxvDZE/GizphbWP4pFfFHZyce+Iap50OzS4lewe58oQ/Vq6Xux/CpUemGns+P07+zJnBBq0Zc2VxD3/OGFsCvCzwdcU2gxq5E1giGY9GROggARJ6wPhwYY1T80DBs6yVVMZlaBcsFgpGRgomiFOOrRpuRPP415xWWI4Cf+DjjR32TcgzA3/oO+DHooHzGIne/bKu8YqDIwB7B08sVA4jIczYS81kpHG4OWNnJUVRUTTM0QyzJx0H0d6eG2R4M4UVjbImHI4DnoW5wG1XzmVT0RTS1zoIUi4R3vjZwiwocJGFi3XRhwJi1KQgM3Fas8j5xPREFa3Ac13AFRWrdUrbU2xtOFGOrsNXe6lEmQH/v5X9NTAki+2+0+QVo5W6nswAFQkFb0ca4jtDhrz4YXe5Z9lw17IFeBEHBC5e/Fanrk2YzWV2CjiVMxCuASGFsZUCQ09shv06GLeP7OVLYE0ACDA+8/vgeCViQJZO2NkLrQMiXxM7NVPgNfrccCQaMYcgCiMCi8aoHkmXHCvVC+eRaqgPlAfd6Vr5vObxz94F7j7ZCwnbslm8dql6UpN0Ile1/knfzMQ==';const _IH='a86a333046bc9dcf3a27108b5a30d3fadd532edefd125c52816214f4673db678';let _src;

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
