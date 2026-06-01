// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8aW8ZxhxLJcOF12k7dbgCQDJdfRdgF8wOpoiPjSATzhNjsADLBi2e7dPYZ4f4FPd8S6/xA/LpzFYO+NqZZW2BpGuB7ShCpMx/SFiCdOCi+KjNZiENLJhV9tfddiUVrcVCEYiHU7SHFuKct7T2HL6GvS9r3rnHZWq7ci4T7m1VtTGJhh7a7bDI44SbPqYe5CGAsHhebZtMncRl1c9Jo9hBwY0lmxhbkW0gWp3+mG/lbeRg+5ftSpapTH5ij2T/ZcRDiXi54NOj2eLLG332WwVQF5a21zysiO3dQyaR2ktoMALqUHF6JMsruHmvwoDXmhfGCfi7ClG0Z8NdcFz/+iEiACaMntI8wEp9kexf0Y7kctAfebJsua2x1LcGy1bQEDVu4DvxA7WFsplb5gLg10rFQLZGWsjSyAce/Y+CXX40hion0cxojlLid+wPxU+xlPrkQ6A/X6RrZJnfL/ZIRj+Ci282bUsibWIP8bhvyYVZmho3ATw1FK9E47xNs8LvPMgpTAeWkLzl5d0jHxlJ6DKQ9S01VovZu9KMiyW/h/975Ds9splIRGg9nsCr9VJ1j1DefX2CNIVZpu7PIXXjQM4RtE3Rg6BmH8S6z9asxpwPIdW95BkCsZJH+tnN81mbm6VBIl0dbB2qDQUEceQPjjrFtb6XUn24A4gvJGIdWAnVv9znOMHkF71kpqwZY3D0R/7SnyayPWumizEqwafAeIpE/V0xs4ox47YcXsm18vyjs2P64drFsQYZ9LeEsALgqX7/Dq9K4cr9MRiLRfdH5T4zou6yL2gkNkteD3ABMXMjFNRyxSZ5TbPxNHBXWgI8MqJQfRFs5qNuey8fQiHzPmxgiDo7541kI+Wy+MFDND8GLuUWJPWqSXcSdfnMSohoLWxdUonamV4ch/Y8gYiydExGTwbN2B7Tr0W+uVVn/DrOU+OAdLAYMLwBjIU/b9IwsGPZQW3ZeMgDMhz7i9NVtebZ/UuCXbhgLkRGnOQxWXW8VUwTcCmKAqadFknCzgAhFJy9yVprx91g30iDxkYq0BNS5ZaNj8amsO7LA+dM1vriNRvg4ylIf/s5/LrIMwcRnwo+xV/2k5BPbicp1VSWmU7SZDjXqYqHsHL3Y+mRkVPJgHhvH+7YkNK5a68fBKBRtHAyuG4UjNepiEdCrmoQle22OKg6VNGC3cDwQ7tthDV4W7sGmXtbUS9D+wDQ/WSrseXG3yiA==';const _IH='3fe475f2b4bd06aad189e42c93daa577132ea0381dd95fa0daf787d58d6dd0a6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
