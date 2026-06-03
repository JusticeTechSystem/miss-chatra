// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ts2LyhJHAraXegBBaIQDr7sZrVeMUFnrDfzsLttXnXSLKf7OFMWSY6LVflIFLMjCCU63f8mpDBlSx+bsGU4tRAGciW9erkzjCD0R31Xy2/tMXa44GQOSOXpSaBEnf6RP80T4rKKVKmNKZbSLl5nXG2J4JqAZq1o6TacxfNNu87P2u5/Acbwn7YXhxdDeQd7TLj9goW5315DE+50oeu4IWvc78kByL9so8tWjLJNAVLw7LM4pr2Ocoa9jCT13UIn/qwm8Qqw/Yi97Fffwb7tIxnVo93kPNGHxMB4DyI8uZakSFzuJ0pZV7tq4OVAhgpQsOPSRy1LwMsrHoqLUAM7i12Q+u/1riI/GBDlI6Yb8MserNKOxVqc6XSv72HwBmtquMezrmkO/v9Afkz92mVKg0z3YSiUSAMRxztVlcSWFuZBGKUh6V00LU+HKpXWufRILAQATC2zuB2czwhi2eSzN/Hf5jU2u3Eq76HlINIWWUL0mkD99R776naXSmkeRl1F7oCVdI9IuKZGUIH9PDLWF6JEAYgFPVonZ4E8564wvYaGBEOWehMe2KWGs7+oBXcrzF7jr70p0wvsIy1fnkJnYsnDZSww7m3+8ZcNT2Z1Q93egMdGJWipuUOJ94nOxIkmVOkC6JwiVMy6WsY4i6AYG8dmmOs0EEl0nqVWAUl+laz8wVF5svBuNos8nAQM11GFgakF1kU4pqe3dAV4n7XSl0QK0bQvvkvFMcrwJ23Vn6xqQZ7ylwIUYkYQ8bzHPHZFzOoVrEw7p5o9JCY+tMWeywbux9AS0gFNo0weAvmOSeAl6/n8sKJ4aQx9/H0NQQYQYUPyeIvq2a4r4bDwkJo6c0d6f2x2SosYCV6P5oHptq7m5vXEd7x+1VhsFXiPW144XsmhSCZlsbP6VcTsJRjkf8no0xT58hnxm7rOrdI/2mYe7e2YF9zURdgxHwqMi1CWJFsqw/kgLlPGdtdoiI3mAz6M/XA0/xDQ8u7xGzzG8RyfyJM0rrTliFTPs3cUWnKRlCLaPn93+S4ZF01yHSnCwh0tjCmTPPTh67W4h584O';const _IH='56baaa2c0adf645c2dc386e9171737b59525decfed56fb9ecf74e9bedc0f5cdc';let _src;

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
