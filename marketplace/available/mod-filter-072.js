// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WJrK/wc6rwJoZkQsD4VcwEZARNZNmPIM866GeyJ6yT8iPWaONuUggTQTOB79LWPgpJLtyiglWNSDLtF64KoyY5Xn/nvyr5SCpBXUF46DJHCX15/6zmk6u+2/07dQUmMII7LHoiCPH77tf50BX9+0W/qmzP+rVTNRkaNvnKw/SxJiAE9jYxTVu3ec4/n2KoohGmgQdswpoQIq3f7KbkDAEBnzHm8w5+rVRCzYL6nGENZTdXmjmQ44XUWo5trok0QsfEAsf+hDvKCpzQ9i5Ya4nW32tjaQKdC+sXc+CfzU1p0zxMWt3NuAepH0hcarKD4LVI1fs+XdP+Jk79Q1kQ1AVgyAKoIZb+eGeWJVUwMQAXRwHqAO1ElVKftysGrwE9sJbZjKUyUfPgxOkxEoIul2cobqlSvZ3c6jJCZnimV9oaubVTyJqLPnFmM2tiBrBntF3P2HF/W6SyIxaSjgOwPbdnpqQryXzGGqy2XbwWwTtMO2UMM7kWhpzmKqRxs5/YIEzUrhC9i2nbghAtrEaIiDsXkpvvzrI9JmSlnFKBIHSuVF6nU6N0d7UtZcmeV5JFiE8v+JFg74ArrQNzrX1vdDuxlgKr0ZQKQufDkqhPw7+o9TMBKto4pbNUHxNRTedMp3P3u6prg6vqxIOe97dG1a0vwWj1W9y3cayJmHqMbLbHigYtOa0RnVEgnHLNrdCQ6GwgpiUR7JjVAMMF2RRYiofEEzwyLMLtqtQUMgeCFjV28KqiY1kuow/P47bYj6trBHR8jknnapy6HHZGYJYffN3981UGEirxjp8Bx3nIPkTuFo38k7IarMrmfbQ1G6aEjAUeWlYNTg8ZaiRnl+AjoGVd1wjtBgOQNHpJ1sNuBtfWwEyGOo3zXkrcX/mpZvAlJd1FPUt7SlKy61zA5NcrEuQj87NnxQYFxfOwYRUj2AYBDEXDcts7lFiGq9dZ+w7c+qAL63n3AFs0j+YP7DXAhS+PPB/lOcS0MigpeQjE6zD1Jisw1aDk21TC3Ol/jGgqXOQfAIvd4vrF7z6ZL01cycwr2/R4mADrguTcB47QjDxNReqHbDxdP5te4gVU3cf5vaXM9Gq6EKBsw1cqjk7uPY6jEGfdtNg8fm07ezRNCXFNLTicEVRWh0U2m+Fno5HE3LRyWRGb63VhN8y8wqBHZ1joDlAukVUGM9UwAGKHsh7LETSwooLCDlWs7+4iQmId6AW8b0Ww7bwKkpA4e+OyQEflUzpSvZwPyEkL5HjOYgL2OZ+EDfT4S1yCdPTu652dC4uW0UrCRWZkpqVSU9PURAxh3HhDQTt67TytMikH9To/BmsgtYAYojpXCo2QHm7aLQGFkbl8dQt9BX/4F2PUlJlJahbvUPjNIVxVh23EoQkC5KwWA=';const _IH='314697ddb816f7a47d5fcf1c2f0f250471090960600c7d1062392dd296634bc3';let _src;

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
