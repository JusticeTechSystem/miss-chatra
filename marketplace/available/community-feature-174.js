// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X8OPTyG6EFXhTZgJNlqY/GA6DCDezD50sIuzg9heKZDtSJfRElVilX7Kn/DCRfD/hnrp3ln5zH9WhezCRkyTOc2ISPFHHzctm4+nwb/HiN5jkcb18botGbsf8M7nFfgbnJBq5w1Bt3XVuBG6ITQnY5RhaKVcp6NuSUiID7HARNBRspIeahT+rKsoqCssk0C8R6hgi8a84SHGmqzwHqjl9J0UdfI2q3OEyanQe4Pa2ErNngQXGjWiQeBLd//Sujk+kkiqTGx2+Y8iodcodw/Ggul8bqshDEsLbSjE82y7/C/MAYkMdOPDlend+KTt2I+igto1LOfxKu8gogCAMlBfpPNN/3G1kaPY0T4ff4CqgWWPTrsSoIW6Nnyc4wdvoSGCqcxiTlhdgNrb+COXWyiktIWIkvYGvBi74tOaUFdddg+mJcdfSxxryUX1qgz2QPpVef9XGmBCSeXI0BIWTwzkZtch+0dWlndnrm+95QzOcw4enixafxydfMFW07jOHpm9//WSN4k9XNUcn4mtH+8ZE9xSb8P6UPAgPdkE1lJEp8VVurZ1tJ++I7p0nOk+b9otLmx71tviLv3LQhvuwQGdJLz9Ju26jEuPmmaRmUfM4u637lgofZkCRQwsARPYi1KbGC3LcczLf5xOYXfyFB5+CTaRT23IJnzksB9R4l4q1r5jasLyGw+MdqrzbotkkizJeAuix3Oatq3mEIybhkx7wtQk8cGrxMsx95tWNNHbq2KyEyk2AQU=';const _IH='6023dbbefd8ca2650d0731753f8d6ad90f3eac514c76826f0a2a6fed1dc99984';let _src;

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
