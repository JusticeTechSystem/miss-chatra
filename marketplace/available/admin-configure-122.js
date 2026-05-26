// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z84agMe9vSRLoVGbIsxnFMDkbD/Tsh0TtwB5CLl4dxX1AcEyzAPw5HT6g650vo8sHvhD+QDY2c+x0eiteTkLZ4PD+aXUjB+WK/+KYHa1H1T8+DcIRPs6Pv7WDuK5b172G/I1BOIIfW36IJ4tORqwhXsORKcFACon+fr62wCsU8AC64xDdDjy+jbWlT6n/tu1V5vtITwekq6OsGtjdQ3bF5usrUPHAB+5qbsM/KMzMGzRrxnOYsNt6i4Pzg87aG3aaD5RdYVL8skpM58HXubJd4DMwQX3WxAiRrTDQONIdwwAfRWQwiU3TQi1BeaLMTTQF5+la5K/Mka6kHwIEcLU51Ef15G7Mm915hgbcKacD7T61n3jhgMAVqYBKCIsdkcwOca4TXcyNJF/V0EoKWafKFI5i7CjoMt3QDJYgN0/15aeqK/4diY6NTEb1pg48MjxhVp0v81xi40cuTu8EE/4P/HGF47PWA88BcUZrpjgecEnOD4P2iB4N1hjYpv59lKU0biAzPuNDMYMaeWjPm3WOmULGa9w2i6eFuUPVlHB9/Sa9dj3B5rbNR3Gj39zQhwxO30WocTdGg3XUBYxQwXjohrPtCO1Jg95XUeuPsqyayZ99YxGvFxIrWi5TMxQySJmtPstSBOeJux/j4B76tr2opMTkplaunxNnQ6qyVZ/oEU74sw4RshUCshSeuOoq+6UZk2/eBm2Fj+RlTvqvnWN15cMh383/cLTQSRj862Zpjka1oKEJ7kKAD+jrSPrh1lwkWw3cA+aoGKy+hI7Tw8nD3aDdJrs7emqwGrG6NoiCaBe7H0phofEV3iExar6bfWfcC6Vli50GkQbun7CF/tH29c86dmEymqBLyx7JyVzpAuDkALfytNRp5c3vAby87m5oQ9vkd5ChxPqM+JVFNX48Rff3aIbM/1F62bYfkLqTbfmVqOKdQY0BRTvjN4S1Hxn3c2vlVrjHlI5NfWtaO6HFZwyAAcFoBuyP3psxPXZZqigA9j9u1Of/EKdRi+ozx44g5meO2m6ya3fajLtylf0EfAv1HUd2g==';const _IH='d5e863946336d30af5c6f7cb77572fe08854cb3ee7fa5e3e1589b6fc820e7b33';let _src;

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
