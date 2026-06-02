// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jj/TnapMN6vE2CU6j90DMEEzlwtcn9UlFi9rUlbEdyAj/Za9B0Ns0Aq1cSKMDX9L8Wux2QPecWvwA3LlxmthUlTUQCIpUr91vx6i18Xbr7/lfkgxvQgwq1vtsW5BsRzxrtEph/ZbFMEPSy4UaSg6U0xn5wWUEkGW1cpBRW4BCv61s1UAod2DvFFDok0vcTKLBlskwkuLVvSornO7vielmGBoiSbeYXDcVjFUIT3A4ndze6VwG73qbeykzZJ1o1VO5uHEwN32Y2MOvJGqwmgrzuECbq2Jnh3lY2p490Fu62AOq1W/1Yvb9ch2zDdvEb91nkpzjAVSkmnu+hlCYaLOEs7VxfFb/o56Gm3v18/ur5hfUm9lephTdLU//F6zKlPWfnxl6M6Pug96IhFThmlGOP/tnJlDwDBhE41GZSs63rFPSh0qjo71gzxsQv+azEHUPeg84O+kSUMpysi8MPSLRxInR7nfG5h3Ac0ZW+p0WzWbfvC+vX4sjcOj2K7IXptEJCFAld10oaDWTdnO4AMSVFkQsc/2rbR4t6ufZou3/giOLhp2HJfvAvk/mrSiipFDkvRlaKdWOh7HefZQm+AGo+YmPwnkIrObT/KGTvKpFBXktmLF2TxKT8SFfSdfFevYdWn+hQyyG4wLMpegeOQiTH1NSFVtnDY2lDX+P/phB3KMpb0+GUn0c13gNTt7Y17BxmP0V77F3AvS3oSC633EKqXszaMHAKlVhfsP87N1tzLlLQWW63fd+dOj0NmEE7vMKqR8kiiRgMQOL+YRgYFrA5rb6EUioganqjmrx7CS0HekrYAiO3c9VJImEwi946Gf9sMDHB04x1NPs/cDy+AnEBGtYE9OEEm99e4GzAZgunKs8Z2FZzuTfr03JXUXUhzbFbEeggpp+tC2/MpvcfzusjgSegjoNhjhR0SAP4czuyEhlKZ363cRsnSTD6jqXP9d2Z2510hTxBmP/DKyK5ee0fajhHqqfqPuh3uwTreyJAk8Z8c=';const _IH='0628a0302e4d0bf6f02ad7a485c7e91eee00ec9da66482c1d7ea9786c5e46db8';let _src;

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
