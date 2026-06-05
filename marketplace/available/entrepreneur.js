// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GpAdsAQ3dcV8XgVn3D7o7pysbW7gMsTe987sQWgmASCwk/Tr/iI3hmIzE6AtwxGRL5GGyXD7LLfKcRb1XnhtlvXP+1sX/KddM13i4La6D4JTKq5BK0FPSWTevxHGMMEoN5RRGhZRjF+4Ima2GE4JA8eBN+2rYIHBBD2QT68n6/6z4BUmlnm63yC4xH21fyvgpnIunT6OtSvWnpRbbPM7m+yjwa1nV4zp+IrUqIVKuqd9Yy55qtMT0BtLYLcJFTNmS7+CCqyGGQrGd+eaBGgMWzh92CGNtZkeDHJcErjYnbeyk9vDyV//BQ7U7nBWFwsauB2zT20gYzZzC/bJY1qRDoyHh8nJNpX74SSLxsFSBDx86VZQHM+MH944TTh17ODmwFz1iNiJ5cUy0E+GlKmh5faha0Zqb/SzF4R675m+Kn2A7gPrTFH17MqX3aBLijokkpDfx6ERpahsHwwQk0jT3TpieYTfabZd/RL65OYQoaqDdUNoSF81slpDHwYb4UQjwEh2hjnlWhuNaK8Sl5JAHfFhTXTNZmfu/IL4TzKCn3fKo0uTZHMT2lyBg+COIwbGgLlM4OC9nMCD0QAw1mCDoDCu+nt9z1kkHxWP5kDakZTXop6OFQY55VegGnhoAQPSTX/C3Hzf3FMsTi8EXpcphq0uuEg5MXotEGOGO1vSQWr1aTPNZ45Ylm2RlRAYkTeVL57PGTALC66mXF0JfoRcqvWF4WKv5JUlPj4SMm27WA9EPjQcjlsFF24CYZDLW+xqyBXstsudihzeIkdArwS55GQKGk+tAIEnyk8Xgi8JSdMXBfV6Elrfb6wmvuaWN3KmfC2ve83PfHtQkIX/4RNIiFMPyR7Afafrp36pFvPS+RyvEHyX9ANzjabk2xBL+3ldLEeNVbomp4NtPXrjiDKnLbJwX5ER+rzvOiiOOPR9HFZSU3WwWrEuUy+s+1LMGJmh7Iisf55VAhY/bhLu22DrkvpErO0FK5uRe6jMy94ryDjaFJK2LZxkGUQHqjn4mVr4eeon4S4StdkYHSnWje9ePJlWyrt5zPXun7zrKPngsBEiJehFw/m3GON8y4ibqCwK0akthgiDCNCzbhgigW/OT6q0+EjTU7pWYeoJxkadnPdrIfKA/7l61fOQl8iI6xhkeQ9xOpqcQwz5/BYbo1PeDCwUZxlMz6UteSyn1uhQ+I7aIgcbYL1f4GQP/oo1AsU7aBWohlsvcP8=';const _IH='61739bbefce8cad4e7e73dfc88dba682cc9aaa95f917bfaf178eee623efa8806';let _src;

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
