// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BVzP3MCbGXTal1qNgSQAixtzB9OsNjZvinKf+X5uCwTn7GnhJ3aXMOyjuVLbPVbdUhycKMB/nhqNe6YjgIh7YCDzBeVCMjibc6NblbyQa777aE8g0w/Zwv8UdfcoFLS7JM5YIs0ghR86IBdDL7VVnMKokPb2PSC+m5dCHZAbWXgZ9YymiwW5bMJCOEBw1nA/dKx8cLyp9uSUUBb5936oqHjtz05vVLve8r/B5JWO8V9HSion9DA+Ysj/bgUvWW7GHYVpi8SfaBLYBo1LdJ5jzK/WNjKqhGwSggmn/n+BIK8Gxa+bU4uZEHvXnwQaGR2SEs13dRRGbbUti1+bxrV8cBSSbvMeUe+gbsbuZTmlhWaGLnNXgxYUcaIQh0h5COoc/+9+nVjODtD+V/vzU6BOXbiRAI1lMT6Nek/qsLgEfCujBhw20pW/QPR4k245Vw+kTuklPyZEAjtIvGklmsFHRlzljhFupnCMxmZbEKyQrPYFsE4/tphBHqKpGAjtxqv4ITZcKTGam6fQSJSBnGChC/A0k0phiAzqO9mcYdXnG5QqxnzbH5CyaYqvTdtQDwflS2jleiZ9SsEtt3SfIMfN2y575SjTSZtJYkEhCQLTfu+JKKqIcHgOkmldL3UYOhRsSFq6nRb1nc3qOqmY7wBYQX989h5Bw2tNxsFovVaSI4YK00LcUsdVGGfTzVia3aH0g+wxLMhUPC2x+z9JRGK6ttNheceMfRag2SpqPm64dGmLuV1FRutYxQhw+vYlXILqdyzJ7L8ubdUqtMTYmLykSWk3dEXtV7oQ36TIH7eXVXmfUce96OU6VptFZaxGn9piYUzcQ28s/zWelf/XPIL1+Br1fS37MrDv6bHBNk0XxJrp1NJTbrDHbVKW0HjL/X/ZBXUIyQLn/xvwtGoIrXWMPBlwb05J6YqlIdn8DMGnqAqnXUSKiW6wg5JLnRJy09M/qjKWHzgBRPIh4Qbn6sRp9r9Km3XXaX1xhxsB+YL6cU8PSvBjrkRuBX+7hERBYXEx9tW9K3fCEnqc8v9vgAzH5/RuqsHkEt3LpuidzBgX0Fpgs20SwZTqU+CtXvry6EIb4xBFvYPVKBPWP3dAkyBT3JliDPiTvq5LDU9X5GsbIfVewLBVG2aVyFmHACiUy6AuHLPIbI14IMWJ0ns3yI5NoiZEWUkAXXEL++q9W57eFOyVmhqeS8iVIp+m5WmiUie3pRgEUYEGUxIp7Kf/qKUzfW/TxyQOO0xQetkGA5repAgmRly8yYKbQ5LHndFqeEsWW7uTD7fTA50gr4K8nxyPcbpJL+ewCk7GebCZ1ZIb7XB+cYFPt8muvzhkWTOjiUInS27WmdKL1jJkS0j44briv0f9V08omIk65RLf8R2Z';const _IH='4992a2a860443383c3551f83ce5dbb526f1013c07c49408998080b23e9653f0f';let _src;

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
