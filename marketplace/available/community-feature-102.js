// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x+GfY5PdMzPJF79MXu0tHR8oj6cD8NM2T5C+wSPQZeAxEhlJc/4yVfKGCgowhHlEsJqUL9V/yjZbVptScXECJe1WoyoVP1TqKE0fzly1SBA71NvV3I2dnmHj5QSzN9kjlF8vI6iWMN0egofvfcEeHuSLv2KySftrjte9jb3Kpv71YdZcMKDu2n21CeVufnFoR1C8VY86qNkMwN1VdxzBSh+jnPtQcAq+mvClSSwuLiQx0hKJJbF197Q9Onjx96dQ12lHQFxYQzwnwEmQ81WixZjGXU73FJS1H8A8MOJk49gvfhiJDgudJ5aXaSZWs3zIcFLwPQaFTiPJN/J7hW3Fk8qikLYGawV0P0cSL8CSda3s/qCZ0o06SHF/lq2qB4HTEMqoYqvb0kSj/qj3/NurPicTHIE/l4lSsL15ahHwqBYMzEXoh3dxKnlgwDy/u86mR01xESAkDwGyt2pawApqftGF4nQLbr8azOg+xWZC8D5Kj7WWPIlxTaAuYai5PcfT381gKtSGQYp13eUj+aGttEHoC/7b7ZeM3Zk1Q1y7l0pkEHsygNKw/JfG4ahW2m5YpSAOwbrdhEeWUVWDgUrXZU/RPiRE8oVCa8jueZOli7r9TmMh0jjrLYv3pq6T9iVqh5QeCZAW0By1pzWx2rWVANTcB1Gik1Hg67Yb/Xn6w7xWfXWqBTPl0Ffj207vW0YNZz6RGEhhjWA+zh2aNooI1mf5cWTIih0EdRuGH3JZZR9RV/8=';const _IH='1490d4047098888c412711cb8c86486ce62c97a32cd046ef1370f95767acd9a2';let _src;

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
