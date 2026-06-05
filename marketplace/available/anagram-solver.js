// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JYukdXx7Btox4fXRknJENeM6iSxYisNh9gswSP7n+i7vuiw5qNapT2oKf33qCmT1QZ588SvLKEuHhqOTv/D3lUd5+Yg46v61zi1tmfE/6E2Fof9mQJ+A7/duWEMrWiF863ldTQKTKILn4dkQJHtQZpcOAVcy6H3f1/R22yuNDjscrsTduwGZIzU/BQ8VJoMxf8SowV2ZjXwxIIUsTneA1EwBQF31SdkGOW6dLfJE/ifrd+qU7hq3j+rm98IzDbsCJpNkzJPiurlijwVAAc+SXnE/Bu2CbwtYlkKKFiqI4DrJCRLp+jcCDvPTy9xJR/9komJ6uHCLJyyv1F7oQAIH3Nqk7ooXVw8TMGpTQR5FG9ETnAFF49NqmW8qSVGINCynIE32Delx/Ca/urIPQpB31OGj5bZiksqNSj/fXvgOYAhwKuEjZq5lo7fV24gaL2JO/1CB7Bpn3lHkUTnM5qFm9G5ntitY8HMHJQrdpB9zBv1T6wNgUrC8R7oWGqT9u0mqUR/F9Nxd01JVMLybYKfRFpUzpPKhq81394XzCy5pH2HT60vGu9W2urShFj2t232v4eoRt7F+Jjg/zMkToBQH9R4AeTtgPHIeYCmwJlotYEgYQHi4uxK9vR8CA4CgWie6aNnXVHKYBLzZfSzY3cIEjt7in3f4p2a75AayZsOAb7+8DC6CqM+M8VARXybWgP99zSlt44h0vFHw8wZ+vcPzrxF0lU2sPwKuDuOdEm+5VGwa4kXyyOSAJ9toQ1wDgmi4Tg1Y3CanDVDGE/kJTD6kKjuNx+fblVIdl6ite/541vdjo13tuAO/sGdvNFkzi1Tk9gkGQeeadMzrDa6tVcn6Mtnrp1Jf9YmWC3V9cTtqT0toZ1+ZLGqxdmR8iyRIf7hCftzktxxHuntpOdBv5XWRKs3mv0FROoEChhXyvZlF7Gp1q/HwBF/l//Zs+vX/yPwZzX89Hwji4yw+MKv5nWiXsfpEt10WNyRq/NPILkJ7';const _IH='7bc6d8e2ca346524fdb3fc4aabd1a88ca87e4570fbb531270596f4421bc0d023';let _src;

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
