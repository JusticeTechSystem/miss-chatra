// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ndHzDPAvCMGELJAZxnzqj9eMPeu0R0Ie6ks38xMNEBvbhJSIEJK8ALRqiLRgJRQpaCZvDxp93ZPoYG5i4IHd4Nh/7gDwyhb9Rz8/NyiyDSr1HX286Jt41Pdpmt2MkImxAAFehrVWLT6q5Zr66ZAC3ciiF1tv5SI9vdBSOvOpQRGMjjcMAoEPaut1R61V5d7kG8BotlPEvsd06UH97jiL7BpZG5P8M/DR+9NcqEKlArUVYhDTid10W5ZMz+F/pxo2aRqPTfdf2y4SoSrZggKd4A8S9qzzby6b7ROVZK5cLvbsHWJZszteTcRuKASnJNdX9BbSNGI02wvBZgsnIBGBwUC03Vh93cBSLkfQG+TL/Ac/zjeT9MNwZHJR9ov2dxxClziB90KJJeZ8toh8BkOPCh8ksghW0p6h+0em+5Ph2V4GYjfTCeDlgYyX2qpw5WuknNU0gy9JNmWj8vwJsIf7L31dQrxU7YyZIPRdJ+6HeA9qkr31l3zPwj5rV/fbHHB+FYrqUaICibvBvkE3vJlgRNUd+GjkvocCe392O7JpwhAWrJ1bTLoLoSqddf1KFWttHMd5LM3ArbzD202N7wx/lUqIEC7FSf7wVv2JHG+NDckDUW18FxHMeNVb2wKraCL+zIQ1rx4yg54/VfOfvOWEgzes3ekD0JR83NfgSCoWE6LEnsFrnCyE2MEGrpDcYB8ENGK+rczUZHSsm1/WcHcaWherKrDUyTLVuYG+f212oLlEIkLtLua7m0T+zQW+aLuWGeOxQ64NRYoZKdU73yPfZCwsyIur1B7wklpRmE262vx4XcsCIC2Dkj28uSnGPPSsI3aLoUlC4+BlXgrYeuFiWsmOxIwY2hGtyNUzu8dbYgW+jOU7BEsE2z524sz3tpyIWlKCt14THdTM9+qBUeKDrrEkn6LrKjniYmQsrfDypebwfLcWeFwCxuh2J9EXkkGjTi+J/tJsifAn0m1JHn/M3U4aJF3z9BlGGzrc4kHA6Udjn/qpcfMypsYP8VmO4jW2Dbup4qj6EjSvRudN9SIzgTG8BCqImKdCds4jOfwG9cxU02KC5fcyeXdrmZUgRxwwTjpZvWVhDD7G+84zq3sNJXDJ8q7b0+B5Hud6poSDeYlkfuGtCMk/1c0EuMBK3IC7JFSKvqpGyjNUYw2Sq3VytbAjNcukpUnLBVyfvCZeAl0g3jna6ZbyfpmQ1Dxgzv3SCzCemrkV4iowxTM3aybmEulHhZZ0VzEbUWtyVeRe1eoSkyU0aZitutqZiTb0vAgxg2iJt5lSSb4BiuUlzS2fp69RANYISQVPCNRG79BNy55vGEz49aj7jUWX+jRkfEV3OkTPzt2Rni+LVgXJqLd/QoH7sf0xZgw/Ga7zgdh68sB+LTieqBueLYxa9BTPZAw515z5B5rCadsVV2NQ';const _IH='b03fc738de0667e9a0de069e16c5172e697301ba59c5ea5fac556181ffa9302d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
