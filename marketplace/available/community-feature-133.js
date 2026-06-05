// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KAqqiy+qnVVP00wyxNM4SF+3us4mkB8U9WgiTSrWxDYdpDF6j6edm1d31BLejf6Vb+57CVsOqBQtgJIF0rpG+ftIjvBBQK8rfNzrqJVHrX2dtLBhu1cbwE4mVVDACEvC8lS0Rge3A+b7ePNvjLcvhmpTjiE9zDDUVFRPxPi6nS37XQ2oItBgsRF0mgB435zxtyvxQzqxCVLeSTI6Q73FOpprk9cNbc5R+5fGD4eakm37YPnhAvwKewML09aCAxd8V/VoLyyFvNDNPR1pvTnUn38i7GPga30n8q44+gWD1klvCircjYNg5xX3VwmV4YNMPv+XSRLQgBYi6UTud+BPs+D7Bi3hffn7kN9CRYmbqzpg9cnTIiOs1oAvwGC112oqwsT8Sl/ePHEFqGZEt3SB/71wIisfZSMgCL/Ok7V3p5q+NseaXwW9XSU7fbSCxKPmay82g7uHc8W6oFS3BnK2idT649O6If4fvoXrKe30WVAUMWeLEF0+f6mr50JnN0ep67lIiPXC4lAKnsMfeVps90ekRBMboAfjbZxYp801aIryIIhYLkrR5xWOUm+puQrVgHqgscRJjdFQkpoGQO7ynU+NoBoZ8ACSZBjzf8uHrnMIFrxAoA9hRFvKdu5iY9DFK+wlTsvA9Rn8gJaZNf6HvJScTpUQQ2w/SezyEdpD8N9+82ZAI1vZOIs3aHHhhjJA8S6zvx4atLOgkk7XTwYbqu8QG/gKDmeastIW338=';const _IH='85ef2501bec6096f517f9409f9f2e36fd56e5f2c348c0aa1faa33038e8a48ea3';let _src;

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
