// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q66UOTm/RXk4mt2Dcxk9La75oKaEVahvSfpAIJhoc69YJnPoR4IN6L/oGlsh8NNDr6Sosd9lYYociTFMh33Q9GaL1tZcmrNiDI2LlhrQqVSR+IS9fjdngNSN+HWrpbBsLOzBN1F2iYMhgx18ajKTnV5SweeCmquZcqn1+OevomKUPgo44wK4SAnHMtaJ+WWIAPVOy03nzMjvdoSwTN2GhmI73S0ArCxWhUwI76bFbG/TSOdHxP0RfT/mlk7cLHWRGL2Inmhpa9FPVwJRuU63epF629aSv7Xv0ZdTEx1wM4I7j3sWQUIVfh/Mc/b40VrG2qoqzBvmlT8zY6RIE6R1Zog9FAKrtQxVoPIs+d3kt4YLphweu97tn/wC+kuNQV0j0fzaQUJyIDyxTFPHANX6/o39npKMueir+FQ6Qe21aIFa7yY2XFSmnjw+b8gN1GowzcmIBaj3SJkE25/OA0zGVw35zDwrOE0LhH7E2++EcoyoiSUcPH882bRmY/QtuQc2pKTe2VJU2YqQIXzHVydmIYjHZN1VoC4nka3fIMOUpMdpCUZZt2MI6gpe7lSwkaxozbRb568ua6NjZa9LV7dL/3Os860uRuvvg6cASvSL/Ak59Q3qiltS8iI995XFPWWouKs0390s4HHwipL1rGp/LCdG6Xot3lPmqhjRc9uCvtiAB+FJTJLVfia6PC6kbpsha2DlOyn30sTKQkvxRSmQH4EWiQ6EOg0q6dndOW1tKCNFTK21XKA=';const _IH='01570b02e3562e21e46562a901b0a6421f7e9fa91185cdd37e0830e9974e9dc1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
