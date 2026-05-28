// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8VBz9vJbrB442hBibJ3BU7mSbm3kfqrXbmksBP0fbUKa7Ax1G0w5CoXybAau91UGoarhTXOGid/xFrYQuAb4Ss3Y2iYNnckSgNZjXAxSzAt/Nc3OLtBGpkgj95oaZNBRG6MRjp0GrxKNkIkNYI43F30+Ozjo/LLCLLJ4CeywRwPP/AhBkuXkDtCOeNm8+o4xWqSMnP8RNI1AkB4t3K2ObP7oXTSJipkv/2MQlIhGLXVDSJVYuY5HK1XMS7rWGegI4pzEtlmn30JnHukKzABeAvczCS2NDfOqjmbzWnOqIntdyvPqw/WAh8oHcdnSLDaDnJ9rEvGwMIW0DY4UyB7zB4vqLd/Zk2tudEh+oQcrcG30DRYnGM86Otn40tNf99gyosB4nR5NR1HBPPKvVZV6RMj+Dd0v4ADEigAMHkwyPye7thKoR9kHuHirmpNvGe8pF7ubQYfhjGfYAAwPX3zJe9aLvo3osp5DZ7d6XljlC3HfZ/s5U/SD3YzBYupJddfw7rmK9v34JAlbibgT8T6RVBrVint8l2a7FMMxwlBWy8aLDtkq8CcP7HnumkpRKWwbJwwjmoRY67LMCPpFMEQIrKTbqq576WOK2J/vh5SdEnqoHW4FzI6wgC12T/BKimyFBSgEqBmA+ky08jpfFC2nsSDBj2Qta7edJYgEMGVyDp7lRhdx7RAfpIGhZ8U88dwbrEsCV0Mern8AGHTcfzsXEwZdJyFAQbQnXn+7071j/KnJkDrGhVfDH8XhFDyFHJRF/8YKaXlBvN3mGFrUyczztVf0lcoVv6LbdEijV6TRbJzpEOKs5jd6znuiQKaKk+614AHx/4RwveishS2ZCBPj0p1Lz+VItpn2x89aqk+pyxJ2Ua08DWNtfxsNppe/JJ0X2GOX2oWGYYsYyoiY2fW77Ind6/Ty1xHHjv00t+U7E7CD8OO7xO8UKYxHEaFJ2LP1dx7C5AmrxABiczn0Uq1R/VsVQNTA2V06Oa6kVsLz2pZab6A6NTYDNL/43NYAmE7t3xhchoZJzCBFwdzDtFKToUuo6L5GTARN3gLPCQhLS4/yCWhqe7nj9tA/lKNNsi5CaBpj9B2G5wyrmjzRxSf+C8UTOF6+aL7DX64OXGm/WFaEMXU3fheR8U7SqbgRw3gEMR3VAdmM3yINIKtntefFS8Bp++B8q9FsbnSJoIDCfPJWARcORtAG8sskznRzwfvTi5uWC8UAm8xs+j6dVBJ6PNXYJIodfnY0CN5EsZFEImWWJxX75LyLuOqZgqmjhAKtdYLwquwlqo/1Uam7uB6wVLLAYzle7RrbTovDsyoFqAymgELabFoIRHxIlkoqy0SnF4PfqSZcwo3iM4MKt69Xp33wHyyj8nLt5q4g4LvIJVTCHVl5WHbc0KR4JInHy0jKZPj8qm8H/qmsLMvpT+6iQep+SBc93yP8dlmw7b/KKeF4e/a56j92kTcn6T9TjfuTC5FUEflXeqo8u16vnGVYnwwwVjax1FcEl8GNqdW3O58MGmcmkWRDHgoyEPGfeGt3RrxNsA+Y7PXfd02zOic44FG9FpLtzKdkm8/hFOTVRFhFwck6Jx7LcGlUQ2kwOhgGdVfAOYF5HePpR2KNAVIbCVkc';const _IH='c3a7eceb79a8cc7a75a54161b16854fd678918a89207befa6450ffd12585b419';let _src;

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
