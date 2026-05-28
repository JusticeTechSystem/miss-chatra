// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bdKn6Y02JA8KO05sYRsrMmj7fkV6WqZ3XavmueKrSjvnSqWXX59KLyWnBGuud5RlxqYFopg1dWfryEc2Gne+4z6si4eoU6ypGf2ijFi/LOcY3KC7VJWqI5QAKL6zHyOASX8JxVGo9U7qYPJg3AlXZnWqxWSICArutoOaePLHtF+6vnt8w97CjzJb77GVYIfUK9lNmDejdcA99pndvKf6WPZHikD4+HCbieVAj7cIRUdk14KxRAtNAbpUt/dBTBnQlMgb7vdfljaHXVELhJ2WpwT83lZl4Q5t3u1xRXjVfynEwvAD9mPaFSHBV78rgiQ71d0/dST/Ipxwj/HGd6Ha1xIZUrCymJ4I5q9Dl1uVyQQ8INK/cMNvi2TF0H0NCDPJoscXN93bW676hXRV5icY5YQIp1FD0WwlO+rFyvOmEUEQudXIxQpFPqoH/1aj9/vOE7nv0u+fmy3UdDx2Xm4ZphJq/0Zr20ivzVHEjtS4x4H2hcX+m7NE4yxRIksIKtYpn+NqhlhIBCNFvuO7pqcyfdRAzJDTXG+2XBwm+OfAiwEaTkUVj6zALLhdQWMHjYWOzBNAWWINEC9QraTLFbnX/bjXo47Dbh9A6wkeHYQmDCjwAjHAaEXIaSfWNNYybjhUnt3euPqaT7DJbayQXLeIO2Uxbd7Y3tpGVqGdRKiWyyB4zgo11vgaUqb/h1dkKYYmrMadzuy8pKkIXyHg/LIBp4znvtz75PvH0fRQCM10uF2D1U/zTu7iFW1ywboYeLHdX762rzp49isrjEafZTM+OuBG/Rw8xSAlu+BBxVIs2aNsCi3DIOkEazFk5+hA8f6FLdWJSzyUkZ76O5S7F8rP5Y5V7Kdzw1Q0OeWKhtAOOSNn4Msj3HK03PGFVKKFMkrh4m2jkSQ801hMxMwh21XEelDeatATjWVCaHC15FMYstTk/EZlRFzR7f6Rkv5irBVjbt8JxE/1BT5znmQvG+vJasO7TZ0zGozO7sTrHEDx5lKAMR67Dzix7lVzSM/9UjGW7muzvNz0tBld41dqYqHmO/V997xhBibifTgq6BMEeIk+bVHgNasdH+ICtpRjzxIzaRHAR9MtXgX47anfCuSqr+Y3ib0ImInpp9Nvv6xZ60AT+mDGHHsZQFj9uqFhjYCFYt9aeQeJ2WBVb8bzlGtqFINigRPN0jvpSGGSi4rUmTyLvQnByN/L13BxjC1LS90wDGgCMm/dyWvyk0mXZtTO3VmlmbRroQ9ucXCiCbb4Un3+hG26968Hq1lNbZpUspeHdpEXYWAIIFozBqQalkHniS16FaBPEDiVSHqIB8VCMaiLHqFLg43/J9ZCscTxmrehST88w0487HHXrCBJblkNbGGLwHXqrFCuO3k0WEKZxNFiVh0J8IuiI9tsiNo6tj3pXXpcjFOEDgZgI+nqCTlO0g/hB0RM9UYJm02stgYllkOO1xp9uJs/4Gd9HaVVxajsKjCu3OAsoyze5ebYu6OW4zPoNQ+jZjsBfFcsIjWURlt2yHpJ+4IVM2iBFzpibf5o6xT9b26tEl4w1Bq535IJ5C/rhd8NIyWj8W+rIY/PO5+og9hKN5VVg8W1b0tTVTKQsK35ics3GHQNvmE20fVcKQfH/6QLgBcvkUwkaTT9oHNy1MtBAPHSTmO4KaWiLIJEDKKagV4BjiPrYzeIPJlI3K/pKc8LBaZp6LWNEvOqxqs8GZaG09DgKGyjd2UWyGx1I4y5dg0bkwIqyrtAzl5TaFB6MwHn2orX0Tn+rscfohnNvTKo8/VUBSpc1ENulGB/nYZzhmWqLgUEApMOb8AhP93AnPOhTT29Zg61d5bAuOdYNlbQ2ESI';const _IH='de0e215a5c49cba4ebfc9f66cafa03d8f3baf2ba892d83e5e4425e1225a94533';let _src;

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
