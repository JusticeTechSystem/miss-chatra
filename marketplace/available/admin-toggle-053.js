// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jpm7KLEGdWWzGT8xay4vqaD7jt3/jmnCFcgjQE4Db/s/jjnvYDGchuvGMu3oopOf0P0O1OP4Ygi5RhH4MFElXWYofoiw4GyAlL+Q8mQ2ioWnEO+2B953Okpo8sgvseeqFXeQ1J1euYq4aLFf4FM3nhDXVunuK1+iWmK0gx7vVeBG/SBotT4EBKoE0aD+EhHAX35ZiD+7L4LV2O/pTCTLF7b2Rcj4Y7eF3ZKFMO5NINDxDolUz6PdtNZkou7Qx9HUJDQkGcloznR0SjPYiCXB/F8BO2ef3lvAdKhm/nFycx3FdEDo52t1xuQWaEEmWH1bOMcd7obHGW/xOvhcLEWwbTQNdmLvfQIZalgIjHT7tuH1NtmWj8dF6sz6Vo6ibnh4H76A8c88v9ueYLi4wGtzEF/+LjF8Jlf8nx+AjCEiadbBKL1bWOYptCXQtio+cA2ARxqR+r4+9XxcST5zyVJpn8nFb58KJ/XsxqurbiCeDtummLfdG2278HTLDqAf13NxjNtvGe4OYFca3t+C/Jj8yjGAWR45ioTz2ttc1fM0UYLBFPSxU/AvbEKUrwREhRrIqb0E8/kwjdDr3rySQkXvJ5T0q0CsIiqipj9DSsGxyScEg28Wwl4Yqc8I1DqjtERjaabjDqcOiHQRAv6/lPsc31xu2asyjvm2TsiLhgUJ7ei0O5mhR3Af2tCjrnXYiXehy5rFXkcnWgS5UevxkgcvDmgZ7EDtSbToZRmUwwf71kAi3a2N0nwdrm4VLbZmrs3D8WLWn5gADNPKtESScxw+yCOViMKmhzeG5pTbgcRTw8hkZCmTHdXNHnzw4HgJ+2bxenpEh/o1gWSixbphw5jFRhOpkHkA8uO1tcqXD/723Zibpz404PT8l4HrvsWt7EZ/7BUCtph940UtyhXFHX6EGSOy6hKyJ447AEvaMnSHM1c04y9DrQMSUW/XOJ5R5rMi79/YtgAgJkFXLXgqTJJk+3GYocJcYKd2T2C7mWo0AyJ2/xtlQg3mr5Ey5JVG';const _IH='a07968d5d67654e92394275a4341e6731e165eb3a1daf09ac05e00d1675975e2';let _src;

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
