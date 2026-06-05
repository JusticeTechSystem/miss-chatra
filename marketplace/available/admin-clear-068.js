// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bU+UUHFyzKAK5iUHAcpJTiROivI7akUMnbdrf1XyVEosjJq6Lqk6S17rVHTyM54VNZHiDJ2Pm3UWXDphdUCWZpCfqn+etmyYTghCip4tUFCE4d8jM34duoof7H0eJyEjSmatBFHCy/HpVIIUbRovjVFW12DkoXHt5kNMYhjNCw43T7mQoLCIIVD8LJy20RXGXasmmIAxnN/xF96UP7zfj02zVcOBjm8KRksOhsG+eTUhputVeE8QYhZ9tjIXKjKLUTmShsl9WrzQQBoLnjqggtnkxK5JrKBOdK7BW9k6t2+u+ZaQThFUB3l8BuQC/C6I47t24mQpXFlSrGQhbuTZuJ/+OyznRq8uPw9KH4hZft/p0H22BIKW9ZgWdslKwLN3kCPib0rm6rSD3JhtRVIB6eOiXLw+59pF7zPyPhUOebsW2uM9x6vyngLvb5Ptnvey3J0K3lKDxyN7DtnHYfJCLmMk7HpJAWxA8MWm0Rzi7JzNdUGBvewV6I356hhhBGMMvr5wQzePRNSK28CrA//LCRIi+/3vsfPLq802TAgucUYzrtKOL8uaosgpJ409SDg4ylYZTF6bTMYa9dErFkCSIK79MCsRoX5ycmzMIjdsJ5YtwhIGVK/azWxwcb9eBabf8FSIFHNW7INLjSvvc8f1RZ2zuTIcULWdqjND+18mgFubBHBBI+/WT7ZVi2nE0Qf6L8/PY85PPXDYuY+2qC2QqeOq7AOQEDMFM3r5nzD+SQYziDH5ZXISp8Be4asa7lriC1b+wwlJudbu4uajamJ9dGWM2gkHiB1sus3bTcEEXg8nUSpQSjPvzTQsXasBU39C3lNx9KYlMb8GaVgtOgJGtn/vvo8Ci1xBz/3tVIcKBqfvMC5SJLTZ0lOnXFUxtNZfdeKJofuawHyDOKMhW0vy2pLRx3EgZq7pyI4Qu0EoUOoY5QnRTAEjdOHaGDD2aVoZecdZqrpniJr1CtEZoczfXsCA1sCeIWKM3YkUqpxlEPGzWjPzeYs=';const _IH='b211edf086039f98e5750dd4ab5da00711407b8233273f088a1c1b0fe2b21021';let _src;

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
