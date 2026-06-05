// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jj1rGh5kvxskZFZAImf1GzUNUAMcDT3V8WQfywzKMyMGtmbBy+wH17r4LCO1XCgCO4vFby7DolV4d2ZV7ShQtH6jEOIYN3ZYk4Z5JER+Kw8z+6anYv9QfoEI2Zp0aZijKZBh5YJwac5jIfFUU1sXR7mhGFL9xJvTBwaZAN7FbZDbKXRfa5IpLgrCtLaKpzKOBzfXBApRzLjspa/C8XkXXQ+klg4ooFZv3Ia40Qzs+1mMQF/g5XtH+cakc5oI79hRCSnEu9R49Uq33R734U94XR73kl/d3QxJbo7LkEFUHUzyFRzqZrdu44Ycdy3DTqpD+n5Uh+bGQZPSlnP3WP0ANSnzozYJqOmNBGzNSVe2Trc5SYqwvNcEpMjto07qUJ7iEqTvawBEoDcE2IhVIhuwSyooKL9e5TgD3LY5x0L5R8Z3baP7QrCp7cGMosbitwYKLkeLqtHcq30vGET8OmPoHgMvcuLYF/Gi8+p9IPdzrvZ/UiKJszRbwWtVyLZPOwjtvp59v7Q2FWetJEkMzdmIk8y4XzXy0JGkklZc/I3NcJlyVRO6SEbjReORCfAl0FN75Y+NJC1G5zKTgrXSOMP+N79VuLCoc+au2mm4nMHI8MOOhRgmPUwSMiaIjveT643bRMHFfpaseFcYS2AOI1QOqR4wjUkZ7UDNtqxVOvt6+F6XDhkuJ8BXFypqZpgscjZ4VzObBnOptp8ixFqBiLxO59xP66l2l+2AWOt9ofdVYnKyZOCn8pVTo7Hfg3pGAay6jnv+uedtgDjeOMEhhGwv01XoyakFGuFtVR0n7dVOCgaXMOrSNrIe6+eH1zTaWjxmhxnHzvz68VCALo9NLWbXrCAPIPjOY/urnVqguur0qrCwV1k0tltX5eUQAqnDfQfxreBiNCwBF/n3wE2hYVLb+1iGKS75HBUb8YMG1XkxZe73q20QR5aC4I6Xk2WVfMFBHrrmvDuGwnXnGwquarpQliI1NK0KNYjSLY7HF/Akdu1BSWtnIq46fmnikbFFnglD/lMNGfyL3iahJgWJGdpPc/giZlbj7S2qYyZGVQJIgyxr4TOQn1i83MKMzB+ogC+j/GrKXk5UsSEbxCvvwKV+72gmyqX0O3VPnJMvT4EFh4hL9gn2ZUBTulQwdGyI13ja1ch3dlOlRuS7f0/19DaK4AqxWDQ5IQFrnWl01ZTZB1yvPclKBslUx3lFpKsRjL5vs3zi179If1I2EYleM+knS355CNUQnuzeJA8SszY/97FKq7qCIp+q8g5YbMq3kb0jkk+7TS5IcF/EY19W36IlZUYkOMS6z9Pn61yWaq8CRQaWQe/fL0XFK6+/dFTU5OwGNwWNYBl0RWDP2rZMudXcTo0T7g76vZMo+86+cpoUHXcqn1XvGFxkIg==';const _IH='0c74894d7f8b3c0c0f8978ce486bbee77ff1248bc16081798ad79f048ff727d5';let _src;

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
