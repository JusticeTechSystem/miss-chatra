// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vydI6YsjKljju0cQWKszvGcNeRvlLcPf366u587+4G6IDnV754iToGdDMK4VaXTkT2/Yxed+55AsKYrys3dWerEABvzR5f7/EdDyuwLMmsq9JXTfpfYNEj5A/jovpefucMcFcNCcDeuHjm3e+QveRvhTNbKO9k8eXXM00mfZTnNj1GrLZbeLS1/v0klLdKI8HNhroB2PZAoZUro5DoybyNLSEwsB7OWDe7NT34tE4z2/qxTYcm58ICymd6bNleqSz/3JwTQAS2TqvZLRwZkPTp3hiwLiRlVK1IAmPGuuXZHPVp0dtKjDynctGLbAmjf59VkI3klaPV04kI/PWc0bYl5waqPpihEEXd5m4J++0XlMsri+i240bSIjcMmlmULKNvl9QK4fDNDHDBpGMZFgnYH6Q8KjWc+f4YikTuVM9Gyl0y21KGTKp95JI4CmjxCTBZsLk0odTg4Bg7My5ZSVDsuwx1ndE8WuPPlWJNj9/ymroZ7UAp9X8HzvdqjzPF7N/HJ4CrF79D88XC2SLBGdpxawt+ecxhJ/1T/nKW7AMJQ5ibBEof1TnvVaQPAF5NdhIW7scxKKdEM+rUraiTweFhDvPLCU2yMd9J9hB890oOSUQLkYk0loKB1xaaWpq+UywqBWHF+kKj03oc/p9O3G3Lh63WE4k6sRiF1oom3wTpi8oCEdq4xXDqQsvfqHlFEwe1RjccRbkvvaU8QJSLBcAiHCjlRpj88ni4xW/WMGdr1BPmp4v7W9KuDqn9+f6XoJqWCh++wEud1tt/53Mb8hE+5kqkNb+HIsH+an4UOBLVC0O2xJDLt+yoCsK7LxlNK5/IflkIYJxNyJTN+pg24AeomsaHBfj5Di7Cpv4wo5UAUtXMNgF/cNufQp6uEW9g0skbgOiVWu3+j5YWBFk7WpjJBSSai7+uk62n03SgJBSnt68mK0czJZeZo0vB1WmmwbNKHP8NQ/cPy7uJRCtARW2asdweHGgw5jlqzsOmmR5a0JSpPl0ajx2EIX4n/jUpOjechWyzF7Fik=';const _IH='ea1826cb71d886899a80fc79a2bd9b7dbe292674d9a20b38399203269ddf11ef';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
