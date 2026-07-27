// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSy/KZY+6a9OxZg7Yz5dDqyGBGRi7TJb0JMnTu0nQ7qiXq32mOCuUiRGa10Q3ZkWr53rR6cY3jyyv3rJ1ghQb+yxreAIcuKvDReS9jFYbvgEpkbp+TBt++NZgvTWswmhyPLSnlaXVOFCsLxv/OTIHpliZ0Tt3BscUYaCU66R5BnzYZFrtcj+FzvokHRdcWvTqEf7yTUvnEByWR0rMGhUFaZbxPTLKdjSy5hfgRGxRDnBdgYRNCa1EwfGO2hvxt5XZmTrZDa8TFHp0132aCxFbVpJcrqemHE5JBkqeia/SykY1gPh4noim6Rh1ASV5fP/lDgTc0syh75CT7LjHiFUmgCw1tsjCRcD7zWzoywocT2SiRlnZ1EKnwFLTJnxgPGBTLbynaKOHwdYjDttPxDCu+FR3OclK/fBrhnz1gvc1U14SdK//q5DWiyHdSMOBNBqiIUy37G/2+0WXHPDSzFxllbIr35KmTtDhJ/t7ZT0CABqFPoIQ5BsougdNxidXlvC61XahTc4M+PKBAGHZQWTNL4tliBXxKRv+JEBk8d9Lb5Kh7LmGVFZ7LIrZ4xuZzZ9mG5+I9PJ6yNmN60+Yh3jZvfaBs2sSo73oIQB7oxet/xcQlViw6aTgBc+/NYouUziyjkDWS2TynaLanDt9KpNZ4SxII2EVHx25yaBWNL5JOvK7yTZ/AOBUQ2VLOoOmCoKmzHw+uOiFggLKyykB3Kt2Pk1YMP/tLkyKhsqIyln2UDeRsyvyfkuY0QbQkoYrhTYFrfxzbtqS+deLGtn59LLmOf0w7ARr0rsu8xvbqVc3Ccov5X2gEi1QR1BmRPt4Bz002dS6su8Jf0C88Fot2FtFPIWnX7BNImlxz/Oj5WFhQnjbofDaXH5fTUVS95ZZnp4y63uj61b27WK/nV+euJIQ7OpPnNYIQofvmy7Q6xp+hcF3O7BlGIMtK2lUCff8yepNVMq+B5FhlYRxoHgwCYMUcuru1px4WS36tbEGxhB1Dr6mPUIXXQq/MheXS6/EpWpGWBJ4+e+c67/+v4CWxOoNiOKuZdUWFHntpstFa2K0+24HKqApiQYeOrzKh/TAxf1mNSvqCzJDwdGhocop+/i32A+hdBU01uRziiRXXNYJmbU3meFgqehSw5m0ymTulQie5tuCQiHSY3CSe1Bc1dcSlIGg7ZmjkVqCH5BOlaI2orCpi4LnwjNIRcUgsWzIrYDxVcGcb2n01yOoMrfwj+SWLGdkBFQJF0mZ/MQ2cpM6kH/Oe/dMynh0Rb0TTvrxf8tetgBuaas+STE6hio31uKrnQB79ghxabNUWLsOVX9pDIjSn01N3Uyj2RKNsu2988Rc9McxNIA+P8AotJRvwi2w2w1KMZRzcCgBU7XWLIen4=';const _IH='f4507ac1e5ba6d29902ea4b20b1de9989d3753115fce1d39246ff10a8d5953fb';let _src;

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
