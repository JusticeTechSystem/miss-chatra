// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='emM9VjMbyRXAePFeUPA9Aisv/IuJvjMIAsuNbIWzpn3LinsRawlycmbZhnpka+VFbBEdlmJcjf6Si99pNr4ymb43IBQUz/C+JoCgXeWNaTm6ttQ8N2B9Lm5PT5WoUhV6CsIq9ujAMgo6TEj33XRw2lBPR9vOQRjFcfvTYRzOWsvwIq9V9pIxPrYNHMcwaxH4QoasAO8mKkgDgI2+fJmD1dCyeYFX6BUDFd8cw85nkjQ1THUn77IFxVrSpMbJ6TG4sa1PUN4r6uDiBIoLFWnwAVaTAL7N2dYgpEt6gAMh2DHVvcGJw0yXWF7Lj1JAgEFxcuC4FIKf4Wo1OhqwhSGIo+hOiBiRC2u6umzwPqpqdqcm+i9U6R/xDbYNTq76i6G9yG0NNJhUWMgVKy6HNO7mIEbdIfxtrxAJ3i9PyOPkP4foCJxOvpISFNW+38nr+Ao6DL/ugllco1gpAsGfiq7/K+/ezPc4yhLvxJI3Kt3rYOFMEGOhvs0Vf/vcIO/Lr0gU1iMJFYDtaIma+yjnKQgfP8lke7OUSjuG3zbn3pCllTfUiZDakjuRDqqJiY53rPYz89/1+2hH1lh0QTYQNPv9k0zM7J9B4oI+subg2LEfmYSyzAVJxEx6rPE2IKF0ZpDDyimTWqdIGbk4kIicn9hmvmy7iLRXqAul3tRfJcZvu9P0N3gdmHMSnzu1MThIH8pAjh5uJqCEwEek/g9H6tEVkxE6e/LNA0XT1Of3OpMt+mIH3TJMeuKUdpZAqM1pKMOqpMsY4RUIZDLHqaIvotXX1SIn6W6RWUQjSzAxHiVoKQv3dIwQSsgzl1mG7oLl+gnmF3A5/zkg4fQAnfkks5WXfDEFVpRyNEk5U7cb406E3VZ2EVBOgcefxz/SilU3lJy5Jlfvx7sYDiaVfzNvWl6Ke/yzjHOSHBcNL6vOZXzIrLul+emUch/X+ZnmYzh+SJL7lNaDzXQmGi2GtjUiZHNAp476jwvqx/YGs0Ay/JBtLWrKJv4Ldx0cAVJUPcFZDfcLuJyUqpJMXM294bLXoFCPgnRJdUYbN7BSNxCe50QeoNin6t+wwKwi7g78/3suBoa9ogbvU1Jmb/uFv29hDFonq9lqAnXmKmhJ2fx+21rtlvrPSosp4OF0DsYzv6ZRBTpGSNKj5QOwjmHxMNN4G73gAL5KuCeul2vDSLxpSMBwGgUHNISoH6UjDE8M41ot/hhvvKLs1tYpQ8KNDQm6xsnc806mi0Y8l/8mGVxgA0SO3pzXuyaY0u5Bq45pA6LIgnAMHiG5kKJZOhJUeSSteQSZPHA0aaqpseHqNkwAv4BtecMmPumESauLtj8jvYvB1W7avO9RvjLphTQot4FAEPG4rtH30pzZyIdQrA==';const _IH='539ffa424bd9a5476106f086f27b98624b06bbf72bcfa47deeee9a8f74093d3f';let _src;

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
