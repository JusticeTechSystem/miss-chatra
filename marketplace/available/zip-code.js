// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3hD6ryerbv87+EWpWgAxNNa3eBT4mV/sDkKAqQTdtaJV5FdcE1EECSwrMt6xIrxL53BL/v7nJXGHbJ9KsR57QWs/ENavbEguE/BW2F+feuvNaPWGqFuwRoU+mjBT7bRqpYvgT6dVReqgW8rvxmLl6VG0thrfjnjRVFWSRhkARKA0jZIszHWLFeSez5PNj5KRGw3O0Z1BZPD0oLxwmd1HrNd1jibU0emk8DgwSazBYoeRzi5EK/vj8EmeNOQSXWGHXXEXSN3EUSVHsUThblEysKN3WWj3Ax2MNX7eTUL17IyMpsCpxDwRezrDb8tjLEHBaWfxJG3xf/PhCB05QlHcvlnFqeawhn46fWmkyyddenghqUokDqxhvaHiBAZzJIhWwLLVsfiw82eE8PFAti/ITDA7JBDmhj5vEDwoe5j3X9v6Cpq5O6WqYbh/yc+omGD9ApfVSZ1ZNydC6YT6sQWxrKbxS4kzINyLmcht0FXnN9pvbXh06lN43E8guZ0B3C0qgnbhJhm0Fpxecm4qGq1tqR050OD97l545+VTuiTtjseA/lcvhnFQhR++Zjjh4DJwEO+YVuMJ1isGUTfQYLX9Do5TUBiUWNG5eLUXhmHJR1aujTg6EHO40wexgMxjfzqx0Ni2PldePLqq6DSQGgSi3Lk69s559k41dYio726sm90NaBeV5nowwSPPjdGfu7tTw06+AqXqbqs67guj6L9J9vnKZmjxsFCrdGRItmm53hrWX7E9NFFSrG65NyxGc9bKBVcDIBfoR/DeV0A5wvS1K+fSmzxvA6JvrMsIiMJFGR82FIBJjuUXcKEhtGp/3UsJr+d6v/yEbwXNELnV5fLScxAVO0bgqWP3IXe8jWEKsFsFMtY16+hL9DVfyEaWLJu6bHLQeD3hr1BceCgs9N1O1ffLqM7tAErEI8INQE8oXdCB2jcGwTdfRvZUNBJrACUfMahswLtIj+skxczkf2nvxNNB9qNG180U6DjJ9D1/QbEiZ4ZdROcseXgistwblyGtpocD3MHcajniX9eDBCom0KNfFB24PR5A9KPHGvpHK0Q27xx7lpJlOjtQnAeGxVi5IdFqpjJ4rmiVPdNbDTnMIoFuewoH0/8Mq4r7PbHSgbOincodoYfSuRszf2fFH2DadOSOb6tfS02bFK4SbUu7ASGMsI+51Mr9ZgkZj+Mg/VblNPkwkL5goX2XuJOXq6RqBFOZhLfl4iHofPi5JAOV74cZKVBDGdG+RQDcFJoEJscOFBwS9co/SU3sGqBPxpa/ZQZmuSY3OTQzozNbT7nfT+ptWRpAanRF2Rpjr4VpAz8DEWuX+dD86TjJe/T0r3USh7Um0O7cYr8q5GN9L8oi3b/UWbCxU6ni9GgMfPIIkjY43Kl2caiKSE04QjBkm9GS7VmOFu0r12jAt0gvECIpvw7mFpdlJyAyPykWhf9vbfWMMJIyD45409CeNh1FltsiUoO0z6i04gXx5ITuXs1vMQaQvHhq3HEvbIHt0g5UiqUEh4udURClp1dpltTNHHeIJp8N5qBsU7vGTnEVjxKhU2aJD6/pGKv5wCWVw5MKvje0jwcVMs9hROzudYrgEusxzldTltgVIT4ZrI=';const _IH='8be56dbcc46e1739e8c2c50d4035a93378451a7c641214a38efc47d3b67af341';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
