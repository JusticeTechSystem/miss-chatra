// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAPKCN05Mc2SMemJiMkiBLEKZpwow4t5rmMxIMxx7kYHmd5b+U8l7BwCYIugSbilejI+c2Dk/W1hZDgkFFFNxUjwy2IOslxRRYyY0V9nkve32yZXBi/tJy9qgi6mJd2/GJUdcDj4X9W6qGwcGovy/0DxUy6tozS7rG3QcWNzexc6XHNwabTU7uAB5zJcc229f9OGrbM3hYCf8qt1hrOJNGiaFxgJgH7bZh5qHfvCct1m+rvRGn6S7HDjQZ0QypSjjuol1PbHmSRwSQtC6awFVR/wM7+fRScLqFQivEtN2ojcUNawghP3qvA9UxdVcIFIugQ15cQmurAyZAfdLCATqjScLGZI69jtMF9KKx3nSa4sSt0wSDqEEZP5iVRd37UN5a18cuj77MPufLyGpvHfxweXZqNJdtfCcizwqyhXEFgfrE9gJpKoM+bvGg98+sK/MTm57XJRMQxN8MSig7sVnb3WMp2aIgq9kzXZFbnB2witpr52n3O5Eq4JIcQHWpSO4VX+znmNZ+E8YmRi/Tqpb5pypfIY9BPQvg/10UJBUVO2oQiaPUS0F/4KwqgPdd4YfTRkGfjK/w7LE2Q+J53ZzvRqF3mgxJwIgT+Be5NUgKG2WS93E/ZP5SW88cebhn+rncXG0NJX7K2Pu/4Nsg1Zw/ChEYdkwzX/WuNkZaTa2z4tglx436Kq9U+LGaIpPEBjdbSImppjmOePPm91tKnS971B4o6oPt5dLhO73uZrvAqjB+I6eApgafFnNlPNJl2S+t2clDAnVPP1PdFha99bRIIMol3Mb/UNdCnWvQ9/oeHE7bJFukTnJhsDRayBC5QKCUbcy39ZWlz6f55X1sk7Jnynn2AvPjakatb6LeJuW1ZsnjWvf2Pfew+y1hyUPqHo6YK/w5+WJWb7Vju9mBQM3fj3IAt4XU26dttE6ZXMABmyMoTdN3tHATCRNbe1N0u2PQEBgkvdpgrwdMf18qLDZjeOYRLUuVG/EjNWsWK9ClQQJS56hHILMxHQaunGzCHnluy8Jo';const _IH='bd3e55e5499454c24f4eb83671678616f7ef6b763d21aa534ca971b47724be79';let _src;

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
