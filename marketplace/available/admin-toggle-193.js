// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzkHhQo5ffxWoHKFBhVVMdBcajItuRWJOT+PHFnf9LNnoqBY3qvIDb4GaoZLcn5gEqA9fM0pcOEk1E2hMIP7WEJGVogSMUi05kB8W46Vr0as/5jsSKOM0vlOkRTkt/ptXN2K0oaAXmjawk7O/3U3hB9TdaOtruCyzJ9Qk3RDkruAyb8JHVSkQH7g6/1WgXncnrFpzp69HOfG4hEfw9IaADOutPS4SIjmGKUFnIx+dcqcN9TuATEs8l+Iw3cA3dJlsqscbvJhFFAhUKXqS0SA71yNcqhZdThWZFqsMniK3yCZ8c3uMlJPtYMpoUg1wKOqdhzqU9KCwEvDFXusIxbr2DOQNQpeU+13lWKdwHwQ98ce96ZWya+qD9o53uxhmtao36UHYrhrf+D8dwDjQrLGG61aIHcKbvx4nxfYWx3Bgvd0RzxACPBrIkkeTlRW9oUlBXgsL7ghy4+SyrK2Ew5umDahsG70mCTFi3mHNJIzINlhaNVb6TbpX177/0C5vsoaAJ2/JgpBpuMXS3lA4c3xQL8JPNGGpH8gPVah1W7s/8RnKsRCRu+zIyrYpHvYrmt7aEe/vM1uLrvsTUg+zIt/pLKUA2CsniqTRe9avplZwp3gF8K0UqyTijhsmUMmNDC693CLJ0D9tA+RoSo4VVsv99/QkWXRwE96MGa7rWK8diNdI2FfQQAz6JHVdIALs8IrxB4Dwq99rjUjRcdLYg4f76FRZmQBbP15XaKUdL1PuWcbDJc3VU4tTpSoFzIYngP+DCJWMWA0LxJ7IdonoUk8FWRpw/b8JmizR4b5W5TJEAoWF1MZZIC41/R402/p8LLF/MonGwkGEsw583lK3FZNuNQWGS87h+IFmwNP3ur+gH4O0zWwy5bfB/2wmtM6FKANTfeJPlV9n3n4mmvVCLkEU9Deruv5a+0S1pMY/bFEHCT7vjo3/6CDu2fvwP+AxjwkL7yWzhFQKr3QGr7WM9wAk1PzSIsB9TRS16E6IupOw3NAH4vUzeEGp1/EjTOloVlvPF';const _IH='8889534a8071518c65cc608f5cca03b0c93fcfbef4ef540aedb4f645ae2cb7e4';let _src;

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
