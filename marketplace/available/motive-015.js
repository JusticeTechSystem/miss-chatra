// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRToI3VbMM3Vvk2n0860PUShOiE6WC16rh9jsnRZqUzjkCRm2datybbOGyLNnO/5uPeZb19pn10iMCSk9YrgIH/IO+vkv3uqK4Wzpcvt9ejlQ1qovFnnAfQ1p4601m1RsCjW/J46IdpG9WCwDqcYzXBlDhvbQAi8xMfHGFqYnmFpt1Wb9aI8jao2tkp215cdVUgeZFqkitbkyVM3h2PXCEWoYkTXt72M57FoQEfvmWfLjrshTx9PbqKwzPMTSqyu2EJAjRAIVmkjbVmt9S+vNb0NvoY1HrGAAfEIuXY5mzt37L7G+ZG6aaqV2cwOuGgzDSjR4kpz8actTAzLS5ZDcQJSqlQ3DvTHrq4ZGVHA1yJ54oaJ8TvB63K1pVRUkvonCb7cWKMs1tN0FlLFBmx1qUer7foplo+A3Wg+ZjU0rE0AHz6coKt38ZpuX5ZMFYKeVhB2tvrwcpG12jkVFqZU3KKaI+rHqKav5mmqfpcOamAj0bj9CIR2WuZTxvvQiaCw2t0wKJjKU11xFgc53iyKnqJxFRWB4/FiFqEVIFoShUKG8zQQhLqh4DV2yVI69gm7VYcqZiphANWdKl7+3hIfO4gpbQKPp1W4f+nWJKEa0oM6l4p9bQ+79UlVAfq79xUQ19WyjAUtYUIDuFdReqET8uT+2684m8j9nmBq3vhQalIcaqLN0B7oDNu6eh/O5MxHP2ezxgYogw3X42Lr4z0htTeU/gWynzr543cp6Qr2uuhwe+3dIFutZ5gQO9P0TTTSKtiHl9cgUKDDhA0Cn5vMhvmkCTeRSnv6mTOOgTsuDGrDbKgrsf34wl8J2rnbrTiMfySr8eLWOn7Zntj2lsxddnSbIW0qjObPhZKkFnJTJmPJuVQy6o2BET7+LIsojHhjHsVbuLJbbHMbsgEWDMjJD9kiSmXqM6e1yHdJrRRDW2EDw9lUlR/briQSp8o98VPCAiwYeXT4IaHeuHW5526Ox0mlq28ZWlyuo/lGeCx8LDid2qxFJMQ6qfxkHYJ5/XJUo2R8wK6fK8nGEQUPg+cTpaTcpI=';const _IH='1802fae74958cd48aaaa41ca10b811a027dd6bd1ac060b95324a032cdf7248a6';let _src;

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
