// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QnQhqME76YiIqS2QbLYbLPA9UJWWJk2of45zYFYpZ2rK3QOLf7EMOTDtbfiKZdA+C8SWeSWD2xQWbBSpxB8yU4B06SUysI9pb3hcEqBTwUiAPP0iCfL8ZhBFAv7s1juleFw0nJtmRdrCcwjfOFEn6GZoB6FGfpD3KUzHlFHsDPNhnb/YGr3aHoJ97X88alSXy0+U/VFyIyK94NwxfGj1BwReb96Ywl1rIOFVedTS58xGFP1m149/yky7JXHZkbJAhrcvQLkMbQq+6a3De0jVLxsHKULCsmV6oC5R2RAuAwleBPH5+uuj7b/bNo+STxKVZVMLKLTuzTmkCc0+vaXIc/iPDiZYIkULcUhfDECxrlmqFrWOLRbFqAiX3WpAQ0/kuLPj3NFceusi8fc6z3JZ9p665uYEjxJh1A1PoRLeHyeFLCxR+QuMLQZuhNLA8+eSCzKEUew++0ipibpXobXvbhFr8Q9edS59+x8KKfzOppYjjmmJ5QBYsBPVniZNpd/FUtPZL80D3qvLsriPaMqjsP7udVC6/iWVNPPth0ieAosze0IU3EZn373NFYyHQOWSfg2w/YuETl7Egj/vT0vDRReKwsne9t9WfquTAF0cemPwuZR1kAOCF2ndzG2eu9JstrrdqeBW1lPOm+RAVoWL3mmeb0QIhDZkenGtnWkXgqPPbKxE6IcQ9AKOLIqBb/OPi1UkfkSgIKR+9LJiByHmxnVoWKhJzxh21rNQHAnY+ek0XB12Bb2ibGP62lqF7Qt6kYd2IDFK3GYtbza5tJlDxzbPdL/nvpCJkyrkrGtf8MwBnIwOM/pcQx1yWQai4VIL9G9+AMitwgKXo9JU6j+M4iBKAMqmHGie8m7f8hB20oLhAUy5mUFMyHlNM4dJcxlm39Mb5KFb4LleWayZdyocMuZkYld6iMU1w2/F2Md78H3A2TsmhZsOQbPYRGIjEs3hPkZrIuTwytKarBv6w+939HMiUIwINGWTszTKLrOWcN2+zHJa61QHIm95AingHYW3pYEobj9lGTqC/i4yTK06y0YzigoXn4o862cpH6/p5DVrwjH/Rtcyms+VagnA7SALRySKnrLlHD500blW3oxzsakAXcXQo/mdqlYVsZ3sh29vmKpl29krtTbPIHMaseINF8q2FXP8Ii7HQKYCxFkTAkzVbdZLaKy6QRn9rKR7n1y52AT7KRC8sVK9LEj6/Zkbm9zZvT6xt72BXnjVeqgLKSURjVytjY8mjSwtBGf4XoaZgDZA2WNcBVUv+p/wQP8UstQUAX8RhDsXb6xsx3SiBoHDNEn6n/7f32Ym5Py/ievpC363WapI6D4N9ZNpNL0w6bx3eaBDoWKZPGgCbVue6zpXQb0wySRlsOIEACvpHmV40l0BDcfxvAQiPBW9gzNMXWaEB8jxGA==';const _IH='79fc164aeadb27579b8289bf5586950dccd2164f2a0b301a77b60d3e45668026';let _src;

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
