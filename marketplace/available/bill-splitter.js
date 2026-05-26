// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ifWMTddvbzxTMD6tYg+yi8abfS5MOZgETAySY4On+fiHbc3sBmZoHDkE2mipqb6x8P9fcgpyxGJufLmFmJVxXJ769xwY3jhBg5LIYjHlBGXOKApzXVSVE1uOjD9hlYxiDvClIY00dPb8H6viSmyqYS616L/6mad+zqntXK7xajuR/wMC0egG4nlwVS2wEp1NkqOKJSSEjlIgVgAAXOahnBx7NuFAgqYUnqCvkNDXTENN4tE4wuiMB/5DJVFuStJ2Ctndm9TjRtVm28SWJcYRN3xcf7i0st2NYvWzxzfyPnNtyXLDjt4t1AaODED0ssdAX207Rf9j01dOB8WcKktT27jiy7WrPz2TjaR0tp/fHvbO23qzINVn5yKnV/0oz/ZLhrFd/Ysiz2GxnlEkSkUqHvKmtU48Uu2YOPAG2Qf3Wqa4IenLzxFybgjPAaHzTWWFZfZ7uCXIomJImmX1+HWV68ilct9js1idBm0qtu+Z8yPTml1I3WA0NlaDz3xbZ+0NN1zZsWeu4IsSTsxY1gP8Jyhlq31NSsEGnDl01v15FKgwZcwNXEhDDtTP0SQWC4LRPGB2M6oeqRCCzVpFmWeH1tI4W2H2JfxKQW9isECrWLWs5mmB7J6WTNTX+xznk+To7PwxRJDJ5Tn9LxBSb5tXK/9RqmnUvfSmpIRjPS69B1L2jrq9OtLwMN9UzxxzxZJLai4hjzDSss9oYMZQF5GdRa3CF+w744gopbSt1BVEDBU8EOGCMpKEtyv3KPV3erCk67R1Benp2n4xrxZdWqGJTxmUTIUAYV/TZ9QJJCfTElCnNbm3Y0Ib1bjNJupAV7hvrEQ2PC9LppKqDZolZj8xQREsJtpRJIHFx5zay6ZAKgnYIR7pujLF5/rivamTx2peZLSo4UuiYi3y20D8uBE/ygA9fgKpctLWimLUDXAyHWtVBKVOtN4HCs8d2jd97Q1i9kI3i+inS6Xh0M8EXzp1NlFPm7J4sCFofQLYc/oFsh9P08zwWfHLyX1nDbX0nJMKFVqHoFM3scifa6gEGGGWPbc34pWPVyL5BnfOR71IfSyNX0MjbuNZgOmskq6QsMf2E6Y4hahNazBq7cSr+/RJcFF5ynSZmaCg2lgQBIL4XHiz8Pz8m0spXH5meR51oNUmcLKqRrqAU3gh+7xF0EYVPHlQ1E+/w6neZEtZVMSBxoYSQfhpdlJ9Wrb5vGBLDaAGUffoE0dN+BPqOIxJFyA+A1AKML+JbIsfImQRZHa0A0tuRmvXAVRQ1x+pb6AThvqYsIClJRyQI5pDiJ0sGT/Sa/WgdDQhBYesNbEnAaj/Mf1L5/O5/oOgE8uAKOZ2dtrEGo+MWV8MNwq1DWrnBr42VmK+wVE+A7MB/hX3USHseNY+zAgjSm3scGvVTsHZyNWIWATket2g0jGx4pZ/i890t3TsvnVlb6qSFZO5ISBd0KCv/uoGsPPDgs33JCZJpKJWkmO+HWlmL0VAXItjCFfshYfpTtOwXci9atF4PAyBqpIT2TsVZdEsU2UIDY7J3jNjSO44dKbjZaGVe3wjX60vD1jsMtl/OhwXWAk9BV34+u3GEqrDU5FY30DvydEUF7U+oKXUuvfyjJYvLZISB48Xh/tB08oAX6sZLOQOxVXVSsZCmLuCRlDreYrSHr2icFeuyJlprHNflDA9kkFrYGhuoIUIusSfW3fHQQ93J52sMjftyRNcAHdQfWAqAGyn6wmC0UdjVw==';const _IH='143be316915d3454f8d3b9f003c96f741ad75b5efa0e43f0661039c36a1e1806';let _src;

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
