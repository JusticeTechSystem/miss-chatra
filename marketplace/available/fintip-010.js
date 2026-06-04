// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bHJ1b3DFflPFuSPyGCGyyQSvSLqlEkaw2XeTTZEJpbuweRq54v8ZSrQsidfj5+8IGdxoZyls1dZES7jj3vYUKmN4RnTEtwv822fFvFrFcnQPa4dY7M5ImaZRpKYRC9WkhmOUEdpef20otj8FQ/NN50FA0897yNErM2urFTKORrgumxmz7KZ9xFm2Ov9cgWNdxJOwRNwsMyW1muZzcZP1g0cI8Wz41uZKZ85N6sPB1SnadAFO5/tDf3fgazTEm4h1yvcSevUSWTqMDjLBgBQ6+Zrtxs7uxc2zQvdJ5/U/hyXRqrBhnsMfO0WDDzzYhb0ZHOwkpzeti/EHGzdBsiVneKjZuol2HNA4ma8nBJZrUyHSJfTg0t865S5143hvOxzVJU5CkrYEZEYw3Nvp2FGPk70slEsSJ3R8yylOIJhCJt9elD2egfPWDbtvj+SpRfqk0AgWXHwphJuBa3KMjab0ioBZmx627jfubxD8pZv8WOkg7QKhw14e8CKHD+ejzj6jCNUUWVzL0h/XXqMdkj0Hi19JVR5sA7ojoqLNpkXYAtEcvMQE8UPMGD+Dm7ZMHPSYOer7GNqJf0JQiG8Y/b7qmPnVl4v76dui27kGceH13RcnXVeTTBJFCjVbfvHa0epWM/fAMS3oPRn5bcjZ6L7VMqCzojZYb3zbak0ROMliQ2I2DlGrNlXGC3oiSk+k+yaZnTkYDgpQ3nhvQfQjhQtYA+vR6YFkc2FlJUHqZYW78hoTW/yc5ETxfj1BAMNYmppWKhSyFgU3jmeVhPOYEaXkHu2/iQy7bRyEx9Rqc93MaTG5R1T8q5gKlW7Ikl0RVNdbalAxL3A+Z2JFqiyX8nLr6pRs6LxmDSM1++SBEV5Ea/cagbDdq786+nj+z00yHBAlxzm8300EAZ8tZmoMtWXVcV0pYIKwb52BblGMw+CZUc8B9yhuls3BfFRifQbw9p2rVTAynzv0iOEeWJfgImCycBrr9dWXEkzn2P7vXLHUssPjg9diyg7PT/Kp8t7OruEjuDKG3pby8lKKxzcx0tzSVHRWwenK/+dHsefgwpHI4Ew2';const _IH='ae1815d2cd933ed61a329cca91dab45f45c0afd9a9f7c36ec1e1cb5718cf9c15';let _src;

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
