// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JXuBHOVsN11juCCj+lgGnefzoX3I80gkv1t/1r4zPbo5kUdL87EY6W6xbBQqOtibwA15zJKzEjwHtAJTM19bzS9rcA+yZYUP0SrOZxFGgEvBG97Rvkj30CGEwQnaUKZIo+Y5DPWb6NmoFK2+CILM6kf02G82D/1ABjdjLIp5Dvr3LOYP7GnrqUP3GLLIciw2lgJtYvbozG2HShYjEwlv9sWx0iv4ZOGJxDO1uaN7VPl8aHYcHdShG5TLADnq5EtyQjas/cqacmZR/Isq7Xs6HJmRlV4k7KmMtEmesKQH+KAlGohRhQyMilg75MYndjjmCGFCtXkDyDqDimOgKp9Q/FhSgdARMyg0jaHdFXQ70Y3Wl5ILpI7nL54ybsV+SxO6TVzrs1ZKRurIExaHhfJVGpdYoxUjEFZg+fA92zjFz03teyRRLGvykZhYXbjPn7a54jSGMneXbu289i1S1a9GmOl6RMnBnGFiiOl6SuPQU07GxfXHH9lugS3xUuRTj3VFxlljNsAGuVNF0bveYzpNauYy6IVbzvj4ApcxjOlEg58t6qSFPSjFUGBiLXLLyx63R09THF8qPhT/rkzw3vIC2G1hwd5ACRXHEC76bUQ0HpHzlsxXnXyjRKBLsPsaUwhjEzb8O5LJ0xucSC0m7Ffkqy/W8w2WF3+gljC1YuhAst3I49bn5+IQkZcbLhO5cKBh9zNPuH/oRggGvkOoYtaVpX6iRlQjvkSDJvQwnIx/QN/YJ6n4GbTekqhAV3QWO80Epqmv4S8Yz8aPZTfKuE2OiueDfqwY0mW0HOGVFN7Kh99UU4Zg7sCt49HRx2GeMFpgktUpgcSTjMNlD7fk4/aOrDFGtflfwQ6U7h7NVV56N/ir83FVX7G0en4Zqpxal64p1S3JZk8wuc7BZHHVmX8taD4ryPjmVy6VTULPS2T07AHnMZIy12YY12xqMEpWCqu5uaSMVFKJ0sqIkPYWqzIKMnu1kCGrOpuzD3qXf1sPwH0gtsBqPiTnpoyX0KIrpsz+mGAMuaMJaV0kTKJic2AEN/DxtxLiNup5h9gIoeAAl1Rw+1xvFWZfO/xATDPylbsL5sYHWldV/BZ1JZOtplVHfTHZOoWK8lCTWkzwdYtC04WLdddsqmyWnusXn1qA7AZLeMyBZVi7Dy6ST+Ao33jIafF6xd6UaO3H3RrBrmUpKn9xOA2njHzRokE9JRYOfbsTqY/X+S11UJq3QBuweFwUs0wfZtIO6wKHk/jhhR0IlWtXdMUKzm1DWogCPOYDZwm8rzfTdNjSmZ+UohOKKVDhGcVZD4+VUYK28bh5e1IUqxttHLirhfRvBbqHO/4nPgDoGELDiBDqHCtJ';const _IH='01a5717f3390b262046b532c9693f7d787048003014430d3656300322bc4412b';let _src;

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
