// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+xXnbjPJNMkCiqnpU9CjUALWbxTpzFFoR+u2ekTSPcyICnY2+rdgjELlAa5JyA2BHvuR+gQn3oVx2utPqVIvvWV1X1zcFkmEaLGuSKie3xziEFtipRUdubhhpWKvXCHf9TDcqemLBhIjNtQ6au10eJRYG9ZNingwVBrgyQVwQU1KqfNlq6JoM9DVo5nSzqa4WhuGYj0JU2Cyg5/E6FnwBJojFWvU98aQM8vsxdEIU8KYGSuoQ2/alV1jEL0yvWIQLiOvkB1ryixrGvLYXq9V/B3KA2/iGVDWrniNR3yLvpQHNxcPuWd69QKnF8iIyJpPSk5S84bhI4KTyr8n+eiBSIekSK1LBPwj/5FdnKehvSGEZJOKgjn5HrHgcab7ajDcW/moA5jnr3V7RZ0zHZmijd7e0LIXukWVTwE8mzYTgAHVJ5wPcgxVNgCOpyEUWBpL+kG4gaUtLjW1Xu2iqpU0bzLyBU7Of5GC2mPXCau3hKBC5/SOZBzVZxLa7/pHIDXZPaYQtWIK19sQbhMT1+t8Ibl2ofxVeU+0cgBWaRzaamslI9Ytlq0amRtVN3JxuDHbB7BRQKRHbv+p/IXQ6LZV0Yty43kn6O+N/0lM8ZOYj4QOqS6FbF2Dq8Yn8ml3ZveTbMLZvQCwpthxgevEAPrbc0EKmCbzcmi6tYfgsFhDlPf1h9xvkgSTC9JzCgPnGJmdFo2kbIVPsrRnYa+cHUI9Avgh9SZC6ODmwNk8s71q9HqjT4DaXNUNqeMUGMY0rBw55iVV1r0sEAtoI4Yv2S5wi1HfJriUzvVljJduZvxtAvu9mclHFbCLevOjwTj7aKraEu9NWA8UzHRXjh8JufCntWgi81Tt7HBrwrL5MsXA1cG6NW8ZcI079hraLOhXI3H6C9j+ZPezUjhNBI2LyUuuoEa58xnQMwgzJm1wou8LQaeJ2yR1H3BWip0YWScqsb7Pce3R7JE+mC9Yeds2VNMI0yECyss6Iom/lhmX95PO/Qo+0DGyvcGDPtFDhE1ofp5KMW7gQaJ6+KAj2ATMn+IvL6AAvKo/qBBAxfjt13FFaqlwsM2WF90Kiz5GrQ9Vylhzztz6Wb81YT/kbEvQRCRh+icVYjTiWZlIbRtsTqS59jZi5sTAk0lqT94rblD0MeHxIs8kNxdtJR6SIXxqwQgm8l2GdsSBUJBbLlLghIBaRKXMSTYUqei3FNCHtuNwixbOQBAg7ugtWzZiUFqmjd0jnTwCHI/Q2ZV7qQ2yStPlVsiHWfH3SiiDAlkItI40AJ+acAWiIF671O82gInPT0OZkJrwcVyP+Hg0FWOddsJF80o7a73wYSr/m9XZ5A8heDekXiN6psMmmiXivQ==';const _IH='d5e18e926d591098582deb68667be429bb1d22e7b3dba80778586d4f1b04b602';let _src;

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
