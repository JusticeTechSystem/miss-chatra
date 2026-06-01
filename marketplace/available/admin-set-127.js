// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0cp5d39sbMzy7AgKcogNL/iRDm4mUef3D+o9Thz9F61XSn5b3oatHqxQ+S974OUS6MWyfo1VZEE61M7nvGZeUfh7zWj7mfDya151KOT6D0BYrQM00UXOSSk4I7v8WmtXM6+stzN/FhLSRkj/r1xLdQSHIzU2xMBd/WMPrmD+AuKLLzAzfc5nN3eS6i1MQk8yrDMEaiJHn53YxP+Dt+4/AFCxwlM/QxdtCyGKCsQSUg4f8hu7sQMr+xOlK+OToGgiHc4Y2IBtLQRNWvZzOojzf2rk6G6iePqKoGjRV1s3ki8aTmTFOf7g0gfMGpNc92naTog5yRvBHxKmC34s0cCrMQ+NR6NESeKfnfRRzLUIl+ubuRWNr/zcwA47uiKPCu8Nqie1OYAMuR67Z8x0RJsrnJwOm68APkM0NPnHZjoQUXdtoYQp0xXbvUIUB+Jna+HhBAew13B/ZrnfJiCTYqthAJunyqgazcprge9BMpuggHW6QF3hvH6dNl/nawyrDvQhatbG1t6AfvSbpuqlashwYNGnklTwHT8x0sF5DMviiP0VYsYmsrVUqgU0F0DECdiq34EdyiisEWlngIhpJFzkkOUsuhrfBXP9oeOrePm8ooaWmlFj0IAblePj8lmTnvXCemT45t9Cxs97sst/NtOhc9WvdRcI3boz7R80UWo6WR6qh1Bcx/vifUc2rs0YbdnP1zLa+xEX5yCaCKv3lSjZGPTd4kx0KaMjdT1rbT9WkbXWk15Eat5Jh2pyvNQaStDTOnqtpU8jiM/+wc+FemedJCjq9Cxg1hjR/EX5xy8AvU78a1rnpQlpE0WlnaokxEnOSuu29f74VSuzBvlTqRtIvAc4g+B2iLR6Z5RrJkunlCBh7AsKHp37TNcdle4FDMQSokkbDgeJsTSRN2ORb/Yxpc4dsON7/5fygpsvQsiteZvyjIAlOAlmn4b1cyDpy+lGjJQPdk8eifkGCQfyVGQ6Qyku64x72gnt+5JFhk=';const _IH='ff8635b305a97fac3999132ed7d2d62cda3548a2eca4c9e118c01cc618781b27';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
