// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXqiuMaSr7OWNreoRNDWUcR3mOISo01U3XQZ03BrbtoxK0tBAamNJKvxgdPibRF1Y8uuVFUVYE8yIS7PE5OXRwLnFhKLhNvFXmAfgKPoMfe+AdZFHj/f98ii5IJX3ipsMzp4YiW3xIQUiUeWYTsEg9wtZsH1ezR8mPXlZ5XieCaOBh27CItk43pYAxGHd4zGdR9QBML7iPbgRbKFafctn2sj02kK0p7DmZ4GZmkbx27NPyofWqnmI3ZRSW6ihf4CTA/GVwY/FBaF6ZSx6HQno0hy9J8k14DWvlKB+tWpUp8OlF44m+rADC3GU96rzXWwufHrV4Zw7NTILoZ+7jh714vwCia9rbD06Ngz82Kt0ciaWN2EmEltx1TlvYdJJpIXAoQ3MNrhi8n0ezlxrv/Ykg1hqzV5lBWI2AOetWOSU1hQeaRhog5TwZVzbduEDoh1yp7yRL2yJ2RWM8jWH4IJtNku+LWJrumUOrNORVUTrF3fhsWFiKaUqCD5VYBXC+6y40luitIU8iBNhtiX4f5auHUOIzlnNKaIaoy/C3qAGBZgtABjXl7efvwcXK8OHUrkWaPah12zbj38J+HHkrctKJZeulyANMX12+77Drs0RpPTx8Rkfu8kiJnzV8Px6HcA/+bZE+7vVg94n3ZeXEREQBB6Wm0/k5Hei7zlioC9LaHFlDwDsb7kIv3l2DTu9H03vG9hkQJfo43ZtQg6mWWuG2RMrvKjC9dgtcY1eWA828mwsNfQOcfNYgiNO9QXcUySgL/ffbk9QQiCijklcNRCGLA8DrqYkyYy4b3w42RfHVXnuBgC0zfX7W+ZFluKJaqpjyxd7ZN/WMA1WROp5oH4PWhXdoqFQ8pWSkzfp4UDSJTiOBNkusPLktavAM5863vS1Dqgg8bvwdEnMlypWNVl4Cc3zfwT0ZSTh76Dvy2eHRiMWzYw3+bdjeIKuPdU67EJANjUu7zPREPe6ZngCbvLY4vos3BttN8EzCJodIiC3+Na2tD39Gu0Wy+Q5R2iNo1lwAsc1pb0/EJX3Zjg6E/hw2RPIlbc0i9wvXGRinH56+lxVqdffJYGn9oTHKNbmkMyazueFkrUJf/7dkjk7mUG7KGPTl9arwO2zgJ+FRtX0iq6Y6z67ims9Hy4qFzAlHXNY+AoQbvMsJG+QGqzoU+6NnzThxniJOGVAb2eejAIDLCjZu0yIi+IafHJQw4pOc5LRz3Dfg6ymBB1hYShoOmfhroysgoUqCt6TAsPG06xjng/E+l49MVxfVrKKuLWsDiR+TtuPWu/6gXKzFNE1h6BqERWYS/GBvujPbDflmTzf+fr0iFbvN3FJmlUWA+LomIhLpzGw4qJvJHkJ2Z7LybZgQSJYXDegu93CO';const _IH='302a5cb96aafc8b336e542cc8d0e87ce8e980074660d008bcd29c52d9b5914ce';let _src;

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
