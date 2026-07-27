// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6WEiwUEGLbO+PVHqkBdornTCj71LCi48uVg7nG7f8BHXgm0VPmileZBLfLb2GwNZwDwta4OXm0wfajKh0zOzl2ApZ9Mbeyoy0WHjTN51zBNo//xEABBBkYlFByXgFG6iBJcdkBSYDe9pX8egeMXo7m8weGj84eM1OZYZXjx0bua4ozVCk2VbIhKCWKK2pVZP7CG9bI5HS4wEKersIraNLC+CcCw4jhrY6qtuC/7+8iLtC6BlEytuvPAwvGCjm1sqLJaJEzi5c/RIalExxc9sy0+/4YnR8Js1Kd1P2tPeSGHY3QSI6FAAjvxQHFMZ9BFh6QJ3F4MwPOSIKE1s0EL1c6BSyjRiFpxd2Ab4j0B385SGqQqNQ8ElFedNCH89yEmoA1/INMgZi2isZ7KVYi6E217tj28U72APw/PaP++oMhHxEc2E4By8tnuiDUTynPnwTxvJG0/ATQYl8Ngq+oN6dRJduzcdZQMMZpPM9jAYL73o4vSKSqxws5I2zeldOk8nYQKhst1rwbWKnQGX+Idsz0VV4rK8dAtxCKDC5SGSO+1b0xyN7OsRHuWrwAj+6ho8TYodks/CzFiU+/XKbXBSqK5pCikmkOgVQOJX23KBY+Q0x3fV/P42joQkupNC6ZoJtIKN4aJ9OQFxYxKM9EyGN+emw2NySgoM9q9+NhNz5/ZmBfJFHGdGxphLePV1SNP7mYLbZCc2yTsMjCh40W++0mO7SfZn1+vs3kMwxYQVwJH08qRlQqf/6kNV+m/yzbY+JLsY1D/hCtXnngmI1evf8RHq0Xq3qKifsfyH9JlJfA0rKnI8JvzF5y7fc7UmyjseNMQSoxcT3lxGsNtFe6pBTYXOAwHj3FoEDr0+7pdATLHbN6Vc3OLGdgG5n3IyGg1YJ1rJHxy8ag45tCD4zJWaMQAJnDKLZxFhfUZsacvRk0sFa1CUKDpfUnFxA530pNJuc285TR4F29NqJE43KwCmmmQWoi/sCrCZ1yXqOIEox';const _IH='07293e1a09a17d3c7c17eeffdf11864cf57fe29ddc130b436bdb0a8b6a9d2bf9';let _src;

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
