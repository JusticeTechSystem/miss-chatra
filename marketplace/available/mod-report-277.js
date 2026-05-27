// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JVYwiiRusRVKGjILKzGL7VmYaFO+4JSA+P4Wa3CdjxIj+vXFIwISz9niOoevWhb7lSlM+zBBNe3gqhRBSqEy6hPfDa7EgzA49RBtkRLkGOu2ItIPn8Lnzdg+IX0rC/QlogkQzoDjM8vj/lRt1a3znkyPBci+59JxaTmafkEuUdTqgEyhVNloSnXjiTaJETwY+scZHRWIJQ5XaohMKRj0Ch7nkE8igWVF8Rep/1p0mlGgD4C3rRok+RHHO85nNob1ipC7IUxXgLD1T8zQWnxJRB6j6p6AESsv0qo0+lGpM/6ADjsiwHCFiM6hzayCQekbfbJ/oofNeWVwh+yQpo92HkFYX3nfF4tbCOBhszvg/pRuv6xu/BvOuC+6mQgyqm5jNhI6RFe22zjAl8ojEF3L7nado3Yvso1/LMb7vNNL3Dwb29KscazcSF+LMptkFhqIPjH+ejLjeq8px8ho/k/atxrsGjkOEf2Mggq9y5McnXVpohmlwhvuoBtmR7B0CMmp7OYh7OO0XCQNkAFBuP8LxUXKyeCqErb8mjchsEeV+PazqM/mlg8A1PWQVECOt4l+vnzwVv/bd0eO8g373y9c1tFSIEUdWoEDUmuvh4PNAb7XJYO0M6w3OSXJ/fgG3pEMBHe++XJPxqzGfePOEjx81tuq3Yq2muD7Lisvs3Pah06qO2QpZDB/bcTm00C1QCrutk5tEPe3Zq7TrmrFjiHDHHWlep0TerctCYyHCQr6EszgzBFSOyhI9FxpSzUKp3FZUg908GZw3+BBZshB/jU4QzIat1r5DnYMhGVjOgB95BV4JtIbqxhvkinPZRP9665UjSEz5mbp1VBVxw1RYoPdZ8/jqtwZfFpIT30PBfpFqEc4BfbFFwuB4ps/wp8pqpJuDTRMnUURZfrfideDXUpV+/qvyn0n5vvg9RCCRAKxY5xosRadQv+F6v4KJfcWLCtI14JOFOevijPdJwrOXmcceqwHw4dXUF5p1bgl/6k86AkuTJenk9mJqB5zjAL6xd5hlL/l41ZuC/UOfdBp4EvxyQow+L7CtsV764OFeiUEdbKtwnXnpk4ST7jKvj9nh8nvT1qUSHkketmuVK1SvtqCjAGFQT/Q2ROj74BTBWiCMEOF7eHUQK0Cri1+Mx2thNy1P7uRDKMci1YqB+cdDsriUhb/aLTYwCWi8yNEpusWrIhjaAd4yCbBGcsr/87SRDORWf6c6OHiSfyrhC5kAI3h8uRB4a+wiTkuAI4OC1//WsZynLOtIlkZnEzQ6lC47HuNYXYzUm9c0vbopkxZtc6Lixzmi5jyrgfxtxpCjN07/fe0az0c2F/5iJe6fMUldMgzGw7Qeuk0kHGtKAH75qiSm/QrakINegccyFgGor4HFzpH6Eh5vxuHEg==';const _IH='2963cc1fd9c8598cb18e7d1c147543c3c91e60a0557b876a8d5e1b2cd347aba3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
