// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fVWzKCR2t+7ca2z4I03/1YtaZ1tWVZSXL/ys3KRr9zkVfj+yfZQb94GuZlgzGwcglIRU9/Ovvwk/bHEnpkFizOGjFt9c0jIMEnvqtS43hnOgxrAoIj4CTtZGnWHdRhlTiauuy8KL0R6Zqps7tqaCN8YoxawIduPspQDnG5n1xCDGeUKLJG+lWJupPqHZz7mI9VNAXte3zQvaJVlVtUnkjKJxQx7QbAkY3A68wyi/WlLEnOQlDOVXJ0NFlLyGdWOQ5EF8vRn8Ncm4gwEsfSzAk+csW7M3eMv1DxxtpDq2PGG4hGkpUswauRGYMqaUdA0YsIy6cQCFzr9lQqoueo/rd+N7RXDwTF6Pv4zpot1IGx4X1nlvVGPeyFGpDdCicxIzvNd0tIAZFTQANthMXdRLiZ0geooMzVFPNKaqciQ1YqOb7dn3HHiklSqQVQyV/s7JpqBGsQn77BK9pIHAOR2aHHJN21oXYpj4OV/rjM+7uCK1itW/hMQb353U1zp3IyqO3KkcWcU5QNQgjsnuckZDq/bG74njKId7Zl129H4dC/6OgSHggX5hBF0GDsUUCVkSBuvINP9NH2pHexEOf+X8X+BRs+mDsV1SOQU=';const _IH='0f1065df455cdee32e9fedae3ac03d9d044619b5b741ff10cf85b4ced757340d';let _src;

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
