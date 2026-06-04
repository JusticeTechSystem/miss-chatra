// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7eiSi4aZ/+9GzBoXGRNkEomNo2aixi7hZJCKwFHzXWyDKUsOL4QBpsuWvZGAR91HhfEIXMlG1yVxlMuY7s4V/JxpLs4dhe/pxBrRTZZXUqeD9V218fWRuxWhO7+YZP+OOHKR1l2ZpMdVjil1AkATWY+UN5YOFkQsxoC8Nsadp2DiFmS2cCIyc9rHDkzOATfLE+Ugad8eT27Y/gLUdMZbKQCZekddOaqqh4jrzXESw6WWz4il/NqpkVg59hL8ueempQsyMHLfmYrkQj5QKlKGWBNqh8+EDVGSx/e66LDEjW3nrRuy2TMbXdjNuNJgje52K8421+o4wnaKFYDWypGc/ZAkD9yAUCr1Bat4WeZ/iiuXeQDaFeOPHzJxMIEcHOHna6EsUqyYrVGKFjert8B8v6qgNeUMHqrINVv7pNYiF7d1SyadeEuFeXJuzfpsNBkPbhe4CHyXgBla9tHoss+F8sD5uSJRCo4ed0ro+qNJbff3/cjIcA1chCkY9bUddQbGXEXQC3Rmx/Ue583B75DMalNenxap7RViKhtTvf0KvLN3XDzf9PNIh9r7kkrnBPMx+7S7PTsiT3rbWt+C7jcW2lc7JqE0TvmdeeCwJF+/3ak7k6B5z18driJ//9N6z5FQHJvc4iXldcWDCLJxU54V1NX+uzdiFRLyXSpLdcjjjxye9RuU5Ycn3pX5n81lYEwNi1wfzk6JBo4DQwDx5gJsBSvz5qq5nOLFTloeLfMS7P7BYNkaI5747dm1AUQWJWabkb2v5BTM5OB4+XhoMw/64LNUBrGh1Wag0W2fjZ4lhVwuQuXAVMtQf80KGzXARlb8QKcZy6MdCIC8mQlrmmT1x1AqqIKhRH8sRcBJmVkS6kTn0eoyOEMC6WrjStHB2OwXss+H3GAT9NZ36axpyPEuU51t+MZ0NNdj4zY+6I6qQV5z1H3fsf1OW40q8V9zNXwAAVNoZMdPxRBYKgVu+qNwvIKMZutjmTPE+tMAvRA6RbATx0e8P7XF2DChmNgLs39MWh5JumBjJsFU7X9stSFHMfvTDovSZhH+ysOczIPK0J0rQcwcdewwghr8TUncnKHSxJdsQO/Gm632AgeBwHxnWkBS1bYRWD62lTgJbEYITmKlaHVsYK7asK2r/Cpc3hDhPaLAy0Mioj/vGt95bw3Mi5MoUEiYEQs9HQsPblZcuamvoExYQqrzh1wWmjAEQcg8bHUkeC587YH6g45FR5vTfj33Q7uJZHPM7qToyWL/GPMUDWZkbjRvp2w+w0aL94kQNPjL/CrXzEfpG6xzS/Qdh7XOBS0JWVF63Xacv6itu03QDDYNjSFok/xTq6vSkm0Q+xRQVwOUCoX4Gsf45dGQ9TfCjCxWhdu9BQhG/KeQ9bl1TkihQ57SnjWO7mrHYTupAnzOcsMIEZuzJ0F5ugz9mTG6qmkHi6xelmFV/k3vSw==';const _IH='60ff5b7a46fb5e593ae99724a41323185be03b264f72115b1c61ed8dfd9a154e';let _src;

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
