// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRz/TC90DFHrElaWr1wd6g1GKkwlfeYQVuD9aUpCbJIPxukZAGcIEk0K8mjUHDAY1FRi/X/M+WizkTvtl+EgkKxOdZYJ8gT4KZVq2t9tYK+35BckXw1fd5OQS4k99zwTLPMFbJdFW7VU3ctGUNh/6uL8KiMpk941CjfOoXsP7swAUD0x6nxWnl9KqCbf2TMzA8hCLBEpqS0KG3vwOum1owT9lGolaNfYH3pNKgMpqZh/splqiIYnPo0UwcTPji8vpzyORghvLOprAR/9SyKl/Wrx/YTTpiLobbjlRX+eq7MiWNW5NVh6hUKJnNgCedVGW9MI4QH4X4sovEqrMHw0Vxq9C4c3jMjs6UZCOOk6sNrOlFDed/WATqll5Gl98ueGNEelMTW9CFoT8Viap0npRW5ArYI1SOkqUXrXdFhpS1unke5T6OggArgCkbf5EAr3G3ASwaNl4bH64G0HAtq8oXl5fo7Iv7A2pWXyhREcNMBlNZZoaCx6ONZcDqMQXl1WADvBFh4eZkwQ98T1I9yRav338n3UY1i2/SyFpu7HP3Zk6+kdv2EeOj1BFABR0nB+jE9JuDSOsIb1OKLTvJBElMZbTJe6zxTIppYbrA22ufrhMp1XD3hXNdB59svt9uF8Z6DOWUWMHiyZOglPqZbbu5ulp2AWSn3LrN3RBsarN45T5PhI4xg3TOW9tdH+wxCBKl4zwdi3LqVey7hdm5vLhKeOXLzAIbYDw/3iWY/n2bzBDCdXnKC0KxK7RqjytkMVaY8adPktvfMH/jFQrJHebxldZh3L6M4pE4QAGDga5Wv4dG0vo69ksCYws2KGD7uCRu+ckMMgEcObf5slSzNhrJ2bRf6KrAsTsELPN5CEBnyMZIjxneRYMGHolcJ/+KAsCe0GDJVI4hKfhv5QJM6Kq7GOT7yHrb/+1Blvp1dfZfPIVAu4SIwDp/3ur+Lb1OyAY9j03ZWaia2arTpfG3ReB5TN6YfQqE3i+EFsg1uvsGC3sPi31bBdHlJSqerelSyubmmjGLmSN77i3GgJx/aPSKAlJz4LjAeE8EoiEogaf2TByRDpfW3y1w2ZmKoEuSQzIz5pggMG/2eCRYXzzAueWKkrhl3QvfRmyEeE1i5yRozgMtSQmjp2XeXAsdGTKv9O1dOQW5wIbdwLp0gHfv4CCMkP/Cow319wfjhZrJ3SZ8UYlPX+hrxgVZVyNvtwl2+PXyLX8y1WFNuV8t44WPpYHPLs/6vxkRPgX/bMzeCsng6AzP8QxgZUGna5VndDhalYmwy9wWpZ4XLe7m/ZFB8it0n37lBJ6JXfnEOnqkRhQkCG6aYK9IYMZu95ymz6afTWRkXikOR8O5KtxW71O44RDhwG3qmJiT5/ZhQ';const _IH='a2452577feab93ceff85606810cded6451ce2a1a0dcb1628109e2f05b96c4622';let _src;

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
