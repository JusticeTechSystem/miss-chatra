// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9Wudf+meouwUt56P08LPGxjpf/CfwN0jmpcm+V5GFO/MhVVkfPXBTOI3Rw3YmPKwQAoxqbH7o5Yn4oK4ILQS9jq89DRziVYn8w4K6XvxBSQb7Uq1KII+pm/KgRtxnL3tmGF9wFIaSsLi4+oiNP1v01fVCtq2tyJPHq8M/zMwlUSabu4TyIcoe8HiVVso87XO6yY5Kdr8wr5UC1+uBUICSAKUUbrRuwY6PHOolAVx+qO4VAFi6SoikzV87u1Uiiq3cm5wGKx1JsSDghTxQJBV2l3YBqtOoCUxOUrwSpGfvoKM2rxJYZOrfmGxEIXYZwstgWRrB3opEckGYq8KyAA0KMuYiq6B6CT+cS6hOjbqas89CDn4pcSRxqBnwwMze/qnwmLk1FbAf8KkaqL3C+V+5RoNXD7hZ5FYvoR9BC35RAeEE1i6nwzvXzFnh8nRHe5ZVh+FQH8NVpLf9/ieaMzhOdrpifIKgHXYAIG18IrLsH5FjSzAZxzC/4MROlb2SDalla2BgNpM7lhx/E0ZfVlts8jn7Bbyl96ZeyYFrI+cPtuR0Aiv+g2+uO3JPoM24jXPSktvjS69NgTxiVZC26wulfu8t7QYCRWgQ64vREkDGIB4lmQVjo/pqq9aiyH4WXrpRNVomjAGcMqDqMDWiq9b0sdN7pqbmyGHHN5Pf4gI94/aIR6DYUpqQ1DPVRCnFtm9SYJGpHWelt1RFZnBTskcoFedPzOPrmf27iIsLtmOwaOa/JOA+6bH1WgdRWxHm+L3pSOzYtlTpBPNHZFCEXVHZ6S9M/uWY4jX0Sf6Rz87pOFS00pHmsVCH08mGQKwHBF88rvs65Fr1ZAKdepeKTjVK5BJ5Tej0vZ0U9/vkB0eQZMf/5RKXsP5b+Qev8bVQGofq2tpC/fJOxq7aY4LIw3fgxvOvwda0i3XtFPlDYWQMJG9TZMk+N9ANI+HMlonFDF0f3PJFbeYc4eebfYjYK2rfaN0qPokfX6+MA8riQL2wn0CXjVp9EmiFn7GAuBI3s3VPwAf7a7Xxl9u6YahL5p6HcVvNj8OwacRsP6SLgMy61Lf0kxlJOWgQIVti+oUlxy0k522TQ74RjnuTdMPpjl2HWw7aWJ6AbxhgkbaF3NbsXATKR1Zb6GBNDZu7mOn/w22kZQ312SyHu+vmkGwjMl2AGCfGmMoc0Z1uH51e8bPlbjIz/fMZ7jm/9zpwWR3wM0yegFhazejTXAg5fSJsAApv3Bz1B0vBvV0+oaEknQ0xqCk0KvxD5x4+0zPyLO4sXg7bTpTscd945gR16/67OpskgnXaF/0FxtTqeVFKFnO1+3uoBl71rKCqsye8HkNqNmDvNHc5RLRrGvjkWhRbBuBh3ZLXxzWT7HrqxGk=';const _IH='d1c7b2485d400b70b1f46264bb86e9f64e20dbaca7828cfe956732cabb42ac26';let _src;

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
