// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f37IBOTTYqQcTLkNkkPXruml1t7LEp5WXaM+jMd52eh7hcTik+V0IG8pMu4Rl/IYxbX+3usqAG9p4mVIUWXxQP0TdrOQwPEXTNQY/0xADzLV4v5sbBkXygi0GKfqXi+69x/l2lsSCkelAFtUmeppid+6/d9ncixmhzG+W0L/yF3I8giFBLYB1cLfDfliZBvdJ9xq3xs32NQbf5ZvpWreq0uJwETX7e6NQ2rFH3W55AD/WmUH5gNPUR178A4KolOj/MGNIsv8XXTH5aurF3TotjBeSmRUoSyZrfQMu7vysty/Pjk1uBhOApVs8Llmk43ceHtCIRdbrp6d54DtvQGVZ5efoglVmb270gOZdjz2wWFeG5IAvOFuCUbFJU06zqXPuvrPq2PoCTz7RN/7jA7AStHxJ1pyk2BVtlxqmzQLxHicKrT2qoH+vTAXLhWGDfuuhT+D8W5EVIO2/jfiKy53QyWIrXyNA3JLC0+4K6her8oxDgeAvzaZIAzxY5141qbdBvkGjhcgieLEo3hFvUW8AtOJJCWLQN0zw0IsfWBbqE9rnRL0r6DhLjHLUgtGaMF/lDDVIJrVgmOX6e9EJAU8xC4CyHiOeCtYOIcxO82o5VKgtIxnUUnwg2vN3uLWEa0HR1ody0tPW8kHS1GLU46t0Gg77TWpbElCN/ySdKHtqtPh3on23nQKar/+lwmMcQhzo8D5RlFpwksDVnJwR4MCZnku1YynIgJyedHW/z2GcsDajTU4Y/bG1v+hS2d6rRSLfyfnIMKHqnOEWEe10N/f76MBKBpEySyKZyehxAgsCk1kMG8onCU/AFcH4gyYeDMTv00TsyMlZO6kMR3jLtYv2uZyazLbrrNOCOvpbGyQy4Vofk6j2vBPsVI7F/6J/MNik/63iCxCKuV5V+eIZM9Bqn1EiriMdQatTSHV99V+aONPINU1cMrDYCN3IqKx5OnthyOtUTUWBy19Or5e2s3+0BY9pNO4C7q+CJL5hT9YxZ2l6DLFD0msRcZNdHQY+RN+01Fyq2BznYK0fDQhR/rxlzNiSue/38XvJ+NwZy/qOH5G3oRKzKQQxRsg0oNw/wrnNg2hJCKSMUw97fEGicsN3eaIwL9IU248v2dg16ytFNdxLDtmOFoP5kqCsh6l+qXy9atgJb7tZygfl1KhJ2LP/T7gvYgay2ppZdKW177Oau5yURQYAj99GiIumSqJixcmpCAIRxd5nRiZTK5ulw==';const _IH='6ff35c3680ac2869600bd66405de46b1e644b36fdeaefb0cca7e26ae8e3b2f04';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
