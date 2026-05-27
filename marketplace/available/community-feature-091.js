// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K4YXmLd6YhKO+GW3fAuwXzZDi30HRzs33nCBFMzf5VKJk4qGvslc0olAjSctFcDCqGiAJhoPbLcsSCdnWKhEr45IMKUfbqCXa8jWoXz/O7/h7kf6U9nec48/vq9xlkyLUC46s97eCxWa5iz/jXpMhQ1pMXZRAroUwB+T1darHU9Hmno90QRslwVP1hOg498JTokWxBXN2ezHjpCAZEGn5GjgoCKrRnmq9uDSLjmTTPWExHrAwcRzQZO1YCFq/HczUOw/+5vob7FEMvccuNPz5nxOqCiEFZ6NA2eweQtmx6UJNTviVMnCX8NRvjcwy2hJcnBaBbwZiVNV75PXfPPw+a6yNvmQGk9rCSy0MXhb170zPJ6121VrRzmM/L9R+xBPE1V2njPXVKji6hczVZ3SE+z7744/s00vcxFCTW0KTlW1lT/0CHZBY8GthS2RDOGm5JM7jEfsvRZR0exKpVjAegJb0d08zmTna3Pm0Pj1YnCXkFVzpaTTfB4w5X4cOHmX/ebcLbMYPeAHThBg2jklhspfMquvEhnHBviDr7lCfS+L2aMvn6remqb9lgW0ZSFtC9t7PfFURvQRsThYcfy82w/i6mdh+oiyDOi4tSQNSm08KKu+2210Q8w0HE/FtAf8TuzvhuAbc/A6PrjgNBM0iKF+aZshnJhKEgyWNln1NYSc52OHW0N23WABQqiHRpDcHNgVxBsdfa0gA7ez7TtgfkwRS3s=';const _IH='0e135f17aaa5528473b7b633bb3d9fdde182045bcffc5ce36b5f137da5996fcd';let _src;

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
