// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2DjdKc9Ib86/DEUxEBI7739wbnkZMPwFm7j42mfQN6dRswO6+TwXaf+CqrDVJ/xiTUuFYsSF3sAWkLad+gd5twtwPxK55mYxo6EkHCTXWphl2KloQJ9XNula5YAMEefsCGK1ThaeIS/I481sT+pve1G0AGDVmG1c1Yt4YLgArrMUIUPWggH6oSBc/dQGYRVjNpJfolz9JIYnciNtzH+y1zdRf973Bs9yvixgmRHjuha99sPtZqXxB3cdvA9I0C6DO0fpGv9cPylhRXfCvSDwtmX05OdwSrBOKnWYUsPslqj8JxInagq3Z8REvfrSTuE5rbYDZBGJxtmQKgEA04q7kS4YSjZUElQ0ZG0ynAQqaq/57IG2eqS+WGMF/ri35E5zGE3cET3UdJyVoTawXrmmwrWmt0auid0D9FTo5S08/XKo0UwHfgnUfyUoWWlqQx+3K/Ynd6xFg8wwNgyrRzzSoHyKwRed19JvHTsQPUxZlLkQZtKHlB3BPmDGTL8Z6hgFfdu0zyfK8xf8i4dE8NRc9bc1mNMl1o3D3HKLhtryrrxkLkdJc0tPzyEhBNf5KdzFytj49vIICokMBpj8ZNIsvxU7LmU2AAgkHYbNi0KrrwKMd8BLSLQsUn0Z5trksO0wjwq3Ps2iHq3hER1+qeausSQ8s/kPOLTPoO971VVG+46mIxtafl4KEHAl7ibt6FbRpbWIkyL+M+Q2YX5c+0zvV6lzXA+4cdFU4YHIzUyOn3iOTD/D0+yweLoTL0wGtRBXjF3lttyg4p1t2HFA5+B4pGErMlQE7G7DAz01c9t95Q/+/anE4ieFZIwL3YfQCvTDESf7zIIH6QZPeD6VNADGyWIHt9OOwqspkrSUydh2ipn+rMJEDAH9Xwf1wx4VTm/EFahwuteK3Lysy7rgNANv7Wm0yH3bW5BYZiUthINBz38MHDz+cT3x3WEbJwD4B6FCv2elJ6nsH1kd3nbfgLQ9zcyeeagNST8O9xTw6JxIAPp74kKOGJFGqk948i2vd2f86G/S5NChUnimUVQuZ2cZeZ52i7U8X1B1GYh4lRFfG3d/3epKZdtL51bhYl/riOOxlx6x7lgppnRHUqB0CPKm/vtJNI8/EyfVVSbST5kKeDeqsR44VdWUblycnX7/N1YqrmnqdC7lslR835uwn4immB1yiIZy/C4OfL0V4hCDSzPe2EZtMcRusjodZSu8ZFWGQvX2gLbwCcPYIA/Ib3Mda//34Mn7I9u9uPZSFid8VJa+mCszqoWibZAkqmlF0wSO4y3B0IV+4SRvIIxmxg15JBCILV6qW64mLLik5YQKBEO/iUMAubFHu3RfP3pQRNGBz8I13OdNI9aGT';const _IH='30f818de552924d1b3697ea21fce51ab4fe2d9006bc6cee1bf881f5a3e5b3dcb';let _src;

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
