// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9qBfhYBXNz5WWBL6pIppm8l08YpXWI4E5ksO3sXLIunofIH5+3VV9remfSRbX1QlQ+Y7GpFrkYVLR9BzMaVHbGdQb0TOfXZ1g7ktW+pfp0/6EDbnwBX+D9heHE/96ij4twy1/2NKaoIMQz3E1AoKR9S+ijx19VWtUus1EBwWuQpQr4aENEdggfBgoAzwNXsAIiZN9QboiqiFpxyLCigReU26ypw7tfesSYg68O5rGp3cca7+0hXl45S/hYEpeelkw1wb/pXXgj0cKUE4r3ctuYNKNRbZs6pcLUuRstTEEzvPZ0ZdUSsLQrBvsYLT45E9YoIsVJMnW7wU6RzTDttXF2p5IPq/hP/n/gFeRPH7QpfoPc6weDEbkvmQhfAFs8iLyx9vcDfXsc1vb4gjKWxmFGTLVXAbF1PiZ0jkD6iTXdjMAmH9prqGAG+XnL3d4pHRWg2wN5oxxLA4MBAAAwUPN+MZOw0hs9FZhMSen05wOFe1bQ9tDjoD11skC6odMLWeKLY9UtU8x8Yl8ME2vkrD91sZ+32CW6PJNfaWX2WqLDfIEEwwIcTmI0tjbxAvprhuqfriYtdiL29TKYIUMJ19e8MfDg8pgOjN+GSSnqyRmQ7GoaC4x+GWV76D5RVizsVGFA1H+wOWXanH0jkKABfbwsh28L2cJGWHWsj0icqcvwHqAt3QbiCGoBtx8tNHQ2LkMFrHlm6sQuRr2d1ovjE2rQU0g6rSYhH1YeTbLo2mAciMxQ=';const _IH='e6b167632f62f7f017dfa4f722fe28f93fd10bfd92f23f2e1b0772983bfe1a21';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
