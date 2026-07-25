// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQKIlT7HLgHyHvcibJtW+GOuxwdlU3bZhpzP/1eWZPJ26M9PEDUUI8DTHgRBxKCYGhIbqyVal/BRbZB/sr6J5k+aPZpeuDVS797YFB68I8bf1SMX09eywVNDnfwwXnafTeFkxwkk786ou/wqgKuG6/gdM1IOqigo/I0fKVAHHh7WJThSK0Ho52N28YAX+RZcR+aU4BE3VE0+qBUx0yz8D4ySlRkT1L+utwH4iQNQd51fj0Dlyq9J/ifexwVQs//DXAYczeRBuF/uaM4Q4OTdQPXsagBdFAT9q53sGilKOuvZIN5N/8eIZRhLSl/SE47Eye62tOzXLDZ0ArBS4Omb3NHxiF4s5yGdmTXINRHdCeRw+IJzwv4XGF91eHSro+4/8tzOUS97OhLeCQLIJcE3suu7p/ZaSWt1nRavGrKxDXuJ5kfnmvjl8BJzfyijay4ZiI6yYs+Yg1jU7Vo5SgF2t+o105CcDJopB5W8/DSnSI9dkFVfBHYu/ek8zQZqcTXT4eBTmlJe6PIQaTj57yAJ2AVX8Q9OMO18xTA8z9cmedY6Ddi6pKm3Yij8FmmRdPvPvL8yut6O3flruPXxG6Qh7RNEoxFfiLtubJi1V945orHsBWDLZqkyr8uj48EcAYcHR0pRcxk5WrxJBOMMHWUAxYdZmAfiANfu3ufNkq4gnI6E05G7qkVVePXUBOECtUbgpfO/WCKtjK+Qj4f1T4aK4Ks3TNblwpyWd0=';const _IH='f2d3ae1d89df63693dac87a91874b96cf5ebadcbb8874547f03f39072c5a9e69';let _src;

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
