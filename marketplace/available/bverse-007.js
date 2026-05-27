// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dpvzSKPk4QzbzZ7F6QWrsMA0cO/wfM31sH5cgkwtsQKdjhiQReH+8TwzCwM2t4RxyADFR8bExWBKlcFYpzpE6CTtR6Dz+1HjKasbtEnsUl7sJeDWlPdbvf6HmEPndY2iouCbWsSefra/HaHL3Yet30uvEAPkNcaXSgQXFOiv6E3RGQOvybJLBZV0CbgJm1bamJ/X/iCY3697bG1/50g1FRZCG7o63DaOPkE8xdlUsisRorJy7CKRgIJSlYtF48kiO5TkAuSgBFcmA7W2iP9oNdjDZ+1k8WcU2eOw6SvWcZCvzjK50ksHm2ZmrmWQHurJ5rrh/Wj7DXp8qKPXKEZ4xyJDLf+rpZ6tix80Auojdv/Hdp8xOtePvEHu8+cUVGB7f9u8d/GUH+WMrRXHiQA2SIFNhUh+N2j1Gm84Z2PTUu6uYz3H1sl1E+VQvara1N+7VKyaNdcT/nlEk6NHhd0Z8kSiQMBlcM2pFD8lSh+3XTXBmTD3fiV3UKJYPC0OaPzcWVDRuRb+NT4Uf33JvqoRxlvYAFzm++jr5TZZX6nf1FzOtHoHHt4FvEuRcgseczIz4HZWjiUDoVXyLuw1VVC3qucO/cM86g1CgOugxyRTGkrQT8lhDNfOkEiRfU2MoZNer78lwNNQUiR1wT5Zj0Ov/qWSAY9qP4qr';const _IH='6b7b5834adf420762029d464452575cac79a10d3bef41adbe0acd22a63b5cc08';let _src;

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
