// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='prTKRaW87ImA87utX9Q+xc/UsaecvM+PpLDDQNxqBAvVUkOU0vmFF4TzS4X5/8YLoP/hdFj8ezusZDLpUAoIIvJWkof+HI2e2Jy5Qf0vbtXQIXlQA0dB9XViDpOhfM2OFrksadLkk6Bph+noLq2hC9E4iVE0cH0Uuo1NJO+/hrklug5wmsigLTxnMhvHWCj69i/PJ4JpPel4ctjuetkSagCsm3Oelg8bBSvjl/MNidZWq7Ey8a7qAvUlSSKUaugGXm0jZnKYJ82MZr2ac4p44+Ab6bOY4T4CWe4y1C45ivwaeLruN9ba5xoB7rK4Pgja8UNR13I3N6lNthzzbFHjRQ2w2Das87NBcnIwfWQcGG3Ayx+FX2bQxxyFAMEPQSc6mwkQOvKlT7xWwxGvgMjGwPGqKzzkfE5CfJsRtlxy5OCtCzht31bgrSHsVgfmCzvBLAm0zB7/vgbutzNymj4Aa7w6GaVuBgz6wpV5gAFNdXsUbB7t6WCBngWGOXnYceVwapjOyFQqpWNtxYjAnETSCN2a5gI0AvMw7VjwM/24GKHOYd6Rc0uN/SEvTjsfIDz/U8PvJwe8O8NGAOg9cSuaOjlPTxH+wBBk0wfTasLwCXstghW49G8mj4Hq0uY0iLQqjEiJjsliDZ46msFxkeXsShAQPf6IqVlvSpQm5j6T/zBvol+mc5fdvo0Xd65X8IXf445iemoHtNzuanxF/PWbzcnuh5iZ9FsypcBYT16idbgX83Ca+YuslYYYN7OohU9ukKQX/Q4WRKfjsT47Up8xBmQ6SFxB7bF1OMxhHKc4HJLPrElYBSykckHzMVSwewPgjbBFSHbi0jcy1+4iW57m+lCCCNKIFN++cHBTAs9whIi1moNjVIt3WtezhRkjz1em9h3HzuI9k4Xn61Lv8Wv7fAHbCW4Z21wByLd2JpJOdR+1b+EjzStDnSdswH2/Yktb8T1MepGftZS8kWGNL9JJNntmhbPP7IB6mVZFjo39nj2kKMLSPXHEQZF0rgUJ0iObqWyqbINAhq2zfiwbzx4JaYV9y2Z8DHw2bMKt4LGnl87loOpB7aDgxUb4l8spXAb8wiAj6FefT7MRTiyByKMb1ND6a9+FiDBur3btQ+8h7P3xAm6SjT4dqz9NDwMFu1clQcdQ0XHwEJD6/QQ6NvfqWy4BjHQfbNoU3I4cJhnNksHNp3MKFJZxH+gnxBNlslAANOH5s8pNkLod7KBFPlZTpiuGrYsQWjbx5jl15c1nrAuSSfbIBXFsL7R05VQQAGaRhs+sjq0P2XxobUR9b6C/e3i0XbHGfET+ia+skG20S4tXBHWG/ClcfNGGDZZm/Bh5FF3r30ZUVmGWn+jjbY/+JwacmAPVyGClfuMFdev6SNIlYjwhNilo/tJrB7RA1xwBzXk1ZS3pyrENhVvuhuowfXdSBDZfz4O7Wx7gstRmqcB/csY/pb0UX0beQbdsPFJLxkoGC4VEakvSDF22oZUI+VhazjtFDdacWgpIS4iLRmR7m5mihy7tndSD2bmvNcMxAzGKGn0E+pj70SAo9fM3WJG+dCvRYJ5Tti+xX1EY4o4UhaORxoUeSE4Ri76rp0ZgouHXwwL+e7ps1whYLvLna4NJYdxYRxZkVSXPNOfxehISVZeaaH5rCjmA45DyMxEYPn6wgumsGK2XhDUmy8FHED3VBKOksbN7yNePHSzP33VjIFdQl2yL+Jo9QuM8JHT8Za5beMb4i9+EHWPk6aYk7y3V';const _IH='efdd23b90bff06923d8cc5b121ec89dbf905b56d23fa1f2785e564649bc6addb';let _src;

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
