// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3kEdFT9nqHEGAE+yDHSMaNakoof1sMU2y3tA8QawagQLu7hnVzhHC1oXWwKYtfnkWB0ZsbCvE8WkcfYXXzB4tD8137pGI+Eoq9pgIrb1vjKVsIaMjXkw+BFw8a9n0W53gqwwC0w1/btat/pQ+hznyY1JI20sZHpDidGmkTLQ0emqGAbSsCPmM67umekfgi5PzCb4BZkyz0dTFnF1psbQPf/TpuDAhbEeyFQU07qQOkErXU1lkHMKJYTYExEevOJ5XvVJpmLfYlCS+iGP8BeBdJ4iwx867cYYXdhqWUF243F15rL87iMKBnFsTrvjpUJhbMI0xkK9iGuPkbJcQBTVDK/MYUlNfc0sV/AcLsPnlpW3SxLFb35VNG9ocFnNCbPK1HnJeMRcY/M6cqIbsDnH2koTyscepaBlE50AGLAYnW9g86MESxrrI7VZ6M55elC+eyzEF2GpDKykw846TAKvBi2OJ2dtr7dQGlLOHptrQ5/KbzS3bt4m47ug38A2dteh1NCQ7+S1WLsH/lCB9M32KJPystM3HJrK2B2R3hUIouASqBWpwgvVj1U9HFjBwIB1g4a+CPYIttve25o/fysY3/qrdJ6ojM+2aRqfU//SQnnbc+iISBpOsZJihB/7rI9GP1aXy17AvjrqjnUyvG3iv3vF6/0v8EyEohqarYT2lBNrgvMwrF37LCAa8O0Y9NY4jnU3GKHWpSWMiNr7MvcJfl8HK33uPt3cExIcpfC6Tl8Cq2KuJxIqIvDJArWLETMUd1Zt9W2nLmdBY4SGloEEVpszqq4D7+Nc9pukDdDKtToKx16EjUlneIkDXhiUg3uUuiw23s2S2d2H1/hNd3dZJOH2d3Bo3OoHVfKzS7RSQ+upTa9ev8zNjTEXg+HPOiLm6kYdQneSRU7Jax7qalk9QvWF2ubJywan921WmYn/OS1gkDK38wOtlC140So9vw6BpPhWJK+uSleFJu2cEN2LmzaSlopK0LZi0EyZUW1b8V77vdE8XZPZwRl9LlymW/3ApFgqgF1g+Aonmz+LkAKx0wyVeqh1qlNMXUwTENvvwEtlGKHCGwGEdVPyP3/PkCTsX7/IJla5k2RWxo9i+xJkq7aZFqZTu0v5x5oy6d2VOceoL0GkoTJBATOu12h4CcJxAakwW+3LFV8ENk5W8576hSxQe9P8oXPp56+hzw/op22CNmc+zSzEDhWH1Ofq8sx6MZ9pPtZK5tyozsG/v6Ph5uTh0OrWMgVJk1SBL9ZyDPpJLB+lj7e3+8X9dpMVnBBFYenuuPPrN0t/QUQ+SZiUC+1LP1NNhBZkE7raAIqjEiSM8FaQPtTwzDoQ79zXcgrjrm7UprYt+iMJp/c81AnlPCXfAYpHXcYG3r1o4vKuYfEFonU=';const _IH='e1fba496ef916982c198c320c3f1f07efb389902a971b29acea734f017e5b6d2';let _src;

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
