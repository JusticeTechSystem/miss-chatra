// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjyQK1KFnrwkuG++I/XigUEWUm1vEGWQiYw+Mi30yy/tC4+Rv+beK+ieJQ71+zPJ+OKTgZnzzYVwNZYzqhMwHLHjRoqULUpInNtrhUnSsWgT+NQcQROr52uhEuQY6KASZzYrxISTuIGUlZWH1r8TgpEJP0DcODMgw1M2fzZu6l3zAFGh1hUwHwxFZ4CiR38ZC3XtUuKpYQMYUHcDCdOPH/RDg5ASWzs76o+cmHW1gZQT71LphnI+x1Ol5DrmFLbo1mCwzXORwLt4fVjLy/YDNQ4Qfoug3Jm0EAMhGznS5pbWUSeSY8Ib7SwYkVFKbXxWy2uJSNY0CwgOWjo3jHwC/UD7JI1FP9ZdZSSoOgOoHAjJyB1MnZ1/tAZ2FcT7/Ab7Eckjav15CvtD7CsDwsXaREZIShR3I4eu5zBQhHEXXx7t9VlmK5pMnoO5jhKp5SE5EpCyOKDsNfpmsC8Hdg98LZAERD1pnrK8SrvJfnakkF0LthBNn2/4hcB9q/dZ1LhRrgyUUK9/Cgk5lknIwqchZ0Y2Gp+Z4GDITMTUM71AsqTANa7EtHhSVpTXUQYyPxEvKHeOPNTePNwyjjQ4jLq+npNSJ4se5dwfUaAuMdfQq3qLxdN4TblmGPrVacnz8+kW5sEDmyUu3hQFVst3CAn3MBy5A0XuTfWtAWyp5Ieqy2eDEObIT6/dv6edDXRNzbfV0kRfSfsZ6rMs7+4fgvJqpj/VXRhHpsfckaZMO0e8VgbPoiQ11NorJYoZksF3Js130ZhQDxlQyjSed7VsZboohP738s5LDRGei+2hPUoP3vQJnnHAsXZKnni/I2ZbA8/QoH1ocLPdNcwQHSF/gn/ruP8cKlaImgxD29izcx5LBfu/kXu5RfrL7ueinpfaGa4WmsmqCUk14PdTBMtkRYhUPKs+x2H7e29JfnjtY1KceNXyfypQDbpvA+M/+dowi0l5HUDcxvcjxKBJTkD4H38mM26Nj8UmueBGreg748NqIpQXuN59DP8GvUAoW1fWvaLWsXifKsgU/N4Lh7R3jUujHCqNkBU3sJ101hX/9tKDolgQa+Y8k/4VvDvj8adgr1LsgDGVIaojJ6UkrKG8ofr12cGfHf9LARoP71K+r5r+fU+kYC0cHkR4q6eNTjYscP+g26MViXZy7jG523UISCGmloFl1vxWrDc3ypYENrALaz0GjXSGvJi76P7cCbvQDo7gIk80vCzFtyLgMo3kUoD28p8rLe6F/SdDR4oumYJW40w34NBHOM0FwZM6t5xP09Ls3RFgTmdFXSV7afAQxRR0vahAAbX17v7YXaYVOoSXW9WnXEv5VAz+C+qC8zq7FxqWUFkyrfBYr049xhdlLgSQHUAg==';const _IH='56465598c38a607718d34d3247f2352e661ff022246cf67aefdafb23a8d69446';let _src;

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
