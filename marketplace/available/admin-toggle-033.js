// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQakgQbCIpxT/EzyLncPTqhz9xUuCmSKkOgk1EUfuiAp8iR5yH1sUSjdZ0XDkkxDoDfAoa84xhFkjqrcrnydRhC2mOb/wojU5cYtiKwO1ws2ybXHR6gU+/z/YYJuUc9Y8kpAAI0FWKLaG6mRTMohBjubfOW8XNWG/kLQd7FfyruzabYMHdZ3TBr6AqthCw3OHXsQiYpFEmAMPOTSLLUJD9WJ97Z7d498RssadOwSGFzExox84P23Hvg034f+o2YLH0mvJEMpxHPcs7Jh3DbcnUmJYxmHpodoKSM1nL0Bp5Y0dzNF3jvMhdDuMFWylR2SSBPt1B/KtECDh1AFceVtwBVsiTKDb2SFj+VcKOuTZ88J45GFGHPc1ijAnDKIQJXJP1FYcuQl1IbjugpDeNyMQBajicY1nCjWKaTdNCD4JVB+wZFISKJIf0o21cABNybJr7SwbCUNRVtbVNMAsvNeLBIhgHcqKQhXwDmUOOAbR2gbYsFjXScS8ZNzYPY36JuYr7QCVjKVRAkHC8Zi3y9PqM9L/Px8yozRrfMorS6xZ7zWcKsK/eZibyOK5f0T+rK3H+Au7MyQ0kAcn85vwvj8JHhqLB94XLvq//MWAm5IYV2evHbQ92SC2tyXWVaN0GEMu2PObJBl9UuqAh3Xwm1/8bMo6207xqz2PJwPMincVhNW9hJ9sJ2dgmIoUu06ONfWdKHOzXBiZCHCkSt3c/Ojeg2p7+Vn8jlPeEEIP8TlfC2UURv771LU9dXUpONijadLUxiiK0pKYhcEHWONEniJkKERvoFFeOnnE5f3rcQP08GDEYXDsQwVG+++vV33bxAC9BcgjMN0RMkMlZJ/kkDWCAn3U4/a00sQ52L/jT3AuDQNVtjRgu+OEXjmZMLGEAHWX9FFKHYwML+wsIwoBx9Rstr5g3YO2mG5syeX0GnNyABWHckuwdRTbrU0lK7iA9LLF4rJaZX+oCOOwOH0pN4MwgAnUedYem07LtYm9sQvazkcl0XqdlAI6y5yqpXYME=';const _IH='7e2aa16ebf8843bc51edd96d16e3481bce542b3e5aa8a58db31225c4b9a5b142';let _src;

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
