// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0nVfZ9o9DAzIykzXKuTfP37Tkk/rK6LTKrCQ1YNRU40B3OJ8czpzDkAp9X8jvICCoO9jGwRv95dI66DJdzH+ZBCXLnFxSzIEWx/jmIeE8lePN7GVkRy8AI4PiY7CjUPJGSSsPZ/7A0ZdYyLiPgu5rh1ibKPHJVBdnFrT+UBUSSVT77azWZ73emLxpI5cOzECXvAhfCAnHiwJBnF+ISQmre4sOEDMjq5B8DgGWyF3irupayvPuClb9tmAEg8cRNYxBodM3WGYD5vHw19NW8M4852e3BQBCLQE4hwalbIlzm75udhb7zOWgG/Q+7OfRsouRj6p8pRGtHV6VzeoeuzdAmWWDdBfSLB/wlDw6bpNge8m1Nvje4gC0kjAOOOFxaGt6cP+pbKDmaBjOEEqXXvJd3bcUBpZH0scOslzpTpFk2Fs0jL7TG+ntieWiAlLPqdOYiMFGF0mJs1OkMl2IXirVT0e3XELqxiu7m7gPrqr/zuOk6qw1u/w2/+RkKLcSjiO0+Bf9llDKYKXyrJSUIbVcVdhMOunM+sCUhRcMdWeSon7tHk0q5k4gB9T2GtdOqP0lJKckWvMD/bmZc5uLZWP8v96xltPDIRogSEdijJIoqb/V08VuBLIygzSniRcF8nbFYWjdktqrrjhHohuyeggA5ch/G4LUKNieVRkut7UaVutZ+ppp26+rg7I/nXbuWLYAhszkb7IHkB2xHRuYgAgkSdI4ZKsstRsN3sWDBIw9PrmljwI8c3BaXCXP+4kBv9p5o8bstnTvG1YLxv8motuDTEshQ3gP+NhA8YndmyjUcZ9LhBOZSwIb1q7tHApKi051MDNGY5y768gqV5T15lnQZprDxE+gI0iWlO5ZhuqnhuW5Pi4Z/ReeZQj81sk5IFDcp8zlpu9Y5HVl1+Onh0X1wnE+9zB1GMxlyad/9yHmP69L8DAYhOaY3+gn2ljPzwIYc7qRovzRPgcaentj2pCHtFAD20io6S98+3F8csWEecoSx+g/j3O+7QvuV08=';const _IH='dccae7ee9fcdd6e6ccd38c85963dc38b41fb4fda313b6aaddadba13d21c47c9e';let _src;

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
