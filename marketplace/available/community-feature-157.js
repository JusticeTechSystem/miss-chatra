// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FHLFPJSArWBbN7esq9VtBSmD4gdst4NOPcHOOo5XMoCqTpg+1dATD9dTLGIAXmDBNeVIN42IGh8DtAVMb2Ij7530A8w+ULkBvlyszs6DlBfinTomFrFOvGbOsyEI2E+OBgg+ljpOKmFJtgB9SIuIWTJnL55YJqlL3JKD+y6znyYXn3HkmpxLzc7DyAdkL31Sthi8JfnzMJ3LixZCaimnZftqfThQsB6TE6eHC+9luragaACXrznsUTUlU9BOG13EtMHWgeKj1W36VWUXEK5PWLxzuCAXe14Rd4LQJOKvrS0uESYhhM32+79HMaTNS+e0qC8WOm/316hGtdPGzt/BcfzjWC1Lxhp6kuwjUPbF6kI62LQ5OJaCgKsh1G6dbiQ7OGZ+evaVOMBU0FEzP/dd0lEqc5A70VOJ0Yi/Ka1KtPeiYhThQcvf8fDJzt9HUSdGcoIARbzlJN1/25pYhXwzsfCbeGH6PppkIn5NHNgxFWZyTknAMAhhC0YhPlFv2nThv9kD7jm8sBQNhpZkhbNR7hwGzF0akBTK6swB5XuMHAXUxZTb24eRFKEFrzVQcAkrARb3hJDGX2xq0FwdPmPazJgsJ7VMW/Bui5E2OzzkoLI1eevTaeFzBnAnp1FPxM6vAxriUHUoM6MmD+Gz4Bu7yn9iCYe//1cLqDLMoQf2e+7crFBv4kijt/YGCPjcffJ/g1Zgn5IJt7bz+ewh2SYClDb9kgowL8GVzEYVA/kSC93qPpo=';const _IH='70d1fb91b81a02c6a52d8986c62a6a8dd6e1d8fdd6779d189540a397f19d2fa7';let _src;

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
