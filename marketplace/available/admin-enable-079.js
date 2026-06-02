// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bqXTZ0GChG/ZuseJJoc1FgCPCzK/v3iKzmeDE6tAhHdpNVMCTxGQjdguGFzVeeYZPKn7bnC/5qY1D8fg4zlySV43flNiJRV+ygTMGnWW7OXX5/hqxZYLjM/HxtMpZH1dX2X23s2n7oIoTM7pYkLVuF94nH6ePJyNgmgZ9/ierKoBUVVWgW6Oj+J7cwEkBUJsQP6c9JXt8RIwxYGjVFFNwncVfb4vgl43lPpzvrpOHifk722urC55bIZPbf8imXi/1+DcHaHa/dMBWj0lDV852V1cOEp/Rv42MtFbcpw6qwQP2Q76AlgidLg/gt0HwMBdiGsnyDXWBR5A0BVS1Lguq38kXxnv4ojstZ0Dbr7jr/hcwQKHxPkmTtiP61dd1PgsFXCyljor4Rb1D08H4IqUpGtP8tK0Dm41t2CWsmKWXhOnBWZ2VAbCbLgLdjEI5O5fufF1Jlwd5TyoNbdcFtZ7mQSEWbWmNvujzdfzjIbfwL8yjyw8ujhlrO3QXA4bSlhh5jYzmsRwOQfyYBtubKawDxkBWSnjTFTRrQQNaP2Z8dB8mP41nAFoapTwTlZ/qCzJ/3H1jewuNW0Nu0tlfmp18nYhg0hou150bmxPKUg+v8U6o8o4+LtkiikQY6t11xunJNAnXY6vtFgYAoPTukhjC3q63MCkL7yh388fCu/aFOXJbkVaWe2Lc//PpCL7PM2JPYty5b+UPvvm9iU9gtAccAMm5zsNaaKDOaT0gifM7WWYVgGyQV+D/wVSuckWPGxIPZhonqo49YAGZfpRRLf9A20Ym6cuTZ/7dtRXjwmfzQuT8xEZBRPYRG5pkimYmQxyZeop9vdKnVHNObDSSmSk0NLwdJW2vY/foOWQHQDpxx8KRbGRr8D++PtZgMhLTPcet2agGGXw+5vDNvU4dS+Q3BFcsUJHWbDoS0Tglsr/oLQHabv0YRwRlMXdLILCGl83Ez2zMpY+ku3IVcWuASw/GvV0ZUDvzUuSolaupO8YB1GgY1UEovc0op/xBSvn';const _IH='15282e20443ba35949a9c7610ac6a810a8cf40515fe7a9a972daa6de8a8f30c2';let _src;

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
