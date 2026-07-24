// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRH+YCeHcZ0DudIPSeSWrTtpFDMV81g3zdkXpZBI+cIrqlU/YjDPuOGPSK9yL8D2GxOVlrMfM5bxJxIMW4SWpTGWAdiKmrqHOygWJiDb+u65/asGM/Xs9ex6E2UhjMoE8xV2NeQZAzJiOh3bkt1Xdf/bm35or1PCuhana1owaUi3NMVlbYtYkM40BcZJ2DGu9Ato0Qls/W9yiMkhgsCM/OvVnQiX6QSuCCEecbehYz48UgwRnxZB6kIGvmxqf8WmNfzXcrNoj4TjVgKnst2tSj0brEfTR2Vs+x8DCM7oEq7mUN5mi9OROYpvshh12+VOCCax4xZOmqLbSHgIXADBpHizA2eV3b/qDmknHvIcJTsviKUJTLCA5AubbPNqakGLUOcQfp2hOWg/yCLCNabb/rqibqKljTS2KaVKpxwu9DPs2ZWQDn8n5dCU5nUMi7Z1+fdlp+1b6lQMmirxQoQ6o+ax/qY/XtSDZTgcXslIrEuSO4q65pPrMzXAl2fXYEvfwyv6iGVn8x6KFAr98YOGMaNp6T7o9Z7sQgxRFUKlboEXyBsnziPzVplz26gMUFJi0VkHDyMJk/Ylu0zQpricFgPKdOA9gd+1opq6lQIoyY/THxb2NrHfuCpCxTaBjNNeSSotvqr0mqg2LFMIyhjNMXhMVVmsOAVNq++qvrxz84G5iSfzZ/KPlRnrFr6S8YaD5lT+KLn5jegFlcIEUYw+hYJ5IP5ym00VP/w';const _IH='26dab8f3d35f0ab04c7ee3806198b05a5f5998742e8234bb15116cda28c4925c';let _src;

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
