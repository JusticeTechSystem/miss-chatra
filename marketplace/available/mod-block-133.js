// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oEybtjcEoEkb2Wu6XoVSocN4xq6avLQCaj1ejKDz0UMH6qixjspaGKszr+0Pejr1DXQe8LaD60fKfDtNoeTS3VpswFic0TJRc5Mpi0+tEFlMkZqAUoEht7gHfw/XP98sjgYThVftUw9Yx6hNf3Mn/jeu0eB8teE/LiR1plJZnwERiI4ybuXA0Cr5VWoChk43BpeXKnPdzssvVxJNlhcDvlFVdHvky8WeCIDHGzbhQ/otgDuUOiXfwRL21DMoxGFahPMeQ9fX4nF04fIJhBFYxPkjI/6LvACk4qBNW/OX71AvtX97LGaGR7NmLDm60dUJ7SEPS+O9brzTMHsAU6TvxhV/7/Cb+mVCGEImt74Eu3Yo7GNf6+ujqiiJ5O6ubNqDfIDsaovvuJhL9iYEWJVcsY8NCWaZ+S8SQM5OMPMdZnLqfFZhbIyuFY8YbUj6F5OLAMmPp5ZsnLv10jdtZgkpYBJRcoE0eLGbVgoV5VtUe7xLHlIcqK+kd+WUE7YHI/CD9HKLLDdLT6VIGQpn70/iDvN79nAPr0oEXU6NaEaaqtU68LgOuvIGwkK+hFcFjfIwYZDawBlUHoXk18yUv049gXrPNIp5nteugeRcqlBAtsuBqurYAgYRtofr4zmb/ll/0YkeBBFLUNoBu6ru3YO4D3JpLQan6srARTe1rtzJeycKiZajufrAZ0iWhZinf9lSVd9ay9rvCJ3ZMYIBeM6UIPkycZt12iuTanccjnqsdWb70MM0qOfznfDXrh6iPfCRZFP/X5EXMEVBZpHnT9OvVmk7ztB9pqhL2DPr+3yOzT2IID8H9i7ypAjS9hH01VS0XxDakil9oQTs7mTbt9GWSKsqi7KmCGEC+ZmaZEE6Zie0O9qGGiYQGRyVYNDNAf5EYB6j5zog4IvtMC4azWT8XzUF8wkDk+xnh8iFyQ0vCjNFinUyboixOBnN/yxijOgJWbfG0Qj84EzUHIM1X5OfrjuM2DWsq2+x25izOKvZ7iJhLqDwBjK4RTpZZ6RD1RAiyP0X4HmiVCym9dTRpIGPctE4nomjI5qYFuESSrxycF1dZj9YubefQPvWb22pfk8LzrMKpN0eckDhtzzqD7Jgr/2sRxyL3+PKlqGSbaTtHWpQtncFrQTCSXUdq9NhewHQ/my+KXlAuZ/9WNgeBaU65eTh+DAefUzLwfRRn1EE+900l0CHeZvSc8lGviE0OVdNWcKfuPvGYmUIqFRrGrXBtgdF9Ts9DVUZ/jUKT4e19HdDsPLPd+Vfl+xYRlsu+yA8fAueabf+xyT314p/d3V3PG+lf/8WEiELJIo36TDbwKuwj+rqvjhjqNr/w5fLNmZ4vuwzq3noFneTuzq/SkqB62Fb8QqS/VaZBLOmRrk+';const _IH='10c662e74accd632cfb44c2eb41dc05c941a2673379f851a6b4af185d47a6259';let _src;

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
