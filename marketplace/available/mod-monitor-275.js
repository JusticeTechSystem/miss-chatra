// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQY83shBJTyUbi98Q3yF76cHjgNBtapFy0a1zEVgHRBQWi+XWg+p5o162wqueV8yKZ2rYLKYIUwXPB9NJ+oDybwqOCP39AFdNoOaDqb/c+vLkb3X6wLATrGL//oIk5FJk5F6LZQ6I0em/WGVqIBo//IqTcnCVQxRAfYj01l2JgwlkYjyva6+EWlr/78V7cj/ootr0EPYf9i2bjACY+VSyHyZTigzWFuE8mbvEYCeCM2PIJOT4NAIO7X7688Z/P9wgd4XxRi4f0wG9IEfC7otjP2qPJtLxVWEOjD1F90IMM6OMXl4DAXSyqKzWLk3lh0tYqPIpP9k6NsV7gObI/xK+pyrR3hR/ApavMQisIw/a6xKhGaIE+FPj5XlCyf0leg2cd1sryZ2r93PkTSjTpFxTgjA7TkyDoYxPhSINFTPGo9iz+CIv+BgNKk4JM0qEipXojueAtjq5U+eMDWQEuvbHI/qG2pnBkQTWpkoG+M7roRLskG7oSRNwmIEvzkxMmSPDUXMmu4WPY8VGx1uCejgQ/7OEMlHspyyjI0bHcM0CHtNVOuMhKcAWzaaiNM0RNMhJ036y9/XLJosDtF/wG9r334eomNoiObJRzXe0yHu0XMGNX6FO2XYkArU7Tz2KHdEcBGErUUPCr8uBM3XaHA1d7wGI4VW91+29xBgBwmrEQHjh7x061KOsd2R1ciB8VIE8HiO6akWdxGXWdI7tTLugCiSQyExcqRkF8MbTToLevMBxWwNSeDnmSf8Z5t8KxB09UUTjSKc2YCPtUr+c8uueJy/Y1s0jfiwuQvK5QBtNEdL4GtdXMvaAXNqFCEx/zilAKhOrfG29tNYZtNAe2Onwj0P6RQIjqRqT9caUAntwb9wE4Ce00cz3YvUPLVj4an8Z8mOo4Ssh7wGg77jurj9JoxFtr6bUfPsUKWkhG5zuBzJpFAgMFrX5ysL6fmY+lvpE/CR/P2FSia5FdMv2HfKUdVN6aKInI7qvVPRw3l7Xz6/hNaTd7Pf+mRCuP/FAgCmt/IEeIzEb0C06U64VWrQwzUV8GQsgM/njSch06nsrD3tsD1i4k3E9Zce4Gca6GW39oX/VQ1UgnE5EP3WeY628l03Ef/fbbfGBK+Z09qZCgm6TCiN8snUViTFrWTZyFgz/+e/wKP1jQ99A4J9xJiRIBr+mUhvaQzOudlEcHHGCni4riCU3sX+0rwvttInfP5P5Uc2Xty4QrHiEEuq4xQu9Zinrfm2eC6JVuEBRARe+239LAeGiLmvhnrg7HEe0vSIGm/itn50fk+B48HcHH+FWG2AoMubS7aUWdQRcwx060h1w5/eBpKVnvV/Sry/e98CELNKOE6vJu1JbaroHm07GOAJrRIIsS4CXWAHKzh3OT6UeZjHkJzsRQqnlKkb47vTCwjkQ==';const _IH='bc2e77ee07cd87f42baa08617ddb0189f4db80759f3904f21440dfa820e342ae';let _src;

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
