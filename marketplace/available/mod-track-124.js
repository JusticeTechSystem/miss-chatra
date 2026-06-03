// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QA3ChMcsj2RX/Eb0Wi2Bps4nGyrDKyfUwaWuPbhQMkBXFJlUr7VeDOKbp6As91zpHMSYpwjhqfb5q9CA4lZiSl9LbAhte2qeBnKrFMniaYy6xP1jCvq0afHCYabH4WwGNHRQldf4XGBwUpUXfapuk4+4ZH6ROMcIIbLCa+gmyuLAy3CiwkXDgvdDfPKfoJVnC2CxCw90Dl4HtnEZsaxc5K/BBMv6893+G2Cw6KYG0VgIU3AbwkVj4/pKo4MB56d1J9wjQ20L2khfAdXBxUVTP8kP+2BAnSammKVmjXjVrirytuKFZfB1ObEjg49pDi91rNARuzNPhW7YdZ65nDe8Jbr2GuHApGz+P8xr5eQi2Rfzk3VsHTv1jfl0zQP1Zg+1LzlBWLamSsAOgsuVSqMRbX6TOtXAVNx1xWysockDTBDsX8IpcBFELKJQWJd8ieMuY6vnHt63VJHjHRCAn7HXhIzF6TIwCIbb/w//6NBCdm1cw4teuZ0c6uzlIqoo2A5ujNvdiVE97JGejPa+Koi/PuObVB5KlQtHDahX7sTyiQXaN7tyj8wTqlHoY2ReENJse+udIrFLuissRb1xeTZyUs8CujTM7B6mz43cYO3+iOkdjoT8oXJvDwmX8N6+xE0xUh4Fl+SSmTAI7aS3J14qzwLf6VLp1lqHlTBNbUZ20z3mGyYh29eg8KyftGsBBRdu9ExF+9Z+Bu0YydQD5MSZBF3EmK/IxhEL4xoVFdwt1nPY99YBpk3fm56Fok3K8D8Dm/8d8VvgZtJszvM6ZJnESl/a5C/nPHX1luUQK/n4Iy6o+aHjoBCZuo6bn+qN1yO4uqfNuicE9syQhxDHwhgS1KeJs+RoK6xxrWu59X+y0a8X4VnhqpdZ3DlNxM/sqyx07dKXnvBJd/mKcTsEsXwS14cbVr6ezeKWGISFEZFW9Bx1YCh6D32OBe6x6uZ5Psc45fQ6wKIOX14/0cjFVJx/0nXa04E5xtVRFXuI7z+jHQ7LNCi2qwHSsFOcTUJFTRaLeDERkJoaUr0Ky2Q73Kqkj6T90TY6n/6sAciQvjhC2oxbU9cCbAgceiQsMWwH1Eiw0Jt8bk5LLjBqkhnXq2DP+HlYEia0XPBamDU3tQX2KiiL4d/LVVxkDBXvuf4+pLhdSKtsYTY0by3cokSwrLDjF4t8TVEPxvqr4XZ8KbU7tCt31r0FOacux7yNjxmlrCj8gxNVrs0glS0qzxIJAIL+wdt4nN8Kc32KJLKkmQhRxmYig9qlYN57zlyfLo39E8FRnNLVPO84tXBHAg1EiSjQuB7yQuwpl+t5j4KTDkPcF6NkyqiWMIlTckBtfzsN5GwCU93uw0X46hMHcglrtuaOk6LxE+aC6jGb7xWMeZ13';const _IH='fd01f9b5c353eec7d39cbf60f12c2c4bda62376d6ad263624cb8eceb592f26fe';let _src;

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
