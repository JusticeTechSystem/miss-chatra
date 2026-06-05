// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XrvK60qJ5c6F0Bt12dvRn3M2kS3daP12wUYQdgudTAdA6wFyrb7kmFR1kfrJUPJkq/Vl655K8oOAQpLn2fydheXR4n6nU9R72Z7D4KhxC2SXyqtlm3oafjnyNs5Y6dBZyG9WiVQzvAWtWPpJd7KFOzHV1koiMjNZQboKfDDQSl20tMgRND6n/i/z+XeY+F4h5dDMQ/FGBsV2K0WHwhGvEFuLzVoelGUPjVYnYqn2ckX4W7kxQlep8Rm6Asqg9yaKO0daPyfrsyoykswt0TSpGor+cyDc9c89f16wC8WuehAB92+WFxxsDTj8YMvHlCMRJm5QKcGI7gnk19s+z/OXOox7tPuCO38j0bYYQnqtcAIvf2G7BZsmzBEC7gGNFF41r9D4FgvgWe9GSfE+DEJvzlgklN6TnISZpmohN15a8ZOG2mgRUL2IMQM4xs8Sv6LZdUGGKfi/vH3bxxf14CPS6Ql7jNYMyPN29R3SNxga83ixd/0pp+CphOThAVIgVL1M5g9XiBgDowhUNunJsYrMb7b1j4vMsfAUn4fHX2BUQWi5GN6LnwB3Yr610uKKbfI77l0JFDPks7894ObAYdMfJXObFMvzOExUw6vMlCsSd42MSWMrtVH3eRpozz3+aIf0yGazV3WpOFVn58Uze8v2k4A8IeSM4MZ2rL4+x0UmJEb1aFEoA0cK0SMZlzIbSA2K+CKyc2t2tu5Eib6PNhSRTkhlHUxRzQP9g0XK25Eg1hRfeX0clbdDAF2KFch4j9psXcScbOxUsmPOWTczrjVugT/NOBmDQ5xGe1KWZ336MqpR60Ut/NK3pxCSfGebs9UiUKH8VtA/rFWNXqR8P/TFZIZ+uWn7JXRnWjrhzpA+6xFcgSsR8cnpuavo4NC9CbVLsSaZKE+DXR1aoq3oWC80Ekf/F0vno2Wb69UeF/jaY++4XB1Bm+yAVg==';const _IH='4f4bfffff429c86ed93a49a04614ebb4f95c395a046d855644a310a1be131195';let _src;

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
