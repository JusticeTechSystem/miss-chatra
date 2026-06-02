// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lzViX1HHDElvKFhY0e3A1iZVRneHGO6fh7LW0aFVq4Q2KsFw3P05BtZI38oQN7hmeNnCOgj3RbWAsn3MT7Zn695DkUsMp9Avi9W1hsP/ZcDeRCqZlwklywaHAnc3SqnCJGQp0Y+aX/EadMZNICMI0xhLUo5l2sQ4OBc4YjsqBpbnAReKh14SmdZ7g7EPwZ5qUd/3eZz8BMPfslfXSeJnM/SRr78V7H0oxFXqNWZDo+cPNtPvZmZiVe9ZHStLYBYuVmqYn9kAc53U81nykTFwpWUsxUK+Ht7sLaPgoM2vw3EvXOj8o8pQBk1R3dKR/5oh1zYQTjK+DeQm/VeNMS3Sk2+72CeOEfZk8CKt1Dciitzvr+TKtVu8/3Qh1gwWTXuNxiN/ex0/pikgX8KuiYOiMhuEulpOwlRJxF2eY8UfdbsTc3unbqkJvTZtNQpMAiHRhp2QL4WOEP6GazgH6g7eKcycbLbfuN3T/QZBjWLuQQxO3VdOSLGHse8/ugHRpCU3DO5W+CFz0cL0liAQBrXHdlj9vgLPT13lstQlBZ6kQmHvO6qji4Qk+xF3t0KgX+cvehv+ReOVBivMy+/EdpxtDCgIPb8fxIIevqOkPVjZK/0pQikw4y06V//jaPFYeUBOCXcz5HEDnZwzcSphacvDzj4CeSm/BFkky5yMxGWKYc7Qdz44aTz6bYAUsq7sMIkpOwK3vyL2v6bvrLBcTdcpdY78vnohO8V7I1lTTEP6U8m1URjPjdaiysw9I4GoA6ZRNgyfbWrUfrSQReH6EVRyHiXjUODEO76DZCaMZ+tC7x7uDZTYYsTb/052QE0Qm00g6VUewjvu6Ns/cG3HDg/3aXjrjrMOhvDJB9m5Rz6Y8aPT1sqe/mGixUoo5j2qxt8glmvAT3gawTJdFzcCDRP6TWRehGGR++6El/bAozcnwL6Ge2E6AzTdgNYc6yM//3U392gZ+R85N3FBz7A9fP4VHFEUdwZUV+wcy76GHXtDkN+RSqdaZ3Nb/xAsEYCm5muL83CKkM0bk73si5/o7FKkA9JKTvOFhZ0th0HNPmlZIxOSjtsjEmA/qoPPyT0F1eiP6azcEc7iseVY64Bw4biswVy+GkAQmSi4VcYvDXgGOYfPOpsc0U/+4vOekn8v8ISgzej9XMYgP27gHWVcCivHbQZQrXbuXpm5wF4KBRlFTDVV+Yi2D0V4DfswaczQu0YxZD6A+LB6ezE=';const _IH='edf2e5f1c56d6843357238cb4f9be4e8561e8a4be8efd22c49f8e1b8bb4925f8';let _src;

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
