// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iUm3QeHNnMndJOAeL86pS3Jl/qPaF6deKGw9wxJdOtWvIBZ2D69tLUpU0fg0jRnqyS5Y5hjJ4WRDjrkFApigiTIvDGalAKbJu9UqOd3+C+V9Gzm+GoC6AGta6ksOLhHVtT8i+QL9iCZ7+UTFYCVIiLjPWESgTYmFdskpoOvDbRLMsnKZz5nWMQivBZw3kUVnd9s67GZnewRv2xsIE7idWZyjunLTZu6fA6sDXv+OreAsEwH0z2RziyvG+ywp132rKSg5SVfpklocMKSYOaYhts2yfKkMLw+2ReGegh2Ek2wMPefC+TZL/igqmYu/n5AG8BhUAMNzGmIoRPSH01JPnCrHBOux1gz8z/v/bJDJkpMYFOTdMlfTLwntlFcqrn6wrMYdxxD5H4ohoa2LBYGQPVUpjHpfGvUxgDmESN6Cr5jTP6+aOvcJIHnFHqUIcXCV2yQOviKm7qCXahSNu1KeegCpox0wqeH6Uuk8XcK7I2eZJf6+feiCCDFnnFl4/ENslUj7tc38veenZ+3qtQaejI7rSJAjFUb+9jR2T0t1IDVXFjjv5M3PhxmVQV/VrZMQLj4bcAGVRPyOlhq0IKUEMjg/gRMF/Wwvkacs9BHdnO+wc6j3zS+qKMEj0CZiXA4mxx7eGmEEdL+9j/PB3i5+PdEb+GBm9nWGgLyynAR4WOFGLXi6FHt0y0KSC1kCtgF6nlT3NearyZG8rLAQVyz0X29ZzK4Qtzxwu7v/hssaLgjvsW1LKtb4EzPo9G3NsfYEIvMtvTnwMR8q2W5UvwmeSjspHpbApwP7OFRgldIVFWFjl0M46NBPbSq6f5JF+cCAfdqFUHbKL/XSf77z2QcxroV+7P/AgJEfEWKppxuhE7gaiS3NYSPUYPGz3D3M+SGJGlATJGDBi8fzl2m4ub6weeENCBKjhTsuUO4ixmf6ilv7aT/rkqm05VUthUjbf4vEU1XelKHP2owhyaRZXgdz/w7JyqSrRt8wFJKeI3126+gq5EWrn2A9n/J23XDk';const _IH='e1eaa3fc41fca47fc4b188b04d32674d799cdc701c8c8670c1d65a4cee0772ea';let _src;

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
