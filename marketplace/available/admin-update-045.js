// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jCu6vuhwNq7eGN8iNXgvfYqAkF2XNOWjOAg82XmCBT28zuCiTCJWTyY3s/taD/qYNW3Nl63Hw1mOizhwpHwk5dl/kPqjW2dpxL29ZZM4bxg8iOG1zNDQZu3bl8JZQB5O8uULDquJXt1W+gvLMEtdaxmJva7S7rBySDPBj5tD0tFJ/ThM1dmT/YQ0D45vYMJfhje1u77jxpgFK4ky0r9C8IkpfKgDcwK0//xaNcD5QlWHW6FkllUfPQPXqzojiw5shg4fJrC2JoqrrAqVuddz463RvkI8v4HzzypBctB55loD92y85KIDLANqQhgdCnokhXAx51nsT1Eqa2hWo2P7pOcsGR7XMHnej57JF2wb95de8yBRv3jbY2U0LZVVX+ZiILc+bHvqaKUT/GcG/IleCITr8oXkiTWzdPxGkeZ1rc5DlnJjJMPahvLXMFyG0vPbVR/gB84F/7yxcKXiubXl7T4QnyeuqDCVVv3Ll0GxpiGuBn1IJZz5F9a66s59jZ/JmSQNsULzbDiFKf3bUp1xd0RGMLXWyqzXrei+0KQTCbytGg4zDBCCW0BnZ64N9g8ml2Ih/ERzfCgvP8k/IMz/KPQCGlAqdrS7MmtAqdDUN6n4yXQQr4g+5lMBbXjH5FErExOkfncjLPvJbtLzM6uPnxHd1cYcBhpNKD6LouXIAGRTpavgDQO6ra9DgIdj+bojjUvcQ10k9S+49NAJ8Aw2IpGctN5b9Mw8eq41lLPYmYtdjR4cr8ZZ4J3Jqw22xTgHIQlNt7v+mwdJ3Qp5wQ4Uopzz7mMYGMjl96GsQ+kCmhJzjsCjKdHMkRGQBlXQiPmARdYaSCfvVj8ilzauyeUY8ePrV0dB/hTzBw7jseXJaS4jawWiwiVTXZvfnbtZ30U69jSRETE5tV0U/HBZNvZ9W2rELygI1nsLElomHR+0CL4SBRvdWUIT2Ek4a9NyHap8YeaD3sF0b3Y6pER9JGTtdQt1Gw0SKJfBlMD9qrpe0Ii2XY9kE5y3S0w6yDWJ';const _IH='058b265deb6e43b9b3a05d6bc48b6bf355f6958dd546c22f035513a7048afacf';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
