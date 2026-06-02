// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uF6bvQojT1kqNwX/XS7qRQetKAXP+6JopNnDapqzJs/VKtgYGKiNWDyW5lWhF2dxt5LPW6fLc9DcumompP6vzS+GYOpRkGhXomm8nGx/w5Hhk9ovoF7Sd+fmA1BXK8d0bcQ1B0/O82uEcHlyBL446btPkHFuKtnH4Mf1u78DANZrdNDqh+Lx51O0XgB0httpogyoWmQdVyBe+69z1r2J9Rd3wE/jv9Bz2Imd3Z3uX7lyNyNv4rAnwkQdAO6gyvez7k4BupUgwtaEdTCpwxKTVLzTsiwiMnxzdvJHNpbK9GQdwLqVXuZZoHqBB7rqT4g4kazrv6WHOP/w48X8FM3c6qXUOPZ1ay6ozZV6Sl104nK3UCiqsqop757jlHDBSDLme5/gcN03X+cQLXZGL0VfxT6HTw+oa34TUXDrvaFQHxr8XQiElVT9PIlF0RlJ/VxfNlM+znjniSr5EuK76nVQ4U9rSZkkN7ZRd5UXXRqi5jXnOSCOz9BxYDaSYykDyKReV6CaCpBsH/eHJWCSOEgjD2dFur36cuky4NvMnUmfhEnHtc8s725KstsnRryTvw20YtQ6/tAYF3yn/0sdWq12GkuGRq5/PzqDYBeTkFdpNLXjnO8R9IyBzNiBbM3rRP4M8MCY2ZWtkcNtzWkVx0vJCTJAh7qh+4IoGTUYdeF6Rz7EMH1eiPs5Gu6436sQNpWRjS/hPrXxYr5NyduUUyPUR+Va8pTZP1nqY1uTzPnyg2P+X8z/Nzm2p7rN3FI94+VI3J9qaFWlt7v++zAT3H76LbDoY97maxVsytByzvVQawJgFzzxCjsBe7uZ9isWJU41Q+T6EbGUAmL6KX3+5R655Q1YDbcGQkMf+PRgKdpPXRL6D7APSYmqYYJkSx1tUPndpM581b4YiawwTJJyDqNpEiP3WXmhsvh+ZWGNmgDOSCidjc5hzfVo5NZq5S785YbJ0ikyBJbntB90Ole4L8TWbkDb3iloZk/Kua/Vln5EbD7oerYO2XELbt0cybbhvzfknMn1sVvDe1ljXnWaiSbuh97STbULFQu6TKtq1xJv0TjCYZhrpqmuNHO1L9l4221MWH0CApCXXWP/YI1gQR1Z15p8H29yDOTmbik3YWXwwB1YHCjbAumxldIS7YeXXeDNj63B6Arv7m/OoylI3ICZb9DYUmt2InS5Q9IClaNIjXluPFC0jQDaWm1b8RRkUW5OaZ20N9Usmchm1DMfeGSYGe4s9JSGhryrz00NlQoqbCEl4QV/rm3P+TvV6cewIdKmxpiDyW3KStHaPQ22pEi07EeFPWgPqvYNOiw5wVqaS850ijA6CJPGBcOihK9Z5fZZv2vk2lEU8h/ayObg2I5UdWwrfhJP3Q5iGwUEmvVrs8Md/3FaQ5II0w==';const _IH='55a2ed753ef9551660efb2a26d712cb62ed8f303edca9e1b0d0d7caa10959f96';let _src;

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
