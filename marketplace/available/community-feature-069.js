// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wOA61nh0piufFktFBIEW3J75fze7UOaO8b8pKkr292Ujy01a01CCGJGpYP6LKN01C/ULbLoT4040QbVTsgPxpP/lENmtpTNKe9PMYR8PW49y+EUcE+KP5ScxEOgJxHrDk8Gvvv40mGxHbBQpTbQBwLKKXWVuOJIZccxzJWcfRy6WJano7Lemw5boKJ7aAA7kwFQUqox80NM1cUCisvJS7jPZEry3GXcOIK4bb9H4HnpDdT6H88/Arf8hPTEzEVEZOzQ0ArStzfIJIkCaydAsusXHXmZZmrEP14YjrFv5O8kfXi+OFIzBxbijpzMQmf5c0gAs9bYxDLBuMsIsy5vpIreeVbBwNXi0Rt8xF1iJ9JlmsZ7jnfsuAX/m4UMX9Xc/hA3QNVMYk6ULXhFHQxrnVri02/SZk6Fk4aXuIsmDpv3u078KDTh/FH0FLP1UW6WTcYTowSJ3O/fc7l05veW9M69hFon73k4sBc07wKMQp415Rs6/1FsprHjWMmWVv3G4rnvy36Nms6jTBgRX+0j4AE7yb4x3x2rW1lbPhsEWE5qFyyx1Oq58Bmu5WsfovGFCuRl9+Ttuy1AnqURuTHdAF6lM+UGmisNqNGkt8ZoRI+Dy/AIwTWu4tWMf/P0bvszTAKze0aNVB4jQ0WQdAFO6Sx/uVrNZuZknTime+ZcKmMelqdM0ymtT7A4saTLBLZ2vMtAD9/5jpy5kG9NzXVAM87PgY/Ts3r5YF6dqkftx3+w7Bw==';const _IH='cf9ddd8070633461eebc55f0bbb1dbdb61234a93a05c3b8d9b89faf615f8301a';let _src;

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
