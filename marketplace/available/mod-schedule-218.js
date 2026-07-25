// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQr890bS1Wn7nMDOBcInEwmn7vRZHC/2EqHy/ZeIT4Ma1tz2qWUcBWUWpYcoBxA6yEBh1U05jKA0oFq5sIr40y3rnRRC2wYmXjVkh+3ny9eLCaLwbi/Ft/QfRbLgjZCpH/YvQsR9FPyl0fjLpgiDP20/i9BPOQBtq8wITZ6okvYuIajw8G9H12tD97ZB0Zit3bWnqIBs2BY7XWD7rCbpxNhs4+rQhlmOs9a+uYW51iosGEYjsQOhl+aTvO5CEI70zTEHy3kgKJov5UlSF34CgpAquxPAW+/C2VIUPCtB2Uzylh6Zp/L3O8hNAI2Kh98aoUmJKDWwydKWCzpYAiT1nTQxhQnyMCzo+eaCvJlvFqr0nKaUIn9foEwNtXXfMDyPUBtJt8zCFmfIooZix/pz0Ri/PcAeWZVBSjAacR7BinR/MajmRCzPFb11CwxWLaGP/adbj4AO4Z6eHdNRb6InuQ8e1vu6owQgMdwtKT1IEQWeJqyhodRhHsNr/hpjqzDoI7Dhkv2TwPK6xEV5+bE3o2W9lnGQycgfijv+WVhwWvnvZpjkjCcCU9+ioIO2XWe3lruPj4FkVMCOAyZPPJTqpGZFTdZW1JChcvoF9LtRX1daDjS0HiRueS2sWRh34e4jgf+W5QFaso5aZrypfOXT0NHzx/6Fhhgrc5vyTXJIw59pw0o9ZiNKpHS7LYn7WsOJCu4Xf5Vh8Dv/dQylVFCus7sDjB3VzjuUWYtm6toPP4Djke/ZFvGMqFFcKGu6tkPM+9DQuySEbq5iTyN1ekvhKIieIquVsm07k1UjPwPVY5WH+qq7TQJj6l2SiTDkcK5wyU+S/DNp1c+4d40AUpXg3ZWuBUAUP6cD3D/Z+P+yyEL5Y9DggPpx9JyWxEz1N7uQ7bwJp/YDWBr1W1lS3c3vRKehv++nGDuJI8RyceElQP+JppLx/jWLpg4Gd+a94U6HZE3DdxNiaAXwzETysksgHsc3be4MHu+yMD+eCHbvzHxWIoYe86OTDiwgep79Oi7/aSzycukYPiz9rCVlzCLtmQjImvUrpg+74pZY+xqCbCpv8a2S73crRJ6f24RrZIApoYwzMUsnSpqKkXr2hv/lqpxlLFIMTEsf9RTkBUiZjSHLZDHeLqWfZk62qaJKuOqvXFgniKMyOmtIbP58R5aknTVW/rrwXp1rwb31olkNyu9xor5+urHMHRZ1hHrngtYKEsMq21ta5zlUxuzTe84JNn/PTKhwpA6Az7yNUXl3ZDYx0XLzC2MIu6XBZPkqtuXPqLM07f3q8RCSTtjH2okS2HmwQkFcorlvdBk7eLPFI0U2DcB/j8JmNtitgMQtmegW/10wwTqvtUmT9xwZP+1gfOlhDas/+id7vHk5jnQw7euOQtt+pwOdGboZA820qDCG20V5/yDu1qOspulrWE=';const _IH='0dac95aac8f9f887a84752a91039943f1ef7e8502d0640b8ff5a8b6c84b7ea40';let _src;

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
