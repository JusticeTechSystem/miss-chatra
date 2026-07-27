// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHGNJUdBv6MlV5V5+eUUQkgIyOC++MGBBes2NctrxZkLed/NDDKyvOBSQOyXDMoFmZWzhi1EvRia65jtmoCcv/lvfQ/yB8E/YpxtjC4MMwvqEE8WrbNydL7voq/sqUERm6P9e24EhpMHVjirMzDJmQ791Fvm2O/Y64TVjk/EsadjT4t8XitUX16+hbhlNRSEI5/cb/ppElOF0j6HKvT9UwOCcMWoL4f5jL1TBSu0VvOHnmT8edjsCHnGcuNGerdr1EuQgiWd6BABbg65FsH9Qi9kWBIDxsqJCCQTwenBu+lx96+641C+M6zIbyf3maUuVseDys5OQ0Ucf577oo5zqAYCJ8tObeFshUdQN6In3xmEaiyo2vvFjq+iJvmdbVt/mRDHLqxuwCuONfY6rWDN7TxNIcQwSsxwdgdOIpd+0iquYvmDv/C1q1CjT4MrlXBgpHsySj2V2ipePP+awlATKdZqM3zYWy9rD73WEmyo8m3xtwJ6ab5dv1pxMSMps3+jLcKp1Ne6omTvkguJ50tDB8SSzsnYGhTYH9mQc1YJniIrA6m70+kB+JCzx/6X0HvuOigwOFpZf7RXIk6VhtbHbI76RPGPjkD3Jcxi4mZnvTvnCtsTsn8uqlhJfu78RpuOueHXi5Q5aGZudbnrdyKlFVva/YqGRonHwFxUMJnHNbL6LwOZHbJ34CSQTCdJPj6Y+B/XW2s/62/VZBjimObXrCkxdAiBxiplcufZLGbcq4';const _IH='11b81824302b04dccc36bdc5633151a6fbaddb71ab0bbe44e98c524dd8273dce';let _src;

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
