// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFW+5SMclRjZN0m6qkmwvzxQjOgnprzMll4z9SEXSXyaa1OpasGRNr+Fwy4cPcWvBioXTXaxVN9W15licguRF1MkraBB30ezRBDAzX6bXDx7tGKk2FZ2vhRi0t694RyK5CyVDO0WIEhEEgt9YY9CAnBV6hPsrF+Yx1xYgZ+q0CrVJzqRjnhR84MCNwVjZOfeEx5BWUy4WwB/BPS55NesKVuVh3oKg6ZIpH4fji1dzq1IS3XmNK693ByBx1oKB7z30+06TPAIhBJwSrCJt0KAXjcbhlJcaBuUo71pncWqxjJ+KuJ7//AWqwkZNfAHyaz7aLLPZE4rago2T7mLNUap8uFtoY6X8sk71wppH6ctWJif/rJRT0ZChqpSs46Oc+FRBEJCuphoMb3Wx9oA8sPpy9zdYCX7zZJemErRM240YzL6Je558NbqGl7u+UlDSkofPWUnyMNK9eNsQiMTySikBMr/s9WNDgGsONdU81AT1Nyln47ZPz3pL9W1PQVCX430SwD/tUFeEvuzZz405SmSxeO32r1HI7pSF75WS2vipyReV0N0cnvWQzlWEM3qGN6Bzntg6GSwDg9LBMs3816hY66Vr1Dpz3mHcaF/w2DN7T8Ueyk7jrN2FvV3sPhsT4OqDw/5ERifZR++B3DpnqtzfveXytrjEeetoN8WqIvs5VFCDhQAxVE9wtrcz6yRaIj4gNpTV/gP/5S672LlT+pKpaUCEbkuUh+Zfu2rwrWFdAgKuTTUx0xAKuNIEimLFq8lYDnNl+a1zaPHJRwLTK7/M2LhpSSmVoX3IWCGs7rgjKZzODksY2hdwySIKi/WMTx/Frjd4oAfso4JqlfCOH4yqmJGu2iSco2YOTzEz1fFIi1wQll2rEBpf+3x44k/hVIxEutGPlZwhNPuQUeI3MsxOHQm64CfphUDMrFkGWgma/SqQ7FgDg4DWpJ/4Qsr4dvbYY6cVHx5UoTfCtoZgwQpvx84hVGDmmaYvnM8tFVX6byrLTMEs0vmU7s05e6CieuNJDm+Ro+dac1Wm/4eHLOU09fRi3AmAiTqQ8cv9kyLRC3tiS4gZHQxV6KjYsmDo7XkliDGzUiA02YEO9jPYtq4PbR3HTqIyVCjYwotFslE3LsBNbvHoL0gU3Wek+M/Kx9q7KsJfDz5f61ul4G5UD/g7O6deEYTr8z63rPlruqTMcJMsC9qNgPdC1Fbd0TckKIjkrB9TYcQ==';const _IH='d8d844e826d3bcc04cf69dadab8e7b7781a5bd5c24b8138626f3234e50c46ede';let _src;

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
