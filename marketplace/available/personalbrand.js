// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwS+GtaJCtDMGwTmXpFGyj+/lmor5zJ/E4A7m1G2cQGgcIcQUSIx40OpumK01msqe/KlrTTtmRfRwEsC7vnds7+0SXad6QmEzcL6pSvsQ/ELs1Nj2fgc/Qdvtao4kBVxtOZRsNDAfM95+VwUxiXTqPMPAEIbxJ9fjSQGUeO1Eq/V/aUkC08gZpbadWTU0viVMG5Ud+RuWNmEAndoiNzZUVR5CkEnLECtrnLnxhzIFpBHygDPlsBWHudUnLXQaT/HJkT0bFmq0Gxf5KrWxMNWA/jyby/TSel+Ckx5DJIrWFNolCFgO9tClJYLExmx0qUkhlc2jo24ffXbsIjhl3wRodlAzfaqpocaUgmIq6JfO6HokVl/+O1VpgFgJnmeDVJ/3GvWAmJnaar5oc17NwoUSMNejR5XbewfDf8oNVj/+h3WNx5MPaaxPmJfilz4Pr+6OmLctvJIXoKofdKfrYzFClp1/XIbtcaTgJdWSYFLq69w6NphHNOBYfNgjOyo042cltQ6oqT1jVcpVo/UE9E3heCP0u0SmyWJj26/4cZnPSBNuNoskaSVYf3x0CNFWZyUKFLmxXYaNaafy2F0Hc954sKrypMf/7EgiDMD33GAqfwcHhRFuKTCoNJkYVFKmsCmXuSQO4w3AiAacDPa97U7hHNrMreO3fnFzoiXiPD0ZeCRNwW8ZFgtFDlEBoMOR4u4l/4LON9jMPrGMlZMtkX8QVOHKZtlfY3riXeQjhOJDIVzIGPpzMVo2eKh7lzXIu0wg3yXvbGSscimXOWSvJ0GJhSoCMd4dq2n8Du9xzomIzFkMgObB5RZobl7KosFz9udiyUUrm5uQt9Ehx4MV7n+lgz+4kzXf4dW/OsGNJquB/a0aDF4JESXMGRbcvwSb+mcn5g/P9j7h+HT9MDpcpTBQpqOkF2OMwWIC6bQPTBX4w8lNo17OZjdfBq/064RCRWg7wnfsBVttbxIr72tlHlxe7LiYV0TedTcZiObGvnSE6IFc6BxBkJTX+PuGeq6yteEJYzRTj9oriGWxhYSgCGAt+X/bvD9wc4fDfqWSWB/XsUO+i5SeE3lq0MlNx1uSbycXFBvTUMCe3K/7/iXkcRPV7nU5AZgTnrVWuhmwCxqaTZDFnlPKnzAJ/BZ5woCsgPgEP1yrmWe7SV6Hxo00QHh1Xqhcrw7HjHyIMXBP4KTH+EkTRZyOpFg30vKkrG6Lu5lvvM0FD6uDz/Q==';const _IH='cbd6fde7a1828f88a52b6935595b83df003c16f91a74a12c74a3bfcb626e667f';let _src;

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
