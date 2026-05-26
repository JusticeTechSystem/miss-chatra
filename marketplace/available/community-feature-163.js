// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yfcsD3f1wHvl3vg0SSYb9F7fv+HsTb/Gmf6rbEpddv5xqC0fBtAR3FnSUxWEYU+TtiSXpeGBub95pcpn32R8hvVxBTIC3lsreE4e7T+J1onzFOUIBDJQuapxFGA3/hgN+sLy9kO/tdwQNtwSUmCAejp+6dRhH1t9vbyIysbgOYtWUG9RqCBT0NyWzRU+JozIpoDtWdL8PnOWMtZeym1OppcSffv+OgnWyadHfMGV30eowCYhGOQNyM6OHuUHe1gRH03SesuikVPYoNFu6i9gV3QAMueJl+ViB9HLinZW+e7drY0QI7g8+QDCReXPkMKaolz807lt/0+PuErdpTFFHps1PNUk/7GkRe8JLZr6cqk3NR589r69qGqv8gayieWOAzzRR29/xWfAFfXFzsifWv8Hr88/uXxcJW1Oai5w1VNAf1C+JktUgRFqsUYHHXpm4cMJrZKM+Gz7Q2ouvE4+D9TPm9LKLI04mNAA6m4QqtQlbFatAircf8Pf58sBL7j0J0MbKGhdzgn+pHFLBREuC6VTQEFkVsitTKP+IXEjtzTcDx3SqGCKyq0qPVLJNk1ZIIGvqM65CiOJO6TyxTB4QxiGdznDc2krq7PHhZvuZGT70Sbw86LVTxeopMp/0hqFc6R3s7fItWwOqKvd2gPCK9aqH1iiT4pwjqI/cdK+PUceRXBtA5uVlcJUSeEWrTo48CBclXJAvHzolywQBpNatWs6vCjaOYIbOcFPMWk=';const _IH='e09e42a13d9dbb72c52b8703f14a3fd6ee696daf3dabf43ed07a9c31cb7bc414';let _src;

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
