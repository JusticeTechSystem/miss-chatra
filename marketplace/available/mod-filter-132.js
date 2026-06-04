// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SCIYJeLXkLO1r2YmBvYe8Qp07FAhv9r5wUxxDbggi6pXEEJVKpXI/3a5KgXTkQZCAI3rTZnQUVkvguYhSFaBi0jJWtsu69ll4vI+RlSYxvc7VkqVe0pWlBUabXg2P8ozM+sWeWXUdpPFKOPdTwSk45Chark7Tjg6lC1KYZoA9DpyUqW/JMPPfRyu6QVvhaAwJ8z1pE9QfMSUoXX+w2KPfpXL+E5tNT5ZCKUXOQUdCNQ+14MakhKvUtel89h/V0M5BLCxJblFKSVspcZAz/4WT5H/Fd0h2V/2Efb+7G2+EAQbSjcFtX2EWrOsATL4/o8TQxTf8IzuKcq4X4fi0fokZ7FJvQ263Ia8yxjj0hSrWK1DBfrwtrgkRjjoJmHk2gV928XddM4wvGkglKsq1z4G9c6wMXxwjqWRqx5NCDWd0W3adrG8q5wRDPhA/JiGk6Lc+5jgQWBgV4qa2eTVXi93Ve/i4B+Ogpp6gTWX+yjlct6VZNxRzwFtU8a6A680h3pTCIwyBeX1+o0Od6mlF5BDLbRfpxRA4MPTIm3CZvO2wWveuMxxJI9sAthRtY2mazDf5aH2VT0T5MEypFcoTnMlFJvc/hg8YAkWM2898qsGISmNBcsqmzd8c9CxsX3qwh2VDgpUjThdba1j7aZ+zIqIlFLwpSkLs+2EAcEnJdfbfu/Bct6oxaTKa4vQkG7TYztE2iF3OOXo+4imTV+lZ2v7tyojlAcqE9J0D3GoyIiS7uxUacX1JXbCsiXwIw8PRNTRyvWRskxyhlCbkKdvzE37fICF78hRfDSYTqc05YtTMUgCioybDuhQVmVojQeLN7EEzGZ5CwwetgWtk44Si09qHs6q5G0xqxuTlsmDOi2YzwlkbVMoZpoedUwMHfj36X8cLyGQCBsj+wRIzSUQpPL4MmlzfWTV8Yu9YKRlZEF6G0h8SQRF9Y7zQi1CNCNYm+dl+AmMnQ0Kkw06M8yQnrpnhg39h9EDFCcJ1QOmm909kis1tIuusWoZ9/N/+KKjij7v0vR0n9rjOfMDiCxWDzz3Ju0zoWLYfCZRp0UnSGyINab3L1RUSlv5tUZeCxg9vvlqIi7GjjCI5w7mOrKKaE4K2OzMc3mBfC34Ay02sp6LSVCEZJn8u6qhFwui98T9BElGmpBKygOrtl+0axhq4vrHDMF6IAFHxOmKRaoskZXnRaSSk0QlfH5gvFXiWpupwvEInwsHVYqtTtbDt+q3cj5ovhyBJbHyhrkcuhdiIBBzfg0bM0xerH4bo8KEO88He14yypqzzhbly4p6iN61yJxBfmHmXwzSe/6Nlnwr64cLkSK5pNXb3ZFxkZVzCu7FJQ0m+fyEcNnmUlvbVZszfETXIhKpBzI/uOnBBCpiz5JNPH/woxSFYB1aWA==';const _IH='3d0c1a8aacaea12692c531583e7923c38ca6378b6382180fb912552957a79db2';let _src;

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
