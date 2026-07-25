// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtjCTRvzQjzLXaDVOV+YIa1mL3J8K7Yh3lxIQy3UWOg0OWSHRqewte3C9aQPBRDufPCX6Ek1tzvFUEbCs5zBJdVNiMu6fa5PxkoyweFomaGGwKq+V+ZbMHvbuDRYKbpYYW82aojopQ5IGUL+iofESJ/TW1P3t0tSzIjSdTz8jLsGs/58LfXYLE46M/mfbFE2KdRRKx9MRSzUCe+//iECNYrkqJwwc4hnCXGjInPnMUiIIFMDxhopoSj0HSD4qxSgQXWfdJBbLF9+UzMny34pBi1yrfWfaKYOku90FeSpsZz6x4SEi4wV2W/BiwfOupjSgRyj7CE1M/rnpg0AMA7/4BvoprOxWrcWyj4X/XlLXoUvNnpOwycM0vE1a9B3GZHdASgdxWRkY3MGT96bEwVEvghgh0M7pKJ+pEUYVWIqe2lE9HXVSdBy5MtuQDBDShAFr019gvzafmQkOo0EyK0NM8NBuIOQkdl/KOQjSetb16hFTi4rVsJ0j1Dlk7TrT2J63nSs7/CcOgpOgwGY9rgQH9h+hAKnbC6l9nTEpHNp7whSNhCjn6WuGF6j4RpkG7m37Hl58wyruJwHZYS5uo9wq3HqJkInlTLp+V4jKwCaoPC6tRA91v541DvEN9lfbL2gsG8VItRZ12TXMr5gMr+rNXILQeI3xPVoMvx5UTfy8yyvAjvvq2QiF3l6jIFBBkzTVt6EbDGzj9tonGhx3z9qzXIziLrkrA8GGWAHxWN0M9AKLiJp04oqMBDq63woXN9hVgL7OJ7pAhyJZZVhWbPi3aXAiQE696d7ce6uCoE9GxfNFFUrReV2Ewiz1LAOl0QHpgfFlRSK/XumEtjuKx3YLv7KvWJh1mP+i7RgcxIezNEeyQNPT9HDECQtMANf6tFlLc23+Fm0Zl0Gvf9R9tGPbZcqvJ+1WpjnldUQIcSaS+o0V/7b/nmDwC1f3bUn1aBqixAeIp9U4bb8OVhJPgwnXtxxSZ0DYuNsuuTf59nEuWrpvk8TMx3mZyPi7WHTIGFgmDHzjMtytNKrC+xiqGXD2VPHDhjscVj0sTsNRuC59GtJCL7Ry4rdmWLTWDmyy7kTNkOi99bhTWb3xr4J4embKwMpFEIMkir84uAq6iyKevsEanCck3yFrDQHD83z/rVsvzT/a2QlzRS04/jmefyayRQpHS0O51zZ/KfKu53urz1IF7fOGXq3gugtkvzEjtNfQ=';const _IH='cd36584823eadc7feb7a693b7b60a2410a4df622f753d56320bc961ab76a6689';let _src;

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
