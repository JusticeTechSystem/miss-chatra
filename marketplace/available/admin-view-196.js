// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RwkhNsT8jxvDR/JATE3ZrmKthAsrPST9AxfHuPSYIjqXXiXSju9Dv6kFmSxQBfHDBWyuL/cT+HmG/ThU+oJw6eD94bWtUgdN9cKJ97XJt0klErpzs/+f2B8Tru+YVlSrHYlCJ2ttq8pC6+SrQ/THdWP2Bhrx6DMen3GGJHn9MRWoup3U5wOCtU/VV1mOnFTGajs9BiYSGgVLrqpx4PIj3s5Wx3LvRp7eINUkCW0heJiuTUpBF3uaye84SLDZ7QElqSAAwYVOMku/97kGboXQZO4biV8kCHTghxC6e6CLC4HNfiKGT46W5LxwxyvpkHezML6pXU16BqD3g6mOpEUywKTMqAc/hK2uxeIFm8QilztN5wpxZvKCFekFzl/88geT2wtQWPBjzyJDe7SbtUEfbj5HDYSm6xTJ7I6nEsdB8KsiI58Ha7DexiB23tghVQ4xupV06/LHElYipuOvwxWw5iS675b2IRstFg+p4pKuKvGfyWzgQ/YR25Sonye1BftJDzDCT6YggFW/ByPW3vMJg4NvC7DdhlmcsRxSLy0lpNAoV7jJXTuxj3anYz6G8iYtPuI0219x6jWHjvmYarKGVWiowRUaGjNJf/AF63Xdw1oHjF8r/HbmcG/CxKP6uoWFpaTvjUGuZkPFJu2W9GN+V7yd0JKrdtrcnIpazO7hy/JfAOYFAuvMPyy+R0NVNZMKQJcuBAckqHzRvXBiTIKEOyg8Soc1FM3v52gcWvm2f0IjFZMJiYXTKhLNoL/G/s58Z4kkccphjeZfWZjbjBeincTTVo/V9wNr2xNHMQJ3MI/XC2IP+qpTW7Xzc7F+r8VmSGfA2LDOB/mvSkqKF6rBmy8ikhgB4TCMNEju9qxBxutdbMev/tMouwUmzzZ0XIaw9UUVc2UtfeVsVqzMuBETM7zTzNglfONhItPH4sEVnBM7wKKnolGUCcBkBb+/35yiLWDPFUAiE6cJGyuyzwn4W80W6MiA8weLZc9uS6+pyyerUWM=';const _IH='75f96760eca8d1df93bc34d16530e2151ec7642c25ed782cec465808b9c0093d';let _src;

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
