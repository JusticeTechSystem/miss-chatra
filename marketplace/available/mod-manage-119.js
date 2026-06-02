// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tdPn239EkObJ99rmobNWNJx28skOSUQda/v1+JQf7WjGcM3X9WLwcTdDj4cSMQ7Llrl82qOk6BIixcvsq1/az1OvwfT1l8hNoh96AvXZkDwG/KgvJgtAqiZVj20SffrZh59ViCyfWPfkcL8WjTUZBg7Nz6EOWpq38U2OchWQR4pVtHlOJA5UPdmV1XYzFC84NjeO/zR7Pjct4nZr6XnNZQWMBjck0zXpnt2L9oUGm3VcRkRDRdhg0AqsFgb1A1Zbc0khw0C4DdWI7EamIjDqF8QvldMGM/kSLQ9GSvw0wrH2qNFD37urWjgdCLKq/TkPGxTcIYjRTxDDTXodtlKz2FbxD5C2Nr558xb7Q1pgkxsjzy+xcrslyJE7rhHz8Rb7WS5EgaCjqlXK8z5AWf3A7shy4ZOFmTUNSlUjQsdKRoz6K/FSzatPG+b9mMPaaKsnjUoRdD8kncveQMExL+ldvHZj/jrFzjM6+nTxGvEOXplVgX2exgHAIdLkOWNM5kJPET4La93nh4JCWiZF9WXGHFRIpeh/bOTihJrt99TppHpDo/29tGp8jaQ/PPbSf/EfjBgtr4M9Sibw9uYtMc+EdCt2zWbqtjJ6HE9aGoJtm0+ZXNFqJAahTLRBCYqfq8AAmpk39FDQdCutantIdkklBTiMbhDPRz9mos5xClUf9ApPbKqxAW8uGfJzfVDRIUrbimIriMLpY9vJb7ZN/4tdbTOvPV0QzOnw+PpucJjAokfXYzgDj05LKyvLE9S1Hw+DJpP1dVssJTj+KY80Dux9OQVOtaMyK0yJmUiuNQUI2MJta1ltQAhH3k7UiuKivddlSfE0tYoumH9XTGGlJ+APCLmB0T7XpSp44ISKDUpcVEautRC7jiIZ0YDKe5XStQSndHMVaPHg5y6FJBRdOuU7zgoSTu0kc42f8AUh4Eo7nzR3i4jz5wMjawho/ecTmBtPnbARmzlIvtj0+FiqmePtpajjda50NZwNulcd3VBcQAhP3ERX2sA2XRMCDO4CAROmiOWo7px98FeonXODHJVnTQ181Vuf8LjTBrAP3CVj+m1QYeC68Pl9pPt1mET1orjFVI/KweKVcImBZtQbkq8eeWplATvGxYhgKitBres0Ak427TzdgZ15Chk2fjbvFLFNlAg4eal1jWrz3BD4A87zX2wmJdJKk7V3z95PjBlooQL8NiL+E1LT+ufGPQcF9zjml15jarSOBJySVZhLpOaTJm0akTUjvf3vXB151zGkEK7tQv5L1dD00XEtLuUAK6AmOlnHay5lthX6/f9W26iHqku5w2KBf8en814WJdfFWXIpK09pqppFDT0haZVrYHQhkw2ViOfknP4hirE4iUDfxJSgqekqaAWsqjBb4s5kQFm5Ja/CxLU5yg==';const _IH='2ccb98a584f5727230f91ad5adaf43b243c0af99e889b10ddc9c9cc37c3e30e3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
