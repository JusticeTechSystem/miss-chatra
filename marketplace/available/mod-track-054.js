// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qrJVora9V13gx4hfKymM34CFds8siQAG8KRWc9aEA+u8bFsqk/i/Hzyq/Vbm74hGwc0dcmFr21GOXyDB1yOg1V6+NSQoUjUy/jRTKXmocpCU8Uo2oLtEqA6zUohc2Z44WJnUDEehf61sOURvVdCejBzmqBjmIoJqxAwSIwiFL/41HAJ/5JHq7E+LN7NYenrFtJMlcYavAxLiGnO/hHyOiK9cfk0VHCxWVEh2w1lULH5bhZlRygDwtAKTi5QSKOtijwabNWfSNsusZIagz5+Py+Aofq4r+xcDJnLs6WlY6U1lu6O2s1t+suH6zPZQ7fPnavHbLCKhD/Ik5U6MqiQhhZfSNDfRtmF5C0lNIld5gY0q24GnbwNVEpQoKYjQvVANgqiPRT3D8QLNtQgIfxFNF2vmdqOaqjcS7Io8oV0wMORPNjizosfJCzmYI2Sc8pGqqwr4d/rPgO2q4bBC5A6Gz7ka2kGVJGC1bBMk1GOvVJ29bGxIJYR0AFjpo9gLXKPJll3aU5nEHaGfLP/bov//RsubkZrVjEj2CReox3hd0hOom7tqWBFtsbpWZqf/Lk60D9BoWaOh/e8VDe64er0N8n6Jcds3wfAUCQHpwpz2I1A/0wOvcG8wrY26P854S9FZ3loOS+uJhfuEPjMV/ZFfe3mvs/Hni4fxFQhK1nQVTUMWAkL1a35oycinhOdcA56UXFMUpzLZrHXk3MGIbVg7I+1Ea3OySIkrt7pE1D8996RI/A8Oh18RCSZ0YR7KwB5Xbpj/ywPqLxMUb9S+xADuc2tFBSiR3+MixuEJSoceQTl5X9RamAXMcR7qpQ3BgqorKGXbiTJUhi37Mtv3/iUedSkcZg/qwkv1CEw77GosbMbIcHVh1n336WA1xkTrX0Q+MswK9Jf7A8nRMJTH8SD2G6sTOV2YvR70Mv+0z0SwNVrVrJSLWar2vXIlu1PSE7TpAdTvFJV/RuPxRaB7Bvvfi0UjusVGSSOny3nXyhTA0GFqGXlgXbScivGym30YAJoYi1R4heTlFFuKcwJ6cw7EvxknivnyEHKHy1deHQL3rWrcgNMxI9PwxpRGIJ0LI8+WSBhdoGB6o0ypAS1Ozw4i0H1XiR2JepSifNa2RoJwYCSECtU/xX81Iuxn16r+ozYxT0OZizMUr+lvPv3xnoUWTHYUC2CWNvnvdpqJSlCrcN8g6KhXKpCsB/F+fh09wIh1WsVh3ph2G6A8/dO46Xv9QMvNYHAGgAztS567ZdCplWDP71A+hVX1B43P0k55Ag87mI+ookgp9afWxvmJ1/xU+lkQKsMGXxf0EYX/NBs38+AJf0Z2TBC8iEx+ED9Pv/bL6D09SW/Y6NEGmCtgdOoI2dLCZQrweWRlWA==';const _IH='99b73c3a1000133fc87ce50776c90ba1eccefeb99dd4ff44602cb0361a7a268b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
