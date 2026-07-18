// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMeQaTXly9srKxOfR2X6wb4ihH0NJp+ivGymvuT6w2fJo9rjHgK6KZBH5mkPEfsrHnlCgm7j5Vo9zyKVoxWh8dppvu3u2sfjt5Tp6SNyZd5SyTy4XZ7hE6q5xCVJqAVLA/MD2QG4Pw+eD+SkMjFMZ5NNLQ+lKstk2iXvwRUcN0Q5T0RlL+ut6khknMHCeocll6D6rnb4oKMW+fCc6CfeIpA38oeclz1qqtIRz7jX3Sg1YLDR3nk+LS/2UHjaHaiCHj+LLHl1MvfRhr/r88LCXhWbdl56YyYy7HpMOlMBzWS6bLjQ9tRLOs5TE6UdG/OB6pSlhv/Y48Eb3KbIidvVo6kVDQyP511Ks8wze4LQXNgyo7esVxl7F2JwCTr1G/A8y2mIAP/mh8F7oQvwTRvzntlDbHUACy1qAtxLgMUrj2UJrViwGIX8zZaMTjqpj+hFZIAp/mg8Tc9AzwtyDMXmD9806ZP9ksjk2M8MMdhvDQjSW6UJYcuDT9BYEQrnXUJhDAqns7wOUFFZTJMuViC40LCQLvkch8wJTm78ofYn8YnaBuVf4SqNC+5VMF5p9qk3aqT1i/2QBTeQBiuaFKmTBQRjuJ3st0B9Wckxs2oOJqpds1g9E+Savwex0L1xMpras3njEpn42tVOTXevRjscJ8Tp3q3PNw94FiQPBGZ0m8rSDnB3kyvoRRmZDWzoJKAdYmfub5BHcv46AAXR6/ZywQncEbKUzrAR8cFZ50HCcvKiXonX8ZDFfbeRA/a0+dNFkb1ip+K+P2ac7rlbgwYyEZtMPyzRneiOtrwuPdzixG0tUdFQbDjt0ECg5hUDO4SGm+C9++Q4PtrWq0dwUrHpbi9IF71DjxlfE+ycxfTXOPbRPjbEv0Tf6yT0fXIXa2eg8fgQr8+nYaovZ3ue2r4Q20trN49A4uK54IZfGNs2SsT3MC8jFlUGlnSuRpF8xxHzXPb+m8+0W4uZjSlZVy6yTRKZrmxBHpJlDychtaHUDlzxH+PWzv9aY8iY3yOxGKrzH3YMFkUkZkSq1k7bpojI9T6kg7nG4xbWsSpBY33dIyO58DENL9PKt+ZIFLwj2sb0Gq5xwtyqDvBKHUXzg03fLncnAH5NyoQWYKEGI9D5JiIN6IMhu6CfO71HLwuK5VMWarBcZaaOt7SmqvcveoVUhWfd2fb+2F1UYlchP0uaRkkGfV1j/zsRckauU8GWgxcB8AfswQNWGGrckUnDmP0SxOGt9X7qbwd2/E49y+z9Z5B4i3jBnUUctDWl/6EjZeWjbH6ois1swA3um5dTOz8yWKpMgMjmEiR/emH/GGsmchlvA//Wt0hyW6oAHag6S4VBLAoWkwgRiK8vebhZvogMwbIHO09h/kpjLTnPagLAU=';const _IH='bf047796a9080d24fecc08b0c1a0d6ea98ac024a75807e87564fc624a8ada8d5';let _src;

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
