// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+ZKxRqLjOy9+QmCIiPtUxvSCxeih11Bid5qZsuGXhIIEudz+YRB8dMnKN36xAQzkFZFjNJ8W4pZHSO+QHKgNGrG6McsQLPTS5gXC3I6dGuLCX+MDheErfk07RIZvDpxHrwcmg4twkl8byHKDLCD5w0iMuY3IqQRgSDaZJ12KbrOEQL51cjA3izpi+XW8WZuxcp7qys/fGFVIHsboDRPW6jR2yWlWisTaN6kzpmIivGKo6p+lORKLSmYdsd7/viP3RGWfNaSvRrsXO2x7ZiZVNHf5fAYkNzowRrSkaNb+PevvyZS0y624M/8mzbb/1oBILYHIsze5xI4ti8za8n8xoSE1vFHllNt3pA+oG9SpTiqAIrqSGnGm9Op8btVX1OqWANiYB+k+1C+YPkP+mp8u/AHT2djAUP16pjyzAfIQHYmlAXxYgHtsGvbbeCAb9oL552WQsP72QGUSC9Fdk1u65TaaMZq+R271dx46YYBcV1FXZBNrasOKmlqg9VvAUthDl6c9pxEr73KC6YBiQ9+zolGd2wKUJmOS+/j7bcvahlUulkw2n8XF4pdpd8c0PuqsWlWnmCNoGufGWQ0jD4JOwmIjmadzgnKIS5prPqkZk2pMDX4F+9gjzpJFxvlPgwVeRQ48iVaax70rlU41IBXOfxFs3njeCH8R4MZfkO9rWqDFe9NKrSWF9SaA+dNuHMlaiMRrikwaiYDumj9qOoXp/SyF4/aMkMGNvGodHEgZsrpPoMM3Eo8kYyMpbY390CBoWbn3FSTqNkXnowtAFoRbzQZ07XgVo+vYsuTm1lqJaFaRuSPYHcPknulohkzAzw9EUll/RHO93JbN1LNyWEyJEAhBZ+yYFvpAeTPBE0IVWzjqtLRd3cvFWABh1Q3Sf23AJpyf84veY72Bu4iA+Mgx4lUzv5urqDV2lrIZqcj5yjhX/xm0mDsABQyGFLmTAOBPPN4vaE6JP1VGzxPs/JSznLcPudyQqjHjuMZEcc7hwvRYB30dJTdEjHVU=';const _IH='c9f0e7ec50b1287115dce8000ed61533678dd761b5cad1d184293300df7f2cc4';let _src;

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
