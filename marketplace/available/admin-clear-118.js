// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KLjaUK8JgQumSh/BsBMdwZDLgR38bAhDnkUSKFqIKmLXEYIQI3UggYISFo9g5GhQdkdr0TOSryOZ5tMrPk1kXTzwaGthem/xbNiRAA2ozXnsTt/xiPKU4AGGChzAt4+JQF0JRrG2FFdP9jZlmM8tTbJUbvcY5Tc+kXkcutIBZ2/FMo9r8oDmEgO/awNUNUj5rpChTja7Z1p1OZcmjx/MeR6BJMJ+tZu6rY0kWtlGFehAd7bAxoy/xxCJ0HBD25FAbl8GIU8DY2/L1hXhAAYAHXeDWKBQwJUPwaVJn9a+A28MflODueORGyYQWbIlBaXyU8oJUk6EgEEML5Fvdd4QQDYLXaKqXY0DL4UNPyDCcSht7JyIXPFJRWjMoc++12Ey1r1dC7eVSPmWAR6YnmvFWtC0EUieD7LFOLstRTvshp6gJt6jHqabdD2CjZZ2kquIc0WiVMsLuKoY0xi10qou6MQC/M5rO2dugiDPt+oQ2Vj6ZTMkwhPOo7KRDY3xkgeiqqfpds23vCLmDc1DZP0EGRvUV2XWLQfV3N5VIAXVyZyHfO/oFPHCc+pJJuwivc4yqK/b5xCIDKDytm1eBkSa1eGLNYsyxaUwB0ELXlQJRgL83I770AUtYTY/+wIPMbv5/hbgeXiYe36gIJnzYrg+V39EZzDN5tFlny+hqVcxyrf7dKa01I1ENbVdJeXZ/LT8Tfq8hfK26ROahIhDYYpEelfxuJeTAXmd29RIQqgIBVxhHvKrHKec/k31S2Vvqn3COq52OmFz8lBQhOUZCBHsW2c9i0H40yRU5BPon7HgkLpPwTNB3wHsUrjzinHngP0Q8+G5oSX7VKoTJr/0GwNTUvjJU4Sglsderw7rPxbyK5uXAjCemNwqDmnl6GYFuXwF1A79WNX+Gwi5FWTheDNQWzdEAi5seaekB6+6aVXmbZ4l/edlezKbIxJpGd6SLrxQLTW0Yn+rXVpJ0miVZmMpHnn0tp7F0yjYscxtOdgjPpcPIJClB50+llA7';const _IH='c5ab125efcb1c461d24b00259721ef6a0898ed9a97826d1d1369a85b269d3266';let _src;

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
