// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5walCWH8QEyw50o2/F06YBf9yuoFdgzUBOGRPYa3hGT++/6zDr/hnYFCU6SFi5CXNqr2t/jmQcX+qbuJPUcuIv2mi0QsmpzJOW0/VLipowm1ZvXvavWJt5VPHtif/1svsyf9iSGhjKylY8UCu4ZSj0t+ng0ymdKi8z8oZ1iu9EBJZYdzMVo9pNOjaXxgskpl3U4c074faaviQd5UEtjeqZm6omF0M+UL7RUxoOwJEjfCKVhNcInQD1td/KYtJHdh0HZSLKWZG1SaOYG8W8IsMGEc40s7qTX2PBf1Jl4WlB1rCZ4cjp3YHAvwM5mOvNFfQRq5WCrq9jORxDq84d3+mDDN9pO4WtNG9fNOazMAVPD+c+Dw3ucA2ouu/hpJqHex2pws/fpUuKJGwY1ah8m35V7EHtLmmCWPXPC/b5QCdNdwl3rxfCQEB7Bm6cC+8Nbs/O3J4EkShMfF+83pTj8w8jvW4i1txh3G8MCho9rSLY1SyZ+juXKZhwWyouqMPXlF2pcxabWgzDBL71mfzQdrzKZ+ahL7UvSyh2W3SfJMOT6bFbRBpG0fbcAT4HJsAroLWWkHRspsFeLRBNPKmmoKvMoqBXNMzCcgE75dg0elSHb7FhcqADNY7mAldFjmDFJG92fb2UKpwoIOYeF662VVhsyClOm1uWnl0BD0aRr5JMoWCe1Lc5iSm/lYaLIGUzTEmvg5q1FEBa1nevsiXei5gQwVUBpqHg50Q/dwrN68oQh2zh2iZiM=';const _IH='93c4a18b3d9ff98a13ea0a468542278a342126fb59d3585c94820595845b8238';let _src;

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
