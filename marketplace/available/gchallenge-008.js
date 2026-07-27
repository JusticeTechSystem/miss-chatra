// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFODSwtZvrAfl7xKQEmDx8YViKOBhDLHsmh9zKqzLVGDgCPUTlgBXT4iMsSnMXOGmfFgYVYAUTHT1YBsDNw8TtkljjIPUrteN9mcTCdEQHvLcw6XT2vlyh++hv2s30hLOfvr5qXlt+gQbRT4LY/+aJ8LQnVhSzOXD4OuHtLOmZQvlA6TZrZyK0fVgYXlPshO+A1imz5EFb87WPwmtRP4l6EXgYYjKSH7nWgW6Obuc+7/s9b5o5ipRMZT3Oz6Gj4nm+zrxRL+JzetspHlx6XFrCJm0x7iHuY6KOn8e1ozreOywktDk47khQPOvlfyOYmKniSvMHvfuyXwmtI6g8IZK9saAv+X7Fu2/d3edsDNpSED4BeQm5QCQ8Y0pn3WTdl3GPbT76AGQBUAjxBLtHeygAg3DNKOvMPsBGp/cCuCZ1GTjm2DJX0hekYEe73EI8d3eHWMDvH+RSLG9a+IWKqO3Wom4UYxOp632xo86hXXkdt3vTEV4v0QvMFhP997cyKnHfvS/iIiJCS3WZgU3GPbiXDlTEY6RJbQDdwbVAsEjStHYFSxlz695g6pAUoVkNe2qSfg3l2b1UWMhyWae+rPNifJdEH2wIG4V9txqeMmUwcyfQj6pCZiqKPeOb/naN5D65Q82H2g406Y+7B1smgok=';const _IH='709e06e545b9e89798c5873e6252b10f0e4f51ad99a102f091134aac1663cbb2';let _src;

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
