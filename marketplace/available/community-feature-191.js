// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFiEmgeZv3L1avtUZdfvXMk6GKzLeq78Xgxec/RCO5PAy8q6WHmSuc95DwCQHKGgWPEBVyTChmPDu495jjaeCIdnMeBUwwXtLnIyvya+xVkoV0/gNMI4PhYETLxEM+SOMEVc9BkV/hL1H3qtZn1yVHrN6rojlrybejvevvpyRCeTH/PXrdHVyPUw9wc/JXu+HS9kZtbLCr/Nkx1cW81IoRvrg1ctjp+ce+F30NW/fwCUi53EgAkMuqNXjnJpbhZjuvQBUuLwbpNMq7aDHx+isJhnZahKpgiXdKXdM8sQ6tN0m6RmEWoEXDr+ilf4l3qTUyAw5q1LhX+tbt8pbVvo7/Zp3NtFx01mjMIcIeDyN0cMMCNxs+MFnyQapsuhkud0i1o/8oDgi6gnJCHM1Djr27cQvBkyByI05EMIgpODFkfGL1EBRGgLt63CalAUmRVuEBP8pBMQimcrXxFFY8sjptCyBUruBxbSJStmdOMdeFfovGRG/dDKZzbnjK5nrHHDGZB7fvw8iRGt+Z88y1nmX0kqDnzTgBaT/d/3zF62BRbTXwmbDy/O68So+sGByIUPjyhyiNeCTkf6hhEidRIDCG0/tMGEpOfM4N8kS9H6Wi49YqlV/HEpkkJkzG7hLBAtBk4p9Vzlz/B0EEkiv+JsIa4Fw+QpcNoUCA6knn5zLQJ/wwPwM/XXb/yav/gnDyPgI0EOBCKhH+auwEBzlUaYggNQH4yM7h0tk=';const _IH='6cfc410db0b4011b6db0173dcc65a8ad53005666020f0689e2c4f21ac04f6e96';let _src;

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
