// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFFqgNAyZcnKKF4PPvd+8Um27lpHinigDwt/wHTD4tuD16TCG28U8kz+jL/3EZKoSCduf+Q2z9wdBma6QCW2gB13EAPtoNiP4Y+JtJd1v2gP5f6lVpDSbQSPkZb4xT1tC6v/LeSSBC1g83UYQRjLO9KbcZBJuhdfKfqVzHEhhaCxSsm4h04Fj8seMBqPP2QvSqpmH/3YEzMCPOop5uFSv6J6PvWZ8B6zdOu+ii9qYJnlZFS/t3AlmgECRKqLjFgJscbf50iH/3WhOr8plWIWE8EDOD+WGevLzcMeU0OyBdEul3P+ppo4IzHy7SVZLrrKUKYhIUcVZF6R869JBOV8ukxwumUPQ3xcioF2s4aDwtIUdaTerXXpevdNlISoJQC516/2rR6eRYOivLZid8vatxfAtFVsCNbyAI+mt4xhE9gc8vWhzSuKi9mYj+IicjOPHBCwdW4ftwXGGJA9KePhj9buhck+DxotxUkN60bI7cFlIPZwZhPawAS3TqtreKGk8njel3ly5xc/eUC31fp38CLeVmBsFnIYEY04CjOfJUoNHE89lAT2VJXVhSlyHVP5nTMIx4rqu7iPd6rrJQhJ38fHfmMTXRAYwheHwSPp2Zt7zUkvZh6iodXAdtf6F9W3WALiMn6ij0mmfsQyzPlVHagcl0B9wPG5C9VZmjieI/GGMyrvGxCk/yiL8rir5RsDFuUtBvww5FKKDickCrGcArjBg+9KEQhiwtrjg=';const _IH='e70c4bfbb983ce3ae8e753985bc12d632305324a83bf5468790d18d39d130e97';let _src;

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
