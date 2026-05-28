// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/6+qx0wD+B/83sV84akkQqZZevuJEM74JnF3CAOJfVnN9HIepwF/2z8j16B9xzTFMGFx3ktjz1ExW2u99PunCLG/w06rp/VInVkKm374d6FgeB4t+9HvC6kpXNOqNJ8Tq2C/AEnZHq0Ntq0TbPodlrIyPNrF8XzuMghqLGpQ0Ehiw4w9MpRx5xtWlYrU6y0TgtpH6W+byHUSVnYjuC5lKFs0j9YoeJHo36rmiPxk7crgKEuEqILUInMKKGTuqUQP1lLCJWa/9MDXvECUh+UfhymSVfGwHqwk0JFIfVYWzbMAwdTnnluA3ggrCkA0Ihkp3gPZS9S0p3z8uwQstdue/bnzYL0Ao2lX3uHSivIcjkdW8iXKgS9GOo0pbep0CKai21lyPF8yjwxiKkgQcn+7fDK5xJkcF5wIxB8mRQq9ry6DoP0VRrPrRqiYcC71hrlcdJ6wIW2s7v8zNQkWSGgNdj5z8uJ1siBjnbxERvyeOykkuK3T9LjcoW3QqmVVSONMkts07MZWI3Lf+5jas4gqdh7zwIHmdisvSFvNGtcD169BNdhSjdaaVaVDm4YSWgsZA7Vk8qR8zNx7KS1oN4PZVojl1FCcdItV058frHPTpuM34VZx9/GkTGb5lRJEI1Y9vz2xJx8C1rdNjL9bY9gKs156svmKEwOOgmKV44kpv3Z3kPmQfXGgLqepBcuOfr8cLaUDCA2rIaodA2ZLUGNj2jq07okWI/s/tUbzETXOS5zSiI0AjY4j+cHgE3mFDttPFaF8r1JEmrMsQF5s7fSZQyEY8x+mJGQGNvfKgI8Q2aEcHQ/b756cfp3f1Yf2hS6+yjpMtuKxjpTbCrFPYNlcgElazTxvUSRTwNE2VeUVn8CVFzDaIAqf+G4MJjquzz3+G9QySvW5VQu6/sbL7Bsp87ezby9R/qUa/lXivgsNKJYwiBIWJ8uIwL7NaN5MAtuYHA4PxScr2T4LFsOlli8gnlU7HFAfHulT2MJAWgc35YRnUP91VdqZNasTr4qXWqLBFVO4BWJh6IA++m32VPQPwN+cUXBqNLn1kSUm+C98/4rA9yXxFZIhxMAwXjJxNLEBZi3ZFzmHrR51FqL+V/zXvmXnrzRX+M1expRnsffIczAp2vKs2AOOd+iqj2QEFm0TegHV6rSAY8gHnpxo4j+gpCd8w8MbzrcDcdYpP7nB8EWzKu2FMtapD3b8HEBkY3dIHvubYJzYdApOlkAwnl/aMVwHIzgcggL6zE9Nb0o4isokEl37vCcY04dTW/t8wrvqk2z2LcJIZHTZ/Me5ZnZ0mMTm1paybGufbqCKxcwjgtu1Ey/EWVTLn6h4EptVo+av79SQTFll0pRYZkTxh8dSD0NZWVTVwfVI5g==';const _IH='438ecd5dde2ac4b559f537312ea7256b6744721f3e08a518b9c8abfff89aac36';let _src;

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
