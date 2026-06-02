// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f1sPAxPcXxxc57oXX8s71b+Q3C96Tr0bCmI7yXebacafLl5cebfVEWoyvCrIDYutFacdY1K8vB790TEUe5YjFMJPq+RxtxxZNWcrmAe3SssZQFgVm3GneGlV4zj2lrkUx/bX9Fw62+fmcRX5KiDNUO3PKtul5LdUIZPfInjaQyXVDu5xpsESlq/AcQmPYxaCslSgpWfjh+TJNKnKkDTc8aNYz76LzQW6n8KGWDxNM5rPW3bALAXW15oBPmOUmRNnsgQMlsfhKMR/FRQ8Apf4mCxyG9TNzanF1XcjeV03rlUz769NTkp2kSuWvoskCX0VYoaIPEdN6xQcCbYDWpQqZcFgBpH1rHl2okf73vzneBDRx/P3vZhcqlUh7pLY80/zIp5fQt/vMyHbnBxFGSmqa3cBHiFyo4E+eYmDgVdRq4zfhVgHr0r2fvPq8b8o74vu2ARwisS+BDjOw/JsEntLddpt9gIPazhYuAeRyGQnNL5uLAGpoPpBBeWxJwPZQFr8BXLe1c1tHTcnBWa3wZxo8Aa49bP49yimqUc1G6pdZ12mN1nVVxp6a/4MLDSOvWZdNiiDX14PChM+lCH9Wu24/xb1FuZ8BXl6mCWDb/kDgbES2/Q5in3sgQvm+0B/fJK+y7LCLYljbx+lzC8jnUoWsInxnIdWao0twM02yrDWmWuoTnV0C/DtxVXxDRB+H46JYOLYo0J87Mgwy2l0gJ/i0omz+6G7qDfhFdxDBEUWT/qOr2nMmILiF46dfAv95jtinSmgVTAERFuIwZGmo79EBiZNYYpRCofgD3w1R4WV7O+Ivx/UT1xLInViB8HuUAUV2LHukEcOaUDvM5xH1quOmcg83f5nTvmOCEQ6OLC155ncd8RPoO5G2YEVAWmLI0fq+IX/zosRzZm6/n75hHymfVxZC+0DcPbsaj3PfQ/EGs2YC5qSzLy5xHN028Q5GucvdUb7nPUbBnFSTHJvjpDgoEdUTSl8/AUSndAHveFlRywCloqKMOIUtQNqJA8NqZy5nYPC+WlfQCXFZeQRp7Fa2rHsnGHvr/g4F9s8m2HleLcBKyK+ISUq2Dxz1X5NgK5RpEEXmwWXaECKSacVcrnZNFy8+JfzLaAt3B1V4SfccQp+/j3+DmxuK49i387M6d+SpeE0gRKtudmp8df98zUiGJbMuH6Z4S7tt8p/f5V9gddrsO0NXkFGu1Yjg+5fZKLuFFmIQuHt27FYdBUGk0hiEMciue9vWDlq8D1jsItE7O1YABshqGJBdSxogYW6iunBuhcMGSMTyLSZBjsLBuzgdyXjaggcFwSy73uw/DBVpaSRGcZDQ76VRYJdp/t9vMK6BqaoQEDMDMKWjVtHErOmWVY4+X+ryc62SO+7eXDLhmuDn1jndsn04A==';const _IH='7078c268b3295aabc879f3f39398b6c6c38bef36a5e47d366c4f80135a4e8fcd';let _src;

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
