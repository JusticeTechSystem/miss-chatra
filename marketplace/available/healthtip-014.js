// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FxZHsWdRCqepOFYbE6JlNVg6umee95sAhp3UPsz1kGUjJsFg8NnKpiAaXr7z03n8X+//Wk8xMJeD7QhiMjv6o9j6NyacDD+YsbNLbNvjOaal6s4c+vu0uaxnSH2G4CN88mUd4LkyD8d8P6m3tmZuWDnvMmMKIr3deZPs0P6H+Ra0hWMe6iGvtnocD8pC4HXyG+HZewKJ8fGQ8e4sD2wgwubGMpnx0lQWAgltr1AMyrTiILjDL/jz2ff7BP8/YkGybO5OtYHhlMPrVr3B5JqRQkWwTUbJSn4lG/EZbLcPu3oRReztD4pTmQFpRKJc/Vnhn1npGIqfPFR9mtNqm9iQBdTs/xxsf7qKmOYSUBxcN4K4hC//0PcxdSM9R4WRwPE9nnjD55R0XGGdzdnNiMUgyJyHIxsihFrAPwRvzG2YII4WpFVOD0qviyJ71qgzd5XM5YJ7CSfIKXDNvd6WI9rUGe75slzAquQpAQdV9DhwiHT6ScKf7zFGimrjTo1VjaSgES1+/xYhEm/g7fNbJPyGlqBKKGgin6JTQ06lxJf5C9G0AS8MIkqvqG/0CikeelQnY3z+52f3VHdwEdwGjw8SzEhZ7mbjBce+jQiUriEM7YJFmimBG9H/mmqk2WQvGyE5kdB8obzUcMNmD2eL7m8gdRdhNwlXQjm1O9dT99m+wg++ClQsNQeGIgbrikUgScVpq2wuBHpuFuNFhPgvVF5Hett2HYuYCLNumfneWfo3W4GjamRn+WB6q0N2aIn8wrmq2H8XH7zR4PmtV+L48M6D/lVC20k/J1dFEnFa6E4E21Iv600pQKF6nSJXPQm2YEUhJw9wItCoVTQWLKObOQTFYdAR5nGFffAByE8z07HHVGRV7H91oLw1RqtC8ToclnJd37GAfrcswRJLA6w2owY0jP5ssVswiXJZlf0JWGA2H58CRja13xAwfhD46Vk=';const _IH='f1952b6a81ae546a76741fe7547ccf0bb97422ff1774d286c419ef25a3db41fb';let _src;

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
