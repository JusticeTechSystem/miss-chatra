// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ZAQ6pW8y6zw0LBazfW9K8kBJKhqblraBC7P2FGn+lkiRpqtX144KABrdfmYHZFDe/gig704hmsKgrgRhwVP6GxiR5ZhU9O6ACJmG3pBHKU+gbCWqysJFCCKHl1HERoSB+m9LrjKH/ZcdnIgEe+FQpPYO56uVw+mmEewxz+/4yDZLbo1FCdcEcFFeXFI/D8nEwTrwFZrSjy0aMeFGTdnAVSe5gIg+1dwI62g5QeRcUSZ9VvGpDWJxmUc1Z8KHG2Eu0YbepYosmluNrNKGI+sjltumZlcLB+rpAyURdYk07l8Zr/OvtSd7RkBlNxM0tWR41LbpzWf18fuMX2Exmn0l9R4BQF97q6G8Nz9N/y0awXMAnaSpNf9raECosEMt3NWvc5muNWkL2Q03BJezavv4oOgYBdhdcTyIFv98TYdZGymuzOWcaCl48LPK3Ccjg8PfvLhbJZSHdzHxI8HSABtIo8YShISdNgAUXB43oiwxjWr3T2VbmVlbtrdGg+ilQZqnrDfP945dKjvKypYuadapPnF2/9R7LN2VwOoS5Ceyg1EzU3CVVFboe4R7lK8pyTnPaKSBFalPJI/abRtaLlCxBBxTvzlwRGn5Htt9pGEFNGcK/duZdEXf2UvYMQrRD+0izQlnR/6F7XCvCd/+rG86l7Tb0QIqwa28SFKA+Y/Gw2M+rlpsPppaR6HFSqF97g06N4MKvH78aunvXqo32yx7TqiZJu+MAcBv47QWJu0PPO/ETGTrNiRaGbs4Iy1soP13WHykjwkecyzOA48kqVz8uRftZErJSQIT9JWeNMdx0Cw6OKJpuppaY1eDvqVlt6nU+JkUfKgiiXvXmfVeOeDdV26vE0pcBhK/dSEDwzrb2IcQZUfVOUW8aQVFEuuEw36xWkP2qGv8qgtIFe6Z75G4Untd+awFfmSKW5lyFC49GmQBWMlJuHzOVAjaTGb1LInxyQEmM3EM1XjI6G1JpIXj5EYs2ONlsiy7MFXif1d2GnT85EaxCeuu2ldwd4Nis0Vw4B+fEXS2xXD3dKHmIzteOwAve0fzcxtyyYhDjaKO8JXzjafPE7XwW5RrOmQZer/Xfy/MNmnUOKwa/Vpg662n8T/aXfNQVu0y3o/UidmjDeQR1CsAX1QP6nWbRkrDjt4aFvw43dTbAhdvTIIfxNUGqWIYj/KkG23rX3qGsK0heiB+rls5p6RkKHEegw9fBOoBkVl';const _IH='bed39a39cb4e980c334baadd0613d0174e661ae604c5b47d7885ea31017a4251';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
