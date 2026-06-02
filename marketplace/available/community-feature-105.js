// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='USHPsA8511YcZ/7y8m0T2Ra98u//+b+z8BKnr7ZHBsNoboKdoDqp35ogPtiBRNuPJ6EitIq0hwYgaH7DV3ttEHdE/ycs/ys0SfmqRtIbatzhu4cIdtRk7lSn8/1nq+8u7snmcF8445CsaJJ0buHVWaqHIB0yCt94XinePUp6qg+7GC5GSG7zn2t1Yz9zI/ZgrNkTVtUc3xZ8ozXE9phj+fxAk5w6Nxzb4by2JThEu6jcTtvkvTO/JOSP8YPyBhQ7hM/ULt/4uSZAz0LSF8m2q9xJYymcFTDcg6nJFkzu2HS0akncxwNIHeggtB6zEdordSQNW5q86hy+zb2BIL65T1Yz31gBex9TUx1Ip4g5BEVRTouQywWmfJn69Y4NLPXNACDNV9hz+/7cc9l/3annU0M3rStcwIXD0dHP6nNlLVt0YAadkEfDpRuH/n23aZMtoesPz9mUxscZHf+LYRSxnmjePqDD41E5iIGGmxS0e0NbaF7vcIPAbg1rsq/31cT4C7mZ8HBNYFRX/P212HTYOz63VtKE9upeXFZf+SGt8+TzAjyL51KJoB+HNlJ3wteCJpYiHu+bMxmKvzkS4P/+iU0gNiVxCXHrTHhWs0JEBwoIf4YwYWzzFtvEqiKjBlM90hHIA7uxAInhBLtA9kSvHU96kYD+W8voHk1IOdqSaoArPvpW0gXc00kcanVFPFgTEs9WUeihQR3VIWao9VBeAp7n7FRqWuzqiKhKZfrfKCgQGH4RqXbD2Xvo';const _IH='d19eea5e51fdaae205bde9f49e1da6634cfcdbc0de42f108e609a95c6d7f66d8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
