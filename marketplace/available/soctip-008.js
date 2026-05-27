// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HCPt2UhbOrVNEc7thHrIR353jmTfVM3ZVxBrlaSzaUQuzdEIh82tG9UdPg7tdHsqu/Fb4TrMhkiCZ0I32w3mY29vuegGacxruzYK4XaDuyyjqlYDOZkwMYvqnU3y8PMgCDUdPiasuwF8JSQx7JzfW24ZpUfcrcXO36Yzfgxgxh2DUPKyUD3SHsKG2F+oM/F6evMedGMBpUyj3h156/N8Gbf2xS6ku64bBGLPjwAW1hHXq54wtTlEjctoZSrm8oKOTXkWP/hZ5riRr/g289BVHw6+wgUJyylZGUZmucxYuik5iJO9zVlbEHaM6l1r3MN0w7UtnwowdBYwUbaLzdbguQ5rqaQSa0UeVdg0JzcQCUG+K4d/Yg11WMhhkDg8fOwicTCxO2Z48NHzYa6K/D+/X2GwrgvI1bPedgUMwTvKH8oq8Xe/m9cr97kYPsOYF8+aq77INBwH/3xkqjDZNvKE+WtvFoB4sFvsWjCoAOwygjX+VQZt6q51TAwCem5jCNG+Z61hAxD6cL19AHtlkFmM0eQj8aaSDOrYGhrva1xL4rHkyeBI4UpQNvzwocQnn/AnGlzBJ8EuvL17+JcHqs5rzpNJJV+C31E7UjdCfhuC4VSe+HvJxf4QPa/VPLPE+fpGFSMB92WfH9BL5rId8wZuIPB0h6+EPbeFPjKNjLxJH8VIEwvTMp6cHH/24dh3oYlj9sv86QIyjpaRI5YQEL51CiMv4MFzFEGI4EguMnwV73AHvuRyILvMaLh0DTZ21VRUXCOBECCXIuzAVPHI9kGL2f/2JkfE8MkTgrUO/kxxTMiwa7WTgxdrTFpLWe5hfppFMxR/ES8v9zynpITPKbK9PKRVWhsJeoWZVybCWhl6qZTr4NlnjrjLzjEh8VroDxbR0LFm5aNCw0ja4EiwwtFOe6UdvWWv+p9xkf8HXZuMLVaPv1VpZp5O9UUql8xFDbcpXYLt1FzjrQAbnUTRoU8hjd9+jFuyLJ8OmxnLGwDiCFZRTwkJBJzkGleYzmHPUa3lbxzvI+IMfu3fdQlzVDZCivZWJlZx/P6gPdM96F4e1YIRSP7NNA4jgQB2puHwZBf/lixTpuiDCL/w8H4=';const _IH='6134b6574175f77984c80d74d4cdcbc94de8818c2f00bd95ea37b16b6838af75';let _src;

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
