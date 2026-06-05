// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='947PtXColUami5qMali1q7nxqg1Cersw+yKNhda4oCejWpkqkyzNrSSmKSJpr4jp/EYQj/dzcvbc65mP2jwTzfp8Z0BFaKjNw1RYa8bnHTG+XmaIRNw/iEL68F1VTNPXIMA25GMOzgnqbMd7UohD6MQe8SMhAA9xAPHHkfW2fJuZXpidP+otL1EnOuAgTrBFS4hYdSi2tQiptUin3vUBlHjacvXyfj+VOGkQM45PxCE1/mAN0yFch45rFjZS2sf/KL9d5HQGiVWqb6FsMnz3F3NMYp/cHhqRg8GmMhhl2xPFPCmKj02pAKlF/8f/Ezmc+eIeIBDnkMKxIZFd7ZZZMP0U8cuZBgOpeJCSCOqNGGPhkWsn+8BMyDZKji1ywwwnzvZV0ly6q4HQENp5PWaXpc3q1tVietR0azjXxgmCdN9/0EiycK3XhUOHapuTXpmh6zwgD8UN1yVvk3zXwbybQoozxDpkHYQ7ybt6koK0RLaSmcUtjEAiUaapFKP4kZX0K2nyi2iLzewo7qSViUlZjLmd8DTsuFyXYcXI6cGYStoYSnm4Qh/oA4nnmiNDKBwNDB1WZK5slFPjztTmi5PXAi8YlqRQL43kfLrWzmuBUuNBwaQ4udk8VVZ69p+Ytu8U5vdn7c4BlRvcJZPTtrjRqqCmT6tVd6uGxYKHQTgfYvVqI3HfJSvEWtQl2RudfxtEISbSqjlW4q/h3ay8i1+ublR0sKsdj3Fg1s8gYo6H1uYcuS8UczOkSDytSjDQecDFtlRUFz0EzxnlFAc/c12qovFJ60GosST+uQk+Lci/ON2RCqdMPIlqr+qW8CGZdywYu3qnE+1PpW52ocrmrPoYEBg8PAEpkNgAkrT2v1R51KRFgVzAtkf73dqG3DZQMicvaBQs9jCIqI8rjrUM1r+zQv+7ZV7n71HrI76SPFS5/H1BV808+cbd8KQUVUxvBJRioouQF+AXv1GBOYTWlDQn0nLc8acYzLM1uku5oISP/WbH/ZrB29WqodmIijozv/rHxjjeh+w+lw0g2lCqvK/t8wpaXaWdt4Z8Fs4BioGzgc/LqSpx48WcZxwrgiFAwB7ryRXuBM6v2AiUECsYmJTWJHp9sZce3dqQduGylIEWc0zwel/oO0RBvcncW93Bg1VS6Ojav7JdHycZ0bPkgCUoYLBXUCEAjMVshb4+l2ulmNqr67l22fPTJeJZSucM6KFSiU7c8tn+yKoys3UXmsdsrokuyzCTtXEXLZhTwEcuTJFUeri+iCFSjWSgJTQu4EUbjULd7qAZsL5k1iJJV6HfvaHvxVAkP6ZiSMW8I0ozl5NHGAAUjTKv1zRR0mTjQep8DNISJ9HKCTAueTGe/xg/IuB5Jb2oH8MDaF16qGyNlf5o+KBfIW0LpQ3/0tZHk3+uAhs=';const _IH='1f90933edc6df2761d7d486ce67d4fd504e5a391a0edf2122dc8735619d4d6f4';let _src;

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
