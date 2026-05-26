// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rZnqo9mLYrsy6M2LdO75/JIOZlac/1vA8K5v/zJwNisgWy8QpjX3uamHcAIwXR6ypA3RJVn1py3IUf9z4fwbV2gJ0k/UdkOZ2nWtaA0ZFkZO7v32lq1HmI1+56Eta2rKeH9FSCahMctsWsr1Y7GPCoXhinD1MHj7A7xVP+8v0Cl4YFkmTheGWqhm8s49mm0/uRJ8+vXyIt1tgnPo/tYiUPY6rmMKbDG5uAXE+L6WInWuKht7R2bdLkCgmf0QzxsaAT0DK059X0kyddl8CIIRoO1rQKN+pY4++CshlRwFcb6sU3wjLr02Y1Iz2GjDsi6s8OoTc16SAueyREltNFKoGez/jNT0Y8U3XoMw6w1XSN+tGD5Uvgq8Emp4Z7zIaJRtl5mesgj3qYTSUKyFg44zuNqLtGuRamDLcMpqvjGC3IQy6RgZZdPGzKm+/4/KajBDcUfTkePfvT2GG6myMkOjnEDivbYKaUSFJW9uSgEdGbEwnYEkokALSI0OS9Ohor3Y/p2s8anWc9iBz3OGSBI36X7Eab758tOEKt5leet2B2LagygNt9K3MQtBf3sfURyYeeteeG9ZEi0UpEpq+1Ihbce1Gp+dacFfQd/aQ+NUOy3SyubIWgRME6C0ZvmwBChyy+aY2eLQOs7C8cGHA9WDesaHR4j/Q8cFs0U6JU91mTmbdVpJ4jaTRFi4K6ITWtrxb4qVD27ml3U3WdmdughypNeMixvlFPB6Y8+itM8/w9w4SF4/Ak40TLpWn84g889BgfEplwbEJjSbTPFvjHLbxR/598TNixCLuBkal25NoPbtER5uFmV0qx7mbQBgrkvREygWvAqHmiWIp3wU33JQGTisrcDnRPIGgX8froQ7my12r/w/+Au7cYJsdz7b6plXMpKY3NyRst5nhikOBltRj3rWC/oLiV2oEIqouddkZM5x8jnskCnzVETuKwWCVZRc0reLMEVvTWRPY5Q6peVs04cI489PAAUnj86n97NI6IJYQDrzoI3hY3/uEsCIS/Fa0weP7dg04DWmn4UjQJJl9ki7aWuXzRYLTC3EqQmx0+1vHheKdEVrYZ9B6wMY1xQS0geGNGVrMat93xi/06qoqPaX/cCV4X1SBXzAwUDHDWbJMLaSx9s1NyRI6+JffsY5rBiPq8GMBKfmwvuLL+TikN+D6vWV3Mn0E8JFoFqdMGDTsFZ2N16FlkP5c8NSLMkxj07IOkC/4szILYFcws20VHlsYA==';const _IH='6b3e60e488adc812f0100e0a882323d101f639814038c6294978f9ecaaca5a47';let _src;

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
