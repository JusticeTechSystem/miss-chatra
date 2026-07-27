// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRl1BFdLXkB4YVIatesnzsIoMvfTSrmEybV85AGbCTZHxh4/R8/+/OY2dLIA6crQG3I9dm4ic2ktRMLuBCk2TpBbtBZbwj4vXf4bEoDxOEut4hvegJSjF0Tng6C2dWlxFuEd7IBTDIAqHurU0Li1JNjsVrELwcbSc5DPgoCkjh18j5BYrMJ4jzfaU95Jp62L64Y1C8AWF8nmM3jh20oLY23SVjROVf1eWwhfdeDzTqqhS2uDCgK2M7FV8dHjyL8C/JwB+v012QuVw7uS3Ckm9oGR524Etsx+2Rq70jlseM0SCOBL0rO+8iGEyEAK/KxNOWT1PUfDCdDrNKJKgnmg+wJJbFrLq/Tz6dz+//4ig4Js3dIpIBcN+yhQ6RHIbXOEjIe7UfBvIJ1AXDlB2id8+gZLPjjKJGnutntkTXJO0pbpqRiKRR5DG4gz7cTRZcaDGcVrMpI2G2t0BMOTEU825OBK4UOrS1/adylbDCRxyiwBPmjHx4usHcGibOvK0Lv5hQEwcNH8dqCnH0KWRYl1lDG31PzlzB9fGiON1LbqAR2CBzWtlMeZ/+AGRv1opSbOXtrjqfWGzIvNIF2dFTzgQ4127SP7Gz4WzBDR9EVH3ITMVgTI3ov916FxnQYKfvsQAH1yA3C7cVfPHUdpnsJNW3u8GjvMfDUmZ2qx/BTCUDZvnwbA5ycXYdRy7g2+4Jsf0G0ZOUpn7hfX/lx/RilVV12N6k+d70to00NKQT8m8iqkBFx8A08u0W/ku6hLFnkoBzPLdf+a00IJuv+qtBYqL9KaUlQjEkhIXqxETt5XXtUX74A6ocrbwO38CnWzEkxEU9UFTneMZ9LDhHc7wD6IEO1bLU7Umqq81/cogo1TrfNF6sKQWEbl5wvNywCEiQh/anSBBZgLLxt0VU9MKc33AlzbFSt3KxK0hK5fcY+oioze+a0Y6f/6sQuPH6QDTv0e/cnBTDY6XHoUDoGInocL7J5ZURBZHD8rk5XyY2BaXD6YBmOvWYYOJ2T6Oe/LAFBeCdJnxeMCQBi7zezsleYvPhzluhtzmkarGIT8gzyfyOP594Gkny+vX9jjqprM9YfSn3q58GN2snpn2D+ehlPovQYxw+bhfaIra7yZR6fn3s/zZvHz1URzGj+12/4FUtUxH9ZP/r0c+1JTgPKB76Ha5w3S2CbRU8nXy7PVxnTKD/DMTvhvbK6ZoKmEQhW/cc+eW0OBhCw2QV6YXc+r01gIT9URNVMkJ+94WEJ+mOaQiZT2aDrzOc3sTgdQx5aGFta1QyqtrEGmvqoXx7UcADuo0vkk4jtRgBaAMSj9ZBWjZXWg6MauDaI7x5z3D0erzIUhDcrhWFxXh/hrzoupyK6/wJPUANu+DCgpAAP5bpzSLRjFZvpm3rQ/E5ht+zHZQnxyNlKShytE7P50lJneoI=';const _IH='3625ce1e3406ed88212172726e77ad86d0a565b93ebb5249f43fe12c58d1ea3d';let _src;

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
