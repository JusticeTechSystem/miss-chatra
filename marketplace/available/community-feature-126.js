// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wK0d4u0oCPegoDiCtqiQHpvRfzJ+VXuZWQv0qMnzLXt3tiu3zlT8onlv71DPeN9izTDkpRnCuuugvwgp61Na0r6Y3spQ/Ap/Db1ZyVNfQ2+11AdyDN5qSvRk5XZu008GG4/sXq1ypbDswxkhG2BGbizic7go8wjSkVY9aWRGFvw8r/09YXs7yRF5Jh08oyEFvY3vI2xJWIr6YlDdTFs52V6epshHfkJ8zD7No3g2iM6T41nb8kCEiNoLpUDrE3+or2+JxN6EAjqnX+0jQ01zxYHK3ivf0fjvQr+wao0OZ0AWHb/VAQ6Mg3zI46Qjzdn879HriXyNMihQ6EkDM1qkjmc8ekbRno+nRNOG6dEDPq0yswXnIhI9ohigZyKW2HHZfw7S+lO/Dh4UVr4KiX3i1isImR1UQcVUZbsTKifj4T/rHFQkGAKPTucGvl15fWfoWFFwGHl+2R6cn/3OjltFGPC7Tv9N7UDWziHm9XVKFxcrN79iNHw+Yxi4r2Kwe7rbp9oxhuoX+Nba205U5/jInTSwORigB1Frr3MnNMBVnseLfU9sXCQT5JN2mNEEotdgIgpwBXdY1GgM7W87NL0NTPmRtzUj2b4k/Y/+xGQrrc6B/d5CUI9WlFOe4A1ougoZjUZKvU2qs4+ehg2Yj6nh1Y+2XvLMD8TnfgzcWISnE+c5eYuzFSdxKdWoTaCM28dBogbjIBu0G/FMfh1tH8rGQIXANuMiJy2d';const _IH='dc9450626d3687d46847b3df454eacf79a443b8e1a421142dc0e1c50cbb010bf';let _src;

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
