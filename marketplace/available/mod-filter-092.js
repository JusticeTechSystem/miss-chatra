// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4sRsa/c/SzlUJ+191Xi/lFG3aebjW92LCX1rjyqicv+06y/RehlNBsRyPKV7W3i7ubENvtMzAcfDmOyW5sIbDKixx+4Uzt4MXl2/jeQ6CkgI1m1uLCQMoUXDAG93+G3AYfKdjE/eHzksXU+46DeISNN/GnUhESaeecxIhdvDI9Eq/MKK3Rl7ZnxjscxFLGDHs9DrLYlg7fDDUYYLKegwWIrq6frz79RsAvCeaz8E49cBCjlyLN8+EO0RBHP7yddCyJilEddr9oQ70qmulqg97bsIoJyPGx4BKMAL511TGJVz+NiV3MYdwvpR+ZKioMpOa20GRELWdfoBB2uICIZLSKzRsBY4tutWZb/F+fC1thlfP6ADM54lEzHwEUQbsZoyPrBBFqGP4iT183JTtDRM/v9LWgRfS4mP7nvVn7uEYRavuz8/FKYBXSKcHXEczR5eQ2PhEs2iq/gWThlg/JcFwGePsiIUF1kXDfDYcWkuGqHWswxUbgP2rN0yfjFWX+vox8e8PMBpvm6GzJoe46xPr4tZle4NHJR3y7GsHs7Ax3aU1jMrH28kjuF4EvcPo2OlKGETYPtyhPkF9D7gJJt0c2S7ZGB04D+Wl0JMElveThAXoc+STyMpodzQXjS/HzdYwXsy+BvtUJLRU/4LK1sV+jkRj/L2h10ux7g532kNEZ4paq2uJkWMkg5DYFZwnBLBBVsMhLynv6y0FSGzElJU07QDD9c0RGVf2myHPRpjH8o7MKCmxBT3arw15WrS26tFfxOTIyH2caMBVONO3F3AVaCDGyupUAwV7etyptZuKI6Mcb58/VcssuSkScDUcj+ZcsaC2t0ekAbCD5rFfMbG/F9MswTURUThCLg3aXTLK7tJFAnIdHjc8AY15madJBFECaMktaDr7QEgsKoZvbNIj+VttDh3lR4Yxa9iKh/mtOE361V8UcMQRxNMXcRrzFewgmQB+ALdEk+2Fuf9wo2Aj4pkFvHvhYPDuQL/aJa7GWSO5tigMt5GhBY4XJP1vZPOOEiQK5Ndno58GhY0kI09LKJfIImQDjc1i6U/6JuNMkgsDggv0cLIegOddVVNpaxLe4o6TD/MGftUXLyzTeELLxmoJmXPFDMsJ63rUvvwxHOUGb3IMb2AYo5PP/kDKQ8pLcecoUV0wZklDNO+Q3Fr5xQK4Mj3/XGUVnKTr1ZlcUg2EXuoibJa5ocYvrKJEs/6s/4Bcxep585u1eLlrKL5vm4S9c+EbuAo7c65+aMNI0BtGoYTQR70N74Fd5EouxZneoSgQUX6Rf8V410/NF1shZi1XqaMOFpOPr92L9OrqAgRVYQcgj+hzNXg8q7paeRmc32n29T8R8npwEnzfV8XMYetYf4Cs5b6Pj7WglR4tXo03tC';const _IH='68f8d8a0cfdce48ca5be06df6e75aa68d78dfc0678678522265aac4f91dca890';let _src;

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
