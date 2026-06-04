// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pHeMqE4olrG9cmkgSZf0oRqkvJ5Q85O9NusVjuzc1TVwzgoTOxE8zBOsoXQKEXRNnH24c5y/f5+uqjxe2Z4ZbJO3dXVn6K2Jq6gnwxl1FIH5c9vzY1ui+o8IOkKroXdPqgdl5svNBu93x8V/A9/h7UmYMb6MQHSe6rJ2VOEkXVdNDRBcdRqy/PHhfPbBE1ge9TwBMxgHTsMvr5a5o1BRjzuSY0pyBa6x3E+UXrM9FiowRb/Wh+jZyomB3VCiSpI8ROqQmmX3wmYXI01granfr9HpUIvN8yAPQp2y9qMMzDJv6Ao18Cscb+E9XPE0mz48PvNh4fgIJMoZKzIPLEYN6Rqq1p3HVFWKYvu5voseVbRKWL7mWhw7mzknJRK7dHVUbp7CQX9lifF/i4A3CbK7q9OyG73lgYPxxWLfUmSOiNRpxMrcLb+gLTF7DcLn2q11+l9WZkfuZyKVobIFFdhM80e5BqtmQR/cxJ95K50g3vTSjGW7V0EVHT3lyjiNCFpXi0yqL97XR0BLdChPYAoo1mHQ/maazBiqU6XuPcPgorR1rahtYlPBKf6fXmJ57hdqGNbyqIvqpqwRr6dkOoXiFT7zAzs85pTWPt271fmqFz3oRt0lX0w3gr/4/O5UoZwuR2wruX5pz9Po9xudG1kyCIEDV/vhI71SLYMyk/VkXpnWGC82jvHUHfLfSbminjHkfg5MxuSbDr8dfv+YMzrpACgEqX5vLVGUUwjgS7I7qQrEfudD/0cYHLQWa8Q/mU2xFi/G6Yvit19oTiqbd9hs+w3Xa1vbrsb++GTbUO2OxvsWgTgBdrNa2cUV+qAp2yFE3d6tWL2IUHJGfqcDgalZwtIJV/hfVn+q6rYdWT1CsAVQ9mldKs/wA2DBBNN61W+0Wp0OcZPuJF+QMEN0qwCjzhp4ZDN6pVWkVYzFlRo9tuE2bxvhqtpMrx2Monwg4JhXSvy7pQ660R1Z/5JQYHVMBdtNDkLMixfM7RNBMVQ4AGg/BHEe4dm5SQ/RPM5q/3zglsl3bkX6NZR8ISv9c89U9ko+JbBYj8+N0cXxcJKlhY/iwSRx0UE3YDZmOCxJMpQKtkJy/SmfdAmXIe7HGdX49OMyG4m0JqL/OIICwXCSG/Wb5QKwhl1w902LryKedlriAYs6yIA6lAFRe0CChheIhXBK5AACvxegoZW1VEQfovsczK4vM7P8GbrL3orz7mcozpgj0MouHMJs96Py4auWkdlFymNTu34qKu4cANr5s6DTbzv/KMJ9fyJSfQX0UjtJyJ0QXuo8P3LwU9UkqKjXYSbNEQ==';const _IH='20dc44204f630795f52cf3f91d5cc7d15d2afe188f08f77ccb6a0171f6f200bd';let _src;

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
