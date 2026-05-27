// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v6b9PNjr1tM2as38imLSXGjCyEM7TkIUGmWFQsjxdcvz4PwELSU42sFi7+/CPY7QqqYrO6m7c6dH0IKVAnoDY0Xdp8A9MabeP2SjMY9hsSNqpH4VqrTrZ3NvCZH7NaW2kOd6aDbV8yo1HNZESO4cLgYmiL0sSM1JkF2hsJepTfUZsu3lvMa7HDEcC5Tbn+dxHXwX7WjFgn3tdnTSgXGbcS1pBUO0x19AcZywOU/nEJdAEIKlrsn3d6+VkKTzLiPZSsTDhhG82AKrhFN1fwleQPE8IcD8NCIbBLSbt4rdPV9ZZKaz/OMKO8liYC2DVb6ipFZbDC9JiNCRlaQ3OBQ76lDtpp+3uX8P2SS3wla5+cfNre5xXu6Ly6PGfn7AJXAQnXx4JgWskdw2LZeL6Fn0UYgJz38o4UXVLgVISXYuSm1z6mCZX+M9WMVGkqPfuukjjIqMuy4li4lLMLgu5rmvD7k7FS6HpYaL9kfHEhPJxz5NmPwgVTZ/AhTRd0ixvisB9HkqM55lP46IcOO9FzpPi88YAGTIiekZdGvLtOzYzdn9rmHXUA8w8rSRpat6fxdfZRXxCsbFUuN2sNi5xJrnpi6781hpygZEM45vAJHBWowUkhH8DidDsp5bJTZmDfoEwkeDsp+2+yPfF4p74e4b0Iu3rdGtVYk+O3vWDWXvhaTwebDNaT/gL/vwnn0qYWWqdFMy54loiIARXDjJfDOG+huOyfDRrSHgdzs4+kuhJvpF61pnfPTgvJC8EbiFCvYFdXOhQ0D2IInsRPsvciGW1P+HcxxnLBsmRsoqpIwFmBndEhI0VRMuhcOIoSnytWFHcIArOUuNxTRD8BDYkk2U+7EqBqe0q3RaenjCT4qzhOaBMEaB53IgaMW5P7FlsMD1E0tjyQ2DegtLbIK5ekd99m2JT1DRqdVxlH4+Qi1kXyjyMr2lUqy8QCEqzZN/kpAMKjUSPCeQS+piMlVw9TkZ4veWR08+ERN48co7rW/VXcrhqh1P6YDDw08v1NHSK0X8rzHFxQ==';const _IH='995105be0c175c72edcfe043d0b2e185680b7903a86c497e718009a76bcda64b';let _src;

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
