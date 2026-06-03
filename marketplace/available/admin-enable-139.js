// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N/r1ORI0yXwNkvEX2VbQztsansFU8L/xhqhcShEIo72pnJACypKv+UiLs5DkHBHzIe+mfg+0AWrEXnvgEASucn7Gab0PpH0FjeOojBE7PFf+J5iQYcTY7PLVWOZ4NaWVe6bJ45dbGvX9Eb0yND/l4VquR00I4dKBH2TZBy6CaZHOBMKwgPjayk+pebubVfI+g4kdINRpYFdyXsN6Vb+paLejAZv4Dv6SuDw04tqUca/W308RdoZmMauLgL/PSiG+TYBGIdHi9aMRJw4hrZNloRb1VowC+2zvaoAN2BRbtmxwKZW/nlHzL5+Li1yqLT9pm3z+LMRuFnzLnPON4+yvJtjl+4ihUSHs2jmYDGSWVIaRpA4LJbmvXcpKhPK7GHdARHVPT/PbXgmKn+ORCVGP3lC0Oe6D5j8Nlag/Lt25z8OVUBA3MSfFvSlmY501UMLxe5P/wTLgjSAayFMfnstsZHnQu/2Qngn4+JF4CvNGOKL3ukNQciCk/V5i6ejPlxXATX7ch/x7Slw8Mm/fnUCLO8r8608ZxHQO0yegKR/er2hyMSFzsA6Dtn2vvjAQsPfI3kicSHd2M7QudEHlq9jmCnnIOyGMaULJmsMao4Xyf/nYZGMYORrI0a/TE20VGM+1Hlq3tsFu/OOVRX38A3aUvLqFpAn5t4NT9WArusx82wCs5vaLysJ7k8BlnlLgDdX5lZ2L8YPMDDw1brrPG6mngL1PUbsbEZNyCqiur7WD2o/UaiRPKan7Npu5V+++OUcEJ81SbCaSRUoa1d4ly+EpoAHKh9zyRp345LMa6amth8uaoI6BwaRoNL6A0RJNzF6zqkItHvzWe/Lxqnt95mz79xSmt5NMw47sgWPXoFBQ7hsUmY/frbuYQfsdV+ASDG7szCbT6dKteUqzXpFvljMPTaHFpcnWv5BE8SSnwbrk0OK++kjve8L40eInLiBEoLRh6Z10QQHeddSZPpKhcAa1POhBLK4vkoFZRMNAgUc0DsB6crvgEwwt4nYmLAN3F0Ljww==';const _IH='4e9535669bfddca4afc61822a9a62840ebf6c060f623d6c4f5dc459b668e5b01';let _src;

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
