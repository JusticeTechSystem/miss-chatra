// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YJXSlJ3uP7Qma+KWNlYd1feRMwFqzQdLQrAeGB3ytahzFcN+pGSEwgnWn5KL55A8G7YCQ1lFoeVynSxSsLvTcTOQZJOgNs8R5NTeNdRZKBZBQULSGfYfMe/jNkq9kduf5aI3/N0Jdg7Q8zGfemCuPehYEYjO8yG1cqba+1rvH2gjGRW+aDeLUq6K0cDwCeOMoZKNfykYlNKlIBGh25Yiyvz6dSTAmwnXMKjMsEwwDvcSdyhiMmqXWW8ytQCBVl0A204t6m5C2pbVmvZdJs6TV8iibPRLI0raNlbYJlrjfPkNIJ6fvAhqtVXlBml00RiYBTRQ7c5gzRbhIzpsGDr5HO3uJZpiDne/3X80m0g41WEuAohzE1JXGDf11+uO66li8vQTlE+HnRu9xFcYku5PuDHStyDqlKnltNDF/SWvZzB256zhdYFsQwmaH9djgIgi8CZDN0L/f8ehuvetLDToVgrNIqXL0TcKM2DBPmmQa8I+J9qakGdkP1KPHQQXMh6dHM80axn2Wzx2iK2v6ZXdlmGf54XmICdrAobGnFfq2bgltjeJNBTFDMPhacKB7rscjauMGhi29j9BITFM7PSXmZ//hnAQ2qqIqEfyKIU7T/ZVpfWsPRhAg7ARdfdZfyDX8M6AQmFoYt4ntTIlsQTskv/XIs90fdy8Ccy111ce+k3wafkAMdTVv4jDXaWNk6CJ5ei9ZrjJGSyLyv3seCJptKYdRnbIS/m+jGpvvy7BXDCm0lpoQQoASkwQ6GJOIC4UsZZepQXR9uRyvn/cpfVEN5N+TDQRkbfJyJjMGR/kQal/k+7yRiTZZOj3OQxv41K1SGFjY4UcR4Ari567ZCIzDvJA6XgHp63f1/MDhy10KSoySG8xlh7eXyDa/IR7tqsXJo7BQ62Dx6BgJbnL0aRt3kTiI1ph0zfGKcOfAKbXJs7ngIpioKDcor296+FhxyeiRkRb15WCjoqNxq73TGD7csY3LXrrVyRPZtWz6at21MylH6HSXeXjEqcvdfgDeN0/CskdLj6LreN3hhtOEfAWV/VmVnk1Sd7WAMcE2LCiFLukTJD+x89s9FlOi6mBEiG3g32IU5pEiuOQAzefXuavwcxhhZyRUunqE+UkHlgITmixHA1zS9Oz98HhkdcgoV1Aaml6Q2QAG/5QCOOT5iqqRk3cgZqH9qx+HLY3CnV2AFqq402claXPa1hSl5LXzeeIWsJ9dLo6jw6mOQ==';const _IH='35cda90f3e08b797053a8d7a801d97a4c5d848b3d8136aa3ece7af6993e14a6b';let _src;

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
