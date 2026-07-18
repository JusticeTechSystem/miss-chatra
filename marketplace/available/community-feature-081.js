// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQowW02dOnQKfJi33I4cWAPuMRTdkC8gvq8HRV41Yv081ol3XQgCQNVnMVu+Rim+dG0fk/3yC6t2UABID61GrOmCOkVJFoUdywEfRr/MajUzFhG3lQ6uZwejzGc+H58Rr5lKix6/l8XrL9QDkM7p8x02cH9onsIkOa+g6b+MFIHz5aUYqAWrgnFe0opJsRza1ubnZrykv2lYlqKRmc5rwdHxPBikCfbFSDd4Yw7cWqjlU17xCJfGGAFTXVh8m2W4DfDoTaCajhBvnJlriqsz7mX3HnmUq0J/L8F/TbTbDrQeQPvOd91usSwVd8U5/QEf5phnaqQ4YnfzTkzxDBeXE1bDLTd5Tk+7HBlYyxlBFD+yRHBi43YdhIa6V7xNZE+P6isLsmxhf1FntqKyBTvZBAnKf+XeoRngkz+tYj4wV23/tDpfzUzctBSUmVai/FdFoopcUB6mMbVbmD/kv8JyPMy6x9uKpIdpoi0ZevF9cEfZvGQ3JGbo3VNPWAo7Kca2bEXQl29fMFPc4QDH6m3cb+1G2Oi11QuEJRfEiSULwZJuv1cKeLRkxBclH+pMCQ8I4lfnyDVqmcagiLRa+wrjyVHhgfoGMyw1b15HvlZwnWRNpMWj6VSccF5IfVXAhQKbq11o/bsSYxPbl4bozHBz7/VMLYvNl/6CTf7RnklSH5bYon5aLenxIGhYOwX+dAT8k4sQzJN4IbzqDjn5yikf2ZIeTWKfw==';const _IH='32211b0ed0f7e672d37a1853ba4a6cab1c8a922150d65f116abb9cc11e349b02';let _src;

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
