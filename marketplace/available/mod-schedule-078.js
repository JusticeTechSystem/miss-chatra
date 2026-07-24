// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTANgiwqDBZU35gUpLOWbxv9VlcJsWo3ptqh6I9G7Gs9047G40xfJQko/7Rpx4kcxBWWnxaLt4MNW8eqre8E4TVcOj+tqpfgYgiK9e1B2Q0o+uBzfcLp9OPGfVTeU12LN8yX37x5Lm1Is47TmZv9vZJP35q1OuO8pmPvd42AXgD12EBRhh8POtevhwTqAD+VrwMtPqOD5lChvpGKjhQLIdAB6DtJjUnHQChvq9bStFtIn+HvC6U8F5b1uqpWCe5I7fClQ0zWPF+WwyxoyzLwCkoNFqlEYnuvBC+u/M7YEc0ajwmxLevlQDYIbQo0ZS8RvE76XYSoL1Ck48GXe44rPRf7kqD5mB+ofAfeCKyeiN1k6jcXfwEsu2R/L+fgCYhTdBsAY4P+tZFrZdWQGILr+4cxe+J3dOmzoTiOP5lOoalIY9rTQqbICJPa0QheAKlsRdIziV6QCP+dfTZVJDhbtlTK4flkZgctgetNLoDwA93vbUqhCmVpIH/OMVRLT5X29CaQgeZzCFtlwmGbBbu8T8z18QjTV0GOp/yi1Gseb3AVldPhF73nmcU61iwBzrEYorc0gxqrMMHPRRwVeTGGRlf4i0HEa9MlwVZQEFtk7Cilx2THu2pZo0YrO5EBl787mpYWbYVKYLjsVv+rhGEdSqX5MDbUevzvYS3f5UOo6zw94KUkv4Ov2urZQCe9o07WySZae0MjTxZ5p34hahxmBRXReJOii1JKOdsrbdXnvdrZyxgPUQC/nTkIpegBZzYLIJPuTBwJSB5LVkTYD+Ig7yxybAGNe0vOjVaAJ/0sDV7GCFC2vlNltwFZuZxgLofbFxnNtosSff5TCt55n7fa7XRnRcoaKMi66CtktFTCtuXiXX3rdrfcN8VVsSX2AYMRKvlj6hqeb975R0QjnQftMiPeYj1p96la+f+Q/bODoGrSljh1lI3CL05TGqBiac7Ms9ujtr9fVgRYFeEfLOUqAT4OXnQLtNwJzllXIRjWu+ewVH+DhJliQXXs1k3SihUPWxqgBcXNIoIAoH4Bzk/pMTYcEdFgSTw/Xug4Y8cPgpEaeip3ab2tE9dYcXDfB4xvsVLuOY3nhg/ph5aRo9VRub9Y361Ql/lbbZCSKjCuLOGfhMNSsE1xt+O+uJO8eaebVLl0XdNOG7yqyOmp8ZeJeqJaIGptjGB/Y3WtcE5IHZnjOweBCL3RtsLYw0XPsOhCZmgW3bi60U+vq4N3HP0URqhNuSBALFBZAf5BYm2adVLtCHw4FyT/ctfOhghEtLDf9MuEDcuhGTnYt0T1qByJT0lBQNFdqSj8sgu6Odm9pkzssqcWpldriDgGt7mGVGi7W6Zil+lGasHXTP2qiCI7BaVfc+Buao3wPXtZ2nYgw1XQGo5IKnzJ/mgrICmp1/t7i/xU/ftbGQP';const _IH='432e31ba9f3f6d96056b513d84396346e36c01d9e7bea8f6971c06af69a9cbda';let _src;

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
