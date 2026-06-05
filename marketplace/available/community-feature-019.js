// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P3hCtxxuYHKe/fakfRAUYBP17G2IPy1ldmfff+8eIsWOzBZ8svTPdzRd6ywxgP7KdcbSSSO7BC9MOPboTBPrXCc7e8dJ7OwI5Df4mju1dAhVeZ6uykiBSjSkOPoQquXVheGser1Yuz/PlbgZU76jndp65ArYBuAZjOC2PaJ+5lXXswGA1p+0vLect+ef48wfFeQl3ViD+X6OZnwkfnIA/goYOvejLq8gbAUsihDbEEVSpCxYmVHvCResOApHAXmo4BhnBwYHtDTKmJl84r0eoTo30IqOHeEaHIbbmYNcKCN8TnSdlF1WF49+ZwYOFz5qWchvuppRWxJDv83tnwrF8bjsoCz9zqIwC0WxJyt7r9gY18REOhzmIZQzM644ylBsW233FeNWmJQHmimXPyP2rToIVxgqsx4uLk1pcPUb0RZgLrzemlCWnQ9duHimUagzOTpfjMRknSQ+4HhxR7GqOJDPmFtcyEWbkOKFuQvYI0cpr+P1Uq4yAa0wF2csKLHJqOcQuCMhnyRq9NiSMdqapxWfVM4WGrkMRaMsa4h5NYWwEKW65CfHj84uCRUzg98ZtJQhET4KUgap2UtD2jr13GwqGh6vj6l6pAXvunx5JMcxHogXcpS2NgPIiAl09NR8E8MKNg5SCjX9BO84IforsysYV2gyda+iT4yUsxV+fQuU9F75ig8lJzn4isQmjyFyLVjfFkXoKz0vA1Gievii3yoGbpillA37Ar5mxV+ouAfGXw==';const _IH='e329f8a030abb980c6c80925ec2cfe195f7cd8228da7781d1235b83f34ac15c9';let _src;

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
