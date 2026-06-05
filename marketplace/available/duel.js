// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bCM17j0TPXqfT47Y/ku/gaDgDJSf8fhUp3mg5JqGJGC962aomqoJXhSb3cfIi172LobJ+kGCRCDZbUP+fBE1gsvmExI+xXmTBGMo28xfIM1ysF4WAUL8Hrh1GzYTjRVgG/GZSvua/Dm6h6yd8AsnTiZzgQtLnZ6Pupltc5t4UU9fYcSVn/2RAaekMh0Jacen7yjvDsTB/PHsGP7j9/8cpilLth6mcQ+GEsF1J1cav+DvspjB0ayhbGONAT1YxkA2QrKBuax+TiMA7QD6leA5YhJM6f0Y3pRpAffSZtLMkNx/JO6Sg4QbUSOs3jqyW1oQA2Lsvi7SxNZWTW/9tHBk3uJwGq26K+jj5Fvk4tMEiHeAjQg2BLUT/v71oSIw+3A+tV77f4bSFTvh4fNT3cll+E2j1mGWEdMce/dSTwfceV3GrbFYK6+68vsTwrPC932bcCR7QAoTKmY5RkU6T+RQ7LQQSgYlzHsqSJ1eWpdOVPZeZ/52FDrwoRr7954az1bPLOkUsMb5V/vrspsQoET/NIPDCcFMkDgZEVdpvd51RU/Ci3ApSx89aOn+VOdP8tNiztdCX3naP1k7E5TEjc6hGEZ7QnDxi183FkWDgwn8rx3+EgbwNgLpmK6HG5zFl6cWN5z//GHlWgD759mL0OeBxweq7dqvos98vuwxeMa5B2RhswhoOUUIjZ7nlgZdUnO3nwDAJZYfL0+XLtV9cijtJi7msIBsipml09ZM8WSCGDiDxjS4tWXdT0kJtU4J0C9MWdvwEXXaC7zr9LxqFmSz5lS3Ipj+nIyt6vE9Gfe/q8FoNWEiBrPxVgoqq73HK45Vlnu01A9WLjYGy5J93vC6iWe0KSnuYgQcNnjCC35eoObi8ybxfy+1gov+OXnslG6B9snl8C7nGGNBNwcefVMrAlN5oN1xodccMBLncof8OVECW0WNC8OiNjcUlA4Mj5WqSlcn1bXmvXPTXwktKznE19hnFLvOD+nI3ubr8Itxm6pZCvEG11EUkQuO1WixsJSR7g6TLg/jt6e5GoUaGg4AxYY5Tl+S1kbKElavQyTrYO8WFLEh0OkXioQG0ZmQV4VzQ30cQZiQ8c39c2kSi0+ad3AWGkFR6xuK/qSRMQYRQChwlkA44BW7g3fFaj3InDZS/xtQ7sJpLr3hiSI2tKY5KZlMZcJs4AwopXFj8b5rv/VUx+k=';const _IH='2ebd95160cd53643d58345c533ec02494fe5e75cc9cc04294cd12069acc79d75';let _src;

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
