// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ifG62JXO0Mit4pHUJo3zPHYNRjkvtY36KSqHg07RFXklkmsb4GzZcAUnAKMDeHcSUXi3I4mGr7UoS8QyUVt9Xwxm0Ql7Kl/IfM+Bjl6fd6gORHGPMVv39b3MP0YhAJLB48EMpQIu7g+Z7njGABar3QD/XxHMFpNp6rMcKWeWAVnE5qjRkJZqRL6SPvIsbEUN8AGoQL8HXKmKyItwriz8E8BCmgBxmBCcZPzZ9S2wfNDVbHmT4aIzzy0LtepjPvzEBfub4Yu1FYqsQBBxbnIoujPGRYeEbm4IhRPfigEVigYOBULPnDasErxVEETRbm25hwd0kr0wQqaF02ykrUMWGb70wA+N3NavDdjZ0ojYnoN+Wc1XRRxYPCzg7AxsWf1GUVAu9s/EqybVM/X1Z34ZdONWUU+YWu5LgfxKCWDob0u5ONY442vMC8+U1ZqgZLDsrdmJwFjyO9+Os4hYbPJEZd2MxzIRy93WbQP7yKSGLlv6Kz39qgkL/UTTV0oz8ReCnbQ/KHZAkv4lPLnFMprcMUvi+QRi31vA/cY6bnfeIgtDSWiHrUB6U/jkFRHX/abB0k8eYUn6jtw6KAKbYnml4j/QLPbOBZmScL+KgD9jfavwPPxgzUsF5uFuwm8HnU8/8M7eI62JyfQQ+MEkTsqegQrySa95nYko8+IJiuwF/MU7BASjQ/P2bz3xw0ewXxNXzSkGZbnlwSIw1U2xbBCJLKE/kTgpaVB4LTBQuevzSJ5GqQwq9+pXcNlgfp6KFBK4vJpxyOzy7eTySILkBDXqBefg/Vo88lzdK7372nWvIwLMOWsDVEfwsxRPLQOUgf8BoNTUbX0ugHbUT3/xZDwxfwoTj9tig7/Nr5qr5Gxm76aMHNo8yW0nTHlbsyVNIx2EBt/+Hs5GwilJTpAWV2szP3I0CmNtgYk6OG/C955JQlS+YwImTa1MLJUBMSQunVM3wXHMTYrYhakMZtjV47ajAS7FrV42krkPbO8pTdmRq93eD0amWwkuA1HE/vckmiZvrwrvNMayT5WDZnGGzAHneOdBaPhkpOZIemND0xSMY0cMPwbgMPDln5lW+EoVASo7HDV5bGxxd5x9YKMJ5uCd2rffRnP3YP8clW5qZlP4Gci0pzqHez1A/X1fW8kzHDNaNtObmr2gtBjfHgMzf9X/vaJ+EX8fQ+62yHfB+araM3egzprTk0S2KZZV88Hl+6Ak00qAJi/AluI=';const _IH='dbcc11a212ed71795985858d580a0a9d14c995ddcd764aa9a2343d7c4874efa4';let _src;

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
