// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTb3ve53LDfuvO4MvYFjwSfMWZEtFUahFcYGOjMU3Dg1wSz5TylLlYzuJVvGS49WzkA5e3D47drPj+UmLid0ncZQuykLrB8hkcIPVmjbvgQ+/hTAYJ74KPs6DrA7TY5GZY4dez0WoCJo8eFw+qnGSIY45NYNoFE33lLtCyWQsUBEZB/3MEhZwrarsruxdvzuqEWPXEpqvYbXnob3stNi4WaEyAhW6dDCnKiMwuudAcmHxeHARbe4KQaXlQ8j2k9/3jrfOdUlpP8loeyfZAkzBfB002tb3qvRYpz1U/WbvDCRXRrluQBB0V6lrB1o2IX0msLvp0MC/McFOSOnAfr7C6K5WB7R8tAipOG1hA0hYxYbomHDr3naJVBeUpoTH3XmybpaPJcSSyrmjaLEzuIGQZyYFI6n6kzy19pvGtGDbdQB1jCoSqwBHk1EvHSdJfV5e1U3Y8bFw4KL/HF15QPY0kUdD5eGHU90nLUOFHNeG4eCWyiIgstIckcof8eU6STcs/eW0QMAITTm3+q6O/h83ttJPVZy7VXzVwfVt2daOBuSC18qbNx4UYCpZkf1Xw3sxarxQw30/wNB/yw/TlS6KjfRjgc/eGsA4sno3H4vkPXp21+ubnJXXn6rAYNYBGnOkFCpB3FPMxiPapkI01nUgZ5q1A57b8nVPiTzzk87DNY6cx4/YSIe1YBUC6bHDXomf4IEJgtWcW9MmA1k8GkWU2HAnthhS2aSEHsYx2T3qd/AifNNim8P2TbBSKMdRel+DUdxxOrwNrK2BEaJsjre0q0960ivsxjcfuv79N2OqRUhFAaTyaxtC4pYNHv8HI9rYBO5UGxOKPGU02Gfoo0TNRBp2ZboWW7fg5eFrj2oVgKRNCJUwzK5lS3RggYEUqtAwhUGvLvIp2S82Gqgfjq4+ZeUWSvZdKmao0sHybifpQnfsn9sfhJ0RlLIlkko8meYfqyThVi++mWFVes68U7EnthJQvQRC4HbuaXVOYVlibP1teVVB8BOlR1rRnf1HPyfoiFG6kOkAlvpQ==';const _IH='cf6324c1db3c5aaf6daf9e631e4a8374d9498e963fb242e4ac65e32d71232cf2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
