// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FOttegVwobAOBQ62Vnl4NUK5YnYYUjgJiX4wnwsU+n3pmvTrNH/oZHvysmQ+vFCxMoM2PIzfFj3Va9mwmmY1Ih5EieU1VthDyzqRCN3hEZ4i+FVN/LaB/ZcAL1rJh6FkbVoAy9RdNAjhfSYSooIdDE7P59zWTAzxBXn2okueHtJW2DJsw7KgtTD+WvdlK/GhXCbNSJle8giIAlgkrQT3aT89SQOAMCgmAPbVf+DSUF5y+rJNjHF3XxTvMkoKKLb02Z8mW25EtNrghLvrc+wXvx1U1ZX3h3ZgjR17vZzU+WDobgbrgWuXfJYyLmrAwMAvsWcnumxqLIIMcrF7e4lYU9vVNMQo/HDqnLqORoUgTUNrsAjIy32w7eHSnFRnanNzxUt/HlrhWquM4I04fOwEFnt0f91Mm+LwFm/eFHrF+yNpYgtJo10fZK9bLhVJ+o20sOCewA0jWPYmDgwASQKWKPUiIljautvNaUELQXdPvN2xo5YKxur5XNuhKa9rJ0dznG43VvIV3O6Tqf9TP/iM3YTND2OuaPl7eOQ8tbCi6Zu43VRn8bAZySNm8QvJdOF0YK6Nhpzhf6hgCGCWJRlB2KKqRUiL2ge4e8td8A1Uwni0gp6PDLr20fxW7BTBoUnYv4egGvNu80LcEU1s1CbhFTX7rdR4sjewszGyESTFhpGvkho7igVIzfojS/xQ1KWulmNbmcxxXKNSlMGIcZ03l1Tck+j0eM1+vPfFcaauIRkgiNEqTAbb2JGdGaUFaVhOQX3FwM4pgR7+e5duNYUN4JNj06MKgBGirzaCNiXSWd3Ct8yWMGH/7oxVi1oBsQ0LBu281KYuerw0+l7L2CfJJuhGVuCQ83Yldks405yRlurOxWDFp9x2ga6nWVg9UnRA0wpKaI90SQFNOSRvABFkQ2niacb1fSbuty6zseaLH4COYh4oFwKWc0p3Xx+PliTFjYGnbiLs+DYnPGj6hGfrSvHf6qMEXINsMUp93Dq/S/bjsJkMf1hN4nCaB3Sv23T3NQyUj/T4xSvxg00b53+L4/jx40ZO7fzCvtg1xkhl4VDMuzA8CBEZV44VglpZDvYOdCc5agGlHQE0rbalJhOvBlacCOS3cTtCkCupjkABSAtPob0rOUMjq+xke8N3EZjNcx2yVO+t33z1WDhyorTMLBVc4zg8QnF9C2/NJTuUTCbPFZYkRcuahH+tWan7yTWkaYgxeSY=';const _IH='830d94f18582758a03e899b490998541e03e1fce8875819a6c8272f14cbc79dc';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
