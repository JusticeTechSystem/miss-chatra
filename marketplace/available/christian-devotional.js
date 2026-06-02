// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VQdelvxlcLfnExvmxCMo1qNP1ZC7YehU6O+8mwJL+Rr7y4A7O91chUZIgNXFR0x9QDhDtKhvQ3yzW3Mu/eQP97FPY0nNcQ9TMomwFiEt30SpeKdKo+XW11SnAQtJ7axFdeJYACpopUUXggmL3bfE7VEUVpo9XpBZ9oubDx+VCNhdMK6OD5Kmdt9E1L3ylUQuF+HbmO/ZxWXGndlmrz0DwRGo2X8gffkS/bsFbEV0oCw3IyeHIsLBkyDtgMPejroqJxDfPR+gdIlrGAj7VNVRuvWBymkb/7HN/BAhEnGHgnPIxReYN1fQ3ZiSs+xxzusbe0Vd9jEuBT0MZWYcz5w2Y7/bLzx7JwHnqk0eGxrASh+2QikysCtGYKKeMzCKT+cIe0JFuLla++1edlPLt6Y1MhQXXg0zwsUstP0Tu/Z6ppokPcuuj+5D3xHXoJ7BCjVTSF4MQWQB5nMj8bFmACetI1NXu8xq6UGXYDYO+FcZ57tvU2/Gg2LXnv100sXbQT0GK9SkEW/bFg==';const _IH='622f7a5cd499885b60f7523612a4fa5f8d2ad40a7812f2836164f73c81c9d126';let _src;

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
