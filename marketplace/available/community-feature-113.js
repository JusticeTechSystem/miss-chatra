// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T/XXluiEogds5ow3PNpn+fVhB67KtGlaPr92+0wgI6mfbjy1Opr3AP8wsZSJ+WGusnvF5q3QiiiSIkDYfjPx7oR/b7oTYLEMc/6Smed63Rpk1Fw1Rbr9kREmYwsZkDRrwMaq10oJd+yp5nNiOghBREc4I7gePcZJ5WTdj7h95qUy2mKSlIIawfCQ9bBOjq/E6hK9wqXIa/fO7mxRPWrJe6gw82Wy4oLg3TLLGsbpf8+ZPWMj8sFZXlBTyciG8nlFebQ4YAciij8De3Ek3q8nMp/LQQT2KIpnrh9V0gvWoyzwA90LGcTiQ/GQ//Y1dJBYi7vJNAc4hBub5qtCU1EdtCypRUbKmlFcX/PFYgzAfv3PocbgKcEEMy4MjFV9z8/o73Aw7XbxVwJEO4ovwiY+KIwpZHo8ys0/5xHDRI2uuTNuIs75OMkTiFLT2FibM61EB6BZIGE2K/9RCEsbcgU/0Q/qPqQQKrwNOEDMMO1tbXnnBrfuddOUiaLENiCznfH8fGcpEcScRofwdPYBn1jCyQNPqgNfjhKIOJmaGs6kE6cKXBDwgPKH1OATwVTQxFIPPnv/RebW6g9Lgrciw36uTZt543n8OEyluo18j3G1hzf6itIXTfATA/5wIbhoEvqeyf2ghd2gS1N8DOjxjjxuf6bKtpwgvIQc0e9+dHPRoRVFmVO53YjsJ9l94SgyT4h1HFXiIbGgjSWYmH5SVQ2c1UxCB7rL3DyMgWCKagg=';const _IH='4895a9ee8081cd58fdbea037fb1118590c4d06b6e24967bcbaefa13f6cfbee50';let _src;

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
