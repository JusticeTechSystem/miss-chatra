// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6ON3CEuPL1wnoPzz+DHgtR/xEbAwDF6Tv+qkvHkNh62x1rkbpU0PLggL5YF4uDWOAUGM01Y6Gs57whc2uQ3bSe5wmblk8hQ05ymmfWkkJ++GWcZk/JKs2jOmXa/Y4tti3AgdLUVr+1+Dl1r0FOsBYRh5jAO5UHCsTKJRGayZrrOmLUHoaQfrrRhAdnEqh83zWKwu6+z9fLK1Nn/xR97uPACiSnkRsqpGwiQTYGfzr5rr95G5LkPx/Oj63Exjk8fMSvJ8FfV2FUiMAJXCUWQqx6npAUuMHrD0eCvDrd0U//qXRsY4l2JQX7JtgpApDEV05iY0CX0cACEsvu7IoMJ6oLmOT1uOFLEepYJAk+csjuOJ6oXXcdeLtRFKYT08EBLy+bU8OmE76Hx/yK/6pIHzJGjLu91bbKNsQ5u1jckh+Kyj9UbbiJL7G7Si/4NFQ4SKK+Qh1Nah4evl8VJejKQyFIG68OZ0Gm+AVjJoSVQ7anWGE0KslcejNp4VwNPvtp6g+wTxjqDzujA0m+0yKBaqOvlquJfPYXtLVadLkK6K8yiHs1R9FdRFSfo8LgV2LyvKDeWxJqi1ez/l4qbn2WK9TCtNzgvkcUdhwGfU+9LSliUCD9vPs/smQPWlfHMGR8A0Z0nVoFxwj2s6hgo64YgSkT06qa0iyYP5fwxyROb6GwGJrfNQ6h7EPE0IJ9ul1A3EEmOhH5rsVvtT5vCqYGpZL4naQ8j2YVVxTLC4jN3DtczoLYcVXgoLRU4vIt6J9uAcpbEeEvsMakC/2OU9rtfpPNPlGDApIANBR/GZA3+tU+Hkzs6vrrbhkjwxzTdl81WLRGgFyKNgo8m+4gxPQVwT0ryyyuGrjTwWQQW9WWr3djZ7ise+EqbXnAV+xQ8iSrjvshc4a34/E82jTNpx+5iNqSw2zCHjbpTaIi9Uj0FaHCWBPQwSYgca8FhuTf4fL4hBESLUGISZIHDy2Sg8UF6Ll5hnK/Q7UWxgAL4iqhZqU27A7YvJMhAgqknlFwUjryfKutEAY8KgP5ezC9x+hXeNMnwaA10gyH0PRn/PyUA0w95BjuM32YQZAYsoJKe0G1QD86REDlDg4YLzrLZXjXNYJ6dA9vw2XzcCPtStR6tbEV5gGqbePNiWBtm9t1Nia8ulqwln3d0dOVSR4zUM76AzewZzag/2eG12Pvh7IDtApdXe8NRZP/fnG8gxRF8kKIjZ+vhACVxpylGSQ5vY4pAe6odoDevTB2bbYj7rmV3bzQCUFBkFBwcCcgNEQEgeKDfmJS8iezIkn0Ey9fk7fIom43ivVFX9HN03tU6PFiApYFuAhOEcqTfhdpy71E4QszSg1Hmo3cq061rY8uZYhYkb5N/NaG8f+TEB73AnzHi42uNXNr0UZ2F7WuPRxHexZPQk8iQ==';const _IH='ad003ef531b4ce5c38e660cb76a992661c3a8069795b6b298c50c667c8f64a62';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
