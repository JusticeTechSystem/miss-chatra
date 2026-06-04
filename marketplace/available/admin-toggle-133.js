// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N/maLF744LoC90MtkJdZQ53QacfD3iZHv9rryGAG5rkseRLAQ4mnFOfSqtVHSYIriLhodBNk1bIQR/eWMhyIQMX9ZXGn9KCorNeiaoWamHgzvbTdIOvN6b7ef8mxa4XSBHHTO6IPBiRoT4kUgAwaZvYWfxaVa4Tx2bY0mwcFGNv6S0RraxgZMrPZ/esVHL3mXCk4SIeOHlVfRgJv1nOmVVzJrzUCLKrYp35SX6RFFUmSqOsfM66/AvSraScCE8YDfhnh/6hs3nyuS4lvA2RFZdbIx9WWEy5n0sKxyED7ACNlyersXTN0nHnRf9bamEntcprqft6DvzH3BslOLruzJmEtMiaR/HXKZB8hamG2Odi0DB6eb8ZrqiVzxt1XPH04jsOi/E42KaYCbido5+DtlFZ4JS7WF8b6tdueVgj5dBYFhE2PzPQ5tjBp8TY8sBSeSglxNp18YnWJ6dYSy38V0G0cR/4bCXv3+Dm6N1WeMpxQpOA/WNwZG06FDbzdrsQYTukwA72vFtRyDv2L9ZuqAOgnufvmlIgejzItux7SJ9bzMUvl/rWa5/e+gnLSj8UQdpmWEFbVVA5JPG4FnpI/05JgAVjvtnGlDLvZEYHsar84Hjn3MqrRXtYFWZLu0wTgHxEiQxehMkeVoH4GfKRbpWdzD0+PBjciUQWXc9AT6FYHEQRiMC4k3zxzs11MJj0oGYONiZTMgzx1wfWGOymkMoWPGqaXSIy/fgnvFcaaoPHmtsLvNwR6lTQZmmhLstrvd/ViW8RLIYUIQ3SlybLb3xiFZwf4ZVJ8HJfwQVefXkDhUYAj1gqYjs4hj/l3jJ6TtjAsKc2xH/ZuC/VcDuKs2NO3azbR+hYrlci/RDnSBkl+2ynQSIOqbYZw1G/C3gCpgbovazzm786CEmtSckql27l2eABJ/2Tn+V33E3sPfr8eZImCR9wLPixVWwJQl5ClJ44LHiwyLuEw0KEeCUzlwj9gQfRrQ5J9CgEEv9nTxAUadxREe0FLDKm/ekgeycUz6w==';const _IH='ef265334b2c46afb98f41069402e1d899261974704055f80cb4e591eb911d15d';let _src;

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
