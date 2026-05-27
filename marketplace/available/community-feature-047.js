// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c3e3mKp4ngKEfKUanzVdgVhJApojtkFWdUckRztO6gS+LRUzuuCwPgop3UpLqHQbj/E1OoIYrd6yu28DC8QZYyXXb0DB/8zwKl63AIsjdYVTokTFWJci7Um9YgogTKKxl4BeWS/KaEEN8SXJEgCDzbsec5igg6w7RI7k4k0EdWkQwIP9K/wfwjJjZiyhF68pdMAAVtmXg7IJxiEYewFbPN6sQUZl79QiD5uYbAGjl5z/T1sQVGaX5P8x0P05D5ZanQ2C6C+6Hp3mG0M+MVnlEKKhtBDUpjQ39OyhRdAByK42UIsUrfz9vtYmr8P1sFpN4i/O1/8bs58DpwmdG9ab28VQ9xhCp/x92+9olqAyZ8S6kYBo40mrLACzhIzDvvVecD889CwaP8M0nftef5HFOTwUhziYA422XKxJJhbSnGgwlIyA3Uzh6Ct5cS2PnE4/nYYyS1k7+uKy0USb26ftBaZz9pmoGxIbEj3dKGnEraSM4pakovoWsMOSon+LgEqbsORZsfbJ5/CtC2cKqHXCSkiAIaheSUZDNNz+ikEajiPGxSquAy8NabkPINq9O1Z1UGVo3lDA/d6JKbkMOzcO/LRsIQnB91HzwWZN0sgaYRNrSW0LVphrqtecDHzvPoo+1O5xdkOE8/uJPbxdmzZwNowxt4ldqGyejnzNI1VmmOfmAs/9LJAeXmTs8T2sWftLHOMf3Vc4vqhNi5saDEcegNR0Bp9zRlb1jtzNhRyHtw==';const _IH='ff858ca1a1cc84e5e24fd2251d3b926206600048e64f816bdc5a471dbcca9096';let _src;

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
