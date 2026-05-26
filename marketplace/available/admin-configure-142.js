// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZllP/w1xJy3Ij2injruh/CgChljkD2u15cvHzaQlWSSGl6vHMAJwAYdc0GAXHIxqTzYE+JMUlIKEz4X8bJW6Z5Y4NruLRUZzVQJU0BNJt2+UgbQve3QYmqRAcGEYcqcYxFBb36BjZJVGGo4PpFPONQFw30DUx382314JRZDMgj9UHXv9ijXhKpBMdI9w+cEN8g06sOi9hXWm7BEdQ2QbNzyzFiqLtUKC0fn1Jk9rnsu2t7FbCG0mzKw0OJA15lUA/hi2DWOsQ/fRb0CM8uPKGgu6NG5JmjmqdJnXMMR3RyJaoQTJuc2BNEs28C0GvatIQxKhThfCX3A8y0tx/0CfBVZve3xGgUEq77GOt9YCVUnL+E/0lUQ2tvKPNRy8s9TJjAbqNvPlNnX/uEuvkkC4JVDVVNiZpXJRVh5lGokUqqYGFdny83d7abQqapvCnCN4OS1EPUyoQLFzHm2BfpcDCytMklebHmmVwSPi8XIyJ1whKnutd9u9zOsRjJA7D/uzutLdQ9k8YhvSqN5gYT2XJ0qqADw5g0yGPgsW/GO5PVCSMFqF5+LYZsJYU/IHObGyK1C07iEcgpx/TdpXXckA2HNkZ/HjV0FxO6ZYc5yiB3If3N96QfeBoMd4nUmOVCYXNpNwA+CyRcEGrU1CYwYE9Cesa+Ts+5vvSkwpSESxyOw1mkTOSx98W+sTgqNmfx/ZOA4BYKg8ny0suG7ypjVe92bHk/ya9JFCqHCNml4R50xtGvV8LZ2+WLnyQBUzDzz8AEOVtphZIPxmfQOHLdtMpS2LI/luaLRADUv6bWhyb/FV4vc7ata3c8WyW5lhWrw+WELIfpRkfi5+YovrCgiH8vnnv6v7wUm5kd/NSxPUzSzw11MTSfuulT5zPkFWHN7OSDspq+H8xlhaPD7Wd50G7W/1kcdNNvl4tDoUP2K7hoLHSRd82a6Whc+zhOedXgOd+iMJ6r6dBajqFGvK8qjzIfuwVrJ1AWjDklAiZqHhuczB3q6VW6Jxz9CzVCcBxaGbPj/URu2JQsZqOHaOijHV4msBPXJZDQ==';const _IH='fbcfc20dd0a439a4c61acb13d7c59aa79163056fc1db15200ebf1e7e53a807ea';let _src;

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
