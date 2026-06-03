// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2OshuR9lqKBQbott0HP0k1p1ylcyEq09wzS9iT6/SNxTnpjDvlVTA898JxsdtzUlJ+UXqHjUjQCknIsyRg6fX5xfq7TvYSC6hBlL7+gN//prWgATUfTMArFXLnf1C6AQbyvjY9yaCYzmOaKHBQ4RQLWiANEKPZQ9r/prfaTzu7BXuuVik68rXgzS8m4tZkkX3JJDTNFWnZ0n1C7zZmG0MqLcIY2R/Npvlaru3ccaRFq8bqmfQEXlPoq8r2NAk9BxcKcLBdNLoizBglRFXA/jRtMCO96UNpk87oeSTtaX+0GIIsKe/J791BvghsC4G5IEk+GPbnH4C+xyRKngoVmiLnm52JtBjjYG0tgS9ABDagrGgSoIHtZf+YB6UbMkKEmfJGWZTN75fF5rNZbK6gB/7ot2Q9c36w4kpdedyPFxb/kCAfaWPvBBF404G2BxqxqdNsv+wBUE2S3NiLlf7UhijRYTX8Wm+IhkUQM1rxHHUva+M6AF41u3VEzEURPqaBIO/yAXgZy/o6GflTc/Tj+sTcb+hxmuZgwvrUdzsFeKVA/N0yIvqk7Df81wiRFoeU6U3nzwrWECGhBN3ilN3HSSFvQQgu1zuEDIysbk5pmOCuvwStrJXsKicCg18/9+7UofVReMmHl45mjKQYc90xTTkpSnR0Bvvd4aR5rE0GZhp/kdNEpc84PrnDgMynAVlSsU+ek6OPFMicJW2m3v7HuJf/FRv+63lfZZuvnFYYiWdGCgkTsw0clgFOASRw0VVkfYiKsB8zC9Nws94vyFmErp+a35oYNGqc8Z0z2LDVXIKp/LS4v5l7ZC1+gKTxqA/znAsAsBZxRjJUoaVU6ScArR5PTLvsIEmUOfwwaPArh7n+tLCR+hSg0mHtipMVDp8jV/IlEN2JYMO+WGDyEvzxqCdpzq65FoYVaVb5hVYKBhsUoV9SRxnhyllABmZhHKsXz21wjJ7u5tTgn6LLkcnjmqvuc83CZok6UOVSS9Ynkx0IpvnKVnMZsqCx0u';const _IH='e3a095388246846b68eb83972991bdf7f9a04e9889211605475ff588a03b0c16';let _src;

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
