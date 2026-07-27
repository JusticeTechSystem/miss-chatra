// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6JpUCJ0wyefMDH5gIv0EtyisbACPvpo5DI6/bWQAeJh36ta5T4+TgC/ym2Xb/KkscI5GZ8whQRBFbRIZm1tERT++ZcvStyL46XBYN8fikcpRXDWm7Bdn9/F+2pjymc4Z/sOhdXv6xwgSs9v7ntyvcgQWbo/9rZgl/Ozun0Vk1clXC24vbKcM/p6SPBvJUab/vk15W06FMo9LggYo4jR9PU3PfrbdXTmFo+XzReEL2eVspiwp+9/R+w01GxqOB7Cqbu3lRJUHxG1KToJoVpWckSLUt40GFnSftNSWYUhkbLVknMFtcLn1sZy4JUtdcV+B7+/A7DqW5ko3k6oFKRKp+KxhcubS7cwNgtfb57CdOYmafNXLnVANSKOs3RQMdYxmpSM+UHz5OA3cl6pf1fonAKPvIul3HZaYrjHpkY7kMdT2SU2GAbg4N8moj5U6pWtPPnMefrHx3Xvm4J0gLzh4/9hdw58asTenW3gPp0UsEHlUztkYkOaXhcB0AAIN1zkbAU+PJ/PYJNuePrJF0JhgsSgs/vBKtGe3aFIz8/Gl0yp6E249HPggGJ4QPxT6iFvZa2jDgMOGgQdf6GutqkD4/wighSDjdenCUzyEntyzqrHoJunsD9pYQRArpKGX2AFWprm9I016HGNNbv82qNu3Ugegt8R0Q25YXXR4cQd9M1C8ovYVNOoY7gQXOySL7s0H1Xg4RQRQ4GBZ+VicplmlGTvXP5ZF47HmYrV77Jmq9J8KGIzCv/2swcEzQgMzdlN76Qq758C3iE0ZIcUz4XXYRmwJBHpkr/F3bjPhW27GYkXs9swqsAUHqEwY8s8YCCHQYPICW1xpTtGjIpIVXz/gV+91kSdMCgyFLmpynzw0OcsIzA8oSGH3lctTEGnQggyZherGxTY1ldlew5McHTW4GOXI7eWEg9b595qwx6Cz4PNVCZloqQDMbHUKZs/r85iskhJI7n6fhe5zeXpH4zen+lnXBEoVdWpSIikgpLfwbeoGrZXsUPalskeIlDr0GNxFF8vB/2AWJsY90r2T8+Ph2OW4gE1ebkFRzfLEo6SR56fcBdkXnKcLlYDqe2DL4RODi4TkXVuEex7mA0O52asSbZISMj26OgeuvQUm8ADnrZzr/rWkqoNZo0Mm+y9JcToOQKRgtLUW5tH1F9+OF4Y2b4o7rqJmVxHuyZEibLBWWxhnnstbvVrjULrjtyJhuUn5EFTyFu8tt08aFMNElaf7VZpFLI8upHS+gRnewB3qZZ6DyT9UZsAuW6rl+kBRYMaucyqFVnQzxN5tVx8VZztPNfX9B5glfkvfWluhJIsQ4QFZokafsnhF8bO5oVLlXH/HxtOnXZ4gXAFYlIYYkS2yMUyB43kS6Fd8IGsGItzIQKRxmpALWYVcviNR4hWQTQUEonmf1jm930mNEcLgGbuJW5U+/mAIhomOC9SxxEq0UKoOGnoJs3bPiDiI2ecJ5IOOE3o5zS8EOVr90aYJm2GLm2Qvr4uSCG3rolwAiHCJnDER3QQSHhceZR7ZKHnXNoM/8PeE3w9EX6d1vxv5phwy0w80k7DwXgWg43Z8129ItDvzzXRWCFBG3dW6NS4LYuSQbqZ6jQASXAX+8rX+1Vig+9Yg8Vp542INzKf43Msp6Lfd1uwGEasvEgNpXJCGVixGEc9IlBGMip8iG2+CFU6Zau6Hi6/woTXPvnJAM2R0GwBa0axyul6Yn0HU1stO3TySy2kqJyvztAqKlglR1NTwsOABiuQPGNsflDd4OoIcOXSgKlfRnVT8pQIZoUX37Behh+keWYpotDVNJA7yOSwfASbsj';const _IH='e9ae600dbdcf0e907df5164cb4d2137acfe06eb928b9413e64ab6ec2c11b2519';let _src;

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
