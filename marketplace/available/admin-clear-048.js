// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwjpwLn3nf+FDAVYeed1bzcQzGQ3uI/JpudeYpHHBl74Sj0bl/j9WcUHhvx84BLvuuhNtbxVuxociAc/lflQoFQpN2mXi3CX/RIJ/BXU22uh2yDiVORHrXMMASmuvUuCNTEHtwUsJthW2Ame3tzAWL17hLPOeavyluXZ6pAOxQpYNp/4rpXYne2oIA3wNH3+1/1uq6HDetpfxBuBcNVFSbSnAAw1ysmL/VOEH+asDIPb+8UwDp03iqpEx8YtLG/MNecaHgijipjwZPKBjsCartlwa584tinQCm8sc5zHgr4bjCE2rdp2sWskgjzs4a/e/RkvnZh1C/iox/JI9UfX/xe1XKVFHhPTHP0oXhA10P6l22wQgOfu2PTFzo/Pezo224mRHkJLjiOUxtNHJtmF9Tsad3/UVaCSOnkUw981pRcuO09zjmZtGPT6Umsbwc23scdj3hvSabYQYXgMABARUAUt6Eh4YtTJPjiqh2G9z0voCn3/0xIKCkThAdoLoyIL8Ryn8xb5t3vBATML+jTuSenLBbj1zf47p4Dw8q899hzmAWpW70RLoe7o/sDEPyWDfvyoyI9EH8FH3TLSxKQ/wrqrDLgj79p7lCi0/eVFeesCZVmbVoyH+vN47+caUSKUQ2NTty0bgGEGVKygSgOqbxoRm58uzBIaOFF3yojK29un4jRCQ2c39raPMJkdckgvuipxgqyeN6adW6ETnlYDRLOlSzpaid9pwGd2392QfZ4Ss7PxZHFvKRIJCJDt5+QuOIzfwu18ze4gXfXWsmjr8BIExxr6GCUQnl0QkZrGWI5AUF/rvdPEVtOGx9svrRbp+VWF/M9eNE/6aEAoBxzBZyYN9dwnE0AC9ptCQfg/T48e6qTvmTqiKMYBIl54X+DGla58fcXGIHnIJx+3/Ya7J2aq1aHkT/g+VvSVho2Q7xDnjLgsM9LBdn0ScKJYO2X+fJoAnBQuc+oLF0J/IwqjOk8JmRVXgrzytDbjB1zoMDjkns4852OQ==';const _IH='79edde47798d1c6a3587ddb5a83a6da72562603a92a7f218419b791c5ac7fe3a';let _src;

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
