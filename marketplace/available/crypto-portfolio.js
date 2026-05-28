// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Moppi5mMT7KvzqclZGqwdremNW3J4ktjJxl6shLKXMY5oCvJWsPnw4QLq/5UajKHAA9hsm+pAlosaKVTdUIWOO67rWOM1FOJLmCUBPFoiSKaJyr9JrTiNBt/p5jVkflpdTUeCJtFBRjLcPHH1o9t2bCCmUHiDqrKGGmmDQ6i/2F5pjn2SFlUDpIMrW56h9Qx0T6ImETB3aHxveaweZKaVN3KtPYAc5TfnKORk65284qIU606BfdtesnYmRBj8FAPwyuXq+TVRDRVeWJprbpH6U4aAqlb+obovhQAYhRKpnLDrMtR6+nJIVfAIY3eibS7nNxP8bvCiF8hvYORoMWXM0rBnBQB0GVw4UEHs+efZeukTJQg4/+W6AIsls5+gAFzqAwU6W/PX8dbAq3drey3LZQOHxieImn1lHvS/RxVoftc2T6UEKR3isopb3xa+MQbz46K86LczaHYOPtwVz4H8st3nMru0viE3LNuKlosEgyiITiiZwrPH8JQzKYA0/41OqKJ4QD9QB8shnVKpkWzHICKObcG6MXXPg4JYHKfP8cnBgsuIXUchXMMQJ1MdjMGa9NkhhloTTXnNV90O1DyvA1hMFhwyZgLj8nQezjxqb3+L4Ds+kVkNBup8RZ0stFHThEyefMgj9GRy2/Jv8nzK1xENn8afEzcbh0czhSDjZQer5l3uGfA0lpDfSmjsnzdk6OydqhXWXs2dfo1ZhSM8321zkZuLA3Z55vtjETAkdm+at/83PnP0TVrcVcw47c2F2GfLvfM4pKC05wogbw1n+Sv/qdeN0uYC4Wl712eBimweNDxkP0tymC9Iswe+9DDNa51U1ZdhFjdEfldnaUymdcEfy+vvOR+YlZQfst93MyGb4mY7wQDzinvndsVfYYZCalwkgNyiloNNwRRdNDAxE35jz5/yz3VyvXiI5z8six7tW/aqqK1HuNaSlGCJNQ1GMGOiQWxpn5mvwf8aT6F+ToVPKyBftEMU1bHW17FP+0pFME9XgA7yZLLn/4pUGdfVQYkqQlOscfxhIQjgA8yO7C/p8WWUh0iNyJ2Eb3vM+X1ejmd+qylpwg8/vkFPUTjT4f1xViITnoLzsbNDrFSbAys1lpNVdLSKZPs5a4IaOASp3Nmr44hmrcofhPde6CVlXHCQUvMQAg8WXUlWdCOf4H4DUE+2g8KRj/wgZN1K4oXLSANbPXjiEkrkWZaB5gNx1RByLWtGABMKjMbf62L/q1TITpqoyKXAmveBPznG9HQa/f6GzdH5mWfele/K6/aG8WbepH2HJU7bnSfRPucpBtwA4asa6TueIChJTIQQgbPQ/4KYg1cnZOd/bkCZr1snjIClYutNt1nNj5aZyJuWa70I/KEuKjFMIN3Usc6QRgkCxQq/UbmIzHQAEzfhX0RTk6ZFlhQABBErw3TP9i67hXewjjs9qi4lzLAkDQKGvu22qlhynTJbuxZGk8nNEmr5OTDe4IMcm+0TWoTC41cmRSthuDgb4jZBcZfepD800PD3+kDShoBNAg0+wtsKExlxtUi9UKX9NIAefmuJ0eVLbSYvlxjsc2XRuviQEBDPFHCGsgPmWTm+NDoi2fD/Mo0ReQOj79/Q/uj/Rpr0fy1by57GTLjDsmo9KGGglOF0mePuwbJh7728ZMBxNuxB0wNVjQAsBO2Wq8jfm9TrUhfmwsjxZMfkLp+dR3w44COlra2as7wCNZdQQ8K5uwD/t837heFPYgYeRWeJS2bXDnA3V1G6FXDDetNhAJ+4Gp9g8AAVksytrtw3GkNgdB+efCsyuU8L8eIBR3sab3EyH1gjyJAnAd+wckPA7j1VUBayefVU95JtyY=';const _IH='0bcdc4b27575c37935bae16903d6b477ca869f51bcf49eb1796ae9f4cc055edd';let _src;

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
