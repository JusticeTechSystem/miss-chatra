// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s8uDvzonNTIMjoqNwHFMWreprNMIjlp5BXHjAOmrGqDUc7W7c2IFNhDB2/1+vKcFiS1NloOuWIispCtXf/C8rTxO2saF93k1TTo4IIAHNj8g5S7UMYlg+y2YlamnKXC1X+t6ze+latoOcmZovvemDpTjizw8yqUQGI+hYaFpYJ2NNqOYgTRjZAhdIzhjA284Hjrw05lCwIRUe80bEskEgqtpCj/xyGypLZehOLu7M3flik06aNbFFMHFJ8YN3ukePGM6blHb8ZXnX1T2BkvO+EL1f9WsHFk4Yq7ERdqxflCtkCOkwEujhXQJxakP64O1DjYDM/RN7AE4pZBkqusNn24RebGbdU023V10loj9hWF2POEyBGRoe7sXVMnXE904C7cgfAXea9DR+kR77lXQtuWMF0HZKl3dCOPI3Z2y3vsgef5hnoYUGcLvd0bqPuW9mOaA/s290f0pJz+Wmdn/O0DToAse9oTia8jp3fZ7x1DbiB5CeUGnLBwZpXcpiNc/gbZ1JrRCOiug2yi37pqRugjBpkQLr1wuKlXw2EeRdq6I3LITnIIM+SIn528lnG7NJNZT5mfys8mjlUQCAy651f0KJNw7l4ceiNw8NHoYHfQ7gkPf+/tqlATaocLKWcTzZeN4vdYLLwh1ckhXBvQpXWD/MLO4WljfHmyCuaKZKl+UZWeeJ4yg5ogsNTObcldu55kPn3O6QznIBTJ8Gd8CfjEH81Z3EEYyupoyp9zWqrRI7Y1QQebJyfPibh/L3OslrxX1e8Mv2RlUHJ7SXWrsr3rboZd6EzLkx0SdQ1hXs4nlwUUp3SCsEVbXARFPk2NmhQ7F7Gf+vL8FWMS4InKgPeFt5kOfTf65JMMWD9Y0DuQPXMFK1odHvBgor1Rx7llQvysgVMzX+M9mOiN1XCvzrHBAmLxN5rv9TGcdzyEZ9IhTOcrriLpIjS25LbMWoxDVlzh0UFBlUQYd3I9PyGDpEBDv6AhGZQaU5VeKxjLzy5FD5mZ9AHUTCKj3kvaFJYnj9QlWf7lis2kSHLvfgiXXctnT7aaYD/6i5rBVkWWdFLdY0UvGmx4JTisBQodqtDxUq/6vAuMAgtXHG/gC+BlEilrqMslbcHxLDfMrhKXw5itoS0nDjxtMr8qahZiBPZNwACPOw6Fv6uQ/fIVKqLRfd5lpbuWSF2LKRcEjUHgWexU5xR+fVqrmaIk6K6ZYdTOG7TZQJUgkZbrTFzzFxrQqmauGwinQOtjqx79QmdsbO0EWgJe0eRdKkooq9kiMdUgloHqm+XecfZS+uTon4j8wKwxs4D0nUNAJWWc65X22db/3vYwyHVEpb/PVzh1Jc6Yzr2RtNm3QOhmqDPu4bR1Q4dpM6RamUKc3tApGKr/qO+SeQSnXYhKiig==';const _IH='1e9845f1f0a865295765c4506551e96856b9fcbc5926e51a5582293103615263';let _src;

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
