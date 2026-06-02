// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UoLTy0MtNTZiZuxvL94GhBGQN/AkAiv7vdk9cqSoV+U+Z3neiT0U0jA25Ck6s3o1NxeHNEjTH8wpkvkzdQ2Bv8v8foUR/SutG36tFMcOpAo9B6EikH8+yQEa9wqgq88TQlOZ0eVllzRIKMIVjgNdxSzBIFksQKro2fJUsBgc+clEczJdiXeqskgA617zKYIQ+RWFGoNDAv2zU0bWqs6rE/uMKXNH9EmOTgzd2/+iMKKuo6QB7CIqfvkftmfv6AqFg8WXKZ6jgZ3To5Dr79TSK8uTeVyXdDuiC8EH7cyZW+swXlvVTOJcTsc/jE+jE2s4Jt1R2OsRIsY3OevDAqaGDXMgwZphHcXP9Dwa4keG2CafGJwoMGHjuzdIIZwUzr1plSCT48OG5OQr3gGRwVkEXUWxTvBun1KYyq8gJIf5cD3GDmOBHjqpJsSw96z90T/5aUY341l8YkvwoBvXeO5ciFm3uqJYaQroRZ5Z25CZ3I+6yYQDcWLi+GN2JUSxb3t3VDMJZ8h2WYtf389ge2jzmBw0P+RHyIa3gS+L4KEe10MOroQtNajacZYfeYDeAJSns14a0EdXxIp0uQ2OMzbr7XF4j8IyyCNCO9wLHv7aHr3gL6FLUJ6FD+2/I1SmNri60WntkeGWsDTMOf5/EnwofzwYf5M/p6gDMDloeAQx4hnMPFnU/UqHvC+5xZ8PhUBnEuGYEeoskKdIZcldhlSNuK/GMYRB5MXKZzLIzAjWEDHts+rRVuA=';const _IH='d1e6ed2aa8d97e382730e75f4b4568de946573f90290ff9687936cb8a843f280';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
