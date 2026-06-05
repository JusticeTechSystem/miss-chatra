// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1oQFD3IkJ1oyfhlclTYx6IXwIia/E7RDDfm9bADrGPWASIHHtEsejFQq/vW4SO1+e4DGjcTGtI7zMeqpPQbffPuR7v/mRf3+j5FeDcyTf3L/LrD1nZRdLLxCA8K3v16iYhDDvhYuX2mn/3Ao80IIv2tQ4xWi4eUrLuvAlcHwmnxYZ/jGj7e6f3YwspVC/SNuOjH5cFTSguX4xTE01tTpDgwgNS6cS9Qf3V5h0S9BK1wiSxv+Wqz+wS0HVP/U8PZZkTJZNVsBmhs33TD56HGtzqF6hvQBKrDwsCGiGJXFd4R7qPcNiUckQ0zKUzroexGYIIqQ4Mz8hL8BJlWXUkAcbiqyX937Bl9c7de/ZnDexSB2ZcdXUte2JDvZaDbAFJsyJEbxttutPs7zu4wiKxrgGUehdmD+50cuG6V+SHvfI6IRZnZNQXKyRNcNMTMfk8ySnGR2eT0RiF7zfkt6ogLd+UUZI/n5qYJXsMrcVSMCv529cblhul29B3KAaIlTPEhflm58S88eogOozI/LE6G4//fwWRyEcFN9C4JUCKAM2Ml8aBfnW5Pl3JO8JQVkxW6EB02KNlxmo6X9Ngwwsh7pGpEf0YQx/+u1o9jp0S+v7JY9ExGojDSQuL5Px9IfmyImaJuwkkbSUuIygnFrmfGaJiPQMg0AwALlYOoFy4drFquZTnNHz0x8tOVu9j7ufihcuSu3zCpDm5LOWr8e8oiJRmbndzkltDEDy78XWDRoMHEThnXR+UKrv0MSZFw8EDN2lCJ19j32eVa1g/1/rIDle7PdrW4MqRM56xeQ2eq0ykp4A14Iqf5/zNVY42D7xxQ/fWm0QGVIFf+g9cs+p6ERvWEn2vfTjT6Zy5TDnzprp9l5jYtsBLkouXmGhTgR2gf4YTPZKXx/+d4s33KvtcSehHocs5zVOe5GmB9gfhakdt7r3f10c6uGfWN1yARrozoLDgo/Bm7e6ySlUkM/Bz9jLQ5vKO72zy6fluZdO38YO7ucv4LKLdmsG1ulJ7YXMxh6Gyrmej+32pA30ERuQ3o1PJIVYZh67RS5hnuv/L0Wf+ykVqEd1u+YOqmRfLp2fhsCXdLbWXx/GkvXGOcAhjXdGZhn00oy+GFfi1wsaROHQ8woE2vB9y0i1PNhnlOLn+wKHzqdqsDpL0jMAxbzwGUPJf7QJqHuTAtcj+8GqDtJCkU8QrqBA86yTxKR52L3ZE6YrXj6E5u4lDiU+9U13bg+CLev8jyHqXT2OdQaYx91R1WqPqxJbiUx05kHOJm5sUEl0Toyym6ZxZvcT7tVMGvPfcvogJ59/7+a694ZSX5Mi1H2tbvnS3pO5/OvQ5zPuIU0771EB5GOaNsJ1Uf9iFU3+figOrLUAaHrB5eC0AkwgnJaViWNKPLS9Q2BFsNCllTbn+s=';const _IH='f8fd5b60c8c592ccd8a659c81afea52b7a2c475d631731746983fbf04ee07d7b';let _src;

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
