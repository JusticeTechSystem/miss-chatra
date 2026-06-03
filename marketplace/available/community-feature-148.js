// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YNUDYagmtPbr2igcJNkVRc72Q3LKUzGeo7FX4pZ+yw8kehLzx6L+DfSZrvN+uPlD+X3/dUAdzWSbKpK89pcJDsL9SVTZ44IvjhXjH7qTHSu09vSvNHfSuJ6p58rU7LcSmJUoerwlVm3h6moHRG6wYH77rP1ewzW46WJM2mCO+3fQVnwvlXU4T2qQELZOnkrN08/N54RKMK9NBtuqUtwcMe+mjRyb0JwOVMkEtYheDlRIsTPm/ZM4yLF6M6X4djuksdrnvkIasmRss/Mmu24+hN1ZX8Xxkiwf3vbSIOpwEa1yaMUBuPOLA4+x8Ab4JwicqLYRkJB7knORPQgz5WYGASMJsUeD6cFwImTy15xNVFsAYVfsaNLUSoyvODjgCwHBujyy9nOVGQM4n10+jvBmFJFiLfasseZElHpwo/gD417i3+lrEeImILPj4c0R4jAGUvUSJoKoT3UjrtBQxmuWyn9xt30MD+3ovHUyDNNwvzpp0vUaZh+9DTTI2m4HQsrp9vwoHj00u2LiEVw/PjuPuEl7hnMmfT7aQjaTPXbFtxKYsxORoBLakNJU6ytEBMxWgOFD+qyWBC37SBfCTYhK82qquhWnoMjUxKLrKZdeTkbRvNzvePVaAzKy+E2pVV7WY3MxCldD2GG+NvIJ45q5LvgBHZT16yCNWXfB1o5zoog20u0wqjOUg8Ilf5afqnZi/+cYECEfsHCjIQMmC2HUflLbvhE4V+yxX2s+VwI=';const _IH='7e5041c184117eb77e4d449340b0c9aeaf7ca720f96f206f93599abee6866a99';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
