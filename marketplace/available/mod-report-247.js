// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BmVpqVBL8FMAcn74zcsoUyRmiua6m4/z8ABQF37zEcGwOTPXPHcED8hsBvvD7mR6iMRPbAsjU8W2PyaOH9+0jQYnOjdy5hRnW/syvIGFRSH7cvXTiPaf5T/9fHOdxTmZcc0QP4rWPn327cNYqnLIOixZIRDX9eztpoFNosKSadRlq8pA9JilSO5E52g7e/B6MW+t9tTnagem+iP+SXjwS5DLkdbF/1ktfBW5kxFSLQEPOGKm69RE89L3gqPD06uom0bRMZifO1f+INqfgeXa5sEws8QVBibgXpKdjFLtdTAYu3PltabneY1LQSMrkR/ZCB1xzNX8PyEED7y8vOy6tmsiPOWSigCoHlTB1pYqMETpF/LD65L/PTuVWDt6pFfdDMwubWpTUEXhSsYjYp+qaVNnWODJI7fnChoqx8SQSScpQN9Ow+cdT9z+qS68TGjaXnDI4cZEZqmsybo4jAfESy7BKpb+fN58bC3H15sBD5VAgUmAWyvq0wgj5ry+kiBCYjab5rOYSqMJYsrD9VpYXY7KdaSI80PGZF99kP+bJJBHoBzPjVtkF4etGoJrG815QujAhLPf/LG5FWvoDYPEXI9QNEvMiA3vpq4UFZ+QE332EDhVJrIxvDABXO8genLk1q0ljmCOaHXEKuyJi8xdMjzOAAjRE1D7OxE1meqZch/u1JHhrdE1nCZuxSFdpCYUpJf2nrr1TqqNrbFyWSf7NVuh7GIWoPyiyHTLd23dJ7S17aZMSfVsnEzGxqYipxwWFZlTQFxRgg9JU0FnyWxXYIWTL7yiwLHbgupyYXXP10ZCw1cjrPWYqDWFBJhssnZjqysAWQc2+4M6cscYpv+f7Gh6g/HkF3/QR45f5dQs8UNGHgqdjV6WvfFDDkOpw1jOj25ipEdiZUoLmcqKVassz/TNOH4lxVBHKeCrc5/O2BJLIKR2lVkOk6qQdxbimF2VRRZDOHPwQDxf5HDlN4qA+ZfeOxP/DvnAavxUx3YgCNbUjBaqzdbJg5VUxG5766eOt3TMQJjy775gprWS4mihsw3dA9XDr68E8ZEl4cso4uLVAKkrsbhqKvqMny9yYPh3wDsNmsDVVdYDChGULX/bLGBtl+Fp1ytsQLYojHSriUnuwasXsk2kNCXRISu1AF0QgvX472haKVNFzOmP+Tjo8CA9euvmdvLem6rX/KGBHTSy8ZEkSQxKM0WCDIj5DhwZ2tw+ykaqrGF4GGbGXNXoucZmuzQtqCuo45XSQT2zFQtx1ulgtzDfDh+KdlqVXU5CO4nxkZi7xQZjeKFoMYGJW9novL8wUVmA3Nxp+PRsTAU5fYdZcNBevVOqu/dp6JRNJApoQyI/N/SLnUu2Kh5/kOE9F9x+S7L2n5W5MCgPL4rlIYQ7bRHivw==';const _IH='d0302acf0d9fdf5f32ff230d4e1e8b5db4aeb3b12bb655ccfe12ce74587ae193';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
