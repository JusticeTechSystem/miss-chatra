// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MtEalNiZL20cyjFcCl41wi8TLqHwkXbdpnu/BtZLOpZ2kEbUT1uywMhNdkG76KmAopFvmegqIGlmBPP1V9OM2yskKtte6Ly8wJFCoKoipmpqqM4r9XXbJSperF0maY5s0hY6mXxtFGkNZRW0FpNH0WCNuvy6svV7W8bj7gkjrPdzEwUx/MM1xV1Y9xlYO6shgpqg5SJc2X4zpNXAYdVy6nCIMcXhHhvdqofUf4d2A2IeEMdJAvy+T4qIfq51PsxWltLgR7vqAMQ1UGMDEO8gTHyn9+fAxwp4uErnbapqOS0UUadiCPCcD0KDnx+DhTXd7qx3VkP/NVvFiVAoFbxp0tzHxKEjtnKCquk6U8RvWrtYvWtj7RJ0KsDREU5kaB5r7tsLjzYiNd1/cA+vTypnAyrYPA8KIODVyrfJ5nATURJCrHh7VEdqcq9q/YO21r8tovn6CbkNihfvLn7ynH5vERa17qTM1Br6t9CDLm3va6AUlhx5R0cDHen/Piq6lDm9fYdFQ/9wZFRtNFC/2TjPQ0+wVuch98MgRPi1T1fZO1CVz+6yW0DL0QAf9S0dPBcE5lJwhp4fe/Fbk0A3cdLMwd9VKlaBnBrP+5GZWKxqImQmrYLCKOtrVThnKzRLZk5H5gu6v6n/84Sfif1aWzjgv4Soy9O4iGeQY7S+Lua5OG/tCPH04X07z+c8Fw8qz6snd3LjLsCGc5g3Gsdf3IaUd2Pd4ErrXPUbyGAy65zQe5/9wCBdhZXis+yA031TFv6JQV6Hgf1BMudkIxw15FkqYPMllk7rLo8QSKYTm7TV20NYk3yDMbzqm4Q4wVJlH+W91zaTuSbJoSgx78EZJR4v2RckV/gEam+n3U9vkoQPDVGZTm27AYwOOodr25uY8Vat8nrVWAITQtk+RtCMiqXEMZEkzKvHTr1RYRsLZD3OMRflK4iS5mhsuBwGSi7XVqIfbSVaaD6dU/IEmPRndXo3R0kbz+WqVFPKm/Nt4wadJpkAQ0+uDhDNTrY=';const _IH='5c3543704174a1fc538a12bb4009dc60cc601ae5fbced2be84123c5475b9d013';let _src;

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
