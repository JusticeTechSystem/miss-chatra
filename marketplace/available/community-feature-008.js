// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H/gYRCYbaFucP6Si18Uwmhcuv/EdcbpMwL1bQXzzG02TiLrZDnnGS2fZSeupAzu3wepOC9GmbqF9S1r0Zdm4t6K7jCfHs2qL8UeaPWu6tjecMBMyc52XYPmbFLzgJ2bLizNn72z0xRggh7OXdty1t6D7/Y9KyPP1XCd5ipWMBHJAx+2RSRjI5NHTN0dz6w0FormsIzpevvxNF7CajVjXj6g0dPLIgpnUJILalUjAqlPxV2H7hgGDE25pon0X1AOnopaldz0JTW6GtNgBIfu0+XvLBn03Wpp8Y41vvRsncpQBD5qrY0b8E6zi6elqpvpWMKOyNvOG+KetwEblkeseJhc5PNpTb+mBjyiknMMMknqzO0lSGIyHIUoYzlxBUvXyBA97zLiUuDXRJKyrGwNR2qf10tUzNWyP+xMjVLTccDGCVOrAoSpfyscNtnT0LTxk3SyIrRhrZrsKxnnivTD9dY9hHwRJ3N+aVxIp0MaeNQ9gDSJKXjpAzU2Ve/TXaIgtUo31I/6rMDenBhepOgXEMqfulXCRlOgYcoHeEJDKSPQvgMUfqVqWatNMEreia+ghh6xK4juTmv122d3yWq7Poa0gSq+huOCezjlyf6mXU/Lgz/ibmeJJkuiD7mQmIoQZWbzx7+p0JzYNjK0WJYliO4VwiY4z3zb9fDgCOw8dlxjiuk49v0+/+Qk3IIXtQUBjJFCxr/d9UIC+R3r0qNinOWGb5pHp';const _IH='0515a65d0bb7eb2d249ed5036621929caad0b857ebd02f965536e2409c0c1367';let _src;

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
