// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ48imj2GAndENVe+TYURWZXy9UYch8rSSYI2sEskt5KJ/KCbE+pvu0WrU3yf0Y7vg7kAv6JWsFYAyIqEgtuXkbX++Gqu/KY5VTziQ1nnad+7tbW/ljH2sp1s90LjHFuhpVAPXf3n4CoNMKcxXHV6AIxJPRU+jfMxQ58jjUavjtoQNE4ZtZ3TKJRAjv5nQgTngiQfXHxJsrIlYEGnJ2rqixq/TLVQpnvaCUA7n1OE4UQoWGSaraz2r9bHxlWp/Vl0fg1CLePEr3dYj70GSyO10w8HRtvHXNf7GFrSBCwapJnnJVrjkFQ9Mx8uMEkizpdbJTo5o2GFQ7McQJAd6Ap+Z0xUFyUe2bYgBWS4/PwZbpUjeXrrG/VlRyhPCGFXOv3BZAINAWmxurZwjukqM29hH4BDVi2iWms8grx+kkoecHntv3tZ4TrN0F3DFnoDprGivi77b7Lz1CMbITeYF+cz+1YZh3CYo/dZyOPmY+I87PT8Dwo0IOfzFGa0uILxj0tqP4ne0c7dhCBF9i0MDIsgwYFEsTXCS1jsiLMCH5tAfeSy+EoLmC5Wej8FF/RM2TbSoibrYMRK6xx8oE2pukw+0Tw/lATJl+wmIf+6TpNhmOLPvQ+wSg9kzh3N3IPqPUftrXEt6G/+rPOTH+8LXkfgsyXKreZS3JFt8FdIx3v1fkb9lKbMkGHKM09WJRKJbHho7tvKx2zFZlNpiJHkKLnP23bWJuoRxUVoxVj49ZZaMl4XnXbPitIFucHSXdwXy2R8+MqJSWwcxoymx28lwSA7RYBn5vQF26W2NgTLaEEpTvw+hSzMiEY13thgE/UIkJdcY95vOm102GAXDQRumTN2DiScqzjFqxpt5JoiTQRdo0o5GjbqnNzpc9x6SVxUGDqVYbskDLzBIsUKTYCQRkQwFgcaCrtGtbkyZrksAK2agwX+vpUwKFzyac3K3OmPip6KjyEx33lAh+W1Z2d1e0gIkYYSeTuU4gtHBDojOj0WKvkE1lSMtB+goI85e6mlQrPzW1sCRMXIdFHIO1OJBcpGmVUVzKOcGOUIdUgv8IdytJ3cYTLkUPCh8DnoVFTfupuMeO9k/XPHaEZ0+Pd3iKr6Zv1k4ES7hUYQ9NvZPxtb32TPdBCeAbc6FwdHa/Sxa7sK+l7C49H/75Vti/4MoneNFwiYKYE+cegszqyPCEl66gSoTGa9EXAm37/ad5Kj/ex6z35xnUa9EoY0uTEaiZmVYuOJexNANFWkFri0ebYgjfR+OV1BQL+YLhWx3THNh63VDApFjkN3uDvq2OAwFjWJOFXEiiWO6YV6duPRmtlKjh6L3rHLHcbWyB1/6lQu5LxfTMLqB2uvA9aQgMsRLn1GJ0MEAE44xdLLUrde1FcgNmgL/Zcob43FI+2s5e91xbtaDdfJUfC4HaIwGq185njc1ilV4otw3cQ0MEdav/LtTqgW8TQdNSsRGjb40I+/d55HmygOz3YjfroHO4m97pzj9uy7Tij3RGYpwErNaJaOP5xMUUUmeiEkc6rsTNhuYhMJuXMj58FwUt+ntYhiEGXNQmox1Zj5Z5NDAtpDRdsZ8/TMua+HT8E3SLUFUrVPEUAwDh6+1go9wqYaphZ6HzKhKPSxG2WNCR9I3VLoS/b4rcM0m7RbesricJfDu9xzPvqgJZhjyoCUfs/NsficBd4Gpp+KGfOSxQsrOy9WhVWIbM6y';const _IH='a85e5e4e5a5808bd16f2ea8085308558c0531aba7f2dba58bc2db16e5a65ed6c';let _src;

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
