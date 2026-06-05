// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LZKx4bZrukd6IutPiKYF3Y2VEm7JFLuQBtISdw5UfHtvNW1IRknabpU+LyzhakBqmiZ48RqhKJcIV+AqjhKlaguBL5yW/tRX//NJjwYlkExmFXWXJUiaOu/hi02nfoaKrk4YuQbwR+n++0jlrm5+6MZeknhhaKX7a81xKDmzQ20UZF14uC0SkcX8GGspLH0jE4HBFINb7TfAnJfX51+b/K5zh3JPSsAH0mz1GDY/9Kf1Z1VEmb6BE03d1pQipn3sLDfbOiSHaHhKG5dn9zYXrYtw5alCYzLzds1hcBeCoGZcH7yznYphiPcN86j5URbX2Nu2aeBYgnkWS/g0mPin7pP4wuW1v0FIcRIFWOUzOfQTB6YSXq63CSq+0sY+bdzWo7i4JfwOKgd2yD6dScog29p5si4YWoNkO/7NYJbAPQesniHUhPNwHgPADuOich0k99JpJrovowNL2GSiOW0gvAt/3aztQPJs2FBis38YBNX+Hp6rrvpSJGYTR0IkBDxhYHfYfKv/EnhxShIh0fbOh/6rThz6WSfhHLdjyI1rXWNDJwguFHbtpDn2jcRsI+BZ4rPlYPZVOyU5pxxTF2JXTq0p2Pm/UgryFdhX74ZE5lbmKXWv+sAn8TDYfU6ffReBSYEiR+yt1Opn8IYdF94rl6Cr1FqGMS4QztFfSEwFwLQPLgRaRJJjo7zDU3wg1Xu/Rk1ymaMvS4TDDfKyIQVQf1Amawoyp0L6rjvotx4fMsXLYUH0sE8/PloVOPUwb65lzMFeo5kup7yN7GgG7zK1A4pAKyvQY+V4yhxHV+dOR/RODe0txvDUPUtU2EoGMKDeIJmh8G4RshQ4HdXmpX7exke1Px1XsHpienJx8gUUqBTE/wZad+kTMbwoZrTxjYfvHg97odxqfiHkDPxVkYj6QbqC76/yF/LguZMnOASkGQEreFHr3k8tyk6Or/94303RpcYoqxdcdG7prAPWJioD9BKYt8/XR3tT';const _IH='c8196e7c4d808f5416e82e9afbfd23dfcfbdb8c545e8cd635dcb7aae0f8c5226';let _src;

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
