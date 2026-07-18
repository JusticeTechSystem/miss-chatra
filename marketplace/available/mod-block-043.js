// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6BxKAboHG4dR+nUgSTlM/i2tmxDXZKJNXhqcf2hC2QkDx8JQyqnG3py8NyQ5LFoxEGZL1eWKtT1h9rhksdGQqddaSxjE3f6iXGlKZ1ugT+fnEql3u1uyxlZk/SPgY9GczS3FOfRxH5z5wLyv/n2/q20/cz37oxLLX6q/cUTnOIntM7+UmQVDNA0QuGteoQZ3Rpci712obC8oQf1RJedSTcB0oI/yMaaFc4Q3HvFStRHoVAOeXddSs503HURVqmzSvmHpmGV9c+wmRyZ+hU3iXOsyYZQvPGAnFRR33sbzM8X2hIZ1fF8wUwIYLbkmMdi0Gjao4xh5AeRTD0ZIGCrKVRMGP6SVOwvrt8aT/jhOKV1Fu480QjGmL3HiDL+gR/s5cefQtkE2N33+qfdWJ3HI9ARdmuMj83i0uWZiMsxRk64LNtCGmvu3VCtnhUHBG6cnJXWfhOvM3H+cFXsITpaQvAt+XDUDvn0wUG6SoE6mVLbVDMueR2d96AvGgtdiSEs2v+DZPR5YmjLtGc6kg4rHNFvSoAE3SQzF2LEVrH5N6KI+tTTnS93CwuPU2FvpCjGTaRIvJSsOEioTeEDxWUecDYdY6hVqJapoqx+E7anbxf09XaLFVq4IuZuPYKp+034oBo+Xd6tc7jB7gVwox3AKyES19Wm5FjlPRDLGp+n8KUVtVakBwxYTEVfZdvj0XQTI/CMM0Nt6dpS6hgmAfWQxzPUXqK7IYTxCkE3Q4nMFBZEtXokTIcdm9SXnXUfnCLgt3xKTeRepS9ZjC7pmDKx7zq6ugWSbcCFpHYSOokeBJ3JV7BNVcl6l8Ci9LLIoHCXok532jasaFv+5LYgTPVzoOL5Cy7Dht0qHgI98uGRsAq4MF0MJDWj+bWyvCEGiGjK6yTpVMurrMBG4smOPo2Y13FNPC9Tyg5lAJ87YUT+021YMI7B5c6VndfeK4hzDmy2rwg3Prj6rWVlvo8MNXQ6OEHzKcKoBI3UDFWztI2Y60hEZraGf7MxphAvdjQ1XiqMX+SBdGGX6fO/q/naMBxPNgVrFrH/39vq2M5XWPJoPlX+1Dh6F5cg95DXmerB8JKPOMtImPQHwmgtMsizx4tAgIaidjMTlTYCDcfCEOgvGo7VJBV1v0ql/FpygIKkDHMpMRnj5FBIpboOQ2v6pb+D35DzOkyhGfAigNyi0gb3NHau1s/+2NZYVfSGvCUoIQF78OQPpNWMv1zRwxnICvukLiQ24W6Or+6E6rb396CyJ7JjFxyxlm4bKaiMLeJpj+SBR+j1ttweS9a2zcBLnM8xN4Sb//vdoA3ca9PbhyyQF+I2cgHwRe8GORCwINaesWT6OBAbScoDZ8uMgYKEnnicKX8Rcg+Vxplukx';const _IH='80b1941399f01644b2df7701be3b3fa6cdb1e91cc8d4dd2fb324e0c47ca0f69a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
