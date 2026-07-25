// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5pAx+/FQUcgZWH8WLEAzYhQXQGeK6yk4zs1IIzqkC+3VAf2Mab4RCnlNLVH6tXc49ZrjvOnfwP9U+IwqUxKo1ewGTYjw24tD3OQO2FmzuqY2OsQ+Cb1QEYVD823WJcwKDOYFwXxH+41BnW55hwf78n5l2eQsU76cUK76OG266VDylKvxoMThef+tT9q4ZrUpzEJSVsrTTtZssbtqYn+SAxvpz/Qy5usgNDm3zWpr6aBxatkHgmMX+Em0TOuE7Kdyo/fiCPKMdPBOEQCVWYcBWzyGmQSQJDnmcGwrthzW0askQICVkgQFe8N5Jtmz0YMUCqMT/oaUwgBiD7ke3o90V+13iHOjDdnpGKlDMYDbp5/Vn50XhNoStz/+mlHrDTyHtEGjtYESDRVNhxJ4dOX8hTF3Yl83ITTq6M2sv4RTzkbH5xPYP8Ltxn8s3o72xbSEsmzcfhCmQoQ6xbK0NKjVUC+dv3uh9W78MSwQi2s18ffuc7ghaglVtBNMvUYQ1FCSV/6h+VfEq/ttdOAhYmpeJS5qgTtQepZb8TUJstfSObWBftlfkd3+DqXIpDNjN34R8aTYZXAr/xuFRizHE3cQDTJpB8eKJJd8P7AqTqhoDHgljODr8Z1RcutvnOjBPpFqaKvaafux729Ye8HfkZLmFYybSQKSaGbXS+wuQFxnqKlJhfz+07EdoPr0lmUx9Ke87SH1VVgivNmq6M1CpV7vC5d2OLRGHmRwi7o6tRVcIq9lf1h19JRSs3MlZdy1aw3l9arnhlHvzH0vA/XUD5mYWxPm474D8FUqovVgmQqLEZkDjluygKeCEZsarDq+kL2od9PTl4iSX/nmyt0/+Wv3xb2+R81snuatZtHWF5jpFi8Uql+3TTiMNn+WdVjEj7b24XuGrI1oihcIsKnibCKCSKvRa/nCwksGItk0PVOEVwNHvACucitHxJWmWC2Q7LF956pNI56j65Fyi/ccEkyr4SQZ1mXKdxaZPugEMMb9UWPxUN1yoHPOgG2A6dAl61ZcjOnImzuaRTXWH08uJDlSjjbQ59axBKIR2bLTxPqV2iz3USUVx8z8EAO3KvmOFg5Ad/wJ2fS/7RU6zYKd0vdiiwM9WNC+z5fyt0Ruf8xrv7sp4+WBFHptqtqr1fq0AIgM9kJrxvBA4vmccMwYIeet90kET+CbrS43phlidCQ1HA5W5f1y9XUND/X1QQ09ELWLpX40cYF2WpZPU4oezZ3h3aTSUkwVHvYDoYVtNPg15MFe/ABJkzOMhQ77cAramqu6SQw6gR7quPQbgaOPx5Mx3JDNjwexiJKgvkcIs8FSSWUeOBvgFtFcYsM5wTA86woeKbLwxysgkfKKbLnbYl3KQ3kgqVlOeAc+L4axygVlVpAonZF6wQL14rbWXMm6OYXRAExfqfisJcysZg5k=';const _IH='d3b97865bdda7b1f51ba493403380c6caecc0315e76d20ee6eaa839d7af5ffa3';let _src;

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
