// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPpI8yKOO/huAJZD6ePvrOV2FgwkXZ331roWwdyH1oujePKL0LO7hsIe0rORW+r7Duqfrc6UK4+R2h7ugRjoMOirruy27uB/Bvt1q08S2ja+Afhiy692ZqUUs/EQKL9NB053P/CGUxpz140AbUhXWNbG8d9J/1tEBeV21fTYnmP+6HIjfwYkFQKPBx9nNtVFyGvPvQFh7eQk0V1UezCQFcUrevPUyT0zdFcfvxzFCzPGnymtO0mzNuL+fIQtpxsII4XYO5a218yl7r41IEmniXgXveyYcHJOtAmbNls4oPk/RDzjdnU+OmiL34m1GeshP84KNLlDdllCpi6hObHDODPcrTPxYWIchtIkuLaCzyZkRckxOs8iWJzUqjFwwhWVLiW/03tf0d42trNdW0RuNbsKGqJexS2qlvqDZSPk5wvaS2zKM3xExlQXiOV/OJFn+t2PUiXSs6HLsbiIml5H7X2m9/2rPNqb2dgAtjKhk7R9Bb1HB/sss0EzE0bmO9LV3ASDnuvFLfycPTAnRRVrczQRte6rwCSrm7pvm8TVYjF6xXmRUCXW2sVo2rMLW7nvvElVbctpsDCpQ596vqJ1YRRcee1aViL6UvM5gwhPr5RwERUlwPfskLinMMcVBhmRQe/HSDX/j/NUQ8t3gQbwjnRh0CqO3eS56RMiULxG5HaZXgyPflw8AQzKJr65OJgbF9z7I0axcbSSkgpNBCqaZYdZU+8rSc2jeF62ne51NfgM9dU85A1ZMsgAjvHX/5w7c7Xn1hppGz/MBp+xPpKf/puQAitvGGsRcCrtR0I+ESORJm9w1xkOx3v4LRQ8D9iCZU33x8cebuebVQV6YtIEZIwU4/Kx1vQlFf+jFBLtbhIH+TfpDabsJ0NWArZ8r+0kIk8nCHR0gqOwp0szMAhhlfkUW0LDtL4lizxBxo99z5/J3dbBTIs7V4I0H6pShz5ksqOQCdrzC9RvEFZ1XPZCXrL6VPkISnTKYla+aoUXMxKlrfsx1EJksKdleJSq4BvKlHFW2XaQH7GipEQs4WngEjSB/2X3G0IGozuaomResdlHnhJ3WrYnte0bw5uojVOdZbS65rkqmd3AmWgg2Pm5YyK2HGS+V42wxxlrchuUodecY9vthLmff1N0cs0+1c/eJyzdodRrkueP0q4y48I6MX/jXIUbyy1cRcqRS/4LF7kTdQEUgzOYEb27cu49/wQEaw5y28DC/ZZbHKBjTKxy0bbyrPalYZP+/+7HOFN/k0OYR1G3vrW+jWiGtkJDrBrm9hvT+1ZRMGJ1Z7zbW1VYXp6zT2Z3OTFaZUDdHO049HKRqCfJwZMbLhNuLhWyyyig5NwQfnxHIU6eIx87h9Lnn2Vlx9fH/K2wvBTjRXDadnPXQN0HuzEjGy+YT7mMzv9GP35D2hrFsMYZkfAHMhBWq4PJ8WqtljA/6e36AvKO+3jNflwAM3vpYwoLqiTRMa+ff6pjSBsYOCSBOAKu2ks+15plUWXLVhL52KCp1iMgF3fMDf5GICFf2kIhpwjSRw5gAymAgoWfUlea3y9HY7kS23xSUg/FjlbBQI6ST/b9L12aUEne9dY1zst9o6x8/LHWTZMJkwhRn3G4fMs9zbzxmlTvfXHzNPr0sM2lFhkk4ZyH2rzRbU/R+cvqWnslM8JfoPQ1p0c7lj045S6Nm7JY379hrk3AoJuP9xHeeZpGmCvLWLuz92vGeYX+4iNCKWAKjm5AmshfM9zL3SnGd97u0GXs3UpJFWocrE0cfOIsRvlvouCB2kgC+SVQ0x2Nz5LDhYAEZytFQccw0GOzplAm/4o7tqDLIN1jnc+WQGUqSZsh+OSg88z8q4gMX4JOs8RuiL7uT0UvKL2IM1Oo/AOzg=';const _IH='b3e6fe123c25a88f128850ba5d8ce7f50588170e3dff68dbcbcdaca87cd1f24e';let _src;

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
