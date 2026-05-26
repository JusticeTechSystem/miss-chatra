// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='webjXNs87luoeYJUE6uZQ7dunQgyJrD96dop5OFZ55acnub6+fWbmlAUxZsqpKpJYB992uN/XCepfTh+yW6gD7CAMCpmjpfkLKyDY7IT+Bhf1vdubXudRqTH9Omuu0H1uKrnPnfhjz/vt29MqZZGb7Di+A+18ywk3aoqq/iY0DsBZzJzOqekQVvb09Tp/R21YZMKJR5wF4dwqaScEU6JD9id1jQ5FGcJe66elgV/+0tRRfpsJD7Wrw6ms6JgIQ6mS0IhhGae4RFKpYnrCo+I3vlJd+Dfh0+dJz3iEDPQpbHzaWHEtCRzqgq8GOmbKlFZcpeh4h8wWTvI+gG8h1Vv/3+Doy6srBQLKR5djXml0t1P0SufnRF/zUWqYxHzJCaCGkU4uCuAUpeDA39p0P+ur1MGYHuBEiXE/az5scDmkj+hHkv34d4YPmuKSx6/s4xMFI+vFno2+63+QxjQ1X+ETsQOrGkUi39azpdyiiYphBQCNXgyqsb+laUfPQpZqvp/zt63DDijZVBTeMQqKAyk8xRfa8rulc72VguPQuxjeFwY96KHyPT3Z4TQCet6PIRmDlA/oHXeewSk3+VXSSuflJ9q/43c2a+8aVTKeb8FZblDkpm2Ozfg4zlwVoJ8D3SOpswHwY0XJQYexPh69s9CS+c8YayVsYKvmZwTjD5cH5yvcbCi4hhkDkWYbC7J9fImdN6NY/7qAPH30NeGl8lE0SRlnBhyMM/E/wqDha6uB+WdIfbH5Mvu7/fXIK0cwrSSAaqGiiBu104tkJs7IqJ/Kxgt3kkIJLV8OXHnDU1pRz5xWYI+OTKMIzY3iMfHPPJJXLU/UEkhCljHNYZtEmKihOjhp+hi6Rt6oH8HJIqwloNlUSRNmR2PAd8IL9blv7SgyTmbKLd3CclHRMtd14Wt2MGzXE6U0H0TMOBz4GXyi5JCTVFJAhlT2K7PZyFY/uagqNWiAo4adDdKH4knwJ2cNPpGkkMWMhIsp2WS8e/mxDX/JUt6SBClee8biE7LQN/9N2i8PeJh+T1QHvsEt6vWstGa/nRtZ24/MhDwGr2k';const _IH='d4fb99b133e3d76806b7c839f1044fd0cf8266141e67150a7da994a52a92e597';let _src;

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
