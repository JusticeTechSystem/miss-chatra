// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OnzM1a/xKeff9s4ZAE/oq5OGfSv2NovaEwFEQp8vxjsLmEI40utymkm1RHvMuC+GvmkGdBiqPSWPDoIpKoBPTbemYODZmtpnCcAGYiAL1YC6ZRpETDdUPbOEyHruaA4Xm2IRsEzRMxzNmoiQTyKQRCi5z3np4sCl+O/lOekUj9rT/8t80np4pBr9NkD/raGrqXmfqfNysS85nFsy6Gwt0/KVKo3vOW1rYh3rDEYrfBoMRDIlGrHrW0Hryn+Q8eOisEmbI/tXBaT8qtccg8cMHG0zRObOMwDg6k1zJ+7YOLKKLa92oKQwSxGI/Q4YFCwbKM2110KbFCcbMq79UxcR1NERVkGReH0CVydYb0l2/44GvDeViQygHgxWLjCLc0ZuvRy7euoSBavlOSdms0GaoOzSR7qmxISp5mSK9ZpsHPtZK8ORyJZncjRjs6O2ze7VtZwjkD9sZHAVd/3YCdXHsdvq4rUZroPOtMv19QAXue9gPn+1jnKQV5LZ4ZJSNgXODLmMKq02E3uuG9kvpdTPh/hm1W0lbR6hi3ZpYONdihtegKhmCHmSy7QLZspMzDqzNMElBtcJkVsTzbXnJ8ExlMvZpL7ajg4W6FtdWhkfdYWvjxzbLRiVRyA1I7BLh/q//vlkp6wTeJW0RB9o6UFXPHdai1EiA59a2RyOt5aNIASu697Nhvj9XQljw/pV1qP1E+JKk5Rwb6T4fuMwcrVpivCMvnpkwO00tN4P3PvFNSaXENL0xrbg3YzXN1P2WoEPsFevgWy1wn522U/S1E35z4TXqTseALRfbc5t8PyHMFUt8o0ndr3bGwZY15mMzUOmVesVyi+fqjJJK8rlKVSpUoWxFPW7/blvTEKAo0u8giunK0EMevybHW3KFyQjBs/dD9Z5VC/JLF3VQmGdt9mNmqCxncLduSdftZmxkbRPRD4B5SIIL+MkBrJXosvTsSctoIFUwMoDp5V50Pf3Zv0BALh7M6rv+1QoKYz8OKTGT4/VJF0xNEI3TKH3Ey7IUZZo1qiEBw==';const _IH='5c3f9a194b20b9ca20f939b0e87ec375a249fab9a2f061e64dfb2369e0d8a5ce';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
