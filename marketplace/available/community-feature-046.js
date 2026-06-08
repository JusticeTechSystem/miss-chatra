// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7/Yeghn9NBrRn+xdmM0ScY1l4/MlqzeU0qdxLOsc/n4jRhEF0zoz/T/gBL9mT/ZV+U9gEovpE5BEj3NoyAeicNGlK8ozDXtr4TPhqTvpkA8scFnsZSVNtWbdv2eS2WVHtwGSip95EptCi6AhNTlyulfvftwBWV0ghD3a/oIz6W50ggYWQIoaQ61MwTxcE2wMeBLW8WlIqVhOCy9frghTNdHhLlDFHlz0xkwxhx3o7nsM33XCX23LqarS5KgZaf/QefOutvWssSFBUgmkLjNi+gixH1BDdaPcZFf9w9P+1UJUhOL1Tsd27Kcncm0RCsbDYYxBMZdPTGFm8ReO2xZf5JPtqkJ3n8ffI2olsjWhYkxzYsQr9rUHqp7ewTghoJVexJ8Xl6hh6MG9dQItUxyDNeafToJ0Y0s15cBNNXFObx/5eSIs8jiYK2hw5uJneeQnLUduKLyRACOnShx1zRarOl3ZLpCMqD9oF4KuJS6TObUMhtrKwKFXFqKO0/tGvs6qW2EvGIIQCyqe2nuVgovZE+YpnSZfOaCpifLcf8+W6y6HjdBI9lZ3HaifxepL/dW7m62S9sRA1AKhJ9tFDYVaE06fITpsBb0qtgWzElNbDaXzzR87LQiROxsduoq+DY3bDuProTYSYIa1mcc9i1LvVUReEAESUBN2cYMRnC3sDp46BfIdqJnByAwukkFJieFRpigK/xjSV0+UZUkuIwm2v+8/t0g=';const _IH='d647c897253e7b58915803e4886349d2119ab7fabdd598d775c8d689478584ad';let _src;

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
