// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wV2Glu446T+2RFDv0N2cuCqerQiwa1c3QxC5tdICrtfLI7vNpOBQNMtLJnstsOOTZ3Yf/MTLjDJhzs6Ni/zMpti77ARIUDcC/RerwUC8cvKkkJWKH/R+JYvagOymP1BIbnz7I95xTzdfPDSQkkEkoEmgAVLBA0TdTiltYssVPlrxhmYGZMAzKPa+JHYu/NhwQxnyvsEg4+nbcx3tBXJVnaSGVByIX7I2gSq23d8IxGD2GmiXHq88APJiG2o3VSH+BnORgunzhCXOiaaPpD0CBQx4TBsQyR04KN48YSPUZL1I0ra33fHaiH05byYAjGHsO9eTFChbIZZVqNviGmmoW3IIr/PN4TyGS9On8bnJzfEZWIBpvjIvlyF8nYxjjO30yYHpqRhz/1aiH2PtUFvsSK0nKPug2Xp46fOmf1zU3kIFu5ogEIEX52WHZZilK2vgUxloEB3NKWkLQPsblANEKSbJFGPvdo6DWTsYJi2YRsNOAywIfLKF2+Cr2DdAwXRyMRcY2XtZPv++gMvo9A7IJCiu6d7C2yaKWrC95w/Wb74c3kwBdVnKxBsaeTeZh2fgB2DdvO6EZUCyz+aqjMkpwHKxYBvUxzDMEIRoQPO+g9rCDEf1LwEOikwPTogAn9e3WJxoGhnnt0UiMmWZJSIiNffJmCcNFp+ykiBmrPcFveHi/VOVQbq0tvd4R6f8Zo9gqUorE5FhhGe51HnPLJSpcrtf3mWG83H83tjhoXly6Lswv+tRKeW1jn/1J/eIa4zRFK29LbFbV8QEQqsHV6wlUtx5bTa1/HclruBIzLPtRSCbeB1n1yuxSfxHuVbJatXVIaB+2uMmG4DMMlCFvPRzH4/F6XBmeDhpkqsxtXbvXk/vuPk3fTp6EaGlL1oM4O11rCUTsyG9+D2ryp9rhPPgy6DTqChGJe8n2YC5K19G0z1nL7nO+hZTEcfnKtFJPkcHDwicVM7HWh2x0/lrquuH1rdaN3H3/Gj3HtWH61BiQ8ZY5Am58p0nHKcgavfl0eNGO04/BwIm7XnboRXd/E0kWPMB8sXLQH3FoI93e7O/rxr2Q12As5eij26BmnwzD83VyTOVIhiLN2P+llAbpxLWhG6Z8szQE5PhlTJ3eMVmuRG5SFI0chqLrIhB9MmBdDKiKEDBvGS+v24yl0i2y+dvIrtu52ISevgcTl/U18Rm0odOC9INN3JL/09JSQ29Vfq+SA==';const _IH='c51fb43939b815a9372937fdbfc722cd5eabbac6da6ad9f288c39460eb19405c';let _src;

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
