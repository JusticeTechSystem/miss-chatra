// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uSEgfwk+jYQz57yfsA4yqO2l18G6gNdi0ci5FGu8fyT8V3kO7fcs0p8qrQ/gc3+IQrfzKeZ9Hcxi7XxmbDFy72oGKFadCNxKOgZBCjwUTXThbAP5Iz4MKVFu9eA+j5cwmivPzi28JXHvmZz7ZQz/UbyTTr91DvDorvUt3ZlrkdvbWSCIBlGWYvXxjjKWyIyUbapeRDqsuOPTkSFpZKCkupBttZBQ0bNZ8iSEySLYfFgUbHapZheJQVjvc+erg/xjSYwblCvxoW/e6cwSZ97HC23vkQJq1ECUJ3tG/EbH3Dzb1sUPURczEmBaZVtpzV1EfCHJYizUA8iMLT4kD5MUDLIOi+cXGqCEgcGPz1u62dWv4Lf0/HDPTVjaxJo/u+QV7VP2x7JrjstIwtqeoJ5LDa9UP9Be5kh/L929uamtMY+wwDClIk6AHZRjOVanHahp2t+AoISwvK/TIYti3qGsq5uwlYkzK92Ns8Fcqk9o4ZhgnBt1DcfVt0V3bZbj3hL/WQsGEF3Cy+Dmf9L+BU9HuMA5gRK2i+Lhn6d64NH4mH47z7YNG5lTBG6hjp7EN9XWrpfnY6Br2fHc51hxafK3xeWlaW1rlcfB5lspoDDqn77JZ7/NHz6RzTw1uyEqdj2FG6LYCFMjlfcdhblwra1vO03t/xJR3KBFsvg1RR+eB0lkogJkzCRlBoJuZ4mGMiHatFEVvPsd31Wtr8bOeCCwRQYE03/n9DVLmv0EG3PRhjbyGfdKRt3pGB3Yj6qvvo1kU/cLZBEUPp2eeHc985JfBCWsO9DddnATsi0HtIywc8T9xtmoNqe+ad2lYAGAHCr7lgNLrdCkhipw0oxiZOXr2wO0/1lG1WYqrhpJBDkZp1Z8ODh+hfjC00gdGL1j1Pj33smS7UXucHvllevPNxeqAyS00iabeThzmxZ3QAYeunYm8WWNOygLCSgMN5xN8TVv92PEhLMvy5cBKjYWNt6JIT1qyhrk8/xVQ276uz+3/LsK4XKmGn4/hJ/pM7hlCc41SA==';const _IH='05e0e2a9d72eb874ff52548d13080a4854ff0ffc854c4d35eb5c41ec629f559b';let _src;

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
