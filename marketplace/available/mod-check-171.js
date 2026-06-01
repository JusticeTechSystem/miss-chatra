// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7DVJw3300XpX8CXdiZToudGzKdrwCEL7MkuxjTSv0hvDwpin7LhYPhrCivy0GShMGJhi0NDa4OVkWYrCkt/Ob4x53taBEAox1Ai4cfEla+Ry9NbDJWTCdfiIy9wqMbjt6KFaQnZP6vBRT2k+ACfYOnESeZWhsX303ysVYCc/UIyguCB7XwgaQHvjToVebst7NWoPZPk7EFTFxyexJ39vAx6fUbm7tKjgRIPtPlJ3jYK24/1zkrTjihMmW6JTLSjBCeZVvm0y8KTuWvNzYNFVr38QRl6oFOP+4Q7KYbJ7Ieke132Qltlrj3IuzQ2sLpUnokG8L5EghDBQqUyCMu1wFgJ5cjcD+L8LZqeBGly+RqiXGObkt0L3BBNjjEJp9R/5DHW0wMBL8HBOVZHNkvJ3FwCTABcBo5ydeq/r4MtOuzvQwcXX6Lj0kLZBVgHx5ot8hBjGhh5M44ylDOU5ir1cEo8z6usGMOrd3Y+q5C5xwSxcjecHgpkptLj0282EgeP6+hA5dwqEu8s0YWepQSoyX0Syb/KAV47iZnYw8Me6yq0bD3BL7VKMS1IaySTOIORbIZeGK2BhPAUeGSuZxE/5/G5pqErel+mbGkw7IY4wjN6XU987c5rWFy7zU5wd72wMM9OjJ5YPbXUZMZtYqJ1M2bWolTRUcE6hMXOVy2f5H5ixfno3D9ME5+Ip5l94MRLZyicnRi7cyAQSsIJQrhcypdHBUx7vrLDK57nZW0n2YfVAti902Pg3sGJq1m8HdVuvFCWl2sTAC8ZpiwRhEYV58T27yKman+kLY1zm3KzsRVHpqznsHWRVvOc+BkL1f+jyTYQKmSPzLu+soyEVr6ETnAp60qw/smOzcfwzpGCgXJwJsXpLEmtnSeuB0kL0fpxckgEs1DwyZnUBe5j3d8xpsoE2i0SGXhJKd5mqnKa2QYn2JDfkVJlHtGhiNvvoMK8fWs6IqIFkwzQhz0DoqlrtYCGirbtuNbGSqwUWAaeMxDwXEjukbDW7Iusllk2F+FgB7OSjQW8sQxxHupuYgxcwo+xD6tYhOII4Q3OrRB378D3zY6kgPd5CuZsOqboTWmnkztCz+Yet3SRUi8FjpN99vr7QEis4rLJbIxs1FFaY7i6JS2QINz87nQ0ZDLHCGypn4BklEVIpHEE15UMyCCsxUIyaI3sOMttEGhv2BQ2Id8bh8gx3UR1DWDJKME+rrbJpApHHx1XdIist0p/k16FJkU2GaQv7RQKX2iDyV5aBsuapppcHLWMatLWwfE1zXOkD3yF15/4pZnuoogiIwb2v/PFrM937jXuomgo2Nr0ZGfl5LG6hycm7UXLo5wHYVTuq6t77GILSQku16OlV5E+BLw/nF7RDkplREgwl4SS7w==';const _IH='4e30db15b2d62aa77a0a4ab31ff79de284a97a59d3a6f649c9bc4f9b0fb109f5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
