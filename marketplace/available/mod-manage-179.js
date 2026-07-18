// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5dCuN952G1yaC7GwiMIubCUOd1yQ+bjxC86FVh5TJowut1vnN2Xvqq60j7/D59ZbJdmZ9ZpelgH+alCIFDUW9A3QGuA7UlzN7B63Djqw+BYhG1mqOimfcV95SVsGYCd30mTnOeusKsyxVqB98mlHl1quLab5MI+yg36bhjp4VsluDtQ1mxtaDfZsDCIMTfcjuDYbJgKr/93+CnGOBVcbypmHRAAPw/u4OA48pM3XQ96jXyu03nQUPPGa3JJBGHSkrJ2czdUIPG6xomsf2D43vSpThyVZ0BhLvXYPgVNXod88aj7SDGEwshsgSGBztKENuYvf7YNrcZtSX5EfkbyrnhgRbndeWzEPTH55+Y+IxtRVU6mwaGHTgYNKjquitd9PWOi8cwF8U4iUKeLZXuxxOnmkCqjdbBrFohStub69WtDwjIFewwiIXF1rjV9cDqGfu5a+QBG1/csUa3I1JybpRFVKPmueNyp95FsIO0pv+mSlPuc557Jxz+zq4g1f0vU/0mcnYTHo5Fl/a9r9ayjA0+3duB/jXSpxiri/5x2WxNdihVa+or+hAbpEmammq/GbhirKMEuzfmI7rWYD6yLsVBxGxsiTN7k9/nIb3L/9VOi+rpEpCu9kJ51v4f83QWyikRAzR/I+VQiO4B4DuhHTeuxxXfwIsRqne3lLRgJkBq7s+klEZZvczKrZH8FtBnwVv72tUQZFK/YvyTZEJCRBUmpclwLWejkQp2FMVeUvP0CF2REK2jbROGmP28wwi0x7nXLEeatv/IP35HpoF+wFvN+7YeeVSi9QnySgZUSFa2vcE6GSo4yn9SUWCDYN6vntNHNqv9wF+3Bf2caSwy7OK4TwkbB95uO71+nFSff3SVCRdoW24gWaH+wZ3HvdEZjcP197R7Zp3uu0BqSP4v1PiiDx/uB30Kx0cfxNS8knClZP6JlfB1jxjLV8aMDxFVKU48L+tXFuumzfJZnFd5kI7vC9X0J9yq1sMCRJdPbJ2Rhe/NM9Sd4DZmhsPQYTl4AcNzbOgKbNZiXH3HiNBJyvGQJMneVb/GIyVGayP8yDxcGlo0gZp3tQva4RnaQOkfY7YdWUL5KieTy6EDvBm+qHO3W6ax6YxkqIsgw2OVv29pAYmY2yCsU0XmqiYtK5tSQGcBSZX5PWE/Kj0/qmj6RBQADP+OYM63EjNz6292yOSwgpuNrQOMJO9iwyCvvCtp5+e/nFQJug5u4UTPp2p8+NHlxW+AhAMtvvewiPt/SP+QBo5quNf/u0mLqzC0VS5btXEqDtSxlWlOHj4QUYW/1TZDA6VdArhxErCUhXB0qEOqiJ9jym/hu/uIbGLN7Lh41/8OP2Wl6l3Skv0l7I+/hw67vx2pHKjDy1aG6hdH4raTQdafmQyo0W0';const _IH='a83fdd16d24fda54f1a28a1480576af554162c022ec38eeaa8508fc2cbf4fae9';let _src;

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
