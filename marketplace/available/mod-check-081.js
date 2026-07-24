// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNDUj0q77buD2zk2Zp3WeFi5VtspC5f70MgdGyYc7vY59ToCYYdBxxzqQjZlcICalfkOpmP5+QEBWMZC3BkHQENsw8H/Zyi1liG6soHpBjSSWKqAfNWbJK87f6ErS+cRrcZc0mjyadHCv1omxkO26rlyxYMUhEX+xlCdDv3dPai4OaJpNl/XY8NK9j1lNqweo7gJlF9nRzp9vPoxt6/zMPJioYXi2fAGe/ZDgJjKhwb25rGXxy3smZ7NT7L2wo66ZP8o5ZC/sPlXLmy9Dne00DfFadx1oYDp0kvmHaEgg462sPCgHMaXaEn46Eqh7jDLSoPl+PdkoKjocMgfX6BXRn3aj1A/5WW5Pu7VGyUI814Vf1FKVL3Ag6dHqk1VoxTuVQw2EyjtzHfmYtZYRxSOOJ0n8CG/d8656SFZpWJTcqX9R/vCHHQtCPdxUgGFsqn6DtUGHPSPtq2i8dq/ZVAqvy+MyNm82xsouX5/myMh0q5igRzWXyJZ1cSCuspERP/rIw8/Qg00Ehw31P9UdIxiz+0dttpu/yLj96PdUa3FPtAfF04HkagrrsH82vq7tUc3hVfMAt7PICg0X1DCOmB8BSf1H6CQn+YZ0+Xf9TzbCRawvHrZ1HK82pDRYFgvcE2MFIa/bgte9NIyhOfcgz7JF++cUKSfggLYvhPcxRXE9NcYbmeym6ik4Mk1j99mukfDgiZj7sJRoB0UlBk/o3Gyv41ZE1Ax18aZltLu0TPGmidhc6CXZgjhZzKX7UG+9Lskp9tQkz4KkzGk2aUVr4ZtgZmFvcAHeMLh54vqDe0JHSdj97UUxeyW015ZWGd8CuWzlfAZudsm9LfdcYVSNjWvqnTQ5jxv7yF5yVNR/0LRuUCqcsVZFCsmV9ND3ZkaqbEL3hUvRl1L1bmebKlEk7sn+CEpeu+ZqNqWxkBGTvsskUTn+yFhpAapehCyIsUzGXusbh4ZL6dZaODK+AOmdQ9ZBuOIsmtA01x3UzmLAo0QgN5bYdPyviGV0okS73Ivv6GguC8dwYomodcHVs1k8Ju6btznASoH269z/3l2GEhdwLmCXcpHEtV1mlZues2NqKWzteQeaWkGY/KWmpWoIocXmO89isMM7YQUXiqgQ0gyDUkfhXfXaVNSTdnZXpdx2mOO0eR7SJekshBNQ8lHSNWQlhmXX5PL3U5oIF4yQuRZi6xREpLBgYrtwx7eHJH/A0gUT97c+6vsuFmZGPSSWkOTN0dAnD/pK83kd+wufGjcmZH9C0SHPhx7F2PFSOYlIqsSN89l6Bfs7JIRHpfU3psLLQvdnpzOnFfX2uwXeb2aNTKVzYORfPGKFb3I9uLfd85ggovbPMx+ab0qkzz8C24S7XJMWdNioOVxoc';const _IH='2ba47301f602bb76ee27c17266db95c84d56afd8dcccfd402eab81623edac341';let _src;

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
