// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzFMpxiMtqWVj/82SfkgBBfI6f6JGovZkWvXe2x91gg9d5lrX1sAouD+gGfhcQGe1PjMgZwmx6Lnc5I7ooC5dr02fKkVtpURxMzPqz6NtC7Lh0Tf6LfmR0fPjVycXGZ8MZLUdPNKGFgtgr/xU3HmSjgO6rHJ8bEzMNdAAM1KNSvcltvCjk3Ob0wE8xOgArO8tnj0/YIYdBqoheEWbrDFtmbNd/AcUu9NCTiJq+8DLUTZ3gK6Lo5egZGrVSgc0hESvDDDsOHPZMrNFSIAHegNw0nif6sp2C8fCC3Yp7g3gctw3LKcnT0Bxyvz8wItdOp0gShd6IKrOuFg44EBvde/vn0Nzldou6wmVrZq4c+kXUDJbfjh/erEisx6cgv1sq7dNob66pGECX76U03nOKzmnKLQZNDyt1LiQZjxqFP9Fs4eX2eBGshsObWN3tlVr6HAys9txJS/WIqTbnvvj7FAqudmx0tfNiNYvWp9ffgM3E12E6SSYdl2vmiZjnmc5NGIn/MaZr1ZCe4SRY45cqyaexJLxhGZIv31v8DecE/hHvDJAgo7KB929cMKPTw7+Wq/yhTe2jr4dIwQcTr6uS4oH+ACuaWz9+pedQ8WH0K00c6th0FY8wY04vgB6i0vKa79LKxbrYGmjAVT2NJOcp+1KA+rSHXm1gCqVdW4IRORlsJBBIQJOyHyNWcmm6dX3nHwNNG7gx6WcGVh/mi/gj1TceWYLY/3DjF3Vw1MJLXJgFHNuwI/zxBG';const _IH='e9dd608ef309c1393f6238393b363546e2c27ff5e444c40ea4259de6b237baac';let _src;

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
