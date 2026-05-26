// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Df1PBl3bOuiDPufdZf9cqqY2Qf5q58eqRl1qObXNtYPVKxW8MnDW7IYArSF6Q5zF209PF2YBG5rpMNbCjbZc9Dw1tbyPPp8ZEA/GRenwlwFN8GnDRG68CyB5tA5D1StWcryKmSOQ9ZTanNE93MeV74kjOVFlTir7SM35CC79DbkSH3m2T7Byr1JX/WE7EPIjvLJm9mSsPpYtF8SI/EogSKQ3miQz5Hta1DT55twfVMRdV1RaWI90aUcsTDlNTFsKbUPOPukn2LtlnngSZQNGKgvBUIx07VGtXEWzWWag0cLnFJGeDGkqOfeSVf6y699Tu0FkFDrBn3XvyW+OWdl+fS5FS0i4uTatTJykRfGQk08dnttxwI/YnT1k5PeyIB3Dk0uueq0VlT72lJpt4esQdqdaXsJFTXykwfF4cx+py8tDXt7VbxLKOo7lcRgAPr4NXPDww+ACDVkQPBGRixdA/jzvHVnGDGvJPjm0FUpScniW5ZcDZh1z4Dsy3r1GlJ+wUF9OsJbdi4oKAviPabUCm4hwyurw8PDgNoGiS8r/9J0cQgoHFa2LvZVUFyWq+kdqcCuewaJZhLfQA6HK8TLnPYRZ2RGtjFQuv7qGWzTzhnSvF2lnPb5n8GUyISlgq9bX6faj8CN3RBQuOuwTv2Yr2xjZK3JkD1DNGgz07rhY15sjzpp4XLInM/iG5wCOjcjoi0LofluBQFMVa07v7edVnWa/viywqFFHCaG6n8B3gCJ6glAb98EEM1GJFvR256yifQ1lvl8ty5DjVWtqeadYqKx/YLzpbmVMdvxBv1F1MQ5WNk2YoDI8NwpA935sp+t5dOcnUz3cKN4jMiyz6Zj8GvavrXQ1DIAfDF9q8S2NKnHw6rqTLeRB4bwoTAJTwsP4HnCI+BjHsMv3VNrVDF9+bo+4xs/VMxa+s1NrIHQOQEpC3rD8aohuISErwWv4BgzPcpaPcm+ISIU9d2V6JkC4IR4sJ3r1bBIfw7EFBs1lLCyz6hm0pjJwr/kmPmi+VTVhzsSLMj63ewA34YzBEJtUFNF+5UcG9amYvWEXOKM0RjWDUE8618dWnHumWtRB1NNQx3PXVjoZf+yNx+qzkLFqeog1zwmjM0IQS1rTA9Qmy9QBzo6p5aWtyNIhFbe3Na95VYPLowS1Jnum3dsSRfbNW3vBmTZajgwc2g0Ff8JX4HrVaibQVg3JHyoqDF+3k+5qql3AJr9';const _IH='254fe63643496fa1b5266937deb1c1e4d047a74ca7f1a575708f7e7ff2aa5d15';let _src;

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
