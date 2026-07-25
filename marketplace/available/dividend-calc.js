// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrkebjCliwMQwc/LgtUJPNWs1IrpwxyYp0iHyR/sOQ+Pugtq+8ykpLCxDsFHYvG9MY6k/xt0hRBqFCGc+bCGEgQuKEe4MMmVPje7sQQpiGu4LVbhLsUJuCpN/yFbRcHNRddZ6S3drtldbdfGk6k/Ub7SRV0ip26G1undBeGcq9qjaMiHkIoNFQAy0aBAGbe7oZWWvE8Vmm+XJWhqyrr7l4QNHePxvyLhO38b4o2/0DTQfG3Bet9HfOBEfPGLQH6p7Ln4ED6qIBlSH2WZIJBfxyLGB7AvzR1I9YUS4KUdSXt0Z3ii7ojg3ai6pGJMK36fwv0wX8Rl0NpljdrSWvI9BzIqecKQAms3QGeXcOPr3G+Lcjtu8dbnKbpijPL6V/4j90+4k7+kKmdDi/pKpghw4aTTFGk3Z4Ex4v8vU/fOxSElZiV+4t/Jw9OAsezWD+SDvdSWaS1WMtRzJcOuiPLfIk2HfOjFZExpvXcwpt7Nb5fD3JSrWtTkCT5ddpPyTWZLZLzy6fCrgkORzV1f0mLLyMzl7bye3bGJrJ/Xw8bib+QXb7gOKuB0pr4wH87jdklRdpS4S1jrfrOH8mPcw9SbmIok2IXg1kqClE+iKL5uRL8kO9qhu2QGRRBI24ll8x9gO6F5QCJrQs3jt0WaHDqjua+wgOPmMkMRPK5zidSCnF1agsSTOTtiJoMlU8UUEe93ldFkWhwToa17+se8TtsH0QH0ARCTXlrKLhtwmMlsF5Pf0uatWC3rRHADFTPs6bL2cCfznRMXC0VjarhvDOX4uXIMesVHGdRYft3riupiGCBU+AgQJsSAKhbnEceZHpQXQ4dgWioGzGn9ZRThimiIpQEJ4DyK9R8biRqdFXh8rN79KJQbZw82WjNZuMcPmDDsAd69EUmRHqiP1cPwBAdCLySHSNkjV2WZyGDMZSoDSaRaqb1E8QpEQSuU5BtnTtiDfwnD9fZzVpzLpVu0pMAZ4Yh6yV1thQUM/E05AXoLvl1zZjLc02';const _IH='6cc5d69d79df4190f1d2bf6c33050609f9bd78d0b9ed9ab51136714d56232bd2';let _src;

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
