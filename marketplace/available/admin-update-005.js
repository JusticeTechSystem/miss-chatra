// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHQw0/TILe7v3WQ/2+e2rdbsfYjxqv8xVXmMwiDuf2RRBllRAk1oHI91ZvivROAdVIn5wCpXdRid3nCxhOoN/x/WtRm7r+iLgT+sBMp2RVUNm/Acqq4wOa6McC5a3mDixHWwMz70xpvLSwsqTAgNBkr33gO/N2vHu7Kmhw5bsYexkSu0GaeZUEH2IqiIP3Ub+YDkYRoQBlGQzN3Hrm+1U3MP3eZXkZdjwfWQ9ETLH9rCJZiNLaP3lrd51012JuHmcLVGtj78KfP3G6IFddd7vj/E2erAId0Gv+5cHQIVleKuzsExqQBhn1vuKGD8F0lk4cln6+LsPPWDZTsPhMXntywj6oKw3VChzjpKr06d9SnRD6PbiiY3gBRfoqFyP5oMf7JNJnisbxsVvCNSxll1XzLCeszySfrsurVn6PrJmi2Rh8D9Tx6y1UIEGugxGLIR9WBK28QKEkrFki4ASeaI2t3ILIUug5xUdjcCLXh4dG9gyc96c2KhAI1VFlt8qs7GDKhJ8WPRrxXXd6Vk/es8R1zkd1WwXbuaXklwq0/m63J5/MudUg5IYp00ak5LpWLW1ECSCpicJwFwkzGlyCe5YVd/XL56YsA7+AZLP1Vp3FOX0O53N2sLxSRoSlBiCJYvHueGohJCi9R1eBFssVvqPQUFV1wD3XLFpDqS7B0DdhDjLN1Dtvk6mGGUn9N9u1bo5ENi0SYSgylSpkrYJjsSuI7fcxFMn4DzGeYADHkxy9EjS6M6YqnpaJ0NkCdmDtL5/NWRdHlr1RwC8a16i4IXPJz2XmNIhAQ+YpROCOF8EmYgUWH+Ac9vdoAecQs/GwXRJ3FPQcvFrjkZzJzkWtsLHMqEcAjizY4Ry0OkJGnbS6vK1isUeJxfFMMVFcFxAy9YbkkK4GA4q99rN2wuDusu2LDQ+BfyVSAfCb3KihNncgtj6ZyEBFdTutR11yJt3oP4fifh2Vfg+rVRK5E8u9Lfm9omfP0RX5UXcb3RwbzKf4Voim7nWB9us=';const _IH='5accb38dd65c67b547855c3c313ac3cefd558dfe709a962616fe595d0856cc21';let _src;

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
