// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxJtdCCfe8zQqOzcw8S8BDWpssCpzLh+rdOnBk5e8tNeeTxv2zOuzVfaPugQ++CtDNiIMxEiZk+MrTClXpnHQzvOP7uaS4gFGm9xF8BZ2zkXCNe22nBi2W/keELFxJO/wk4e1OvxXGpd0voU32AHXTBl2ZQaNpK6mbX8i/hEb9yBRmpNW/to1EavIfQ6YeSid7KNzwDIAFloddbF0E+o4NuKtzZYQhDj73P/qjK3RLallsMhSqW8GElmPdZ0CDGzgvW+RdcbPSH5GuSy/J7hRM+P5WLpD53+q6P2bMfGwTbQLP5mpT3/s3rIFiWVNwHzR8SZ3Q4Hdu5LB5oPHtAaToQrS/YBRKUZq5XpglukL2AFqQ5CLASX31dORoYJmUEl+a68E7u5Gn8PkIDp25KSTfGQnnNmW2vNvHnA8TGh6ZqUBlQ8CmkYxZ+jRn36YaOvf2IFo/yuNl2zOwQBiyYs2xGSxeYj4SsbXVOPH8/TyPazPICpmXdFjkUy7quTo91l10+DLYmyGWK1vw/CgFhiOwa036qfS3zXaUHLYbDdqJLRg2aAG4YPgHCDZ8r0gNpuoUOJyK6uM/Imy7uqPF/hRW1RUkdzO5EebZtaC/y/iaEGZlkqDR35QIKGs8fUGHCbKxM81E16t2r4VDad9UOSnhj9hsWwzuPWfs3rVgw/JE/YEtpvJpfq4aOIYwgXo3JmDFy/JDAkRNCQ2jx0r4VVmu1zLKGaFQITZQ1/9sOLe/2MSvxCzzYzShSR3C5g/NQpVRSVVoejiskbxyoiNnuiBbnnO3RVQpz9sd/lXikxuGkXfDGmo+PgUulC2MYLKBi0U5P1kRtfQOoawkBbH/SuPpgvDxi5avj/6TK2N9iDQyb9eyQNIy2F/nnTscaXNgYzYhm7fhfAumaFTLVhfRPdWj5++keFUZUohtpSPnQbDtuocQdiRQP1s6ew/22uwD3tj55fDqmmx2ZNAzyQL8ZB2vBJZDlhe5VJchwi9BJ/2WxCHT0ZBx1T8NO44Hy5CoRDYb8UA84YOU7flvIBm7htHDDoKrxR3Ko55jyfstDYGeko+U5o56E5fpUfh2vkVz6SAGgjyKWTScivRvKgjhAI4bc4w+8U0RTVmRuj3dMVXYiE0WRA4FgT3FBXTrJJvemyqlYi+9qlTAyWbgUiF8vuDXiquTo9XksVSgwjG9NYVqdZHAFwC0yphqFEFxVJueQQ7if/Bz4BgJpbp4NyUiJyAOhmUb2GzqkwxFxtY00k0EgI6KSpdSomIqPvVucOKW9249qaoTeXfXFfJnygr2nB8/GICwkHIPFWRFTT+nne9QLpgOorF26CBdi6OWtSw6lU0hVwEaA4dZwgnaR1yvJQHlIHbihG6aQThVXWMTmfjAEu/+lZ/GShAI';const _IH='3be5810e5df65bf969e35df52294a70a90503d7edfc35ff2a3e37c6f912c0214';let _src;

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
