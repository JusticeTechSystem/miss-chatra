// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NNVtmWwLTsWoumA4w9jo4QmzWc0N3jUhfGJpnoUKPbKdlC+sYKnSs1jtKFXFtRTSffLNJZ9m2FO68/2T6UQLgj+AQE26cVzB8cCQPMEaH/SDNa6jSZXvFttXARUw+0djq2YTG38Uz06ohTm9dkw1IWxI+pfjbWhxRUyIYwxMXE3uGEULhS9S3ukdqV5WmEs1zR9Np54xRJm/wERIzRAl91Ifjo/OsuEVPQql80Kd5xcbLTpgCgOBewSen4cFNiTvJOOh56gSv/dF1EABSpIZB0FXvhrlB4X5q6Mmtm0cbATjoEl/h7KMFRG6bo7/qURsypAqZWeASIzg19Adgl7FxXw1bnw4OYOFOf728C3QPfFJUIqtkNiom1NCzgUcwl8C2Kzg1mR++SwNaTeiJ/1jk5LoWGN1p0MOLA27ti1/u5wEll4FTko1/9QGscA/XeeqERfZNBma2oOPHsBcRsMJ/c+q3fIN1SYDHWF+qwO2lUECINdkosgia0XuMR8vUZDBlh94dgPCrs9RPLvJ9od9RsziJnranUixJXDYImgsUZA96CQ8It1Z9ArHq4LV9YzDODWDXXKc0T6Voip/nFfoqFxhkaRtF9BmyGguOPqDJS8+0IsEg193ySEchFY/Qpo20kwrjHI04AjD/Rvst+IzTYauGlQ1ApCd1IEXvk1/mS9gbXUQ1xdUKTjIanzu8csZfuhMc+rZ2QO6kWRpZgqYQl2AwLrs4wVcws6oeXETqi+wyzFsv/1FnkQR5FJPjaXXvVjDILpo+AKZVG2eSjeiFIcaxsRzmJ+yJRVQcbl4WMOZqocoM31lhDnoz7zzbnSMX9CpkrKDrENICr5Gqv/P7gExMyguSzvgapvm2OORhSocaD1/dXlMGJ5Dj07Kwk8CIeCzOUjFTr9CtXMhjQwFUFDPa4MZ6NsyLA2U+a0swhwEUKyV27tmBYIiU7sEzgBiyxiHsB60voTByNjj40TpWOUMsjO81UOqLVgpsTRypVg7Azs43w0lM4SNNbNJb+y8QQxhCzSA2DStaat0dbx0K7vhBFqYVcpLcymYTjk9VNxywVubyFJrl5mMX6jCjw7ekZAQIs6ySVOAEbfnqeryxlOYr8wRQFpshRCkh4u5iHgCqiU1ybfHgvhEGJqE+v5pyBhGGhi668xepM1DtzI7iqBRKD8x+u8CJFjHlNZby6dzVnWQ7+5QCTAwC2vJroEoxZ+y7FmSaTI=';const _IH='b54fa08205fbebf3a67ba4870a590a19eeae0c302c1e6cd6d13bf33537340ea9';let _src;

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
