// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lT25BzcZKSzp/Da8LKOqh29g9GCt4O3F0nWuhdL9qYyz+uOH53p90I+f0YvME1v1H2T8yZBZexPdiJcysJx3aymnuAPyi3XYbE3tBMuDd9yir8qS5mrRv+BzOvAf+CYS3XVn4jCS8cW38nTaJQGgtcZa1VYPs5fxfDKtKMQJyupaCXoO5l/0yeZ1Ig8yXuKj1WOAfEI7dHuhacdcp3S+J+zT1Zn9o1QyR5KWC81yn8HaTyc4UzaMi64OUukMy3dLeiUmNuRLXFT7ObEfk6vBWOmtAe6SAD69nJsTxxV6gAQlbgpMoIMo4Kc4CDLBZXPtDNMPbSzpjlC45Z6+k2oCcd3VA/bh6h58rkV5f4AMuQyXfuDIrahbNQfBv553YV8YcrUwzj6KPwUDIUSQV3msCAWCop9pIvsZbRNEEq/GaY8gH3GUj0Cp/FmsTc06sBAc07aSeFi7zzdHnlf7Wd0rfk2/4e4M1X66ruRK3o9RUFOh9XjO+YHO79XDBbG1767hQdjKWgH0lSXRDEw44eZyBC+ezUVpW6U9TJebl7neKnfqMl7unhM+gQ9VPz6Kq+SvBfs4SMU9UET8QZalsAGu9+N+SrPrw4UNlyC2UFo278sqUu1NBhNYMIYd8+BeSchuiiStvXD9dWZzFJpvx9NLOreS+BSls8p2GdD796J49qxtw906OGEUYCpcRlpQQs6NBqVBnRRWb9qrgvim6o/wUO3r7YPs8M/w6ss4XzNahIn+sj+//5oVfCsqWop6uThAEVFlbSmhLKAX/Nvvjdo/RhQsPQoZYeA/LGkb5B7ha3DW+D+H0Zl73BPJPDffirAVJCDDkwnF+84dQ5do1REBTVxbi+Ju4DIHubU1MHpBm25mmviachU3Ira6XAvmnIPP1VWBNbC4BFYl5Oe1vkAdsOK86/EdoXFtgnxbnD9c2mIo+jNdIOP93BasFBwqjn/jXx5A7OXC3wzmFagJvm2rT16hUzAJQHTnWH31Ezc95MHixJfbmu2PiNOO1ZnPojz0o4AkCQ==';const _IH='456eb73d061d4877c50fae65c4a006926fe35b14fdc43b80a49bbc2ae76dc845';let _src;

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
