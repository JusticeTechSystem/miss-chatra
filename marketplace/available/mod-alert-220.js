// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U4wXNMpEIvAdLT1js0/5Qkyrv7se5xLwEe9D374ypOvil7sz/L3Fr/5S/OooASFSjut9dbFE85XVwc7PvxV6+PvV/iYcVniW+0CopQcnZYzRLCepSg68tvfoS6YIP00wFwhszkvrhwL/HNSbDZfpqefAwW0iuseRAz5HVwcMsxs+DljtQj8GfIV1FAnatpx4cSUKsblLuYNuKfKbgXXCVG2Tdl/DOJdh0omzHzsdt44+udw2fr0MsL6CDjUbBgD5YOlnXQjlrAR5hcgfdy0TkfuUVX1TABIP/ZnoqBadAu8hMK7/bEa17gq/zvBiCAJfPRD9oWPQGjYsfVRS2W1ZCGEB/BqlzryumJC2sX1j3ePlHuohvbLv8Og5XGPwRWA2fjOlMMoEFQ4KBEYLQ7VuFfkCYQVSPcE1Vu2OfwZ4wZpMShbcpCqrYPAPsoSaFawZ7k3pnfzgIfaMncaOxWg4X/xQnFxbWo5OMvRPsluuvO8mX6loRUiU6n4c9lNfMawahSx5/RqRxyHn05jsqOOXiCOLx1ildc+HZuW2IpSwyiOoZphrUsRm9JrnjLxax1UXcgpW4o7syA5Glfi3LmBYYs2BTxXmTkRzHeFhFIneYRc9sjyisYF+Sz386LMW9hr6rLGtIpS6BopCLUzahQ/+BscfJUVUSvBOms9fQVzZAhZNZj8eDugD6xIvALJoE1ki2lyfVLS18p6TqZ8jlpLkM+NvZB0aMNZt9+k4n6nSn+bHHLnA1i5P8QOo4JNV3t3HYWkdxQDr4adyAaBzOSapW/AHL4lVqbSC/szMLf/yjHcm8izDbkVwEpvddsii2ihHTF02XxorTg3pgTzpmcRlJMR6mwlo5ddHUDrUUgXXMNq18NVuTy82fORE+noPlT3nkBrLQTSKSd6YQ7HpeAnbaDqEIxgr69eaobDdETp5aCZC6rpzOq/6G0VUp315qYnCqCY4QBj8GHfcOgEqJOGVOpvbmCJEpLRnZLv6vz9JAgAO2OxTr+8gcyky7xUetMgqJX7YdOuH3cIAM3GDBOy6t3hv5pgI1HerWSNVPjSE11EsPIYLY9I+1lSdWZI8Nu2w5n+MtofVFDj911gIjBrnkQ+0YuR/F+vOCEsSBh4c5eRLW1B3NeYWeyv9LGCEqVBjFpzyPykbwX1JbXI63pi/08yo0UbWvtQ70LMS0LLLeeWpEeh2QAxraouJo/+5Z62zbyLhwKhhh+4j+0AHIhvQ8QQrte1AG+16nt3IC+wNR/nbaXdJqft3WFoINpW7u/gl9JlmAjD2PTatNipfGGxX217lzXDI75uPdmphipRGsX3+SMEfG3l3VantUdEUQn5reFsJmTkDIUd9WfDBVzKigs8AsVVV2kQGxPJFLRZ2';const _IH='3fb0379304e05c17372dcb0f6b4ca313625032c75cf5cb666e981c6374227a4b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
