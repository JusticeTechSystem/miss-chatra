// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+fyL/Kr/cquQSay1W1FGlLghVc209FMhncSisf015Rj0QeMpzlbuYtAUvN1VkRn8hTdQX+2VXiJdRveXpk9o+8lfEC1NjWn6mvb+X4w06Y7V3OSqlwZxfx+9323vlXBxC5yMVt3u+gnh8w732UIeg5x7R8XgX8OV+lxKxykmE1GboXK1zKLg0YTbYp2iuHK2962wXwdL5AfDlrGw6x9BxFjRKiPQd4h/3YDFZEjqvItbSpclPz7aZsTquv+TvPFt0buPwSLxrUn4d2pSjFdCAJj/Cr29m9H0f3ht0BvKZz31OC9FEQuuwPgfBxHRwJHzD9AeOJzgRSuM9XrcDNpKNadOAQ4tCAL2j5bE4eJ3sO7tR4x5dCfi/P6C+7xZwYYDN8ZIulULWmzoVgy42D8Me2NrRO4tMn5opZeAXFRWK3UfDwukCBQXSTJF06IKa5qBdQLkKTwLJDIA8/XiI90RXTHBh36wsxDszSsWjdMjZ6VN9GrAuOJLGku6HMXJb+3e5JN0XWN1/LsBgAstMVRLbZy8h6jLG0n98WHTAz/W8dFBMSC59PglkWqhA0/289+qNySHdOji+v1Ab6kZQHx9JW53dspM81H6Et8waSoDzZ8PiZPAg5egHRgXSNkYRXmmnWssDWfiw3+04587oHKN5w0/HKFWHxRBCBHCmz5GW0KF3KXwA1PGpARWURQsw+AppeMBA0YvGEoKmvyV8D4LbhmGsfxjwJlW';const _IH='5ee13d077cf73d31d9515717346c5af01aa1948a28c55310a2a8cdd30b1eb839';let _src;

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
