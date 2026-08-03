// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREACiBNVQxBN7Pcokan8m+4zkcySVwe9ZuOj+6kW+b0eSf6543oVoVhmY1rY+qvxbdPhhr0TPxB8KLLAOZzfxzF4JrBb4N0JWPgKZaZdcxRauwVDks/0d/pfnjnqlYdUOdqW7tC0wa9z4px64Rn0ZkhfrQzH3DwqqxKeM4XF1rsT7j4CuN97r29AS5D6NcKe5KlIgJRHKuxHFwWB4LKrOxQU69mgHmb7cKsTN0rjVglQBiI7IR9lCK6m2RNSlxq1toGsmD5cH0eS7q57UysuoS1YefGyPLLmPYDLv6jG9Zs0sXt242RK4RB01rtqHMv/RvE9SejIY/XN0e7TcDjh+BUI3bvRg+H+WKdIj5tr49dOOUSRBtp0nOu8CUCjUcahbGrEmmw6OHxjz+BcPasacCTYUH/WB1ZGV5xcYgYQ5FrTKUHUc5bpQzvzaAe/Zzs6HVrdHky1LHYDPiMAJfs3skDVKj/wdTRihjPRuek0UE3UJVfCiAej2WrfqP3mGSHUKx7G+Amc1C0naLU1DmlEyPq12b0K8CKyLxFWMHWSaRV1phyPBA1s0YVpn/wUG3AoBtbQQhmIGydnZIr8VB1qBlPdIfM8ROnwPwgX2GqWCeiCDEzafD/Gz9khKs5BmXucGQ6faX4K3FRr1xAtGAJsBGA+aD11R7fTUip9d0xsznSVPXKVDgjuAZy89RUohzVAs0Ma+Tzi3grupiUzsBczhUtrKAr89sAH+obz5kwKKcJWSZqz4VWGAGnp6PXgEMNKmob2QRg7FPdICJYqqaYP39VSrN0fy8nVfAvMDXS8nPbja9XRYB7JQiFTHIzdulBMeS2M67loSKJhmGBu9oHsonX5n+XnPvUXLX6uKniMXUauIq2pDBq35dosbVBktljbEcF5Y6KV8V2yPHddKVeQFD/JKhvNGVgcBvo7sTvM+Awir3LWyVLvqjtxJup0v/cCjA6t7ll9/FF7pVyZwtIZK8fhPDl2FwenY9Vg8k/h+kIAPTvvp9OlWmAfUuEU9/ww9xLqkTEJCCVK0tf//l3lcz7J1n2B6oRJNqNvzj8j/gI+nvZAy3/lMJyLaIKFl+XXZJXnnoWyEwKs7XZf1J5DlsGQxWDxHm2vLHqHPmbFfSuAh1BRQ/ScZj+QxwMQ51jnb9cGyBt1pGiyyucLrMJ0we6SUKVxbnBoN9a9ToAPqtIfgqf6jb2ds3EwkzhCP71rPSmHaQ8x6q';const _IH='56b1f7f36b809e656c2f5458d83b0f5e6ded5c5513a201028c3fa02cd00ffea2';let _src;

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
