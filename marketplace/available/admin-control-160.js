// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ24Sr7X9QBgrLSlHdm93TbpmtGLP/i1MxaZv4fKnBoFMKuaLhixemOlMO0B4XQdDdq5uNwMwowl8me/JL0pqFTw6/z0WJbWcwXCxLZTI0T5sNXrNTrdiLLA7hqAPnQHc00BnKj+eFnr+04ozCZy+KSoqdv5FyxXYebc9S3Pt08AUQcPxyydymF89DSxBKRuXGFeq/R9BgEosJXDt5T6L4j3LlpfIzZPH02qlFPeBKbFTEn8PUBiMssnjAUbRTSxO3xvW66Ieht1U93Bg2dV+HVT5n2/tZuG9Xah0rBsvMYbQVoFn0wCOMNDGnHtPharo7AsaHA+hl5bYKaJ+WGSo85uUANtaELrB0Ff3TNI3VHJ0jQpKmw/5erbMZ+w0G2nf/8R8WJpfS5KeZFNq8y90BkBuh8pD2s4S2QwNq4G1VPInN4BkwUOmsKkvBzCxYMwq665MkqIpB0OqRvIsgtp4kOlESCSK7vkTX8vDmVYRar9bpJomYVKYbIJvdW/86824Ul1YufDkpQ55AQCi7kBe6WX+J5voAFqvq0bIRTtNrrmUyfcz09WnHltMGgr9VUSW3VL6iicP/RvBcUZ37LkzOSOVc6xFi8hYPpUZgtOdt9wKENB0hqvBbwfICU6jBfthYubwmDXx7uo2SavHN0EgBgNPtGVxkIrMQtSzkZqASHz9seUnpmFsWasdQTb0bEaGVaqqf0jVQ1fEQvSg8yIp3CcsUgWtcvl7kcl3YYSIT9SMUSnCLgJcNMGzXM3quz8eNTU/1ZzTFLs6EuB1/ugeYLAMa+2VO9Mqmt5edqt951fifVfOFDcXlgeJJ9JpuyjyL6AQSuYdgZJdmXxJ2Kj+Tt38dBzhqftb35DfPb14nJSr6L302/fnv088V0LR/ktk//ZaDA/wL4Ao+1TNG14y+bu3d9jolef/rHYdqMvGtABdrBMA1FNvlHnTkmKIcqnAr7Lq6t/z64kRfFBZ+iIYHoOlWhHtbuIr6Pzsv9NR+MSQHWUmR+D0e5QcNfjy12mYiWgoW2rZSWpz';const _IH='86b03d09e7f0cc9545db85476b8bee5380e509847d2b9dc368e9d0552e490370';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
