// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EqhNqUYZknXbGPzr5LxgG8UWhmQcjqEOkIgbVEtX5Y70DGzTaRlxnyITvzhtVT6JlbfcinYHkE/MI9jaMCXq4Bkzst9aJQBDzRlfd9yOuBC+exnhFV3XSGuGEjV1g8L5oV9V0F+6dcrt4ze4veUSwcZbf4chwFBsoF4AsLs0WcFoOCyBS7Xonpy48QxxXT/oRm1lqHP9e/YVvADMAuM8Xer1S5bfj7EVGXKOqnLsNiuyt9J//ak15kFChr7WTT2/gWb0xCykeNOphrLClC0iZG82I2KbMDwNOyyOfYENZRLivOvLNF8PFdy/UdCtYEtqqTcKZQxpEYkzeNrKC98ELg5sWyaaFXbDSpGG9sd6CbqWWZMIM2jWskjioubO8vZ6NXb8tsCPiS3jSU5aniM3Z+bWq6uPf+P6XV5uzBzOQJppRFKnD62AKgDLAKcorauYBKB91PFP2lbEijRV/QeHwT0KkI4rSy1hrbWpSwAPFPJuZ2ic4vUrX29Ckt0VpDQ+fkX0smc2rONZiBqLYizWkYpnH0z8pwmfSJz7h9vDctfmjoXSN5YflFkEFMpHV9l+HrvSWzRtHh8TnwZ7ntLjj0u7BkB/mG8xNeU9jHHiD+Hn08wbG8IDCPKGui/CFVoQSuWzOW4wqdACtaAvN8J39vhHnP0dQFy3MXtTUzFjT9PzgUzzQDIpd2ePCHKzFaC6aSJcQNcMwvL1ZG07k8jv4RvXl4gOFktEMnYssGlny0BEqZQffvWjsA9cHm/ALEE0IfEROppVJF9g9huSWPTACZ5U19HeV1g8B2J9tshJpaZZ8Xaru0K7wweTyy0gQs+gMjB4UQwHYUCAI7D+d+s4HbMwdWDqXHTntkctiy4XVmdmmh1mloOygHPFwZU0WCz8eehyuENyZiayFTVG6wuCNyQNT2nZFmL9z2PEk/9WU6G3AAv5iIy6wbQDrtkZUdj79WMr7qzos4+p1kUcS+KdCwEKyd7q4Ij2BZqg7Zbf1vtUUfiB0ZcLFdwclhOEsRjyAHMDg67ZZMw=';const _IH='2bb92fe0f7c38a3897e7a0b79572956a6fb91852a7eaf229a6cbab69d59f4360';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
