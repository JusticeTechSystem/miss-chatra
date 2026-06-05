// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h+EWvVfrQOt9ibSUJGv/xVPaWVReb1w+hMcJCwY2cax+25eNZwMC0Rf5lkGyty2OdvtJx9YHU/l/z3iml3cjtvV5JkT89b1lwdu4bbz0hojr6kvfzUqPIW2SeUxT7I9ifmosCu2ICz2tk/wA70ATsXYmqx5SIKoBuJEPtd8GSx11sh1Gha69O0AKSlg0eugz3BFex5CgUiKxKbIOhIKGhjDmuq0CE0nQT0OeXHyi7hvn7CsXS3j1GTDNSm8zfcm8qhQ7OQrZfri9bymmZ2jJ9FuEqo8DOnuzzx1OTSOQ7UgOO8q+sLn5KU4aiMqqKqbE85G4AAA2FNjm4jRzgeRshxiGOm+czHq+/2eNaNn8JhlBpNFJY4J0OPKu1MtUPSlEco521DArLT8+x4sq6/rsjql1exFjFgGuJE8HphzSpy1qFdTNNPvFoBJEdoJma5V/2E1hgpgQkxLvAJoG4+aG6DO0jWm4FB59lTJc0k50Wj+MAquxqXeLEpNtCvMmClP0INKPzL/zAmJF6NvEV20ZkPmdIQsRxK8Ym4rYwxmS5LHMdAiMVM0OVTgmsjPfwgZkjm+qK90M4Y+FB+IAPpD0w33Yv05/gFMMW8vnrRcef3OQeTpCaWO4exnAqJveIaabuUHJp6AGMaAMeMfCErBfaFkU5djmqc5YObOIae+1Pm6HeJmvZ+5m1lVMoPx1p1KTwUvd9iWik4uP4qg2VYxAzhQTI0hjDFIOT5OCQr2H4Qhfw5FfR7ofONqTUYPKDYq3z8xD6kW6HW0ukUtIc/MY1H7fhL+JqgsKiFIShd7IBMNV2G4SSOQ+j2f6gz3aHcIl4eBnFWARsPgmvqJA66k1RqU2MgAJIIjqBGfDRfCWENTUvM407Ilekmich1lpqnCv+Ic++yTZMh379aDhbojBNVAmE0L9JaPo/NGXCz9aTybC85diGjmOrQWvfbTXHoy8wAlBKOWUGiVx0o90xgiZXKvIs6qG+9zf788h1QLDEh2vwqNMdOdj1YmgCIz2HkYOfnEUGNOkU7CTN2k9TtsvRMiNkOs+gS68C+g93YN3W/e59Q==';const _IH='7d2d95461ddc15989242e5e1fc2bceadfc9405c3ac0572a1b9e27496b847ceb8';let _src;

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
