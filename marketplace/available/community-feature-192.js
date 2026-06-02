// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QKMMYO1fZDWWeuo/ep5FFoogm3JW3xxpdyp4UqB5nnPI57Olhqchiob6u9I9NtwL2DJQlj4DgvDdXPl27KGXoQWfqP7RGE+7b9wv01Ljlto1CKnzmE0k19DIMOG2Ue034aqWdgRo/dnvMTv/U5NKV+HmMwZgBB1xIxxE7TUjLPrBZUzq6z1tiJYGdnyRYNCe9ReqgpQSoiGbTI7dSH3mBcnLmjgGVLh/cPhg+jREtrA6n/tlvYZdNXP33ZLC8o7T0rm1IM7gd6+c8Smzvz91pBC78zQbtij9p1kCQaD9Tj4aWSjGH/DUqFt74C7YaAEaevd5BdkEtAZLrB3HpGPHQ+q2Ehnktb005k1lcM2cmnltXtW5DF+kdcR8QQRoBQ3OjRqH3gmLoacJjL1oItEXHdNjKOD2G5WoMqKfMM2t+XcmnEYb9DB0DEmUK6OHzPUJbyWcfVTHONJWtZ+4LejIdNXOZT1JpWXIux02ATDPrptyYjya4MzifLeUMUsCrjcBR8RMmR3CfU/v/IOJkBlj7rcSxFVhIePgVeyPUW+pZvilZGELXIGqAK6fwcW8Vl7nMcvF/8tlsb5AQFvflVJX7RPkXZotZc68Kj9/mUqhleKNtN/f/Tc/J44vdsW4MYdXFv73jDVIdlN1rrL8/Q3zrq0k94dat5+KBGPYRnS/PSHHu0mYygRXCDDVjX23Uc73VQD3xEDzdrc7F0VNEhHCLUfP7MmLT4BD8oxeMuY4jUDWbGY=';const _IH='e94d7b6a22b708b0142d7cd8580873ada8ba8b5755812d68d394696484e3beee';let _src;

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
