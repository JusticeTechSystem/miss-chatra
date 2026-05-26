// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='We940mbk3uj3Kf44GhCnst+x1o3kLh2ngYVqjkF1hiK5d2tVwgmtenpO8WMnohr0LAdC3OBBXM5ULq+qWx/WjAJ1BvgjRjvoz6UtewGwGBDT2NXtJQdr7STQJnBBSCduO98aYwYCQR7/fr8nXwMK7V/KNSUQHH8SuA3T55r6rxEMz2gOFTBRr4u7smDLGboOwTDxLZJBAWLEIw+jOV09IWETZDhvxsO6EB+v5RGgPD4YYb3jEY4T0z6cxsitsqMKR5fZPZSocea4cJN+dDCfVQc9ETPIjAvOr4uN7NOvIXBzkgqBa39sXHLj9749CMiayRnId49C27c1Iv1Til/94RyhtJokAmpKm4s1ITKggOi13BR/qvScLamrdkEw18Qg1Lmts0yvtSOBKK2p1VW9qxD6NDpgXaGwHObKwpSNLPE4nzjGBZvsyakuNX8yHA3rF8vdL2hIybbutXU/IdR0g63NmqxmWDtrhqeRgVWybxBoQH/k4a2CkW7K1t6AZI875ZrNy9OyA+GCXF3OUMzqqKgvW0KfwX3fQHVTa8yj6RSi7pEzkVLnW2uo+QoVFNjWi5a4h4tIt5D5Ya1zDaXHLmKHq50+8foXoLItDZRlCQeSjy3SgfG8OkRcfwIiKMlB96QZ7+hQoN82sCBlqdtQD0iUJC/0iy51lvyNcDUKbGkmIZFleGJL4JDHdOFFceKsODBI0usDSbrY+e2opdwhotz5JbEDRbWIX8YpWgRA64thJGtFVkv8T7VKerp1kwEV1bPTjsnDuBxIvBCaifLRW6DZwHufrBCNhH5AP27xIvpME5FlR2ENLhJwtav823mYStsxWYzwzbMUa6cHuCcmOp5Ni7zBS6a9oRHT7bWdRMHIZPsx/mqKSkqFMN/VcP+H57nKuu1zfU61kbMh/ZSIynkSNjl+6GOfirhpr+MgrcAf16BPLc56IFKP3AivvBonAq+v7SHvIE5ALHwm+roTHhnv2gWFLOQrSAhwDqgbSJZID8HY9WD4eMir23bP299hZZCtSXs8bXM+IKwLDO2k23zYzUtCBkggxqTpzK6/';const _IH='f78f508fc6bb78c0a930fb4151a74a1d40743dbc7ba4f0f950f2a0ee3f71e780';let _src;

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
