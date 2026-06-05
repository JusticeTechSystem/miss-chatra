// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jb3oliL979qi0vJWL5l7ZYVwBjQwohcmh1fqFPqyLFJtNV//bT8lH8L4StY3y+LLZydZWvqP+3gDYRic1p3BARgOlpAHJ24lnLg4UjtDBfOvqmRIDSC3DRCyZf3cbxBb4z4Bt/VLDkbsixZaRgQnoS9pwlUkrOcaTYgXEOL8Dqeiy1yavdKIZkGn1F6KyTj7GMZSt+jSs34YFgxZoJ1pWRLkwxgyhf2nStEd5nr2mvITNlQFceJx18/FqMuWNvNlHF2NsL9DTJO49B+LTWWJEkJFLcT4hc5TbRgudk4P0ndzXxSmyoCsj3c09hWcEguwq+aq7gJ9ppfozHUOdwzdm5C8CY/uJGp31GJYyHh1YV1UBceStIJeHaw3Zshd+sE/v8VWwVYQpOrF+xNikj+Izmmc14Ukho+11Zj5lvhS+N7aQX5lRCtTdpNpo6WIPYq/BHy0wtR4mM5vq9POD/ACrQLXh4XH3HvogLRZKmqTu6JHvr4FGT64bnLang+NV622AOFXXSX/4jCRcEAB9+ay/yJ0GhBnxFZlRVm3xKkOIuh0dBjiDuw/VEZ3ENOR3APQ4H4fO/j5H+lJqw0TJJreiLvF3f514Rq6qOUhguwLOkps1ViKavj6pWpk1X+fmYjEnO6mL94qTTIGtp2UGv3n556j96OQ6C2mG8aGCj+b4186WCoQ7EUkH4B6x2QSGKcbVylIFbgOTIuikkBTNakpKr+AHSktUfNls79DvuHCSutR4rxXhsOekozN/pTABNccOeUqi4zqV1sQqaiErG9Ygf+LMkewvYjCHdvOgDp07Y5ZM7U7A0o5yq910v889zZ6yk8I3XPydd/r4Typ/xrQFL36duDTpALQ4K61rYH1BkJeTiYTHlqVAzL94fy7KX8uidkFlXaEf1j6g2qZFLS85aExS7b60DAAMO/V8TTRutZUeuFc3qTlZXx3ISCdgE4HAi5MPqg7e0d5ek/vVWVXSqTFXqc614mHFxsdDPYsirtinR2pw0WZQoJGP4OVxe8sTEcZhYyP3Zmwzu3zVZ9qnDXsn5uP+CXvfFanKSTNsj1lm+TC7ynx6pVw0bBXvTDiC10aRow/3k4xoaAueWt4PG3Zw9kZ2K2CtgNAUDJJFgFbJcuhhqFj4UtZOtSQDKtXyVT9tFTq3evKd/aHIL68WvsYzcNsJPE6IVnkX+5Q2MlN4uc3+QlBjvxEfEPYVI15MTWJyH73p4Mjul6jSqo0qi3GiZ6Ebzz9ooOCi9tKMWGGd61KUNzaXeHwCAKBFRq9czheDUpmcMw8ywQv5VjHB0ePz6LtIoBXSDvfjysIMFWCW7Gnbz+YttGJU4fVVbiH2Kew2/QV3Mzor7gG35ZWzdxtkhWshGpA0j+PfvK5k/2p27k=';const _IH='a10298200fcd99c7b8d348bfa04b19aa6ba7cbd6a5301f33b590970ebd9e318d';let _src;

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
