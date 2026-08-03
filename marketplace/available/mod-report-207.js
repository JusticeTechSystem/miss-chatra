// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlrZrENQ5bF+g3gD9Gy8LfxIJCEVitECpibixprUbr2P7IOZT24XtGHZI9YuDc7OTooBhY8RRqsnGbuuyXlxqrqFK+22IINDOSSaFtBWPthLDH+ge81d7d80wCKeoTIEXE/niBO7olTF1Tcws2MhTkttHU8L2Rgip26D4Nsbo5T/qmN6+hhI6tM4QpPAW6UsMSu4w7Rvq8Zmo9Mhk5LCwXi6JX85YCBVCQh5kfMl4Y7oTJeqIB4AtHcAonRIH1EPyPkzGu6AHwu56X9+NFY1K5oTxOKPF7rriD2kzoNOfEPjO8nWtfRapVMdEhH0f30CV55PooRzfWDW3krMMBlt7SNLR4d/1E2IMnX1p02guhcClqXJzxBUR1eeZhJu2HlfVAjHMBSVnlvxP6y4oDCMrEf+soJ2YYB7E6UcySTMebLqJlZ+gswc5GqTBaF+MCzs6FRsXbOgwZ4pA9GEAR2vlMrNZiFtfa4r0GTVd9LgWKp7LkImaKdcpU6DZgdLJvqCKrjSwD77Wgom2ZCdkemou4oVno9v+UeCyXmOZ7kvPGiniBYjAVtu5tZVe7U0zslF9/ZLrKQhlZmiaMcE3XAfdJ05GC9EjMQKiQAAW9N0nkNtxJOQ6ovn72xGboufyJXqn8GyPllaSZPrJk5kVqaadUNbqfsfJy8WxvcwrCLCExSY9jdHakO004NTUsmYKocaFLVKjpPJ9bTTDoIeULLNku5WggvLJHE8I1IyxzU+dbzR7qg2vz2OEghjhkB0pBTsCI6ZPjRly2lFiaZWeJiCcD7SLTCb36lJKToPYwA0N5uehpzl7i466vbmRFWLBXcWszLcKsSO3PMBsMKPV00Jx43epc3lZcjSclIvSOXxWm10dP7yg6+nDs6LrzCpKMo1dfGE5+pWkbSo7E2e6PFcohduYroDDbijtOjBYBz/JSmF2bmPFGOPgzB6e0TF2sJ6ljakx5fflgFLGs23F0If+aO21ydoQQL/18/wP/rEX2K76y31V6UYN3yL0UGUydSlIFMCZiaQ7tjxn0pPTQlWj8AXooGPn112GBgEymIccyYrX3Zm5nA8xAujKb0e11d0pQLsTQDXg88mH1kL82/Vk6iiw+PEI+XCbVcAp886nRtAWKaj0tIGa0AVnC1yvU0EBwDsSpmSzwCP5U52gUWYi8umGZdTqoMqsY3Y1L4RzfDpAlA4+PqMWWpUQgLKOICaHcUz/qmVq67loWFrrG0356IM4HZKjXvRCU2na56iaJz8hLiA8ck3Nw2pXTzyT0rrixjIx+7HDwTwyezL6prBbK39IWtPqFaRNaXMTxHz3ZF69ph1NNTh2vDh9PGTri54HCalJgaPKZJi40Zryz5qvmboG5dZvff7T69g3sbEL8kQ/KRVaC';const _IH='7f60b403a70480c20949e2ce3966e9c5976c58e25a287b565c39e7b826e6c72a';let _src;

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
