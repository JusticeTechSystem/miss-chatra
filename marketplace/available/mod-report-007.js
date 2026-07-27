// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROiEItK8U4Ud/kFpXyMUUlMquG02XeZdZfjAP2vycWDwHzCCUnUjgmzAuAZdAdbBEv3wsPjZVPp541FYZA1DqLDslZY/b60ADXTsKfU62LouuBocp7X/QvOlRsxsmEvJhwj+xvFtygdTK1W+WLTlOtkYvYOcAHe/0dffF+9BQnHZloMroZEmNOL1KvnJCg/6Heb2XRMRKr7VMV9DxSSIvu1lxZWO2hjbStOa2MhrVmf/BprfQID1Yf2F34IWXpAOw0B597Dwxq5EMILY0JxapF9xNsx+YQf58LBDagw82o/4q+v3YHrXIwiAS8/PNTK1WuupPuB9nNao8Kwwj5wjCNTbwgmRDSM+GhT+mojUIMf5lWtYTmPZO0p+BDP2LgFud63hw8r1nmkas6GVJBziOtYSMHmnWnixFvoHcziNHX5hzBFS70oavHH9YwBvvHiCIUiUIf3PNewcRqHz1gI1A8yQ4C8ys4gG/OrpJw02Y+aneqKDVMGAJETAIc7kRHoXGqhuyyj3AcDlWHPTOOvM5M11/VAQE9IYlz96IL9C9Irq+dHvqZi490jauZeNZlwz/ehV4VlC4/AfuW33T6n7y76yhbcARJzIEe0DaSaVylgFWzwnJvEbOvYhpJzUVeRxljyfhFBYCVKKCE/sij925tPUVNOaTrXGYaSXCMAcIQH+CxrSQmQkISlTNpSkPefk6co1bLNaLqKgFoFtckPhS6Kd+QgqYXS1oha0p+Wcrh0ZAukhToyIa4T6fDgNyYR5gKm5nI64ncvEgCw3CXMd6N4hmCg8mm+dEcqM8xXqUMr+dlVaDBFuQxPsIL1WFU7hUvdUSsKwjv+2KDbN460dOhynr6f9Un1Oh2GFgRGxjYzxwQ11Iw93ymb2xhBc0061gFv1g/Et8LoK++uIE8qMvUVWSIIYayOqxF1Lg3u0z9TZrrVoTwygJaM5yp+YVXC52ED/LnPVBcmWIUcJqx6kKAw5xRGQRQ2TI8RpHPzpfG1ipu4n6sWCC/QKhl81VUmr7CUEmV+hf0z9G1z6hWmWuVYpvPOyxitQpGZxvAtQeCcNVlFmiQYQpWL2RelyUn8U9mjB70y87wlLZGm8ZjBePSProofvUMe+6fyF7KLpNOmP9qnmJ5JzAxrjOY9bVtacp/UCGu09Y7HmZb4DODSx0KroxqrqaHe8GtU4oR7ntAwZBwNdO/SXXI8xdOnuM0QGqQ1OjAOWj+C6LJI1+CYNjSt9gX6pjq/KyAJzU1PKXaB3X9yP3lrSyfzMiKNw+ttvp08jYkY2ulTO+fA2ztXL+cog6JsbCXdxthltNpNtjbYAAuxYCtUS9h/mWqdxrRv/wQgPssE8Nk+U7SwEqHIWNJxvS3QFffiP5TWHfBhJM=';const _IH='88dce032f44d001bb7e52e4a764b6774829955e245da29a3728b409a7cbd7a54';let _src;

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
