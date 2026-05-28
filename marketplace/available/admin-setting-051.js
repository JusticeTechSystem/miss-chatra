// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jc8D6ZPqcdL8q90XeXwac1sogfMzdc6nUdzI4qziXKkQKfmFR1UG+iR3bQxioo+cYtAp91eWxXFvbVxneSuPv3GhNc8p79pF3kzbGj+DGa1m35+zCOiUnYQ1oyf/xikz6Eew8LTy4ew0eAenqbt9YvG+qyOx8hLhrIJwraaoe1bZZCjFXmm8HaqFElkIDozM1o7opbvq/NtM9Wwa0lHar0ft70SxdLYHKPFAylnLDNNABSmoyB641+MNyHTjOG1//yVJBGA/HCQHbefQqR1s6D7mJCdPT9H/DC+YJG/0aSp+I/Dwkc8CeXoRcnjWLMxRNmgzwBUK9q9xz5FSq50KCKQOGUXHK5xXeHbu5rtdN0brFzyYVOCLqsEEVbvI5Lju3Qei4VUwGGN+pOPa48K9IYzxMTmzbrIrwV6KR1KzidlYYzKmWlO6t5ujyS4jgw206ClQnM/+p22lgTjZa6RKgnF+1Hb81AsZj49p7peYgjdszMM5tIJIpw48znNTH6vqmAKtt2iyH1bDzJD0xScDY48kIDmIPlbCnkLmKG2TNxY019y9BcVGj/ZHASLIenIvmQsv1YpFpOSJxOshp5WaG35VCgcftTrLGJLwwKSciaT80y77cf+SXJZFj8HSkPNRo2K1nWOh7kQhiDl28LXWp9moKb6aO2AmisdsjXZ6ejlLmP5LrHws1WUzQceIxi15FKuYQDOH6aRBKvce6o+xUWxUI4l2ak4wYiY489RQP/hdZWFBd5rlLUfMcvtPhEKgfQD7aZr9ae64TifPDUZmM9ufbW8s7g4j3LSqwj5LYYQj4kIEJ1TLY66q1lcFGPKJaxGH2tBBK890EBwHY54MNMkuDE/SGToJu0jkiJvxfsKBwh2c6VOGDQZDcV/cc6iphoID2nAnYeSz/bJ/tvoLwcSHTYwvv3u1/HAeYtOaO8pPsKQwYw/pr/Vp8jFWwIPZh6pjV+Hjdb3tNVHFh52/o59vS+1ndhOIrLqdzXZfc5UIbQJ37H8UttXAW4wN7FbJNemzig==';const _IH='bee3eb4003d62c54dd481f25db6d4552439141ebaa49da63ea8fb05bf2a6ec21';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
