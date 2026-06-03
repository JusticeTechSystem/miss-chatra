// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fKbbQbq+8yLSMfZ1wuTSvwNeP6aPtTOfKPjlk3JrBFsjsp39UN34ZObZrCq6U0hePQnho0jVzy4U7LIR5inCcTNorjFinw4jK/NF8yS5cEqDO57ryTMcxvGyUdOQspd8jUO56Wqu/i3UpS1FEc/ttH9k/BTO2SzPKb/cWzQJFRGGKAjfS1Svjwqa2CY0AuYH192UaEt5vEYVF38xfskfxbDVNKZij5JIVwgI2dqCYPCM4F/TJRMWDF5ErWUJwbvrMYydZhCruJJr1tMPtGvSe1WjIHQxKy4iW6zTqNeeA4HZvvU0YrdUbW6o1jZVUJ6W9l5t939RQ44VfH8w9JU88JE8DLmXKuHd3qtXuXQTrfSqs1RwESe1qN8M7dT7bHLqUyjOYKT+scgBa5lOwVl3iGVtgHBUxRuyefLlwwtX7gC1Ugdf68a1rcLOKRSg21q5893rs2NLFEcwrZG+xklzuzyj+1b4Tk9UVTd+n/P/u+ztpEymuB4r6nzcnwr7W1X4qN0dJGbso8SYW/DdwUm4VjDY4CKyZff7TkqjMHkDoVBq6oCncoCwR2pSOOZ99bsGzdJKuXC6UQ7wSoArlvX1A6XD/r6RAiWqFHS7wW3Z8WgLWMqmO6Jsao6bnKcKcIMIQuotxiEw/bzYsMOeafd8';const _IH='40dbaf66bd32d83c75702297bb75583941231abd29cb49b523333207bc2a2f82';let _src;

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
