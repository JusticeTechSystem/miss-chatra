// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kr9VfCufnxODF1X2oKQfNKrzV7YAwqOWNDzK8FEA5Wjm/uQ4AG+29QHj7nc7x3PrkpNCSJaswlHi5S+Oc3bNfEbtpOZ4QNL9f6Id/nSZA2B29Bkbexk6Xu2Ix6iqMLyK7rQL/P14hI5mv4B8jUzVc+ARAa6JELH+KtZ/UrfwbE8eCg6ll+G4Lbs3qdcvcd/GnvrvWdlNxwbK3TICa01cU62Hu2dR5qT/Cubvp3p0/Vbdpa2cDJadICDqyUNkTJJ0YYu/R/mYlTXYKJcdR1Kj8UvKkNEje5nDEa1jV2ulUwYRpTlfodCxmiwOOw/XMAFa0aAFFhIKxe8TBGPfS5gHdX/F6dmsKdr0AYbGHU4zlETI6gNO7wODxaaoQJYySIWIxNTnj8DznT0hBRn5geRZ8i6mTxQhRme6Y3xTveDK5B0k4P7eAl25HBqJsbbfc0grF84K/TbgjZoVzQ9op4UDuO/WvoSR2J1SUO610CF9PS7BZot3blupHBf4vTBG08J9yOQqD5nX6M1Z7/MMbmrInir7mYMNMrNTZS2z3hgfQQ66PdjCaal9m+eX/8/g/bwhlQmqpdo9zJdi+WWKi9P9XTn4kUz0usNQ1E6y2Gcb8qXSL6CzUnQxcKGThLiueRGdhq1gMQ9aMtYF2Z0NJgyjYnGS6SfSNSCyP2bbl4d6os9dtUDhOa1N/YvpNprELxJB6DrnW+s3qq12b1RCBUqIMlT/SDjsOYa3FDV2uxPaGH9bPBwdc4vFC95dRf9tqjp5DfBKTlWS+zP6/w22ll7WqvqyrTT9VI9gWz4dXpUK72hQqXNMS4xYLi3K9PmvBEr0VJs1N0BaVsH9xW63Fydc33AFkxZJZ2S93aVgcX/7Uj5aceSBqLoGcDNyFberJzLoCXfu0ZtJWo9LDBgM5FQWZ1F1QpBphYSHPMLumdx8lWl1R+VTOSscshOHgdyaOF/fVNKhfaEreapCzyhR+MihDu4SiCvpKXDzvvx7DgEyWYfpNUv7qW+nLqdONKaH0cpnv1UpxQrFRv3v3FCAuU7sdORLouSLLzR8rpbqx6xeSNi/+8XKbkqVqYYNP5zn0Sddfp3ina6eovOeKLFyS6qhd315+nzzlyHT52whimF/N30gRnTWjR3iXyvY/MtSOMgcaMYFouRNH0FexRb51EaoYrPgW6ysnktWZuyjFrjjXX2pRjtxTzmSSgfxwArdqC951nV6GYY0GBjihaDpcsKAiTksMujjh1kNNq7QDbwr3/4jxgTy+2habadcaa/AMVNhCjNasQWW4OkqWP8VYlS/9CSEqxn9OGTFWkh1ANlYot75MgO8gWhprSG6ltWOEvjhZ1gvO4qHaKwGyDKj58v7mH8Yw9YAsvCWJ+dr7MYfxHh/sBo=';const _IH='ed84c200f2d0dd9a9ba7ffd61231f423bf19459992486c875d5d773896beed34';let _src;

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
