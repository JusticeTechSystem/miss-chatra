// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShTPKw1s55m3o7ng9ZXyi9v9UUsWG0v7dCKneQrbuVveN6eu605JTvs6fYrLxug9HfEufpjX8iVOpxn7dSEKeyH76YkM3ZtVR8+l82fdfYnhKfvqrdUS6H4l5Q5OgIhgxCKrWpBT0Z8Nv/c+RBzfKhKJBo4+GOavZPnfRjhSv6LeGmrGezAgMDUCEl3pL3I4FmlNxV/a0kdjlvAY/Tz1weGb+oymDmGwmUwLCTZkJiKNjF4F8uConQa3M0Ns9WO0U3gPxqZcdElG6pqMy023XOXb9RyEyIyr0ZTtJ0+NixrltMMPLm51Y4kcqF9+AVQLk3lW5YHvYQNFBlrADy0Uk2/27Evm14eBciTNzqQzT5kW8D9Jes0sUivvS0MbFpTCsQoFZmMfZVjixXFmuxAPzKsGdoszLnAlog3zHVFfD0s6v7Rp9QBur0l6DQhHD3S74JtpVwLn5Ah88u9p+8+jKNJssTQblH/mfcYesGu80qkU0XKFPuBVCl3nfSuUnoUJE9QTcm7ocT38QyirR7I1ROuqV3G7SNfROL/t9j/ZS5RVuo2t0wSdf22/DeyIemQxI4wO9pSPMU8JxzlpxMwZCqwCoQjQAxhJtVSjnMjGfffdupS8gz4QEPiw7HOLhfKkE/i4XH1PMziDsS5C//w9kEgJ88VtIWutDOo4WPgU2IR6gPPJK5xSC81ZW3RRKbjgGYcumpF9Y7kEJ6rrpiqcapRnYdOuY8rwJRljIEjhC+MPbgE6oyXA==';const _IH='01d1553068f39b2f63b7fdd69df32a3a6f5b02e37ea88f5f474d1de84fe2d0ba';let _src;

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
