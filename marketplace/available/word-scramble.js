// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTd6eYEtXqNmxDcXAUqt3v8FUaJEYkcnJzGdK80y4qHT1Rg/ClXvvqZXyxvZni88pRVe37GNOP8+9Eo1BtK7lLdcnekYE0SVpW9zvTE9llF3CQFay/UfZji0AVkf2oJ3UvsOZ03WVGP/R8yYCZcICOVFxlDIYxpEYxbwZy7ZkQik2+Sdk/TaMllIy9qhLHMobAySLHVsXvinmA+iH0M06LgAMXWGeJQ+lzO8A9R8XYmTkojRYuPmcNEKi9c/w0G7vhXamDfWaxFNVVbxkrurcy01WWn9IIAYcsY+NgCJYDjsLzRzDP4zAbCSQmj3gUhkcV9czAMIF8fTGhyMcGXtMQjBe56ORuPUzw79LSJFCIVR6k35TjSmSv3TZXKKv36BHQLpfd2eix3ilrQIp5eC0Vtx8F4yUePdekk5lUF5vdSO6Nbau4eRHEMTkXosrz05so9TBpgtasSTyIqKCCsVrmZTg905dAgu+hzeGWqcP+6m2AyXKy7k39+Cvow1dAyDgEQsiqYtILd41SXZ8AjJdBC/Z0NLkEb0NE3WuQ3s/a0bGb86Lvdbn5dWmIPckfgXWtxWTs+V0L1plFknF3Xkr8ufK/AtfpY2eS3FEaMqo9aiD8k3by+jPDvAK/ZtmgvX2QHgDwW/VF8r1G9jr1RjdBpjUuBCEhkUSRuLcEuS/sjGwQPCzBa01K3d/plae0QB+OZRREBksqbcvyD6haif3hECXKYRYYKvHjJ/VEVi/+jXAlwlA6KrxcgIR9Kc3gE5So8WDYF0DdeRUP1DkVOC0NW8dYn0VBsw9d4oFqSKLQcgh41FOXr+3BM0fQn6EFccY7HbryzePDqqFPOQGGZZh8Y2hIpZE1+rzSNG+L4FNf3+Shtex3cWW721yU1z6IEb+68jj597oM0/x5pUGoDkEq53BQzdQaimWWJFG4KXQAUHlbVITrxQGd7KabpNAKrQENOctZdskfdq93s5SxT5vk1gYCaP4j9k+mYmWf/eizr59a3f+nVlT88duHnUf73LCTSPIA9xrL8+vjqFDmxZbLGqiD3jK06S/xlX/sAKH+0VE2K6IoumGLMRkM7L9mlF1HixOi/SLtN4akgfubEypIiJpDWKPstfafY11NFFsEfcn/11AGT9ewLklhNeQ6YNmAEJHbxOvcw9XFWKNtYlV/0B35OyYMQk5tt//yPmlIFnGvvP7h5ZLWQ1klEd1jfRpOAeQFM0apXKFiWQXeLilFluXtQoQnR6zmIMV2h2HYEGXJBApptPw62IIpYt+Vl7endmh4aV51CxYWbbeBddoTT9d0dJJNacSsvMJCXHt6brHW+K+mHFICErRW8s1uw+E/AEykpJzEtrfY=';const _IH='a4285277ec63f66244c762383d8351a42dda84d4da0ffe83f836013ccd47e8f5';let _src;

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
