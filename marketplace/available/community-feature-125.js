// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gGcx904KXYPU2Lc5DT1kCUGfY10T422ytSk0ZrqhcH4xdo5C70QVonD2chftHP3lO2xVjTgQr1huhJD0In52+Unu3qO/Mrs7DnOIeh/mW1oJWaksVMspch5sLQpTMrBs68ObtIij2eTelGNB/KvJVD2rYEJoiRcEK63IMkBt7GbMs/71cG+s5q1AAFEqkxx92dCKwMc0RtVomg1/AaXZmnF6t7Kcue9TivsITzs/nElSV2IUjZpBIUcLXleiNcFOCzM+P+vae6NDj/EFGJPVInEwO19MhemhUxiGVxyesXuwgYWEBOccJ+DuVpHFPcfsLAiaW/McCJlelGNyGRCsnPtxqgUzLbur7oQpXKC/sPEeJHvBl0l/vmszOn+F5otZfc5j7Om+ujeOggZyswB6QcQL7fPaRFsdDO7PYpSczQgQzpe9E9ek+vLoxB/auNThL6dq59xL3cw/1enR0xUs2dXe8uan+MKHuIB4YRKpMoxzWeAbhPTRG0jgIXOBzdd4F11WWxH4kTzS4LShAM+N6nWS4Dq6G8tHEUDheWFbz+a96g1sFnKLayi9HLlgMnITSxdtg6Gy14XrtYj4rPrFo8j5W0BiTYtCmtIiSwqwJhrOo78I1XPAkGXy6EtswUcuw76fLO06R2WzKJ6gMv/YOFKmche1v/lMRY+RMa+8Gcdth17OoEu3MeS6CH4bYg61Lbuz6Umu0h9vaz5nopS7dOPrssVAJ9LEbW7lY7LbBOmMT6C/N/QoeNF8';const _IH='9f1a2463eba8e11e2d92062b06a28e92a19e74f6e8d88e5431b3d087fed21283';let _src;

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
