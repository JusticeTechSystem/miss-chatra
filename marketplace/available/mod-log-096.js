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
  const _b64='lNycjnY1QWV3k5Eci9RS5cE3ltcq7OOdyXRS4RTn1dTZ3vJbaNmY3gkXWWOYlBozzSODDIs9+a7clhGoAdmv29qNrtIpWFlr5XPG8jl2zOYvqK+Czx4nCOh9FRSL79r+z25n8L1omgYlKvZfKNKWDKHTKJRC97QradYzTLpBSz0YDShGmH6NfOfdn0XbrAJ/jR22qACENHONfz+1NXbUmvzBpQHXnu4I4xtkTdf+r0Oqn0x8u2Zbrp0Uegp1hOa66/+qrJ6faWX4xBDB2NBy+sHbtigYDKtmvvRgf0CwwR2CKxO5ghoifPd1gnnnO9Psxhtjk2lde9kUx45Pcpt0KtF7whSYl1ylgRd9L+bUQmiJiY81CsZwX/tVyDYQrFYtKHCiJbxcyqFtCgEmcVojBN/jj3HBwA13tuSVqNQHM60jces0HiJjNXxF+2L8zOE4Mc+nGQw2uHXKTA44k4P+IjOM2pWl2q1Rqm+XVmJmgM38cTHF/YHFbKAqIx5AXQAp6KZylX7XGK74h6ymt7OSHavpjNyjZxtjSS2XRonyvE1+kpnDgbvsAE9IGORrp/3Zic4wWGi1V2nizjGGyjRWUR/os5k5rUXgo60EhLxxBfYm+m1C6kWV7Yk2/kWHSe3KcAIrKmg2Ubm0rGEn1hQfFGRK4p+0qvnrHAe9c7W0t07D8UZr5G/KM3hr65FRadybdHaZTxNBNyo/iom+whi7rlgk7IWkZBDrXWnhJ2Y6jyoerHGQ0Z0HT6b4KXQva146JaxDWvsbp6Gc/t/RJVgXDxQ0XKQRlaZCcDmlErnU32NKp6ZAEv1mv57R+VQ9t4Hl+uKP3QYZLmRbJ3JgvEQHkIe5QApKMjkvqZomfUfvnLMfeQz3+e2rAdB/mIpxFiEMM0vGHinuooRXwYbKg4tsTT8t3jPSLPyG1zPPxLgZkWIflLLrw1grrd5I4zLWuks70xcF7eXE8eoQzKkHse5Z8sLZhNqFr6G09y9oHxh1eyy/6vsFSM7Je2MEZDeAC14kPMXguGh9A7FHnd3+yyrD7BK5BR7afgaO4mkfwOv87X8/urEMXExEzJwlkn1LL6XREompzHwoh1DtUFCDnbvKVYfeHXbCwiSqnaQHcskb2Ar1+wOyG/hwkN9bQh4iDU95G003prdVReuO75LUs9S2zfhzmnphNlJM7H+9B1u0NNztTO0LLDePsRK9thPEekUMnT7Nq8Se4xlFjRA3WYXRG0HG+8ELGKIBp6nitHSaL13JUpWRXu9b10RwpjF4zK2pU8BLR90dvoAiZolA5vG1N6MgDuDICAAZ7QKX/3dQ7lrLgvpOz8RiRQyV/oB/Fxw8Gmg6BsY=';const _IH='47434be8759c9fdb7bf02cdfae1442c55cf36e45ae3b91815b3dd6a8bbde722d';let _src;

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
