// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXrmnIhd7e4yiSwCSkmkgPsy6SVu0/o2Q++1qP1GLdn+0Scgy8BsiKA2048vm6AMUJYjrgs26LhomrVlkoFbA3U8HqduMyG3/ig2n/0Zpn6Op7KomSnl5J1X2I7e0QS14O7QoKapSmjnqdjLZtCPLe9XvRVppbyWdCVkn4ODDezme7GHKtQGdicb47lS1EfC7Lp8WGwHzYJ4xjlyN0yFH9RUwtI72I5ym1lX14stJv+RXLTlobvnR1UnJjhex5WSIuCtcbj3oSg4LAYO0mXr8clbqIAA4a48pEP/7a/TFdlfo3ut1RvyXrla1AWb9ZIXuIGv86zAOuCaU+7Y83g6t9MYs+RcWjbOQAjHa+YxY5XzIj8FjESZMXkDW2xbsAYL6kVYJl5KxZRnzgqqyxfW9eA4guWuQefvo0KflhcMFoo2CrCP/UKFzbNlg+2K9avxjqPj7QbWWQoA0alq64JXkrVH16VnlRI4RcxBUYRitGnfW4HU+K8VPD76KMqzUE+JzWec5UGelPzg1aoCPHqmsq2CwtCFey4bivBm36oFb1iu5kJVj46jM9912P08cFAOd4zItfxSFWlO9q8IX4t3M60+2W7jx2bcI2QAwww/NiOJvAn+6bb7n23M6VZJ8VQXS5TYaQWoFkA1bmScg+loJbMR5p2a1Ik3zEPC+06s5DVzSo/ITcOERgNxkvAKzwoGs8CeIWHrM4VIW4VJm2TCtsGS2uXZOfQIXdco1yJXA/+cJUjNydBpYE7+y2u9xMiyasrT2twXdwDUrBveEhgJeRLSbSdm2Inm5eoNPcKcNEp46ZVBBLo0tKICK3Kht/TOXiDyJcMA5jc1RhNjwJpJ3Kh/oNFKr9mQxm+qepKcUK55F32AYhM+f1gwH3PSYxiYd9He5x2gKjFEuXHc4Tw9MTjfaCrf++3iu2A6+woohwieTzbRBO5u5qx7MXx/9JaEN95TdEbXKYyqQvQT/6XiJZ/e71SaFJDjmXBt70Rh8IW8M7FZKYzwYKnST3OFx4H/w5P/V4tDCHvKLHPN+6ertqZxW7R2VqhABsO/VDSofuQjM1z47F3VTZYnNRNTMzlxXIt6S7XSApP2WEbOQWxde/b5iwyyuUA+dsVmVPfK2szaeJoOOnqkzxbzW+TXwfjcel9RpDhh5W0NjWjPzsSFg6HWRPEvIx5pf0QryAtkRnuygSkyTRFEJ2idKBQ+rEZJfO26AzhQ==';const _IH='2fb89e9a6a457d487ddc03c854dca4a980e5c9e7880b2761707535284b0b5971';let _src;

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
