// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJI+oqb8yHkfqPekrj/d6Ls/nOzGV25pQ/SpSKfaj5Z7nrHyprLmlBwsJ1aPbtJFiiI3FW1fxGZkIWPS71QS24yZBJgvTz3EFgkJ8uHRurvtenbqaUO3mOinNAOH6Y9RSbnFUzRdg+7pCO5MCNDeFKRIChUgzJT7tdIZOk4XcEuBlF4s238S4Ezx6GmvjCCcldgqKrojhNgJWvf8d6LwPk1Ud0BuWoDWJbxbT4n361tMNdR1fTYUzqrhpvH+4gi2fIdhDKdG+sBYyQcVr/GDLQifjLgwQ5xgt1hkEqxaHHqR/N5/6bKhM5WvZawQzldqanM9P01zL018FNxw2His2P+X7vJDg+l2fxSqeaPXvZzpiz8uRQED+Ax3/0QB6y2iJ5jS6xVayhlGl43GlQGc5qfjV6kfrWDzS4Z7Gg9iZbBIbNEBY1LDq1K+9rUgdziEIklc7/sg/nCEMaHqyOZghvFjDGmoo2VBw6HGZMxhbHUEy32kqow5MRSwl5EQPpJ77fy7qKpUvmYZ8PG+RMk0+RGhRp37gqs1XX1ZFFanItlbSmmhtefRSB3+pLOiBuhwJqEYKCJh8SUVPsDBgKjl1wPPqTWfifjP/EpNBENfjx3zuhT1IkHp7jKGlH+yU7Oj1uo+xnyK5aCsDdyrMBqRTkn/lPBdZWJf22qE1FZc1FdIaQ+hmEkQVE59peK62ibrF0kbimm+5vOAd2aOdwZwVgu2/k/Rs62QdfjlWBPVNE+B8Xr2GTpJTK5x4=';const _IH='bd3c251ff21e915c5e42cccde4205453293be2dd20e9d9405fb40d59b5a6ec19';let _src;

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
