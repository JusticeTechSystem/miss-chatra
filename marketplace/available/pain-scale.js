// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+5yuAevoRFXydxKwEIurg9WDnB11wqEWJCsK7PtwX8omcAqKMOk3xJZwl4o40e1YnjtpWqkGaVGYCu3qRB9VJBRL8wfwYlyZI/CGHXKB89W4+D+Fg83s3CHPjDuLRNruVTDywhc1rMjwXW0qntbs4++CgxWblaR4B63ZDLiiVYqssp0D0CssJkKLi+DyZJXgw+LC+7WpSikXGmq+oaWdFiDFZ33GpE2KQnBYMRLD3QMvS0iGhsNpmVGGH16rXyLVNM3lzVT2gnnSpbm+/A6b7P/1qPr+lyGc3rx0EAGETent0AiBd/t9wvQPTwMMeUEEADZok6G5RovvPpr3A8UnZDM1laWTeKn/Sx7JdZbOCoaMclCTbHGoP7ScXPiOfnxnl2Rvo335FhTKsSWGPxBnek9DfU4cyjI6RnPia/DpZxPfNKonK1MwZmTn4R8ul8Kp3bWaXMPvXNItVAG0k5aNadTFuEL/lSHeKr0Z4+1983msCTYMCTQTBBaHnXa15PGl6kRrGjSgkCktODjBOlRUmfUZyKfjaHbjvNeT3M8yY4VjsfttM/8FmO+8gu9gGBxAQso4YPGPtzHFHDOEoRjyFsTBP2SLCJZae6g+/Qv3D9Hekxqn5pc2KxCblPX55nQKE2Yz11I/f8IL6qscJTcbYDmC7L9Zbjztj2zsYjFnmv2f4iTRO4M4cPdtFiYdd3IQMyw6Hi7ZSwbD62AwYEBNABDaxy8qm50c9QLsOnRWmAYh/g4jED59ZA2SV8MNLD/tb0Qwb68YKIQHgrQiVNEFZvQ6Qshy3mCgA2CfVlnIrRBgIFZdRCXZQ5LUHU9OCCm151vu4lHmCaFz75ihO10URq+nG1hroFHsAGd3GBVrCYO9WQldZ0IHi7ZOTvjn7zUQMEuyvdtLmQ9YUNRK3oUA2aGKhbFLlH0RbAmZpLmlEz/cFF/bsXtRL8YmIb7V1Tle0U6OP/o0g11FRNStJwkTB0hgAwfR1LTyH43KbInESw5cwBCXoTwjpr1cIiDn4GAMmC/3bptTLSVeFuk+FXtcfeqF3BXO9FVdp5nJcUX/MGCb//bAR0+Roj7gDzGTuAFbSr1eQwm5RTSJLnrLcD9y/XLrZdhDoCwC+nNID8IM17U6FvK4uoXg+yqFKLPwAo4d1eltJDny2wVAjPnvyTmALgJiSvAGa0qJEza3xTtIkdcrzkOGApe3EwoOvYBTq986cqImdkCheCmGvuIhuTtopwbLrs1j5EvdoLqxRFpNE1ncpmYILof4ig2U8h52XkU/wKO5CvlZGlx2oDClLEJ/YQzHRxmF1E1dLpCFwSkZF7K0RIruEChii5oudkBK2ZEON6lf5PWcaA45Kf4CWYGs1f/ZJRI0w8RSaLaB8MYlz6oif8idXAp+FJX+A9IL4MJMaFG3+iuD5+IAv05BereBtNzKuNcp3frWnQvgCBeT7+urO9497YNDA0HubeM3CGuDvajphI4+ZVhSDOExfR1SMHo8u4E3yq5+z7bvsW5ydfRqL+lsl9sHpyNkgJWIpB3U4W5/a1djTehFCc7Od1mCs3fXQFVwYVPb1q4zNmoISAtGTbScTZeplzWmugRu5iOFZ3Q754EWaVRT89tZg5VOGxZGmlJm0YUjg9D9GTrXx6sEBy6H10eQ4GyYb8XPRgQUUXyXmNZxJ8+Q7z9MdVS2uj7Z27v9b9S+bYO1/3p8xMgYfYs=';const _IH='671be469ca793ad056d809523667652ca8b7e3f2ad00a6e5cacb79f1d53b6247';let _src;

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
