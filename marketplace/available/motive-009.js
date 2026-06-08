// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3KF0bLSlwt1p4hxzZtIZ6uK4AARtQzpPsD4dTF4daGUujZJuY0m/gYIlkjvuLajw7dEViQQdeeko6U1OKRLtxpxdlCmCbd8LDot+XtqoYH+aEtUHHJZP+3JGYZ43fc0hWEC4zICFDIX/vrYkjR6qetzJnh0GPuTmlw4tdbc6otS4B+M6/3kc1dxICaWW/+MfTSW3uRd9KZOKjVsdCI0weBxR5F0QIVOTpfx5vaJBCkqyxBRpnnjDCyRTHDEUFWCJrkI9AZWHIfUYpQ+ZQg6xtIVBsAEgOELjrR3b+txsf6JTnn3Cyamub9lxU0v7pc/qMME8NxK5JBFaoMpY33mAPs9lUFiFPJ0AIOvic7l/NA2kIAWbmjNiJb2iihe3vGCpC1qJumq0LEOAChylLrNO6GE0rRg0AMmEZMCzxwzS+hLSy/lYnuvvHryC9WqPPD/LZC3v+DH5NVmVXra5yGDxJiP/lvGbMolILEP5hx9jhT5zfFUzM4lKa9HDTbnNDnau9lxWYPn7W5ZrDMxjksObZkPn28xhRz+yOl/prE5G3GFbcyqT1T+CRvqJSTaHFE532JthyHvjQXiV9Yoz47FvVfxQt5jNE/L50fraqVUilSWXPagmInEfDXUh7UXixgj2gwQ1Ba31Pgdr5vpuLNLFzrJcSnjG7oyiL/MLNKggkp58iOWx9c6197aFrfMOq1ldWY01pfF1I/77xTQd25qsVgV2xH9fqqKVsCW2Mkve0CQ8B+hHjfMzdR+YNkfd/9rgEa45UzsHL1fzWunOv28vSBwEm9l5ZPAU3PE9ejPvjATPiYmwNyYlafGtFhxz7irehh6a9DI66xbPuRZLGtsKrF4vs4ppmI8y5gQeKLeX4tJySmUgNMuUewEV4oxY0ReucxjP/hc2+cjcJhQIWZR5MdmXwBYmiML4DhygL02RA4LHaziXGQnU3s/0XUYO0EZnjZZl72pJxtX4ozPfDyuASGqTqifeZvnNdiSxhzozVpw+PqzCWEwyTj+9ZEOylTDFSJqSNutNHK29HS54I2I=';const _IH='f9d1c1a39b09619d22394c7291e0225b1885d59a90835c62aaf58ed5e229f7ee';let _src;

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
