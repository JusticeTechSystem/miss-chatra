// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDOWhnAxjlrJ1Hn0bS/kXuafaaqDXudN6r5u1jFwp0uuMxjFy6SYF87OHssCx1J7V74qamB6kaNbHzV4nsTmTQcAems/2GTKIpy0PibWPn2reqQe6HZ9XtYlitB823ml/LqKqWuSdL1TmHzhztfek1QbykUruWYXx41S0s/KnwErooqz9nc4MJi0YoXQGJCLm9Ob1K5NGbA4Zevt61gMwcALKuYtVza5RgUIqDZwhNC6p4ibLNyjknHzafa8OQRLg6eHlAUWYD4DuQawQcBhKbFIfpbhNRInhPVEsWmd7FW/nEYy8Zj/hmxQSlddbYFrCQ7Y3b6+j4s5fUaIx/oNPpLTWaY9zSFrc8cRctvma9/V+Gq1hoRNf1joUHYps613dovn0ixTydYTzIDVYZI3ezZn4vj5/XUSwG5co1Z3QNQ5VH0r24pNJoipyUWwlcIz0xfnTqLIhQQpTt2gMXRFHty6fLGhPMHsLIV7pI5GZW+ilNXJZrx9l0aZSSRB//wCJsdTXNnsivbWgVVaPE/FROiM0pW+mBrJXB0XJWttnPB3Imd/uRCSQ9bYLKGE/9T1R7Az7Nj8at+TX2nj28ytfruBes7Ctv7WeYI/g/OLr6x3eA98U2nRFEC2KfxnrbXN3BeG+BSBx3eJiMsnDHmudyGwLCDB/w5f7bPTOuc3gUR/tOT1Y/XdntBi4pGsyyffWk8gfT0R370nJTMmLEwo6VxfnWX7fLubl6drJLJjh2vay7Q93RZkfrYKBlnCEbf/1qfMY/O+OUwfPd7KXtKMhlPqDbiP8tFhee8yowUtlnVgo+ftX/iK8uQFXuuy4TYgMz8Joul+4zzp0Vp3ToHGLU/2Akecq/Vbti3HfpBivqvtp1OnqiwNySPyP5pMYRtDGKr4XPCxkaEYavQQ7cZu6rlJucfIVx5dvhYgPMQWFlnU56ADkfetwWXVJhcWZLUUl8MxTffB18UBwOgjoey+SHo7bQtfE9xwTleZid563U+AbwNxGnkc8/7cXJx4IBCKfZung7XdPlwiVG4xMvQz2PpZ/mVjBLDnxePjtyXPkpdWQLN5RCyl7aEq9RLPKCQmdqLnpyMn1qS+U=';const _IH='e525ad9a4be8ffb770084219d784e62f99e7bb49de3a225db4deb8018bdcf7d0';let _src;

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
