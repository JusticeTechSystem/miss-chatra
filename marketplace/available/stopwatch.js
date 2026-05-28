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
  const _b64='wt+kgMk53sh5txVY94OpZkBNXGGxyKip7EUBHr6/kPMXmFm0jgyfff2pOXvA4o5mr104uSqRzr3Bp4EOKOg2SVRi+fE1ALlYRIU3HMdONh57CayOEAP4usWEuTVcMuvRlJSa5wIVFJO3WsgyGWAWKNoVKz2eZIrBZGJAu9sxxWcwzkkd4ItRrfF9qer2sgbdZT1kgwecesOsXpYT7y5jRWNQgmrfnBzKWPhHSMZ4VKl1K8LYu9dezoJ1JX4wlUHIJf/iVc/Zez9E0hewt99uSkp9JbQgAlrzpCmIIRXpvVbVY2rFirt1Y8NzKdPUqeHu4cW2ADkpqmGMcwk4WXNj1JJOcdCfR6O4ROamJ1iOqC5CnoqlKluk1G3kfdFsPesen7LQIMRJrO0yMXL0Il6HCXXzRk3Rlbr0fNilJARBwNsRhNiUtOdDq3jJ+2nx0jLGmGgTJ4r2yBsQ+COKl/7EuW99zIaAPvBEA5cGtPHalMjRIhvN6SNb4OcwvIFFSnOyIn5Xs6EexBUKdeVQ9ISo7loIbRlSvTR7YDzKDdCR6l8uDNXO2v+NdgaLD4t4WPJzQVZWKXkeKw==';const _IH='db276c61a30f6dcfce83b83cc0c32fc3411b6b6a86fdeb4235fe50050676f260';let _src;

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
