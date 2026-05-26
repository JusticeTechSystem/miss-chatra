// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0yFbqQ/SbJwFoHF1XtN1ryUusCIjhcVuwy4VuP2VIhAT0ycSXKI9zwpEGSNOZD/UmYK6llcG/+3LOoXCnwcf1IUyfASthd0rCAuA6lr+h0fuoLA9YNzXjmKolSc6ChFrK6kfY5IXJvMMyT7eo8DQbDLCmRiofqFjvbdc6QOJPbeAGYNMjYI2Ri9cqyQnLWksLHBLrf32e7GZV7N6VmThlOVszSJwe5/wQ3EHCGbHeqDnVYgIH+dmcTVLYMOEr/sIcp9D1ZeoWbHZiqk9fiRPc0cEaJM3yfuge8YzEmaTdS9lW6gJCEHSP5KLjcd7urzuvr+oPGdl456aPO4GDasisNR0hhzlJWllTtgVMihCDwdO0spQAPuGcOY+1WeFc08yw4c7F7JndWiTI6wIkJafvWnhUBc7XdzdzOqp1NuH1XlOg9MNZupqAOE5TNKhy5pl0O0t+HGeCfncNjrrjQOL8VT2TnKeUq8Oy+ko+INdw3+GOSOwz6kv6WYiu4XGN7wREGkbzy1E5UnPovv28ihC//VrBRebiyxWrJ8Gtid+JHvOwjxBGeAS/fg/imLVp0o5JEt+dSjvS0eMKIxTW6gmNvxaL1sM1JY4w5+jMM33/shbBc0F2cvib3prO6lr1TMtXveY7c3lxHANqqylwUejMGRTflt00lDjByHLwE7UQE+RD8YCeDjkR0SM1UgA8AZKXUnCe7CPtquQKMH8BS1K7iOyxUvLyJawiyTd+fQscnZdSgmIiBP4pChl7mUMmDViKZGQCN5K593kPv7JtIMPHiqkWRANMzRlD/P/H+nWp5wvsv2C5CcmEIBWpM02JPB5go5Ei7zGsqvOxGT7bK9lOn8ik0AGU33qxajFaaPFx+CLoDhvou089RxWNZw6DQb/Fp5Uzv0TPT6eVozp6Gp11x/O9+j6C0KWwC3AfqE2+zLMn1Q48DbvkzlW2RdGbBum3iq+sGNeLr0X4jEVYdb5hQjBSXCGDTwzM+TwrX429Jjk5Fd1immowwsuYmOYzLWkk2Khg6mjHX2MzBLpvV+wlZ9fE9puEKBUQInMuv8la3ITiyfMuIsY4wM7fyPeIqmaGmed5lOPWo+MFTIWHNCxDF6kPAkprq0OEUH6kwgqBw7Xe7hfOCuh0953RLZPxgAhI6TNJvVUJ1JNUpVLHSVy2W0+rMji0XlWum+OXr4AiFfGceOlXYYoOXgGBrgw+uzgmZix9W1bR8ljoMc2+lbDI7lcAVUiPCeMsz3WnzJX+KgBH4y4zsxV9XFRVPwQs4Tql1B+k5GVMdQrD8VMbUNhI8YokvLL+OVvo7y7lynV6kxUQwDs4gic7+3mK9LOmbyXiRPm6SrqPezswn36W6LD+Osi/unkm4hMK9V/A8xM';const _IH='eb9d046d8bcccd643297c057a20e86ae0e717f9d75e2aae44440da5744e2859c';let _src;

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
