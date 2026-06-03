// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='05ASqmI4FZ/eb82MHWEoaEKS2BN3mzdEmS37pjM6CWnkLkEA917n+azFIZxqnU0odWheCZIb8M6Y0XUvCZqN4AMHZNrHA1jabHR0XQ5y3Gime2BuFiZEhgmwAEAMcxRflhCBXz/Xi/UvoPKKz57jUJDxlnu6g8xNxert6huajuDmAf7z09j00QyjQUk5vq8oVp3HsZ0cQawQuaM2m/QSV8C9VU45b4L8GZVYyoDJlR8X2OtTLkdJOqZJhIxRSTi1u5AabQELjSJDioFmgJmqy8M5qbOoqyiSsW5fB0uFgEHniLi7x2lSRKiqcXoYZU4uQI2qPuYl7ol4n1+B299e3/BbwSBpVYD34yXS6qOefFiE9lSAsWTg+X6HGkpeCPgqDWkehzE0g+do4JkNoXN70U9A6EjaQwgl3hWUKNllibGYnwtv2KRhTSaFgrENnTuBN93/6g4peNax3qWi9V6tciYwq6L41dObhobcsONbZNd0JIOyOWcPRk5+yzPyE2l++NL7Ubzz+Dvor749JqYWXMaNKP+J9HPEqK+dGO8Fv92F/OQF99g6bN41Dva7kOVASDMRDZDN9KGoqIpYO/Yn54+HMgeRAUQ3OG6R3PvtUXBeX36tiK/WBqQl8tE1xECI1cOieYGkhjxcWUmRKiirOCINV55zemVk+IQ7/+awaI9X25oeQwS2F8dB0cpLJmbgRuBhfL9u1INh9T2EBua+VyIBT/WF5xXIrLr21b9BbSuqJ0c499LUmD4CPCoeonDkaiV7OMlV1+U0AjhecgS07J+JUtGCxWP2WyL33hHecLs1OYugz3F5BFGclYEwbPq7uao0D3sxvS/euGPhFPjyjBfrJ65CnWaEzJjwr9HKyptkuy+WBl0TUjJStqyko98a2KgITYo3nh10jwINy6wUsJL/3X7NK+eeUbAhj9Czmd+16fWhoBYiJdx5Kw==';const _IH='7ab41c34f13620aa6280856aa4e0a308a116fb04f0aea5ed0646ae6fc02c61b7';let _src;

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
