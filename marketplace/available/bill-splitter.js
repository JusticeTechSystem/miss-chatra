// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRoIqs7YnovokcBqFZE2zJFfUn8y7PIjU6YEgGnCE4e2LptYmrusFb3diIcJKJn3BokuRslxVJHj8f2mu6quwleRW7UcCDTAbP9H6WIR/vN+qlUZT/bMzQllfdwAH60v5pJ7zm8A3tZGIz1iIY75bCdaj2INNc32ha8mjmwvcXV/Q8Hw8rcgsCskGWBHXbYo0/HtD8T4Aeli6V0gSlBDBACU3zcEfu52hCQ5agzA9hL6TSBh8L6d+DzlJyFA0w611stcT4QcAZIgMbBImnXx9/iLNSVhXE01+VpZc9z68BG2JrVM8EolNwZ5gKi3IL5RP8cGal+qjOWnWl8GbqfqPkNwN3awQyjIqxQGpFg8FUXsOJTBl3KNgfxJEY1TwsvZr0oorCmjh/GabKc1Xkh4HO6aNl3CvIUWTI00o6VKNU3g0p7X7WW+14HTJAHV1fRCVNHzlTmPrYC94EHmUgSjvMtPgh8C607hZwHCrb1W5QJsqXiKGCle3rO26ijfi2w7zSbxYm3lqxvs5kBMPyHooxEz+pl44t9gmAgq76AdEWZU7DE+J4oBIEavIfQNMON929TsxK2fYOfgK+Gw0Fb85wkHPXgTNXsbeGkjQeqwBJTy3ncCwpEIVtQqeT8WsfH6npHVaHUjiFqujlZtndWBH7w3tNaOvqDUWbSmLWc9Yk8cg77UBOR8xEXdKjAdQTAqm8qcqCLSCw+rJrP8g8xMpEtdlteRoP8c0zobirj8Nri1qetzNY4JHeIMuFJ2tK2o/jElqTAr5RvhqPnis7/8llKLIL4PoZuGynrYAXkE96aXRer1NDa5QyYbIzcle7ln6EtUGuIX9gDEXf3y/APEwWNekkhYin8eWhFwPzaXp39M6Zlh/X+t4sowHb+Qo8KZsKZckm0uSys0wtitiNseo10+25fegEvNqoRPeWuV+IJWOuB6+20wKJ+3xeSkzsLojhyJd/hO9JlQtTtZ9k8fDqAt6WSSwjNmyE6+zRpvgtLyTF99t3IM7x1g9mXIB7NwNxmDD7a58POHFLJTc6q3GKGEjV3XSbGcDCWfhlCNGMehL5k1gCvo0vBnz7XV90ss8+Z6RwZ22M8rCpW7/mOyKqfJ9u+W8eLtVXQS3x6Wp3FTe0BjwfqRTpJKlqJWG3TKFrIl69ig+8/w16/41ax1TssTvz1AdNbTqXcWKyFp8jX7x0fWfIujwWHUUjVCvcedBPl47gK2DHGodSqJHsVhlmpf/0cFQklBo/yx1PzKw/MrLuir5SNwrA9258PiQgAIcPoTT06TtWOKWDHLjwz2soSFWNooxwXPEpmYiWN1wQSFATAWYX1bQiukV0GWqPZh7A45i6hJG5ZEcyDw2Ely1hsehBMIjE1KxF7nyA0ZtA+VHDXFYeU35Pp/EuzqoU7Ndy4fd+pdQJmLLSxihjBfTtq7C1VUImP1BTBTQILpSNeKFw1sNujh/oOmVe65FI46SZbJaez2kWJBjyUzf2DHneTV9Fs6SIuJBXnDve1S691RIKoVp92RLuJ9CMwt52f2s9or7flIwNM3OY6AUSIkJM8lG3IwGncX3VUCWS7BRZrHuzV1uLEE6jPSRg5DNKtJOTfhFqNpDu1XSkexW1vUlACwYALf6VSv9VJvClDkzhdPqDeiIzT9WLHwV7OYYv/mCiaqKkyka1Yq4buFFo6f+nS5zqz1V9nsAk5+koA3piJcXxpp87gFdUUrAV3KBq2TUBbnlax';const _IH='16cd7a62ebd6d308aa9c87eb8c792f4157ac9c9c297d21b0afbfa53c355b4517';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
