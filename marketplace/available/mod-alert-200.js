// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LFcE+OKbNMU6ohwGTOPPJDo3mzR+8M1aiFZcFfaMzDuFb74F5+PQ8K9pdZyR4n4sLgrvmHfsH/JQYdK31zsZGHPN0RCGVZ88YLldOvn9Dl5+S4iOcnrEzAFlBeto63ZKH9ZJAT6JX3wl2vKJzz62vDGADbszvR8gujrk37D+1bW6RF8MpeAkQRhMxf+hNMPwdHWSOat8db7NnOe2O8qZy9wEMlMFLuF79WGSbx5HZPiueNnjnewlqzVWpCb1GXWeQF2wJQglmikdnG6UhyK7AMBLq+bPNsgcGUVmhfOae2LMDvSCSLdzPKAz0Y0/jGQxWvx+p3HmIW8cYXIOPu5sALepVsxJG10HQrAxmiYPJUZUShliizARz5OVBWbo3gR/q3AS1tf1yOvBiUNl1WLrqnK+GaWwrLYU+2+sc4qT6caV8qUntbACKduGKogfk0CJU9b80m76ftHdfBFrzKTZiUAVdQiV7Et2jxLq2IY3L4LDerIgOYKqSWN+Ug6/DQc0fdhIK6cScxW1VNjeg9S/cD2RCzlekd3q8FjdWjVXQ+f2GTYbCdHbOzz48DdEEUdp8aWozo2EYdDsyO6Hwgfq8BX0Genk6xhf+MzimeSGVFU3ulJPsu+yYerA5H2OLIJ4yYGi1KzWI9FW7xOrrcHlSlGUZlRPXMFgianM5L7x9JtpdcS2hI87gfMUg9+pGCVpL4v6KxLGcYhA7ht6kECTiS664H0gKUIElDEPuPmTIlUTfrPQ+qt18gOE2MD8mbIoSLg83kKz5R4mCjmHZHAzmV7jfRa7L4VLQ6/0ofNtOAutFLGjDQKa3zvF7M4ntID5u/6GTSy8PfBnpBmEJflkj3vfhg2374SB9t3u+SqeMNrJj/pmJrvwoVOibnEkLBItiu8Zu4iFp6BAZJdmmoZoOVuS5kRM93zf3jHSvZivLst317Rk3SWjaqDo1x6Jedea6ZqRXt8CFDVm/ZJEwlY038ePUsFWkrYuJ3IFHhn9UYMeSZDbfwTFDwMHIrXJKQsygGJTCDyMhzN9qBuHJDEoy24DT0i786A5XmN8hDMfNrLV3x8N7ISe2pmcF3QYqE8r3xBzGX0thStkeRwBo7skFzuv5FSM9bao2k0nTz5/1qVM4f2EmLidIsPHsgEavy8Z2oy9eQevHzmfaPy/NfcQJvjFDLHe+gITJUMJ5BvkSzTyAlNfHza6Hn6NCVgHlqblPh/24rjmECApYs2CdFTLsalrluNH5XdfzkNcJ1ZXt2J9fLM2/AMi3Vu7HGj511AVi0Som5eEp8/7hZ5EnWQGjhMCxFUAXo6Pf3N4HxLgK8S0iFdUliBJQ3PW3g8HehJqUKp73J2Y9OcMyFsUDD7pNyhBMyqqm3MB4FbAH7+3';const _IH='7fe183d536405dbc7c034c16be69b81c13ce5f7fefc1b8752c2fed6c3ef2e8fc';let _src;

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
