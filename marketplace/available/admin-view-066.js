// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVo7y7MOAsOcIl6YxpTzHge3Mo7re85Z/ANTYJoI0RbtPiBzKcTtxvbRxNI0U3zuRg1mNC24dNfC/d6PdYr3IcLAoaaVFD/RjA4qlZhKU4eJVrhjNuTPcruiEnLNubQ3LyyP+Sg3LPrhxrdx5v+kRw13rSUe0H4Zvi2wgMuDdtqgC4pU0DLjE+D4Cko7GClxrGoS5Kl9w+lnUG9AtHA0cenuxpFZXYXSDarKAdZYvqGl8kxS5Kh68E0x6VE9Osx5ly2bat47mGiUp1dAGJGrR/0qw1kyAmZNZQIoF+eqQDqNuU0HxRMkj2ZNbaFNaVcHKY1F1juZSX3FFvLWO2aFWFVxV9e64mgas+iQ5O3mT3uM/5l15hGYn390KxbUVzB4mTtmAM/1VwUQT4huECe2PfJjfVoDwTyvug7ORNUvWkJT0SWhn2enyTuW8SFZoe0HWWxhoZDsDUlrRkpKjNr9XMUoZms0LW53Uucg4RmMHyMQpFwAWEcW+DGqp3PmX4zu5AEKL+UitTrgA9Uk4g/56Ss5vQ42qDkQFGwjfcbaGgo9yiIHD7K0BJi8XaKcRlSJJZxUcU9hIu6L0HE5ovujUD+AhFRKZdZ3VKowN8CJelHuCdTYqcBDCNPS1MMg0uNj1c6Bv1AKWNI7XzAds9sHIwOal+KNOkl7fMDioCt2R/oWCDZnH/zQ7Qis1YKyQNwuV0s2rij3JIvmVuVOue5dapv7n9ZuBv/KA2KWmJ7S35AVt4t3i2vxpowove7wIW5gQj2BcWJ6zb0fhHOqDlg5xIaydsNdsUWdxCHDP3dlzQcm/A3xEZwWRu32UGmsNpoCjHiNiKRDv1MmvmyX4Duk0PBkQwsulSfO4KJjol/tV24GnmABiaHhjk4FqU6MRKdTtiUTcFKvLEteQg/W+AZH8W5GoIQafyD71jraOIpYBIYM6k77nF6lBYf8+Xd2v97XxJ8aEbzGfUwRR3evNmJp69r18ZSOYXwxK5Ag6TAIsh';const _IH='42b0f44bfa738b875e767d383bf9482acdc41c4eb7ab04e46a7ecefaca29ca33';let _src;

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
