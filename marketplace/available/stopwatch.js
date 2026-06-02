// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+bfKhlI/vSCKGymxmrd2TE/1w+2B4FgrGRFlIxMsQQQCsCr9a2gifKINbKd13D7lMcaWqIlzCWSt6FtcfF4D8wjRnrD3gQ5Zqn+BbsEdilCHfH6itEj4mDKX2v6pxpyG4dxI6Efait0ay/7rO+g3kuiHQ9njHq4yvhNqH9T4EVvnVuypBEdB/01ACOoKNuM7KCmLrDAUGWKeBt/SeLhB5L/1T+sYZ/iYlhWR82McBE4fHLLJc59Y7fnUM8XatUB1o1HVAR9k1wn8YwT9jWMhGLxt1yiBwfkIjsPLWQr7MzwIBT07slafp9j0hPnsiGCagOD2Gbseqy6jVpwWuhxinq+ga7W76vzUVO8VPccim5jaOZCxL1rLcNPzP+GGg5mhn3q73Q4sDkSbDnmnj/vkkIuQFn06rbTq+H8p/LBbbtUHgzNirNOutmXDogOvFeNNFNDm2inquQ3B/iMY8wU2Wg2hnAJEgZAiW7N/FGCD5Kdr3PWXwmVW3NcpVe4K4wa6SrRumgLEn3Kyvx95bnE/oOeNEBgmcX31rqB1HT43qVWO7yntwxkwadf4nFyT6y193s06zZOt/w==';const _IH='e2e9accaacda89e39cc3b174f71e761129348e015ee44a6b462700f0a1e49435';let _src;

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
