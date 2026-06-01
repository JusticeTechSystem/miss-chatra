// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ12vZzO0usBLyVdbo9sxn/aT+lyNx3PQc0xepsmnatiQRfhz6Nv1QNN+9aIpJQ0abc4w9+l5j+7fYIOK1j3txQGwW398YRc9ha+ebf6CRVj5vj8SrfLp32/5lKTYR9Wp/dKCdDQrXpNuv0Z1TuHH9SxhEdRI8Ys8eHI0VQmIZGCnwMpUknjsiqI+PhfMdptz0oXMT2F9QWUslZ09SLkXAd9dxPIC1STIw1IaufkTW9rb+t9AVA4C0+EaEM0scOMm0pGxp4IL1rT1dMugSwMnwUflijtkl/rvb4ns9qifWKfk9DDb+A5cg08ClNp/V4eKj56ULT0UxK7zFbrU1xIMmY2x4pPQjcy6OLlFgjjspQsFkRI5nnlYZlwta2dNbsgcUJX/bC6ZM98aC4RI0UGXNL3cDjKQzXdI2uPT2mITRw9DyBm8zwT1cXddCwbzzYcm/pxMJ4s8gj4pRUNO59aMdfrtNQeH1UozlF+nMtNDQG5onE+CXAeCRGayRjW600PPpHIZ77VVMYVSyDI+K0URAayyqveK0CYIY/dRdmsPjuABXLr4xno+y2XgBTKr1oDpwvJz8WB3FMcJOoW/FIg2C0jTujuLYrmI53wgkJl65Rp9E1egzGqjNkm/B0cx7jPLdmpbBJ1GAgat00ILgCusHQuZitJavHASV/i9IEkixbps8VHGvj9IdukiybOCMYlSjpic+OeAmiFMCJhWctDhmGgzBB8Beu/uBDs+wLrSy3e72yH8GBOAkdqtrwpI1OATcVnwvEK4Mieii1QU87M2IEl/rpo1ru8hWOY2iVwnIvAK8BzEAsmzU3d+W6Ajr0hLfPdYuErBskj+xG5Xaj4jWDVG15JNOid7Gpt/QAE+ZTJpKvhpkYs2NzeZAPs6c79MgKc02esbbBYrQY8TdA5hDo8Ybs6KJi68NZHXjo5vibYH37MOMyV9AVeloZuAhyPu2VRg/IgzF07R5ym4Heqosy4cvXE17W3kjj8VRnLld2X6JilCFstXZru198192cIPrMHx7nlCaWQvHI1BkQOJ1H3ekBLFOuQ+ZsUskkYvV4Eo7LEcj8TI5VoPI1gduY/1Zlh1Phdsl+VkwS7GTczdF339esgBityZxYNtiGhCOba1PUAPfk79YK27FwYxwh8gOGIYkA/B9lsE610Kt2FCkr27/FyONuoaeA1zCiN8gMxveP9zGW7HuPDKxbhEloDlMXeNSA94mGRxtJXbWu/LtYhYlZDgB0FXPdJw6SVVkYrLE14wNsVXEQAdSlagY9z3t22Tis5I1yloeJjCnemV76o51CTcViEuqT/ZjV58+/H4yTR3Fel95a40f99JA1VtnlcuX1AJaLf5GVFudrFSe49V5c4ZMfSOkSmDkqWCGlKPXvTPQbKTtgUlPzJWj4JNVCZt';const _IH='017c95c9055e0932b400b4c4efd6c369e23648ca0bb988130f47d1cb13cab8fe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
