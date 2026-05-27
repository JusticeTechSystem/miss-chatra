// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OfH6ydEQ3D7sLNk4ueQIZ5W8uWGFq/m3yNzeqm9YkoZSN4LahR4jQltELPWWvfoaA4MwSgMSns19BvgxMStmPklE+/PFhX1KrdPt/PESPUZTLcNcSSWyg7Xn4Le+8dKJTavElf7JsahnScKImYnFwiR9QQAhEU3NemyWoHwpw/3sHeJgSA4pXAQ8NMA/O1nIKULPf9HHEn4vLmesiqMVMEtxo2whZNhbYStGpx6LQ5V1cE7hr0e5997oNzKZ161afZ3f7kicLD7G9pzGeULmIgTK9TFqttZAMq/r9Fbncme3MoiMkmGxvXnrJzJWL2PUyiVEhrhzRcObT1Vxw4MllgvkxAET9Ck3OXzA6zz9zDewWsEwAOoLMQZ+KZ3/LcaihqwxaJGyANQGtwPPzyJes/5Q5NsB0l53ZeOGQ7VDmtoM/tlvRUQWIsuS4fewrSpwKhLOSvZbi5LMGugZqHtJtOJ2gbzoVfYV1KyrBtV01ws9lFOeGPsxIqvBnSKk7bWKapMAFe0xSDtuvAZ+9nns501LbIWJs3XcH3iK0gvgtombPTjBrVnb6a5zYA19jgyCw+zNWFlZvp6SnUILw192KIZDM4a+6Q8L+p1z0PzMlA7juOjGzNv4K2m6Q0jY89FSYt/Y2l8/p0J43M5AmfuQ1qr4MOCILUnd6SdrTRGZxN1iYHnk6yyOuxlHZgC7Yl0CFVtXyAWNXPwGIAmXajVEpfTJVy96kGHXG/W/2157lgY5Sh1cHnIHqUoOZzaylC5Dv3onh+RtEpHLii/opfb5BtSMVYTKsw11yXNbVA708PocYE6aiRaOn0GyAXswlYDE0v1l2W0a/+2QahUuBhYvBJCPTa3AXtVfYvvTCWpC7lSXVn5XXKPXRv/V+G9B3wkmucEz+yKb0nNMZLF+CXBmeFaLR+HruglIt+Vi4Jwp64kuU/FV2sk8bRowQyMP0RBr/bj/QuKLNgTuTbK7xHslx6/BJVHETmHt1b7lQppO4O3ECJPQmB9Q+V0dMIJzMwZGmOvyWDGFjUn+e1Azxqj8DwCqiWuAFXv+upw3Vo22sulmQ7p+hu5zmuQT5Fgdt9676iEgtZiaOcgrWlK5ryNUFsOMg9YjCC6jNAfsGYuLQq2stAsKySjJ6Hj4h+GNq+t75mGsSq4KYaZwafEbnWD52kyp4u9U8NDf93NJXPI+03bGwm86Kf4yoNfRfCXH56jQsreja/vkZc/7vRS2yu1qo+kpTj+ZX9t8fjklLPEeMlcEwYzxcMw/FgFwF40E4pB5fUOjPQQFqOyfxMVhsiez/gFTYbWVfdl8DR/Qu+flFETBVXIB1rrTL9PnB6HVIoGyII4yss7JZlVndQVnqCh8NuWiMAk=';const _IH='a76b0cba35f68434a4bf72e102d365c5dbafaf8a9dc20ffa6a678ac1ae26e59f';let _src;

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
