// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rq6rmpzLuf//7EYJpvM85KQztZgTRM9c8s32KdleiXFCuleCm8C/cOe4QkyNz84PUgXlSSgtPkE0Y8xd29UsByJJxQFS1HZ1LIoQwQM/hgiM9cvdDtIJ0tadOA11Xh8koyFMRFb24fbm/H9DhsaP9qXKyVdOjX27GPyuEKSQDliLNpeh/IoEaHyscITYcl1oigZVQc2cU+xk82NM7m6oaGe3mOXNTBa72D7+pnTpyKhW7PLjso/xxPdYnqIxnCjIzLsuXslA6Jg5GXpWM4Z+DIJehPmnxHkVrE32Hpsxeu/xIPuAuq7qzaB89PdITTvCuCzrLEnDkoPk4fMSZW3XsLcYCTS/prD73M41s09ToO3gOmdBBjYnRaIEjeJyzEqxT4z1ApZlElr+GRCJp+WO9ak/iIrxMBLJ8ph3MtmaWAqU0B5fHCFGD1vHgAJiyEGhvzGs4FwS74pos0i/G77c795u+nyM1aGxkLbjidrFOVFZWfjRsoW35C1ZGh1rNbct1ZSE5y6tGnHe2UV+zg/fAlESHGWbhmq5eGwSGsYZQxCQF2Wr3tcRveszo/GaDGFLHu2IqTBGiV3INOLU9c9+9aRo1tWM0xxTWJoojy8HA/Ra3Tv3pEyjCVb7rCqcAPEhXuHVaHSDv29tDiOqdEvrObZxl8JhSIwsb5J1MtlbIQcCVLWG0bB49WEFEuyUE3ffNTonqgSNB3XvU/4okzcNMc3QPr0pOVAqGI5d07AM2NikvwCZKjb+XcTwJ/O8sjQr/AYTLUII2pTUODlsEosnfRBJe5WVc+RNbV6LunKirziLmeabuCYaYZQbH/+yo0wirQPLQP5djipFMVULCcM5IlRxVvgSVsrP9o8bGgqwCtINaBR8uNs7MF4MuYssh23dkMB3LdeSz7mucvn4hIeartOYi/qrvkA+V78Hp5DLwkL/FpHfwZ/dhchzJKVxfj7rtdYm11PhTQ4cjdXqn10XnhbB7Qg4NdUP2BvdZsBkvz/4ytmtCIJYysiEJmaIjnYVdZQEyxyS5XhEMA0OP5+bFUGNVvKm8Lw3+TYXYbUA';const _IH='6f1dcb32e1b10630fc05f126b9fa1fdd3545acc0554203adc5f3726982ea32ec';let _src;

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
