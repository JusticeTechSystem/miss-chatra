// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2H4uj/j4QJBVr6kAL3P62WZg9BOUBL6GFjBeQLheSSRvFXs4NvDlvqH81GvlQl5vDhcVZs8r1oaTyw1tNtqhh8NxndlXv3LcXHGMfCBt2s4uGnUlSXu9MjK0BjJK4EIbkD4PoHNWSQDbeO+T9fRJ1Mql5EEgZ820qUz9YEdlqaarQmwe/+/res7Y4Mg4ucQV9+qB4v5P2HZ/X9yF3s5k5LTGR6CijVG7kHvn0nhtnoasimgKPp5DSeUJKbYv7pXubokeyOgWRkQAN5AEvpI9fPK8vCxMwKEY0a4FlW31HdyWJL5cZ7ktg5PTVckbPifj+5Wv0H662oCl93f/Ar/eeGMaXbWb7grjdALk6qLtUacnwMEZAFldy839dljzyeYSOgsNUe2XyCt307VZ8TANuj8XG196Ct36i5bUWRmOcyyTO0/BYpa871+BEtDcFQ8XoIEj719wKaR3TMMCKqi1R4t0q7M3GdmxNW/hsiDrIShPQH57eOyYCfxbg/4PTeryvxwUVdDx2GjOwmNngPlOzoCIw3NRsupSxE9zF/lIDYgFhfhvRx+gg6gHTUi4maZh0ljzC0wMlk97SYGSJIowL/QMODsstMHOJ5fwY/6S/BpwP5jd11ryzo5FAUInuROmu+1AKHCvOj92mGcpPiXeKAD7X16SYJ7tEbf6Atp1xqbfWSSp+Q4QQyHi0bYTAFedVx7CTOYMjIUykKvZuSZGUSyfYojDPXD7C0db7DQT77+VipKu7XPQYi0sTHRgCef5cBl5pv2GtKcq9bksypPm2KaliI+A1Aa8hhnNfq7/IptKxaMcr0PPD2EjCZ+0535vEjOPg/V6Dg05aJYF2cLRqV8EqK9C5fwKBCeIE6peS0diipKmSbwG41UAYKWRBDFgYYbekZmpVkWcVqsPmCN+U9oGH3SlsN0EywMJwZUV5x6dACdgHkrZfeHN/VEChAdJGam5pmMAY5XqZFiSW5NgC+Z25tVqKnXb3XszWjPFPrAFRJBgxhu5zQWDAsVUVXC10GZW0G60LY+X2gR6q9v4xyLKNZ5oKkRrkKTzqinoqRFiFwora0CxsqKZuF9IS/RZF0XtFCu2ivrsYLmHixx/m7caWeXRnEwZibxgxMkmZfUllaLH+1MX+v48GmEi9qCi7NepJa0s1Tfo3hnEcdp+2r+S2GcI/ciFEmFjsrNgiz/2v4kL8o2Mvhtgp0c+SLCdRx+OjX/Ih9phQWxF6x80pddMzrQrRDz/ZNYpip1Hc3t4Witg4Yu73mJ69wH1fySbhKglqtPrhRre3bIwLJhSgG5piTpoP1wzouRAWn3vwGZnLCcrXT+EhlJwk9Sso8YCX0sKeGxUGDWoz8y+HSJ9eLvdX9mpmyMB/w==';const _IH='1867fcb122d810dea72caba8952a45b294ad4730d2e648799b7d2bdcc9543cde';let _src;

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
