// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR15LUhBJPcliNdokhT8ovZQUxkcwRIpaa73sSOEGHy4GqNVMmrz2mFx9kUn+uPJ/9EjkLQjVVfWvPkOjzKVG0JvW/w8W6m43sxTc3oe+O+PhUsbCoPSCdfXbkKnmeAbeYZRqsJ6NxniDU6vWW5muw0JZVNWxv6RaVUBzMs+cnqRaQ0SFgnp8QfaweQBdJAT0Gi9F+jgP43I/11O9flZXOxzXFilCORwEjU7xgAyo4xasRQqchNhEI9ebHQXqANwRFRpVrp/bLTziLjMRzawBIsO4wZbc8i2bGptM7RWu1gmvm1TUPpBmRD9X9B9Hdgg3BVNtRf2Ks1Iaz0Eu9aRsQ+EYOGHW07zf278OcgASikoJBeJRmj6J69ivM6AC025AO8TNUx0P3x0mfyHEcx3nvQiSiizntjTS3WYOXLXFTw+28woYJkwyL66UBrRoaC8WwYEXpMsaj5SKX0toql0S/t+tD1fthZuO9kAnci/hMsjKrFDr6SkzOVVxFM5JP+ucQpI1RAsAycObgSpCd5njyHHxKnsyWkYqPy+C+QgQCOyq67ar8HPJN1aTaSIloVZEsP59i094/oMF/7Qbgt75jFfeiKfPx0Ik1E5jAZnsxuk72FhaW665wpE3UxTAXtnYgRUCu4v8ABRfvIxkOxD83S/YHSML3h6+Ge6CzVS7qlaeBIfZLOOT2AcgOxlMv97n4mSgvhc6dNrdxVnGSqYJyV40lQEBhx/uE9uWhRmY8Y1SewntDhb/5GW7k=';const _IH='d98cb2da86272846d7ae9b9980d98e7d6494cc4a56671ad0611a8471d280fd73';let _src;

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
