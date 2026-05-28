// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MV2waaKRDBJ4VD/fsJN3CnMjTjTurIcjXXK0G6/np911yvvkn3/wKRT/zU92d2bavHnWcZi8FYS5rOITvRDJbqae5a0vtvg3NtHYHoFySL6tuSbqSvYS5ZDRo+ErO/sYbFels0QB6yIFpYfucqdfj2fLPyxZFxjIEzNMcC6QeQo1we1P8daKhPYo6qSySn0pXWRFzcvDL6RXRwjaVk5r0efmrZfSWX+bW6YRzHqHSzSEXwP3hSUUQooJ9RtnsS+vBM0UzFR5jlzHq93ToA6kzZcltMjxaod8qyYeJKhdf/HhcsT+ytaPTq0e6Ak9o5BpVEVDnTuNoNouyO/pP5sOjAQXYy2uDILF+7Yyu8VFU8kPsv5kEA4t73Xw+UCiGd+ElwZYNFK9i29LkNBAo5RTOGmMEBHL8mlioB2Vmu9o49H9L16xwCyQHw4cIZBWNwBzoaKcjPAnHpp8NChJPR+BLf+wxCMXqiB3AHJ+uVZZ/Ah8aSYGxzUJ82lmO2c4CVAwIYeHavYB/E7ipg8Zbvj65Yvcz+cPbylZDEpMcQEFZ4DFcn8RH6A8T8xFXZIEAP+DzK8psUBOtOTWsdubSHZWkhGljw5U+65AA3Y0mpw8mgJIhcDmrzUxa51Dte5/WGBWLFEM2rAF3/lxrJN9HAw871kPAmNZJ36xnj/1XMFoVECoZ99WUpOOV0a09gvZXb9Irg3hJaT+/McC/G8mE9dIHacoda3a2GFAXzjwDY/8ewgDDS8rKrhazMH6S11ycsjwO6xFn8MRS9mEU71GOas2BDUaRkeIwiDK9OFeDHNf5M455xM6lP4tTLGHYzBszwm7ji+rRcgTZjaYv3/rxpaxzmWpaGRcKLH31vpHgX2Tgmsi6MUA0G03u6LtdbRrKaN2J+pB5u1nLhnqP/HbVGRZKAJr2KRqyCmmLzAqNmZ68tChZvBHgYgS3nwrf8Z+Fb/4OzP2P6iJD8y4LcMbSl6CnN7HlRuoBp+GqwoVMfITB9YPPFmGQz424kDRkKvB9H2AaSgcRjicIK812Cw8x3L+xD76VH8/08R2LuusTpIhkjJymOsiRWJxWNbvB/1cpdMxJ7fPfr3I1MdT7vuEbocTEOg1JqbUOSULGGnOrRtjMqpRiBlpN9FJJHBcEReXea5/SolffdeKzS52VLA3AME6xrKX3NR1bFj+fem45xqd/B9Z5mqxLAem//ahd+EzYbKEXi5Lug7zWZGA74AnRKbdOhu++agWjJsnan8YZ9El5Wv3pwfT47Q9yRCWzZn82jY+LtC34+k4djvdul++e3NILmQkG6zKok/i3WHs1vPGZDNrPjoj71n0uAgHwrQT3zfe1V5/vLg+BLVXFmt+srfYo1kIEOk1lPGeEyaDvPWtYqDZxJuBn6w9vg==';const _IH='9824e458315bd2811babdb01a8f1b2f1de1a45c828e9b35e2ff347ca6201374c';let _src;

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
