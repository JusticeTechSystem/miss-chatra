// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DhC1tQZeEBn6m4acyPNCTjiPEbN/ou/NEdY34mPtVVNiqlr2IC2AwhCPYxlCYLaRS+pDSzOy6P27wEHQP9NYavZHnb3zDp4z0dD5b6PUIjiWWSsQKc1WLiuQrlIs6c9R2LNex+Rnvkbj2gb1LT+vxvyQisAr1AtoVnJj+HRzA3WTySzMTUZ4TMB6qo1hf92g36LocynFcJUXx9nanibhJpy3FTcpJOWs44TDdmV8uIzbThZoUS0uxIcq9816iv2iGm+hlWyuXtMt5PB12pyQ1U/k7ADNbmKRUXMmpy2jip0VuOYreKoB375vIH671MK6Jzmv6GQM3oHodpxFSRJyd8WurTrtyecaojnequAX0fjCR8YgvTx2aQkcNpZSy7MVf5nDd1/8z8Rq1lRjw/4gj/T1Hgqfvv8IzksSsj4YMmRt88tOjETe5PSwMiX6NfhRtBGUHJzHJnnua/LTaIGtdrSf7/U8KsNBeLfwN7k0FnvLbcY9NV4U5hOjivCF35dggqJ5ZZZYm7RPu0eMxyBo2aA9OmnD1WRfqFLGhG6fePdZO3nvttEpL+EN2jl71VL30F2hS2r1YqpDxeBUg/hYD9SiQEoXGkU9RSIe8W7cEwPVE+rECLJBGE835dq2ONwNCCHZST4DhQiw6uhfi0KUO4024shEXfn3cquLiasLIQAVpEFnb+PnXfjDhQ6+o0UwobBpF5wFKU1C+9hEyjHWPFIOsSDm33jqBifbMSjNpwiGJeKt6FcY5DSEJDyhVJA+3t+n5R67ZtpaLzouxRbj6SpCO/csqBzth+Cajf5SasGao2a322Wb6WyCimtuKqolWQuUpWDoBV2XLyOfqpr1WkmjFAKyAErJncxOoRHgFNdyCCUYEiRkHnAtRBb0NpJO06IpWUDJs94GawuDsXfg0zTSCryh0B7Hpl5WOCWq2NyqM/5iu4pXK0rGv65AWjDht3rlB34OZxpcP6qz12y0iq9gcGwhrZn7KqZJpc/vEYvYUM0oZXVn9C/7nAiSE6w78HGxwq4WrpfOWBZKOseDUUKm5QnNwB9/XrQ5gxaCPEqANUv7QWvpoJlagVPCggxjSVnFCUc4LrHNsUDbsqKJ86Y70JX2T053X/rH4de+6qUqfNtnlMJTtTWEQfOhUEsVFoJ8O1JSY7PZoBFHluFGMzOv1xoo3Y4Y+6rfVcYhC6yyW0IVon+x0GI1Ks9rY5iMbMftt9T5Im/jxIQIOFQJqC7nAvGLTyQv0uc7RDPTEHZQbvzxWwQ4or60IxLS0MaNEi6pizfIa3NsnrBBxLsZj+bqDXytBljkgl+m9OB7WEGtQnPW5du+KytFWoK7NYfHCYbN4erCFimhYuxhQ7k1UUyb41bfE+cz3PozUnHTFnKA5oFE69wwijJ1vSkt12o+GKxH3HRJ0c8/e4StSM5USTYxw91oXuLKr16abAMU2QmfU9Y84FKGambTbzoMLr9KuXhmL4tM1cPlP+e103EECDEON4Qbfo3wEnSLmEkPSISuzDskKZHFwMKTzGu8GHq2lOFYWZSkOOmcq8VImYu5thwwzwopxSzOYt8NCTWpP9mplqfPRnDqZ/D54ZPIPLRRZrFq58l+dol9DqlIGyWpSH6dppTot38OHiPxJ3/NEHBouBS8WvGg59BYyemXowAMVoM7lZhl8kABsTUZOvrfKZp9cjgqsq279Q==';const _IH='53625e42dd239ba3a555c37e760f0b9d42cddf032b109601ddad28ca199d4305';let _src;

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
