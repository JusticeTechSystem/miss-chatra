// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jdE/1+bLyReIodfnp7KEmCVbA2sL4SjsWF6jxk3orbQwz5kdBQhfqGRAXojL6ifB9jfOYlJJPYKAUJdffhAU21gvU18QKSTI3pX54o05lqCbR8Udd/IPyARccBZ42SxQMSBCt887hu4A7kc7zZzJEx3IOpw0TwA343zSviuIh4Cxpq5r6xOl1G9DDKnlF4HlDl7ehMJhPWreaYtGz2FgfEWbNstXc4qv+TN/2Gt6ZO3n9ggLSKBhmXwWqbPuNbRG6RCXzZ/cR5zlbfca5gm7EpJbX/IwBLrrhthODIZSJ3CVhPLNHPHYcztdstaS7erhABp3MvbDlqjLKF4ma3oAzUK9/Xp3sqyuIDil0DL1RZVdmshYWHSeFGzX5cjFiNcxaPEd9UEijtuNuRFAWWbjSDEMe6YpQ6si6Fcpz8EEKaaLazGvMnyqyxIE8cBnerNoqf6kMe7G/DmEYKrXH0JUWSzAMS4sn3yJ9ptjrweGuDt5tzuTCS97pCo4XBuGMas9LmYUZh05FTL6eSFj5h48P4WFY7ooX5oRH+5/fVi2kp8aEymKIrhAzhs30gNbQ7Il6JFMElzggO8dbcuQQ3TKAAd1oqSJVJccBLZTTeriTw4EPlFDAi4LCZUZWofMxay5eJzug7U+Tmo7u3mfGf2paoOq0Q4Mnb+Iz8JX3nVIfypiMHOpbw1VmX9Ro15+clX5EjOnwUm4M4C3DXwdxDka/K65oO/u1djBjVjxtm5LAwZcW8EQ4mzTDjVb7NRju59kNXDC0Dfogx9yLlpf+WKP6t8qExX+X4hMukwGsChuNX6uNJfT54tO/CjnMCaqA06WNM2giMnFOtWE4huophMXtHprVCK/VyAVhUw4ogvPq85szLsNKaqwTIjby2NS19l+QkVkCYiB7lg78H6CcrfD89kMqD7o9ASkJ7VlI09qqotgr65GoL2JUDTo8HpIrLcrx/V15mLsOb6UIoLnN3XfOFSln05hRgms0ltp2iwg0NPDRH2dOGAAzEHqKuu9HsimK2AEnbFoy/LNf1ZnYeGWoXQWm3D9ADJxYB0zwX953JCN0gZKwXahNHAZ0P+JWcrB4JJ0nJaf1L28Bv0PBfz15hmHErG03+o2eTnyEgIww1bI47VluaYYbAtomvx5rEzDq6Q5uKoCMJkuO/tJsNkw3/xzCDEm8QmtwpAPJJmG0SGBpX9LBA==';const _IH='1c7580d7d8d0c23299446452390b91ab8bbaa88c0fcab37e65eb607e22458093';let _src;

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
