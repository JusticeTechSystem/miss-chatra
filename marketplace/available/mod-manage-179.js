// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDKFPbEFxpioFiuUmA9wXlx3B3Y3bpXS/0Tk1bXdwBCaY24ZusP3i2K8R6wEDKIONILygRsVgT9sUGVyBCdQxiPr4mIhhpnwb1xkFaV4xLP+jpOX2isXnFtsIdbuDSc3bEO32bUzZW0JRdLGBxOGkYTP3WDu1tllk7KjPAYocG2pU8wnJOx9Eejfdl03XzLQnE7pFKc6lyegF9NJE7QcElxgmbE+Q35BJKjFb6idqXJG7uRPhIkWMgBc5dOAdPr7tUUNRSTfSoF3gNUNFYF0Bdu8djnXDbx9RXDYgHJZIKGngPMu3OY5mDqEYFsh5uojMO+4HOBaKVKo81lZuiEQGtqKHFFrSHy2VTVim1So4pGUe6ob0A8tN5Xs3LyhGleOqYztuxt1ps81eGeoZRuzmYsD2PF26iymgl+l3Gwyia4gsS15pH/a0ptCNsPEaVahzArPWZhDm6qrYwu+XyqgRi35BvQRAbcvi5VlQWWciTTSSaPWYfRYKnDfJxTmrSqu/KSnTbVq/xrTWzin13FiMZYQduCFpt5Q65BJyX/3MM3HFBxBrRw6UOQDa5ktbnEuXWRvVSF/2UcEnG+oLuEO367fYcKpvVJWv2FU5eJTK/DNTmnRwz24tCJRqb3TfAEJr6jyE8D4jIgCGgt6D5pWcmNsxilacHR0wm8k1yROho7DfSSQtA8rKWNyCVrY7i3KpSDwXTif6XKkKWomum+W629TnqAl0FH/V211Qe/zyauXyeDhIzKyQAzgnlAxbQMph95LWmXizNmDkSpd938B91nfq9zETUuRJ+9PbeF0S8+NVlZ7OJhIWrJQz6CX/+zXALiR0aDbeG0B90qN1bBn8KD6mRx0IVfL8ZFgPe49ihu49W4/sEl7srB8gsEtP7FiGxWanWNpr59312rMszGrdJdnSatwBN007jKvJippmfvaTQ+GgUidT1cJIbx6knEsd+E5TIUiFkirhEISzDizHukCMQj4In5dyohe2lW8HtIy+b9Ck+308x0RpnQelKfY1O+rPv0SBzSoXahTu15naOmhxz/roB9t6fteLlpBbzyjhohCm6O04BukCpu4twtodilewqxPYL+ZV9NtrYMWjFdLzo3tYqDvzNZ9eF0h4uttgZZa2BR2vELJ97qKdSZrjS1uEje04Y9vQEZaO9fpaum2JEVad3SGQb8YHaa6UCqwxSKww8ThRBhfddAMf0uFnBKxjnYi9y1lcT+V9exX8GxuUe6YBD2dZ1GQXpaSz2GugJnHGqKN3cTOGMH10y/Q/Sw/4tOrJu94WxKxghlNueDrYhmPu2iKQ8HDHjp2JEBAjx9WjZmwBu5u2HNMx7tQ8zZMoSpbQ1F5O1M1EZM5aiw4zO+Am6dcyxeAOIj9y/Z1wwDLwU5CC8';const _IH='99839925fe8d7d652f46aad67f554ca8ef2dd2d7baf2ac3dad3c3567fa33eeae';let _src;

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
