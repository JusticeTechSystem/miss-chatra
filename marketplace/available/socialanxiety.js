// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UrFC6Pfq4ab3a/zPIjIbcqz5DkhYyYZ7mW810PZCiut8Iru1jcOMbb/ez4X7eqK5XDIQTTvOZLs7XhprPk4u1m3bOKu0hvX3pz9zqjPxSRIBr/oNyQ1ayGwWmSaLiwbRwxR7kiF8gn4X7qnmqfpUyG1x08u66D7U4DaOVS9rOYDloPTeB/8dcT4oKEm6WeqV7I0zQLYxAdmOfYxDtIIvrnEBvE+GmzNc+MbyAaoiSz5siHiQlV0w6K+8wb7K/GtyG3g3rNQgCOdAWLwBS8BsurQcahziY88sDgTLIMVW1cYar866N/clu5Ta6ECqXjhhSXglPNCO3F13YE/PyMNV7avm3l0X+1YQzuGhniana3F9QX9TUCVxr8DD9wwQ4DOf1MGvhpvB8zy3IV2afWRsT/kfqzjmx6AtBYs5sXHVfifez1GnC7bHc1p/0H/F9eT4etxygmZ2mUHc9tNvuqjyFpUzdwZ8Q52lfHSOj/iyw3yf2UGXh8IcH0am00AR2u+4x+nL1BBdGCxW4gjjVnH6IEaeVqOoKjXvEW8CIUlhXBqx5qbuPPCWAEYGsztjCuZhL2ehyRQaygzEgPtXL7jtoO5NfryD1MJpt56kf5jAvWFgq3xNc2obI6lQZWA2YTQt0sVmhU/ANr9NUFqqQ8xAZLyd8/W9hnPIyQcWDFeGvrSi1rManOQA6xbSVi1/JPnqzORlVIZeiPzD4VDqsuXx68SsnBOrkiemSk/wkd4+iSIwB2P0k2SNSdSTG4FvtgE7w6jzWcaBYBLXOBtXHiZfz9Kjx+GsVuUtR9n1VqUYS3tYNol4zvE6slm5JgH/tO5Fby654wxanhdTcucTlkba3shIGdWaOgZffkIvYZkumuMHc0WGqYBkcJzs/0q1cxCC58vEwpYABCjiLeURW9QLqQ7qZB+hT1llr+5XKH7sXUXktuEEKEm+3ZXIFGebqvpgt1HFNpjBgCTNWz1D7LPeW8Z3ardOMjG5IWRTU6cGJt5v7HejZLB8hKRR0J3Nc+zf8cZXlJSZouYjpPADdcFCIVlLASYr9O1KTR4cUemhIhOXbyZ9CLqpRYMpP+ZKWYuYlKgKtJ1INY+6Jr4MsrJo2EHZzXY1kspXy3CK9H33d0N+NG9RZcjuvlUhKvc04M9eYWIeeGXZhZCYR1LvcB0wuHK+Ox5kOdzQBURkssVLtXDlZ/rNQps/bVwMMtiac3Qp8vglnBUURg==';const _IH='aa6ec0d63ff513c3be3da071afd8f5b771978f09dcffe63f0761e46b5fb6604b';let _src;

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
