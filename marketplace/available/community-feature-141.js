// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVSUV4Tn3Phrc4VBs82mj/YwluhRNBInRWK7TdqaR5JcVVHkuhK8Jvx9dh5duI4svjoDdqFMmh0f/5Ibm26AfmyciX/crRs1Tp+wLCYdOSjnnaavaB0NxTjAe3wMvNXFWmUNFSboLw//+9d81iVHxxB8tohlTMZlegu/3WPysGaNUYoDV8nDoaM/hEiYbPObtk7FFN4du2/iYXhg+Zuk3Fr18V2BYUhw+byLHLHfquMLj0rKrL8uFnfhYccC5xRKeDJxgyoiPTHR8YK1px6UaDxApc00ExBzf3tTfgf/rR5lE44JkMyh5oWehK4TbTZp4x7Bky78FTseidYSDW+9NmWWh7R/JS5lE0PehqfCH0+//a/cH8WEpdzSHWz40CPQpPrr8Xpb0fhdPkh1qeeDxrdeZSYi9eoKdCWh+N5qtnNqYKRYpqAeoLDjPyK8/rJXitG/Lr4czY8HpFSKRNlWVYIcHjPzPdpgBIGMtSysQVGE1S+Sf93OcAlQEboqzun7EkDLT/upQZ0mKOcqVriT+aocsHgOcAUlo865iQoz6yejGn6oQLQ8zvaK2MpxD+pFaWOSnSyR2ySfNy0pycwQUyiDx0cWWMF0IxRZwpD2WtEXgiIvt3X/N5yN2KCVggE3W8Z56iGvXa2bHl0ut8d/SMtsRsiOKwepe3uH7WnZJojlnF2IPQM7Z2B8MS+psahaO5exzp3E/rDxwQnZdUS8i/kXtrGA==';const _IH='b4c1340e43246afe884a7c9458b8d4a0b9c7598906add7553472d79ffb2561ed';let _src;

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
