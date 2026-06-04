// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6E0eqmJxVEb5HuMk8RkM2x87oNeOBmzR86bbRcP50MoJSyD5zaMAZME3t/7B8ZDY30RHMt6Swi6oB51r8yUkXN9Cc75/CIQgj05lKinRj/blxY3heYI2QvZY5a8A4kZTHz8pnZPAn1kxUvzrwnKAg2HIBk1lgcQuLLnKHnXFPeq8Xrf9mlmfhRNFu+c5rHgrXUTYq6wG9t83IO8xIhzW1JWyKk3XvNh4CNYAHS99eRNivWSo8ax/iN8l+4HRkbRks3IgAWvQ86FsKHvUGq1W3Mu4DFuMeWlrw4LKIhF6BbvB+jyw5E9++Zjbdfj13YPNulqQM4M2zt6KJ4YQqxTrXz90mxVvuY0PDEFyA2Zw4Az7Xu3lOLQ36Wmm+8N7D41DAJi04DRj3VWcRUjNqNLSRrvryctgNDXa1zMpv/2hWr5rSXizdQyEXl9S9yHFS1ux8ECVpbf6OhnvGbzsUhfNCx9e0YKst5r8XBStbukKMkxpDU2/E8FgKp+ai4UERgeJeoUGzoQunPHcxjrsnHd2piWVbN/AeLp9hjfXrp3K3lRu+41heBKCQs607BWLkswbdx5Jdh9DyoPIjVHLrU0MUEy2ig==';const _IH='df5df99a9ad26b16673249f669f2cb244faa238dd34bd6222f44c4c6e4713708';let _src;

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
