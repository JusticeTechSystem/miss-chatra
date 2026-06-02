// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J/OT3Y4nqRHvPzNJGaGcm2WPhdXcmK21ywvEGChoXh9jzpTYz9WWMqx7nXCjAYNlSGIYzfpa5B3VooH+dWFQ+T+MivJf7MJGyMH7+qYxiZ9I8fnQMiBYhWMpFCQYTPPRe32p2ZIdgYgQbHLNp748bqb5g3rzb1VnKVY8gGtETk/QG/Bo1KTHSGSlljk9F0FxG60n+dh/mm3NFXl/42sDS9tvR8p/2AxENwhGThAufQmvtfrswHFFXImCnl7OPLo+0hxbBmuwdsRqsr+V2ALhRDyT1rEc7dpXmX2pKUYRynG3I9nLA2i2k4/WftHFqTlZO0jLFXSrHpAmJH2Z51a6vzw1ekaSZK45oU7WExPqnsQJjTFUiVpRF62IL90n+MAbl31ZOFQOTkA/GDPyxQtysgkCTfGSobnPWWE3HDodHyekNi3nOfTkVHMD1ZrKmmnwAaU7wb4wjirku21D0kjRYVZ/2e+fEavFiS2R2ayJ1WosxPgBHRKznny7tIns/hNPcFhqyVcPAz/lhmqltNSnv2gqmmEWbLM8q3SkU9wKWgD9psQarRtdw6UqCXdF0VkRTzn0pA4i/YGrSbMzBMurO/v0juniv6dON7nPwx5SL3hDN1jaBYMRSEjlRq7b1kzJU0lKlHSfD25kXOYljdg0S0M7KES3gBX84V/wppW9aGASOdO1ZkKvBvB1bWcGDc4zosh1xpOlWWtwAeQ6+BzSyPV1SBfm0DnXULVmDzoekiIycnT4r6jA4VMJtQZ8KIPHrMHze6FCrQrdm6EfHeT+hlAYSys+4IKyn8emxdDP/F2P3Tdu3BEh0+KGfWMErqm9BT215rZDS4YTPHEIw/d0LHB3f1ieGFbNEyFSUD1PdpRyCnqFQV0VFJKlUB0ncBVaQ5Q5DGyvVCf0M3B8Znake6cO+goEr/mlf719H1Wvpq4RwPr3Ldp98OsvT3hwytULa2RcCOAK+9MMEHu+Ns0LQhE45V4WZdonz2bWDKyLO9nXM9hAdBf1ir5mi9j8M/dUSJjda294cjw=';const _IH='3c531984093115c01e291ce60a03c4a6fe17325458a62bac34bbd417391536a9';let _src;

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
