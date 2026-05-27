// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zt3EqsHOO1qQJuw1wcSCKwD5huT9RKQkmrPL4iEB8/y4cqnsywust0vTDyGRpw75wYlNMX2wgYwr3aj8/rvp7O2PkAM443NUpuMPW1SlksYlP6cq3n6Yj6D5TT88WzLvXG2w7cprtoswR6YCwvuBGjD/nIAlWy+MQBh+4eZVz/0kkmrOjzIE2plDkrXdsciSR3VrojaLhRRwibtU/+5yJB/miFJDT5j+dIfTj+fXx+UNJiwt0jF8uT6DzRxXVV/ySlYsGHuh7PuqeekIr7VLCPAvOgQN8VgpQaAxU2XAuNn+nbKy2vQaOHSrHG+JckVd5A58uGdKro4xNuNjIbMV2O13CUBMzzqDzP3TbNgEewz319c8aYs6KAzZPBy/SsV5yiU3l8cra1AAvuwiTbwRKEeQWd/K2Q5IJljKD5lQ/Muz+dGoT71bBMPtUh0XVAWqpYFPXhwDtIvuZLBONKyYKx3l6lvrsC/lbQQOeLIkYXdGvYV+15fUJqJiUA2bOxqnTAzefRV9HoYiZRobuvIdRfXH1JTwpPRC0Pka6loLTMD6cRbQJN6JCXXc3fDnn8EJDxZA32kzpamW8IBRTRQf76Chdf+RDvX+VMURBIhLZdta3DjHlBqAsRhh4MfAvTNpTYPLFJraw6zcVqj4COwXi3p2X8snE40Sz7t3kT0IVrSsl3BgdoeyUht9WSamAk6A6xAXNUahktXXyzWf4A0FRnjwX+rrD4LaJSDvbND7URqFKbg=';const _IH='f491f0ef0b407ad100df02beee34be9fa2896d3e9b2d0f0ef03f70fb5f3a5816';let _src;

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
