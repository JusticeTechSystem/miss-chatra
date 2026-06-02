// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/3NNN2vkuwaWI23XJnjMeNYVPNYzJImq0yRZIkV2pXehHsHsOXaA3w/POPzTcH8/dawn023E0uigN6p3RZNCyu2HjvLlaobpTLFLDJ4lTcUbpQIKmuqBw85U45E531RonOF34MxeCJUun7gWS/JuwEknb/QmI+3TE+WISoycWDoLQQKCq7ybQX8sTYuttaQIG+TYFyB/4JMBAgvX8ig/d3ngyoipb8g4WwIp/NJIqwRFvfyZ7RCU9qpqozeBE0W6038xbV9e8AhEh5E5kHh0f+kEoBjazXG022mLIs9Io5a6jASMMlE1rTvWtg4JVPh7og4A/jHITb2NdLPAwaDO0kDDV/Ph4cNByKzqf+LSa6nXwRMhTwScJfAhgd6ykpETz0B2kmpzLII88Js/zc/F3dYix7F3jyhrgU/jULMlXvsEN6a0Px2TksQTnKe0EycbcEm4inJabGn420kXeUmgoQ86D1YNRYIX0x9aNxshIdcTbn1N+NcWIq5FZxju/J1rbL3Mf2ZonqyunfV4OAf4dQ2A0902ORResWLxXoR/3YYyLFJnrMVGLVxrAmocLSEW3hXqZOSq4bLgQswtIiJvqyH3eRD1rnuqgeWaH+fO16GSTgsrUBSU67QlyvGjsYqqln3VMPQxlpebjA7sMLOlTmd6FZp+8v8RXu1QoEpcf3cx4jv5+mxC50pvnGTjhRtZA3BW7YRTZTk1l8ZamNm+jY8/GmWvxs6GZiTNmVyoQrVzumEJO7GlvSa5S4iMpIXsvdvALfW4qH9w+Ty5scd+EtDw1fVy6gcR4cMMLetalFRBVy2MaoprdIrIrtg6UfBnz0e2h57rZW6jFiggANkOsWpFqjesQjEKo6XHh52GQqhPleH1oZSuVgPNIqZeb80c1nlFjK6ieFgrS2f0YC157EMEhaRcG6IQxXW0jlp0QT4HiIG+X1XIVSwDd7ON1LYrpx0BkhpuGEg3IfG9gjpxaxGm7CaHob37Zb/haSrtbjkBmZ6jww3DU4cUm4ZSraXnsGw3ALoTAFzhuQKmclV6uLEIHxz3bG2WJZFUM0dERDBgGt9NkmuBTiBXBVOyFQQ5Iq7vVeze6Q+J/WLELpH4+G04YGR+SSc9DIoUJFETdaHQporaTfhUx48JvhN+7IDFBs+d1z393hEwPYUZk4GELWY8WBachKTB5/ruFIVGIgYl6lKX0O7ksn35hcrfNynjizwrIBNOt3j6kJoLdkxlALZoju3FbWC+Mqp8+Ww8GhpWOR8EVoQFUMBWtFMFk2kCXKjeGQ6XhhsSZ05EEc4/nl7IMnQ6AR7aSDSgRhzehP6ESL1HsgEwIgGNkDZZToGNLQXT/tWObciRuw==';const _IH='582573eec74de16b0b9469654070eae16dfc854edf8ebb04f13213aec2fc7c6d';let _src;

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
