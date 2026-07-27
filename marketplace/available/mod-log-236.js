// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjCysotKNv+K5qp3ZQw2dFc+xX/R5Otg1b3QvW+gG0+TwBltp75ITanyMVZ1onPVvkeogU+/NSqvUanD8+SVPGLKtNaOJALtE7ZbJ3+tOIkd9Lf29IUtVX+4X5/2sEW1DXo2h6seNBvIeXuIog7BwB4pyI+2dL9nPBjAVaF3v3DH3XRE3S2NN8lYpR5uDodlak5Vxux002HV+NxFA9oyKzflaajM4df6RgvRZlcy2+FHdoZwm1W0GdQ+/GLJ+JAr1hdPgxvzQ7zer+ZMLnXQjBT6twvFnKl7aGDGxlrV1m/uLJfcJqquq/TDwVkIc6e8bI5GhWCam4bDijPF3pY44duTEEYryG8K+/vAN6JgImTf17erufsYTWM/8T0c+Lx2/6tusQ+QrNJWc4m9tKNPO/dCDOlvkJDaMlPx1Jnm2Lyjb+/Z+CQFDnnFTIcS1MtzGIhEgPXVHQlxOu+Y2B0qyJ6aZrEVTWsq3DYTjGxEk9OAKIbHXqj/aG1i3GtyRdyFSFt2arjPPqiWWG/wECTckmcS62+Uo+10IUJHsUgcS8ifYHyy+vmgRgxX+blI6F4FyggmNf1OP16hWQ3QOey//c+FNsbvVt+FI2NzanqkbjGnntVVZjt06KDSQt7tpUh50HySDToSDr+sdUW3y9Hpmq74pyzse7uG2Lb/6Y3P/d10cpZUG43Y+xidohc7q3SelFNDPOTtap+6PYltKiktW+6erA+279XXoMxWUrEJBpYR6FLm3FLuOFJ6wwoTgkXws91SYdRtuDgVWYSWzwx8e/fp8knYV5avS3L5wG5PjIxJddsYda5Vy6Zeu8G5ZghJsT//Xq+vz10oofHDMvvFUOSMcDFP/PmWpKiEa90YDfbnnRSCx7HcaghxulI4BI9B71Dfeg2VLKVs5gWHeY0B2LcudpK0TxYPtgLANOce4FSWRMGkaQZ9r+ZO4SRidiT3v5Gsi/gHyFWEvKFbj3wH4Pztzt5gu4li5N/t7+1WuwA9P/S11M8HDaX0wzmABbBNgpzzllsXJRmtigblKTjeOyOqNTZ0YJmOBCZ1WsnpSeVZspbMeSxMB9xLAO4/DnT/Mfg3buDhg8YmyctSI3SFeIc7hIZb7JiKXoa6yJGzu35OQKbtpTdGYDd7OFvfoDtS/f6SSd09horOJ3WemBKZB11d8dg/73mM0RZGb9+sZGKP+AJMK9f7zigz0cpNp89zyXd2+cx6k2+tp5tlC7Pgk8dU3YqFOESyIRSeavmcTt9MIPQkHd0SO6zpglszd7T4iTVUwJeDBBLTCvt+PVoAzHinSRP2f4jGmIp6mYK3x7kWEpFsKS7gC1tRO8VXGXuCRI0XMbKKWaoFcG';const _IH='e8f5f103c223c683b7d08026238a8bf3f6540c93436cc29abc7d757b20ed94fc';let _src;

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
