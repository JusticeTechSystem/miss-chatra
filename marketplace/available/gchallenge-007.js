// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='grJREEn9CoeSyExdx69z1hduq8h1EaeTLbx7HmbM/GQr2jzHRN2yJpbMLsk/Yu1hNnXouvFySlTmopNkyebUKNaOWwzLpjXKiGEdfity6JGEhYaWChgxFvMscT92mJ2eTLNMYoptGD66VtY8eEslocvs4o4cs0DVCaIhtzEfVutonKD+1GFOT3pLLwdEFSaulPTpQzlGJmDGrnhavz9C8KL0pPbL/WKu5FZ1Q6mSxsi7CbWtZBKicCIhDP3auvSpaFnuCdjEplrZgHjhrMDQZ1EmNRYCjPF3yKVlG9xNF83Iq/Ms2tAY3cn8opTUFZ/ovthw1AoOH3JXsF+R6JHdg8JEunMdTJ7YZG8KWgpTMvh4bcRSmQyr/1o9+/jrGqkE405gWxb8Qas5sSXtJMGcOqBijrmn6yxviy2HOdh5p358wjiohk/rQVnUolNhrap1L67+z0RYcbmv2aRdv/Ud1O6irFf1ufFT+UdVdyxBwfikAPvahWzfaXItTowvt9WnVXuJIXW5Qs9ixqvh3tK7rV6AiHYquP5yZ/1yo2jB4wylYqnyytUxmVe5gwVHvWza6tgJzC1qdIMVf+NY8rmHke2wHTwclb2nytFwN7yTA47c44MqDsztVFB9Pnl+/ziLVab9nuc=';const _IH='717b8dbdd2e0ae569912c48783543fec7ee220ee5191570cd478ef0af670c04f';let _src;

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
