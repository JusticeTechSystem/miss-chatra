// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wyejSZJzjfWjkaFa5XJqEg5vYqDQDoji+0u1L6RRy9Lw6KDLJVQv4z/2qXqo5eEV1GxapavgoiyAVQS4s0l8Nxd9v5q5yZFDs81ivzRH1MqB96PFrZE17jx9KR1h/QVlcW0HuuHa/FDiA2AC4RopFcnPQ3hgYfci1ra+5wQPf0ieniwFK/WO9LN5naXRAWKEdtlhgb/URQ/oJ21ddjEBFnmRCo5XcVUkcLzgy5vrAnJtcpxpwBqo80vEb+Zy8k4fYs+3ccZUUGcka5q+C5KxaAooIvlngi2k+fbDyIdyVCb+8JJbn2E7DdUgd0q1ZQoJQoFV4JpKGyz+/eIAtFfua1+oCS6fG5oqMQvvQJA6lRSWV7gdVzB5snc3aQtYFJZeBNLd8WYw62bek0mfi5YLNU4d7QkTmm4QnwfFKE3ExNgs+7JyOyuM8s23Ag7vYx30k7Z2JwVCo8qg9s20Tc+TF2IRWRlEW+2qFcOC7R2FDBVpqxtaYx003hApmzsGX1gr36qHdACqtKUtcLCaY9b69JdGT8I+i/QwaDq9pHgk6/CLN36G/+yqlEw2JdovOv6T/zRFhvBImC8sMAHih72MfJ0EIw/IP5hgHA7uoxTn9DHfSKXVWua1lt3osyBNoPU1prublW11r1VvZUAe9RGjxxhIrqkmiyzTyDS1OTqMxnGe8RrXRVNFbmJ7Aen39zqR0sAmXXV6h+OUbO1GCVoc92EeT52M9USbJJG6uGxh8sXR7NEfMRc38mCYM/2SfFPaqpsL8fCBhZdTlRu9gr2kogZ/w0KiP/kIFYX8qPPQ828g8K0MuqUmSLyFxfwVmubM21Pedi9ygDVG6ONgrHk07tbRZAjIc9rmamjwZrMJO6YFjtPbsHuQa3L27AEjitgCGoW6kUa6z0oWJr4POaEuQMjMbW4AMzNR3U3KMkGO3TGuEF03UzxXumk3lwVuLIYMxbczQt6qs64XoHo0dY4cGkYIbTcAd7cauPOqYhB58J8RLVv+4Bg70tHJn3dQ11faXhM15lc2lIvkY/wEBKhK6w933qs7lx0UHIZTeXb6nQUanW21jCb+jziCg95ZM/YZwSrH44L0JPYTBDk=';const _IH='c5bb551a08bb52b577bd6e8ed6374d77d32ecd15bd23b81735efa206c51e181d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
