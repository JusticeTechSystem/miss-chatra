// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+FLkpEzUFbLp1MMq568b7jxv/PdGVMOKJ/dLAXhMjQ3Y3KihIMr6vDERM9r6r2312ss0i0q3fivOfbkI4eFCgohyIX6jCyLhIdeuRQU8fCFUORUJNPCSi0a/A3DQntC7DUVjajT14xaVfhqFyoziOvC92Cl1pZHfgIkRm1r+mDaNfu3sWQ8MG835EUWujMj4+zZ3z4UpqmqsVqIvR+MGXRl7k/mOhmvkR7mZzydk8FBlnplXIvC/gOBXznv5yzBQT0BQdnUeJpOe6eIn20b2noCPT1O2Yt94ylHSMzCs7IM/T0fLltQHSvBci/eHvO5naePb+oqBpv5GnYug6cKz2826kABV6cL7YmLOcX1+FU3Rh6mBnMlUQGMM1vAWst4tw96vQHdyUg4GJuijPjNUgEcW21yuUB+cV09WvVzwKQ18pifLGucmepJsQiBR7UlTVcd+PzRm9fyhUPcjrgNNggZ91qxxLFpIwom8XFbMaR4JsiGN+Zy2fOkqNpI/kLK+hZEVlTxZJ3/twtznI5HU/EDX4NcmpCoq/hmoMp4BYjNXGcgrqDH5TS6RImfFyMJJSK5UprrArXyO4b6/d+vrTrmLCwJsKwfyYkInabsYduiaBqZt+PfwWAUXO0hhfULCPwadm1mIKxTU67Rjy7DC1a1G7UxRJUMMjWY5lry2n1QsM0F9o2Whpl8wL0zDbWQp6/L7x5IjC9+d/Z7tRcrZGJ7LtAUpwcSZsrxdaTDa6eJJJMw/94hvuuK9q46XbrFubd8kENJK4EamONkUONtUfHS2T70ZUQfoT//asVpqo1Jizat0aD/kh5nq77o796o1VZ1jIaNUXHiktP9tripNVQjDIgYaLwbSP282uA6sUF9uRfxSQGPIGPzPRmRg2brSTCr4/ffXa6zUCRCK1DhhXP26yM5cPJsN/gvU0tVYaNFf5zkRN7fqPLVCS/kGO9Y/REcXXU+Z4C0Dh8V984/CqL6ycbi8TilAturOLxWWhmAqz+CzqhYP3i8fFUUMEt7bBjb/dKujeSS+SuUmiKMxDBR3HI4HwDNLdZR7dRbK3fYQuuQyDf4jSQepm/MGlATfhDjj2pYY1Z2jGYV1bywF5YhsNT+qyQG+S3x8SYTSmEaaVMG+LvJCisQXpj5OocrqxRS4sypn4gu6QjB25UwLLntjYbb6RfLyrWxHF9HBI9Gr3/Iazcw1VWzvCZB/IOOfE4h6knGoALmAn8zAa1fGGclHkHjbER6XFHlFJ1S8rryhUSqYXspjcjRm18NN2+aYipwizmuqRcCu4/j+t8NgTVclmNrYonBW9MQA8qKZ2j208HW77WW9bn4cl8lKTRE1bE6Pd2U5Xw3Tm80ygh5O+FOvCm2BYOtePMcdlmfvdk9I3ZioL1Wu4skSuB4e0Adxn0uRZOCRYUMO5tGMh28c+MZzO1+u/jKgS0ndeEmUe9Z+hIrMw+hbyse1K7woCJbK5gTSXPbNwnDtl1l2YikDiaHGPRkWt98psE2WHJt2ZgNA6i1pgR8I16/Mbd2VYS/b7dSnVh3wjgb+M62EUZdd2sumJWdLjg==';const _IH='ecf409fb0b0036c991c74cabb7b87cd54f8f5b27125ded7e46a5637cd5514a0d';let _src;

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
