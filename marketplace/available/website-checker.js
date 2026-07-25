// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFKt5kUUwl6NSZdzS2jaog3oSCtsXvvgq7koGALxnATt2S59Z1r+SAkmOIDm134HnxRtRmMI7nF6YF/BTlwEePw1NhL0tQK+LsH1J9wXSfcNGh7QlYD/6X0/ARtA34sDg1i3qW0g2EhqaxPzW1gu1fh8n7+ei0gqg7NCSPkRtDHMEvYmyy343z9OIDHLjoZAQSQmv0Ful6AbygxfSEMKroUQW7CYvC1aQEYYf9UA1S06JUhfP9+si0faRcdFA7oRjw6HlbWLhu4CwV1Y+BObcJbfU/0C0x0Z9qInLKpfVAwWugj47FpyrFUd6EuDKB89VgKhz2uUhbhdPbh79Xa4DNHrYW4EHYS59tKwDBQbCJYGfpaAZIyQ4VL8LfT22/Nb9Cf/8m5kyIGDUSk0XhYpu2IDFXHFHQc9Xwno6qzMR+BvnP5CM2tOwRXsgQDD6/G9WjjgdyCrclb5VFxHFJhJ+mH+IIbEC2k/fbZXTGAYo+bt2U7Es5F2f1Athkd3BS+wtz3eZ/6QqlS+cKoQTzaF3iBW2v9+HRnsd4oZvLk82/YCSafoly159vwdjzLYnHEDF2R+WmmimLd6D03H6Bmp/xItLlrlTkTQDm+H5wgjpDyqCu2NgoqQ02ViOsewhrV1yH/I3KsmmOi+ougMGBxkVdNc+ELbSP5iEphSSY3VGbYaC2v6aoWocaZ5uU0YrFXdnwOgzEk9YYjgJZkIyhms/IJV1tBKcK6zbtRSoDIDFQDwEYtgjdQHCgE9FWubjd/7aCZQfGndsFUJhwlB1Xe4rEXUF9RgHCIpiLciKRy1iVdhNg5XbpZ2gEB+lR433IRq8YC60j0i61yySKwrI2UfIuenzNzS0Hy7hnuLgWHQok9ZEWiA4Oq8FRKKgIZnPGAuHtR2P4jt6IEREjqqxDnXKp0UNVSH+WgZHpr61lqW42lz4IF941ToxPudT6dB8qonjP6ZuQFqgP8NAyBu/MO7ci9YfXH2mSkiOrWgZbfd/CPYUnEQeZnrZu4dfDv0y2d8VIb2fDK63sm+PlygBYxW7q5q0YEKumqqRT5neqxno+srvz2TF4TagAPtekEMhTmBO0HwSjwsV7sisR88duDsPpNPkJmne9hvHqkT6mTkx8qWQHufQcbUkwstgLYqp6Ivp0QBpIFv1wII+txOMBvHBT7fT2rG9Vg6u9rJO5IKYegnie3K9xpm2/NyowTHGoRoUJWjeGPTNmY5VjXZWfWneYjmavV+qJFKJSLpbmmcXVKPCpJG7h+is+oPcn3I6creeotHWuUoYytpOT3soEnOpe5gm2lFNkrteMLgHbCZq3b5+AI6HuOuZHzbWl6Edaot7syR098xZBIYMf6iOE+XeEJkdll5inQlOgqDHDQcLlJVOTiQ5vEWBqq0hgNPjsoBF8N1/3LyYYEsdwtlxUlxsLVyC8cvqlj8a0AlUkzeaWbBmgt+k+20Z5M37lFk0/U1krp39EdY8ZbZLYPUXxMrqMTsOnLfmU+FnAcq8gCIPTy0gGqdOm2yRjVSdXYx/B50DYNwcW2fyvckuaYUJ4qCDTiIDCunFDaCsfJaVr+/g2XwZ5BEDFNw09QU3vtYGYaROa9gxxu3yeFSB6DZI=';const _IH='53381bbd416bc0d2ea660d49ece73530ba809f616d8b3a9e0fab23ef162e93c1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
