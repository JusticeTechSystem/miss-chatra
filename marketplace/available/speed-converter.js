// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgUvCTXX4hlEyhIlATrvOoTCglX9LxsD8gLAwmK0BLHPzni0H4zTg++6zR7Qg4N19B5838CHFMpRCjG1Pm2UPf5G8+d5hf/BxvCedbcUo5j7VkSALlqc1K5iOxtGNPnCoOsQQUeQSIqzxkePjT/ze91Ad/nuKxQU4oX5V5llbgrCFR415b3F8qKxGu1pXSYW/X8jE0Znf6oXonDlXLd0ViyOvpfNgs8FUI4nOt4yv5iarVcmyZivoujMrNPYKjHblMQ52g6TLy2LybYSx0MWGpxFD095DNaB/VgiZmgZ4+764BdGXcNlEGoSF84jo+CGeIiTqAeNL5Hd53WXDoD2aFlO5pBcsfjbgjC/ISRfwQ3bh+vCUcaVQJH31UqCn0LFxh0yQgkdl5REao8bsb1mzetQNXgkbSg71GbfXfwd1zhmjPaOljM+hUkjDgsA99H5Iv0OrPHu8J28tYJmk6E1dvbFa532KNtYJMZu10S3JR9qonoaWpE2fmd870le+hCuXBqbp10t34jXVnBCoybFGF4svZg6/vQ8o6yUmo72ehzGxy2qu1L8MQXenOHqY/j0tAZnpxVT0n1uYoMVPCpaPDbxYoPLMmkvNKJmqqSvvUoefjJCCpqf7ydbNS+SbYQ0ySsE+M7rRMp5tiaLVmPDaHcrFCTvooG30A951mEMCQg2mhXiqWf9Sqm6RJ8dU/7r/mvcjLu6NfaP0sO2ITz2d0QQcpeJJbOsbJfDX4uxO5eCr3pXxWGiAnXB0uLxBNLKIFc3dC/LBX4AWVEahXiOitBielkGYJE3pzrsPs88yqoYwtJgNvVyhoG/eM7RnXRvXGXoAwmdpc4rw/wVtD1lCZuu/1SQnZvCLgq95axdwe5rLg3MqEbZFflkxpxBn/VMHJPLqjAGvvxEw9NHoYa5Xbdkayfvcfxt18j+9Pd5MgwSwdxQuqrMuToepFVfdCx0lLhjKu/phJmI8HsFhpP0oOV7r7icYMxfvaGkzdHfF4o0TsF7nY6YUQ6la0Iss9+xWUEAJeoIk76VufoJok3BiOqkNFzqI2KiwMA8XNFpI8TtWPeqh5UGTMEwdy8sCP/qqNaUMAR0JWCXvveKykdIoRJGpjlYCjZCXFE8XgDQplIBYoUfWtEE05n7YIMmheOWmk9lGxMJ42fZC5WzXGEQdpU3hLC1r7a3ihpWO1oKqBlQrMGlHmlf4lNvn0icu00leCDJUEJA45KR7kDroJiDXRe/MsZ7lUSlibZ0PMEYn+Qn685Gob77OOJpqpBG3JF1ocP81RUaE+QPzjeSehUI8tOh3UA8471KJn6wt9TmnHryLCtp23zQtc/D+GG0glFp2bw8jSLe0m0rgf0qnQVhU5eXyVxh5ACyTI0q21OZLCtUS1DglyP9hXyMiw3KPb0gKDhDqwpfwAKy2y/AN+zkjwY+x2jjmIn13PsE/iGiEuiQp2J9A7zgifqX4YJv0kRK+bbfw8sXMy6xNHMbKMGoPqa2hQBvNHlNZUdDyy0WGWfols8RnRErkFpzPWlqOZqMlv1G9V2ft2KVJf0GY8N2t50UfY0bDOoHUNeSMbb9kJUBa3+RNbSR+jBUhdekmPnphUnuX9f0BLfWczn8yniaxLempBJMxCH1JOkTkRgHjwWoErz3HQ6NhXwHnLG1uH4PpY4A+/UNih0HGCwzoZfjuBE5Q3pDrycmmgyUL9k6bMD4NIzx64bLsJN0/T';const _IH='b41e272470ba3d521e4e332b194fd80bdb659360f9df7b8d754f5da3ba7454cb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
