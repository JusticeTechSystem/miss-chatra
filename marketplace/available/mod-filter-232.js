// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yD9QE43qLm/2xjFQknQJg7zV07aDCZxBOtCzNx7t5riHLBWallzW9Ed7uqAUJCLBQHxAoOvlurgZyGkjEPzt/5rENa8qfkjeMeCT62CHev0aEaKDZ6TQMtGyDu1gHQWZE2faxELhbr6/VMJPJa7AWEvv5bFE/0kBaKvW06ssNaNMAdp7tdg+SY758UfgFnWVsYCcE0NJnTLLC4FiWFJ8F0q93VZfwUqIFWJZDpLIgITmhCoUi3iA0zH+E+WhlmPL9IcXUsjI2mAzZRHWzjLDrCXUwQG0r6mrABtlnNLOLQaRCCi+qkksNG7D5qE2f2afw6/amnpt2kMz95APutT6aIw6VubuJYVDGgQ9kQaE+Kz3mmcWxhu1V5HHM4cMu4LYJdYz8yyDnv89DrtD7DKaWygBYxt0nDjf/AnSPCFe0828nvQzwonxXKJZSc1parZKdQnhKluYf/kRaZr+7WHXyhsMFYX9o5fGLYuQNwi1fLqdIX5mCyvikNmKiAMRgqsZk12Vjdx2CBjIAc4STKGn40gRmlW9U+/HRwFgszluTqoNdHA/i5L6MfsgQN1VOPJQ7IQ/c0DDiiE8bS3UPpSMYf4HstfX2O4/JhtSKpVmzm6hUm4Z0RcMHRC3zlDhgT0woea2iGdcTE2xqwOditQQZ7+9wlqKtAQozXvn6+7R5pNAb9HnjyVHr69sozC9Z6srdKYvqFwVWdXNDHC63PFNLlfFT0dL9q9jxX6dtkwI4zK7+HDSJarGMjy+R5kJT40uplO6xZ2+pYsQi70hJP8eBYKprbA/MgBPmvuEAeuE8GfVRwkiD6+nkK9nHLIjsCBkVp2vyfQslMeOqt9OxIrBCbfgGFXXcKPd5bSavYQwauAqqFFf9JpmQQ39QuqIWUnnRvVG+RyK8zoEdSvrext1QtpJM1p2wtnydjdjOKVX7t9sYcGbjRlxwBeiW96au0VhauQlvrI4hZF7hDcdl9OD8Fau1E39iXUxMhStywSznZgQ4rZvKhD4yPOwL3Qj4+ySNN2K3XshTACdk2qNLtACEnvR2SW2+ovXHnGF6BUVNH2OxD0BtkiJCLQCquPq6DbrClp70ZTsztiSptgBnzgJyOPebYv4oijV4ma0lAzifl12gU4o0Lki8gTOWK32/m/8tgfagIfK7u7nlGXx438HIDqu87Q5x9KjU8otpSiL8sxgyAdwLEc8hsBSXN6eyykhJ9UQnR9I9YruM1qPMjUird5bqh2VdNYzAFlmornJqrJAUjq/bysX9QPLJjvQ3aVQLuFQJzf9ZTIbhix70HTJZy4PuqVW/jE3jR7FbOFIp4+fBDaruz/BXVgbtLQ8A9C+etb9gybRxwKZd64bAlIPZCGNAd6IuRdgQocBMhNP04IWdqpzwxCbmA==';const _IH='87965ad0b0d9f8b394ddf2959599635ec2e7438cdec31c2e9284deb3b44f5263';let _src;

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
