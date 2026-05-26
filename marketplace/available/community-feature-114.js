// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8XI6P4O33zWStEphQOP3SYngy4iZtLlgYxABGZIbihc1qbmd2bibx+nH5A0TUP7jDU7kC1w4z6/6DdyqhMmIfeoXZtTNVdrTUefwwer/y2KdsHNLEG2mEHLonBrspENq5wQZsxPcftLyeXuVvFs3WF7s612kGxg64Wk9oq4MuOYVJNCRKbr7NOgmz3xCTOrGTYHSixRcnBB1xPNNggtNtYoxw58TU4/96NPzoiMP1jKxWcYXrJqEyqCdoxfzVd2xsMXKYKUYSnDKC3vnkgUnzubEunRgGIGhEsM9BpUrIlz7U0vpcAPO8MunLrfnlMxZBCZWxgv/F717UQrwFHxSR4dUU9HHwmkQ5sJ1KDHNC4mtyB9MUFK5OcgB/onl4ydu4ZYyM0ArVh0Btm+Y8z1BaVUwrOxDc2KR5a6Br9qv1fhP4IGcTbXDHkK6dt6plEmPfiNXbIlWC7W7fBYLcQli0va3hm4Yd8omT1aCK4OyQF9kSh1S4irYkmBgxjsS+c6ZNk/jxmuOMKNtNHpxfLvc8LRPmfcmzV3C8GAgPTmrN56fxp4PMA9mmQ6aqqStey+9qv3+K8+ej4z9YcICsK/JW163FLmJCZtpABLg7YkGRcRPDrQaQYg4jZFy2y5KegchCLr30gtyN+XTXRdhG9KgmtygQ4PJ8lJNF/Bv2clgoy17C9TbrJ/OzOwdKyurMWbKRfkkJLOpg93rEcfuJ8HGtdPCh/bDIsK6/uwGzD6yN3KwJO/Qy2Y=';const _IH='120839dec20a496362d4d2a4c851756d3ccccc5074e42b84c554caf2ac9c7646';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
