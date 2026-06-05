// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1dP2dCo39XGe0ew/GFRBw8bCH+dkeJYLIWKdJpJ5O2zvKl4dtPPOliN4vcsdTgJ3QaY0i/3icnfYpB/gsnPnELqnuowopkZwHopUksNFDDD5PzRVUEuTBBp+HrHcLl1U1dv1vzNXwoWN3HdQVq/Z58MeJquXtMXQTpkSFi5kSMpEf7KttO8NW/b7lLZVa38PVbei09JC9JsQnWrtJItYqO38Lmrnjng2rtEuT1mRowvkeMIs1iRsF+9RayOzxoFp2U+RkwVgM0sidwSbU1Tvnh3qCww+5iT0N5wEE0dXha7NirPiMleiXcp2MkLoRfPDj+XMuvA9RZ195X/aNc3B+YG07ymScGWvB6V6kSTEEBF8f8WmDCHEf4u415CL6jjQ2efDJOmu0UP+qGQZKldUFmETwguYzgHAxLRXDaW7c/YSisDsha5ab4QquOO40gx2vJCXUureJXlnftmkYuXtoljqZ+9fX/UErzFbfZ9aj4gnk8tOFE0tkdkMYgeIv5nbUusiMVnIjUVZq1HlX3G1REnfLLzHpjiGJTtxijNqDJ2U/6R/+A6LsdE1ukJFRMaIcka+KpAfar+M06mXOA4U6lrWjrjaP08orcKsjZnYbBeI6uifNEudnTBO8u6M5CDjdkiLYdjdvrrbOgTR/7m63SO6ytS4+uREGcFzlDXQS3NRp/9EI+SfUYD7OIIBsHh7dD6D8CAZFwQULSCasOgdyDSR0SpiSHdy8C2utVzQqrJ6Hnr6M4wzfDd3B1kVPnKYHCtDCsaMsvdUl2IkSBVPj86XzaPdTyxw/PLho1A4/QOYuuZinTnSKGBnb2H8UTDBX5vTJX4iA0ihI5cQfbnhBBpx347lQkguCnrNM6NHM6iIki31ul57C2FSafEPfVhg4IU/w3zUFpZHo//P5wUYUkPM5BcxNiqUIrjp+us4OWLeUuZOCS09imeZvclSJzzyOErlRd0h6zziox8ve3azeCZqoq/tNTMTPmb0l/gYOMDqgKaycpADxUwE9ThBbcINeXI4f1Pr4Oz7MufEcKsI62TidKJiiQndo/jdcZIzjqqlmK+O7wBpLvd4lkrEjpUfBOa6Egwmt4suB6yltFklHymdwQuG/3UKFiiDWV0u67QjuRe2udoWz+WXBbeDd9noy+ZmaJUsTgclMTKgq0e/YnzS5YbuXae3vsuL4fwQtG5/z0y3TBbcLvZpLzHj7+YcMHnzfCpHRw2SOmpttJVcKMv/eJkIujIGY98HhinSE1Dq+l0R57x7H/47bbg6TOMwggqxwMaAVSal3tljfEHoFNfU1dbB16Lsj+TNt5xTjUXBgzqS1nUREjqbQ3umV3R3mvoqPh9pk8ip2sBwujUnHDCEhRowQ040z/+I54zWFUx3c/j/q3McUPCQcVZnNlyQxAYkhVWJISDW9SRbp67kO87yHTjrFgWvCXpm4VtR5zcW9TxB3gI62nByz6Q7futJ/j92QL+r3IYbik0v6luG9K6WsXG8lI2Wj69QUx7Tj8RJy52Ae236Ef4p2gqc9Osot5NzR6jeeYU4G91C1u8bQ3HHL4m5aAECD4sTgcWjhjR7NTN1P3jTffejGa4FfhJQwOgvs6Pj7/g6c7sx5Pbny31VobKqc1RPZTy2UsI6ajBe7d2fMAAWCXIv8rJC0zVTwcp1j5sqoNolg46ox46KcqGX8xq3+ze0X8GA8wz91k9lFqrSrLmjhizLHzclIzo+HFbF/MJk9UE4JWgWS5bhIwZEe2tObOYW6Y1Fe3wEHRJ+gUG/+z/2EVCXztjvnstXCy/WuPs=';const _IH='556996ef9d06c71f474c31a9ad71e75b64a3d5cb644d4e5d70556c048bbca4e3';let _src;

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
