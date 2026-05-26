// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ADlwHN0SIGZbUXt8iGHV/Kodn0eqD4SJoGTL0Mn2nSWbvweGFFM0T0rPEhOJzelBury3E/HSju59ZEGdD/TcWTUOd1XEK+dMs+Wyux0aZfZF6atDMVx/DnmZ1asx/86Zk032rJ6qIQ8ydLo1uCPvC17ef1nqeO7TY21NwRfe2uVDpwDkSjsgpAHod6UVcgXQ5TrzNgPg6LrTw2MglXmN2FLxpxpwkwWCELR07LT0114LFGhUFudkX2GCKEVx6CsQdmTYggGNH2Fc5eRSK/NnTdHassn5gg9yeJXluJ1rxs2slPXbq1cDdyBQFmhdcBmbZI1FfY0CRZMkbRgVze06dldR1CE4aQdp5B6/oFulYunnPojkWZT4lHLk4QRzLD5mt9yIQDzcvD7L4DV30M324bpH0UNDinsOBFw0Bpia07fmtGC+RsyqiKUEhZrqmhwSr3ANWIhl2CQGDb2hQxamP96kHdud+wrnj2THuTvEO6FwYDl5wrVCJk0Aw/znY6zZcAJCcXBqYGJMv7roPZNmaV7+AVg6Q0PfwU+88AS+TgkHikC8AbFCR+xloB5UqLvR6xX7SjeLnU8r70+Vm3rdgiNwOMSWennPrQ9gmPHvRr75IYNiHXmtivSaQYFMci9HPlESoZutnMl5DvqqoBxRvIi4VFcpjQxJK5itr15COlEHumGY3G4NUAZd4pzjwud+DXuAfznbCOEks2ApcBqUMeLXfYNR/KADQWeonba8ZNss6IXkT3sBq6dpoEEX/3QrrMkevFi6WDGeAyJt7sXcmbDwnJQQpdDloKpur6gw2o3s5qQfje450VcPvJHW7EUqj+uYaMkij4eDE/5ggbhVOWS6JJ9JT36Ljhsl/9JN/vyHcsrXU5/DzjdtUR/aoyvIc/1EuCkYFNRCZewSjrv44LTLnXRDIqiPQhhuRz+BnAFVTGZg7YFsH3nu0aEDGD6/S08X0ag7AASigvdFoMaNhkESIyMnGns+Mk+fbzhX+tI64ekW6ekqe/y30IMLKKQLKqGJvYV6kAVYTP6Mz8q4dP5kce5fXJVtcf+L4mrDC0YqPQ==';const _IH='10b75117ee12f2019ff1ea8584d46cbf869732f0244db51362d15b947c4e2d52';let _src;

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
