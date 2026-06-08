// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7l6wlqGUWF33bK+jMLHBsZ7GDsnYCm8C/NwIVpYCd+P1AeVFPmXUHR7B5bw5zKHOAh+hkDgd5iG4t5d9s34YvduoH5V3kWcRvL+bOvep2+SYDaFgCNnVNb7lWnx7FCgP+VN4T5lrD3PWgpy7KHGYcZQELavfKEKQ2bo4pyWnxejAAcnZkedM6s9JqVZ4vdBwIIGrkEMo0LAfNm/ThGkLlZ//NjQSNSF/hoLcipOK3ZZehXkl/3OwKvSG73Mgv3dOPzjvLDrOFOxLSfV5KJzjYhMYhYY116uA9ubWwSjBrXNkE6TOFy7iRco0NpX/jRmQSWXq2C/0njKSlE9ZeriaHc5rnzKaKRIMF/cjavRoaPT4BbkJo4NcNoa5NVj4Kofc3diobpT1GDuBmoyDR+yXUpTr1r2G4UlJB5onMD6mCmPYz1JPaQ6rzIQQt4oDryrXZwW28J4RT+on0Pg+GXSWfbGLq/5poBfUpQrMyDYtXnSRyQsopHqqqfS2SWrCiLVIa86XwbM9hsEg2h8r7lDZsk7pp872jP1tJabAS1d+yx7APJReChHfcGoBY/IEmzt4jcHfeDehO8b2ZA+1fho2vkBkQlTNHGbwOITzN0bdNgJ1eNjL3WiyaYiofXImLYVpKgV4BqhnWAT5VxlVnGw2BLmKxr1AT4P6RvrqoVGNTuvr0UB+X7mNXLIm+NosOyci1AQROC1vc9PAchpWi3RF6jE5bB/OKaTIZ1bWtcX4vWIIBTvqGbsJeIZDZkJKC9geITGUHDqpfK1VOFGp2wZPlcFjsZnnh+1N6QqyWh1AD9ALqlgcunsSODM6+2PsXj8g4rD9EBGPiF/64Zxl2U/WZ9x3giGWXv3feCh68NHR0C1EHw4IdM45sAPtkxuZJonw5aFY4xc5fAVN3ZNN3AvaK6n3BalMcOpLGw6lt0tEFkH00oU+nL6MxA0QpBKrlEtdoHN/PT6xpq0rTpn2MduFuRgSoFMCWrGYynWY+7lU3q5h/ifiRCXYH1FU1nYp1WaV0Rm1cCD0q7i9rvAe1eZ+aXXLdUe6eIhRaHzV3XLbwYjyuZ9I5R2A8sNcgR6TC2tFNiQXN/HfQB2NKVqgaqPAEKbyv/wh+o92ikXGvUJ1FOBS3qPuroxcgVbFoLztbxIDd4uMA2puyMP/53HhboNBLvxH4btE5KzTM/M/DfutzK3OpiAoatwK2zR5OTYuEmJPoUy0q+Wjiyl/8VVvvadQXbeVDA9SReKnw2hli68j+behB4VDPHdjJTLvyS1/DFOxZ5UMuCCc6AdpBeiHQ9PqPEnbKLJfrZdXaoM+qKIKlunWCtwtoL/DjM/xk6oTl6L0Ua0EgAI/E0czUYgGbDRju4yCJRPpgXS747Tyr/SGJcm7+Sc0tZO+2PUEMF3b4wy1ZXMd8G+omvZCYJoIXtOm4TkyuTGFBcz463JiGG9QlI/wCwOm2iKJUSBE3o47zc1nmz2eXit5tHf45pn7VFTCuywV36YRk0Y9mUxkUMsJPjxeX3XBBpnRc16lPa/nqfuCuh033tmvs2hBsqlbF6fXmFbK2+Flc/Krvwrz';const _IH='c84e1177a92819b22a75aff975ee4085d5c346f4db6e40adbee3a9695770913d';let _src;

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
