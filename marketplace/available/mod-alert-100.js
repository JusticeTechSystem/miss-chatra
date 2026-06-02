// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E/YQDNQqpn3QqBq5WW1STUzBmgRU11ynWPfBfDXmf9uOnJoLYwWj63sRM9fOevxPm0rWFYcaJdZmVF0I84jWRn2WzQVmVOLGDCbwp/tJB/zhsaucEFVmMQ2z8s5iJ5382Ew52gzmPlwsiVXs0h2XPBxppSRbnl0DYbPXaPdLhcomZtWQNxpeX29qWMP9E9ixOeMugVONby+tU4gu4WqnLC0UxdTWhkvFYpR84saB7HWPCn005GmlPAvea6ls8WxacGO81UQ67YmhpBcGPaCvO8BmUe0CLnn4g6ytDwbnfWodls2+mLwrAvSfC1K8xZU+5b5sDnCzjE8cEr1zIzUUcNNOV33LlTP8Wf/uhfQ/o9akx6DjACyLEglKhcKh1bpwqgLDWaQb3SzwcSdwxL8QVI/jMUj/ZFfTuciFehePS9fAzxaXprl3CFJw6J+oFIOPjUOtCA4RD6qHfd7CZ1c9pRsbZLlxQtbQz1LaK9YYb2qDN9MXhZGLxEmFgqnKRxvKDE9hayQfN4FolBKTxE534/GaCNuGIR2YgrIuLmyTXJvR7xQAzUGoLyKq52hsS64Nprw4r2aIY4HkI6qTcceTbg8ewxEOzuOeH5byB26Sckmh7raOwTzyObUcRvkr9pl3EOPdWT38f1EKNmYPRxgE2iqQEvUg4QJ0hVocGJ5E63j/oHRwmWKZUgBnXfWYAaqYIYD0sCuMAanPlm8dvbu1XzYESqWkC1br24BSns45YfI5JOsTCu3xfgMEK0t4fEdfdGLIemYWSXX0v3LQVAkb/HXvPeDmKrMRXJ9MNTZb+yGlV0EDJ7riXyL8eNrzUMbquO3pAqqG27FKnh5aKbBtc2d93cMG62qGAlRipjO7tzqrJ4BpM3nUvYZrCrs9bUlqP9y3afFMM3mBb1L/4Y2mN1kVX4ax8IULz9YMkB1HcuUj5DnEueas1Y1HNSuzVnmodLc5/vNmWoS+2jw+evA0GivaIzFVfqwcXL2Xolab5lEAkMuLMPtTRVfO1FCFO1T0EZye/uzL9lqti8FimV3drVD/aFrGoQmDAZGQfyHIUw3FE/sHqYEVuek8b819kdQ7J8ymNi7UhhsLG/nPftT+0KheqHljeYd6MRl3eKBIx1pQEBNgsK1RGF2wr41O48tAJ3WwQGaZe76QzvBC7RFyfwyG+/9X7PfUS/eJ/a/l/cX7Gp8Gi0CtMczuD+dzxQ40TMHDbEVx1VL8Xy5I0B5t/DJhQVNwCCn02/XIvSHVa73gY5RwERKD4Z31dVpUQBW6jPSLY0L00CPjjNasaQTtouTYK5FKM6HQK03ws4WRkSNXx5H8JP741ZhcBgYQaWgLNKodqFEAp3v6gNEJY8z0yS6TzQ0NSlMuvPitcS+U';const _IH='13601708bbc64066eb48460074f0983986668ef78869b63f4abe4e9e8b4a9d79';let _src;

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
