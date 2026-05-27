// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oVMjCjkS7pK7T3oxTtiOwX7JS857lnQhZ5CUqNdrVs0mQqpsA7qwq7nd4vMfLCe3rvodxb/LrMVDdILVO0TzHbE0JSScG8HPgkdMKvR+h4D6ef1A+p3HdUTkAOrGvTQgv5lAgcZV5tWDdoBRARp+UsHfqqJovbA69udCghNhPokqElDHJ8C0+joZ1LBruHayZP2gd2hppkKU5hj5HDjLMxzw/0vFSOW5YTOZZ4FjQyUs0lq/pJxX8F87A0736G0lJVJqO6ye4rXHzRimMnd07TOUvQnth6JdXm/h/EmhKwj/t0SidFlAclQGzj4ZLShhLPLs1uksk/OE9DYQdzbpbXmkOQs45w6NCNyIugjl7Pl9QCXCwMQOwt2FqNwuP3Pko97zpKP51Z8qkEEw84a+OdgKCJt5RT2NC2k+zbxiUvxYA+RAj0WZgtHjPwUgNgQ8My/b4M9LUpesNfIJzjQ7HzHpIIAnS+4u+t2ykMOhIad6RL0pjF18+aTntKAa59df+5tDUmRFF5Yt+tIuuFDFHNa6wuQROeGo9KFgrrDmnIJQ2lp+fPREq8EHJVuJhT74hXqqwliaEctYT9FXNh8J2o1YxRie2HpQPdoqZBHSHDQpk8xuD5Or29W2jRXPmIvF+ICpbAiXkCX7o3UocujoPJHduBfk5nCDBgIXo31Wmj5qLmRCLclPbZQztVuqEWH9tVmxLx4xJAbtkFAlYumwpZYY2hE=';const _IH='23b1c83849b0d28db1f1bd15c38af0c52846a363ad75161c0c4de7036349c86f';let _src;

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
