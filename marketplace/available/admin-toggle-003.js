// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1OOWmpaK6hLqCU/wgPUp6uXgzlWyCFw8MZFVuzpg1K57+RdolBCguXPfyajEk4AP+AgDq5Mbd6OvCgfafEo68UxakdMFyORj4F53TgXP5jdbBGPIl+mmQKOwHrwXq6sHuaeFplmPgj5tEmpnMSLtCXEgadr1VyW9F6PZhVUPh3YrCdlNFL7pBQ8OibA4Bd8LpsZOm9YTNbFYf3vCOPLHyP2CY0yfpZevBQObV4DlcH1uy53FYsJwwtnDPqV6XGSAXyq3yTnDH6XuLpCIC9bnpI+Do1e8T7hF7nObovZxOd85TkYOctxe0LiiFcvWaLppVKQX7ZLT7dx26muSI7W9j8u4FchTQWQTFr8EK3z01mPfWaRMJbX9FPul3Hc/30oSCSlDBn9TMPWaYSJU1wc937gyhWveeSqndDypy2Q16xeXQNCy4aNHzaqiwZEeSBHI2w13sF3zZ5LWdArudmwPWI/VxDMLv3GdF4+SRKxjrk5pb67dPgVO0hNovM/Ws070FPwr/b+0HvkUA5OAM2pKYGcrxw599jDUBAe2VGGrHRLCjTmK3aRYSgxFOWSLGtGiOsE13ekiWPNFxlof5hT3u+x1wb6J+/sYwZYUk9lcEZ8hyQik4gYhHlw5YNTvF/LttxMGd5WqedxuGYpVIaxzBIroHkDT4VtNXqF4NtBzq8AIcB841Sgvadn1buxYMSb+REOumGEgZyFSrBH61e3gQ25+cet8Md2rrD/plFduIjrMXdLnfQ2nVZdjcEoo2CfE0nUiaQGGJdG/g2mebbxMsQaMse6MWWPhJ0TlSgnnM/d++5qZoLMEz5QvQ0YDElkt7C2Bikad9HZwF15KMZWw+tCQ8E0JmurRYroyZLGAlf1ZYpj12Wh+B0riFDM8aT0EuL39hUqJPQ9cs3q8UJ9PEKuFf5us9qzjHrpdHEcUOsQt2vSMSo4VqSnV82BQgsL8oDQCUljISA/qQA9NgKE8tXB5WN+LwAKg0fv9uujBuOgG0OHeJZiAv7U=';const _IH='4a8fe6e1789785dc28a5afa090e086791d134b5f065f13720ecd643597bdfa8e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
