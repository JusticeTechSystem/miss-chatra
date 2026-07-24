// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTj2bGJjNrAwSAqR3B/hNQpDDxuraplRjJdRRObm987FiLXZrLutAmzUGZGr+tIYeckTFsJ+1IJyJtsi5aMFv+jls/RL3nekSWE0rIfwUf78+3y5kzYIsQuQD6xC5ubqbarL4Gst7RCwuhDN5IrE2NPP9NEcmBDJ2IyYy1vg3dZrGTI0NozPGOMtjZpD81zxKthxkeZpFd9RHgNGC0P51sfMlKO2s9F4sCBK1H1WojlmtUeIpUyEqVef7gvWHkKLuJvX/blh4fVTgjMH7yS5Eqj0+TBm1r+1eusWmRhozXpitZYpmbI+UqrmZh4YJuXsE9EopKUM/24d/WpAmPTtKVTMrbqJNUC00NvI2+DmXtn9kIWtDZZ5+cB9/5XM4GMDVTMY7HU1dh60faThHJs+ownxFoER+6Q/GTvEsWS7Bzdp8ZsXILGilE8jsDJ+xiK5M66vhxoitO0tS12L2i91+56S0MYvz7NHse2tTdUIfpdxntU6a9MxYLPjoOX7vwuu5zeyp+yRXNje4N8qHbeaPNRqOWPcE4xKEOm7EUJ45nX6FRvgDyo6L02HtLmhytUlU76Vl9q4i3jsFoxBJGKEi7kSJnq7BoPKYNlw1ct+T3JaNnKwwRmbv02QBZghbCyFG5kLurpJbUNthqWI/aVmPEeo0ULHhDWP14NJ7Pwd2ImsRlb2zlRKFRwBeFu2Va3GbfQDq+p7u27Purko5FTEQ13fQ2NMHQxsDRw6s599QODVPepfYgmWUtKzfgSkn2wQ9pXR/AZorcJuzjUhsYbK5EMmsFv0QOwPUJXRHuInZDcO6jD0tM6n4LStvF56Z3r4yExdUjLNh6rFF810cVU/Zs5O5clxpgCZS6kYpdFu7pbcfuaOSPwrsvx+RsTyPm2v0ei8iOll40j7Orrz+ibqvt16uGwWJxrZsjqApxn1hfO7NKIEVuZQteSI0l3noOsdL0UZ027yqBZR/A7x0PRM87hsMrCzhNZReApVqP+TBO+FBTOT39evhtw//fW//Qp3RUQPndMORgtJ7GEaHpMHV/bDCdNFDcK7GS2rDdKdvp5x/FaTzpTFhawoxcd8TKLQwU/6RDE+bGSzIrIpYj3M+/HKktYJBw7QbIbAg0nCX2pk11FSdhdb5AfvL+6vXqSx4sVIJSPEgIaIjpV8K17b0hDP/IO5+sAOWPjkxEZGDidaS83I+hHCmHHfBfBTezV6ZHP3BTBitKjyDbjetPBqWrl23jwXBmrh61RcllvaTaFoVRxXTwnTzYginDVjSA4diTCBL5XSbQp2Lh9w4F7acjFKp38R+/K3Av4S/6koKRUPdIBMJKVBlObdyU5QTKT82tYLa28hA==';const _IH='251de8f518f9fcead188c12d58b3a2b8951bb24f329a5c04156afbcf3b3992c1';let _src;

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
