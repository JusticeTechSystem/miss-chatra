// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ze8Ld2bDvnTOup2PLfvVIIh856tYQAkmp6lHzkA2ztswkk8xnMHaczK/CcaotVui8KEx1YMsvaNG91bTMm/vmdTR/cHvPVIRaJ3tSVlwsGjMynZHaLCvojJFnhhr9I5FunutuN0nkLQFhRQjI/FX+4Owqy0g3bkk3ll7VKL/mkkVmntb5jnX9Faz9jutIlAoWVdTcr8XiJZEISwsrrL5+4bQ4kB3lYua9MmGDwMDeaseLbzRIHLoiZtZ+HphK6rBLRwVy/c7TXzgEwsoyrw9YX5QigXHkpFKoWuBsn177mU6Xl9KBsSYz9AYbsaSyUWN1alx5i65JfEjy3r5kfEzj5ieaKKn3r7N99IZAnFaX0pQtlzxfziMoLX2A2Pw30YrHixr4Zx/gGdhHgRgBXMatdAgJkWgV37YKfPP8pclfbEKsEL5OgS0+IfXNaTWU+ZOli4SVedhSgNWMqQw3UseLLZJ3RBFq3bYQd+1HkwIfHQtovaDDqdDQ1dhspXYF7PXPzy1JUcmuc+3ujuchSbfESU0tVYGWCAGH1cnudFuTYbRGhcLB0fRXtUmYEJnrDQaFxCR9sH9Th7KOfnzoCjsjpSfuYCWkWW1CSAfd4fBO9zYGOOipqfeeZGaRhcC/kHqkbab2MVdtJD1k8EScS3yDpoFpMF9yG4INKHzT7re3DcMmtpYRQ7Zkxe7iO6xTaNTVNkXkAdp2mgazIu1G7rh6C4CU+yfvf22MxruJnn9GsPfMr2MfPan5YdlXeHrpVIaR24K2unOQVO3ys6LkintYEmqHuX8gpjOu1l1MTHdA1Y2BYKSec51eJ9/Dc9pOt1TwfUHCHHvPZGTM55pqr/dFMqtAjyDXrcsM0gmsY7LeCOR8vEkauqZky5PtbvAjrWQ1ZKliuhsj0TExS2CHppzAp1YY/oGcOz+6f4xI+Icz3tKjrEcE5rDL1GTo/6gxz2Ch+8w7QzHkqDeMNbwpriHfk4KvMnPhq/ykg6Yn09h2QX5/gnq0P2KrmdB4pa8e0gjig==';const _IH='73e35b0dfe50a02c92ef6393127487e4bebc49b2fe4a4c2d28fdf65652f74427';let _src;

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
