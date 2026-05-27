// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w3aHFXTGTAGzPSzJSyrS4Xgh9oRMlH5CRTqGVOYFxSBBc0i9QQ7IZXe0LT1OwD1uF5AUmnJAcNixeKJ0GnHA+uRWOTIeOYEFg7TrDeT2gi3lHcPHML2gdpUqVYek452DDVZoDgOGmr6BdEyENSXThPyBlIjiVXSsjY/8JWquiw7qtzLlQLOTXHaGEYLmqW0aKgSA6VcocfgHaWJhvGjSNsYHgPAliR87OGfu+sDKBLtADmzss5WGacUmleMt0T41v5ndJOYad2JNmn9Ur6VC7Ry5CxfQx3pH3GIPnACD7ODzllnF7loZweoeZLfS1jo9g/BwI1vZuO/W75+ssy8cPkUyzgg9qdHUtnwjf1gNxd/c34vrNJ59OiKRqjskjhEnAtrvSYnUBKX7Cyt3hRPCYbm32OeLiNgFSBDYJN4IgJ+aNZKQ55gXfUMhG88+PRql+qwsv4P37GLaCTVZ4YEaKC+sRHgpu+1BBei7X8Y8XD5e7KVWyTxJYxjLMGLpFWD1FKQ/ja4cD38G97Vk8J5mTKO35NMHWYOVtzF0XIeX/NS+UmK+LAIgS17aXGiRWBjLy2S+edumO3jlZdwCYgg76UAXnnR8SBulw3Danwk4gdiLq8Tkj1IpTZcqo2PGEabj1CSYJbYfo6NEffxUlbfGoRANYoINoe/5n9rFdVW6nn2YK0hMiTPe8FPcI4jw/qo4P42qiiypmtgScI6ZcF3yiW8qcK3ERJPTB02eR6QpTbJDzmrMOMnMY6X+GVFNbr3OgsD7gq1+R/P4etNcAu8UIsrr6C3W2ug1sje820qwf4rtDQ0wVtlm6AwnA3YTtvUpox12XjHZtxE/LSSrVuTdbUVi/L7z5gzQ/9AX2LLE/wa2+FPyRWnpzZJ3XHiD8Wp4CyOLHzmb9FIhT+RLbwO3BPYiwcB6sSAEgpBqwgK9tYEYbe0Joq7R6paF01jL2PpvLuu/FC7dIA2etgT2MKEAyWcID0T/WLitZqUmJ30pN4GPGMQjMZo4KjGikIxTSpJvFhJMXCBX5cDwi1Ng+D5xjPtp';const _IH='7a17b5708d8ff4ae1a0bea97aab52daed1f92225dd0d7cc2d757626a31862125';let _src;

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
