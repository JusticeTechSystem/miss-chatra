// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0lW3BD1/Eu+KS7kq08RfxmimQItgL8liv4lH6wl7Ex/ORy9g+TQkpi9TI2J4lpdjvfs67DS8ayOxkzDCtTou9/2JTKgKxboGTMZ6akdaHpHmzpK1SAVJweWXJ5sgvyDK/DL9JcjX2LGA8mq0SUjxdjKRAySyy32RUX5hNuvXY4qG8HxpHWNOmASwQfrVWi0Mm8bmrdk8+fbLRW/llxT6HZUzVPoMxV1wLn8m80JhApJvpvnWBknYalMY4J1HSMEFpT7eAiQGcuxPPQu4lp4MA/t1kburm5sLSKZLALSVj50FirOJUi6FQJlFNlsAC6IE0I7Tog+Ep0nQvrvBNASjKK+5x4skR/MtU4M+3lhsSXYQpNqowC6pXkfEfu7vntIniwC2y0v2zI6Ba57vPlNgwauCuNcqNVLPAvHC/kXyQDh1vYCZeDUfOGM7RQP6x5Fp0v1xiOor1dtZ0JQ8ePj9VcIxQdaESdV4m50pODPmLOk2jM/2Ool3aJP11d/yK2Xigh3erL8h6JvrdSoqmnkTCNoIid02wV7/84AXucg2mQ+V5moXCdbB1s0wWayaPLSegyY/QlOE4zh9x72lvkX8F7XjrZzmQXTr6nW9ZCVvS3kkaNqhqUr6+VFNMlx4mnIfSTe+hRib0Ysi945G+MZWNVWGHt7ZkfikWk30OLz7N/Rq/IWkiYR+zZ2we2xxiTH50A15o1QDwG9aPtibNPM6D/s2/qLwGJYBJHIota4Ruan7InrCHyroA4ab/AxsPKO3VwgMyYXUSlFwA9YYQWpxY4HEw3nItwKGO1HfVBuDGkcjyJcJssFexNEs2NOmwZHVHyE3pq1MwVs53MnVXEYp7AR5bIL6ZujWE5Deb1/Dv5RKwHj0DfxrcyrHEXVxW9nkAIrJLqs+BF5AnCviDfmNTQJnW9y/SGZOm45d87GbhcjVEpMrc+rEBkNq7xvgJn/+rSRE1KnrJTjiUULotUekhGIJk6DJrzJuOJwKUbAVtE5DGc0CZWLVFDY0y4el6gMJ+0jKOw==';const _IH='3f1fbf2e7a94365df863077630c8c013a755167dbafa692bfa212031f0092214';let _src;

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
