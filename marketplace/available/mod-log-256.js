// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEaBBS0+1C1rF9GTsw8jGaqchaYJE3A+hjNV9+v/hK2y27Vbw2YPtn3KmdiiNPBSZOMrjJF99DffeSheKMJEqKXnxN6FdGuNe4+9cQZhD4br2Jr3dFVUL3mUakdzprvDvx0ETV4nHqKaqr7v8idQA0yKNiy54yf/If/dYFZVAxrhShJtLTYvaaFXbekAdqf3oxR3Puv48oGn1lzXumipDLUSDUqC3Yfzp/CEtHx0KPif5ThPPo3cKXWbExmTlzxqCaS2zVglHAEM8i8zBZkhDYjgWHW1aCpOuXZmRyyT34CmJEDBkApjMK5om5VeeU6OkLvRs1SZ+emugQJFDpLCBTrlzdLqk8BZ7Ieaw9bquyEQijLm5V0prTWU2umxmfvAW2Gx4b667JBib3GyvAg3A9cC72ljUTS9dvesKR7WhkrXdZIb7IBTMSq3dLRj2vzjfo4SJ0ObrGCVLw5sltcW3QR5Vs0qsEyIjeXZ5clYaCZU+soZxEQiEOxDXRSz+4aiJOoGLguyNQ7pAGSzgGjtV0LAk5ucu6/XK+33PtiEWswaDpL1EPe+U91ZfeDkjuU+CpgaCu8wulw7OoVoFOtKFVsn5vmKyO/cV+vHxbzuPL7eh3OPvuSnzpQQSCs2JZrzvKyjMrvKAwN2PRnVuB+0OcqdsTx2gspYiqrNcpCL9gSNShQb+vsEHJLpGlWHs9f8y67EVB0lPIxOFtWjSw3yR9QjqjlMGDXyEY3ZBNUqgj9B49P8GTyWtHwO6FUXRBf5hCBYXaHhC5MVhah/0S+0te2HOYf8XmVn7kAxEmwz4lhFNSH4cBu/9T7yPRbYNBUn3FrhYQeo/jhqayXCU1qwuB6HzXdg5uhyU2BsPaLbra+dHG4BVNDQE/QFfAtudwKv4OaS2CgH/y7hDjLoCuU3HPB+ITX1vR8OKRy5BmLEghTNjvCPQcaVSq/rMe3RNZ4nQOdK+BV5kZ0k18hzUVi3Na0DPgX7yiTNk8PMk/+YiLw3U6BbeGT5L85qf/+BeBN6X8vBuqJo6PVsyz+A/27WkvLMLrOrP7o4ZUvQR7r/5zu4fYOhPDVNQcfdLujdzrJ/2NZZfNChw24lx0nBX/UdSlftQisgTJRt7qqDQydXdhxUXuYvR11E1ifPlkEKdxG0X9r5XraiGz8iKeGbZ1QO0IqPe2NJ1ukfz//UOsePih4U5Y6hRYEz3MgMUIbMQw0GZBxGrpTEErdjJZYfF0MyJOspgrb/k/Qhf8QMT1jEtlRY+Cl0PFflO1Nj39quFid537/YdpS6Td5O7SvyarE05teV1NojVMn2bVrCdaa3by8TLZSIRfKedvLj8S+okkSiJC1QdojVT+';const _IH='18e89bfbb4d6e6189256f958ad876359cc72e7a426ac7e27a84ef2180aba5e38';let _src;

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
