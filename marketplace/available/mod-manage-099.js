// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3uXVPka0uagu8QGkZpv57QDzUoAa47HsjfcvLVbffDJpUu7s/2Do6FGkXMbwYKnSWvNJeiVGuyhJqMnyCpVwGRQLbkwXbG4OFYYfYJa50bPuzNOr3dgUzFpgJBXWQ/w8AskvxwlaqGmECRu/GGIQoZ23GrWRwqOJKM/A6oFn6H6vzSLv/OTLCNQFGIEndj11BHav9c+TEiU2BTbOstuZ9GJVN2juOD5DpFIiAwE01tUsMrhKkxntiM1H8+PO+fh2fdcR1XUCtp9v1sgPfFUlXasE63tnHKVniTr9gboPpOZyNMDloNTMjrLAibOgeas6EiIjOBbxBP0pRDpXiEHTd5QqwoNyx0rTcX0/PgPLyCj/783ucoRtcPgUSrA11cSeSMC2jK68FpNsoEg0fR3W75r57wZ+lNTJ4N9tGvkQ/+5hAP/zIwB5tw0JXqySkA26ECQdBKcT/F7/+CsIv8DDdxiihKRa6g7tAd6rnJklZUwh9g7OwgaUGqYiHPobmBmJLs9NzUukhkYUQks/78RylZz43SLp9thVQYp9navbCV4w4nkfXyCcn4RXFlJokfUt3kKozKN4/t5oTmQ6ttTtNnIwUWrN0MWUgQAg9bWpYzu7HiyLO9HWl7//sol3aR7S7vwajKLtenu9VvyiIW4B1y56VFRYl/mWujd2mi3jJPnQCWFswPnjS0kbu8t4bA4D7c0U+PSbGJYbn7O4Bd94qPIm0qTMHG7kmvBuRsiptS0MWqXpWvk+TEK/PfYGfGcU/XBtYxjzr+ApjVXRjhy4tWFVKh7r4JerK1Pll2En+KeXkWHvHYPLnVtqUZTGsRXl3J6y9bU4hbk5ctRkZSUqd2BdmaDg9K7CxEtylIYk8d4t0a8aO9OTNNM3Gfymgymcchn1XQ8/6Ewji2YgSlGeO3Pfs/q1gvqHR74IhwWvVzaVMPSEquSWzfwC0if8vdmexrWAea/5ohtwIS9hCj+4MIFaXmyUl3FMMq+JdXt+6s7m5sKlCZlNcsQtw3hVj6RYW8R2B7FVFoDhK8BfWNNXL1H3Wl0ZkrFuNigKQ5J6kpWcs6zceAcfuoiorTtr5dTkhIBl7faLI6w01as2qRccehZUYmQKSCZ1KuEFR3iFocIA1QV/ka9G/ogV2EgBoVFS9EiLY/1fvdsUgmxTGavNGzZBOT+m7NKpc+8b3GCCg6djqZCfa2y6DoiCAdTwHviEFEONSsEVuGM9F7Jo2pY6cis5fjcL/+T+Mt5B5O34rYmoKfOu6k2XBNcf12DINnlXnO2HW0TmNW9RDRMM5Ul8JRt9xtPrYp/V3W/BZa/OTetEzr5O8taPA65k3eM+TSCKduVg5YPWqnQfHENzk+oRNTG0uuNxG3HTWvk+IihaP0K9CrQ==';const _IH='c184989220a108ef9d3b812412aecab3f9903c260744aa976c5e2f345d872753';let _src;

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
