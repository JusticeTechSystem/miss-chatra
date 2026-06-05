// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oh6se99cDFw7HfcdVXcrkF3BKVGOHojofxR+ix5ijRDWeIoxVQNc+/GRgSnzDPnWX2jvJjhvAQHDTsTi8lIaes3UDjAoRQA71RBRdJenh/taRNxGaQZZapPYScHvo4O8uHjllpgVwLMToQxi5q9R9kHLDuA0/Ja7H57cMsgy0CU+xFnWb/DHoX+xZ1Rnf4xRxMsHck/kp/AJhVRKo/JnGE7t8NA/YLzw7eXzibmJBjjd+h+zp+UAHYcoC0QMkDMJEvOMTUW7RtSzPJ7uzvHf31TbD/XZUKCN+RXsPB8f+46g5evNLG4fcQ6W0lXCKPD+BWnqjxyowWttM/6hMYf8cWO/NXpuXhzuXW36Vxk/M19IEfLmWOknMRxCTRdE2MrcFxlgADyLKv5t5XJWqGoGkPlZGLNhUtFbPTSstnXfLFsD5tknT4TPdFNeLcv49Um+cXIlhnMO3ZPjM4YrAUa85m2HKJzw6cTd0MphRP+LKoK1GShIyz2QtQD8MQH73A+6qvIXwx6uq7wbQtYPb4Ru6Sdse0Z2uy5EOmJkMF82rDPBy7Co/XD9aN9pkp+hFIeqz4mdQO3KjVesX8t+YTj/+unFPsqNfXaE234m9/gXEW2EkrluUfNHG19jpfZ3Hdo4Aq4gw4kNe36eqW0KgRfBlOoMLZ1PMmoo+yKeY36v/KzglC2ja5X3UOlKyF8Gpez9QDVA3TYA7DZBajRSHxS5sJB8o2P2vhPMrLSOIs56o/LSk0kgIk+GzWU6/lZneqlVyqnPpgML7SEZfx8jrrXkwuCzx+APuMMwio+qh4xrIAZ+7+TxEDxtIjhFbhYxqBH/tRigHUedyOCAYMyaSreWJPGmjTa8pZ+0OFixFyXw/fKi4NTQv9qClewy032IvFcj9XRLUw44lWRAF3rPqrmHXilgiMzxY2SSN41GhN4JrEEw7y8V9c7Mja7qeVeWLQ8aER6YJnm/cc6aKxyeyaNCvBAcDGgiY6GuCfSp8Z5FA0GQ4rAQnX2Ifu+XcxFcyRrVfm9wcYsM4+T7nNH20z25Dw4bPt2NmFf3clzK6YItT+/WZ2Gx1GNr9q8HeLEd2HeudFUAEaBRTZ/NwuFvvwdloqGmQItycssOPQNXPbSXs4GSDZitL5PzQdWJ9NrqLM9HUcJsd8nE7cydUx+r2/Qar/04hpMNOOn01uYYgwCPOte+IyFokOgdnqVkq6onI6E3VsavyDfvKp90k4KHZF0wPcM=';const _IH='f4c77faddbbaf90c75749620c24c937f40cb11ccd6ae8a2de6b284aa1ab8d550';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
