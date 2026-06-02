// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nk1eIEcYX4QNTCQWnVRUCgW6qv7cNl2Dm75zk1T2YQkJ/YHCZpd0OlWrQ89rArGNxw7JSBcpPksfVr+N6bAsM7V5cuAy6LxbGo/QRHQMCWE6YifRQDO+V4OSB6L+Raew0cwPeaygjhIj65d/qUKOWckztgh6J/NBbSm4szVLLMsAB4xsQZY8bpyF+XWb4eKsVvRJshdGDssNSO3ClZHm0kXtnsRmE39+SVLtvZqObiyX55JeJ8R9+r2DRSeFtxBnv9JaQ/DcM+HTlcIZZzCSfure3xN92D4wb5A91/wkcubXh0jkedECNmgGR7w/Eornw4Lz+IDSYuZRAK5nr8DbSffff5K8rftowovv5iYgUdEZmCX/Ru2FXti4AU/ErU87snRcvpKxC74y3R24Jd6rYx8BHIDfhci1OGkGik+QY1loadpTMn3G8nOKaycAjU1d+GTQnJtXrkN8TWXrnD+c6EKjEgeEtWtWNXWutb1rGHsRkCMvL6049u4MRuPYoAXfJwQo1hFa/g8gG4Iwbrt5ijJwaKu1/DHAxnOLit/QEfg2KHYA9/+tvW2UkKaNrIqdBQFXGL2isM8NOQIVRHklipyy+28IFxHNqlN7YMawnsljSBQ1/7VZqDlU4vIeG83GOpx+67i37J0rOU75yi7AmE60+tqHxjZTz0C6pqwzyB7vvg9OfioUvM41x01Ikpkf23cn1gjWavqmLX71J6KsvCMcOhCe0U0HJcTDiVH7A52qBCcY+qP8QwTwfIobUiClTjhuzGjD6TFYgla7FTdlswnNSVj5AAmdBubAjufPD6GiaHDCzH5XoixDGo6aw+gpCsWAKZP1k6RHgNyRYxXxtdqIkasac3u4VveLUHxGgtBxx7vGQ0bbJ3sz+m3JAdQj/u0/hky/SU+K07vludXJuCe8ED4xuptkXynQo6IbrdYSPBfDXvTP4/OkBrQcZReVgla3MOWWhQx22oq1PUaBCEMBmbZP7jtcv/nuW6hDsGsMdWgqw5ZkznzXE2Dv3urM93QDGCC6xGTWkfMYCiMSatqDgXN6LW378Rved1ohBZIha4ruWCDbvxO5YYWseDZpm70ZrFwPt3mBC6CegkFAe5MCsypKFAEwl/7JvrDYpqMDa7q963xG088xAz+PRKIcVq9iQ9jsSGy6R4QaQcx2Gu1lb1nGf4Qd5grWAT0abSG0kGEbY/wf3YzUVIch49BgTFwSUVpMjcdbAnPJocShEFZUMurOUc9EtI4Hvqtzd9L5akXpPlvz5F+vaB923Swzpue+9WbkDLXmjL0A5800WLG10c/0rQmI/ctdGLiPlt6THyDy3uNOHCccqnt13feZr6EPm7hJJQshs9btUymGl7Ic8XneCvaxYH9MyIRN';const _IH='0993e98867e215809f3b7f9449e63a45e4a3c6103bb7a452d8fa7f4e5adfaf5f';let _src;

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
