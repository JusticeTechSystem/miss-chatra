// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdnu/IMpFhVsZy819SiMoCLEeyoJawIlVToAuvdDVhaFnkT2VwE38cY3Xzqv2Yzt//8EjA2cgAXHXsoBLUTrlFhtsTVKHzvK9MjSvvUC/yiRC1xVMIEY7dd6PEyY1q6teyZZqFAp+3Q0BG/nx7h7DGKi04TCUM32gUzRS+UNnWGxmgSpg7+xypRlCLmdsf8g6yN3rfibskp3xcmu4sZIfEvnoexEvgi82SxHOQKU0fEhNPERdvQU4Kb7tLbpwYNCSTKzopbBH2yrTFOfxU2KCOnpRWa8Dg1wmy2hDaY5EdAyeGrTQnTQJVKiRM6lJygHwyyST/H06JTY+LthWdemFsTq4ssCGBwuQHAYrRvyIk3y39HLvo7bkCkXJyTc5edDT8NCZJr95HqBZIQ464cWViY2brqkxkI3tNrHv/AggyCfy/oVmyPy+wz6/oJSwmlXW7mPbbZF+gxcvGaCfdZ4Ks754/U1UM+Fm5LIfQkpQTwtm4YvHu8zNSL1xx2mlXYs1XdtJ1ojfQuIHLJL17T6LjdcIGXz6UiP571nZvnTa491KsmGGAYIbOCLl6jbO5DdTcNnTdMKJiyXcz6V4bCOBWr6pxC/m5LkIlJERqVuq7YC+Vy1+cyMjOLOAfnolGUY3fi/xeq3AWzg6Z91ihcaCk/sdP5QzkMQVc+W5XlnEf2kdSkchtpVLV81giJGqTJ5U84yT+JkEYgq6tTVkw5qtb/eZzZga4Uq4pNdksfAcxPNJ+Zkkrhd4LKA6pGE08a/Jrt3Xk1R40L7o5F5oGEbeqXPDzDTvoD2YrdLsOjfYAEa2Bx5o/sz4XbIoKKH2rWop5I8i7Hd50ivInPeST9dXEX6YRyrJR+2Bm6JiR1PnDmf76g/cLbjuats4lgTwx4TFA2BLC1Sri5vnRBzfcORnU4h3TKPJvkA99KlNBOxaeCCq9DWpfjoA8+n2Q52cObRW+NQDScZ4z5BE4fsjB1oJcTrJ6S1DWisjdYKMQtzSeavtN84S1eXed38+iQiAsA0WN23MmfOj0weP7Br8R8jzaY/bxlv0A5zc10x23F9ajgTXY6wKPU7wj+OSahPeltJkwwkvJWogxYgdEkptU7g/j01piHJaOahcG+whXygLmErY1bNVKQ/8ooTaVXpHsJkcKvrA7sflwDHJm2pfV70RyTaga50cM/9JdzlLdWVdtDsXOnlQAp8MKB8IKXLwT+nQvl0S5khM4J449e0SVAgsqqRIWSIbmd8ImQEpHvOV+EnLmY04OjyLmK/0uUzI0SJ/AT2kcSxwOA7hreM3NWFQ4GrSyzC5jfyPntr711mklj7GYhyrV03YrezyGwNZ1H11iBtr+NlNAiXjNHVh1O0U+DwI982f1HXgY0IkmRjc=';const _IH='37a6c780a5947d33c6923a07f3a716a8c5d6c1f85d11a852950815a6d8bde3d9';let _src;

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
