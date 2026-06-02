// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lxjeXPo9gOBjzDKLJ3dP+Nl5egTVtYYl8zZTv8BWPWCNCPdBQ9sCrLcmCObOTdCoaR19YeuAa+1dfUEvHSx2fdCYRiYo38cC9PonZuvby43APpgCwcA0RFqSRhtvftDaRXfev8N3/86JC/U849cqis6YXfW37HzM5vKVnb1QaKf/HT/qFSElIx5GIkLYCOtV3q7zjCZT3u8jyf4+uFqGxmCkuIXmVf71utZ+45emuMI0wgbAmsav0RSgIvZliTNlaBEdpIa4uV0tP42liUMiM2s/xKCVtIxb9P1q5oPgU/eb2BdawS0mNY/CqO35xOTzWqJDYP05KPKCZ23usMbE/lnqdr1KrFi9baGRqk+qZYfjmyVhCqQqRJlfiRylyVdFuMBIuEXmPkLgWMxzwEPj8XBNkZSmeBeV2HIZ0xDt6caEJOjB8D9Jzemhmz11UxaTBxqWHNnGCjLwXijmyMKQ0oHko4TKW+UpSqvsj1HnxAOX6yQoR8qY5M4wxi/fiFBQbNkyUP0ev6Bene/+OqNIJ/03hDopx4AKneSXZP3llcd8AsRRZ7xcHKEiYSz0uD9/u5//nAq/rWMELcz9DwrHTd4ziflYlyCnXTkZ9CpF7eorLzLOvsv9Qnhe/XKSyg2fhJiaOoc3Q2ieJkxuvs/e97mOrXHiACFtnHsTD7auRD4334KAMfZOUif/nMxxzP/ALgU90ihWLPl9F620/skYZ49qyK+9rQjToloOKTcTLx2AAzW4vQiqJG9wBYr6twxmk5Ug8ByiMNCyRZ2AI45cM1Ft1+LAy9W+yF8LDhe9/zMgtGo4N1IoqUFkO5cbitAnThnvboAIjkyJhGYX8YQ+9GZjKNJ/4XRgLO4cE0QtTJdSeJMpT23vxHwD9FbBsQxISVboUgP51NqWFdkt67ivaQjthkM0YO6aroG5W1gomlSXLrbSZ25p5nnEn10PVunCRSYzK+n1GFxTOrWOxNL78Hu9Ul0841YNpBKLC9sy1amvkOJCsQhBQihGEam7O+WkwyL9WTwPNRfZNoPjM8tw+oZj8QjKlDqkJTVdoOC67NC95zpmPb7uf6Iik01OgZvCABTOqpTNQsAypccaUROe8nspdymCNppsN0wnB7bdktAysXKwxQXeVG2z77KU5Ti8Mq/NWT2Y9P2kxu682ccsiV/WMyGl5kUNsDKEVvbrM2af8ZPg2aq+nxfjBnLxL+9bw0UNhd65eUcv6Ac2LtUMJypQSpmxKqIJKwfG3SQSMJZZMSBJdL3/OQDqklU75b/azhzlf8DEXadW+lF5eN4pu2awF2pN/xpE1M6Cb4M6d8o3do1CesyTDLRo3+tTy965rSdIEnGKRgFFyTGnxWsbbi8gfA4+rQDLntZX5w56Gs51j47x/fh1UQ==';const _IH='015d02b8767e685c9bb5162fb527a7e6ca3b38b9d4618e248002b54cdf0a2e07';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
