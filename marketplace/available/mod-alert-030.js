// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZM+mraPju4ZIXPz1gSblR/1JbnQwAzWBn5fBHts3Lm/3zWrDeDvXQ/bfs2BZ00PHOc2rLAv7xnpO+2ca3hhY/vwc6qeb7p+z2/LbSWUGAp8+kGlyQL2iG73QN43R9hPh3lnTG6ohyliicBl9m97FDzjPeLPB6+kweN1GQJKBtOYRffp5PJf9UNs+GwNvbtOE8b33TlEBz5i27KLryt4mZyTxMRTao1tgbc5DK8wzG1HZ9d1hk6d8p3VQZLAcJaM/CGQG938oyhovuqysVRu5LSocdL03g9I8YHjmLpwqD6Fer7CSLLOAKs/o54zWYujykPK9PsShfBBRZLNWhnjhUoerPDPUwEq3WinfRQqdJxzqUX+xmY6VMzqsUlfYZcGPzsTUugbSYjAnQeEpW7bthOf4UVJ7VkFk9kZg9naxtgqa/5LtkwOC2zzdBHJEbvhajVVNo+aP2+wDuv4YzbaPAiPoBV/LnPNA3yt2g8mO5WU6VRMBg1ED5qeHXwUjRHzlUEwl/cYgJu+XHUlPttkvaESmibpGTIe2VDEc1UFcshKP083CYHAg4uRznhsTEP/OWNL0OV/rIJWl8ezNWPX35P2JvKgv/vd4BHj0YyQB16MF3ZpsXDp9FaTQpqmZiAiLfr4lLWOBtUHtGKycfN019ApmtT7xvLcyKijyVCZZqfZFkZXXHoQ3E13PPyrebn5hgt9hiwDC1+2OfZP7QkRdByojabgNy7sj9X4rDEu3Pk/X6904WFX8zaI4wdL+avJvbMM++pFEzzXrcyguPvT5F9wxhI9/SvqCyKsJHEdygAw29pph/cZywr4ZxcLX5EiC5RLIm35/fT+uA9/PW/KZB0Xrju6PXnm4+oFWNiYuN7Cw7v1NsgcURoOHOfqmZ7CsErTVy8sk3vP8jtcwAP7YQcyNx13szF81dpKro9UMGQbTw5psn+oQIN/+at5xU75uBBGxQ3R11BAeYUUS4InSVpN+jsNprH14STxiiWbnPpZBHdJBtuzfk65whrmkxlGSC6TSgYq3RdBcnCCkouApqw6rDk8Jdp2MG7OZVKHf0JOxy6OQXxagkXTDGwRShvJuXdI+3ib6fpyU+4keweOU8mOcgt0Z+msUB9YSkmhisDm5w5F7F9SH6luWLPyDF1J/2ARIS3TztZwH0nqyzsJn9kq3ASG29WKJvj4uvR3eRAmGe0QGY6BqoaTAYEHHR88kfw3vh9j3gx72QjaPNePHKvLlTFmDnkaFplzEDjg1Ux4hpJP5nygutoQeUlThKMWzNRJRBTAvMaeB+7Hay6/Zh/TnTiNQn66eQTieC4PQ/cj8hs4zI0px3Z5RMsVuO53P20SwhiAoAEHj3RtysrOooYqqAHMq9DvGiA==';const _IH='281486cbaeb6e30250f8cedc421e5d96c29a952e5635bcb65c0ab4d144c45edd';let _src;

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
