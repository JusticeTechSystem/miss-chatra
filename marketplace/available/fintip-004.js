// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ22Xu1/RbaaxlH/7Bws1TIQRR72ExF5tIs0nHdKKKQxt94gIZH2sGokUMsRD10s1DpI2ceAykla6cBdj0dijgrioOyrrmcX8fRaVPAqcTX5fLJNKQZV4GlxpMlWntPbQDXt0lQqJArHwk1AkYv+/XwSEqyceNsW8PgswLvwDVSJ6UGUEIdCy5CT0fk9jCKP2wJpifrsNzjaHJSypfn1ynMqhtVXPHpJa1nnimXgz+SbFCMd40ldbIZngmv+vmI0uFUW+eI5lJDferh9L7q1EBkcQ1dpv2QKKSZGfXVtf7TSnvmTYi1e/Pbxe0RWaoPH2mBZMQiEFx+pjfLvDioOjyoMo+nlfNEpvVBidv7A84izwjYioVLnLcrvCAO3AZSSdgRk7pbjyRyd1Mq1D3zOZm8CXfvhw10fRSYCO/QezpmT8Rtwu2IwWujBy5/zS6cujvWdIwl7NJzpUB5SbdLsxIwTTSrxEbEy7GahCpvuF7lUQMQjznh4pJN9Tfef9AB4D7UgYKAk3NDv2hBtGyRwOKg/DK254pHzi8WCrO8+d9gFBeVuiLY1GAVXDXknwK+sZCLHBNGMxkajBK6EvKS9tAJ36MDR4CRj8n3SFagymKaSkEtgc6IK/oCGyloPAS27ZmwqgfK9tGQn/ImB5yoVCRSie3dnegmmeAeWKmZ/5uc3xzoHWKCvkF3dIxABnyIuARBgOPYACacdYMyaVVQMaemTq2p3XZIyhA6INBy8VXhkFlywWyWvkabGAfOASmFJpxSiJ8/1GbhLrw3cJzRv4dIGM44kMWL08wygyLD/Gna6tjDRolUQIikzplZpNyr5gRLvC3V+nWC5YVtpUa0y6yA1+/49Eyrl2OSUcye/4d7SmH2Re928yzkOmNyRMEeIiFhlnfyo1Zac3e/bcwT78RmTLOvqKNQW+JI90DAWtmcNWWYrazT0TjLaiipJfQx5rl6bhiW6YlV790lhH3o2tvgSgV9u60Rcc2QH+eNSr1hM5TlVq98T/ywuc85jB4PWLTDimj5ngdt9gTfODtKIKh1qw1VXBcV3Qlbhpe0cDnA==';const _IH='78646f2eecc2ac31166f02c140860b83ebb0747954a80787a92bc4c5d94c50f0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
