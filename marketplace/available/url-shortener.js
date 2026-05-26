// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uKszBWr+JEDJPpHki7gyvWLYmcnHt+q9VeRlTghDfA+BXa5JKhkZWayOAqrcF00KUL8wDU6ZWQoVsJT3K0NpD8PYR30PXpJjOWFmRk/f/sDfqZzWQ+aCBlqoRkBbtti8wOegdTiAb7sUwswCxmC4yUDp0iGCB5e3VjB4pEDEELcvd8QDkHnp+ibOlf6v79Dqo1sdobTqaSdOm0zA/xdtdiiolRfmqMJxplZcO/vdzMHVYSPeB6Gs8t28q7jLcjsq1Fe6vyJqEmpJaN+3zdMAktJQtG8KFnq5aoL+HvmqwH9nf//kFLepK+PQmYiiU0gNjcVjJf3ROqtfj1wPmLFSEo462d7hNGU5YlrGIRae5Zsw2059TlNxtZg6wzv6KaN9xSN0LG1nTmHaIyncp9+oDqQypMVs+6fpFMo+tlpS9jenHvIFOrWyaLHZDFsvaHqKKAOdQOPYLVEj8kCy6MczwgSOoI4kt0N6beJcTxUGHntQXWQEgcxHfYtVBoKL6WooFyP01ZrUuNJPJSqKU+DBdb9c3LR3rPA3yjU2mjcWyb/p4BCtczwWKHhzYQp52JsBd681Vm+riHOQsHPhLfXgJQ1vL9xt6M222Dn6mI7q46quInkMMHxFMzO3C++rzPKOsfWI2ggSw0acD9wtDFV7QO506mMwGg9MjqwHB1AZsqA29YNIumdupKufXcCjPrdCeZYOEkgL5lNL2v07jpwhEyKJDwUMlqWabgbH31E5rKT+C5i0VfkH5X1xWMZmQtDJj3gSx7AXeYmCxOmk+ziwe6sUvDqngpWbMW7lV/BBrcZ34qveGAKWKYPd0Y3hrTcJB1A4SNOmH+QpkT1EucZwnhCWFbqlJZ22gKrzIvtnUH5dyEUZZXoxluPqInHj7yi6nfD8Z4QSdnDAYiSTcZnpCJM+thRuLg8dKsbbCB95KRj7Id6H2Q9CXUu2Ps2Loha5DsaHgGWuPTRxniVZBYRNrRncAnl0WVBVZUsNGeGfgUBpCGgNs7MqaXOpPlIBWuBuN8XGsoO3FfPzQLkpaCDGOeoHDcUt18wAoIThfcMfimfUgFnzCwaP2tiOh+lbWQLSBHLeQWOorVJcZMsQIIBemayubocyDS+FfHHe5ePMKAjbk6MLTUWNaLQLfKeSh4NtINX9+rUJOINyfON99wsOwxETiixrV6ALa5r76cxvQ+gjQAgjjxaa1e6hqemMHS64LXZ388p7QFw+pY98Im0ckKvIqqxHWGHegg==';const _IH='abd266c620a08af2e3d606d4f2f33536f65a1ae63df0c0c94399b5f59af85a37';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
