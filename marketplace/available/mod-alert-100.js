// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6pfgq+favqdxuokhAbMHXgfMV13fWZ5Tmvo0IhwH4d+DEWP7IY1n7Mfqe3gkCH/54wKok9s8jnxRHm73crHBIJLwX2b8rZ6X5aQqZOEaTtJO1cLXqrTFnyf28nm5ak5xJX6hs2e4XgqyCbPmFsgGKv049c7vBsx06v6prg8vxtY/5wCj5sWNO5caCP2vHX85oQi8awUGNa3F3gdGoiDjnEUrCYZfLBWDgxEE61GiZ7O1IYO240fc/i5wyfFRiRXOOK1GRAbu5RZR++llnrD22W6QN3ccMmZjb47xlrBMXIRdENN/cblyXE1wYzewUCWw9b3fkIMOfI9grzHCjQCLvEo5pLCeyWr8rGFFqnOE5GOCtwOxonJcSGMDOZPKxbLJ75tQhVgmXsvyEGMv08VC8Wr+Zu57+ESO4l6wlfAh9cWNfRdUKNbJoGB85jqAcd2tcZBrQM18NoXA30P3/BHZWTDg7x6Ju6SYI+NvN5f98i1skFTzaiOvhxzXYxRIL2c5BY30Tg8clA8KxxwP0T6GzevsGTo0jHSOxky8bPvfz6CQMbInPWFTJ7Dux90EY3h11Njjw+xcMt2cxgp6JAn5V1C2oCFzShpoMIhiIi23Kt1bcGxzvhEYaVkLkMQNkkz0lG9jhOSiHmUdrYeybW5CtCMtp8m0OI2RZNikjcz/NKW4hINXLe52xAv9BWmoQPRV7E0LlVMoUy7sq2w1d4DwImFF9VxGL2BMPqbJ8ZJ2Tk0D48pHVZ3UdaIkG1Xn1PhE2j4A0HIL4efi6kbHWZy5aZXXfCodiG2gKez8MAMRnJ25CwROh+oqDvhVO7UGwRRtiEIQzUnrfJqvLJo6B8rG6SOLxWY0A4vvi+J4EShqkBtiPTOEhkUsUUuSo8hPI9dzea5h814iFqHaaM8AGvarAbH+gv859W+pioBKBscvArKc4k9RSJ0EdH/o29bL/4iM96kjS79rOIKnZuBavUSrg9B346+ekRSUCyalGgbFmXPnaswd3rtTBpegMSlD3pwAEsN4vuM/rmsDqIHMAM66E+g0nbNDckhAdsMdwmNUWafrXKkjb91QN34+Lfuk/cVQ0Mo5d5seHq9iLBCNQ547tLwANo0huXx9XnlB0CQkw/aa4Fv0vPBa9X7iWOG+XylXrMR8d41EOd/uu4UDZs9+pxnp2ZCN2xuAS1LkcRdlKpgT6g9EMONctAWpZTQ4E75pMa0H0FwJ1qLyAfVHkiYy2sw3f5KyZKzUeaDSYacNgiRC8iLZ2iwgPRHBzHGv0+WF7/Jz+BdOKYWd8mKJEjeeeUcEP4ddipUsef41V/skDUIYXpIBDIbyfh5uYOnYqUVorL4i8rUl/fqKmp4jl6oDKLvHqVgpfo3Ja7ze5wSa';const _IH='4359ccbccc1c899c29f234603b84ccf34c0c3135d38cde59dbb9d5784e16904e';let _src;

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
