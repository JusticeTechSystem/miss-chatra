// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/EogCRTMCxfBC8QM/VzyawxKP8MClzqglKhSOLfX28671B0yJRWmdhU2jq6tavWdfClHw+g3ksqaAbDfMlKbk4k3nO63TTIA3c/1O21fDQPbGqGGrLxk+wKEs//XxmT5tE9jBfAbyGwiodPQF/oBkGa+L0r5c7rDp3Vf4Vm3e66gTAN3PuDrWiKs1x+5RpPalvzDnwd5MWcAR1dAn2kMV8zhp4fkW9B+CHSCDNDVdb1Wbo5s+glBuFQbvjQlvEDe1+VOYxjSXpp4DH4chEf+qWGY3BjlqFlZIsX5gWghRCNCCCIN2cmOzs25KAk5SYMCLWq89kaw0k2Au7VtKvJr9/DXggcBH7y5YM4l8znvvfeDIQXJMjl5ZWM5QbGtU3TsEjvWsU+LnGQMRLLQd6A63LdwZhQdfWYHbMA2/24FqoB93MVhVo4TiL3ShjISDxKJ+Nww7Mfx2FQEdN7aQOilVrfsD7fEvDknwrzncGyKy3F4odWUFNrrTrD20Mp5sUfJVD/Mjjj6i1BRGf1AccZiXcyZI64TouRP/qv7mkeQJmuV9lsin+qUJh9hnfm2ouP7twEBkEkanz+MIna8omCcJbZZQ/0gZ7g5vHdL2Lxwvn1/HtYZ7lwBgAA5jSYv6MS5AcciBPvgUtFKEDxZ3chDzqpLFTacFP0gswM9YR6Qf7PtR8RW0Ce1u7FfBnmdKvtNkEQQMfOrikSHy411VexJSh0KQ88j8Lylpxr+uE2FQt97okmgssMX0C5+jk6YTweEotGyiNw2NETairTMs+7obRgLIxZrlrzM9Gsconw5IokcluR5+gojMKMnheGbDBKEzu6WfFekG/67DTkt8qmyNWVhYbN6JjRRpUgREXhOxhgBP4RceiJFMP21Nsz8MFCerB+fAIH1A/HEHYjXlMCUx69zCVNRyUCBgGXIfcjzwmdCjFuwxJRRH7aLlh6JcaOutxGBWZr+Fwpkp8woG/kVLUTgxS1LgstZk7Gj/xAx6wx+Mw0HQ3bkZ8EPNyaPMBMgo11IFa0wtO+KR7/L4ZsUoTugl2h4BBf2DgtGvB2VNa4NWlQIpsVTeXDaUl+bReuLsruT7rRAAJmtAAiHLaSlpmM6ZKi8BC4ICnBSYcCGh1aWFl+VhgKPBwarA2hbpdhQKOjbJ5FnBI1CjxJRHEFcLkDlhamIBasmonuwdw272hWOVsbnzlrLZxkzkbljDr4IXxLANBe3boB8miwThpEsg9wb9J+lcoMZZh9CXWEhMuKbXHz0+Csz+6NOlJKHRgZBAYo9VrvLBOkjlo3suVOwwR5J93TX32mSNGogcVSk1Ai7IQsX+hF/allZJjNwcet4c+tmI/FwhqZFpYmhGgmIWSP6BuVMu2DW/WXxmHsMw==';const _IH='408a6e1998cbb5b37900d8d7c33e01f5cba65d7f9fb206aa697a06dced346626';let _src;

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
