// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQi2m8/GQS3rwlwjJucJgHPMXr4ut/tqJd3ck8Uw4qt4p63yvNHixDYN3R/GG8Mif22hRi3xYE8k7eaQ9GvL1TODWy6j/vbS2dgpCB8TQfNwFy+JM7ZGSHJGkczbGe57AM9/cS/kqmoZ/1HrWWYD34pU3ugPc4xNhohCFrFbbGgT/ZePfzyyQ2QCoPvSRvvedNOL2OuWdnLw3rJqPgGcZlD6MeuTcFcwuIRNG+t8N+Wf/bwQxpF/chJf60anJro1CZkWrWdxZDQJ17lGfNeSWF5K7/ND7UU/E6lqZojds9jD2JgNXrfyAeB7yBP0oleJFqr/Q9tpDYGHMM+dlb5FjmBJNsfAR4ysDxjFLR0JUz3L7NWH/boU5O6LLtKHQsLP8w0sGoUNDWZKF+wNL/nuFwZtYrJ5XcpUcgX4EdUMTN81x0ufhOe3fNLNqsrdqzqLU07nmFf6NkUgJnBAYl/ywgkVBSZjP6RNwDb4sBxP5IiF1gPypRCRcernE76racw49Opk2kLcLnsNPsfGGBCm4sS1mr8TlKV4ZSs+pRTSVnW0gjoL9GPk8scK+8qOD+1oT1SjJQGue2tfYsh4mbL+XouT9jsf2nvJh0xDdtlxDkMusKjPHl3GEQEnaB847bwwfuP3t+nYm+uJc9Aqj2XaWcSYFSF4U/XAOJAaTm+0pBpjt3Qdgpme/SyCqlik5OoX6P76ry/4Vi+340ZyQKHq6rPJSxmTEFABsJc0g/sUDFPLLRHu26d/k0eE3dLYmOYaMTIp9Vd9aDSUupVnBt5zsqtKnk+gobDkuBn0hcL/2SgY8GvOq3bJI0fDF0lpv6ius7h6f+E8lVwZgI/ngF3K6Y/JhX/xHE+wJGiONNYM7MSr/++MIFlS5/mVFR7jxhsxKmHxoNtscWuUihWejtHlF1fNPx0e7YPSxA95pBHLjHdiocwcUZfZXeJYXnoJ0zhPXdekCaC5g7fUMJU1WrUpFQ0b0vJtcQFnPZiwQ==';const _IH='cdd5dbdefbbddb232f056664f0551a7a74441d58b71045bd1b67ce76e7e893dc';let _src;

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
