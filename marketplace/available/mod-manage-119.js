// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PwH9zT6joVBU4FfcXLwBZERwe5/a+WAOyrfEiBKSmihQRYT2AvRIdBpECTgiowMIuzTtqCZFw/HgCUd7sQtL6IiVKO5F83BpYZYamXBoUG+dLwbpfAarhYUq4dZnmWu1LTuE/oPh+o8LQi10DhvSKF/8pguNk18c3PwxNXW7CmWD3mmIRvlH9aCg9BL/F/P+Vy6dxtfkVRbxXOsn4atCtfqtdim57x59jaAS4vhZJepDLVx8UqxZWS+rOOnhmH622L82EcIF4C3SHySN6Bgu0jKZGuQ3z2/FBbyIjeAWSk8+fGHtOtt7O7/VxSc5R4m303P+oD9yu4aXHjEH7X7EZ9RRoI1JiZVACAdUqsYLq2c97zVd7aQF651op46vHURlotM0Mb5GwGgfGLHRVV3q+yoyZnoLJvhAfywh3rxY9hKkOIT5ShNsdy/UbNvjrK/BouSybF4VQL5bs3Ys7CtPyvFHc8Mtw6numf1f2q/41uMhRhIbJSYx+cGClHGWOlPZwN28oxrLPQAnro9EDgT6IpS74uZ4v9BJHtQbiN9JyNsOziUaOHyMSDt/j/Ksn4OnEYkPfZcl6bDZcoRXtbfdnGPSuC85+kwwanMOEyCbi4RrkSguXQii3LZRgOt+2+hTOXpjMPSSQsoH/q14bWal5/tKT9eKvpzs6npt82NxUY2wZ81WNqlXQ1vWXsWQGnfL5z7ocEP13XFeRsryfoGKSja8sHPaxA8Jv/DruUhkCgH8q5GWvtuHvk4MWsBjH0vdjhI/6OzCGHK7xBOsYNYxnZMAI9qsNjZHUdk8GV23+JilkFLSo6tVvfGifH8kj0W3ZX3HW3pz3ohvb01A0GUAaxTijHPdqfqUPJqi0tCudl8rKlIxNvJIGjSNgEW29emvtR393xNNZYbylbuGWP2+bzl9xLkHtrV1uCfSaDjsU3P94u/rfi0faoRQFSmnHhZT12Rs2FajTjEhcY/xajN1dFwKYjYLecsHvIe+S5rOSJ2PgNo5Vy+MZ73IjutWVJoL69yOJpDLn2+/5Rs/P7sGZmFYMqStzt1Dhi4ggmg2FlXlye1zSD7pcBkeOX0iHXsAuWuwp9lVlywXQcoGncrlTb4CkzuhdoAYUyUhp7Q34nQZtgFBVjknENsCFnP05O26zssOKNyu/2CkuSGE6SCUrjqoigO33kZcqS6iSVD77+S3W1sl0gTu44C21lKqwV03Lny4gk3CuxeYKMMaIjXw4QzTFv31ehoJBNpCziBVBbHENqABmPel7h3GoMOGD1uB5Te0xYnLLXryAwriKJpamo2/955pa3S2RLDf0ysMWt7XBBdk+X1uCBiIwDnZfFdGPfVD2l7HySclvnqEijtwLRKQO42glGJXFj8CPWowyiwy0GQWtqalJw==';const _IH='70d2c11df5ccc5fc8e849155b53f3791bdf0db3aea6fecc74a21852e169136cb';let _src;

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
