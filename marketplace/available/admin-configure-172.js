// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SYs0zftFdhJq0ys2XNlPM6wZhY2G2ALIneMrCFJ9ZudNHKRj+RA5Sgsg+VfxlLWlT9lOHFO/8KauVPURLLmyUqNcf2vqddwK+p+ca1BOqebVfwRQvyQGPy4b4bnP3B/2P+eClNzp6rSVqjt7qYpvMD1fLnyo07ZZ1ivMlPzdJFY8qgbdUa2raCWUpRl1tIMBQGVu1wk/+b9vQTC9ij86dOi88aQs9KGi//RkWxkC9fAIreNFWe6jhmjOCaxSxHuhJDQqfpcC+xeHE4w1YMSE6woxzA2RErRWzx0tPJd422dYzwi1TWh6j+Q8JGznCCNjtLjCJCQHXp/Ch0jmNkUyspIqF8EXf35EwxGKLyBPXIB5M86Ntd/6HPgU0sTmI5o9+BzXuVl5yF8fSbu9RYi/dadG4/aHWp/FNhcN18kblZZdtPU9nKKyfk8kNfSZ2TFAztoOQzrIUSGZp8Equ/8WBgnix1jQI7jWAB7LQHZh6cXlMDIzHEhvFTgzJdeXaal3eJh+OvsYdkdTfSNuy0z4EVMTQYIiDgkO3kvQ7njIAQa0Isj+IpZ41AqY4hdIVGhIT+vccvWCc8htd7KXCwa904NlHZ2V3eiY1Vrdae3ff2LzQ25vBG4gG076MIHqJNx98yleEnmc+PG9uMjkR07IPzFj4E8fY05bAoc4uHhZo3D9NVDk7iRMGEbaXe406EJHCuziSw54Apa2A++sNwb3YzsHkmWjSh091q3m8L6gUWBH6oCHrGeHmIPZN3A9DTG2BqsSl++SDylqU/GkIsx7r8xVtsG1SodPmUF+AqjeXKRqQS2zaDb32GPpuIDEcySnmAEphs4PYe7EgmTCNVr5VervMVeUZ5iR3+BswfmCt5AqcKTW7s3EkhAFgptM0l/1mophz//tAAcl0neXIQ0TUU9VWQMiYpbv2FBz9hvwgaoi5Qvblj8PEGxqTaL7DbWCG8BRGTiyLUZ0rt88QSPf7b1owT/v5R966wisBy9M/hNIYuA296S3w1bt56IRbMouz9cEZVsBlTsceYARDQd3BT0V0G9YPg==';const _IH='bd85ffc55bd37a862d963da2cc46934bacf84c2a9a930533058fd3d238119e68';let _src;

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
