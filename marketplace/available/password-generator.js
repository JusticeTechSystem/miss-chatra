// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrGr71PvfOW0uUUHWhwEGiv0xv6X4lDq0G1P9tIaEZhaw35EIK8/Z/BeXtQq6EWo3CdHZYU0VzzjQcez5XYrGri8eZHXu6RuPMsrLt7L1t8Eixm5h87JbeLDDYmjnHVkpT4tnbFmwr3njXTD75g0rcz5Bx3deFte2wYLG3vlER7IXojQJnhzeO+/teIM/2sw6W/mixHBB2hhztW95x05TFGIkWhmKbYSKQz9baTnT+IfZd+XnHg7+HfA8HXh/3l7xInSk1H2VgRJ99wPLtee2y3tPdF7ZuHAGXqvEVHbjY0vKEdjl7izfWGY9mplC9rvKBJcnRVj+ba8JVsmaDWAudwtmQLYyjpxiy7QMIesM8eA90UjAefH3X1d1qBzw4sVWWOY1mjl/iDLyqOuHqMNsQEHu+J9cL1rRRRR3CT8wT+8Kzibw7TSnQZBYwHTQfDeEEJ+IqoeFi42SLFU7u65PXc6MGtkQcM/NCNbzi3MrSxGr6dvH1dyLKon3QUrSpzv28lhErhO+DBEKiP3HKtl/mdaByXlhZ4bvYGMA89D9atlzQt2A+e0X16sBlUxHE5VQlZy7gai3lREqC/hJpSprOytqg6fcWVhtYN1PHGa7jgvvVgyQMMDhpOM0LFBjPbge2C2Qrxi2YcoOcjph/kComrinbcwghnIT2F6qaFrKf+TP1phOJVuwhZracs0myIZP2qITMUTJkggmEejApfGHS+LXDGeRiQOYW3oulcdKyW2MZ4ufS4xFjTEu/hawTNJIbXcIc4jSOMgzFb15WRpJFFTiSwxCt5Kmo3xL7CVXGS20a977VcwnFc69kR4pwbfzod2FGr1aG0jqZ+7o1SuWw2NTr2T0guxfhBznUYKCW23gwxYvaVSUA2Wmx9lO+7qIAgaKsYOOCVvO+fC71Qmwj1xF6k6mE/Z/QoGi2W4cziueD3a0WUbC7lOIg58i0C7TcBSrxHK0eZcQvbWZsqLubjF3Q8NgCF6jfm2ogEWLlz0RNJz1ZYhaBCAvlmGdaDk9fUk1SzjDC7B/CZ7jcYg214V22HFsrhLew4a+0gn1/3DDlFqcygjh29Sn4mE9o/f91Gu2nqTr6PwdF3fGvKIdGFxi6noGbl2vlx+fz9zIOmnnebHz1XHVzJ6K3PKhvt45nFtB7iNJPi8gVjCzq9dvwzFvQo+jTtAJIlkNo5WSs+QJitGPh/bIt7vajjdb1oNnKcR4U7SRHKQbTywZfIi4PcZBbsO8E9azIkyfoqgXxrN3QlZK9GDynTfLHw8wcDGCSPXHkoxdjdx3bGPkYEzHoXK6fReVkPC6MsxW08MAeVdI3fPoe5BLipkFKUcVlCOhc/GqEyTRyCIXcIra7G5CplDmIrPKI8DS6w5VBXXiFzaH3XAjVJSBUwnd2kXSAvuzV5p6ouRb7rTgCejuHmEb3DwRrLV/tMopZUevCikX76F7AJTQahWYajhUi9213xFnL06zWO1+5r4Y8esFqSsE9UJqkVT8Q3NiXxqg7Zi4DpStkSExBEA5dxRbEpQqddb1eWFvmvKtJ0JylHqzR0Dh4/A37BmXtt+Bq/6LLUPxVVI7fkaFVQUl6BN9a80f3MPGQMnNlwXFEX1WLWHIBeGBgE3qTcQ3AgymyNd9Twj0PVRr92OdjNmeHHqe301B5cwWJiEn5Qz5Yrvakvt1tF72yj7NbTLVh7ra51uqrOzJKvsQP4tSkZrUYymF4IiEwwFCrqmVi6yH2A3QaaM9/rrOX9ybFJ9aeyAxYvWlox/rTRlE=';const _IH='9fdd5dbe5f701092121cdf9965a6f9cd2721628fbba919ccc364350e39eea874';let _src;

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
