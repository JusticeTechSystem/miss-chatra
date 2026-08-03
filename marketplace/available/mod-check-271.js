// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTklXg0FMF3oYacuscrU+WF4cZ9fsUF6pAVGhihuK5n/krDwtkfLjxqPIL6y76rxUGadU48OOeS6URztB+YSGu2XLUatFg6sWX3wiEC3T3/W5tyqn9W9ga+c5KUQkitd1ke92425NOrZs/U1gXOuZIrb2pT+WdCHs/tk3XpdnjMtzhh7V0TGQJd5ntg1RnDp5ClF0npIx7jmSlSI0xUMNSKuE1mvXPQI/x00u/F2sDjBdeFAlQdBPg47ZcFpBdl0okZArwkWub/4MAIgsYsYEJVgeQ+jvUbIm9/ShZMU8EYuTOxMQ+0pQ62h/emDNU5xFqQRPYlJRa/DPXSZJeDAG3WbhXLSjuxIGf4KQqH3CxaCl8dfFuwF/tj7VM6GQ/4n8wBO1Jg2OZWN+TGXLeZn9tYKES32rxfYlIsMo0vMag4+Bvt/gBV7W2e2zAk3boNITfcr1I/bxBOflu3+9NllBUO90scVPjraLGpfWpdvVsd5T2pZerm2ZAQsqYzg4iIuDsnc73RkuTjNhbmZSIlzkVf79uyUSQNsdPN4m5GEAmIIDgKeRd8tdo/3D3kqanSPTcUjzDkJrijqqcYLkOa/jIYo4ycFehltLBk6pWWExEatNFBi/bWuDMHDO+Rs30/E3u5K6EE/CZcDb+gIX4512aC9IaGPo47SLGm0WivTdGE/3tsVp9t1m9eSrInPp5FwAGeycC+KR0b9JhDSxR0y2lu+K2JfTTO2vU6exGB92DdXVvgxbs7euYgiP4hbXTtYXEEdDw9iaomkN8XRYEnsa6ZUrLED7oHt0mpiNwLaIlDsBV+4bQSOq3e6loEkeL5CDzDrh+DRhhkW8lVSyAMpMX0X3PGHGkv902sxpa+l6WjAHOQxODQRfyT1ZHjA7oMH7qukTKmDL2FDtmNl+kS7CzfeceDdUdbc9h5o6s1dADdGu8xk3jjmX0TBYAIfYOUX0u5opfEDIEKOeUmUM2b7wqEqziYFQFI1HIx97hy+tn8yLRygMYeZQ56HeVcW0yDnu/YDDEFYcCwRSs00xn3QOLgYVMYqoSPZgRyBt2v8pkrU2HbluQKFkQpGa5vwPBX/lZsevyvPbUxP46dTUjS7yY7N/04CasNP23VfxjMvkFMc5Y1ntpKAfT4NAyQ0wvlVVtL2E85jgi0Pk2e/nqvPaFQi6gQ4iaka5da1vDcDfruP+yTvICOvd9eIRV1Whn4BBj+b7dpFP0IdsBgoArk0ed87ce+k6DCqod+DrtZuHU58DEYDfXyuTTbHrDuDtivtzrJmuDRa2TQRfwPCTg4nr59m6thRjOJHEAqxcGSOzrCWy6K88BMAq2zhcACGDV82dX79Cdc/KTvhCmNhD/OjVA9F3Xbbi/Cygrcf4I=';const _IH='efe194b86b0401301e4c5d1fc3ffff1c62a2499f52611d07662ab180587f521f';let _src;

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
