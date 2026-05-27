// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CD2bMpPwWApvD2a/jaJYLO5hee1+QDNJEHm3yGLjau616s/69/+wXmGTPg0JMs0MYM+eGs0rDnj+/bCu8fbwiHL9Zshwzr040HHXTXIfFCxSYMJuan4Jhtl3V7XQjvto1E62KX2zBTnQKASIg0ZWkp60+zEM8Yka85jxTBnb5wmLh40m6K4lEWCgJKpS1y7NVCnQ4lc2mUfkqQ4NEa8domyTzDFpV1jv9QdC3DczvDdX7xXMMehzaF96W7i0VFqoCfq3yp8n0CnEwqUCg8zylrhc2Wc59GHWXAior91dIGYfm9zjW09SHvpGBxvxrGQexyrwStqZJBwWJKohPwFct7YRh6ZmvVqMr3KO9WTNe1CEESqhTIhNFGqpeaW1VT6DGLGf7MiIIEmOg7dSwHS+8SOej//Av4gnE//piJi4kZL+c3YUUPvJXOs3X3Ro24aZ08CmeQ1fNoNkEltRo7K3bxF+s5RJhjRw4qceKAocD29D0tgjpBvjmgCxNXFptAk3PPJnUXxDyVQFdq2Vf4ZMhNOvShDvtb5Kso1saDF21Hq6BKlxKWeMwBINrgaA1VgupAVbrpfXwrY0lc+GYTRQ/DBZiJG0sdlh+pGY2q2g2cl/zO6YR9/71u+b6mMEuVX/M2+LjsuS4Ea2cSbSm40QfLqyNaViphUIW291Jb4AOIJAyKQ7OLCDcUUyYWts9Q0p1Mo6eJLpRF1SbBOODf8/yKjnzes3zegd3z9jJXSTXeUXk9rUDi1PRKRA';const _IH='4880cc85b1ef9ccc67b0cd979ceebafda2cd0a420b642f0fedea2e5e76805b60';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
