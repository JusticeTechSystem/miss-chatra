// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ddhWB7Fs3RZbe/jWkxjg/1HpZzXkKaL8lkIky2+1AEVmojHSUoc+BaHp69NBIs2MduoucXnZ2oU7e5NVHixjhdDoTTHYw7vhhsW2ee9YWQgGUyvWwJl2UVlEViSsQE17NWyr3faiWIwbW1FzcNSd8awaURGPG40oC4sM5darI+U5jisvuAND91R+iQK3Q7Gby0aw8mSbGJIYxVScCk0Aw7r34/m897mAwh+grao9iZGBiwJ57mDJSIBQlK9/fZwxRAKY86ZA2QBEd3EUEbcwjNRTWoJtfeGOIRGX93J6pCOiq/0Hu+4h7n2+POIcdSgmHi+ipXAsdnOxAeTuEcjUK/X+FkPEB+Bl3KYAfGFsK1iVN+aVszYxh/Xle/YZXFbWcId1KRDpLFTlRWPzUOk0yjoEqDmEEP9pIL8uRSsRp5QYIHzy/0oIga2YYkhaLQeYuE0Tae6qAw0jHlEZkNv5FM6CgrdDGB99gyvqFhVYAqz1QnOcfvM2O5xmHK0zBvuasVfoBLB8hXXKdYQ4WyB1RI/fWU+qdm65iRV+fAmyWdvDfI9UMJqRmeTt/G2gUPnZokG9UEr9Jxe2VhBzuhwe/XW97Qv9JfM2hZN5/4Rh9SqtVQ3wBr6owB60al/fiVYrYlTYTRwAqmdOLUZcRuvj1T/6eRMEjdesznMOM7Km5stztlI78DZJ1mLpjC10+YMUjg+FACnc0PlKfwU0nz65ezRzAdeVE8dQ6vUKXiO4ETadVVNFxDVCrJodfKLIaUC3cIfZOI9hX1qDZdJLVxwl96aSVPYnGUYrqJFuTb5RN3wzBMxz1mL5eigGqqdGFv7/AwMoF9x8HTqw33yof+eNxXt976QbyCbGEp4Iu6Qx7myTjEIAz921pBSbqa+F05CI1fL/P3XmFVY3ETYEBBed86oKHEqx7q4H22VenNRjv1/GeijzH5C3bVX+Kpa30Akk61GNsyvVKlTQKGLLhHAcZLoUd9szG01swq0aemCBIEP98xH5sm9/mv8Xy6IbJ1Jw3q/UjS8dmYC7yi4ZglaDU2cChfI2RhDovVk8K5gE4BDM7cyN9R9yf0VKBvJk3C8+bHRh/Yo3g+uPxA1EapPMsM8ZBKXQYORif9ELDDhdNy2btRUr7PXKE78BN94oeHcZeaHeN7AERyK3KGt6HDXqdQaXfSc6P3ATkEKfjg1Z0AAXxdz3/T7AmPyqK4Cmg/rpI4MPvs/5FC6x4DT/PUHUtZ4STkJdDgKvyConc4XP+5nY2nHKggT8weBtSTWkz1PeaJTIRjLxIi8ymYslkyLY+WXDWoW+AUyG251RvJS2Lkq4vTkm9kvt5WgVJtv59ZnBlrPsWaQ=';const _IH='4b26bad1ad3802eef2572d0edefcb6aeac4e7d7bc7843e87dc91d974bb99a656';let _src;

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
