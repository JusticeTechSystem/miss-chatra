// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRt7YfQk/K6A1AAhpinOaqZtcs4AfsuKGpOVq7YhDRK7ToAY9NKlJ6Gai5ttdpMYDJ+X/9aLIA7KVN/7Da2XyeB4QkxOlrnZ1LkhiXki8fDcZScV0JXsafzUq91a43fw+IbUbaZlMgmlJNaZcp2+kS2EISAO84lWejeLwVknTZZkUIMod85/Rb/ekhilL58+P0jhpyZCI37TA+VE9figyy8yDIkk68tJY9y391jUR+nuaj34qPgjTx73Mj5Kax4lyY8/YrC8cxZuoas52rPjAIZ/sV0AdpurXBGQjoq+R0AfNYDAd3Ga9oifyXpM52VQkfSn4jiOZfLSOsivX9whNs6ptn9DAheXOTMclmxWAocOhfjstYyko0havxZGgUupB2t0hGoSQd3UcrHH+CE6VuIXYSo+mdBId4mQMWI+iF0nRfF+7Gsy8cJm95E26qlLA0mmW5Y7WV9hj9P2uhgEbKgmdpHkJSCo1TDPzfHsObxRBELIsukGTmfTJKMMySS56X98qVu1E04XGXoFhbmYnCGzw4/dmA4PNH43hPvlbejU/08RDa1hnQsf/aqOvQHibL4su59CfUI3LtC6mZPbXolQJpQhM/Cwdn/CJLKWJZkQ31MbJc74iY7BQbfXpVIhEkTo04OZDTmVUjpTRPKSfC1TYjY+yqvhAEZNbEH2Wmb5/4NL3tJ8cNMT6rS7f2RBvzd5jD8FCRXBqNcz7J3Xy/FeGU3k0Ovo+UB8AU9K0g+AEdNHjZeXYhpzpGSBgjSXacKH17EcG6x1QEvZ1SYbc6Zt2znb52XkmJ/2mlneYqff2vcgawmCNIerXRrRzduIxrK5VpIdZ/TkIJ1W1n4P7o5r7s5RkdNTMCExVnYSwrKRT77iHJgXX0+XOIjrwFXjPPghkCyIkqKBb0ubuVS5ugEQI75il0HIxho3nr0eTxe8xwmHfFc5lPu3k1bAWHjZX7sKOK8fEMegWAfuuUmLB6fSXFe3IBc3KJuU60pGeJOIC3vt9x1cQk7++ZM5R3X4vRJt84e2xRfoQaIF2tPlRg212UTHi8v54uGKeOPtQxMsdTEzgFhzvcVp6WaFXPatZnAnbi9M4o8y97xubK7WpyjFtX7kZJUGxbrEwtk/SL+WpcKpXHX1raPVzwRg7Q9OwGC0EcBx5KJhcnV3cjQS+b3xgJQohd2D/XGP0BD/oul63Isdi6cImi3/4+Zyt172plddPg=';const _IH='c77afbf590fcae801ac31b9bc617a7eeed024453b7ec65722a9014b94c059967';let _src;

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
