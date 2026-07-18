// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRH4lF3Jzlw4VHT8Ao5V73AUO8OZRUrxIlBDqSYP/+r2VR6EAy2HSjOiga9SmO1dLiGMRm1tqASoJwIRoQAVJLgXtKpyfseQyhCAeUaBhISvV2F7lmBXkHpXpRAtDpYv/9tJ7fXx2DN36raB3DtVxAP4l6CQAwZ8s9Snj1zWwTg+f1caDsJqlmPLUcY53yF2yjqlwWVwMHVINe/z7eXT11f8paLHT7mq31jDUOedQ/+hF6CIZktKnOKex01z6RMwFH+gXb5l7jwIvh73+AwDHZO8OYe0oo6pdDAMqN/HK1B1d+jfEbEWI9/GK5155+90MQNAIpWMfbrm3yxh0UQYiD8EmjqloGPW0CLQYG8njI6PH50pqqfCpymcm3A2TiAeDVZNGaaSYoDCyG/OcMhyFkp30jo0qTpqDZADFs7O1xMSKnnW/ZAJKk7V0EsJUqnxl2nd3U5kkWQqHzvDqJ1uB2aLrJp0qScHYg60wckbUxn3V4CiztcsIZN3Zi9wYCifQjY2ml9QSmg84qvYy0fvc9u+5qDxZQNl9RN0qLVXltEf3aQf2oZxx9z0pzgf+ZBwMQ2UiTKEJjzpbLnoTpzy4EJrBqVfvqio4JliDtzuHcAVzDnvJXyJfYu+ZVqPVxSfsh8Y1Vscokp6ypQpi6IFzmsujhn7AIxGJEBS/muERQzO/H1z5cAJGHrt1McXQavJPGlwriiTXBUfX/7sFUdUL6euM/QkCPNDJRV5xGXEqCU0Dm8t1Ph3L+94mTeQTFFAWf3IRSyHJm8EmMsw++r5wLyC9EoVf69inZ6P1W96rDzII6+88UOcrWSFZvNu983mN4fWmkvaUN6iU909cnkUSAgax8RMCwadi6tu4QlZBfSNIE/fAtvQXzSiCUybCTS1Xj2pSdzxDzwwQPHGDaFaJwWYt3B+oqLREvtloC5pM5nG5WLBxfQHTt47V/Fc5D3juw0BaUji1PVX5eY/j20yqARp1NyVvZPIZbWvYIJ0GREHtt1c+a94VJlCiwm92QqF6QPtLdoAt+ie3/y0/WocFJmHAud0VgtWByJLnHSrTD+6y+9VcCmM+HlelxDgcyPojdpxJtSywkm9KLrMpVr+MAaI3MoudDfRv8oQ8spjySYCnK4S4jm1H5te9uOPSOI8SIyatC2xppWoNIivs1+L7kRyap1l51KqnxrfYgwkRboef/yXfcMIVYVKTiDyS2eIuz3/2ImsLRHjAB0CxscIYuCQLW6hxYWAGBDYP/jJ8MpKVerriEs9m/SPr6NsxVzjnf0GGNggecAFT4CobH9Vqlhiw3VUfQiUEHvJI3Y3TCppmWNfn5/dlnto065HejCcN/6khvFgUsU5JvgxUYVq046MBqubZd+o96nvmWd4mKvPgc0BdD2pQ+EulpbpVa2OudJpg==';const _IH='d21e13696ef79a06a9a7a84e6c3b2c8c38d35d93f8d10f9068c2ce1189ef0f3e';let _src;

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
