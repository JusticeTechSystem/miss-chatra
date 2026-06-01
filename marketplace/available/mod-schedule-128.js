// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4076xVeP4l1I1hZj13sF054Vpfveh3xwzcpP0rBU/5XVDFb8aTnw+A2FwqHiIAduYQebSlfDsLzErWnJHMqLx2GFIpxN/oknixM8XDp+kaBrYG4zQwHzLCkxIZNjxCHlEXSrEqbEKmBU/uabW11UooYeGxAB19/sUVqxQ1jfWO0v58/97qciyRwQ4JWXtWprp/KYiz2DTq6oPyhePTNwwFZYNHpoTdExQYmb8dGifPjAZQdWQyGo+Vn7CWB1djpqtL1/SLWXTbQB23/zz/MIYjb5A0P85b2m7pz8j+NOqHvkarfHpH+qjYinPxZYqrf1T/mQY+Ij9kXrPx6DQc/8zd+BVuyqaG0LuLkkoF1B0MQu+R9noxXCo/emn++a35eC8eR0qkg6QazGzDsDpyeNLVvxjMGLnS5CI8UlavqR/074m4ed3i54ehr/GZVAjX/Qsxg7pbeKco5eo1fJQdSXgU0uIBXrXtyMaf278lHeDMvkQw1T/fR2GcEF0JAcry9Id+7TMARevLPZ5Goz9T1JgNwTG9s5QucA8lrs0ZHV/68FGcR1fHWwLBFgqsgzCZooNtv1m1uv/Rlt7N68h6mZyuAtj4bdEEtLEYpL9UI3fXavwTYIUfsR7iQwI2Fbuoe6+D7OP5B8pJ0E5jHYj9Uka7lrob4eO7TOKW94oavXcxsnVYeXBNQsMcXIOI9HCogoGNLPfgVt+MVe7PKzDHACyIEaUAS3YtYxhqQP7+WjK7lVvDiWFPpk/SP8E4OCtt79fosKY5f9QLT0MGWkpB1KrtLS+8kTk6T9l7rqdkdurkB+eclGTyz6gk523l3cJhG+EfBF+DV35LKEwhgwBZrPOVzXFBDW8eNjQgjR9zAcdgtZ+ImZXIISXMFT40uAdWdu2Jh2+6vvnXvrk0qZ6MVWmEkuKyMUU6nYqdkX3Sv8IgLcSWD4aAUcc9svZSC3L0VahIGRyZEQS/KtkHJJfGOHlw78NZSuoEb7ueFoniidKxxR6P6PRSRcoSI8X/zj6S2H8bIB+xiW2Lj1G/mCtvI1fkhlF9m2cBGgv6TXIroXL8qlnklnfWWI/hZVo7HF/FYmyWf6egFJBpnscyb9vAJiJYs4llmzNT0u441W2nlS/TEV8cC7Rblfb/WuLhuQBBt4SMiwLNskLPjJa/bOpb565gkO1gPxho89H3riv2S3bLPVxwDqv3VFk2zJyjuPnumPHltrCY52q0sYOsFyX3Lnb+pYPbpRsB6J9VTljmxbRyxw0ZfF6Pj8F64nypFWiAMEQxpD0hNIPThqrTe+vww4PbIs5qysXaoWyNVtSGLQS3oKh6ooRigKWcYx4HPyNn8fA2B0tMvnDF4wUo9CRm0qcisrDJWv5LNExnS0k1zkTv6UWmblcViCUfFxEFvE3FXjIpowVegmhl9p+P+zw==';const _IH='e0532b5138c6954ca97661bedea8ff46e84452903e47aaa9ccfd3110d21a6073';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
