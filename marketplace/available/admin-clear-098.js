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
  const _b64='pUUo6cA4ir4snJ6XZz9LKaumvoUkYtznrF5zuJx2DILy9NXEFKlkZM1i9YcsFC2jwgi2D3zSC/4FwE/Ctz95ScFZQi7BUYaEYEOPhcU/FeIimrD19InoWqoabRl+8fM0bqjzwhqBJpw06uEi3iEbzt/syuMdcxl2dGopHxKExE30uisPCUx7VgMGJ1KacUerX6K7w3FeWU3CtwiwzGY5UEKXgMq46tVvb1PT35hRLc/GBceJxpDo2DTqkWwh8lXpqZXgNjNPbH0CiTFYG/2n00znbn418YufiZZTATHpwckE1D16Hi6X1+2wbz5tE9MmEmUuKwozvw/Nqc72R4ayQIKOjA6IBA+nu+U/VICn7fWB8LqV7af+fkm28gmWJyxPY0Ba194rR9ry4Jo5mz7n4ap6Vug0YKmHBcBu+nIohl4vRyu+8/6HmurLTDDT6NQpwfmoL4BuNHj/E9DR7Tgfy93TmUg6knkYJT8q1RypfKLfzx0A0794cjFMlWsFEVXCDp3K4vFk07s2hhDMOHicV4Gfufk+590mKSiEq2E0HB25Ucq/29YktUOG8Ihc+xEku//M37PzdHZTjBTSpENIiZFM76LBp95LAz9dhNEoDal6kWcROFBMp83XsmJLITL8py2brYH7P22kUsB5HS/90CjChrfvxXjV7eITKZPgEPXFbyDwuvPY128BodB4eZE5pM2SpG2UgUTU+to66QRbocmUsKIWJhywGYG6aMcBQrhQ0E7CL3b/B54pcBMb56eQOtgMJR7aKULwvrewB/ImFfwcyFAKaFaVM196mMlWPI46HBRfrVm3Q8xi1uJOjukVRPZvnuyxEeEeYlrtR7Bveo49JLFxc19jeFJPcbGKx15s0y00W47qOYvwEzxJMOlRApvPCXVhEJPQzu5qGQct7HJFOcrrQ4vAUS1d/LNiFs1ruKvOgRVBJ6oJ4hlgV7Nn4AOgRcexvTXl9CT0o9e5kRGAEFztTI5WyAaYRYaEmkqeLBbGXXg=';const _IH='c37b298ba2d8faf7f324d6fd9a81f73566b3f3aa329872b784b1536524e2ed86';let _src;

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
