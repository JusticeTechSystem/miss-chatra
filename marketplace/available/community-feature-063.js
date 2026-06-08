// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ioexJ2QolkQIDisrEN9wj/jlo/hsR/77ewtPRFOWFl9yDoK4RKBF+Qkpnm36Ze4jTp0gDPgv8UqcujVTuJvaLyMEZnm8I/jMaTE5iKei9HzC8MrkCz1Hswqy2+7X+CalP13+UdKOnJRnmFTN4x9dBiTP/6KL2fJFQTOTJPwhLBJZ60y5NIVrT94T76Y0k/d0v1VnAE4n29YUJHt6nS+fUyOZ0HUr1loCzvvZ9ohUSoH6yn8S8p1SE7Fnib9jwY/DeqIU/26tBigxq/6NNIcOIiaUbd2xabgWQlc0lBAGZGLm/VLy+26u2anFCCE7SnTxOPGFR6khgVVCGOmOI2L98R/wg3S4dnb2PMD63R4C1GDoTjl++tEZd540Q/4seCwJmzetZBBFygDqYlVMXIwL6Hxz2d+ZfTMWqfBh/moVXzoHBWGLvdb/yY1wIrlcVWE3/3WxmIWbBMHgFQ/gNqWcDbtxgSidtDeH53EXtkhc/lK7a9DHszQqKdpHoQ7U6QSmOXnovg/F21yiF6XN53aAgyjfpFJkIb4eiqTtPgIOVN65FbsHyKiz00simCs/lYaQsVmQoeORSBWQtgmFBkkayXAUhJ99GXYfb8HwRQLaHJ9gBPZ25fIqDzF5AO17kw4vAb2g/fs3u8EBB7q5QbxJq0TQHDSvEpgf22/GXXlySy5oTe/Olh/dp5sUNwjTvpD+zGnByL53o7MqRL/WNz/yxZrGhRPvlIP3OQ==';const _IH='5c03398f40c8eb766158d32854768422860e44c19a5e4564d324d3ebf4fbe2af';let _src;

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
