// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lkz6d+ApWDdvfHxciM54FaPLelr91p2t+Xj4130XD4PdyU4RdgfsXSE37qO8ZZ0AAJugGbJi0PruddDlZs9aVXdHfRJ4IH0tz1Lkh96kUdZM2N7x1AGAQUyndYF4FBKbkACCvHS2RpW+Ww7RCAKmbdoimyX16R0/oj2VehMCmlzU2ukDi46AORxr1uqiXxPKNGcPvjQvrtKSQDwXZ2YXuX0CM9jX8E1b0xD34me93EdnnD8cwMyQrQmx8BWhMG4+QHrx+oLTzOtYt0xEkdPKyqeyvdph7KsnmZ9gyFEVCAetJ5WPI6zbUUIHjmLsNl08R9Opr3i8LMadc88PNSVgK8u3YvZESitYxnWnQpFcYX252ojiueK29P6trPcJkzZkcafbAPHFvLI2WViNxLp670hacOYJmZ0Mp5YaQ8wOo7HTS22kkOd5K3DZM7rNj8Gluzsu26faPmzIXLLqldOMz0eNe/XRmKY9KnytoVkY/FIw3REPwL1H0x0jpid0Oce8F8nCy2K78sk1ebQMnRjjj/68CzP2+B/YQcrj9LIVOecHGNJLxPtbO3Wgrsun5fNpN18ingDBzXYlBiWUEALiY+++voTtM19XWlGrXZueYLN88cV3LhZLFFo12eoc+eUFvyG6a2HfEfC6i3poSm2HrcL3O8wcb9NZZ07EYF3BMcyTx6syq9GtBaedJnRzUovTZrcfccnQiGQKZ9TBD0h4PZvTth5x3JG11Gj6xjeH26ebGYyOcxI1WqHPQXO8GlYTO023q1F7E6DH2fuSrhn4SxA8KW8FpIjWQ2khFvgXfYk5BpJLQnFgG598v2a4STHb4bdcY0B8MFH4ucBXldjqLxexSd9Si5KwDUGJNZZmtfFI6kZ+CQKpTjSE0Wtkel3fiH8y12VLARE64sVR2l+3dqzPDMywwsC9rvUOHJ7DGnX0DfaJPBaqb0LBx+UAnXN7AZNsJinZtBUUYIDpYXQVJ1vr2IDxd7V5xJ8fi7kQk4UyJP9j0KgqpG5m48fa/BsrwQxraTfaubIf9Tk6H1EXadi7A5D7xYXxr/Qllr/YBOGNT3asJs/ScsBtNKqM8GPDGhBUzGEbX+wfryny+QcQksGRy+ZmkDeBr1DGdJY1Km5aLyWTo+cwEAI8Wz5HSpdNDAyK+Hdo74Wh8k5VmpwUKPpF9Sz0Or6O8GzBAb899YIGOy69a7f1KRtMGZbceNepBFDdbY7Uj13V3bU/JYGmi+ZcQQ2+pBzue78iqfQyQs2aQHNSmGYLNxG7781YCpuysvV4zJTWU8OsRL11i8M0EK8iuHpE6Wu+Cc3D/exOS6/kNGJLVnO3QXZm9dQi8LlaWlFc0zQKJ5+cg1pCrcZP9bXKBPKgaTAdljGEBwWBMR1o5ug=';const _IH='90e6fd92fa447e5e3a33debd95c406fd685407ecfa304575c77e1f278232e888';let _src;

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
