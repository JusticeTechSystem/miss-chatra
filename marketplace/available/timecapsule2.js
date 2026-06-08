// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vfBNpYkaYIaPR6njSCSIjxYEkfUHcEZdZzc81cmAnxdSvapGj0lwK0Sw4cOYb2MYQapJPFS67YG8a3dHfBsdkpPd7B/f/Ho/IlGUneG2j1phhWrsPJJjSznK6br64zfQs9aprVZYIKweYy7okbIQzcVsM/7Q3QBKLRer54Usc1m16X55Vf3BWUNPpsVpLUv4QG4/nupwJ0eotIe4ooIohzbhbmiUEaK5WoCGmo9b8gY+cxgDebExsvmCqnCySKoIWH0UVor8tFbIRNE8983UFPM5+wzZ8pOrNoZKQBgCo6hBFXAIsc5RjNQw6SKUqw4Blmyz/5u2ygnNigFJ6eFOrCYbVr++qwQf+6Jb1JpgSVZeOJlMEa076a1irHu1GFvV12Rh0rBBCqAvZ1o1OEgIL0RFG9LYiWY833oig+Ok6M18LX5XCIW6RwFDIcPUmcLvVyAafhHQ3GBhTXQA+4N6wT+C0+PS8F0uKSHfl7khi8E0L6aQr94b41bTANUTKx3xPru2cHPPNE3t71avSQyVTXcoISplgOf/H7uN0MVZorg2dgqds/GEHmAgnIUAmr8pjCXSvQzsqMtRYaxHR72/Qe9o9AeKvvNFKhfFCl5NmHMO44NBU4Vwf0An74z292VZ/a2kHhXsE9yPlAEqsqtbCjpmwF679u///Awh1ESp9ZR6wuz+fTqo16xnZwumwoo2e+0mHdp/jCqm14aWXLdbiySVaPAdWwuLK6FZ+5JCXnAFsVbXT0g76vdB6T3Gg/4CBJ4Y8WT9iY9oBqh/Ld4jZvNWPQDxPul4B8Wvzn/NqGWtGRPLNvBwhNw9HUC6yDi4vvMl9MtyophPlHwNNxAGPYPro0Pa6O2q9opKh06AN38xloXtsNjOUAV507obQAe3uXU0K6OvmXfHE5YfRYE3WqIjk2yuQx8A/4X2/+OOoRGRVnCh1ALR5rFvhTCG2GEfFg0kIpLb3qP2zjRpCvbRkZHyTJ3FSobC+4VS5ty34knQedgBZlEVd1WbM3GTpCqL8racgQuuIM7RkUvIehB+r5V50aPPx3E3eyn5vTEOJzaCsTFaB2sgcHqZpUZsIZ8RCAoR3fPKxlj9Grr6VLmQhOR9FORdlcFZuhWqgcOE8/2arlIFBvuXZGmTpUZf0pfZuVfzzGaoQxh0AzsoFHPBQpnwxvMd5Ld8lslm+3mlhysUK3I6xXZRvoizbmz83Sk6Im5QktVmqG+P';const _IH='91c4f30858afef1d5e3af4b66d17f478728c5ffe8e9e50c485dc7ec34eb6fdef';let _src;

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
