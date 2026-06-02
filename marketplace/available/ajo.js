// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+OJjXvL2eCK75S5/tnFSTHge9d5j14zYKIINpDhG61ceqRimilYkN3a0N7yX6SPcDbeThExmC7o+j6XCuPlSmEBALQO4uYS3L/AfTic4YjsqFux7dFxPjIlcA/w19ncVeKzUiLQlW3UGWMX6dKhB/q7mfOugh199KwMNNJYi0XZHUCl10QFaH3CVTFGOzfQKkXU4P0V6wXYZCRHLjbA0a7reptE50OsFocXvMJonKN/vrNuyuTEkz7MWrwHW3MgeUELv9Wqe4LVmWz9o+fTDx0PBCaoD0vgzrHxcZaHh+yRin/N3imIIgqQ45BFxH38IxI5GWm4nZJE56HKXAzqNa9LQ91UFyPqiPpIu8h90+/Mm1ltxUpqWIjZ812NrUQgH4ZO7dMjCSE/GT1KdLtyOw7IYbQUiP7rAi9bhAQY6KzmHt/AEcr+eZ6SHJXlNV4G00KrNXjJ51YnfPWyGcktrNTQEft/jDpzK3dPx7HmLxaQJjw/aJf663YibYOzFboWwx2W+yAblsTaDkMZEfUs9ozhkCLwF/RCCk41nGUMXjGFosQbYSVgoju8tuEZx1UFVp9+JSiuHWwx2dBe9cgMxDjZPNvYX1AFKZp/iMDyLfqBDlrJjyWa4sx98pY7fe4K+m89MKpAhuo3QoJ+U1scDePiJzGrPSeXUuwsrSvwBGT+w2J1pNZG9Troxi2Co8Gp0ncGuRIx8JjrGYiZeJlTi4l8PtJfzRVQmzmOBS/y7zw+oLyGGjnif1XJXOJLKWz1GcF0NdKLwqF6I10EinHWD1uxwpcXK1Bm6XcqNwU1OrDL7mxebU/NbatGhN0isBq3UgIpIGsqpiXscjvzekF+7X6bH1McoLtOvjlZ8iegCUqjXN5pYZNlubhloRBXQZ45kSWY9RB3zd1iIUVM+Oeeusv7TndktHgukwcDN3tBeGYMljW4Atdi86HMtk/0HGsn8K6pBK7jnfggAJYqchy5+1fDd2tys905J2S9+sVEDApF1xaCbymVzDT53QD3+EpmByOqlvfY2Yw56t/IAljOC7QjIxWoyRs+yHkxReUS4/cRmJg5xbYrghGhqliJZ6LB06oOHIL26B7PWNmwiUPHcFYb/6AFBA54c0BdR6CHbtDvuJNt9U12krfZXawdbEqSU8eSEWSFiI4txfpH7BMe2Z/Is5MwnofRgVu+SnnO0iQO5TExXojsH';const _IH='6a5df73c8c8487b293a2961b1e7da349e4f3e1f78fec123f6e07126de721ed47';let _src;

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
