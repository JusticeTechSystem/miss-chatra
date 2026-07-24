// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4DIU+7QYPcrIN3vYA4whg6xt4xaPxyQ9sL7aYWZxyX3vUmLiN69GVjP+bdMrih8wAJfruNQxSlo95LJu9dbpx5lnZVdAOcsICbwH7O9XNy9aOJEc1loeR9CmaKcqwqO71QzjyKyN449vDhOujs3wQg+u2s48IhFumEa3V8Ya4AZEcP712vRMjoj8kaLkkKiu8vieVLyOQXaiQ0pUs/8HlQaSJNRtSFN4bvsOcaDkOVy4fJQwoGWZoAxlpQDNy5RFrH/qsWLFrKKCFJiEBki5ZdlwfbmCIAVBMQUcFzrMBSErpH5BYLnx1C5k7v0P9imYDGrqNlr1kvnMb/UPPvpBw/O46kIXj8BuZf+eGkiohjaCflJZCjyJE7Y5e79TsJGwMAUxG9t9/Uk+0F3coxhtFt8HQYGOyIRuXo1Autiz0mlpy17hLyNKZJozi/jBbaNiKAs7FmxxRkytohzdUVNiYybDGg+NlwF9k4ohK6r9dVWlj6G3xEizdj/nzeFrh3tcyxbtpjUq1cueFsrOD4nFgqKvN4eI8nz+U2p+CAkWK97ftr83Wbkx6RSHuUFtn05nhSyzo/KU6RQVbL+nAtxNg9oTtP2aM9GqJDR2WdcsbINVY5k7stG1x8IBftpkVG1SWQGBzzwqmlblV6Tn0pR+84V1iXkk/IGbyfpxb45JMxEgyKCERsSk96kFFeEmdQ4ZnalBecDVBUCnTceKsLYW5kSukQjapkTyOngcaTu4qSz+cHaehEur7H7yKkX78O6uLJVZPf9Wlxtx5d0HcRau/jZG4yJV26Uf3bHI0d84cpRBiIL5Kd1HBDxi4KEyKCEP9i9qFKBOwJI5FwVD9pXaiHjJYGHgSdnIUCj0yAli8rG2PPQlSwycEhPvi5zYSAs9odDPE8tMxHVifKq/iChG/BsoOBBvQJls6G3KCgR+gSzwOxRCowsDiEjTMJHnxzbM13AdTjY/8aZdTYZdc+DfBXCrMjZbZpKXtCx5uCSZ7CnufYCAYRYuLq48=';const _IH='831a3a4e10ee50dc83bc11b27750dc27c38afb3f479b8707348b3e725f9ca313';let _src;

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
