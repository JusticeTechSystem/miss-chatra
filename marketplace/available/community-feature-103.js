// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TDvo+yL4W8PW6BT5NfpReXU9U/4KFvrzPc6fsPloeGxBbKmDAbu4sThk7Me2q0Pz0qgjZnOa4eCY+LjrD4hiDup+IR0B5La34h3iGUTR9Sw9Ry8S69d/GfyrYAPYlaocFQUpB3TNA+DFt4Iibq1lmhPnUu0w9MKl8xVhsh8BR1fcyVeH1m9uOBvWZvJC64/2WGUxbLq0le6/vVOSOMGjRap0rGZJaY4IgJHthBmCtfCEDZknHX1Ss8TSUNOOki9AsM7T2VZG2SnHKc8+robdBFW2xrNP1MgRFTc1eS0+QvHZEJY8BvvQOtmWfLI2tJjyt+DzsNZxteGyZJ0EN7y+uvAx+o1hNfpDcoCOu3tWanm0JCHTTBQuuYNq3iLEOxZeRnKDNytr6Nr3R3cnL3i+SpVJQRSmPoDUfA9+GmaWZIiGuM7TuGvtd/NHNfTBS7l+4AL174rFn3cvYXDBmoblSjAxwgzP8ymlz36kKDKSYwzeyYwn96pz2h9jnnLeeVYi1G4uOTi59J3XrP8x3J/aWdIvE56qUldiqBNAch5Sp929U/IB465w7mLT717k9q83MqFijlzoeu4ofnzVfYAVOiQGjVO0lBDeOJxDzzgmgj5N9GI+QIpAZGEzljv8uJVI37MWrsdPyfxjalNQg05lNE3YZ88CgVZUHxWjOOrlPql0Z43g1315I7N+W5kdhSB1kuZfG8xuSDZkBqb36IN0tLGgm+fTAGspqeHACQo=';const _IH='765f833825758bcc1ef5fd347fa1cc47a22a44522cea7648a0e9474a734f2d94';let _src;

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
