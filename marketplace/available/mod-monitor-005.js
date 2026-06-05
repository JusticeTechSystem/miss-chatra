// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vxGsA8IxQXzNpl2Yj3QB+UOw0c+ot5i6qbe7Z+xE80xt6ZDNQtbBm6udOBpO80UZUVOEiezabIoFXuwPk9pXL+vhAzCmdqV8qni+OiPWA5m+q2Iqe7Xp7wbyWRzs3qieKgmFrmG8rVh7pFd+YUaxtz5FW5IWpwEetMdSZt8isacDSEZ6jTZTm2Vix2/ePCC+s6vbf7VDsZIGKNzgNEmpGiHUOCqHY4EWag/TieGgryDwZzKde+RwkXndR37XRAcPxoKsIXOakQjmCISiTPjI1SBCyLtHoZy1WHu6KJIyMEfZqhOOT/CPaAkX0D9oRw7TB/Ta9gWSuJSVlMXJG75+NapXsUr+VVfS1NFEwtKYlUlILiXgRulVurdcNBwp31e48LmHcGho4wtY/JFNE5rtLLApkBYB0sO5XY0pABOygD7M+cYv9G2eyLmuVc5UhMs/ebdzRTJkH52b2fAcUebBmF5WnxFQ93gMvmFvR39GxQNgPkiZ+mtA3dcg+DdpI4TE43aRt73AIah0Jsnv5d4zdYpkDogb7LrtBsI8TaNlrxBscvxR+CJo8FVkRQXfcFvv9zAWkaveljZXIwOJ+CuZXncLZn/Um8SGdYn3NKtE/+bndCn43khO197Q4rgIYzqBapLX74mA6/KdNcgdqYmCCI3SkfRqtCu0uv0RBkr3hAJ3kmwEi/rEINf0NLeHTymNMbx5S2nrYTZ75u6KKjdLmsNBh4bV6ildR4iQ6CStptocou8Tb0DMOl3q6zV42c53CAKCPq+u4NADijeyv0SX6nNcdRxFXVPnhx7eZf6hH2Px//g8sK1x1tD29N6C0xVK2HR5eMQlydH6p8jkv2mWtBEOIMHjzzNDRDd8+Y4jQwtSVKMm6xlLUByFwb9RLe6rRbfU8gS7J40U9pqvmwYmcv/hSzOVsskOfceACg/PfGtRC42lhaHte06aspWTEzSo+DdfVq8nuYmNCJfZL9xbN6s9tdg35tIVLwVeHqAO6j0OWj7rp1Ox4Eg4LKlOLiUmLFhhl6NbjE9al1ltWsFCZzU2LpQg7iZLGxHnaa0rGP69CSLowKTc4a6DOakxF9JBGXM2LY9MK9h+m6wjdUJp6a+OJN/0CaLgFPHq2RmEX5tKkeI2SVbgIza8E8xqQbDpcR2P3SO1t1CnmhxQ8fWJgNej0iu5/hfPoBislTljLtju86vYLfMDPUEq7nsZFUZKTdphMlTwS3/dt6Ci3rGD2D8cAZSp8vaKCrmgf2gOQyuRXBe9RmoDSZGpQjsZE4BUbB1EPLc7hBwHyENCgJpDEHieZ7MYgue/hLyOgerQzx9jiw2B+HIll1+xJ8ZBewraDxsEmLXuZ3LvL6zBQ1I5YxLvUf7hwp05uvzDs3qsAncKqs+PsQv4xQ==';const _IH='da3a63172daaa636217c7b6a02240210bf1ac739fc9bfa2583fa054dc01a2815';let _src;

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
