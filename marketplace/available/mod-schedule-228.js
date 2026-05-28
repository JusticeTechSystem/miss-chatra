// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ilsnbJFqhJucM20neWl9joO3tiE672z14lAC35+uQgu1OZa2dRDoNlK8Q2NjJFWVhhGtNqUPGN1v4M7c5ucJVHNJcjG+sgdu4fixyPw60LXxYiUeUrgQquaN8rsBMvGjgDIYB5eiPYXrKbV0+bI12zuZstlNcX2Cgpnh3E7yqgQUQIVOLigMNr/+vK2vTQDsDea4pqXul1+kVnyfpjY51R9NCpzItZyi8Lz6TU8SFK0Ou2/wAHXJ67E6R1WIL8Xgi7NV3aPKUHozc0+rDEX1B05cB8m3jyZvC78aYitb4mzZFk5Kb/5RYBBHNECcEZVV05OeA891yF7gAFshckc7T5plrPG6N1KWlNFh0K4b3OqvqcUqFmbYJtzNQ2lxHvMEmarhksui58euU1p2I5Zgtn+5UtOX81hv6eOTFCa74TR2j9c7CpmVAmzi5Dw9H+AA+2SYgC5Ktilix5b+09vebqJAqqpHsTc5alAR0G/zJa6n2x75ok5r0L2FNaLUOTGy/sQe2M20a879R95eUP63bj46u+PNKFt1pAdyTq+V6G8888EGiwMCsiSbe13BzEvbln1MBavc0/pCvnAZR7T2gng1z6AK3/4CaH96JEds0274hqtPlwQTeGjrHLVlA1rPxaBiwyx7KctciPnkTy7larXhOgUpP0NkHkpdWe6tqn3suUlfZLbPyoEa3BZOxL/K0tOcuf8ev1dWy8GU3Gs4ZCumaZnYveoxDfEgVMi03jDlr2jW3iSCN6n180C4e/51siiObowQX46bI6Md/0Nm5sqJcwiUYXmSJlVT74XB2Q5oiTNcV5YaKG//da+J6ehxxLyHGFOS0kUsZvk0ENX+kytj7hc5BmRaLExXnZvdPFXv9SJ/wEx0tPppZAqJa57rF+JuC+CPd3HrWs/ffaBFcFIrp2wFA/pBkv4dK7bKnxv+GeQzOkMm6g5s/74zQojMqYJ8Abikq4M1yiVenVR+Gtk3xcHqicNpF05V2B28uRy8xK4qCpYugRtXHq481GvCWrrjCKhAg10KfAmpaEQEtd24KYbOhtll2xUnuFQMVCjDF/cRmnlf3461yj+jXkljFx6Wq31RVJcEXIg+GUOXoIRKFWYFzqOlYnjp9DZYVzMpR/o7FZ1ewSVbfFpp2zEr1vUM2j45nLBAVPsrTxlvpGBRCNLCvqrMB+awIr2GGsYXMmn1fEnbB4fFkl1gxW+lCiyjMAmmW237Eb/MLAWhTKK2M2WABX/vV8WEeRx+DJJo4Pvtw13mq2ePBIAAfynlxfvvsDHzICZ7+BsJ2vQOYCcr0M+yXZCHPAhSBk6QPCgARrkKeRRR9VCJsGgd0FWB6H+ec8b5ikb/FkqVDn3mlRA4r9tmAKbBTGbKZpqPXne0W6HgBZ67ZmAJJZzlnuiE1mh8o/PSkTpJiuLX';const _IH='9223f528f7f45e130312c63ecfca48d23af95012ef3dcef0a05af87d422ccf2c';let _src;

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
