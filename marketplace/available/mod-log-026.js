// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mA4K4E2nKUfBxbtYbgVQYezZ7qjWNFL4aF02nt/HXRDtas/rtquVmrrT7bMAy9rR2s70RBc7Z6sT+6ow9mLAl7CqBMHdJAcxHNC/swxHKFuKy6AMnmi0oBDViilhdKSFGd4TW1GJvowLxgAfYvb6ytmefXy5s7t8inMoW3SMorCCS6At39qTacqhd8IxkXf8Q/VcchxvHaP0n5Daud7TOpikJKyiLmbV2FKQal75eHvdJbfH5xbQ7W2QyRD+URE8m/VQuNp27BJ16kNERKvVYiXDAEz3slaQnZ8MpOzpHR9WTBgO9Rk7+60pGUCMH/JFolR0zGGa7SAX7bI65P80zV4wg1gXw+vqzb+6F/sgl+rmtH+aLJC3xjDcEpXCfTdU3oS2NgebwuyNDUsyag0eplORPgVXDNKG7PajubfYkM1kUaZC79WCBrlFtx7AYrBJwewzm3ssM5Ghx/bUxPu45fRolrYUKZfCbzildVE6wBU23B63BseTYt9tI4XZ9EdwqVkxSiy+DmQUbegmsq1tkcYF//FBUt0W/+qH/Yv9KpyxdMQKdpv4QV6W0gzixfH/R6PEo9KS7y9/4T3kowvjquW55I7SQqLlxHjPA6hvbanRdB3vLMEkm7paV9254NDGbEKOk7jZakmnBUw+NjGMgxRUtFRMAy6WZktqsJkXxeuwN73bH0Coqs+23iHzE5UWnoI9jzZ3HjB+7/6O1gFvHlaNlqs3vL4fp8qoNPOqEXbuXgdHUCIVAVUzTaAJSBLAhjj9S/y/tDVLyqXSLaOrdR2S3G0YgGkYr7rOfql5xBw7M1zZsifeQ/P4ObjW7rVeZMJO7cm3XJMnB9AEC0Gl0ARduXxgSzktbUH8Kv6PrFLUmmfxADC66dDbAtBa4qw/FVmjTIUg+4BL2ITN+lmxAthL5SeIVsUW0WmnLmiFPPQ1/JDCNEB6guALpH0h4Yzks22Zj7lKdq9fwToWDB3hMh2GWnOr5fJ5+9301Nea+ux7wuYW0JpqG6fCEDzbjfsGA0xbMmyJU9edLM9D87lBXCzv7fMNrlQjpGP5LITaTVQuuerxxpO9f61kP3gDPFJqEqU3yF3inkxoQKbrd2VVVZW9vcGh8ojJnXlEX2WKfaU6YM0Ihyh0RepZR55tsfEKXG+GQ9dbCegDmTxQ6dT5VKLxtGjCOUBQN/25+0p10yrSFZlveKYmDKiEddqK/DhlJ6kIBUxRdCPZL2KDXKCIRiww0lZqrKNYCjPrlBNP0mZfLCbxXybSDmajNa08o89uTzxhTcVaZjG3odh+9B2jHpB/vBt7YI4wshYyeVWl05PtuifghHQuYWp4YMr1An2NWC5hnCk=';const _IH='6874cf2088f86cef4d83d5873c26e3c66f36c87ac488792eb12ba0c71495e590';let _src;

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
