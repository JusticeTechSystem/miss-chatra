// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7VY7Arzu5A6EIyhV9X8iLJfRxDzoH6A3nAtPLRhoKBsa3qbopwWVP8NgGn+ryampRVnoJtpYNKmsCkbYDNqpk44abSN8Qy5b/pVpdkSV/vOldO5R4uIRvi3IrkD5VYgpbPHvMAM+Js7UuhYP60kaCgWyqe1Opc69S40+k0EYAQX/kIAOZP7iwsdbl1HsAkBuGBv4Sum0WoYBBnhOO4j1D8RjECzq3bPCoBbD2laOKsMT5cS7iGjDIDQRW3rcphf7jI5i6DvQ7gTLtG1eWnLFCMGvTQgLeZV4xLUruvcW1SpEGWXOEgMdItHJxH6C8+BDEEj+T5wXC5aE+ZVG4HCSTxeuf59ajfHIKbHgqD4wgGS75ADsoFfrarv7FzkJHZexrkceAr1eG8qyFmT+TwM+niwbSglhP+U25JzrnPjjeOnk4sLjlWu3nOGl+3VX1WjGpDgGqq7UvVvKfowZ9/qz7pbjHre+m5oD21LKtHtRUWFtygQ+5uwfC4gI+KHGE+oL/31e/CSfFOJjtZJndy5TF9wthuyMMFtuP9aIQ9FqYoeAXNPzgGu1CUa4gZr1rCVMtnNmhCmt4feG3/rcqGWhZFH5f3q87+hrQY+tlw/O1tw5wGAQckKJeET09II/9yhV3w8DPHA2Qc4grxYmd3KfoyzXFRrIl5dE13e93QV/rMoK+MHba0fwxQZea6QEcoHPVJbSNhoF8JfzPTc75GC5BeT8qUCGoU4wbt8LwSJ+jPjSkFQmXRLavQVZ6DLbP9TOWhomronRzOf4bWBmyoMwNQzj4hQv+Xf9Ok84Bw2WioXbALVs5+rkTt1ZMz9gkzdNtzIADH3OAJds8+5B3opuH7EdRDkX02f/RCjKXAIJs+dIvCIL7VJp7Li6BIrA7B8mEKBl7ut0CRg6eNySV0iiLNScCbms60CIU3OJsCxlY6sSUmI6IGK0nXEwYqVGR1jy3pGh1cPDY4LD8BNYo20qFabsXINB3Hxt0GA4pLQEGVWyq61YXHXcxahHG6HSjcH3Y0bpKTMqXDeuZw1yuVKTDAbaAoFI1LU5xkNygU7Pkkdt2gxxlRTIPARu9qIZ5IT1PuaJM+8BGfrNpgf+f48t3NZrpSn/FYbxSHt/h2pRgYEFr5KOj2dFaTYvdJJcIPIXb/EJWDwrWy7NApvxNg7FCavlE7S2K+cIY5yPc+256n3Fp8Kdq3dkhgROZL3qQGZ0b5em+q31ZH4t3Q8=';const _IH='60e8d6e2fc27b68ac05a995cffd8d587127e030797e015b4e0b4dc9454537d47';let _src;

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
