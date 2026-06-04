// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6wa8tLUQKKHtM//IngdEc31ZTegNjFVrCEeCZnwz32nrlZ5L+A+xptPJM/Z0I79EcHGtE1iescwMasQQySdfq+R4cPyQiplQ7GbPKltKvNLQqxvK6vCHvzDTN/I1ky5PMLrP6GqSZ5aaU1OqFzzOm5u/Me6XPwI4hvXJovIGU1b7JL8kfBpCmOhthYDLB+uqIAdsQefKN12x0TowY0lDAwVIzoecLY2pEZ7StqgvN7neK3D9Ut/KU6yVVAay0Ab3fSj9GaKqFxiv6uV+zLDzUhjyo+WlNqdff3aDD1bB36l/ukCPaB/dLOTj4XEUfjPEvPuOarYMTlTAK9lnzineXFo+sbDNOnR0fZU9mchDU/oYj37mupv2TB+JZnbMkHtjtN/picc16Y7bgl7wewtcI9QH/619cpj6gw1PNfPvvPB4IzOdspldtpeezEj8xYT/EycsIG77kRxSzW5DbSTx5Tp5Rgo/t99BBse17xaPEtcVxqe7SaFjcJi6FQUfn9fS+UUtuIZshBRwQW7welbfxRFFY1p4ayN/W7YOPer2ZS5mO6kdiOku9AtF9E5gNlL93j03j5S8xhzJ6cxMTbaHz5daQnlJJY0pWp1uaijLOvl8PoaB5GqarL4xV3MoA+5N801B7W5uDtR0EhplUIQxXRVE3JV9Wka4fRv27Jmr8LHAqJBs8vTXHeK6r+PfwnT837wyyN+v/5afuYoHakhMG3YzQTDGUlGz4ppvR22ChHrAGMT2CI89mKpejGy9Xk6rbw3kpillllPUtT6PN2R+9ufA06SJZ8+tb0lici+thQNPT2oJ1CVGz+4/kj/qEG3AqKgDWq58vFt4bjzU4v50SErKor7QJwHH6m5R4NENYGB7+dyj//S+N96aba+Z0imoib+d/05NcfvHZq1Sl1ttWImz9pIHZF2f65lq/Ni9ltCyw/is9HRWzXG6RB5HrYvtpWJZcXzS3b9Jot0gIOAR5RhJpYU=';const _IH='1b5fed7006a04e638eab77b897dbdfe1bb73dc24ed8a1bc2cf35717c31abc7ae';let _src;

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
