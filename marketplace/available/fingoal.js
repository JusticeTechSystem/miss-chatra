// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mc/IHoYueh8fLPaSxoF0elZUezfUm4+6D1ADy75MHtuX178fkdxsiHjNRFmjdf2z9aj5Hk3pzyGWf0jHr0FwsRI/qnlQCJOfyKW+pl06Onsx4noZ8ug3SSrO2UgDKnygpWltYi4KcbFoxxyFCLanBku8FPZmaBaijwuN85I6oySXj3j8B5lRlc+0elHY68hVFWT8l+m+o8Vh69gQ4EiEecIlbFi28oneiLk+vgj/q8eUgrJUCRbWPxwDCyNwOWz/brNQ8MtI7I7jQnrQZo9fJj2YkTFqF7HoqDwvkhIlQN1mZ5+py+B2+SIgkfqi8zcnNKzEa42BHEazGBIkv0Mzy3BuJfSaYAF5GCDgnlWUECGOqL8EuV+fx2Wdr+uKMIDMlybn0y2da7jZgdJfnCK5gxsJlzw+YeFJ9BsvixZJuRBS5czo2ktjBid6ZFdIMoWkLhpjzqafg24+fUkiMtD2MR56jeFzXVGjULUdD5pyZNjMQ1EG6LbKkoDbWZLwzSDXVl/Itynv8LsxB/FNQvsxR24kmdeMY/X5FPMAJHV2jlmB35PjDtuGr1z5uqhqEJj1YHF3CPDpp/e+HYaD00c+9X1yhyAjHkEwH2WNG9rI8BgOrtn3U6AZ16MasL323aBR1/2wTxcywrYxe0yItScu7qog0RIDfFSjMdgARAaV+gxLbIWmAXlXYN1+px8yMlX/G/ejLln/Lf2QeYPnBPJyvUg5uDrcT463VuUx3T6vjFkiyEsEA8BleeXIXq1m+2Ciy03fHklCFp6kEArMt1kWjyYz1e+nXtQdZ8UJ37ZYs40oX6EStz4NepSDAyxOMRLOyhE87EWpBfm9tkx1muNhW4RzgwkD/AfffrRgnko1hss/FM/NdCGmpBn6wYhupnTw9iTcA1SWW2wFnDXdzSVTEsyAuwyywHwV32ns76K0ve68Xe0XGr0onFDoh55yTay1PJupqxQm0+j0Ze5F0hmYioSFL9hc8UzhdQeN1+po8C0z82YhWgDCDkrf06f2i3++hv170tmnk+KiyUobaDpMHCrthz3nneSbZ4IjsrcEL55wbuM7jtOQXKr8Ei5kYULeUWBF20VANV1ujGzU6RGLsh0kkje2OeEgCi8Pjn4m4sg3Qz0nFxzGxo+hAMPB7IbV1+XkmdoUpF85aSmGLeGSNHnMIsANluy4wyoYw4DCPzj7C0q5zGw5WHfuncxX/YQTUaE=';const _IH='9b8c2cdca775d1380aa9a0c4e93bbec859d9152146740e8fb9d0fea2f958521c';let _src;

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
