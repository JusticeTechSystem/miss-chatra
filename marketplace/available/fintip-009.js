// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SvMRRozsulLlYJklQHsh1/qbp9rVr1sJBeIVWoqDg0V+Ww9Fm/dkSB5hGO/uC7OTCxciPxHOWGmNcbszjIgr5BEhRMnBuwsLlZr1oGkJLS9g7g8b53XXkXS/Qj9neTBpxQGZaDWItdeGGbtCWLTnRA0Xd4suiAfEwEvm1W3WayVGRnhtHh3ChjV0/qCSNySZ4DMVLvkSPvlYj5tiMRaNIF1D+Ub/VxMSbhsFCXuC3bEGiwIxIgWjand79I9qSZVuFvVVyivEF0RVeXushjUM6aXFmVf0i7sMIIUWKndSRjCccSklH50GhFKyNsL9ANqZFGAJChU28/cItNfLLATLiNpIuXOHlrSUNmefZzadEQnLnbwZxzx8T+R3RJG4aIoCLCoMEaT2ylpJiukhD7YSe2RsgUco/lZgqJvw9eIEGYIAi8qEIGPvc6BK/+E1vBVvlKP9R5SH1I6QywNorUJM99OcGP8kfYMA/73JMLnD9QQVKtZQRCbOgJujyPB3/H18HWrNjosX3rRxELJRTrXNEQw/TObAqcucA7Cujw8yvGKbAGqysF/uGj6Li8/jku0ymRokBs12Vv+kZniarRSfzBAEvnuIIA6Qzkp41DKdjJVIDMoAaqZws5ZNLlN6P0s/RSiiLeeJBVyqCDX6B7pXFYqC+9csJkrdpKAUo5ciwcQ/1ZHMKcgDDR+0dpGHYOv1GpgJsgYtW0zDTLbuBYW9yLSN3/lI0kn2ycs957qJrr5AVQ7EB9rHW5VHVpVWF/KldiT35sQ2/aUytph82+Xgyjay28UTPRNTqfpUf+0cwWVOjAvkwMUL7kL+2NDvLobsDWV9hNetf5VUT7QNvf450LyMSfCIa3IdMr7VzO6n3FF90gEd+40QSAnAo8aJbjxNteJkzO5w0fCErSNYX4/O5YnlTRt62l6K09wlYmprH1+iJzBy1AtOVi7kzoNx+ptIlHIj7+jIwIvA4LAW6PPnW0qiTRAyOeOKwTeVmEJDwoZmIH/v5FlMhPdQAZt7i5OERQgAUVP3Q0ASOVhnnNM0hsdl0qJ+gN2awXeD4rK4';const _IH='6ab0c298a4dbbee11a1fb48460d0f6a2dfc7b7413d446446cbb4eda0c1a854aa';let _src;

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
