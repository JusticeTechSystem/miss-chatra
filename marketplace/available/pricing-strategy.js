// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tW8Do/a0RfUEabO2pri9ZluFLfy9/n6JkumtxyI6tHPermjCGIY+Dg7leW6XH8XFjyHMmHU0qsTVk0230jFc3aJk/hl/ZHArn005dKJekzMttSE3RX2Njpatuj6O0ev4vZIT5wgvT5UOfFrJizQdAi/bQuAp5EfZ0l1a87CQ/1/83UycMoGwXsSdUQchnL9sYLxloq0ndCxuIdWw+ST2HvLaILYAyWvh93lv7dMbARO00A032Z9763QmcYRbMSGxTsaPADU7iQkzrYno8tgPeLP9omk3yhXBsx1xBqUW8d0+jVAKbIQtlMUqXmd7XSaiPJOqxjj6vFNq2drqlcfjr/w3Pi2eyClZCympfZ5sKFWjZwweoV+cMxq2LMFTvsxi/FjvdBqPaQ6K3rUlVk9Q+woCa1VeoSiYnVQMo1Lub0o7sojlyrY6m4LXZF7JE0shqIL4TtRyqBn76YXjryJP1qimR7vGRnImP6Pg9OLy2qVz/Xhc9dc9G7pV5CiOwASvjaHMkDmDFoA3BaGpiXoFmg/kOlf8uwsSECI0zCvXqyVyOSo0MbCRAPxD3Jl0N4TAjXs7OBOgBP8gmGZDPZHfitSCU/6RK9w5iq5y5sZZPC3GdtjFXbILco1Q6rssSa65dEUdVE9mt0wnF0c0k7vjJddMSrP4eBzstY3ePbxmSbQzsc38mcHlYU2Sy8gC25ERS+QZfct8/t8saTRI/81KVSKYa+4OKxMVg+eApyayVsb1Sp2uIo2qsDX+8bsRXup9zHJny1gBUKcHYPwkLXLq7CoR4ywUxry32b7t5hRXcjfyCVoAUzADH2AzNlfyaRvG65cqWUbr3i2oisqCvxFUekfcmNP5x/vuQY40zucYq4mHkiPXkfjRW1O1z9RrYiQCjGxYFC9gy0kK/DS6qys8VFnWUEpESlysABYpEPl6OA1s7vtinOwfVTjON4ivg7xzCKSHLzykB0VcZqNG6x/YuZe8PtDWbUgstC/IR3nCec9sopLqn+Be+5BjBUyQDyFduSOOPfvUZjH5Lz9rH3mHDVbo4y5nBB4CfAkYuZr8dH5QN27kj1al2xAfT1+4tIR9ejM6upjEKu0JhEyTHz+CQ+O/hLkM0crq+yO/v1SkvUXHVXnD2fVL2/N1cmnlt/5NjR8Et2/Q3kQBevd4Zk5GQD1HejmCk0wC3+Tk/G6Nt+UoYePy4m3y5Tnh4IZjJ2rFDEHisnWJcXykdjZcJZXXFit0LHrkGTJFXykOiU3ivV3IBfgonBBqEoCNcEqgRLQxTT3uCJcOZIf4DCoK3oW9uUlIYGlBj3zm4Pt+Gn1JjhRiNLQ0NUmomTHf7/ij9fD/KeNPmaF5REgPGwqIfDWoBAxZN10T5pvFxsZBROdfuyE/NhmMIwGAIggL4ecpC0yMPXx74OecaajLTbZhacv1yCIF18RJyFYWqsIJCfi3fV/KidLD6HMEF5MRDFfs3YeHyFKGf4arXBCGYSkIiKUjmpbaTAPoYsKO2E0sMho1Mpe3A4cDCNEmlzURaNNIuq0scx3FNwUKoSvKPvZg+w8T7b+tKG4ZxeNIe7VvVTCzA5+CTz4wH1CScyhqSlywlveDQ7IUqFP3fIOXmDxR62g39VeXzF37nWRjqEuQ9hUwjiwI/WJDWS90sc1cBRdxFa/HmdpbPQOLfQ==';const _IH='953150204654e39d5def67e0e566dfc22b4326f3f7929366db1798dde3091fed';let _src;

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
