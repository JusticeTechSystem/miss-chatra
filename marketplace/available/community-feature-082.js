// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NkuhssyrJ+vQpwybqLNzZz9uw70WtYDxBpPhvYMh9t3OwtPX8pFr8e85BjitClMWUGSQEq8VWHAHxhViEAvTAOSAMMt1+6/wtFMsIxWsvin9dEL1hC+9kwr7mQqZ/2fRJF1s6F0rn5kE1klai9T4cjfYT/V6hYgDvnJogLZr1sJXsUt0ThaPFTPb8J45LyYjrJUL2VJ3Ogr8FVww9Eee/x5OIeDZf2Rt4XNWNwuMttbctTymtd8/+JVXJEjV4wWOZpHL692tZHijQVXBvyJ0KsKVLy7hVQjMc8+M479scSH+A8Nd7SK3DMQuqS4O87sr3tAVhjOxmjG0TZmZh3u2QNABZC+5P02SDq0vENJPYRVt2FoPfL2L54ssBLz3KKlzjyMoyPhEcD8oRkoz8K02gpVSQmzkK6RXDCcT9WO5St4ROTydZFRqEKuR4RHiHkVmgd01URxqGDR6Mj/uWwy8ZsCJvXrAksTureAsuQ0sUt1GMdbfyoN7b4G2Ceqx43zWGErMd89NBz1y97xCvN3RkpzQgcWbg1OSveC4ywf+yYrxR/QaceW6OgZfHLTYIbuGl5QxuFN7WKwr3gWZ2scmCIvY4HuoHSWQCJ6xIMOExduhBHND3m6g+bnAHzO4Wxq2uIiypdkIWGIYH5mk51UocuubzXG/dTI/aIJP39QSfN4SHfT7tdtu8dyLgnHCddLpTO1VtvE+y/Y90MDLaKvhdGOiC44M7j6UVWI2yDyD5w==';const _IH='b93dda0f13a3cb1643ba72a5eb8d82e69344cb74571a095477ec06999a62b1e9';let _src;

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
