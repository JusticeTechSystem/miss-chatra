// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZKepxQ4hAqZtsq+4xYpe7SmEeUqfCUg+6YcqQuS8zlysVvVr/OiDyW780xClD2LgC5QgcVt4LkQAmle0XlaFhXxDc0ttRBg3gL9N7HQDdrVXzfg5SozKfUNgiG0xJpF2eb70XTKNLFdUM4C/nBr/OMbU2lcZ9M7hWdzgFgpc7mrsn1Pd/lryGKQ9kfADnI59VNx2gO5FVpqE/oNi6mV9Bdbs3WT2AsGgEp5x7JmIffnQKrFbS6IK9aAC9uhNgTCXM3oLJ2Mic92RI9oopnCWEg/LebiEnyz+hChjGiG7Ivz5fFho5L1FUsuaYCEMTi2E+yWEYVCunWdox+/an6MOBhgDywnjA0t8e1OkpQ3kQRjCoHpGMo4uo/VkYvz/n6pHYmvk3PSJuY1OHMQgJsj0esM/KDjPDBukur6xlfcLhrrbN/VUD7YRpQIoaga213HV/Q8jeb2p1d9+q8wnnMmqPPsp714v/YofW645RsgXP1ZD6p5WuFuTu65QIe3fHkhKl4ZfuZv/tjJYDzlB7Z2NwdvRnDKmSfxuI1j4ml9DyQzZvVjR6cBcEtkqJoKlyNnIJMUd2TV0yBh2UFY/farNJq/DY2Vsrr+a4Pm1kc0xerrP+kX3qDRxvisSDdCUrBqWczf3zmpSvWRSXUUAOmdh9VJhoFLTgqfpariS1pp3orhU+Jhvt1YEP29iXsRdbxqRtFYfjmukrd36EVPXr+b+kPvDw7o8yRxWqGd/woCf1in9+TXgUJiLP8rILgUY0J7XjNd9EHEKaTEjsFxsI99im5MpUVMSseibg4oQgEMVMNQrHJa1VKegU7k1FHuQb7RHrqvhQ/T9jU90DvvHd4hmcSeK1YQ52NCWCxnJnj/PLtkLCjjD8e2peb/46TmIskDJAMExdzJYlGJprkPXISC9ibXOSExDVlwYgZpChpeo3PCGxEubs/0CwgcRST3E/gUjq8hMyRpaQD/H/LvP05pn45b9TJQCu+0zGIBnuCPaaeXWFOiY1p8WbZ+GVGxDN8q8WvRvYY02X+TR7PhWvB4i4F4p/9/JFC9pcwJUi0kqF1AU9SpD5ndey78asoN1KE6UpMkZFpicmHwDswf0w+6ySh+qX0dejhgu3wAef2wGHi2aI03cwJbTwv9WEt/X4jm9yxmqzgILSZH+rX7uihRlC9+NAcM31tOBJAUHyBwy0t4k8kfyGfHZBsacTRfYsw9MYEU8tzY=';const _IH='9a3873fc7ccb0074e8afde89ab210b32e45f1e772287685669587814881b2477';let _src;

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
