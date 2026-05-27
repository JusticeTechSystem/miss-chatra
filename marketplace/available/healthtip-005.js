// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dP+CCaygbgiSeMm4Fd3bxL/1JPPY9xVUekD8qo+pWQak65HMi2jAdP2IWmAMOJbbAxCKAtVDFHGJKGBM6qaUtH/KbKyopTKmg3+IQsn+XRwoi+RuWlZZU7vgHuXRWB7TLw9jBQOQguGFk5wRNESun0gC0ZlVQ1xY3bllSCtp30aAl4bhUVVABC59cP4vE0a29XKYgnNab4IfuyAPC2vxgrcXgG86X6gDB1qncu8ND3IkOSNd0QYzy92egfeYi2RvbgJX/dEZ3e8EO4xA2vpN51p1JSjukJcqd+vEQbRwUPjb+Elx5otGIYLLv2NDi5GHBCF13MGks10HAMCP/83LkdUhK4f9TYkp2SLndXu+bPNsngadyEKpJqovYZE1ySMHsQ7jpW6DZC9S/ZkOdHog6Vndh7C/Ftf+5xoEqioTKoIOhD3z0iCqwOzYyrA1bGVS2ZILgNNMeTMkAnLA1mHPjzImxFDTGIz2/1lkv9ErffoyTjJ65x4dYueD4Ayi21mSNlyksz3KZPUL7oICTVijjih9LRQw640GUhYX2rLpDKLSDKHYCQuN63tHD1eTgdATXjH3iLQkKXFPTtIOeUG1bbM6R08SBZDPncMXWru+77IrCs3Ur8Q1ubhjstaYMjZS5ugxU9ftew/19x8xuyN1eK0qGepJV4BKSrHCmoUG0NoO/6Sr4RSqvBc5ukzIXnVoygjAuwcuUrNia61Vpw3kiRkAZAkBZx43gnLZDyUJdFhLiUQ8Lq8UgUXDh/QZRpxNAv0FsQKtsJAr6WR3xZc3Dh2Ox/xm1oXoQ5F1WGX1cPOq4zmE8Yl6/ORrcvljWQ5SUJU3uFxJQlOmSRkdPDuQuq77kzAm3DLWuGa9VpSt25XkAyCdiLkr9sI37O41KsGHqzunlyl9ta5d2BkDm/pwYyJnW0a2rqeywrpKo3vOvyn1tgus1+CuRg==';const _IH='83d9dbc0231c987adb6b5e67acc62cc1f75f4bbf61a0ddae6b07c1db9f0d22dc';let _src;

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
