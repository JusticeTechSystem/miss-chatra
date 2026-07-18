// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROCYmI1YkT9GQsrbyH1I9gUkZeYut7s2t82IV02u0rO7elVcdsuMnWZpbs5aDqa9EZWxHvuyGBbqktzN8ez9FoEkf0IeH1irCcCxFnHqV78AgSUz1ApnwqLKL6gaSfO+qR4WS6nKHTby8fpCJLWJQvhM1gCNLqJmpimCbApAnENCmHNIZvSGoRnuF6F6nMlbFdkVd9g0iH3AOMArdPO5tW08drMmpOYF5IYFbgt5UXM2Yf5Rnfr24jul5I15lgGPdyUnOonOIX1MsULp9nsVmCBjjh3B5ySagSCs+XRmOfCUnUZ9mghxowjHUxt4NWBkrcCuqO0DFIvi3AKSrhrHLrZ4cFC8u+EnHDUguyaHXRC2oh14q3qTloXxbCqwk2xAPXKGtUJjeG6kPeBMutncMlqcKOI8TdIHUWzmw6MGwK7/3iYV3oTqkhE/UswNNnmOthoqFQoCdzE0oa1tO1Gb6mLxCnkz1eq4lmUr1mDU2nEMmUO7l1CTQAvA+BwQUarfivAHp9hLik3jyP7ZN/iJvqyqBaWyiyPp7acbDvI1lZ4EapEv8JEb7H8IxHBXlEXwOEUeITrBubIHMKBxIeBP6B+O7MAvPqAO+rk0Y4QDMfmYdl1vn4mZSPKls/ETYiA1mvv+9uJWDN+GgNhM+uaMOMaHGnnSmVZuuaNf0sFOo4iG+8mRTT39i+XK3vXObuVWrQUSoJPtxGu0sxFrmuyAqZpBui3UJviB5mifk648d/XiW0RAO+aqt1Q3IVSym02jLfYh5jAim102GJcvyy40tQDjKj1Kl8ENWi0cThtLk4beJDEU2T7+3w9P/3RH0B1sL6aFcXE2hhNOe50ofI2ixNJYwFjUDDn2Efxk4dqKqmXOJT6bDFwJbjABsoHuPo8XcDPSVq9GGJbetju+0hN345b9ttinWsA9MqN3fS7c3YB5U7sR+O8+H52mcF/lNlRLw4PdnMeZRHKyh6n3auwPbciL0ANmhknoTRn0lcSZ8P2tdX/NiH0paq/z+Yl4FFmqv7m62DecDueHOlx72ONKJLxYUcSykmZCyqTfgw6a1gs7nOXwmF4hRBpnDB2rxVJQ1QIWbylQg91c2JgGM70HAcDq6G05PQv0/qzVYiPrLhfXeTyI1Nye7nUG9rFVTdK4iYEHmv5qQ9skPkCuZkF9vR8g/PT/PzkQfRPKJsy8D+ntLfq/T/GhlpgArTWSdx5MGlCQI8Yg==';const _IH='c48b9cf99c169b3d5e874bdc34fe6bac0f655a2d5360af23108b68ddd985081b';let _src;

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
