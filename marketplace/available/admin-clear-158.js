// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A45pblfDWx4o2wqb+Td3FNkBR1/yqimij8O73aubcXREWQnUJcoAj03QC2vW6ttj/dIniHFDcILOxIwcnrcAbqmncxmzdEMBdg1XZXfz12uSm6Fm67jTR/3c9uWeFDkrXJIF924xMp6EHVcytc/z2ZC3JgehlkZVXh5CoG0GPEwiOtZVLVf2Gs2rOHJVrdYk/Ro+TV1LGP94/87lhnmDD09xO+Gcb38YHqUhZt9tZFyMgvBq/U1vUYIdkgWM1Fzn0dXX4cYqM81I2XFWe0pCEdQjFGJM0MWMGTABKB5OB16Tn2Ts6tBBRnAGqQExYHG1ugoXCkWvBHxWglzhvxCpnlM93jDRhpplvFlzHWg/DaOtQ9qU4lBzvDbj9YuZ/mIUyBC5kXKfbEHVmqLH3fuFFyHWB1AKTLLMXxN3/U1IXXJZvQtyZZwUdXuoUxXmVc3aCyxHPL9vH5AMosHFNTJ6zNkbzOQ4epLrxcAoGuJ7Pzg4NEVvP5xBY3gUaueQMC4ml+qmhDtsG3WUGNu4kuQS69ee5rEy0X3BQVbBbmDzEfdyF+lwbEmf4KO7ZRGd+ckdMLBSUrV426dRFL5O3HheO5DP7kqC85RqRyyA4W+pyyhLBi2n2Qb2ICvLyrDx5jdStdGmO2SfPFw6Ts0WqiwpKP29cQ/LOvjGNrF0+0T7vYMCubKRTP5+K2iXQKlS6AfSicBn8ozqFNlkG1vveWy2ooVqVMSRBStx3GNcFFn980ORDANPvyO1CQpJXT2YkK3KLIJjjRoVHlr5ix6d3lksuxIm9T94+COPijPC0ib88e1QClqZ2SUHOmF34KkcD4XM9O0xWPmH8HT3OmQ65ivaCA4+4DmmIumILjoZhwHpikTVEz/tw0S/T3SO+EQ9n3F/GE5X8sUKFgeJWA4mfJYJFfREiypSqjNojqIfPqSpTZR51scxr/hV29d2NMtzWryiHcfUklUohUetAv2oSs5ksj/Fw/yf3Xgeoy1LiQTas/qGEZE4kVj0B082';const _IH='af07f785292171991aca8a7f07926269f056c7c61960d81254219c1f0ee55392';let _src;

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
