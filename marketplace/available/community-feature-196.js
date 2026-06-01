// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwKr/OmndDHljhFXucHr+IzT9mt5tYIU+WdE4jx2RwgU+j8vSC4F8zniKF1JKTPgFy97V9iQsjGESykInZi2iUaYsZqhGHjvJ1UGR7vOLw5Fp7oOf5lyG54Rqvq1d9N8lqKJSCTSJ9LhAs8TfmRZBF+JlB6Dx3OG9FLbNIF9eYDYyCifBppJ2vjjRNqx7O87kb1UWuGywPrvpXEGgg7zyERsnCT6JPUfqILWduSI2xw4DOCzDRGmGbg0ca6GsOMYVLHeM9e3ppa+NXpS722xw3aFA25K12mvDh8+S8YepbiuRxKDaXq2krpLo4DjgJSyfFiwOi5TQ/XZLv1jENbIq/IsCX5gJRrciZzDJbynvzymnz3Oz+j5DWSm+/z1QbiZV9nfYTq/MjDf//mI3DJoY9xg+97ROmvieYHZqJDiEMk474olKJzWvNB6aTfQb2hgqYrtXFVUnDz7EyJc4ZJRGM9EG3t0LftgkBZ2Uu1IAyopw25G+XI9gchEIthODQHH7zcf0FoimLUNcRwhq7UZqjzsXiCRwQgT729iqv+0YB/JfQZ0tyfAiJkyZeFr+bMc7bQgyve/Legq3vfMHLpnIrzLTc9vxOthDhu4TwVjHPfKIObUar66JHX4nzz3xfiitT9Y1MHBpkDL+AxKAJnlP9kHl2MVCZSj2AvBGbMYF7YM9JIQ3zbfEYIJKWXKcZWU5sHIbXGMIOOzm37r/lk+ewi8EwjvduMv3g==';const _IH='db0664639901f32a44f76cacca66e1d34da282768d02a86932c12179c97c3b77';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
