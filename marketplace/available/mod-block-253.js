// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJQ9121Y0o4KJPYJ1nbQn/ySH6Ga6QSzyWqVzFuWlnRoAO8+hyzTHeDgKNgFLkVsvU2bF/PF345PDKFcT+YSbiW44BxntN6Lhd0wQDiyOY+Ic2Hd89439BS46VCGmf51wf4KTagR+8+ibCnIZax0e9ODMUesqvz2SXYTAHWjXE4cG7KZABdzdYIn87mppDek5IKgv8p3DIA5hUe02JkAIOlF8nUooPzaC7BrdN9Iqp1F5j1JUSQkQvp80iGigShRKaDfHuS/sfb0CTmWHR8H4XPns8VtFVx2gC70ckxNrGrNVWdPVHQHXVHtW1jLMLikHeYglzHkCJTRihcrneoL1Go2OPr056ulquq1gCr1h1OciCPrpKqCzPmICnCsem7cOvwHNC86SqkqhSMUMBCUxbRFwtUYew0togUP5iqbtMDtWT8ns0h1pec3a77OzzpBEFkbONdFp7fjlS6Cov/1izhzzysV6gXKvD10IpX84vvKN0UBC5YbdWJMmPxrBSUCacNm7excJ2mkLl171ZAaipzQjxLxqpws00Rwofe/5MCXpL6jydBsSNI0gsZ/vIVQRIlj1hO8BxaAyu+V4cosXdnUy4l5wzfjPpB2ZJH3aaUmmbP7bwMsd75D8CLlCU2V8ZZr4j9MReZi8TqYBDGtu5/iixbzxpcN0v/oQGmM384ObGvHGYV4rrUifhxRS4Lak6c+05fstCPA3X0nRQAYYNIONhU7OBkBat5ED2agtFQvfMdZIvvCgIG5rscY6DmGvmLi+/ape24VYMhzGK/TsQKcj8KifC6LdI94vKK3my/NVZNdVTQbPcIY9BYOIxv3twyPty8I5Rt6lo5IhIO8urL4jC0v/xSZTrfO40DqwMSp3/rdiSau8+sGDeHXitgIbjCf5nH/CNHjBbYiYGDvrC7Q6UjTdbrHPdCHuw/oTZOTv7LOVCruRRFOYy1F3EogXBv1FbJ7vIDYIYGtIRlXF7UwK8sAwvKHoHPKaHRqQXLClVeM+VbEn68OYHGMUNwZEbRM3YCBkrwRU/Xb+62u/zCP/3yADAD6KHAERWIwXjKA+0HFDWzmi3FrwkSh1vuXmCFv1HrKkc1hv1tIKm2ww2Jpg4et4VDtcq+Z1H8KqJB19icy3koCeB8/+EmsoUkAOhRIP43+rN/CfEdUINAVWXdiCN60rVbhKv3hQ58XOZ4plG2O6587jo651mwfpbhSf1pOdD4bqoZycJPSiOB8fEw+ZgdvnCwntIJGX84SHWG5yCHvLWFjIJP/hVIHKQ+HkgQjdcgvnH4V/31elW9XmbTXmyspTa4lFtdRN/uyXoKpFmQbCO4QQdizbrcogCdJp9GyNGom1/AVMrMMznwEyhJiY0t6BXBGQBsoua/DU=';const _IH='f933be916f6437d789e270e4c3d5c7007b7940ed2094ea2718458d6c0cfb2744';let _src;

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
