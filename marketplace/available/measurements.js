// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YHAc5sSOLSFgHqv3DOKjRS8lJZchLSpMJjFg6z6SvNzac5L8EPVUg6DKdiPlp3dLKtDdtcRznRx8REl55F1wDpDCPJvyOQgovsdeUJBc7uCAS/5J0ffVpUGNtWBGcm368p0wRYxfSqfyWi3tkDKCObDvkIBFYraLTBqz2xy8Z435RPI4KZ433hg+m/2tmWbMrkzgnQRykjFAqpob3Bytsv8W+U/VYY5L7Mdk+jt40epBXTsms0E+S0MDNQKuyjB/yewpVOjd1t+TLQ9cdYPLm7URlpoUe5LqB2EoEWDwnLDdqlMmsId1oGQdTgdUsG5hOhsKz/OC+7+Ysefk9EG+DHkkyYSdvhVTbrikryoH41Bvfi9oJoOGH5AIroAh7/b7Nja03eydKEhl4EmpsUtIWIkkPTBD/xs4vtZekpr366BAsjYDZ96bo+zvXVKin2yXSk8tJtBt4VQE/pclDJZEIoG/8ojV6cUbRe+ecBeXNeqCeR1pzmBbS60Qi9fJYWqIaKu+A6lScHbCh1/LgwQ/Skr3m4NBGHvzJxRGlVIv5EdkPrmYWdMMEeekAWVAzBxY0qDoo73+NPDhRAAgmdpfyOcnwIFBgL5MWwveFzC14abhx/SxNzPYuWHth0vxSweVar/c5XRo8J2cQuuPEdM0XibjIjzwXhwo6BIEjPQ0vml9NcbtRYKU6xVARMY3eSAlWgTK8K3FD0Qp7YYOrvoUAwpMwRb2NA6AQQV3CHOBpAFJsnjY0u3h+lftGU6I+UWiiG+b210hWvr4qsZTRwUB0SO14xN1h/asbGdDdZh95XexCXHWLDIryvs9P9SS9z87n+Nf9Bn8NflK358mEYI+LDB8Anhcq5lwRQpfNtbSpA8RwUJp9l6oxNbauZ5iyBgmeKdEEtmkK3qhGLyNPllPY/+5hKhik4fzla9T74yOzpbGn0st3xM/wlYq9b87eeU38sD4YsqjVJ75yajSaGPWqFMZY2CSDm/14yXblzUr1YUNpleDzl6qpCRPnKxrhHLHBputOuWDsDeJyFeOBXWftjxGulyeNi1hAb9C/tW4LhACf71QylmZg51UMo/ANADuKo2yHrlzL3hwU0fVEOUT5RHrzXESqoOOXeK0r9fTaIhl0Ez+zwzH/NTzbIv5C/pkTYXq8EX1yagRYTXw8q1HWxP8qiYEcu4BPImfVy128HXA0Rrh1u/+h5iojbgDQk9wkAFEOKlfL/8=';const _IH='21f051b253c82904676d9a623627bab5c5d01d2f4dd48e32e17a9b51eff43428';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
