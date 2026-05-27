// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9qZb/FdUxhAj4sBehuvmP6ijNSwTPnJhLTOuWd01vJ7dK97XljP8IUhH17qHYV7FlgaY6wGqO8r5lPOS02wscL34pd1cgX15eabZsma/lP3ohvvo3peMr6jgiI0rRaqt76GbQnBi/D5Pdbtps0KiAu/LPqlZlmrKMt1T8AP8bFPVQGQy8W8vYwaeEyL7uephuyqCsikILyU0RAXZ8FFgeDaACvfM5cGGYmE4Da8QpW47jaAWZmhekfZYQdJODqmgsTr8B6EsJaFmVLAxgWvBr7XqajlyJiDItLeBmCorN72lqQc68HNSLNPIJdQkfvpUNeDOTm3uonbw2gUZiWXMdDja+A1QCRkA5L7rgKbIaJa8IKpeLEpWgqb9Suz2TOA9Xnfasw2GyvTfOuP3UEYL031X40Dt0VzfzcFjXJGqnFJ8ob8cVdjEbJ8n8/bb/XWwQn5zJ5WQTkWWq3rsdJ2lwqSQ8tuDfkyyfdIhJxidvgFxLIuUcWSFo+4b9RMRkkTDU7cUpBuPxfwtczRoL96Np+MZgou8kPoZVCckd/w/fQwQK2pODycoDuW00edT5SLUPLSMfGAZQY001/kNO8pgxbwQr8KjHcW8IHi+B+p/tKIIR+XvLA4hsrrffTK5YO23HS0438T22m19c0M73ViVFPrjLmTjyfTmH1bo1MsZW+/SYoMiQ7a1lcYTb1IE6Vcach3a+qEd4R/Sj6/htlvj1zaVo2wpRWezvPvIbLo1fD3cL9mvIyg4Zv+O/SEI+O1hUNUYPVnOfs68RQRjuldm5kK838xBgxx5HKjAkYZmTKYF0usdvC9VS9XnnWjSAHy1W+dqBLmdRCQbOj5hMUe2B9DAqRUGAP/C4I40RwZXpAVCtUiJYi9hWlgy6Av4k50z0u1ZCjL/5Huq60/BLcfaWkhsD7WamlcWjpHWQ37Zug850/IUxZPcFogb/w5O/ezZQlx+nEQsAL3T3cLA41f/ElA1moOOfzzRQMcQSZYKMhS2D9M=';const _IH='75ab86eb98613483f95e142daac1350278ffee1d8191979afa986d37e5d8f5e6';let _src;

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
