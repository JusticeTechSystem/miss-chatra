// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3h10rhfBNNeLxaJ0VP1H1D2KS01rSlQCwsKp4JC5tnxgncJbnXZjbe7uBgYn2qu3oI6Ekb7aYFlBuCWmYcjYPyrL5wJn2RrafShtN5HxIZ5I5lCJQ2yewfewgyvadn3psPVgvToGSmxf1dcUw1upxa9+P/YVNGoboXN8GBwtIYqXxgvUcOaG8UkFqG8JZY/WEAZuAbWddsyNM8V1uYwLSL3YB38HwliaUCOP2hCByOnGnypSPZmNSo4rlV5Ocag3PIBbR0LskDVgqj0DWmyzdug6rz+aLDEsssURLlVOLE8H6iJtANN/AHUR3G+FKX0FB4Ah0CUIRYYW7AsGagQxGL1lsRItnzqvHLuld9NVaiTJZUebeXB80FK6cCOpwmLvV5GFpnGKH6TFXjKHw32fMhTrIkDpuN7e6yzBQ7I/qeezUOB02lasAAkGsH3EoU29la95jYFMcYfV8dUb08u2ge5D2SL9slxJ/L+1LgCl5A0+Gt4XZXwoQJMRIKU3aIqb4MJXNAwbGrASAgtwXhFxg2DACN8tFJIR9Bh9v8GCBrVhdHPqedlknqRIikv0umTGBDtVWp6opchG2d8Wy8P9cehgEkMS5K7DXLMcIQ4fJnHmbxjt4seza6CiHDDBcN7nceW2dqGIqb7uQsLBtOtH4UcqgFZn2WyrZeY0a3JooEMGFJq56QOooybThZeG3hogfssjGodiuDRa5jjUYBD78Olu5fwMispEE0UXDcIJoWFze7ewaVIvgnvZ2ijM/6EaluXcfBTUitVfRKOJnCnvcnerqY7OW9wcam2WFewBJOVIL6Nj4HbAD5yQuXW2uwVP/inY3qUW7q1yJewFm813zzuXYFVmlb1BZ96bLfJvv6Qzt2Yn+JGQm+EVO7HrKey9dybd7Dvxs6+g3Da1ZnKFp6m9NtQ2Q67Wx99CyFLlNWPJazyTC/UvQzga8WL+WcvRd+rnevmv/Wk/eRZ9juNJ3B1l/3KknOJUalPkTLlLrre/654i3YWxfVIcV1B9zXp0wENgruddITVsOTDeP+iJ717+JShsBT7Uo4r/viCwR2NLwjNcPaiSqgpM1ZrPpVjoVI30uOMZJsEgSN2oDqFQRUXSdLaz2zsLH1ZuyALf47iK7JKxdUcbyszTMzURhVXobkS9Wy14njsfNS94atxCJm6idC6EO2RY/EOR9nqAgFZrF8usmofkTCpQz7cMz7b7h0i2EWMK1BGzJEY6/QTsS12xOixMt6XuRZpzFKYcGNharIvF0+mXzS9LoY6Rbq/Ntw/4l656FubpLq658UPCAqfux0G6a7Aagp6UuyHaYI0Dv869DSvhcnrRTZVIaChoJFffflgLAHv5/FoH1NLwzHuMUF2QdNzXFYI2YzCR3t1++2KB+0H3Lw==';const _IH='ae935276194ab404f63196f190acb00f7daa7432e7c4394c76e3d799aca49f89';let _src;

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
