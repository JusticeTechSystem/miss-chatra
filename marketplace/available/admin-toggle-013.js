// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QgIqvvq4uWZ+X2XZrMR7XGY8XZpAfnQ1+8yATnVPTRHlU+YgZLGr+OQNbn5yxWuhV+p+NdWb0aNDCpQC2NoQvpAgqguc9JMdf19rhJB5JkRl1mO31rN20p6IsauR1wjozs5EdKJt+NdcEguVFkJ3elOBVj93yGJloNJRpOlj9gKdsE52vvQGEMaZh2/esnFkVtFO2iZ3d295WAno8v6GsnUyrtzlv6COkblFMJEF+H0bfyq2sDNUIffHf7HT/we+ZxcOes+CSgth+FdTSCbGIh6BfuTROZszGOjqAg+Kf7NICpSWJuOMzAWQ1hv6xwvMnKNBzIULr6EC5pXqmLVpRVeldlzZPav/gz1EvsvwSuOd5sT04145zd8won1Xa7Gh7jzjHA9V96kqUHjK7iXX9n+mmaif8yqCqqBNfrOz+zxSQog7VSz2lAICwnJugi4Mb2Uc1MBvNDo4S8Lv8qSVi/AVeSIInIQI+45Qh+ZYB92eXrcpoD/oh2l6QdSBjtQGAkv+cWTU+R1uuHD0l1z7GX2mmYagGR4C5UA3VBF3H2Z2N0ljM/4/XSs9wxwosBdCWuZcymCTA1x/Rzus6r5ODm6RKqy+urxeN8akGDm3HKcLDKwbgUL2Ip1SnIgTi7lvwhof7RvoTfstmpO0KOLamLaE0FKJ4DyKbm532JL4GVJGXcG53WPEDEJL6oHJiISLidb+v/5r+XrcWEocb+LxJWeUUBJRI7ab30RkfDa53JTcCFQC4vTG1vp68B6Orkchg/kWn6uKoMzQKKtqJLMSRH7AXGCXNwoX+qrb5SHDCU1lQC1EAQLwRh9g9yREt1l+0oIZU56Lb2NERKk65QoBTtWwzWuPaYVqnfQl7gkvkY+FIEo6vNFAhFGLORAqxwFtJYN5k1yISk+tNi4t2+ubgai66tyeUTA13cR063AQmlJOZiZo5sfjISVewHmAM+jnmdnjNkwCS3LgQdp84VEToTYU5CxHNW1rV27s2M4Qh1gW3lkZF6HGBJY+Q4Ck';const _IH='3637c26764957a6635c3a8c3920a13d31de43fe21f23ade13d0229b79a844eac';let _src;

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
