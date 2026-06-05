// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dI6oVi6G9yHG7kNSqEY9bLsVU/0TuU7rSDSR8zzgX3NPagGjMSt0N05r4SJEIbtgf2XDClHGTm3VVBD1yTDpnVh+fs0En/+1Clf6Ld117w0UP7M5NTzxhtdghuXyWZmsAqTJev+EbP3SkBPJ9ED3rz8FaUzpk9nHHRobsfbC1KuhE21Vf3Cp9Dh7rTlgG9FX8i2ecZNIcEGKZ7Cnpgq8zb+/YeVVnrGuri71jPUcqvY3aMmoqNghCV6+Jx7o+0WcviENmc7ttfR8qdILD5eP9G6rs5fSIJMkdBKdedidROokZ4XqXSG57smLNbYgkhcUH3bbfydykfK8S/kOHVLs0DMYwer0sovOCUgGuo6RubAuEkZMGUKx3wKo6gcM7WpH2cBkeRwOYdBvKy0v4N9Sj6SkuwscAErp/C2tHQUnCF4KTNtnXwIxlrj0uZxIu9mSW4qfTkL8u03xjIT39Kt+KdPbT+Nw4jo3VEEsap6FUubwg8pJYQZOTCmpVoXyreDB7ZpMRD98CkuBwDrOGiSiU4kjTQ3MBj7xHlshr5SIIz1JlMO4YMidgrBI/zYMkdukpjsCsSdPIIuyuRRwJq2mdSayFXgNgLhVpFP2Bx/WFmWJeeIvyOz/XDhaGM6fugm5pu/Av58pXrgQVOaZ9O28+vB1h7v27kqgEOJj4ri+UWvRdwdtOaMfms+kSAkWqfNDDPWmZNVjBcifW4kvSNyX+yz9L/+819w39tGT+zGx6KHv87Rh//DWIZYAqEpomIbzPDnGQLFvYdmV4ST/HAouE1SYwQ6sutwjBO71ZXy8Fdw/REb9W+cmp25BapW+8LmOYKIHsrMRVUVdTB25va0NVsKYQ/4r8U4tZogLyYMy2twDtElM9ZC9pIybn1v0gje5x2aBJR/9Yqs15Ea6+VkQEdrXLHrUvPCbi+m425PVAc7cx4U6/graIh+WsqDMfZNSx6Vs45GiunMSP3ND/t28RPESIa2WMengZVOIVkk+383TrQxorHuWtcDotMO3N0Lo5UKdQeF6XudKBR4S0QY=';const _IH='05fe9a3722df1534649f0852589dfd15b21b96f5596301e1a55370f7003b184c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
