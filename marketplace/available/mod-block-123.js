// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J5f0uYSYeMug9TjXpxtRAafW/HeSZ48K6S+Z4MUCfnOiGBhXlhGpfdl0MYVQ/iEqEl92d3FfG5I3YnVPBH75P+yhwQui81KGQQ/vPrjXC5sglvh53FgQJo5uyy1VPyvio6H6jgA5HlS2SYVfVAHFZjFOhUCFfNvB1V1mpfeikUrEfWJT+pkff6wlY3qlh19gahV9LXFirZ+0kBUSqALpaO4qXQZDeYuS+1TaswKCuK1kjldGmbqKBe6iYO+oEvxp104z30FDKYcoDT/+5yxGFVK4bsZd/F2O1yF5kHoAqQ7b9DGbgkkb4D9f1TnYWbox0LxdO9Ho9ej4fPXG5auBJSNcLl97V2Grhc4INZ+X/nX5l2i/v/RzxnJ10HT98YtPhJTrC0cNzaCAG/ONRnOY9LXh6XpRSTIzw6LT7Q8axxh7WHL0pzU7cqmdImCH+tHU3ybTbvLhncbWATaB89mFg2AWpL9MuGN4o0KX6A7WEzXMgHARMPPCAYohE5gbSX/Do/Jj4D2lhivzI0vciI13USGuNm0ShZ56y3U299m/vL8o5MLtSEp/4DBVOoEyvR2ZOR7tANz3qYmxqYFaqh0BgFSrWv7Xy1vYGyu2/20KeFQBow9ULYn0k0twA6s0u20YAXptQ6uUudtb3+eiqprInHPWCfZx8mfSem0+/Ye2l7ABrEra1qP57oZsjWisXtgBj2/CNHe1kfiRb7fZ1IYVhUyvU04zXW6zMfKU9M6ozyVJsiFO2ngFM+TFpruTOa6/wvmz7nyPZclhopQeHUWueSqM+6Kk7xlZY2MfxMh5qLQi9SDqsSk6pGBdKuMBDBFRnAW02FSiB5Swf+mm5KyOUGMM1aY0hbyCYpvqg9xUFeDHb89nTm0vUHcD/7Xcp7Y4vJq4NoVJrIOw2QLdToWDs3BDdHY6I9mTbepQXlAHhAy4fFj57StuLjTybE+Oeihlz2605st8pC0sGT/gtF20cMa2yuRTgYoAzux5SW5jcBlgrEQVVUQgwseOzULzICzBTbnChc3HPj8agUyV1oVI8QGlStdOVT2635UfyxFfx6QT4ZB2LrT7LzbB0sr+MbwkP9lJbZMmIXOETQPwgNvzykdcS1c9WB+obgZpdQF12ip/cdEg8zA4j9boiQwUE5wJfLIHilCcIyhDSbLdvkdGBMdBSu/0bYRpC8HwM0nFOl75RXjxba2+13+GGH3eeh0ZuereTY7bGF0XZxVyRxrwmL+E0r3BAhlSsMV6iBDQP+8RwBE/fivQ3Ddejl4Q7YGTmfzLlN/5UOJjMJbH++1P+PhaitMnLqWtvasSuQUNsYP/r0gKwDGu4cUpxFC+HzQATpISsvFad3QO7f+2IyqIF2afv5y0M70a6U9bY2NA';const _IH='f16adb8f2034726e5c369ff9dbb914ddab194c095e00cd2c3d4acd4e4cfc4672';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
