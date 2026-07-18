// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5SHAjBJlslGJeBLhRau1puw+euZDYYjjOBhniOG/Qx5gZU1huWDzKEi49W4YYEdnco419q1g4PzSHfZ8Tz6vSizGV9X5Edha/9OqIU44v62kVKYi4rT97/kkpsVTX4ZJs2p93bq5c4Xev4g+/il7jP6mQvO6vznFk5fRmMKcWDRWrnifVlfsUcogVAM1PIU1AfvXheFh7FIqg4g0cVJgIheyO4ljsN5807VAqvRrq++oAe0HWfuBZQo4g1w3md6USHDhRI1mjshkr8TpOSgxb8RY4ilHVd/BHRqfKIHKccygMSq4AXmOnvNNh/sS3GwPzDDn46Ra4k+F6IKdns+Xd0B5tgaACWUZvqMIf23+Hu4w0mGugs+r+17MuwN55kfD17XRjd+WRCUG5WTptRFmWObvfe92LwwxABkLn9ebdxAJB+yxMRBLa8we8/4PkwFCNaJmW8/qFq78zlJzvhsysCxWys/WSoU29V3B+6vj1hqYg8NgVOU+koB5exnl0wBArpDAjVr1lqNQIuxmEK051P898vDKP66bsXQa6TrRmNOg80nLtl3CeJYQWnauDGkSQXNOQufUE1MVw/76GExw3zMGGp7Mz2r0WXDoEu18tt+ffli3jV2ZtcdJ444y2yldJ4Hv+Y4KFmCOv54GpMIHP/1m7CrrqTaPj8Uwkr5wY+qhPQ4W57upVvWAxqm4bCWSA/zz4kJuFv383bg1hq9jBmEKK99Fzl46+z4P06PNLEpPtlR5JDEgc+dz5AgRYxpQTwNLZc7fOa9Jt1nI/VXyIK3vqF6MOX5IlvyX2KqtgcQS9inMO6Yua2cIeGI1HwH9R/2Txgxrd2Vh4CvTIZACrK7hIGnwJJRtDcNWXvxzNM6exK4yIJos1M30JV0qZuK/xInS8YUfaHUPYI+KLdyIS8cP3+pViqhNhEcR8EfyImaFsk2K8Xd2UUr5dr0zXVa0cTvUNXHgCKKBIUh0D2VCpYlZAYQ==';const _IH='c860584639d86f9fe6e407dee170bc8a69ff270aea117abedc39374e30facbf6';let _src;

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
