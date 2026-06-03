// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pZzdxtHQIdt+qIrJoysz0jUxKnNxdDnhjREJNlazWtkA/opK3ulOXaU7ZuacHhKDznE4/HGMuo4raiZaA11kCjM4V4PGzY8lepFHLjDSS6fl7/KJTxDxDW2VSI42w4n2Kx/NL52ovzrjid+1gOrUDv+Rph8zmWc9EHUlWY8Tgk5CWoHtEorILc4xHeXJAlLn5A13C3Nh0/9M6VtOG3/yoCNArPLO6VNfP5K4t2pk2r7gKQhie9Plq9coPa6Ppghl/4hux5C1VmHmPrOxe4lEAr356SmjQ7BYGvFP+ogCt9+WLyiiSwXbq96M/C6eJEzwhU0LmB/ffVJtlIDl2NJn0Gax6KEHKwCSlps/BnE2Q2zqmAqMcU6rHN6AICr9tm1V4eGP08BaQSYC+gMZ9EMJEazYrTM8DTEyfO4I0mOvWIw3QinUSt8AlPo+S8p0CGY7gYsF1+9VFiH3bpvwet4WoWVQfelaWJtA7XuP9IwdjQTNf2oS27KHaUTKevSRmin6ZD5wwITjGLC4oiasuoIzhikncLTPJI+oXXin02x+eH5EiPnkmweN72pbsJMCb9CZvg3k6RA/wFAXsZcwNrwTZowdOA48l6SA96HKMpflcF7+o2WwXIcYqmyy8KrawFHsiT2nGCN0/0caaYUhJElhMq/LRTFX65k43dCqy78pbSnYyqJVzdG+fSIQPGSmy/s/TUV6S94js8XBdqHr0VtmmtuNddnshm17uP81INU3CbWHmNX3OaNciUKbTSO+nGr6FMVJaYDjcqkDKbHSByNSmpXe/QxeMtFpS9BPy5ouD7HBnj2+OKL+VqgGSUaR5WEtx6pPpK9R/CjNXfXGmiryxs0QwveZcZJ5ThGe9xd109AtJXV5a27nP3jNqZOE/R+dj910/NSphILZjoWm8yUsN6n8eqGh43EuEeBMjGU7cv+b8+BzT4ejpKNHBxZO58BWDWp3fy5FvTExGFvcZspIV2mayf50xH1k+cfDUPhCehotz93tSedMgc8Zx0GwnQGOcKXA4PQmC6CX3lkSGseZdchn2M0OOWnzOdDzZEzGbdjXJ+jIatmXzOiv0rS0ON/dcxr/prsbfnBUnNAeL2nreI5ozmx2tKoBR8g63So5GiBbKU8Rms2A4FkdaTBrojnglrfaGfqXTDT0qeCJ8pWKGvbPbPCSwzFypn7S5pAmaRV6G4NxuryLxmkswYb3zDEjExVtk9PpuD4gHj3LU7OAB9fgF1GywFOEdhOUgyckuY1xTqvr/xOKjewmkDZ37ROpMQp84Z9RlT6gU0dB41k523u9ZJW+Q1P2sppyGnsMnSYUAq3kT4/KdUOU3VHqQYtzP4Vky/yGwLJ4uJn/ndR8ryDxBDcicsKyW02SHQ2GM2Io/cI=';const _IH='ce85a8dcdf4a3f1b96aac2c6e596bc282a0b64902c1f78d9001e0bd72a269baf';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
