// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7jEOlXHM16fyRnaIZDIAmZmdYjwTS8M2kZhgTBhJbdeIX6J1sUXntOhvX0PUuhJeXqgRleljIaX5HrslXKOjvp/opz2Zbv8Uzcd/QXeHArHylIQMN0LlabKYDGXHcubjTcfvkMl/CM/dDwINCxJrP4VLrHtMMwIO/jGbFh+KsxULYPKZ3PIRPhIRQjUnEJrpkoHQDnJRWeXBWKCN6h04wIlt6uxl+nbYuOaeCQCpTkooXXX0zzk8z2ZWaHJenrb455K8xZvoLG0snwr8jWRwxYQko2CVTv3y941HPtEIu1y0L4iKDIbgmeXAmx0+JDkbztLNtg6wAgBoS5IhSqKdVgFpxA+98O8nNOU3tUsna/27obvLTwPSHpinhloBAiMMyT5lP5hy7FeJXQa9omtFSpJurJdeGXq9jalxiAkHDjrOhfb1v9my2ivBQwDWSlwSzUBPvrzAPZPgrqQ7ygNpdzCD6SGSkVFrqlDe8WPd1I72tQEkl4XhOYpQC/8oti3+9I4wZrqL/g+FuBhjJqSsAqVZpErpKxD9uloiG7poePx+Vo+BRiAHHcN1AwQ6gRFdYRoYNjtXrzTduYf9m1CQwjWH1bW1YXbIXXYzHRR1xweIFO1DSQL9K9vppAP0KdtMfGzcwLVNA9OvP0hzNO2wzsNyEr4DO/XTPzCMr0LnXEARuKkhZl3f7u1AUJqViL+VqP9hZOzXKbLiixsDLw3uhr0za6UYvB+oJljpxNs7eTvziwrKvypKLaPxBL+mcE9w9BXy4aUpYE1hbHMseR5S7BRGSUkY81JRKTQ45SRzT1/ASweLky9xxAzY2tT9M/4k9l6fuwELe9Po84VJ3d+MxrNWRAyKAMxz/Cl/VLddf4jL57+lI2nVfayTlYAz2tCm0a/tYHo74wN5UItr1VrH7IXFEccfdFOthJc3Z7D14mu+ZT+nBYUSUV/kEe9Ei+291OUrJBbZQd+eiZQHtOSibii6PKVHB4tq1WTYlU6gV1ui1kj0yims/afJECrqa0AfYgy9Gvjz8wgCHuXTijmpumKv2xzR5g1vjipGgv/Ku6MdKXAfkacAq5cmeBiMapnVOHXng2q7UpWGU+B2KJ5Pvv355Dgergo+ZNoo46ze5am0y0Re3+wumAD9nNsuVl8zZWFQnnXHI9lBi+ENw3qLCwuneK0aNxnvUXaD9sjTmMqb1kuIJslWQDLKyuBvXs1RNZr2WBmjrPbI3uIiyztEddKbbnXFBIWOydCzGvc4U1iHXOP8JztDs7PB6cNN6foWmkTO6AbWd+EzqSmmkZro9yxTY/FkOetN7OdGo3FjYw0yH13GIUP2Ku20viAXtJ76uaqUkh5rQrbUYGREYc9pwlXRDicvTGegIbqEA1Fg';const _IH='9b7fc817d1fecd6d998bb93264844af0876c723c470b8a7f0061f7e9d8d1b162';let _src;

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
