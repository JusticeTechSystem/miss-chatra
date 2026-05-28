// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xkxrxj2+LpsmZB6zkN5Qb06Un1ioMi1WYoMtjvmQNAEAVAwNCewgODoRlO+79m+MxF3xzGsGTUR3bm/rjPV+/8HINTv1AQkndpJc5/Cm6/j9dfdiE6vmQRPUcs66WA2Aw4Ck8BgjYKVZKWhKXZg+q6XTjnbyIuxX6dyYJadWNvgEOY4CLsHvOcR48i5RSec1p9OHhHNSLDPgboLoKB8th+ZIP0+h8O4UWnEmV4/fhUWCLpsyIfymCjRF75JbuU8e9fFzwO43Wvc9QV7xIU4GCUuTutpeVglUl87LOHnkk+YFTjv7IFUt2owuEmqHv0NBepV8PhzlxsSCjqBenhJWIHIimFkX3uL/LbPySjATiWn5OhjJqi4zmDX7sAHzuWOL7wBWqxCaZLYmATXDTt/QdF4PVz/1yHNACg/LM/FnyDogfyVJbBoi49tKBUSLGlaBIdK51gN75NgamgEaP9j0HJeQevKE103rxsx8iPsIDBL85YAbQXnZoUGDZgNs7NpXVUg0TIOp7q6n5vZPGrbhxQY+Kiu7lBpLy2mRnYnGE6q8UM+OHf2Qrs56yHdacAOS7z8ZQE2PPgnnLTZeRQHAOPKEjIiXYrFNQOMKW2WIxhD+JsCj0agW7f82d+1kid00kfjrkKGfwhBRuOj0oxscc+Lh1bqxytsiQW5H2r+++VsxqslE1bW7dxnnxKyh8tUy63JoQWtcvMkcWla5dVR47m1WFfoWfG3gsxeVBH5gE4ED/adImetW/QiKL2uW/qO+K6+xgApKF1Ctj+BlQVsEP6k5k0yiST0MEZHKufvbawE/t+2bQTaQ3PYhq81H4udOfZpQDCZpCFc0mOv2Flfwb2w5hRPneAsN5Syus2xPrd1Jr30RfTdIkVxqGJzdF+oq/bm/S1rJIKM+OgS+O/ZtbWIo898bo6QRUJDB0OMZS8lFFvRqFYsfUCLnNIdmCN5kqTRb8WI/aj2vThl+drSrnpCSDKvdPcxxHJ2qs31cJzJS35WnlHz5Y3ker2fFl8QxjQ==';const _IH='615160b393c9819fcff81d50c04a061ce15dd62d7901c3f6440c00dfc84aeb01';let _src;

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
