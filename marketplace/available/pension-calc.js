// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+dQh7h2EdR8lPqGIhckzUzwjZ33c7yFBuRItfHnULLtJ/Y87sNPbkHa+QW1Db8q5N62qQ5D/evmAOuZcN6C4zq8YxcpCfoKA3ExagqlpjP/hnH/VslGYNWsPYG9y5EFnPJdWS+iWBOd6uQ23StnoZPRM+jrB+VFM6U53JiJYw1I3U38eTolcEaR/N8dHgwGXhRHtpCgjRQ7v2Z2MfoxV+WvT74skJl4s4jBoiNujBeVhgJxQoaznlxdTgaSo5yHys1pAqFy/kMF30tuoln9TIKYrR6WywVHvUux6v8KXeBtukrmrZUfg1jys1Jta7PzqJAffqnm2AcfhPf0oIWF2OoI3BcJT/g6R5yP2978okX0++CtL/wS8KfT2lvB3d3A7qDDXMgFxzCyUCYYaxmu/glF3e19soyfDi5PphNEFTE7ydPg09u5g5oNJ6ZLV/eioTiNKVeGPoip9Y3hrhO+D39Lxn1KI/jSHVLi+fbqJPH/3f7wZ2qB4+SgyQ5AxF9yjTLrUbteNZ8OIZ5ji/P3mnAJMb6WckrKlMNnSZdLshejmTPSjw1U1f1TfKfgql776phowDJYIbTDE4HDbvmhWbfHx4vc0bkvLvba6jJiKVjOeQLEkGRhcNEjchnCXpqmjSGyX8HXGv5fulvg/Qmi+dhJlYtN9GWnBgwtwTilDgpRYHCaYA5BU/nO6PxLmprDVVnz05an4EUXW7ZNDorPr6I2tIGA9Pq/ckZBdHc74JYQuoApUxUlK8cm86OMCbchXsWmQa6VLo1OauglxyKXOaOx2zrv5yq9Nm33xtTXbmEqM2CY4KMVahddo55lgET38f5IIUYwKYPluVACiy94UYJ2XBI3rx3Nclx0FMiIv09AIUm26OHySr1I0ezaCv1s6RCQiHQY69K1RPHYRe5wSkIALn+4MdCdxAtzMxernhObuz9XUVIBYBQK2Su0hzB3G+hhuVEPdOC821ET96aBU2eSRIsEPRmz92KzkFaZYtFnu+G/nj1lhs5PKa891FqMFRRgkhwJ/mBYmVcXLy8WjxvAUdCCWRVolqWq1u+LY6X55dUXnSlmYzIbqFntulaystLeLHgrDFj0IX8Bp7I4R/+uNUYLqdfqdQhuctMVyFII7BJas23PKKVe2BGG46KIBk750I85dc1tKm0PsxXOLrLuzn+LtP1RE0cWJr+TNBU0g4kCoLAHzHDLBBtJY/FZ+nm6R5suD/wfUkcLhLJj8D2Z38jQX/k2ee0OqUJN4AW4H/2ua4h7LZVayAwX+6hm9aF6Kje6RvxX5NfSc/ZuJhvcSQy5+fJQ4vZrdQOKIxpa03y7VQ3/4w';const _IH='5e5c14729bc49295e578274601eb27a5ebc4d162e9a93ec93f994e1e780c9662';let _src;

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
