// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k7BS2tsLBnX7UB3VV4EuQshYu6iXsBs0i315qAnnvPVs73ENFKCVSvw1CFowZ63/WeVwAFBLCEzEuwr5ncfjpQFAgccEjd87I+Vja7klKdsUZ1zrCXz1Iam9QjtUL0FyPkZSlUCYGWEy9sN7JVjxROts76mI2Jm0Lhcdk6tHjU1wBPeFBoUExhZUylSHztsv5L6GW0+YTExfy3jkjw1wNciEpfx+h6V8pixp3OkGSdHkCCIPVJjlWC03SyyPS9i1pvL2QrX6Rmy+1VgPol7rbu6QozHD/cPXqrQX6s3avtBlRi7F5emtbpksMODE2fL4bS3CFAwg7W6MwjJQarNhtFrAqQwesO5vIqSGoC+hxbAmsoYc3vjAIfc9Oc4sy/ibVLIXHOJX1PkLGOae4DJGEXTO3ziF3sH8ffnWHvVUEwBr9XV0nLm4c2NSyB+nCij6gq2W23X4Eqzspbeol9+TGJ8ASzWVAwgE1Cwr1NhVhLVhVWA+OROX/btDo7YEqmFJ48//gg5CegPIX97GaA7Hua1iWfgXi1N5jFG7VZtQy2YdAF2DuJxcf83TcVuJIfuD0WfD8ZcjsMV3RCmeUWjZaD0ZbeHXwgC8AWG/4NhFKC1+l2tClWF5wmXE85FR+6sglP/tvJ4e4JncXYmqHqlmLu9KU7ap9WL3stmwnsYxU3KXElzFKch3NgBRy4BgRCBkwEUTFmWQqUivi7kM0OHAO4htxSH7uIz11Wls7HAUdmfikKdHLanT0PrsFfYQRN8+fLSKGj4rv7Ya/ggUO4pX1AsvsfK4Lz0K9J9OZaTj4jcoK3eVq6uIE8t+TRJQxRx/c+Z05FmXF71ToKnuceglypHT0xTCKQ/NsjYk7tiIoTDUdXRwQN0pNtLj25s6X3Y6ob0Y8FWvMNaqiA1zsBiwfX4Pos2rk8OyKroTQS31NdAz3eELG3wmzKwbRUIm1h0o0r5fkdHsDH6gZMKIYvKyRqBmUmaegmd4Vv8ORCzomKFOpdPV2JnkAgcLlzdC';const _IH='fa11718dffbe056be0a57df0566389ce38051e4821343b264e46dfe3926880d5';let _src;

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
