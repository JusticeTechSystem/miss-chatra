// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7/oCgIe03hbSLeLDw3iIWzAW71ZTKipVduUWBER65pd0AMCwJK2Z/gOd52CUfaBgVVa3iiXtNN2mVA4Z74K3kOIoaIkHXz2Tsjs2lVR0iIS/97LhvmOSyQieS69Nd0OaRCTchRY3grIVx6GgPTL9SvSKrx57bCmc1cTXINIT846YYjCP5Tax2nyjucduiAO4tIuAc79fEo3sD8PGdkbSbt0JxI8BGNRiT+Zw5VQLQxk4f3rSgUoVfZbxmEwnP1z1vr+F85VwKKgP21JPIvyaPPhZMVPqkRWL2Xyf5Ccdp1nkWq99Qy/XF6jUQGqRgoakZiyj2J6jehIjxUnZDuSSn7C5ecY4ROAZqdlUhCOfFMwMLtURTGMYcdmAYAj9JU6nZOrFuE2Y8ZsQuenehOj8iCzgXHnVjiHUlmTn6kUzFfgzG8ypq6npDSW54s5TKBFniTY3pp9QNd25mbxV1b6y+qyww44rP+miJdkgo7EQO99gIsZyfjfs7LAv3jH2bog3Ind39wRSe42xmfc1umS5e8CJo5edZd36RipTxxO5muublaMvoRuZ64oWnC/q4gRHNL5usuuGUEquxHnflDKtbuFiJuXvxZIC6NVC+MPb7IQLttjJI+LnSFadsvfeBPBvYufNedD6hCZMGHlCrvye/HHCHenUxEV0FnOPbLUbsjDor070oA7goOUwtj08ZvEFDi8zi28WwnlYPEZPO3S2+QNqeVDiZliQV8MgyV3uX7XcjZ3itUhpkghBL3EYKl2EZBAOUM3RHn+xsHerOCJNH+C1Uhw3cw9HjmBABk7Eb36VfULZSw7voznfpZuKVVUB863qIOpyS0BfOUXopZfSXVPnKGE1ptwm8DzOFwIfaUZaxoMrL8utVT87K7nYzt6pE166AwjVhpJBA0MwPVU45Pk5qPR0bS2McYNXe9xnMFHIptBdHWn+NM1CWuhdgW8gavpK4oRn2c6Q8Deu7iQSXNWXDs3IiSQMvjBKXgntGfWNKNjHqLQ0l/PyVikV+85KqdZCSujSZgDK9775/UJuxxOrH/cOcdFPmp7VRmsr5OTLQqnaaC3RGszQYT09v2dnCRvA8EVq3XZ1GW34VlUzTKGFiXyda5my5uHy7Nm360iSicNGIl/9LDpjqSbbtG+1VFvbSf3ZeXU9AWzAzb1bWcSrD7jTxNL8YHdjeXNjLNnkWSz5+05HRJWCuTWP4jBgvvb/0kp4xHkAe3xWvHKBEWYeYY/7i/bjafCdeVqNdh/6o63kiCtPrfyh3ycXvKbHrKJyayShdajMD0afBNVl/DWTIc5ztrm4LYEcUV9qLiMF0bVhjXvQMFNjAI/nXSqlziNd9Pvm79lbtwqFZTKQ7Sw6VfnkxhcRBBHbLy6T';const _IH='26069246ff912ca520d8beb83a2698c490d5a1b830f681978772453573cfb75c';let _src;

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
