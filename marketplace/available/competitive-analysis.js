// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWPz83j/12YrD7dITJM7QNI6l39KD4j/AHMye7C2sZZZdRgiEYLXxPqacfO+9E6sfXK2bjD3CxaYM6OW7G63+QndRj4WmlXw4RE/Q+IHUtuqfVzCh17ySyo5j0Kb6Gft3dIyWaKmrnZa4nJCfLQJKfWnoz7qzppGsaRVLK/urJ4M6yxIm5lNY4fQZSLqApSDnOUbqV9c5NeKfXnKz7+BFP+ly85AaVg41U3U0hW9ISIFYe47P6PGsBwIGNiMoWJSgNqmj0SYfbxIePv13fUDLLz8YpHYcW3Gusmc1XTHS6TTbMWzlDqa2oXDn6vs7PF6whBSCC/tCbtes3JOQR/yQi00rglp2Fo8Aoprer1LMn2dUCuD77NC1ok7x8erURihiStqm/PQmNjAgyLXvymLkDar1w2zyjX9ppDgaO42rc9vQeCwQjZjlAG6DI6ydpFncq1zlY9Xdly8fZrfXjiv+bwTrSJkPHLz9l5ICmNEICOPRkyl1D6cl5Ou2EP0fjkVA16p0CRLPiLyOEkitlaLls/dZsfU+nJB5Orgy7vqlGC66OIPjnmTSGKPhzogmQ/mF0CuamKP93LKa26EvkBE4iPH3O6YoTx5Bkjx9d5O/buxk7J73SLFNEYfr6aE0Mh3ohH/8TgH1CVTxNm6rT9DCb6Do0fBEvsXTRbr/LEBNWcqS3haiHx/UEWfUd6ykFR1rAdmZZVaQSOOHB+OpOZI2OZU4+wjJBlZlvF+NkSLY953dLk17Q0sb4Z8hLk1f3cqoZdsShB99vZZkeuqTLhB4KNnCxcDVQSEr0dzHP/q7JLjHNiSW22aOO6l0S7xMdRRb61yTdqUOhE472yffBIXuv63SbGoGf/DAeOvgTMIJRdj5yN4KseSOC6jpEW/5UYw1j+irw3R0tI7fZJPasKJG0WJwrCXc1p1HAUiFVIzmzanvj8koScp70DddVY/jw6eqWXn85qWYKE2jPpkTP7YzU6MaoYlrxgfNqSL+5kQ8cVofWgXjBjJ2e0Z5dOnzY4xtn3Vds1TqsFYVWMG7n7pgJqb3ks5bLaGz01JTuC/arSy6Woe1eeSPqBjTLiO61E5HSGzcsv5o8IkIq/mpp/tBvY72ohwf3Iz95yuV0zZB+//+5TrmB0x/PA1lsl2wOF4Oh8aaVL2F2e3383K4f28IbEa4SfMUrYT1aVwtthX0Bw4oLpFg7FKDgPJPTUKeqZ+7+6SzwyVOL+2ftJt07GI1SzSrlsx7gryhArw/DTc8aldWS9K0vlcUjgVBE/cyhgIyf9WO7W3Lqnlvs3Y+wNbB17mu0TWBJq/AELPoPvBudFNLzw2o436z/ho6jSIykdWsgTo5Tz6tHQB/3J+blQm4VmMn3PcPSaqP+TXP6qxsJyRYx/ajns6YRVzLm3hUw9DZdYDDyipDMPNrHyVNOgyJl/l1wZMbZPlcYpgVh3Ysdly+l9ZnLqANxDzC2WXsMkIO9G9LUn6YJTgRgGw8yXB3b3IeaDu/siVlwTobLVuAmBeRHryg/iETZrFzrbtHS+8UBN/waKRoMYkeRRB1z47AFs0Tb/ccsVuvbnE0LDvG1wWrmmS/1T+WDttW9OiWy2XrEMSs12/j84FL1/L57Dk+9RpNCzn/aErg7imOeZAvyk3fE9VQYxg1L73uw2iKZO9FrEtxq511GCfQwZ7OgRgoZX2sxQSsrS3JyFgvqNw0appspb6QfcEUfB4zE1kMHa9EbYH12n0gsdk1nWjIawzKpOXnRpf9Qsr0AxPlARqUSTCnZTnxAJDBE';const _IH='ded407676aaedd67f683bec063fefa2a1b3953dbc2a2473a649c9e0b081dd13b';let _src;

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
