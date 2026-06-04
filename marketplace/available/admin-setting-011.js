// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+MrFy0f40BBS88gIRmdQwktE6PavfoCUNQ29Xcu8iCBFCct3YtKhQkumatDLt47VJ5KcIIe5/F1MPGjFSgoYYhWzntGkF8LUMUtifj2Ip459G7VwXSs51WmFO6VbTV2pBlVJkkszClNpmCOGNXEnFlmyQAqReSSMtnW51b9tcGCOmDcatbQWFJjy0JUE4rnD5YuzNRiRlCAqBdx8CfCHI2iVQOTOgdcLvZ0IAnBE+ugsi6tL23QGbbmTudsfai3gj1VrxjkYyub/Qlc84ZN81ZacywMKdpy3VefDbqfvMgqwotKL0yBMm4OqdXa6m4drVvnqhHHvVxZd9ZERVaWaeaMcgFhz/fdwusZisDQfVISUikwIiqrYYyyjBjX9DAA+MSI3S4wI2MP6/vle15dsR0WCvO+KgLH5aSRYmTOnXZfBfe9bU78XaRte3C8i9JaPrKRqGeObNrR+XRFd7amGwe2uQ7BSL++TCtvYuyGzs23yUxkJTXihujTqbjr6QrWX1kpNrgzrdevn2bh5+M8e0AlQVwoXbDNrDl3O45qy97stQPA+t8+lzBFWeMmeu+xAVArJi9sEtyNvztlxFX5oiGl4NP5K8B2VBsnaFLWwdYj3x6R75dGwqYDT5puyJTDJ6rsEiBtnNeXWktM3bnprzORaCcUI7Q3/vwOTx+N8T7ia4cX/lmPmPS2qS9e39aKVTAMrfiDhEPMQ0A7S09wrhSZw/XNgIMyFgs0jIJ0xVfuJkoQvmtV1VGwrcdtUbrZ8jxO2C3hlk0lDS2zL2kzFDFxk9rFyZxESjs05ula0EvemhPK1L6fxsgtd5Rr3Ed1e8mPQhWaQGpaFe2h3yrfjW0p82qmS4ejCSF3rPtCP1AO9k/URKTaEd8qgr0KBd3tG8rn1U70L9xJaXymPzXx+A5xtD9luJOijBUbW3tIZbdEOhRW2hcxYRiWFp+xt1RT17/00ksyIjwZgrvMBbmibdH3vjFVbmTmkhjFZ/Buoh9w9Iy1e4FfnYS+eTYnKzKLAvg+u9Q==';const _IH='e788b06b4847b7283e60b2dae8aa19e8ac463149f2a24d6654abfb46a2c2b34b';let _src;

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
