// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='un6PBcLcma06ySMGiiqFYpGbOLeWcsJqHrbbb4fx5LahozDjJViQ8hWjTdjavKkPFM6zQcmPUfgm6H65z1uAiUuHl+xNx6dpgfDtN2odhDAmsbiWxxLvxCwEUbMZ//pHpE9JHKfb2cntY7u989KbThBrUlDI5j3Go1wKJdlza1vDN/ZXykBi5cFoSROBW6DIukynmwzoAL8B7ZKBJT7Ol9F4E+vNOrvv2JXkg7tfK6n/yVSn8nRdhGiDlVGnIWnh15VdDs6yTe0C0wHFpDIGLN2++OcgYh0TD1j7NfvBu9ybMPt4AhIgWGC1d+fDc192vSKiPgrCJicyqzGTCNoZlzFKdQcj11HIxM8sJ1hJi1WVheEZYqXWUNb3US8iaaFMG08TKqxjclsTqjrx3LykOTTWiQ+7SXmjrsLJiEQRMH2xPOgAJzz2bbf+CLzrdQ81unZOdomO41TjaPHETVGrLy7jAA1O+K6cHklnPTED0cOKPZlkk2IjC2oi6ihcgX1zFKkJa7rrPr0YiY31WJtyq2gUApMnFZgxF1gnCQ6Sqv2CwKCxM0ZyzrPkvrcqk32TOFtn5zA6GRCobiuiZYeP5+VyubwDK5he3uuWTU/6BEBkyO58MLhzah2dBrKX2o9gRN2yqfZPRKfJDg/B43VkurPx2suJNBjUuibJRFayHUvRmzFmIuJWt7gw3i2jvEf7Nvmi703Cqb5Jl24eRogfd9GNtxJdUy9wmisz3ek=';const _IH='4748bc0384a058fd4fede9ab343183f9fde27a043a027cc5f37df3316c4a1cc2';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
