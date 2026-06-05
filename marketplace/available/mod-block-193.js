// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rq2FaKHsKbBbqlUD+lWxKBAY2lR/M2RUmvtzuBYZMiUirPrcMjPf8RQhbR2W5mTZJeuEJSgEJbsBZUZOL1JnyPeG3GmxyCVnFePabLfIHpefPnOzR5Yw/qZB4z+nkLk+jeXhhgUouZhvhefT+vRL4pcUwr6cozBgy4J75A8uOwnJBZKXKmuLcLLMkBhHI+GRSvypnpjhYuUmyK/YHAxG8PdL4gEisqRBeW0XgsqIsAjMR767c5vq8H6wE80ZpREw3NFa4A7wOQERhmBBA5tQD+wrHwclFMDn5eDnw+cLpVjd1F7XdPnVvoJ5U8L3pofOpZf+PHXXD0a5j/p21Ntkgnz+0GOCxux1q0tUHmTsIvl3ZDwuLpb35jlk43PudA7nsFKZow9D4IJe1m3RmfGV9F7wu4sf6jYrkpQk3GrSyMpCSbcCOZeEDR/P2mnlZz99j8JJ0LkcnDYC0RGgSWCoG/MAjkz66q4bKpdke/qKsYOiZmSsJO/7X2yOauN91p68EgRvEDSHwfG/9WvCCrLU6IjVrkrIIY/gGKQ5xuNScuHKdIjtW0bvUVMAXLOE26IxCxixALzCWxAn9ieSG1Te9A19PYCQxxE1MEHYmTwOUr1UXGIzuCYYHJBhvMJA+/f4FZMwlUmF0z3HAiRxsRGw7v5W6oVdn+qQATzoUpqZHh5GHbfgdAlcyq8Oa4k512tr/qSADY3OktKMtfoHfKhKQzrSI/EVYeVQD0RuYcv18FVLBH5ksyyqicCKp7WKfNS4JihI1kDhJm0E+BsQUfRYMXQTjivYYwqZjyLI0XEyNBH3ad7mQWHyhqEZ6pkfS8VGwIFryW2b9bOHNKDvMgj/OXvooYdyUasVdNyFEPn+2u69+gXx386GK91DQ4PGx50UUhYgo5zhjSYtTjPDxaorbTXMwjT9+uo4GfksywN0cikFLRJ90kS2Ix7J8p5YA91A4fe8htX/DobWh8weAknSkFlgVhaCd0tn8Zoid8pv8snI1CBn2g+lk3R9IXyXKR/pdP3bXuF1frSpse4umvV3Y8P9u3GChBY4WaqkcuA8cRwmzOJJXWa2hUhmt7j6bkqp/aJiZoQzqttjUJNBoKHZ6b8tqpYpE7SM+oHiMqDxeWxOmCj2RudvMbCANMvP4N76QJMMoj5LwlfrI2S2ZJw69zM8tXfceCZyJf0sr81jn0+YRLEWqDx/VS7xmLh7mLfNrc9CPCOBfZOSar0rtrByyJB8ejIpx8QVymarAWoh3UmTSaglE+B4v0TZJOmCAcLaQUQYA1dzJQQSQU+tmb1myj6bdkgEqCIXOMu4uUebjzZmXjQT8OrLrCXPKzQq8g2Bdx0VbEJaItM+EdwTuf+PpGan7jfVFvC77bIrPO9J';const _IH='aade84b6b3916a67060cfd9183026f083a4feef168b51b4bc8634d4bf6e6fcd2';let _src;

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
