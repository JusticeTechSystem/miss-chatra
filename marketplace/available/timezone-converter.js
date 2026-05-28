// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cAglAcNei5fNy9/HWiJtwvL4t/rlKYFJTkgQxG8lwgoTpAQQkBflM2rcAsccQjJaM4XVAjDClUB9zuQiOnK4xbWVU30D6ZPDzk17gb0dqn+OmuFrvvm4GBRANWZpcsBzc5biLPVe/AyTsT71ep6iStsiKGh3w5970/NpPehsDfZJjU1vhg3vFraoYZHB1im1a6txXVi3bZYxHayILEsCBpE3pVQNmJk6eyb3kaKgxXAm/lg27n0Bn8os4MIdUQbiYyq2KHYVGMQiUVnEMC4976+dTWWITaHuM6SnK10Q0mEEmwZ9VMHwpYmB7RPZsbGtRweRTCTJ22/2UnAgIOeRvxkpRbyBTa+W4fQEDLT4PXzM8aYNNzxTN+LK4hVD0TDPAgdqSqo+hPyE8a/ylXGpy4hINr8lWF1IfXalrl+waXAx+Myymo/V6r5T4s5foaSpX1EB8DHocAXD/qQjW0L0WANW9n1uL+jkgqXMWGemniVE83YEzAAhafi1muIBM3dlw/xJAy8/BVXj4s+A6GFdUBb0I0cVqbML9hgHy1pWNlxwv4bXR+WqhLAhftzgLkdxnduvMTCJH/QtiqM645nFFpz+efdhUVdkpWJv';const _IH='59cbc2f546d89f94d971fcb2494a118e73d11b625b2490387baf44f37c82b483';let _src;

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
