// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a8AghRd6yqE16nGWQtj9U+pDA8b0yyjEOIN8/h9phwcBs3caaEN3Pd6cXdlrv36cXBS30jYfv18iloz8OqLkvR2+aXb2hWTNwrqr6QP2Fsa09EfP8BKEyT7C2ZN1N6Uun1denhvnDQzpRmDU3/2ilVCstR9ec1wpQs9L4RLdQvLDFdcCmPqdcmERmGWYo2lOthLN+G7AGdz611LDuNwC5T8nc/GFmxHkF1S3U8FZN1DlDJxluTQrKb/J7Tfzh13I8tcoIO9cWepBk1JeyG/f9Q96/bfKtWd9AzdYE5DKkfyFfsWlRoRchgchGyQF15DWsqzbll5e8oTTa1IviNVf7zmu5M8nWlqVm2JUXUMehHbPeNtboD9e3v8Xn1ME29Qv3dER6DM8Kas+HIV3gNADoz7hV+y6jNHINOIE/j/upGXFT5f0mhXYApKVmuffikv7U2vEKNIGDgTgfy0P7eo3qoZJiE709/qQEfQkF0zzMF+fEfDPKP+n/QEG+hrTDhuP1UJDsd+eLpNxaHRWFLVDYQmAI3Hoh9CP8Ua93V+OUJNFUzFj6Ted4ipcAh/XCaCNJbFM+Iojqs9C5Syxx+lxO50y3JrTwoYtI6qWfahi4oJQaHifH6rSKyHq3xh0+P1I4Zx1xRsmGwa3hwGwKYYia4VI9ZhPc73GbVX+UV/78/Bw0CSn7tF1VNB6hm/P1ZfZ6ZaW4nVNogBGSjJk1bvwa4SZRDOYiZXVsK6/DYN7zhnNnOr7YVUVUzHLgbFUu2E0hpcYE2FjfCkXDlODpv2e960GNI05R+NG4jIw1jUPt3xZfera2ZiEcCy6kdaaiYyumdk1Wq+ogyqT0KwBU6QVCSohTQ4iCciV5h83aBzO89nR/2tAUk23SzBcxqR5qKBw1+bxF9rNHP0mUY6Gm1KdiVRv5G6fV6QO00m9OygzQnXEgwCAz89W7mj6KVPF0H1WOyYohae8WMg/WHP7iyMRI3/k5KIaInzdY8JmEHO77TowJzZRoONBOuWOmajlb2e9BA+SALYD1ZXqRLPvgMg7jUAz3zoiIJjZiu7WipmAuMbBTrkrQq9XKaQITqkifvZiRxlhWAKgttQ0LYhWaIdYnPjTplU+YkQrSHKU277JgjXOpG15ER4/hx+zjbLKj+NWFh7THGlP2DWwW8QNxajLMhSLsPJB6zsaZ6ct7M2nzmtXoW9OKnI+xZriYKsi+WyqZWrBMhG3kSZIpLyScWqTK4k3PvLo';const _IH='7339a10679e396b27990bd3b91242fd5af94523a53132b80a837bc52c4a39382';let _src;

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
