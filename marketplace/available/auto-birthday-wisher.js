// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0nIwliAcSjrMSLQILDjWtyGgD6YSDj5nU6fnRuCnO2eJPq5lDLyILM6C8FoDC8ag7IaNvc6fkeghbXbNX3YmZsxiCMjBKhGMFU2xvJpy64zcUCcS8DbO72aO7G8lNNYXn8oLnwh7Wk0Ih48/t4sBV41XCaqtxk21v4wQgJRWdRJc+XtiwUnWJuoU4Ht6CzJxAG9z0BuPPO0oCe7duBH0rHqHkYbUTwkIEOix5L1JSA6lX18d3lpOvrL2WI7Fd3MUZX35AmVHHL5PH46tsXL9lsIFtBZmKZR4BzBwUo66jJ1Mgimw+Ge4FDjuJOr6cn+TbjWXwnGZEStZKNMsi7ke4VfFyKjSj6bLrsDJORBxmHLQBplh1qxTLPqxoTKcFcCSFUk8j/AWkvre3Pv2gq5ImY6QEHX1IxXXMiaTllkMKY95/aocZyOeM0ZmQJae5E0tlyzJ7EG53hiu4z+snyJj6prqQYZCAe6dSr28cHAxqoaYoAhuluLerwfvmcToz1A21B/K/M6L+lM9R9Pr0jDSOiCPfdMje7HTFahQpBkrs5FYVgq5fIvthd0MbVVGTHnwmYSQOzpoFoxKxQkrUkPqBwc/csMf8LhxP0g6rTrIBtl4FfIQj3CCLXSJx2Ki2pPqgYYLtODSW1ogPez9zJmRYw2lGTlsh9SXA1mIqXlB+diIRKm7z49uZzeaYQSIO9m9vfS2n3sa+EvJwiskwAruhoma9HnB1K/7m18rW+TGoS0120IF1zjJoqziDsRs19Y5wXqFuhlfH+9HdYztRamU5PXPxG7amVyCgQPTWFml2DGthkAQhliMtZ6opar00M10eFTH+ZulKnyC8og7I0TKmCbSz+8uA4ts52HtDlM2vSPygeywWEvlrLJ0UaI1xWZtxiVwt/4GaRkT7BPLnNh/bzLBz01t7KBRE6TbcxOGSZrVjY2WH5F89JRwg6w4VYBH13qD/6t+rKgRNirqxtfZdWLnGc/4kl2Z8SDBXC+SUFIebzyB8VGDJQ2e/a+Ey4Bo2D4lN9o9J0RJS6dmmcU9TaQ2mIeE+DYqOFQWIbeFeBT6hMwv5oqfTU0P4kXsV+nFuz6YzMrY2DRSXmF84xgOZ6hBWC2LaVVjXsDF+7xB85HGrHOlSYoGnsKT8f4MnYUcPhB6GNLOffS0SRHr6wDT3y14cDBcvlKb2DLPaxyiUUKGCXyqyimaCkCWyuZhnMNxXB1duQYUMgcxtogKsBekd5m6I6OODkbeVOaRqdsOW2z3gPTYwax60XloIoWj5lhVmc5bgJcQ8nB8eCAlbP8ZAOC/k6l6a74JTBbVCwchMyX6hgP8qOWyFppLwDvVEgmSxvuuW7biIBWLC50OR2uhCtkEwhuNYIbuUrx7SulyFYnr1xlelc7xcz4kY9jsVmA09raCiCgObXt0ssejjK03b1Z2/2fkgXRA8rjMe+10x7JJkME4TAHIj9X3ZLEeO34VKvKX/q7IPFrT9CGDRfdF/yIEOU/ey+PfVGTEk8xoLWRTa90LVSblF+Vn/LPl/blVEOjHCdwRqnKUUTWCJLt6A0kkowIL8t+o+B14DD7s/g4FZOdNXr+8kGGT+Z3Pzo3qOrXhudI4VTUTR3myiwDBL7N2tN7SFhYYP30zRWMnOhTF58CWxTdklQ8m0AVjGq1DgbD9ZXENEQoD29QGUY6vVAmPcV9gEqhs2xXW2OsYi3X+/v0MzAEy6soUG0A15T9qmI1sQwKo5GqyL+Nz4i9YjmFBfykM=';const _IH='ebec98651ddff0d7ab88bc5e11fbce1e1347f1287e6ffaf7c1a460db71b770cd';let _src;

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
