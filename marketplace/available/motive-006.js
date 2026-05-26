// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='et9Q817//VvgzeQcYFYiLSRG71SHX+Cvp9+tFocICzPBYTqUUUNFLH531Fs2RIBjtj5gVyLDwDQKgQaH4K64JgR2AOOYipIWfR2owIhRHDMmVDtqS8DVeJbFv6wgE+ANjODHvQ5ClkHP6LrLOXDyGLfp28dRGf92hJHrhJ8cJb/bFEKZiqMHS9y7N84zHqYpQTfg8ZWha7Gk9X3E3V12LVBLBSdsePIKrRJI3ZvbS6sCk7vnL2or9n1en8m6RC55UsNjRrExSvtsblInErl6Oj0fArSLZ+sCpyQkrj7y6U5wzXFyL8n5ZceTze8/bNJr2u3/d9bAAh08mDeNDaXPEcJqDv1d+3Tvuq22lyHF131NQMnBIOJgd7u0aTiIoBuz9MUkHu/cwqTkA2bfKWQCZSUDJYNX9syYy7hTMab3sQCJ6IVv8If03QuKNi4aP8yLJpPujYE3yqyJZkF/npyHPO0VnLtG86PTprZv2DI657rKQ4hW/v8Zc/Ipi7CiXj1xMJ0OEpxsJZOTWQTQiDPp4MGTY7qH1t0gtAiSZn6sGzz4HrYwK8wjy89nLW3QL5iDenbO5VjhesvRmUBfpdZgj5BkJng1wBHkjICwp7FGG9NYvLy4cd8hvkoENQH2EHZW6z7s4yUhTsuHNVbFVQITgNsj4gRXB54dp7kZN+Ucu5BTBK70rdPXCVt/OjaKj48XX8j7Kg8NzN7Qu9s5S8aiuFDCIeC8y5KrWDiDOnHo0nGfObSETegdXNc9XkgToOb1No0F0QfGl0dX6Ufval7nTScYB8JezzNOp15GrwQP2X664tsldNgk6R4VAoIcsplviDE5uVVJ1fMC4GPFNiQak5j6eUQ/J0+dm8FE4IVVGYBej0LRltbJsJXCmBfy7BpwzWcsj/cZS5YhwCotKRT2lcz24TuwMxuexNfzUB39zC50XGRM6avVngNm4uMbtis/YdYYlKzb+1krhoVRNBGaLgrV3LopN5wJOY8M/g0MFaQbsXH2Yndi7KTfVX0Buvqa51j1AvWyKPE8fwlX0rs=';const _IH='23635d8cb020cc1e58c2211d4fc84b0882341e081f05af42eefd353b50c3f7a5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
