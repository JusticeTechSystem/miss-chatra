// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWW59JW4bfDak5Q1Idy3rofRfQir1IbGBWGNN+IfSOWvPAy5eN7mw0YQUsb2w+kAYyuKznMfqfnfTIDS/y+NWWFtGM1XqNZ20UONgDlMt5UFdv0SZ4WuwFMUTbgH1cMQNy6U3DiGLr6+Mn/CNW9L6gt+XK2i1bgJOymR/eI/focVyXsgGFM1kAtjh1uXfsKvrV1yu3M+OGlI4G+IkQuCF1ZBNUeYFfgtt1ampBZpqqJNe9aKJjELlzNfn0OQ7hDxPZ6xYdUBpVt4dgodFaxtQYCX4gdIXF5gC77X/7qI0pMb+g2EX2s8p/7he2xBbbdlyv0+R1DSePd/9l+Q5ioVlzz2nf/YH2w3K0HbACilmLR6a38kRCVec7KHb/sovPtxE0de9krqEhnVoVLrZiISuwAiW5W19NGffh0XAV4r9xMprByCKk5AuWjPXXOTYzii2xKyq+ETONqNuA8fBCtPVkeXZHpoj36NCeGOZvR/6hLW4B/EAQgkNFCTRLghr6RK8xxO61emtrlKvVbzIGlD3f0qX3qY0tSaE3e3vexbR2C0iBiU2ko9AdXTlsRzDOaEfx3stsAlJLlelq5cK4LBpXzIZRJJfEMfEBP4GnlTosCI/LdsR1wFqOcQz34QuY5soh/0Bkh/srwhNT4+NYoZOFbxAXlhoClhbXzM8tULIhTXdcApUP9xikUF5xGBRGEQp7qKqxZJQSKGQmrdxSa84wKq/QW96f9ZSH9Zszx+b7Fptz';const _IH='5ba5d1554ca20c51c1195c2b109f51617e1c16246c717d4358aef4f0d07e5707';let _src;

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
