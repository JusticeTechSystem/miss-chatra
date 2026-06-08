// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='toGQk/ZYAfYWRAKshitGlCvbJN7048LnV/xXsYH12saIz5PmGlxTlydVBj+Ks8anOXS1SwS1QivTYdoie5B0Jl0UrZPvuCguyrXrou8TlmYma9A01TqXykmEukI7SvVpabWMkFMY0L9/fHLMB+jgwHMgGxMejsKow73OlQwyIJXXSA4bm28SrjbGczoflJM7k/8jGOFuhY0JGx+2NsB7A9LCXfWfeZ9L5nrcMuQftys0bLRfEHo+M1VBFtsHl+tZFHmE2I+EDfzgFd6Qg3Z6eA8RkfNfkVPvY11tn4IOBh3jcS/GzlcfN4X9TGBKqZVvLgZx7wPgninmBRqdpXPfuWN+FpUSvhxpiCv68bX56aZ6MBMIX4TtWX5fQFrV5Ch0gHHU0clwZn+mL0SOfj1OPvyjRrBo/e6xBEpuvjCAk7y3aSjNHYnvA430Ee2MuSTSFsBSX8Xdumuw2FXQMt2Dd6wqZFP+WKJBuuoCdtwTgzUhx9nFZVqYkrgsmvMPwDE9ncuuOKzL5wWgXBxxZEU20xgTLstdttJn5LjIalpHg20vFjcqvwmOJJCN7a08SKR6BIZGBL0p4hK1hfmZIZqJw/eak2++5eBIGSB9QIkNRsFMZVg0cIHBqobNle/1mnvqXmLBznFq5vDPO0xaIRdcNykmcYLvHwk+tRv6/v7aH/SPb0Zx9mJAt9RZuhAopDAP7gWLCNyISWnx4rTUZMdxXUzyuLh3PeJxKNWs/N4ROOoUt/iLWJ9EY6VspWylkFa6tdDiuHDIkGOmm21+VBiJQrv8tKuMRdtO81DHIylrSuXOQtvydz+9ixC61YdhtPmXqy1Iudc4UlYm5uQ6DQwTp/Vd0zqJkWs6FH7FE9EBJ1kfmQ75dcYgsV80pJ9q07iTYP51+eSyGZeYz3Z1IfB+n0a+YAJZPlva36udZMdeJY/FLiSS0ArA15zAe+XCFrJ7HjMSJjm8cLYuEkk7NkuiTBoa/pt5Ms1Pj6bTVmIj51Wy/Sq+V5ga212OcXO3SnQroSMJa5I1VQDoTL1jSAPUxmiMYkUq1pWKAgzsIhfsf1Y5uNl7WikAQEUeJznNx+F5LSNWnX61Yqtod8Bq6qR+z82YcuFHJn4h5O69eQP/mES4+2nmuxjaZdHhBkmwUmxmZbZvTt+qNmt9bIpM5KgqYgiN6Cj7Q0fEy0muGCrRJ3c3NZLhfyIr8J9FjqTR2pk5RmyQcqbWfuXbmhPibVDUjDqlGJQ9y6B5AuPZ+EaFJsGuqubs6KI392zpyKChbI6sQvC66z4qdTrQKpik6WPc7Sf6z+yS4/MJ71mRJwprMGeu/tf+OHdZdhm1vDKcB+eumUW6DbltJ0x0vIdsyDLswHFhAmuxN0KjiR7Of/DPZ7mKPdWZKFytHg==';const _IH='e9711f02ae2d3dd2cf5387b5a20663817bdabcb262d43470ad79cc320508ec40';let _src;

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
