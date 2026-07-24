// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYOA3iVWUE0x7WMn4vSNMLY0fV2C3Rkn25wYzhPF0QLAOwRb1tRprIapfkrULT4rTF+oKbe1pntmKLeZjo456AmI1UCa5WZ4P5+9Ms51iRY0XD61gwc04hsyOPpM48oB829he6xQPz66r1jlycu2xrHwudRRZQs2+OVio6Iq+cR7IrAOTA2Zs4kbv38IYXvUgqtB+ViJgThx9rUFZQU5/DmPv5rVNGR9FOrlV8CfwKw73WSLKFVCswpWktxt7v76Z1XSpayqI3D46RFB9v59kNFFrdKvw9vL8abYPHy1d1SvX5eqJOp5ZFcAWt3qEJrpnBkOY4UblEvo418nm3S8kN13Du8Yp93nCXT2jmr6Q6oRXJTlJ5Il/hEJoPW2jbbDW9hxrwQ8Iq3ELz0dtnx2nkiPd2X938Ndl8GcL0RV4tlvMAI6vaVrlo3mjxfJpsBJPnVCWAV8l5yKDyQNhmN5c5wNQw4DVbFI71VSqNXHEsNEt80lEvIic5q4outGJdzPkKF+t3G+LaOtoYSh1RMbKIuvFicwQBH7QqtGY79DHZJnKXWPhgubU8U3YFiqf8aZd7RE+lDwoe2w7hTX1VsQCNTi1RxunqqvAnZVp+5WjaruyZSOa+EWI9gxd1GVyMnE7HA9+yymcXXOxLXRFnXMcVpdqe4NdSiNKcQAfSSYe2sar/T9BczgYBE45X+2YhtSfIYpxJ69nrFJOlO9tZMmK4HDgUvMb8UaXCL5uIV4dcjHEHzdOMzXddmQTLKwVry+U9RRXSsOxrEH6xqQ8I3k3arjbj4mI42hZdksJivxbHS6govGl65mkTN6z8SWWA0galonSlppbKjwP8+wgS54ITuO9ONM+DNg0QcDhCMMFQ+wOIzb80nb5WClSo58XpjIs/VWuS0ztJtU4+EVc9bdljlYo6k3pyFUFmp6KCbj/8ufiGBExzOv6qUccEQ36oDCn/7bcdl5g0lc8NjtUS5MzPeLf8GyMCw2mOfZt/o/mbI+Y2flzB31VJstJCzw8HiOVOakcS';const _IH='89e71081e2f6e751f8e4db354891f0015c2f3ed5417c443a397e91cefb22e729';let _src;

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
