// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9MVznplgHIRAqC+YVjI9/cRuFseNdK6yzpaFBGgNsiug8SdWhuf59qIZSMAXcQLL0KegtJ7Wp1gnFndN2PjuB09Y1unRw3zhGM1qugfi2XmsFaWLKhYiBjKL/poIICGdHAoxO54O1LdLeWf6oUHGV4Fhj4ubroLG3D5T88S4m8ki+t73TI/xW85lKxDgimEFWEdixBrIkegnOnLWwxOXsFQ8X4JOPnS8WajGF/7TDQBvScpGBgoVaPRa9xz9BtWBSOOarOqVa7CY6N9DYYlseDmgus6SJhaNkVxfkMvkPGr1nuGureTC+KKc0CdxsrJCcFZqoc5chWUCM+WWVcuadQXyq80QG6+3RRnjMRoFek87Nw6Nnm3phCnEcvWqVJTd8dVgcv84FjOutAb+N8UbYABpBZadFvu3OAaa6nd/gNRT6sSU9gOkZF5UT8VW3V5mp9EhDQRXKwM4VFfKnux7DChONzvqFDiJU2v1unXPGWOrruTVDoOjHyvwwfMLWoo7DlKkl2ewSNQIgXN6SnXQLZoct/ADG1ovcRBLzNjjozs3p/2DB3isVD2ZhLpXfbnMHl3sOXJRFhXwy0edcaO3CA7PzXzFp+jJHH9iQK9/GCDqZO5K6a8pY0FfWiTOTqXQsrqyDXmH5MLhpSZJyWGfzQBSC0NhVwN13WyIp7/I+HmPqLAhmC/RxD6SMvp/xqryjmLdrWUNrDDkufZHza+T4MtUThH/8WQC/IcBcSCLVSAQmFGIbYIxaVe19tW/jPOsgssxyRFotr9syj3wln2sJFfMzEFKKa/JpiITLG9JD2VMSNkAgCMMDMFYblQZw4L2XIFGTPXD/zDB4rY+zEQT7p9p3aj6npOFNZRWNr+ISCTHjrMhEztaEnXeX8pSJXt14K0XmBFXPEHaLPMrFL/5JM9ySAdntamhkC0tOENh8NJH9LmA4f/5Frgyfp1cxUQSKHggozjcRgxotq/6TMKeC/w73Pb0hyKxDaBKpwFp7XDzJjRKe3K/npe5Ec+Z3m/+RClpWoYZ7QK00E8uoKqJggjSxo/YdH4rUX4ZY+DOLczJdCXo8v53u5OABEO7wZakN8LtnUCNWGz7fbwYg5wgu2lCzlb4exZY8bqbeXoLcPg3AdKCKtz6GoXRdTsXz/9Xz7PYGffyJTr80xSkZgX+mweEdZNcJ2MdTmeDDeHE3Bk4kfNwkhJmHBwltdEZfO0H7Fobn/jBK4xUMuYajMmJFAMMJSvMXXJKd70aPe+Sw5hn00uwZ53Aw/C8Ib5Hv/21vwuEZhtaTdELJILCfPGLaC0IPNXjN6K6KQXnm4FCB6tGRoVrmVWBuSs6xs6pQtDXNKXtcOwjZQfrYr4ZHA+wzIIyrbSUPVohJR50avK+';const _IH='373b5732dc78152523c5f71aa1c84b8e4494193dae891a29e65340a92556d221';let _src;

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
