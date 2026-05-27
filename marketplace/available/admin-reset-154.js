// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4NVsig0oJcIH/8zGvi8iH9xW3GciAS3gpDi9dxpC/1ISG482btmdls00G3a8uBvWGOMP00vM3pULCDku4Iipn2skz8N8vL7YncoOvetU9RA32x4AgdO9pnysVQkhMbcCJMofxY5sb/DPcHJbnbwJEHhVm893tg2yKgR82esA4UJbs/AWYYgXhlmLNfX4fV9NMdZI3Y7JHjRPPH0U60ZQ62qbsfQ+PPILjQ9zEcz+wFJ5Xvfgcgk4dynXAM13LBUFfp9bnBUmaQWng5ha0C8/NNUch5BbpVGJSvK0V7tWZ3SU8lhh4hwPvb81xy2mPx9T9WmhcAwRnjmnPiJ15lQYH4GciOy2guUDbpSEHoywzLWI2PQeuGEDdJn2wvlyBbkknUhzPe6LM8CFmYMgvm4CnXgq8ASy0EJzYwVcbGsZUx+LAUBNAi5OHkaw3oNBgsCvqKRoQSJZ4kbBamfGQNpt2wtjgMKO/uP29rH0wD7xj2RuUu/MUwfSdZPBCmGsKDF2p2/ryOs90devN8mb5xNK63G4ILzM7XFXVploc57oTfSn0/I7CJyinBNfnAnIcREUUZFr9PD1I+fXi5n6bu/mEovPypuD2se0y0Cg7QkpCYhp8WOUZrbDKoas6YWFvAxbd1euc60kYetwrb7BY3EbZ8kpD2bnoar3oX5AwcOWJolhuEiODF/p8YRcHaaW+Hsidbb9af5nurslL5DsSeE/UbdWyzsZir+895EgHYRpaz8ny3Rd43MQ6Ww8mFerftnGyHhFyfMNU1SoR9DEQdfRNbWAtMiTu7fm8qOMThdee3Mg88zCH4OyYNE48tPtknY7p2Ttx9Cfyv8wCfNKvUVk8IzP6YURA1xREnm4J0nsNZ4LNaW4aa0eJOW1kCn+S8aZwmjKz1v0j9uZZvX7d5SyBwA1pa3sdVIzot2AbVh5cFt6Tx+Jy1c2r7W+N4uS6xqXEyV06rWRLWQ2wV+EdIXgOYR85an04RFzZMYzumk0cXV76Ql9lfs0BjII';const _IH='94d0de060da7d57e5724c30b267cf623b9b21d308ab4b15033131caea3a19269';let _src;

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
