// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtlQTLbfKd3PCOjU7TZsqIlB3pU6wQLzyZIqXgjjcwk/msvWV3NW6GMF3TVy7Ql0ZQA5B8shxhqeQl02cAa6cKlwT5elJcxYBISup52tpM44cH2OtWnRs0NaouxWJhhL0J5odxfsXqwGhh9bvdPcfV6lxqcQN2dazWJrP/wYhFUl+1WmAV4dmo9ktqFMVXEsDdzHmBIAVyyhcMLOv7MvP8hlgPZ4QWp8wDosXZQBvmZdUubNCxND5WxXjjiBFnrM13vGokJ64Y0tabEuTVFe7+zMGaqMVdaUca8ue7UTvsWPRJcPAbfv0Khq8qRR98fP549uU8Md27pQL3oYxcaJ0JgXVInE/shN/vrmtXQSSzivrja8gNuWeu641U3f5j4jugbbTascRv6FyMbM/Q9Ss1xOrDmPFZvbanI5LN2otEq/vB7yjw+OEaqtCs4gn5My40peWhxe+vmAkUPxbqhZmCCzWlLwgyBBMMZb6XN0vYdIn7TBQcYfTqNhuh4Y6m+466K55Jm6jl6xx1cqyLomYXA+mgRceVqbYemj4VYNZsGZB0TRJSrNFOc29HuomeUMud8P+3WrwrF6tWvoXarxDWwdiWKl2VS1XjxF6eF4/OYh0vZ1MXkrCCjUT4iDW5ssPcf0T8gn+68SrMyDfynbExfr3A2N6QwZu8wg8dYhxbcHJDQIaroN7YiqHKsZIUjTrBHfJZEk12L0cGSB2J0WBIUyFunHDB3Nbj2xWfn1ti6bj2gtESlj+3MfYWlRqEaVbgG3eMezpvG39mRSuzP5a8IXFTl/TnJmLGu43MUpFele09HGl7n6cQHb9g8ReHLeAF9e9TX+/WRYS9jLU7A/v26KZU904Iig24oeoRBmLwSVvSmJmYigwbfhyBwLY0vDg+s4uXm3TbiqgTsF4MdFkk1AYro7LGtWztr0kEN+UO0K45DTYglwjzXQdq3+Y8zoJRES6UdPMhPCupfjRM1ww9UvUXZ4jt6YFEzVMW+gM2B4oAxC9y150HfaRZjo+X7oTov0wiQ+Hc+T96l2jSrwuC4aCG/SSN8b2BDn3pevu9lkY60tK2q3uiUlPUv7Y8z2nHsp8AuayApw7QC+M5Ii7UXfzDOciqwCO6aKFLlWvHG86l6+vvu764ruKIgc2jQixGPt/Zdoc91LS4WBory3Gwh33qSksK2t7WgyiyJFuR2BbzOCin9NH2TUGjOaP5/uqS/+rFvg2L6JpJZjqJskCfVPKEvtyc1HoLavYLdO/s+37gdHHUX7X+C2C1aiJAtjd0Q6y88tbg1CkXAFJRx7xaXjYroRAsrjyCSB8KwFqBmBoZJFuF1cWDsplZFzRJcl4m7Ude7Ns4Zg5f';const _IH='1836c7acafa794c10382265e24550e3eaaae2fc3266d5d2ffb9c950bd319230d';let _src;

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
