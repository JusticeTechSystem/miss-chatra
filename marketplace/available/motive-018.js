// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+lBJbuSUHPPCrX60HXtmWYsl8ERVESTvjgot3HoMS8UByiNVv00IjkBWYmoqajEhMBwNGJobyzW7XRItFpSl856Wd762Mokg2KeXr/bcbqxLbw1mGrPVwVW3diKj8SYLDNEVrj3pqsDbXOAHmxfqSuyGmqUi/O/+THNU5+yapwLdT5bGUGlmRl788vsL30pvPF+xQvZ1+DYTo/scQkTHVpyAqyBu02xULWL23maFy3hyYhgMNO4zdK2Vu2hsRZSHXakcnO/1ZvmNVybKm7JG69g+6oO3E0bwCwS0u/IetseWn9E61MuKc/5PWIWj3q6QCR16/bhvnE3CFfhp3ucovZyJymzR9yzbovsT/tC69W+g9/ciaDoE0EV87KrgOSWcuvVh/vU9py5xfWoIMO27CigNriuUt/ksNa0SgcfGko5gqhV6Yjis5gWhsE9rDx9+KKuiv1+29euO89jLpuuqXGMBALhv6wbzc6OeKtzuNg9nyXIWyfrSK2pV/EHaqMYlPogHE4L16lw/TAHoSatx2uZ7PGkSx4P5kzrhzvh+/UT224VCZJ3oEyz8R36iENH6qIyOTbC+bTvpDQwtsr4NNQ4LKnYPLPdUJ9fAWkqWFLMeG/2WqrAi0i8itewym0yL1GZ2Hl7EEqkPBlat+Phm3IcqneN7fI5xSIl9S6Gh3DPYUPwyX0sgU2O+GCWvQlu/Xya8N5+Qi0Y2ltA+zCfpcVhsoS2JKXnQhSu9h4ggcpBpkSqCZxVdapvkg5t4hLjQI2m2YaYuh7rJf1tuWP7Z31MlrMHwgiGZwtsNCoCa8IyJAHA0v0kqq5uYB6tTFsRnqWxyarX6rNtw80E8Mjh5taR+4nPvAjWzRYz5r5HqvSKuh/FbV5dcR4TGKlzsgkE0bdd9bHqkjhvRdagqpxL0V7orUebBJizgglgXWSk7Sl9LqgGwMt3/pA6fiuhGuq2vuM742VHWmPtKcewJVXp1fJ4lsgcKHjbtgvvjpFB9Sg7lzNWRFYCZX52Wh67hjOit5rbWGLC5Huqr/yrG67/2y4bG';const _IH='2276223379069f954b7ecac1fc908666ea9da91278db5156dc500d66b1bad253';let _src;

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
