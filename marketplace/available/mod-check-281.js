// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT//jAoIBMKSvDLNIOdeSRM6HSEB1pJjncgq6S10T1USbybHjDQVcw5K546+X/74X567s0QUuYmY3sf7zJoiSRh38ua/Ajk1LMdbYQ6wg0Xt3r5ryxcZ15jb6Yo5hD3nFHMGXSYC6M56RaejriO/AJbReerUe6b3NY+s8+RXpuNIxB6V22nmlSgUl1f0h78d9e4f63IoSgsauk5X05xpY844MhzAypYncveJo+BlhW2LxXXqFLFPbKIDI7c4XPMzQtU+ATydJx2GeUARszHWZo4vYi045PH77in5S8p3PpAHTVGZS7ZOP611Tfa5ssZR6tmN5WJR7EZqcRTt80xo0nNDif4YWBIqyF5kDN/IBMQ0+P663oU86gzi21zMwlas6k2htD4Mz5dYsUzi/w43CZRaA6dq5WLYxPeIJhvzKUGRK8WWb9lalgiZ/jI6ViS27l2JJqaNLxQCjpTL1BXWrDGKJYdzwIrpnzLiSrDvKhHi2es8ZrVZqHiUeSih/WpJkCecR75Anya+pNcpUM2eGOrv3qDtqI190M1N29AiQLuQNf+t0cQOOI8yeWes3KfGvJucgqWKB0OFSjQFKzrp/DdKqsjoxhmHZbm1QiRO4MokXA8j8sr3IAkD/7mM2j7CCV2/vA/osambl2CYFoy5C57n+wtNRrNlLNcRojxqFGW0ukZLqe2GdAO+F7p7VzFMjrFDKEBa/NVhqgfiwi5fTNQs0DckXgwZMQteIrkFKLhJe62We7si5Vr5HV+NpF+K2nyDKeGt8GzRWZyb3BQLeddd3nvgxIHRAG8qfSNK6LW6gQlumOjwe1gfHBgmPIJ70RAGRQlT3qRILCXXEe6jQDCXZjCESZ2vLH/9H9My6RdvcoY8fVyYiYOWYx36lMJenP0Pf+7Om5IUuSVu8ZrokosJJduaje5c9ZbCfotQk0x77Iwp3dkrOYZjJeV2guPzkr+/S1OlsPkpfotSz9DGfInOzAiRc4QACN01vK58+Voufmj2CL6beR0lxYObaLxGtXuvHDL8pEmPyGRsONIhBdUdYYOPimrXssvnPVt+c+rO0hF+iUAavG/Pal+PAhnBaXCuG77wp5KCFuIwCdR8nCoVf8eCbQj3ftpFG4Qaz/Gx1MFDWJhSAr7mMCxTGxy0H490mF6CYH7gLsH+rJMkftNwpHEWIyr3VaoUBE7SMHIwohNqsnbXc9+40l74Tt0qjJG/5mWhYev8EmGPd1lnAZPEPyzJtql3e6eEWzPjNy6eaCIggKqby5CKK8MY+B6Coe4Pz7vyfG+bACuDgawQEoa22N9kdV/Aqqq4lDd9TJfMeoQgPkk205S9BsVSt1//o7D0WjAok99LFduoXcSwmxfuYfX3MrubMbPkh6l5wU=';const _IH='1963dcdcd26dd08254dbf874e7c319a3e4d96912c01648231a4bdda32616fbba';let _src;

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
