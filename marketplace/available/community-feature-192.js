// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bYj5ETl6RQGbUVkGpX2Sf3/gg0MbSNx5kfpEU0eJL/wVUEDzgULO2Xn+qTda8U7Op0w3aitiWc0HV8wmxk5haZu3KXSQD1AZg7d9GRqnYheMLHRd/Ipm2XRUNEPVjWA7guNeCyOJa2//1xQp6trY7iAtEwe6c3dTmagw1VNH81XZnXFsjRxZVyIDxM+taFI1riKGfTg24zO/SLxdaoivQSgOdNgCpz0hNpdYvgnGga9BO0gCsOALZ310dcQMG+zgVmyLZ5lHPfBzVlT1CObClotMD0ti5NU5FsuboLM6Or5UPQVGz+fVcar57kPdrJbzd2dzbnHuaFrPhRCkxz2YtYeCq8j8aJF5mlPQfhblSWZQRlMroWUyBgTKnoiXJ1zeGJOSeotbmIx1/hyv3cdTk67aQtzNpmLs8gD5FPtSX+UdOqJ+Gm5Drtpzhd08lTUg6MtfRWKmGpFRmbHIMCDrzfmQ/kl8ADHl/N3/twE7CabRbA/YmujKbmBerdjjAV1zCgFvNLJsUdTlbCSvmfTH92OQidylM7gFNUN0bKn6k1YzW7RT1LYfkVsgK/KcJxPzNKC3p6wtb2nhfeXKyA8rUzRVjA7gqB/i04OtrM8YojiKov8N5JHL+JuqzIzPZHaQdgzQf7Z6l8LaOpGKCFnUpMCrFp/7OgYfQC0S5ioUXeDAx+esBJ9mDXT7WwsSGx0lFySAdq6YIOcJryYBDideMUmZ7duo81xkiUXc4+vjFOia1cA=';const _IH='fa923815ecb0de43b89bed9ce1a462b5a0f43b4419d57292e2fc56b9f428be9a';let _src;

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
