// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w+m25TxXH0dwBvOyZcEYiHh5I9fzgcRlON992+TR496aiQr1wLkqp/43DjC1o/nyDJaoerKP8t0z9rwdKrf5ZkcGwDUWUYrnexjc9K+HvlSaCA7pjRqEsChXhJzrB/NsWeuRNtNUOuJsZkKgOB+uucj2KcJ7d6Dnd2zxlb3ur+egJsi/oUSXQmfxAUWQ2XalbYd06gcBpzEvfEGvyOtHYi5Pt2I6A/x0Pr80nGAYF6lENWV2/Zvz14c36nZt9L4hBa3lWCh/dybg3X7m4czp5AP7NE354vT0WY6z8HwJcPzwUxQPb4QlcyOHAK7YPdOU6T9Q78q8i1ptQQadmkULPTGyWcPNiNN2+7IqznlgJ72PXRvhU4N6Q56Ox4vdlJqRPrFMy2RF86VU0b+aiuHasYB2t3VNZpUgArB5fUl62flROqZN92I4Bk8bJdXS53Xx7C4oh/N3OdG7bxd2lZoP9LVRxzc69rzTEZKgcWfe06IjKGbb4DMrphIuJzs8qp7q9fiFK3Fc27YVMYY5HWfBMWELFBJ+hlknkfpFPejz1sNbNTMA82vcqMxcHELlBrFvDZHT1Ryx32dKjU1GKVh56UQcIcjW8mlRdYyRuKTfk2eiaG/Bj9Sme0Qp0TuwiS2auwDN6Df96M8YM2WV5xTuuhvaXJn9NEW6yGR5MreCusRxfhNCYw16uoLg+9A+EJy1QGHouyPSskgXxP97YLoOo0xtgcDQk/86QB/fsNhSiZN6TLvTn7QDewhOlzk2FOjXTtw1fgbl1aOy58v9BAF6wt3pA8pRyqWSSyT5Fhqqxo5cPUnLAjzfyOAejx+nH5HT8ocETaJ8AxKFYr9qkQ9VDPrfLmhbQEOjeJvp+IRDA3iDef/9Vcy9XaK8UTpw+Sii8nytEYRaHLMwuGG2ZCr2EvJyDiXHMjqa4D3hVPNLrcpND2utn5V+e68QC2m7NDExLl1KQaV/dWnDbMgZQQRbDBvRrXY6llg3nFaBis99kw==';const _IH='4b684941a049c2482f4b4885436c8f2f438f03319282bdbc650f820ddb007357';let _src;

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
