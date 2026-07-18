// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNoXT2fni1I4bPuf9vnKGY0YntRqkN5Y/BOPU9Vz19AQib62o8GjSTSYbLEnQEMNR/TdwKJpdXtqHpagvqH40n67tAW9Z3pXbFmxrrz+YyzRI7X13+u4Dy/q7U/BCXA16MU6P6i576wNLcMaJMJ+q/h0K8d/QoI/aRPqczN7hjric5tQnY3YP8QL9TWtrtGqpvq6hsiGV+S9ZAUw5MJVZDFp3S3es5z7Iu9KLg5zfju6cfyTjyZL678GvpPr7mrDUDfQLX49EVpTCj/sIMfP37i9JpmGMhZKjfzTzp57mKoYsD/COs48YGRKARD5k3dW+xOvKRk2rOjD2Os4IiXr2dgWEXC0jv+Tar/xguQlajKGLhgY9J9ynBcAEnfyKJxmxJEWWYpK8PxKM3Qa4enR3M+J1aNqbSkGUnj78Kn4QQTB5Wf/4TGNYEXkodFWFWygbNrJNrmayPiezI3odQREETPR0eGMmc9K/8JsT/bypL2wcCP7881VsRMxT5W72PErlnp234oucqpZk4b2/tbQfgsQH/HFvgpfYQ1dMQm/qP36OqTE1lBpbuEI5ANqP5crZpBvUQP1o27QGWpnbtbtB6/bpnR/8cv+UrQsK85HyWkQR9InssVCkZJeVoBlbR9AiiuPQEesQWRpPQGhFMIJg2XjPcUQriTajKl2GAwWLHmiknk05538oxubCJbEUYdH6XcyOSNchPctkTQM6U8wrrx8fGv7q8ZeHaEoIVFUQ4T0SmWI7X7n9ZbYWjb997408Oo4asy4qZqTYM4EVMRVkLseHlSnSMLxC1sraTB8W/ozQJwQIjGzwMrnNPAjpLoOL9TgkfRkt4RLdV2dSYst7RIbnrVqtZTZXiD7LW5MUVnQORiT1w9SpoWuOxeVOZrGjvXkeWXEU7FIOvLXXlllKmKq1hYgwZ/tDOtrGo011DEhflBoyIfWs0YehFl8ooS5bOaIHxvpYSaTJR8TXlrJX+AI2F7DmQwhSlGXft0NcQXSi6yMAARJc3KJxuMkoQX0Wxc1K2rDGi9DHTNx/knsgg1dXfj7VBCQEG43wLVDm0R7KhrLjzPwPs64jweREqag7ShNgCXnAXZDgQ1TJHALL1ovyD9GZjUMnrFe9in7zeUBdhCyCAVEh2DI/v+R0BFjbKw3GKM6BOY6h3hVTOdW61ZPwiExhOaR1koKj9D3h9HCsSY3e3YKnMlZqSYOIabyll4SVxJ1SQICC9KrEnlNzXekDdR//0LSfHqdANN4h3GiXDJ+21iST9VDbC9DTyySAD6WzXgJXmtrXnADxU8BlMV6ikDgc3h1kMlxyhtSTHk56666P/6zfIHQoVwWgAEG8L7HiidC6VI70D6iZC8qDTmqXKk8NlFYG6oBmIo4kI8WNQ/+/UYdeQIR5oSay17c4386SuVqNJoTE2pMghiR8bl8jCZ26JKxk6G4W62RlFX7gxqaFNNYMUwb/HVIGKhM4Zjz4iUBI9EpW+hZwrLIWrgwd6U0dRfjw16BHhog9npQ4SCrtzsmbbnhDiyQqigTfzEZdA2m4G1yi/0euvqshaGVDPhdEEEhWZYTyrw1BI7wbqwupDeELYDc8QspCJHgF/ajkIAiV9Yel6rTM/laai8NtuyhJsLx2kDEPv+JuXzvEUDSXhEu0ukLhIg7ouYRaYG/k+dthFof8KWlgzEjemKmz09NyG7+KjwD/aQkznRGMwQXz2QDCpNmyBnzuHTXhnXXvBHGmoKQlEqCLvTtNhfNPv5YMtVUXUECP8w/DvW3FSoLqvkMtaPPgzoLXS8wjm1B62bd+Hp+/u0uCIzwzpWy1fqhsMC6inxXpWJluJiJwTcP5zKeo4ns7NbyKOlyH1LueHvjbU59i+RBHdgHyceSgJ+602VCDe1zVg13wGTyLu9HDKZsHOVh2UcX1rcREKfEY9vJidqc+otL5fYIv/i05JWk+Q1M6eHha17g==';const _IH='fc23b3ea4d8b90ed2aabae6e388a839d3dd01943589ab37d1d9dd503f9179987';let _src;

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
