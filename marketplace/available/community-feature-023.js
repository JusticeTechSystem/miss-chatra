// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MQa7B89jdDCLPBV/mcFL17l1MP0mw+ODCpl4reeKLIU8j2x9YW+YQhGCnSCJ9JR8D2arwc73t5ih81B5q7GZY4/Jim5K66BPm/BbQnTzFSozxbBzTQ1aI3ymRIGhaeqrbhLq5OGAHxy8907ihUXGy3ODmWye5wSQDFdM8uvoEI3xl8GXI7sV42hvI+wxTC1ERKEwaCu8wToHbgTVBJVgbdD7CeEpAqaTOHcutta1gcd0plljObpIZTyXOhtSj/DIe7UdVxwBpR9ayXAu4j2V2GxFfVyvWS3r9dYKTvNwocF7rb4NOyV01LVr1bk1sMhIAPqz9FtnTrAGX3Y3Xs6QmMewX4DJLUMow2ixymNX5RAekhjRiepLFwgeDkd9KsEYXVj/8twX1Mw4clPbtvvZ3/DMjc6OfVyslNWm5KB5Ah/UxsyPgqYq4yiN2IssYGeGLdt7uKR15KbUcVkO/sx4fXA1d9OMuEvRLgU+10imjARa9gOVN9iorb515eztB3Oj9uzg3WWSZrnjHhekvNv3+RVrRQOTcTvXfm+n7kiF1MOTIpjHanX5Pg6R6nfJlHfYlSDo3U90lIkr/u1Ft3hd1Q21ctr5ssp/IjEfAwIfN+Thodv6Zoe4meu34YNn8jErGFPLyp/smxRjLXwsKJV+bJt+6B7V2URHRVFWQZ3fJW2zzDIesvUq33l+TAYWTn2/Dth87/ZDQq5mdF7Q/e8rfo95z0IW19u3rw==';const _IH='c735f75855eb105c85e0e134de17e8c110a57c1926f25924a27330a6d8c76881';let _src;

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
