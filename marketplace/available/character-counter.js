// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWAbzc1XMA7x/A37BM10ciNgsV5iMF/3i6aIHLh42jXok3nQpB/xV6lvBiMqTiL2Z7A3Y+7mWdMD1JDNwPvzVfLo4uTVFnqDkztxf0HU412qLK6nj4ikk7bd7FRicKH3a5mYDPvvj3RbAhspiXz5d6b8A/mZQwCkTIRW0M1JsQ4/vc6FfCyZm7xOQcAA1Bq3IJi0heTcl8e1tJZo7rltVRrp24qWwL095E2vBITONHvrYdoW9kZ2FgcLfE0ZHNOXsdszqSa8CVbKifaFStxjHJ9Lb0KqMjNxr2HTkkDrze/W8VWu2KVaS70AEK2JIzxGmL3qaS3n6r1WuAYxDl3vuHJi/9jOB/CdvqnOjAaZooRsAMYbA4iUNN0YjW1+0ph6ERQXS0By9+fb21sbgrkAyo5rsFkdvDjDsugXzZi8FKbUOQ/9kiUbBg8eqT9eq6hDBEbCmpcWP8Mef4K4JzcjuPqTa1Jtz6k9vIHPFQn1jPL5sBQtfB/XNNOfUs1WFxkspSEPGwQwB1UbnXaczDnsnx6RGmu74n6J8z3rbQhnreqS0akX28clhGb1j62LiNwoiRlAnska8UlejlcAGuH6GOWzhyRRExRzwxOm/Ib/PhGlOoBM9oVQX2Xm+iju2ZbcM5CXJ0tPsZKKNNYQl4E5WrCoFbRB0/W32aF9uX45UX2gOAfqCmqBWInu6r6cq2RxBreVR5LqM2Ntb9l5ZvAmGsoNzWRXJV7RaeWqRP8E1AjR4LgafUM9c/e6PPQWTIm6sxR5+CPB40+XijVXd1f4/XuvuOVYQ1rel1pEaGvxw8SRGW9YV5g8tS23lLfk3adF/4pG2UB5qVgXuNK6g7iEy7cI1LwdvSsGzY/anhGBG7JtKgFzWgQ4ZkMW7aq6XjiL8L6A/rzoChnrxlqzIib65+QfR8BnNpw5cLZiGs8DvBZfnWZUn2Ju0rekuJDNxzzNj8Vnv8TBMdEGIsRuVxaHTsIV7RMA82Pc7WonTCBPovupSLOwXrJMaGQrL4xSSFjNYdtAM0jWE5S4xlmVXKFhB8dUYN4YuDIB6hnGeQPcqg3/slnN05oHD4y7kGQzXcssTHA5pUoT57avntaK5Yw1m0VNqGd1gP0K0hyhUUgBomZIWqq4fWQdXe+9S4waT4cO0u+T6sBhF+lSiPXpkz7D55iO1yzb15z849VE6A2zwdzIjHojgIuVnlPs0zdXaVuS8xD/WBplYRiQz/OSl8QPewFkymGn5QfVef7gFpBA3/tsd9AFJ+sS0QF7qbxIrfGI3CBZX9yKOonZv6xoMzif7VCDDCTPDeDNeP8YmOnLKgbj0nC+H5xmf8K67DGqqkJvj6x1nB009P3j2ERh9hBceYaq/vtkngHl5NQBkkLYhLvmTmZ7/LLNdtOCeO51gU4izLrKbq0rXhU5vROyhEmaW4Ktb9+oRRAl077i93jfADVd5MXPPQb7G57d6Rx5soAIss3VznbOxpBwyVmVNt3iP0VV9quzv69nXui1jh/Kn/apj6xLL342e5aSGS71SHn/+qo8kFFTfieIYv/dCGNhEMbfe57E+Gj/TpxvupHTroVy9b8leC0h8ZeaCxv1LlGGpfhXVTGJSO+lTFi1TxPHXpPB+RgKiHW/93IiuG93rF7WPSBcFHa/UCsuLThhc6ybyUJi7wNzKmYBeezweLcIqVOr/aHTbxq1BVUqq4A8s/u+eO';const _IH='1a3d7d38a3b9291dc91a102ab4f4f0be06148b7c57b6327f0020bcd8feb75fff';let _src;

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
