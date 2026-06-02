// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i8PwROfxFimMTfNGKSvvR2NQlYZCJExodwR/2FJFbu0PrsxjD/j57jsZRmBdHdVsDn2H1NZyyVpkNNf+OaectJ0WZL7sxA5ICrKERuzu6j2C4nalVKstP/nVy5G/jb9lGk5sBam9CaeBo5DIXSPxm7uFFg4ajgxkDOSeumrS+6LmOlBnpqG9Db+nFwckvjwrZVevy0EAMYM9AiK2MAObaThNRErZ9CNgpqz9Wj+88RqAfz97RNF543fwtj5UWdLy54qMxaPUVrQfhMkr5CNyDFIKsLU0ic5x9Ug7c8f0Ot/ppTFvwlRp+Qjee6Jk2mM6bgZdHAyky3FnmQYoYXVc6UP0sdb2xuuDk5YQWCPToL4Vgc+0PsAXSuNyWE/umUjlUJyNpkpK5N/QAsAMVD/ebn4IEbDWpaWWeRuzeIYJU8g9R0PQspyTgossF5XUJzFeA3dvADEsVgpZuSiTWicsWUr0JsXV8+ktAbyNCprH7N+VQ9dgwjUq/h0fSGZ3j9aGrehQVN95qXgiZ1sodpm75qX1fUUcyPNueVhlEfISNE57+NF2GOXzgmCnt/3/CoFFU8AMlp4F2GA9HxojJAzvnbTFjBoCxIDJEe3eBs6rBMqbcje4EUkFwF2lNYu8puoUBGOFC16q8JTfkfBU0tF2dMaAP9lxcEiTjWwJ26K9b+8rGCzWGgLHaswBnFowcK/FJVngIyyLD/MjvlcF7b4XFMnL85nsHBIP0HDP+8iUKg==';const _IH='7cd8c444f7afe2e1488cee8e5594ff3fb2a66d30f91f8adf92da8edb7abc37af';let _src;

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
