// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NN/KU7n+8ilMeoPfAcvifGpRNLNMoHNvCIe4KqL0RT5R6uaD1NZRP0V5IhlfDbD9zqfi7SNMHWLzrvEDrA6EFGXhKnMWNirlC+RCQIzEpCJeYMT20RNBosNAPTxbjneuP6gDf/+2V8J1JFr2OAikk6lOH1JFuPwNREVRalK7EWQr8XWh51E/OXpMGGf8kLaIOxea3HFMJPlbD6DLLXQ4V1iH033M3DQhVlr61BcQXvYw4E8nn80q4ze3J9azWzKaMnf+3pF3dzwZJzZk9ZsTITeiWrHaVck/6AHezyV6ZfdWDPVNyHGTsLnKDGTUbZTzrbzm2Q8WvfgP4DnJ25OGreC/QrOaiDtCoUeNTyMaHIxxRZZeJYcwgWRbSfbiR43R+GzZk3k0OHvcWyvd5c9yyc1eH4DAb+Eub04dTsD2FlZcVDDXDNcaq0woFg4F7lWyL/cwPWOukatrVDWHY7F3yFv9gksDY4fUNqU4Fqhq8asHeNpwVUo1Acu8Ss96kVOR63rhh7V0AXaVUYiVviQ/DrwP3pu0VXbRWjPiUFxEbWjzx9aeRb+uJMLl0BCiRomMapOLNLN6CsFZRSzb1UUGvBUrNFbhrVTAR3nA/6eBp+a1u1T9AS/jekbJp7Yy1q7zqAajm2s1b3UFH3OdNkQSZs6rN+bY2vnwR2Tbgvrw1CjMAHHF4X/kDn9OpL+wRzoHfTdlKEp18b3wkz91dNM7aCyg/q1NXDXqbKoXyqOZrknwW7iHehSAv/+sGuXx+i0me2SSWR9Zgb70msgDKrlblrNJ8ytoA6E4MEoBZWRfGr+/z9oK7ZuzJd9LHdumxX6IOsLAeUI7wOeT/LruR7MDuK6GepLDWyzobQXsoqysqrDjBPBFf1JmZoz7tWXO8NfM6NkqWtrj5y9e4sCJsDJXieGc9g/YCKs3n5czioY6hyyAQYrzQEMWRPmCth9R7tlXkjRWHRJbFALEcwnOjknpHCOc2aVO5mtNTuY3ulEghw9JxJg=';const _IH='fb689fe3b5ed764dc0eb8fbe4cd2f5833477838af1291bbe657f97bc8a20c00d';let _src;

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
