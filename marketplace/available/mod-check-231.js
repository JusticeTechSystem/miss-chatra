// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXEzVkWIMt1a0DDPgW06EnPY9BJBJj60cOQHzUMCl/OiveDaLHltM4POpg51SK4uz3zAsfdjpoeDypGgOjjqfSpOovD0/b9G/n28NcWnkOOYfkILuPXgVNsPKE21X0hKwIVvEFZGYjq6RKAV2gwIT0YiO/KlvrRv4QBJCUIgOU10o6kLsdS6P+Bt2FGaQ6bZRzfO2lNpml3iFnr0JZHHvirosPRLutR3la42IHYYikEPYjZsDjfTfshWavpkPl2c+u1/D7XlBGRBCrpLKa3f3xG5pEBMlVfTIvYv6qiMsnwhCxNxTcYs7nGnyzNyuBvNYVI/tPGlhI6+XVegCVbWN0u6EKNZ4BNYOrZCrrO8KBJUx0sqfj0aBjj/9p0IwzaY7wEAPAqFxge7NYJQE65+o4cbR8GVgwYUFtCOPWuysOrom0Y3AcedEuZvxbRe+BSeaIqHd/1bZgkIjlnMTy+RH1KPeoFKYGwourd5kO/aes364aSUDVmuwDGOJhx2XHKmZgspexwzFAdnMbYnjsa9c4HmWFLdDOjwcVdw55oQMQd9dSn6V50PSktks3cFzAR2jzBXJ7+PAUc2rFrT6vfebJocgZ07g52L6X60r4YeIpvBp1kwitgne1boYFpHJNggcQm9L4mwokBhFrvcfviG1DtDyCzDxsQ9BPF8Toxjap6nwDEl0RCm9sf3UDUEJK487wnEAWcjoQZdqdZFlSl1C6I+gqIUzg52SQovz0bvQJIGp41KJ6UW5FQoc2BrS5XseG17vnENIwCxnpg0lW5/jgXaRcSG1XqHIL0Q13xMIpERX6gKMZ44UnBUlehxWhr/4JDxel4+V7Y/qxDnNqK2mHEUWUTAHkuhZk9EnMkD2MeJdni5hqLT3ia5Pa3IX178SoqofiDE/KCwuH/E5D1g3C9BPPoMxbht31pWAB78bGjNn6jlymRhVMpjlcVlpGb0AvHMLdTijuYI/w2C2rLj+H2Wg9SsjCMd4gbCeQccFHvVtzzz+xbV5npHvn8UfJSt2geKQKwADEGsYh92yVUffCu2Rhhi9mDQ89IZ3Z6KatiUVI53k2nrW0WFKtQLX7/OVE5yGjyGsHQbtxLMVwK1M3IoYd+FASf1PkDeKbsdmZAnq2A8/9WbPpwMdSnOD3pmp6MkiF7/BwJkLZMKEMryeEx9k9cizgglo/FR0TIcATgE80onj5hwm9WxKQretV+qDjUJbY9BaruQI1sdH3X6XpIvr9eqzsSEBL0dMlTc4H6yRg3BkDNFxQz/2nwTXRYbvQLFWvGuJ+BnjEdH3LpxNRAhUKHq+0i14I1S8JiON8CNCN7FLynPDa5Xd93kc/7aSPK4uEsB42O589L5DpyUqJrvSBIsgIlXdpWs3KSZ4=';const _IH='db6f5422e1f4d8d910c78ee5ed4e0536e92234e6fc86fa46e96af7161da19ebd';let _src;

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
