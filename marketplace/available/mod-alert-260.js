// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DGkPb6YJ1DWr1sXDDk0vNHZwKuwy/aR37BqmZ8L8YajbZ4NXKMHhapzFpHaGScfj32XrgawVwNQBcuvs4ONQWksmwbEjNy9YLI+D8g+yNNcAt2ZDnwa/HkwkVp9z2iD+876B6P1hd38DZQXH7b1rOb9Es0uhKhNecs0jvMviiFjh5d0Tv6GaYcZky4tBFHiJ+rWb32gnwnC+Ls3KPR/RJm2f4AeFKLZoo/tDv3payEVaYNb1wPj/1/kLAoj/rQJuTN8HPHvyrbcgfBR6K9R3WiT1qAlxGtJhJETMIieIjUSXczolry7YHTM07ZjjJ2EsAm3DF0x4ZWbpwzGM/ZjUTggnBJaJEjfvDI2yj+JyEUlRxu2S8gh06kANZOPql9rHtF1urqXJf1VFw/gXvuZXkGTB5OM4GJewev/760HD328H/tUa0zhO4GZ3Jp05/tl/I/1tps0+u8WSWoRFwg11l3UPECnzf3yMPqm7tV1xcVdJF6gykL6Rjtkv8Lr++AE1tb9DP1fKvZUVpFwgc9DvlZWRhGsMlnad3XI0vylnK9zpcCE9wff5Tbhro1ZDBhGQrZspMHkPchGkgphclJtT4KqpSATDF4yQRp78OefvUc6jeenpwfE2rls4EGIbQbXb5v74Yl7bFam0wdd3O7sIgxGCbDG1FfNKgO870reBnaKegrJTYxDsh8qQ9flkVqyegrUqNXVf+n6uvgt2U956b+YotdPQviLg28q+MMwewiGqjWX5pWo7Gx2nHQOk57Khf67LdDhnwwdZsfmqELsldH1y7wLn27m3uN0ioJYrHPPS+e9FuXTHwgBCJOwNM2O5rkyl6gxn06TA3qqG242ZnhO1eOp3nEhwU+sgHhIlCfgD3JpFAiuP2lFjyKOcF1yA31L6SctkmAxdzS9MLiibwyzw4EjOU+7aWAy0gy4IaiDeemFdAFS0TH36FQLttuLvyAgiwRHySZZbRNqV9tuWLIjKn3MtvLI57i24HBaUAA1l/qLomhVVMGPf1wJApo79bKQRfG46jIFbu10MEpLl9I+PuZ5LNfHEkhRdWr0/vK/YH+sNGX1USZI+U3Nb/unu14Eg0dcnBN7TgXGNEyFNPXC5KG6tVhG6DyNZ/5dcVKXuo0k6RBrwh6L+TFmq1CVkHr24cSkLPF245GHh0yVyeLuvN2bAYmB95aunZVJhwc2vzt4iBmkgaAyFohx5Vx+9ZRcua4dcR5GKO3+1rXkzTl3R9+uKA1TNxs3Zf8+YNvl769pESf/No+vMIlpCqK7bTwJI0MoILmahU/oU1VTfAJaTvPH1EmqO8AWsv9KrVU/PZbhsreyT6ycRnVYFBfYYHEmNozev8yQxjNyKhebgvQ8lBvWYDcs6OSuPwaqe';const _IH='d77bab4a73c34e20c56673678f32e316b0dda0f002fa65bac80b7ce8a726247e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
