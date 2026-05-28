// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RaDDdYHLyoCGq3TCEs2wQ3IXXDhjLXUnZUxgsGvlHwCVCqvwYtHm1kVCNjwLGsdsQJOE6LMPGAJy9od2TMn0L0HDGlFpvImkuP6iqdULkZB2Co88NTTvGqdghBlIyi1sAW48qOAgZewI8PNY9FXGxl34iqrN3mDl0/uF8W8BXkZckDyaDWpwQ8xvA+ZJmmDBvUOf6b39fo6q+DD9Tb+SsfT0SD9Go58EAhFUzaVQtu4ThYRfuGcziu7WkjVpvPOx9daFqOTS7PeJnwUbKV4ZjOCuqxFCNv6CgxBKWmOo/o1N3aLbcksg/lYdxUn3dfBBW2ptBBuuXkcLfTknz37gSGZmzNSNYAc7IlkVT75BwrNV2NGmGuDZXFAtJktKkSJf7vizqe4AZsONbRvP0RjPq8PG45LY7K1SRaQVgitudNUFWuC7vgAm82MkRBNdFg+oHx5n467MXSYX9mkiYcZ0ZwehL5NvEN8QX/EhxReE919feh2RPojGs4Ah4TgrjYMa3JUgsxnhrrpBDXM+bgvPVMjUqr5OB0FO6v2J2GafiaIb//o5x9D8hFtgknxp4zVBgOYatFUGrgOCBwPJ6Gv+YL81MR+NoCjkEzsAPrmCvm+YkEcR0xhKpc/cU6w3YwMnZAcl/99prU/iDRwNCEkzu5kkSVLJbKPEsC5dQkohwmEj6YmSdzAfXIrgixfLZ3p4WwLF173rqVK5IQ1FvdtwoCzFu8KUXjq+aRjUNrLqidBreZ52sGOwhkwP7HbGrpVG/Vau9pscgPYbEnaa4MH/sTREAZ122VPAXf6OnlcC9zrnaROr2tipxFl+m8LdA+vXZ81wsKZ2LMq0Pa87D6q/ubYla70G6pZqG5+VQLkfkjm8jHFnlgGX6R7DEV+ZQXUKnHZv31YV5YKir/hxANd7b6u/UvW1jZSnsMMOAZc0oof3FRXhM9YOdU0P7Sz7spcsDXbwMfMw3CWjSRWRLjo6pbbznIK5rZ+bWQfP+twB9AiG44gRId4vHH5zM5MkwxkKO1NFkwbx3zaaYtIaSxONJTt2J39rQ6qtFr5EcuaftSERdB7oRZm+nZqbfBbC0Fyq5K8551vo+gGA/bb2xt/ybsIVq25cFKJAxerCf++JW19v+/TkDcEbHnkGCntvk/lpoNrOZr3nMo1M9CzxwuMgpYFJ7r3IElG9XniNMFvjrb87KOKTjmgyMECHBCAjz1HMkjGrsWfXZ6QANWDv9/2kbfNZ52u8Ayev6n9RTycaAf33/B44r3ac6AOZpuMKVveLVPCsjCf69wn6Uf/3CBXedrm5PHMgyOUuk21gSzGB1hf3WYz4LYR8f+RZ/yCnW580ba6ZUSnUi29NpafQhMIUgKXpIlfwAIv5AFb1MbbLTOcpJOMGz2OXpANd3HYPd5TNlbeERElDgofrca3YeKYyYTyEMw/m0NT9prqoQe40eQiLtrEeJIMZaCXPiB770c9R760VPCTiExWrCmNp0V8e8UV3vdHLtl5P5FqSycbkglIW5Hiw3JV7514I3enlQbYdo7lTDt4UH6QLsz1g3+kJT8s9r7qAauTEi8mWTqacrfYc4JohnD/hpGOtCInL+tVH4j4xkctiiAEy/dNly9qS89Z6hY0zIuXe9/T4RzBlwptWdXggCZKzILFp6GLfRCGVBr6hbLAGtg==';const _IH='d32c82e7d94f53f30090f2b773b7968d2778cf19a62a8646186e08802b92f85e';let _src;

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
