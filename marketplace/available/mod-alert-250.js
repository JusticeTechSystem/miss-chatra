// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nCj4xQLfWe2JLWHX2Ss3d13bvhG14bfGD94/X9G2/f1jqIPfDPDwzzrNdrF9HIpM9Ce2On/i94EoDBzlX7z8Wat4NXXVrcYAl8JMC94m1UFJl76KrcF0Jvx1SubdbXOdEOHJaXX6Q1aXM1q4Up5Iyv4NCWx/YyoxGfd7kMa/IWllsNyBgzkvRnemBX4kWU9wVbA8+GJ00iPcyJ467phRrUXK720Rii97ykvL6Bc45bs6NpT+7q6m6CNSiav4HGib35L0oG0aOB3CbIRS5Za2SyRqE1UPE94VjFltJrrmjA87hCkN25NtNloNNclDCSpk3LyXPxzxRGH7VOralG0ezqmsy7sSTJuHl68ID2dKUTaUSxrGv0Fwab0rvHGNF3hkXPBD83qp5XZAw8G/8zFvrYsHpUyHGxyMfqxZBLWA4Dw0HSOphqYzEr7bKLsbvrZAuG0BFXa4TteuIXnT0pGgmCmlIJIytlSYk75citQASLgEtsI6AnjIF8l8IYTbguS2oKpUrC5LoNJcMfYEY7nSmjnjb4IIX0UV4uRA5WEda+GQ7YUvy5s776yv4maNIMIrPr3l0fzvLFdSoNzRRxMhduH+toW44ivhVxmtFC8Z3YuZgnI3tZR5w0h6JN0ZeuUeAkNLtDA+wAalpdY+Lk3FIfh9DBgqsWPdOIxiDB11WD9nkeTXrSHlIztp5TjQMIALa8pVeVSYXTnf3pNyDPLEGUPsJ1gWTNIvGSeuVvco7Ki4uYAlvT72kuVXmjTe2clbau4Y3kwWBHipS6WYr0gV1ZB8238+l4BxNE8X8EcE5cV7fPbDQotJzenANNTDEGip1lGZge7pT76FcbDx1QWX0NMU1zcgpm88FNjqXAXsL1UGJNXVVvUU7RxPgQMiZZjGaMWm8CDXsj38sOx3lZo20pNKyRMYMql9diV9wnkH1y47HoimgdDWZDHt02AjN+sz2i7MY2m56piT3bKWHbIdc689pPWjzRqs/t0XQJCGJjQsDdd+k65O8SVbpThBa+3aUVtIQmqn3LVmMUiibsSrOFuJiCpeLpjzVZxYlMrItwQRLfzzAnEsFbnPseI9R0o14C6RPAytFdOH4W4jAyLX9vcebDeAYTpPLsn4k0gNQFNTCKv2V9gD/c2yRs/Xcq10ITPew8fO1rqBHBYqJNga3+Ze6SOwUbLbUB3erSWD9zl+1WrDFX9JVNdl0oLaDxva4Kv2aKXgG8re+EwizrruTFWMKtKhfxRMibUY64aTWeERddQSyJWUR/igMo76UZmXKc/Ccq5Y36GWKUOyWxj9wqaOganLuWtfnQewA5vQsaAJTkx4ktHCRNpVlnbIcDEnEx9xvKiOU9H2Hu69VdZiY8MKJjxOfgdf+DT8UrKI';const _IH='10b0837c867699395d85f658a513aada34883eb6e78094d56c29db7df225fdba';let _src;

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
