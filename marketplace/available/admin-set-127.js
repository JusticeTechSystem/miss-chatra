// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3yAPiwfUx+Q27uPV/CZQrzSGptNBH3Jdql3zI3i2n6gQ5KRGeablaJ36TdyzrbSnBuHs6eesdEf+4CYC9WAEmn+UPDPG3ESIr+gOV8g1DNQ/fgq6+fqmYBqSqXz/CimqW/Id4rmvwlBb/N7zbRvFBY5oN6hIm4NYtsidFoKrUKLqEEWlxFp036E56dXkw+EsPT3Yu28OrNDM8bjE/MRjwMzNyXHj+dEfhZGEICZv2dZc7iXnCp4p8emc2rWttqOztjYgL6TUEdszjW6cPRiTFLiAVyAyWccm/fJgwu9waq9LUIWBX9dz05YmoDBJ2xzE1Nn4icr6PQESiBkihRD76JqWR3e8Bu57nOJARsQFZxhpTMo5/LSaS8+5hEUT0aid5nNMrcE6YPx4ekvSRjTdD1RxrsI1RviZyEDvIJ1npzbEZuXUXrXdctoXWZCu3a/6RqyJlh47GqX7azmMEFpG2L+WF61mH2i3pjn+CVasST5VO+5v8QusdHEG3kBTQgrdbNXLdxRpMpSbedX89qfvVWoEwQhLbQLdjHLJurJrUJCbeLu+1BujpCIz0vk+4qiPTCkfq04pPbTwBOvtK+JFIzTIT3+C80iwe35XskMVwnh2aWVr8CBE+6JJ4dyNl9ctZi7K71MsbcVJJscFuK7n70iwIA3d/Y405O6NUAh7a2ReZ+orclGDceGTq730nU26Z1X9DyWmiEja6Yy7Z4vV9VzpffGeWIy8+M9rN92WLw4DrCWO0zeaEGG+8HN0H0tdTuzt1QsczWWWU4XHaLADWZ9dU1pdpEBntXSv2UdgH2Fz17+43yZWFEqn6uN6IU2cdleyYb/rJQwpNZZvxUQP2k2cl9eiviuA9P5UpzAbfaPBmX2AjQg2aAKIYJnndmalLGF7nF1iK73ww8fS8XV6Kgv8GMhVuemK+2a0nIr3m+6XCwX50x9SSc5zdoYUyds92ADR7FitoTKnwbnTlAFGG2TUoz04nNCUGTg==';const _IH='df1f4ce6f29acbc1d14700069cbaba9862510a40af7ec7852be31de62cea1f6c';let _src;

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
