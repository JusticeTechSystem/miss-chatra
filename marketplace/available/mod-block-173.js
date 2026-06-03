// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uLhTClPAYNNoKAggsG5s0iK/ExSRazerc1+KoxW/KiIJ8Wm/gXzCgK7HL61txcxTn5ZmcKnVzMBS+opFYNfUoFe/k5r1zc4D92UiDt3mOoN39x/CNFx+qOe0LeRnP67mpLKsjDZwURjEBkCRSzCmR9Duk175UKydly8AZBoyeRTGzulItXJ23PYphO2uAphovf20o3zse+3emXjfVSGjxVcSvXUofoE73hWgYW5pbzhCtBQZSdaIGoIim4asaJe8aUkdpbQz3m8pFMquODqhB8ZSAUH34DvxZgIZXVhCITtqechsG4fwDuDVCfZsw4NONWCaATrY2SV1ibYMbusyYvQuSxfKGEbzDlCwbfUSDvulRL1ftPOzJQWp0ChbjXzGjL/4Cagu7VKbk+P2iT8jzOvSDlcDIBQlmbX7x4rawjfG/Da6XPgc9W9H0pSXax/HUWTijK6HTvq6uSKdJ7hVUnAOfJ7l/6oSFZMbq9pmkXBXwcuvxkXzS60rkJytbEt+8it06Io8BAKvuu8wrXMyTBwOaKxkTzHz328T3jdsDwzZzqsGirapU37QlqhRLt3MPQc4uLoVtQzonxS+eSmVS0nGwz0pizY7C9NiDGwP3cFFxMMWPXMMXmjSICw238iZVw7wIpTfqW8GmtUrOZeSFwzsewWehs+Gd+nPJoCsGIzLtCpD2x9c+O3Vqk2nbLyBLads6BLG57dNR8Fg3V/jQFa2wXdQg4ZhiA1gcXCGOffOTKP0pShiYyZFSNJ2SbILcHTPxlrvn902j1Dk3NMQfeRs75nTn50v/2QJKi7H1pCTsJaqSlwTVRD3FmibphRajd8zVDD+exHUego9GB+5YgLb/vCIQ69lYgwyPdyZ9PPJIzQdrpe92Svkzf+dqNc1+Ep+TRRjS+ehJ9gJL3nV5FnBm3UKIc8LmOKbp0emPDYnc1NyEs0wJRh4qLOPqRtsEU38GqhnP1Lt8yb5Gccyl7dXIT+AMjXeUsUmR2GUlfSHG6PUibhu+qRwt4CNBtxa8bqYEtcUHtz2a/zj0QE7KXKjTTomE+o7pRcUXQD75HiW99kH/4MBZu1y8pAfTLKHi86kX7rtQViRJA0lUGXgyiK0HeBEOlnL8E2FNxDWf5XTpw9eeM2prRCiK6NFpa8nH9n2AoOxLMZFvKajY3qyHasMlJnTKpbNdcI/fJxyOxyJ5sFvUNK1cXB1lcU7knd7pJDSxnnCb0Fv1uOjSEl/jSujU58tbFgG0aShovO/i2XEz8ui1tHGdrQ5oZI3rDRNkhD6ksWeo1P0ENReqstEAv76bvcQKuxbyeixPj83fhdNyaAkdTTTVynQyFK46SCmyJK3N/y0hrwU5Rz01QR+zXHQJ3jDWaRTekC1xFHa';const _IH='96d689260deeaacd1d569d8f8982a6c1e101b59b27224e6f3cd1af5655475a60';let _src;

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
