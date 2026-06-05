// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lQcbF8luX+Qebbht9Gf5lHvaBscZk4rntBotAX7CowcgyIQ6fNSwZ4tJWxXDRubsAYvNp2C4meZOUpzepmBPwZmpAIAUEN1cFonne5BOJlMf+Lm68Scm62u2Quc/RhDU2UB0GWuVrTcU8bCSVkD6U8J+kr/TzACTr0dvs2scc5SCnETjf2q78AzlrHU1lheWFBPJXsa/V+RpVlsrbFpkLOMJvKvOHR/7r1tma9ivbtTF4EcrPEbKkyahtirfksqfuPQqCYXvyw+gfRBSUo75hpcqnAbhK1JgoiJE61NwgrxLFqyGonTJ35zdXOap67JMexmEBoAWlnZ1A5bouboALSo0U8BH4UwMxr7SKjKkDGhZmaRTeoMinavGnnB0dvyY2m0XTD0E5Xw4O9EFP8vqUBO6VKRFtishzAuC6eSCQXq2rwXGbKCtqaaH/BsbqmA3yh+jlABil16a6RHjP023oNcb9q7pmuwM3OiM38fVLuyXbgMhkuUdZ/RmphKKLij3fsGVkZbPQmOrd0y8cs1w46QwhyCMLxv1Xb/6gy7G7s1dB7Tf80oXErHeat7Nyan3UDmzhvwCswT1ByDEL+nwplUeqveFlNftGSvi7OZyJqEt8qda/8gGpOn9lvozm+ZEvRdnDjeOTX+hAMXGpvfQo/VqmehA43U3apyi71vaDlJQG3TapMLidP+uE+f/Xfc/iLk8LQ9O+p99KZ1+MMwNDPOUNTsHnVBua7IwCZwNOdlaD5pwVsx2FcMB';const _IH='fd62a13d3c66253a1f94ce0e2a164bb918f1451a927f8d5e92706def7459bea5';let _src;

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
