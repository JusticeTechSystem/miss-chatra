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
  const _b64='R7RomIN6j25ZzJPArl9eOSivALCgN6NhelVU5qDoh6g8kyWvylAIEH9E/brKPxAk4+0A4jIAYyIrEnlGzjZRXhg3Lg/8FkrxSl3ytOsMteSNkbdn7Jja4Y8LidG5WnGAep8fsAHrHlLPT/ON+dRfOQxkTXj33wh+Dac82+WRq/rDlj2Cp/CrfJSF159LjMe2S13Y7jjtkUEzhF73CK1NdArxg0Rs73ojIfUPQrVTWV4pqpZ+71awsTxQ4TElGsDVFj/N8QzbEXKJxLPxxT4ineJVs9vsA3OIhI5yUNFHsy9ASP/fEXbOKtMgKEF6e3ZIwdlU8ZNIjz6b5pn4CG05zTNCee/+BnxLReWFhdfqU4zWPnlLKvoC4qKjykmYa8GpZ885NKw8Ng+cF8Y7wfV+k1dDrrRVsNCmvAbqZ0CLYNFonpC2kZR01Hl7RXwz4YJH8rSsahjfTft9jVRI4M2GplKOgXvWVbNOYAdKt/IxcC0OPDuJCVAZ0D4UqkAtJClkB9r7zmKSAJevzOzumns2HfieU0NAwEYbQT3P1J4Wn2xx/506xOfXB2tD9H/WNLEiTAH7vMZREYqnVOxg4SbNiRUnL2rEZ/tjG23bCwkW/7UpGOnASOPF9WTjuD8q4LEoIR1pKIjxihUF3C2b6Ko4AQMPLgTz/+d5kLMqL+teYzz663CNYcPf/B3RkFjDXmbGg98b/YfO8FDiKAODLKMtc7KjQPlvxLGGV9ytlKuDBcVu4Ig=';const _IH='38c48843062f3084743715cc8e9d89c0bbbffcde2252ab444526ba1b46169ce7';let _src;

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
