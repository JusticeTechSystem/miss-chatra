// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='024sqreU8zr1k17DXNZ5INUVH+tpbc5DVzxmCYEMhRldqSB6c6Kf65vXeKmejOACuZVu/pM3udf2/P2E9Rh7ZcJnBLD8y+LYrRpuX4UyDDPCEownTGjTs/tHwLni+znvsm8KvJZqSfyG4SpLsKVX2kO5AkQc5uzAMUV3UPmiifAUzZ6JB2WA70Pto/AsHyPUb0aTnSJeeUwEypRW5QkOOcgtoFCZlA8rnfyFdvgNmVFBh2f+CjWQGWGBLaPliCVgAwycEnaRS3AcdNDz/k3PR1e1fi2yIqCAea8BfEuYvfhWocQilimDMFzmmHqBb1nMy3p4pO9oUWWy2D5ce752ordnGnuWobPsdu5YqtChNdLUnWbgWi0z1h/8+4hBjVKhaBW7M3SrPIV5w696MmZGZmd4UgUGsk7gbYZ7BL2m3O6yZMf0t4VrwhCd+ZXg9wyNXx5Hlpe/EgoZmjoXQNfxUNql5chcRtBRfGtn6UGuX+LtOUBuYLKxDghBD4nl3+ghrsVkKjrytXcGwcLmkG7meuaxe8RKhwgqNs8r9Ju2RRuVcjWjcFVSkuaIEkVIHnn5czmHZcoAPlWG/2+5nTD84I3LjwljmS4FMEyLJzf7zQ+cboZjRsRlqlW3QgWNO6N55wY4TOfVnbWQfdYRP3bq0EBzn0V2Wxlui+j9rckqUPQLtZJutX1o4WfTpPrZ6j2FrDF5mJztbkV7QohyrzNB8rBDFwrip3UHjr6cfkxnZGT88AeJcjAEwsd/XPfRE37zBJoh190BAnT9YCSxXXx2Cj+sq51WQh6s6BmHu12Tq4QMSFWXRs03YM9ghENChBhbYDM0Hz7JSN8Mu0NSxPvfS0TFmU+/yRR9HSRoVf2eqC8AvaJ6K+boXbT7vpJ6WqLqe4NEDURh+P79rbAWxL4Sat3UFcAiFgEdHr79gNkUVehJw+BwgQJ7R/+maqWWBhkvgiFAwbrY+ZxT4834fUk5PGYqAY9wgxvsGfE76KHoBnQHEZRkkuMEiwf/KWZ8JLQp+Dd+0wo4k2f95hwCNvDQdK9eTvARUJVrrZ1PaanpMbeGSA==';const _IH='79155d0fbf59c8deca740fe64abdd278126b75c91a906fde34178043f5683fb1';let _src;

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
