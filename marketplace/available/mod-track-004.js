// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6cmW7qXVUapM4ArAtlgUr9fD/GGOKVn1pzsvlEkEMxi5AbZ0Ap+p8DKdwkW+JhBktmn0P8D9a3r6iNV9WVdxgH5hDJxJbCdkk/2nF9JdqIaYwmdWh4ClSnd0tmfPU8Ihcx0PsQR4lRQVNuqL2kIrxza2vuKrHjc9iICI+MG0am8MYsFwHjZmFxOxTXi2DT5BA00yaCoL7vBbO0qcDZ+8Ay0quUd7yy3fq1hfvNyXllFUuJjZNYUJdzRJN6s+rISLUDOnU3nHJxC6JEdWUleyFulo8FJROEVb8maEoooY93LJEb3E7WG1fxqujXxB7oDn6NuK6isGnEJlACDt7lqbIVPo1zaeWERSdHt7oRkKRMpcOJXyLZzzNjLAhZ9giHMFfdBY2RbwtacD+Qx8qsYMm/34oAhROhtIiud3Im3eyf6Eepw61ZiReu1ze/FHPHLSZqeTR+Wo+u3MVQKYGHuah+G3VBcprs4M4EQZqdmeifZjXxE6NDap3XHznkN4bfzlWM0TZBIXXsh0kHX+EyImBjGqU0CHzD+/B2r4Z7I4NL7UT9PO4yiJdi27fb+GyKMNzMVY4H9nLmjz0m8GjdNWlzR2fmlfFwyMwKWYc+r4GrxAo8RmyUrNyuZM0H5Nbzu2Jzi/AKEjDhNqJs5V1zPkJy0tTONPN0WObDF/hU501vdPB173fc4383/F9e/YPcc+mkTBuf+F2T6EehyC7Dw2YzQza5QMzO1isav9qtba8sICbnhMmgp1yuidTwnfFWmw+Ctpv0j9Jk7kqbrFmumq5teH6gr+wvz6uY6sOL7qGtU8uO9lhDiYQTDK7GINII0BCX3T+Am7LYXLeR+wmbm37LqFvCmF+1iwe27C4YeWkCksvZl7VJT/73UqVegEXfiu5ifSmZNq+3+yMDvWmENeZ251dBVgANSO1Yks4G41CmrdklXXouPFvmjtI6lTqziLTMTPoq7IgR8eN5NyQfilZoQib1wW4RYtMvqbxFw4G9PRqi+r4yzjwGm2I0afjEKSy2bQav103kIxiqBAhgFGkCXKJA+am5ozLgEVni1lwGh6H7cRAa7EYsGEGxWmd3fVwSbkXLpQYKk0W/atsjJZZwqtyFc/PhV/+l9PeVAq5sQhoWSSWZjK2DyD5EtLrsbde26Oc3WAAwuo7Zqy35pFvKX/t/SB94kXyobWzO3WzNv3/sFJV9Jt+JGqB8vTnEf2hDNZNzFQGmlx+kO5FlWwjwVsn5h9k3UYTXMuU4uC/fWlYxE3oYEWGdpuZNXFRd2eVEMLb/GxkFNd+lbth+lmwzcOt1XPymb53CmwFFbCdWNUA0f92E2wEejdIk9IstAjrHBhrWU77kjxFtFLdT5kME8a6Tq';const _IH='47b22d2a2de433fd32484a5e53df150ff09bfe65aee642d0e042bf500cd6c166';let _src;

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
