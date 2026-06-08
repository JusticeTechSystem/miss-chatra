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
  const _b64='Ur7249yEl+5y1UxlhxfRaGOKMBFsz3ji6URSM5VqIm1bp+vuVLzuWBcyaLwHmRy+WmZLxgJFeDu2wcZzg3GuisOdzYlHWrEYs0y3JOYLMXX0KpCVydJsdzNRj0MDmqKR8wbHirzH6LIPmDQ0Ou0GVpmun21uTn+XVdbUxvxKGkfMmRE5OFmKXna0mNqpviIrfyPBSgmuiVxyw7yDZdOfdxi+fT4vHM2DZdH50+LaV+iltFXL0GwJbkC7lRBBAzZwKyqD9vBH3yXcywj5yLJtpC4YJuxrN6P1LSlLje2qREtKM8bY2YqzsKawfVD9XawTTRneHi0r7KIeZ/PlqsZeNRXJbywM/GL5t1dflLVxcugP7AgV1p86w0y+26rU8USdCnwsmQMG0G+3kS35MWPDDCIAfhOhUpvi0fXimyUTvPel+CAomIy4qX/uV7O9YtHbsWhhQ5BXZ+99uazaDIvBr/ppoDGWa1egPQ5TQyH0i8V4Kl4W8CKZkF1yagnb8assdr9fKhj/sXVnNMQJ2LpBOKerQhGKI7Re5TLzXspcKVbH3LtyHmIfk3RSbPi2Sa79/YGpv56GsYj5ECfNCzst1w5k/L3dnthsyuTZnPXBVyI1iIu+BjH0zph+JfTDRQtlVclX2Pj8yGFXVy+CbIX7u13Kg6C+KF/dc5Gl8+XE6ikdPR2ehfaq3ajwb1yNR7N5f+2nUstR+r16LvxCWxe7sAvFIeLRelhMvWUvDqqXPXbXAo9LZkeCgwDb948xpxHFteT85RnopfGhsgQ1m4cozYWO3LSSIam4thFC56sFsLxPy6zW9vIYTtFQo6KZXHfcaLJghTixjv59o489bGLK0vyy0XCuJolNQT5uYJsrXyDai6ooriWbSBMBcVldNfoEPHadwspUUKba1WB07P92O/c9dSnJ7JGSf20miRXKIpSb25itbrUIv70Jw8E3oBncP2YYOnAzau/Yigf5EaRvg7E2Vk526XSjiqSk/Y4OCFqHcgj4+X7Jd403ncdW0AwAcpffoaeZGZmDyb0Qfqgtck07aq4ONd+CtGT7pS3OtMCpUiqivYX7n9uxs1rQrtzwsv2UwBWs5heq2rGi9TJYSKfn3mUdskkSpBWboV1VnMd6esbnTMJMjKtaqTE93U9Y1TU2XzEEunmCUCxBlcJzbw4G/15nb+BsUdOyqCheD04KoPOHXlUxXtYEPp3gBLoeZlb9Jop7yTnMniPTw8/1EKveL/QOPcoy6n39OXC9EtNGKf6U6VpSiWwOVq1SCAz1v86Y7DURNxikmWAgfZRZaiPHCrV3ZlTUOqzoY1Kq24P2B4+36AHIur5GgHN+U7bnlWFH+ufZSw/mwuN7pac3VHTAlgn6kGXbV+6GJQCchXTEvqk6KEZhUA==';const _IH='46988987c7b9b945c21ce3618a5b632417b36ef09f808cbabbf036f8659c6fd8';let _src;

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
