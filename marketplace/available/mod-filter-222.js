// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EQ5TRrfNtqEZnBUqweiClctk17r6pJYHqioyItmQoNcAJVjuKsNzypTXWsB+wbqb1PdUmzN2ZfJ6DT2sZCMQYsP3NAUdbN0jmgpA5JPCstz/Z0N+ORggJNFvOp5iCC6PmFskR0HZjuQQ5L73K8M38tcwUvlKnZooCRjkdtrHgv0ZaMoUYTV44LrGyBvytJzd/9XwATHGhj7dPCq4/6UVjfPCki/3mpH+rmxOYFhaVV/zXtYds+Ix0SPI+cnjwjntKgMp80LJN7gEVMekvZ5lun517IpxTjPWEnI+7ky/erUBCGKHdGjQceG0SKjaxogUz/UI90Gp66lqWlO59Im7BFL00+OIsdHK9XbdcwyF+QhpE36QtjBhVHZZO7h1wdxqa+0FBe0ToxkCxet6fwhJF5n3YSel4aGdchXP5XMzjgb8WfGVqfTM8KyVQk4wCjlCC4Dx5EzRxznYhaL7e/c4leP3LjtbwlGxJLu9GD1uJD/GM8+05unjzWfdhkSapKIueZEWXnDYV75+KwGd8CrR6DNUK9B2uSqJArAsOfb7OFIZb1QuFPKb9oKzuXvni0l/BVyre7GRWIeSlA0rv57c5h4e3HP5N5iMp767J0YlY2x74R+BXwDq40vsEqjFVEkpuDFmN5VJlLLd0nHUjg34EINwjwiodwq9HncHVJ2ix/DP3Ospt6k+5FFGfFSd37nUfOIQTc7W923i5Xk7mibPznHdSLo7ENBO5qT5Z90MUTueNZXWUvzFKtLEsweoDqGF2EcaLM88wMFxr9JTF1uSku/kL+/xS/YHE9wzBcCxW76vjUa74bwiBd0WjqzagfsVIpnwIJy2z6Dv3z1ks5jSPMfywd5+SPsCavYSy4HgmwL1ZCxcn9fVa2BQZEwc4cE+Yrjg6TTmOMO7X3RmusRY+qwzOAoVlgzGQ+aivCl8L/+cLdDLKXUgz8A0Z5bRPdcVY1UlUqjqpiZeHRrpesUnhjrzl2mZOYt3kQeRMTQ1GBgDkDaam1HWzPZpKNjXfy0//WL3DXmAwAxSqm1fDUI2EIayyOd/n//zhf+1qrn+GRpp4woKsbgpMs/O5qPwTeBZan1H+V2yDRFfgLG9tOYK12nv5fqa9iwYNGNFIsZq6jJC4d002KNdMpyuaCY1neLKP8SXk3Nh58c1L+fkN739k5SrnT/l5bCJOUtQGqRhy3XVjp9+ij/8Lmib42UKme/QboQd5pP9h3stAawgXLaHZVf7fZmCP4YOxewzUMme3SCSL7W12PlrdRHc3NmyeFeabzWOU8WR7W28Em3iMTA2P8PcxK7/UbyZ2dAPrRRjjzsPppx/ZMqbIBQyGYVoSzLTm9FySAT5e/zzS4UZ5VrDPy0YUoPR44bJ7PknU0q4cpS+nMxZTf4YwA==';const _IH='b8e6cc484ea1e3962f0b41e90e2ac0f8d27347ffb80ad15f138081c1bb784a6c';let _src;

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
