// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AljTw0dfn2bY2S96u9YbUAeg1u8XH9a3XrUxO6w0yFBnfLq6GzyGTkHlVwGwrKSLIlEwDSjmeuRbTuZAuXiHKKf0nPmBBpU428Crmat+Jui0DkwZ/ieCx+eNwjIPJhYC1qU3dAmY6/E36t1sdSXWI1cGcTKE0YKoyVKfzfYmdA5HK3lHSDU3MghsuupZTV4TzK+DrLqVBuSfs6rM1fiI1ubeOkd2hxyDdk9x/qz/PfK9UntyWjp4qcJvLN2bfkXPSGbyUI4QewcMBFUOUtirzutpkgJ6i2b396q934Y42H0OdxW0fkybB1uIn7AmbmilnS+SqjEWnmcJpj6dCrs0ERmXsR+jFOhtRLcBgOxF25eCYw02RWZlLw5Tet+xwoK/pJvh5mntIdAWKQ+jF3Lu5HF80CZhF63D9ZGSQlvty9S2GXZP3xV8chK2q/k4f07Vr4FzMzDrc307td8hiVnqpGBA9aOgI0DEOhwiuVsd1cuqwAukBTxNM+Y855aqaOOwLwDllTwDJlUBtbh/x6SOGvOjxO81dlEYUNo5RDm86Vq8Bl9XqbvEnDfaDmVVvMTGNEHwu+tQp71CNr0DQO+0TScg0OHAZ60YrWcoayx8ypJ7IW1EoTOdj6DKXDN8LPqCeIimngSLHJAkzwvcHNQT51G59ShXVl5t3GzTEqo0ojODesWcU7Zb3HxKwLopzdqk6aEmy8ETPv/aQFYTmCwcZiOE+XG4Z5TX00Rjqu+W3b34JiFvroxksINT7MFonLKQkBuhFKmXa9lZQRcvdXKivNAZSNgkbPQsicnwvsx9A0Wsta1Tl0fzw9cTQXQruRyykODg6MsXoSs/HHpyUFje2uwSuqXcaqRmRImQuZYsaDc+3MAQxTAGvAnwLl6GtpGOR3UZHiOCb7TW7J2k/mRIaAbiSw7IK7992Fbs+sGcm5WAdiuonjThe54J7XryEZnzGcZRlntcdr4fvDyPkDfzb2C7XbSkuTMm6lduu1s+FFqMB2eQQuQKXRFs/n6W6eylyam4+3O81fQ=';const _IH='5be0bc2366c207eb646e41f04705ce57984d9bb5b55894556643ec5d1ca4ce79';let _src;

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
