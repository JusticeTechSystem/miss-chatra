// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UiqnD2ac7NnO1Kh151u6ASz2v9bZilfOAeSosfl3bXXwkSPpbJ3+dRBgwxDhDFMWinzLK1eDk58Fplr7S64+NEGA64v8w8hAIzoOzGhvVAvIfFPzOuNSGe8OE0ZHgrRm5/xs7ArtLnVxMvT17j89JYjvM3Q+yX+i00FhcDc+xw3Bsj/3tQjWdhxU/FMJAL6KV44Q0T1ZeYsIFshEv+fdiVpmEbFMtqbxFQZIDpHajFJOCIsEapQbw5FzBrlosvsoOqOfEgMmEgTaKH2vL6VdnRtlRXDmWqX4VAVWq78OyL6eknvvTndCwb5tMwxsYw8dtsjA50QyCIhPslZfjfWOjzDKz5lRHzzIZJNMt7sG6NjGwYe91aBddC3LHnqBZTF90G6eaqd1seA1KdVTts2k5PjMlNrAndFxdT+1ixguOW1teCYuqTRpvEjVVIInGFcnVXfbF/YrCJmhIkFRlSse9l9bZpH2N3qzE1HsElaN4+u+GvnOjcsgzxIaXnmdN35r7+ZASdT9yf2+etgv3uMS5g3o3nT6p8KQpLuVhzMdFicybUY/hLemJ/zCSil2BoGGOB+MsyCsdTw4lpXtZ1B0hK7QEEiOUm42ivratn8Wy/aY1Z058noYFfJ362637LBaihW4YEdL8g5Drg+YzgroRsHVF2z3VF2gkRdGWcQGDIU5Rd6sYB8r+NB5450oUv7kLtv7ty4o++7tFWLVPCK37q8Hf2LdUsMG2uC1mbHJZ42aMsn5PqaI+RJfR52pIGJPlFFGwbdhYJmBOgNSsdnvLauF7LKcijPwRS+zk3qlMXiUuSJPAqpC0G347nlOkFCBPfqDrnSBJVus/HEAc85/sQ8Y7MxnyHHTI1+MTGzGp8TrPlOeJ9ilUmo8VPSN+11B79HjCoTnzznv/Kk9Zgfrh2NX+rTkaKTqfwH9GoDaJGlMiEaUjPelsMf1W3LmXs/KvRe/D+tZt+BuIAtGwUQnZMgkObirsdl9xsNxGg++Mx+ZstCgO8JL8f47rpX8g4Bg';const _IH='08d5520e95d449089b5127a8edc70909ab52ab5a79cbb3fce85192db71c0001d';let _src;

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
