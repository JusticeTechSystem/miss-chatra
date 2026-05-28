// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s0zeVyNvEwOWQa8GXrXxcXCHGoa7nahMftM1wykKpLNznoSLf02I9H93eal8af4ycJtwMuaAMGF0PR4zJpmyoxJ7xoYi4ne8lCYJA7c0qCahcv06a/0NpllLsMtOXvAKDGVgeXT3eXqPCTR7yWR7tWSi15CXHpzRjDWGWBSJz/VumfFmv4J8+paEn5PZKoePHcVo8JN+QpGQUikqkUbDO4Wjh9QYj8WF3OSXq9cJic45Ugy3lRKzKB7xR9GQy+N4DEFhLGUNrdBcsm8JOhF+NB9s0PbTPFDU+RRqBEPMigoNb/dsuOnSAsRTolJnyAHMmUtrUxWTsybP53DSuc6XbTNz7dY0RDI3kOVmEBvQg9Sm+TsKV6YKYBAcl6qbkWboTvF3aoQ6MGCIaoFRd8JcGZ9WXfLeQn4ug5IMu2X4lwc+4jtPyYk82SsVtoV2E9hcsiJjoHavFZwwQA35XvD12hwM7Ujtd1o3pZ55wEmgwX0Dv70Y1UZLsxx5r46+2Ghm529NkfHw9RRidZoKy2l42Ilh/PqL+uAF8sIMF5ayLuPEBZCecDFc0B9gSBjbczGG3lN+wVoaUtqTio+Uq7tRZwVNv4qY/Cwx/4JgJJ9NzlX6SRS8wIM+OszIT+skHHatDSXiLwkOJltyoJ//QF9Aof4MzUHpx+TowAZQ1U0z7JPCFNJJfcEA2pkzWr0FsR2HxYh9UuzvHQ17glftz4wZe+U5FrShgYl+8X+2quKl7M4nYW7rd2CGCxvySn/ZSYoIxad0TTBMCUcRao2jFSr3Jw1dk3EHfkTo3yiK6WRk8jsIztlRq8uqdP29p1OeaYmcm02ogwjuSVxs60ycwlVLySAh+gnz7hu1yRES/6FHUKFng0sqUsKP57t9WUYuvWBq8pZZD8+7Hb7pg59dIW5xUw9Hx2r3R6j0GRIBJJtOdfFRWUNMP2HIlbNn8aBa2tVCKf2bKRSL5PSPXLv95i8l2VIgdt/pmnROGPKM2IOiP9r17hKQqDFyy0lOEIyUY9raHq4keQp/B+K5PQNNle7FHqz++YKmG8bzV9EhjG5S';const _IH='d8e28108493399db940a3e0411a63aefbd506c8ea983c299a383b6e7161e9905';let _src;

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
