// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zswgVNA4NZz742rDo6U4XP23Ru4I5pO8dpQSHi6F1XTM/lUV4bPY0Gbexv6WZxBWjoB0G0wC9FcwlemCuk18QXnIfAGNt4LJQGOTF9fYpaB83cZQj9xWWsaUkM/DIChMu4gN9QzJZ4XaSRUHK7BYFfUOh3jPXoIzHzbdmIuoeNnibzUcCnnM6Dl+6dbdu2T0Yy5kHfsE+JgvACsh+xeXecjVS26ap/nR3oWxTtLajnTJ7De5PvHGPKHyXgLbvFKiENAa/vh1rAC25ZICvmr7kzjknqLqQQ75C89KF8NK0lclZStpCaPBe3lsFOwLjtFWzmBBCg3qqQCFf65KfI6wo+t2YdiaNUkIQqr5WywlEWId3f/Khc5ZCOulNUQ905Jwe3zhNeAVGOgTFpm/E/Sf5LS/F8AQlClY2apneYNG98v3wUxukjeMiRQpl58XQI0SbFv6NOA4Un4ZwrqnvF61cwdHVUSXBX7DlXH16CSBet9fQQfZM/M+qfAqWVhIJ00/Uu8AnSZhLQ61MBWtqa4RhRLBlu5fWKtMi5f9EurCa5jzG3ZwTnDLpwt/QbJgPOz8vDXW7/OAu6lPxWUuOTc73t1EC0DfgdYEoO+8ibIy8ACiFOAREY4zDO86tG0pY7MG7Ns/1CxxICgqMlwxOH2xekpU62dXpLZ6g0iDxzNoGDEFsGs1mo0Ua+2y91pWCShrdVPlcGXxuXcCAmJQSxaWLUBW0SaqFRTegxlThnB3aQ==';const _IH='b9e44226905311d58f3da0420dc88378f8b8b21ba91578a4f0e94156694636f1';let _src;

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
