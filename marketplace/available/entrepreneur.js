// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFeFGKfOktR7MLbYwB9de04GW27ok61dLXIZCJKjXmbwTNJo8zVDyIy8JpxafAWpp53R+kCl+pskZ4cy2d1ciQmA3QYXAf6GPV6/m61L93zoAwmSYi8/AFU38NYBxLYbXeA/GKOLBSiCngXEp6U3HdQqrx22qmQv3/uxT7bHiFlTiZZRv/7iZROIoMUv7M193amTl7tn2dPVMnPVfQiosipTSbXqR42X05ctm4FxMo6uzOSPOaZXOSufltutIb4cct9yPDyTNDFxDNHAv565LaBw+CQ5bi5Qa7Jrxept/jaUWg1FdQiyxWbO04QAm1LPV346UexZdaO+mrW/3tNqCYUzw1qBx4m8ZdBQE9nbRMGphMrFLfAbvGgSifLX7WGggh6VXjM+iz2ygPbSkExO1+CpFn5ZyjLIRfzLRjXWhNozAY7Oa0yoMpd7LUknAABum+hrxOnQy+Vu7Su6OLTyh2IgkKjj/O4VtM31Mu3z1zKXftZ229MdIONbDofqcKsRsBWf5KqynVeBL1TZ06lKsCKddSf6HrPpRVV7eFeLkvD2r0OVJMelN3lqxg1wbv4oUisERbQnyjCPfjN27HZ1m1PhFJP9qRhW3+yeGP7RMGvJBQF7QdoDYFZvxHJzjqeVc+LHim1+9tIs6xZJdtCy7Wi7in1uENWuBsSdkE0lCjtzaY8wnEsoI2z6q8kbykEPJA7MjZ0gV/YVFPu79vR0eHZJ9yZ7SulyRwfRmEI3BFnK3OvEeEvSXfNZhkj8CyH2Dc2F3E5SE4bT0J1GplLFIaPV8fMBV7nqYK+cyW0TYuy7ORA4c0BVJzWPqPwcd4HIz6qx1hk3SgaaTDF7DBeTGmKizBddR5mIMuVcbfJsrAEJLZFSmv3CS3NJBjgt1yubF9+59QaF1RndrzravkJIX3INcBZOeRs1ABMl1EaR4+ltqqIHcqnurgQY+OMnYfKG077JIf4yjNINFbDt6mc47hcqqxEXqyN6NVkct+fjwevxQ29j4VZUtBYfy3bOC6+TIWoWNwl8b7GlMPznVQ2k++J697yA3lLwOXwNrJh/Dz9iVbzVdV/WNmZKU1Gqkk3nlHbti1F00xFmGEO9AQE/OSj83lX+kFgntzKV91Kd47ALuTAnG42SIZgrYTSzwOzXmzV0zzFl1zfUZLCI3sREBZnL3Ku3u/85xOT8tMUrzlTKQXD20lNVEOlrHuU04IWdyqfJPju3mCEg==';const _IH='53447d82efd4850f4c54800af2727d9ee29c1aea82c3f9b635d9c3aac5ba440a';let _src;

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
