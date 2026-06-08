// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cei1s/SSddxZwyHn+3YFiC7su37IFCE4KpVplxzATH87iHhmx3P4lt9AwQzazwXTdjS4GGbr3vIYHrV4N1CSE28qfcQQPLLxuu8yEgIsnPOLFMz30M27EzcvZDSgsM7NtCDsgHbhCmZndUuE9fpNsKwW3l9Aq3dMMlV0oiaxQ87gd6QPUTWeL9s6ngAdlk0CkNsHR9J9k2PMcDiVUs2dGG3KMf2aHYrMUl6iOBVx5bQ1yvJBYVOElSKC21gWcbXN9imOLdSkbwyZ1v6VpGSOLAvndRRZMtREAHdxFE5ErYTr+iO5ckmb6+cP30znd/c2K1JpRLZrOzkaFH5OQzHxiNREun7YIlgD/3ThBOecL0gkRxsD7vc3nJfJvmTBafArCM/twUQ+8PwqHZrvVbHOlqWJLDjrc/hO6jMwY0XEVA0YXKAnAn0d9gV0WTRI+0HNAPfxJBdq+Sg3B8pYKhYuuAdXypiHcR7St3olbSUtqrtZ/3GbnnxSKfTyA/tQKtT9cvyNjmsohp8lPSmGujP5oxdCpWsSKBl2eDdimgkKb/tCKz7yh9JB2n+zg9lsKLywxe4P+NNeLCvlSIfIqgkX/cVsOsRrh/eWW5m1d++yGfekDXeuYYloKIw4xQMwxHyx2TcpkxxYkf728SJ6rpotxsQeRmO49AJ0OcAYKgc/t3M1jXuIsMNKWyvdhqaelcTVBDfYCqUBU3ulifZpUidkR1frhYlyAjab8f8OpLj3xA22Iqin85gA54XYdfthe0h3nYLX7WBc6ZWaXAgT4xbojgThzaYna0Gn3C1rWelW79jW/dMdXNFnRZRtQXUQ0Si/Y1cjTMioozhjdYP5YD2YdbpOUU60++HGscY5bvph2ziK/5FxrQ+j4vbJFlzt9sGGheiQxDm3o+ik/DmwuXi3gN94k8d1Hf7uvIFbWap53BCwtI3B6sqZn7qRYMym65biDGzK5DF76fFQ109hlpxOQr/oyr7FuiXdTKnikwOatqwFeWlvPRnjxgzDBjIVpshE90+qgg9tPgudK9hyBWr/GTj/BSdApP/dI3UjeGCeBWgzXgrcqpna+frcApA9RW8t9peEL3os5U80o3K7s04qz4Cm7Foo2L8XSEqZjgsOhfAIuAx0LK8/q2dy0Nsro4BQCuk8fMXKfrPYqc/Db1IcEWB7jgCLrIbvXV9sDUHlogeiU3nTYcZw4su390yL58w11Mcwhkj1olP0Kw==';const _IH='a9775c12be44d6786ab13e9d0d72bfedcb13987f1c8ce64dfcb14eed58b76b61';let _src;

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
